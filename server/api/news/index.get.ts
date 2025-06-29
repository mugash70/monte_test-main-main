import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const page = parseInt(query.page as string) || 1
    const pageSize = parseInt(query.pageSize as string) || 10
    const locale = query.locale as string || 'en'
    // const published = query.published !== 'false'

    // Get total count
    const total = await prisma.news.count({
      where: {
        locale
        // published
      }
    })

    // Get paginated news
    const news = await prisma.news.findMany({
      where: {
        locale
        // published
      },
      include: {
        files: true
      },
      orderBy: {
        date: 'desc'
      },
      skip: (page - 1) * pageSize,
      take: pageSize
    })

    return {
      success: true,
      data: news,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize)
      }
    }
  } catch (error: any) {
    console.error('Failed to fetch news:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch news'
    })
  } finally {
    await prisma.$disconnect()
  }
})
