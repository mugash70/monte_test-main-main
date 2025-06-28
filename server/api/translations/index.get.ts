import { PrismaClient } from '~/generated/prisma';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const page = parseInt(query.page as string) || 1;
    const pageSize = parseInt(query.pageSize as string) || 10;
    const search = query.search as string || '';

    // Build where clause for search
    const where = search ? {
      key: {
        contains: search,
        mode: 'insensitive' as const
      }
    } : {};

    // Get total count
    const total = await prisma.translation.count({ where });
    const totalPages = Math.ceil(total / pageSize);

    // Get translations with pagination
    const translations = await prisma.translation.findMany({
      where,
      orderBy: [
        { key: 'asc' },
        { locale: 'asc' }
      ],
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return {
      data: translations,
      pagination: {
        page,
        pageSize,
        total,
        totalPages
      }
    };
  } catch (error) {
    console.error('Error fetching translations:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch translations'
    });
  }
});
