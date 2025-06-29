// Server-side plugin to load translations from database
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineNuxtPlugin(async () => {
  const { $i18n } = useNuxtApp();
  
  // Helper function to convert flat key-value pairs to nested object
  function buildNestedObject(translations: Array<{ key: string; value: string }>): Record<string, any> {
    const result: Record<string, any> = {};
    
    for (const { key, value } of translations) {
      const keys = key.split('.');
      let current = result;
      
      for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        if (!(k in current)) {
          current[k] = {};
        }
        current = current[k];
      }
      
      current[keys[keys.length - 1]] = value;
    }
    
    return result;
  }
  
  try {
    // Get all translations from database
    const translations = await prisma.translation.findMany({
      select: { locale: true, key: true, value: true },
      orderBy: [{ locale: 'asc' }, { key: 'asc' }]
    });

    // Group translations by locale
    const translationsByLocale: Record<string, Array<{ key: string; value: string }>> = {};
    
    for (const translation of translations) {
      if (!translationsByLocale[translation.locale]) {
        translationsByLocale[translation.locale] = [];
      }
      translationsByLocale[translation.locale].push({
        key: translation.key,
        value: translation.value
      });
    }
    
    // Load messages for each locale
    for (const [locale, localeTranslations] of Object.entries(translationsByLocale)) {
      if (['en', 'mn', 'ch'].includes(locale)) {
        const nestedMessages = buildNestedObject(localeTranslations);
        
        // Set messages for this locale
        $i18n.setLocaleMessage(locale, nestedMessages);
      }
    }
    
    console.log('✅ Translations loaded from database (server-side)');
  } catch (error) {
    console.warn('❌ Failed to load translations from database (server-side):', error);
  }
});
