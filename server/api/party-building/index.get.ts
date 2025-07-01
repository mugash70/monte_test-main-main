import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const page = parseInt(query.page as string) || 1
    const limit = parseInt(query.limit as string) || 10
    const search = query.search as string || ''
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
        { source: { contains: search, mode: 'insensitive' } }
      ]
    }

    // Get total count
    const total = await prisma.partyBuilding.count({ where })

    // Get paginated results
    const items = await prisma.partyBuilding.findMany({
      where,
      skip,
      take: limit,
      orderBy: { date: 'desc' }
    })

    // Parse JSON fields
    const processedItems = items.map(item => ({
      ...item,
      content: item.content ? JSON.parse(item.content) : [],
      contentImages: item.contentImages ? JSON.parse(item.contentImages) : []
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
    console.error('Error fetching party building items:', error)
    return {
      success: false,
      error: 'Failed to fetch party building items',
      data: []
    }
  } finally {
    await prisma.$disconnect()
  }
})
