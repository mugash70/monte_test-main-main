import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const page = parseInt(query.page as string) || 1
    const pageSize = parseInt(query.pageSize as string) || 50
    const search = query.search as string || ''
    const searchType = query.searchType as string || 'all'

    let translations = []
    let total = 0

    if (search) {
      // Use raw SQL for case-insensitive search with SQLite
      const searchPattern = `%${search.toLowerCase()}%`

      if (searchType === 'keys') {
        // Search only in keys
        const countResult = await prisma.$queryRaw`
          SELECT COUNT(*) as count
          FROM Translation
          WHERE LOWER(key) LIKE ${searchPattern}
        ` as Array<{ count: bigint }>
        total = Number(countResult[0].count)

        translations = await prisma.$queryRaw`
          SELECT * FROM Translation
          WHERE LOWER(key) LIKE ${searchPattern}
          ORDER BY key ASC, locale ASC
          LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}
        ` as any[]
      } else if (searchType === 'values') {
        // Search only in values
        const countResult = await prisma.$queryRaw`
          SELECT COUNT(*) as count
          FROM Translation
          WHERE LOWER(value) LIKE ${searchPattern}
        ` as Array<{ count: bigint }>
        total = Number(countResult[0].count)

        translations = await prisma.$queryRaw`
          SELECT * FROM Translation
          WHERE LOWER(value) LIKE ${searchPattern}
          ORDER BY key ASC, locale ASC
          LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}
        ` as any[]
      } else {
        // Search in both keys and values
        const countResult = await prisma.$queryRaw`
          SELECT COUNT(*) as count
          FROM Translation
          WHERE LOWER(key) LIKE ${searchPattern} OR LOWER(value) LIKE ${searchPattern}
        ` as Array<{ count: bigint }>
        total = Number(countResult[0].count)

        translations = await prisma.$queryRaw`
          SELECT * FROM Translation
          WHERE LOWER(key) LIKE ${searchPattern} OR LOWER(value) LIKE ${searchPattern}
          ORDER BY key ASC, locale ASC
          LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}
        ` as any[]
      }
    } else {
      // No search - use regular Prisma queries
      total = await prisma.translation.count()
      translations = await prisma.translation.findMany({
        orderBy: [
          { key: 'asc' },
          { locale: 'asc' }
        ],
        skip: (page - 1) * pageSize,
        take: pageSize
      })
    }

    console.log(`Loaded ${translations.length} translations from database (page ${page}, total: ${total}, search: "${search}", type: ${searchType})`)

    return {
      data: translations,
      pagination: {
        page,
        pageSize,
        total: Number(total),
        totalPages: Math.ceil(Number(total) / pageSize)
      }
    }
  } catch (error: any) {
    console.error('Database error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch translations from database'
    })
  } finally {
    await prisma.$disconnect()
  }
})