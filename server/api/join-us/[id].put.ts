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
      category,
      location,
      salary,
      contact,
      contactNumber,
      requirements,
      responsibilities,
      image,
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

    // Update the join us item
    const joinUsItem = await prisma.joinUs.update({
      where: { id },
      data: {
        ...(slug && { slug }),
        ...(title && { title }),
        ...(description !== undefined && { description }),
        ...(content && { content: JSON.stringify(content) }),
        ...(type && { type }),
        ...(category !== undefined && { category }),
        ...(location !== undefined && { location }),
        ...(salary !== undefined && { salary }),
        ...(contact !== undefined && { contact }),
        ...(contactNumber !== undefined && { contactNumber }),
        ...(requirements && { requirements: JSON.stringify(requirements) }),
        ...(responsibilities && { responsibilities: JSON.stringify(responsibilities) }),
        ...(image !== undefined && { image }),
        ...(published !== undefined && { published }),
        ...(locale && { locale }),
        updatedAt: new Date()
      }
    })

    return {
      success: true,
      data: joinUsItem
    }
  } catch (error: any) {
    console.error('Error updating join us item:', error)

    // Handle record not found
    if (error?.code === 'P2025') {
      return {
        success: false,
        error: 'Join us item not found'
      }
    }

    // Handle unique constraint violation
    if (error?.code === 'P2002') {
      return {
        success: false,
        error: 'A join us item with this slug already exists'
      }
    }
    
    return {
      success: false,
      error: 'Failed to update join us item'
    }
  } finally {
    await prisma.$disconnect()
  }
})
