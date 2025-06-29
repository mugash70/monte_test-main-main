import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const page = parseInt(query.page as string) || 1
    const pageSize = parseInt(query.pageSize as string) || 10
    const type = query.type as string // 'video', 'image', 'pdf'
    const published = query.published !== 'false'

    const whereClause: any = {
      published
    }

    if (type && type !== 'all') {
      whereClause.type = type
    }

    // Get all media materials for all languages
    const allMedia = await prisma.mediaMaterial.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Group by originalName or filename
    const groupedMedia = new Map()
    
    allMedia.forEach(media => {
      const groupKey = media.originalName || media.filename
      
      if (!groupedMedia.has(groupKey)) {
        groupedMedia.set(groupKey, {
          key: groupKey,
          type: media.type,
          filename: media.filename,
          path: media.path,
          createdAt: media.createdAt,
          translations: {}
        })
      }
      
      const group = groupedMedia.get(groupKey)
      group.translations[media.locale] = {
        id: media.id,
        title: media.title,
        description: media.description,
        type: media.type,
        filename: media.filename,
        originalName: media.originalName,
        path: media.path,
        locale: media.locale,
        published: media.published,
        createdAt: media.createdAt
      }
    })

    // Convert to array and sort by creation date
    const mediaGroups = Array.from(groupedMedia.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    // Apply pagination to groups
    const total = mediaGroups.length
    const paginatedGroups = mediaGroups.slice((page - 1) * pageSize, page * pageSize)

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
    console.error('Failed to fetch grouped media materials:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch grouped media materials'
    })
  } finally {
    await prisma.$disconnect()
  }
})
