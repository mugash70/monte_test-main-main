import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const idParam = getRouterParam(event, 'id')
    const id = parseInt(idParam || '')
    const body = await readBody(event)
    
    const {
      slug,
      title,
      description,
      content,
      mainImage,
      contentImages,
      source,
      views,
      published,
      locale
    } = body

    // Validate ID
    if (!id || isNaN(id)) {
      return {
        success: false,
        error: 'Invalid ID provided'
      }
    }

    // Update the party building item
    const partyBuildingItem = await prisma.partyBuilding.update({
      where: { id },
      data: {
        ...(slug && { slug }),
        ...(title && { title }),
        ...(description !== undefined && { description }),
        ...(content && { content: JSON.stringify(content) }),
        ...(mainImage !== undefined && { mainImage }),
        ...(contentImages && { contentImages: JSON.stringify(contentImages) }),
        ...(source !== undefined && { source }),
        ...(views !== undefined && { views: parseInt(views) || 0 }),
        ...(published !== undefined && { published }),
        ...(locale && { locale }),
        updatedAt: new Date()
      }
    })

    return {
      success: true,
      data: partyBuildingItem
    }
  } catch (error: any) {
    console.error('Error updating party building item:', error)

    // Handle record not found
    if (error?.code === 'P2025') {
      return {
        success: false,
        error: 'Party building item not found'
      }
    }

    // Handle unique constraint violation
    if (error?.code === 'P2002') {
      return {
        success: false,
        error: 'A party building item with this slug already exists'
      }
    }
    
    return {
      success: false,
      error: 'Failed to update party building item'
    }
  } finally {
    await prisma.$disconnect()
  }
})
