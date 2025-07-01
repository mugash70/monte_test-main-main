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
      locale = 'en'
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

    // Create the collaborative project
    const collaborativeProject = await prisma.collaborativeProject.create({
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
        published: true,
        updatedAt: new Date()
      }
    })

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
