import { PrismaClient } from '~/generated/prisma';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
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

    return {
      success: true,
      data: translationsByLocale
    };
  } catch (error) {
    console.error('Error fetching translations:', error);
    return {
      success: false,
      error: 'Failed to fetch translations from database',
      data: {}
    };
  }
});
