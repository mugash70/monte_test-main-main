import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const idParam = getRouterParam(event, 'id')
    const id = parseInt(idParam || '')

    // Validate ID
    if (!id || isNaN(id)) {
      return {
        success: false,
        error: 'Invalid ID provided'
      }
    }

    // Delete the development history item
    await prisma.developmentHistory.delete({
      where: { id }
    })

    return {
      success: true,
      message: 'Development history item deleted successfully'
    }
  } catch (error: any) {
    console.error('Error deleting development history item:', error)

    // Handle record not found
    if (error?.code === 'P2025') {
      return {
        success: false,
        error: 'Development history item not found'
      }
    }
    
    return {
      success: false,
      error: 'Failed to delete development history item'
    }
  } finally {
    await prisma.$disconnect()
  }
})
