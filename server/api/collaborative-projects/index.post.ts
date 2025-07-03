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
      type,
      image,
      contactEmail,
      contactPhone,
      contactName,
      address,
      locale = 'en',
      published = true,
      upsert = false
    } = body

    // Validate required fields
    if (!slug || !title || !type) {
      return {
        success: false,
        error: 'Missing required fields: slug, title, type'
      }
    }

    // Validate email if provided
    if (contactEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(contactEmail)) {
        return {
          success: false,
          error: 'Invalid email format'
        }
      }
    }

    // For upsert operations, we need to handle the unique slug constraint
    let collaborativeProject

    if (upsert) {
      // First, try to find existing item with this slug and locale
      const existing = await prisma.collaborativeProject.findFirst({
        where: { slug, locale }
      })

      if (existing) {
        // Update existing item
        collaborativeProject = await prisma.collaborativeProject.update({
          where: { id: existing.id },
          data: {
            title,
            description,
            content: content ? JSON.stringify(content) : null,
            type,
            image,
            contactEmail,
            contactPhone,
            contactName,
            address,
            published,
            updatedAt: new Date()
          }
        })
      } else {
        // Create new item with unique slug for this locale
        const uniqueSlug = `${slug}-${locale}`
        collaborativeProject = await prisma.collaborativeProject.create({
          data: {
            slug: uniqueSlug,
            title,
            description,
            content: content ? JSON.stringify(content) : null,
            type,
            image,
            contactEmail,
            contactPhone,
            contactName,
            address,
            locale,
            published,
            updatedAt: new Date()
          }
        })
      }
    } else {
      // Regular create operation
      collaborativeProject = await prisma.collaborativeProject.create({
        data: {
          slug,
          title,
          description,
          content: content ? JSON.stringify(content) : null,
          type,
          image,
          contactEmail,
          contactPhone,
          contactName,
          address,
          locale,
          published,
          updatedAt: new Date()
        }
      })
    }

    return {
      success: true,
      data: collaborativeProject
    }
  } catch (error: any) {
    console.error('Error creating collaborative project:', error)

    // Handle unique constraint violation
    if (error?.code === 'P2002') {
      return {
        success: false,
        error: 'A collaborative project with this slug already exists'
      }
    }
    
    return {
      success: false,
      error: 'Failed to create collaborative project'
    }
  } finally {
    await prisma.$disconnect()
  }
})
