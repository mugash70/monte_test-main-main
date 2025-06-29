// @ts-nocheck
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function selectLocales() {
  const translations = await prisma.translation.findMany({
    orderBy: [{ locale: 'asc' }, { key: 'asc' }]
  });
  
  console.log(`Found ${translations.length} translations:`);
  translations.forEach((t: any) => {
    console.log(`${t.locale}.${t.key}: ${t.value}`);
  });
  
  await prisma.$disconnect();
}

selectLocales().catch(console.error);