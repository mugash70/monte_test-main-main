import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const idParam = getRouterParam(event, 'id')
    const id = parseInt(idParam || '')
    const body = await readBody(event)
    
    const {
      year,
      title,
      description,
      achievements,
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

    // Validate year if provided
    if (year !== undefined) {
      const yearInt = parseInt(year)
      if (isNaN(yearInt) || yearInt < 1900 || yearInt > new Date().getFullYear() + 10) {
        return {
          success: false,
          error: 'Invalid year provided'
        }
      }
    }

    // Update the development history item
    const developmentHistoryItem = await prisma.developmentHistory.update({
      where: { id },
      data: {
        ...(year !== undefined && { year: parseInt(year) }),
        ...(title && { title }),
        ...(description && { description }),
        ...(achievements && { achievements: JSON.stringify(achievements) }),
        ...(published !== undefined && { published }),
        ...(locale && { locale }),
        updatedAt: new Date()
      }
    })

    return {
      success: true,
      data: developmentHistoryItem
    }
  } catch (error: any) {
    console.error('Error updating development history item:', error)

    // Handle record not found
    if (error?.code === 'P2025') {
      return {
        success: false,
        error: 'Development history item not found'
      }
    }

    // Handle unique constraint violation
    if (error?.code === 'P2002') {
      return {
        success: false,
        error: 'A development history item for this year and locale already exists'
      }
    }
    
    return {
      success: false,
      error: 'Failed to update development history item'
    }
  } finally {
    await prisma.$disconnect()
  }
})
