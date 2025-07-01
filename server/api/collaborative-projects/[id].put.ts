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
      type,
      image,
      contactEmail,
      contactPhone,
      contactName,
      address,
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

    // Update the collaborative project
    const collaborativeProject = await prisma.collaborativeProject.update({
      where: { id },
      data: {
        ...(slug && { slug }),
        ...(title && { title }),
        ...(description !== undefined && { description }),
        ...(content && { content: JSON.stringify(content) }),
        ...(type && { type }),
        ...(image !== undefined && { image }),
        ...(contactEmail !== undefined && { contactEmail }),
        ...(contactPhone !== undefined && { contactPhone }),
        ...(contactName !== undefined && { contactName }),
        ...(address !== undefined && { address }),
        ...(published !== undefined && { published }),
        ...(locale && { locale }),
        updatedAt: new Date()
      }
    })

    return {
      success: true,
      data: collaborativeProject
    }
  } catch (error: any) {
    console.error('Error updating collaborative project:', error)

    // Handle record not found
    if (error?.code === 'P2025') {
      return {
        success: false,
        error: 'Collaborative project not found'
      }
    }

    // Handle unique constraint violation
    if (error?.code === 'P2002') {
      return {
        success: false,
        error: 'A collaborative project with this slug already exists'
      }
    }
    
    return {
      success: false,
      error: 'Failed to update collaborative project'
    }
  } finally {
    await prisma.$disconnect()
  }
})
