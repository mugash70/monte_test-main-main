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

    // Delete the party building item
    await prisma.partyBuilding.delete({
      where: { id }
    })

    return {
      success: true,
      message: 'Party building item deleted successfully'
    }
  } catch (error: any) {
    console.error('Error deleting party building item:', error)

    // Handle record not found
    if (error?.code === 'P2025') {
      return {
        success: false,
        error: 'Party building item not found'
      }
    }
    
    return {
      success: false,
      error: 'Failed to delete party building item'
    }
  } finally {
    await prisma.$disconnect()
  }
})
