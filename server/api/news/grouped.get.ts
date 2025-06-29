import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const page = parseInt(query.page as string) || 1
    const pageSize = parseInt(query.pageSize as string) || 10
    const published = query.published !== 'false'

    // Get all news items for all languages
    const allNews = await prisma.news.findMany({
      where: {
        published
      },
      include: {
        files: true
      },
      orderBy: {
        date: 'desc'
      }
    })

    // Group by slug
    const groupedNews = new Map()
    
    allNews.forEach(news => {
      if (!groupedNews.has(news.slug)) {
        groupedNews.set(news.slug, {
          slug: news.slug,
          date: news.date,
          source: news.source,
          totalViews: 0,
          translations: {}
        })
      }
      
      const group = groupedNews.get(news.slug)
      group.translations[news.locale] = {
        id: news.id,
        title: news.title,
        description: news.description,
        content: news.content,
        image: news.image,
        locale: news.locale,
        published: news.published,
        views: news.views,
        files: news.files
      }
      group.totalViews += news.views || 0
    })

    // Convert to array and sort by date
    const newsGroups = Array.from(groupedNews.values())
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    // Apply pagination to groups
    const total = newsGroups.length
    const paginatedGroups = newsGroups.slice((page - 1) * pageSize, page * pageSize)

    return {
      success: true,
      data: paginatedGroups,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize)
      }
    }
  } catch (error: any) {
    console.error('Failed to fetch grouped news:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch grouped news'
    })
  } finally {
    await prisma.$disconnect()
  }
})
