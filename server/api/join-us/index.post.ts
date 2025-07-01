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
      category,
      location,
      salary,
      contact,
      contactNumber,
      requirements,
      responsibilities,
      image,
      locale = 'en'
    } = body

    // Validate required fields
    if (!slug || !title || !type) {
      return {
        success: false,
        error: 'Missing required fields: slug, title, type'
      }
    }

    // Create the join us item
    const joinUsItem = await prisma.joinUs.create({
      data: {
        slug,
        title,
        description,
        content: content ? JSON.stringify(content) : null,
        type,
        category,
        location,
        salary,
        contact,
        contactNumber,
        requirements: requirements ? JSON.stringify(requirements) : null,
        responsibilities: responsibilities ? JSON.stringify(responsibilities) : null,
        image,
        locale,
        published: true,
        updatedAt: new Date()
      }
    })

    return {
      success: true,
      data: joinUsItem
    }
  } catch (error: any) {
    console.error('Error creating join us item:', error)

    // Handle unique constraint violation
    if (error?.code === 'P2002') {
      return {
        success: false,
        error: 'A join us item with this slug already exists'
      }
    }
    
    return {
      success: false,
      error: 'Failed to create join us item'
    }
  } finally {
    await prisma.$disconnect()
  }
})
