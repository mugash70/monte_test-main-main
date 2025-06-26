import en from './locales/en.json';
import mn from './locales/mn.json';
import ch from './locales/ch.json';
import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

export default defineI18nConfig(async () => {
  let defaultLocale = 'en';
  
  try {
    const locales = await prisma.translation.findMany({
      select: { locale: true },
      distinct: ['locale']
    });
    
    if (locales.length > 0) {
      defaultLocale = locales[0].locale;
    }
  } catch (error) {
    console.warn('Failed to fetch locale from database, using default');
  }
  
  return {
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages: {
      en,
      mn,
      ch,
    },
    silentTranslationWarn: true,
    silentFallbackWarn: true,
    missingWarn: false,
    fallbackWarn: false
  };
})