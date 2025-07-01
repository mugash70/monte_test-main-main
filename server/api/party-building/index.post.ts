import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    const {
      slug,
      title,
      description,
      content,
      mainImage,
      contentImages,
      source,
      views = 0,
      locale = 'en'
    } = body

    // Validate required fields
    if (!slug || !title) {
      return {
        success: false,
        error: 'Missing required fields: slug, title'
      }
    }

    // Create the party building item
    const partyBuildingItem = await prisma.partyBuilding.create({
      data: {
        slug,
        title,
        description,
        content: content ? JSON.stringify(content) : null,
        mainImage,
        contentImages: contentImages ? JSON.stringify(contentImages) : null,
        source,
        views: parseInt(views) || 0,
        locale,
        published: true,
        updatedAt: new Date()
      }
    })

    return {
      success: true,
      data: partyBuildingItem
    }
  } catch (error: any) {
    console.error('Error creating party building item:', error)

    // Handle unique constraint violation
    if (error?.code === 'P2002') {
      return {
        success: false,
        error: 'A party building item with this slug already exists'
      }
    }
    
    return {
      success: false,
      error: 'Failed to create party building item'
    }
  } finally {
    await prisma.$disconnect()
  }
})
