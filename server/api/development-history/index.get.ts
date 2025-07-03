import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const page = parseInt(query.page as string) || 1
    const limit = parseInt(query.limit as string) || 10
    const search = query.search as string || ''
    const locale = query.locale as string || 'en'
    const year = query.year as string

    const skip = (page - 1) * limit

    // Build where clause
    const where: any = {
      published: true,
      locale: locale
    }

    // If year is provided, get all translations for that year
    if (year) {
      delete where.locale // Remove locale filter to get all translations
      where.year = parseInt(year)
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ]
    }

    // Get total count
    const total = await prisma.developmentHistory.count({ where })

    // Get paginated results
    const items = await prisma.developmentHistory.findMany({
      where,
      skip,
      take: limit,
      orderBy: { year: 'desc' }
    })

    // Parse JSON fields
    const processedItems = items.map(item => ({
      ...item,
      achievements: item.achievements ? JSON.parse(item.achievements) : []
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
    console.error('Error fetching development history items:', error)
    return {
      success: false,
      error: 'Failed to fetch development history items',
      data: []
    }
  } finally {
    await prisma.$disconnect()
  }
})
