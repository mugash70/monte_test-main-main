import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const page = parseInt(query.page as string) || 1
    const pageSize = parseInt(query.pageSize as string) || 10
    const locale = query.locale as string || 'en'
    const type = query.type as string // 'video', 'image', 'pdf'

    const whereClause: any = {
      locale
    }

    if (type) {
      whereClause.type = type
    }

    // Get total count
    const total = await prisma.mediaMaterial.count({
      where: whereClause
    })

    // Get paginated media materials
    const materials = await prisma.mediaMaterial.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc'
      },
      skip: (page - 1) * pageSize,
      take: pageSize
    })

    // Ensure paths are accessible from public folder
    const processedMaterials = materials.map(material => ({
      ...material,
      path: material.path.startsWith('/') ? material.path : `/${material.path}`,
      thumbnailPath: material.thumbnailPath ? 
        (material.thumbnailPath.startsWith('/') ? material.thumbnailPath : `/${material.thumbnailPath}`) : 
        null
    }))

    return {
      success: true,
      data: processedMaterials,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize)
      }
    }
  } catch (error: any) {
    console.error('Failed to fetch media materials:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch media materials'
    })
  } finally {
    await prisma.$disconnect()
  }
})
