import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    const {
      year,
      title,
      description,
      achievements,
      locale = 'en'
    } = body

    // Validate required fields
    if (!year || !title || !description) {
      return {
        success: false,
        error: 'Missing required fields: year, title, description'
      }
    }

    // Validate year
    const yearInt = parseInt(year)
    if (isNaN(yearInt) || yearInt < 1900 || yearInt > new Date().getFullYear() + 10) {
      return {
        success: false,
        error: 'Invalid year provided'
      }
    }

    // Create the development history item
    const developmentHistoryItem = await prisma.developmentHistory.create({
      data: {
        year: yearInt,
        title,
        description,
        achievements: achievements ? JSON.stringify(achievements) : null,
        locale,
        published: true,
        updatedAt: new Date()
      }
    })

    return {
      success: true,
      data: developmentHistoryItem
    }
  } catch (error: any) {
    console.error('Error creating development history item:', error)

    // Handle unique constraint violation
    if (error?.code === 'P2002') {
      return {
        success: false,
        error: 'A development history item for this year and locale already exists'
      }
    }
    
    return {
      success: false,
      error: 'Failed to create development history item'
    }
  } finally {
    await prisma.$disconnect()
  }
})
