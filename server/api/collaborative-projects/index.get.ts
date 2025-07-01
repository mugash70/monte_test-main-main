import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const page = parseInt(query.page as string) || 1
    const limit = parseInt(query.limit as string) || 10
    const search = query.search as string || ''
    const type = query.type as string || 'all'
    const locale = query.locale as string || 'en'
    const slug = query.slug as string

    const skip = (page - 1) * limit

    // Build where clause
    const where: any = {
      published: true,
      locale: locale
    }

    // If slug is provided, get all translations for that slug
    if (slug) {
      delete where.locale // Remove locale filter to get all translations
      where.slug = slug
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { contactName: { contains: search, mode: 'insensitive' } }
      ]
    }

    if (type !== 'all') {
      where.type = type
    }

    // Get total count
    const total = await prisma.collaborativeProject.count({ where })

    // Get paginated results
    const items = await prisma.collaborativeProject.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' }
    })

    // Parse JSON fields
    const processedItems = items.map(item => ({
      ...item,
      content: item.content ? JSON.parse(item.content) : []
    }))

    return {
      success: true,
      data: processedItems,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    }
  } catch (error) {
    console.error('Error fetching collaborative projects:', error)
    return {
      success: false,
      error: 'Failed to fetch collaborative projects',
      data: []
    }
  } finally {
    await prisma.$disconnect()
  }
})
