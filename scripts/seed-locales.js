// scripts/seed-locales.js
import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';
const prisma = new PrismaClient();

async function seedLocales(locale, path) {
  try {
    console.log(`🌐 Seeding ${locale} translations from ${path}...`);
    
    const raw = await fs.readFile(path, 'utf-8');
    const json = JSON.parse(raw);

    function flatten(obj, prefix = '') {
      return Object.entries(obj).flatMap(([k, v]) =>
        typeof v === 'object' && v !== null
          ? flatten(v, `${prefix}${k}.`)
          : [[`${prefix}${k}`, v]]
      );
    }

    const entries = flatten(json);
    console.log(`📝 Found ${entries.length} translation keys for ${locale}`);
    
    let created = 0;
    let updated = 0;
    
    for (const [key, value] of entries) {
      try {
        // Check if translation already exists
        const existing = await prisma.translation.findFirst({
          where: { locale, key }
        });

        await prisma.translation.upsert({
          where: {
            locale_key: {
              locale,
              key
            }
          },
          update: {
            value: String(value)
          },
          create: {
            locale,
            key,
            value: String(value)
          }
        });

        // Track created vs updated
        if (existing) {
          updated++;
        } else {
          created++;
        }
      } catch (error) {
        console.error(`❌ Error processing key "${key}" for locale "${locale}":`, error.message);
      }
    }
    
    console.log(`✅ ${locale} seeding complete: ${created} created, ${updated} updated`);
  } catch (error) {
    console.error(`❌ Error seeding ${locale} from ${path}:`, error.message);
    throw error;
  }
}

async function main() {
  try {
    console.log('🚀 Starting locale seeding process...');
    
    // Check if locale files exist
    const localeFiles = [
      { locale: 'en', path: 'locales/en.json' },
      { locale: 'mn', path: 'locales/mn.json' },
      { locale: 'ch', path: 'locales/ch.json' }
    ];
    
    for (const { locale, path } of localeFiles) {
      try {
        await fs.access(path);
        await seedLocales(locale, path);
      } catch (error) {
        if (error.code === 'ENOENT') {
          console.log(`⚠️  Locale file ${path} not found, skipping ${locale}`);
        } else {
          throw error;
        }
      }
    }
    
    // Show final statistics
    const stats = await prisma.translation.groupBy({
      by: ['locale'],
      _count: {
        id: true
      }
    });
    
    console.log('\n📊 Final translation statistics:');
    for (const stat of stats) {
      console.log(`   ${stat.locale}: ${stat._count.id} translations`);
    }
    
    const total = await prisma.translation.count();
    console.log(`   Total: ${total} translations across all locales`);
    
    console.log('\n🎉 Locale seeding completed successfully!');
  } catch (error) {
    console.error('💥 Seeding failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seeding
main();
