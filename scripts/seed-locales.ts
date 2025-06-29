// scripts/seed-locales.ts
import { PrismaClient } from '../generated/prisma';
import fs from 'fs/promises';
const prisma = new PrismaClient();

async function seedLocales(locale: string, path: string): Promise<void> {
  const raw = await fs.readFile(path, 'utf-8');
  const json = JSON.parse(raw);

  function flatten(obj: any, prefix = ''): [string, any][] {
    return Object.entries(obj).flatMap(([k, v]) =>
      typeof v === 'object'
        ? flatten(v, `${prefix}${k}.`)
        : [[`${prefix}${k}`, v]]
    );
  }

  const entries = flatten(json);
  for (const [key, value] of entries) {
    await prisma.translation.upsert({
      where: { locale_key: { locale, key } },
      update: { value: String(value) },
      create: { locale, key, value: String(value) }
    });
  }
}

await seedLocales('en', 'locales/en.json');
await seedLocales('mn', 'locales/mn.json');
await seedLocales('ch', 'locales/ch.json');

