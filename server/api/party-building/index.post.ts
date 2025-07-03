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
      locale = 'en',
      published = true,
      upsert = false,
      date
    } = body

    // Validate required fields
    if (!slug || !title) {
      return {
        success: false,
        error: 'Missing required fields: slug, title'
      }
    }

    // For upsert operations, we need to handle the unique slug constraint
    let partyBuildingItem

    if (upsert) {
      // First, try to find existing item with this slug and locale
      const existing = await prisma.partyBuilding.findFirst({
        where: { slug, locale }
      })

      if (existing) {
        // Update existing item
        partyBuildingItem = await prisma.partyBuilding.update({
          where: { id: existing.id },
          data: {
            title,
            description,
            content: content ? JSON.stringify(content) : null,
            mainImage,
            contentImages: contentImages ? JSON.stringify(contentImages) : null,
            source,
            date: date ? new Date(date) : undefined,
            views: parseInt(views) || 0,
            published,
            updatedAt: new Date()
          }
        })
      } else {
        // Create new item with unique slug for this locale
        const uniqueSlug = `${slug}-${locale}`
        partyBuildingItem = await prisma.partyBuilding.create({
          data: {
            slug: uniqueSlug,
            title,
            description,
            content: content ? JSON.stringify(content) : null,
            mainImage,
            contentImages: contentImages ? JSON.stringify(contentImages) : null,
            source,
            date: date ? new Date(date) : new Date(),
            views: parseInt(views) || 0,
            locale,
            published,
            updatedAt: new Date()
          }
        })
      }
    } else {
      // Regular create operation
      partyBuildingItem = await prisma.partyBuilding.create({
        data: {
          slug,
          title,
          description,
          content: content ? JSON.stringify(content) : null,
          mainImage,
          contentImages: contentImages ? JSON.stringify(contentImages) : null,
          source,
          date: date ? new Date(date) : new Date(),
          views: parseInt(views) || 0,
          locale,
          published,
          updatedAt: new Date()
        }
      })
    }

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
