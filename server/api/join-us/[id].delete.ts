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

    // Delete the join us item
    await prisma.joinUs.delete({
      where: { id }
    })

    return {
      success: true,
      message: 'Join us item deleted successfully'
    }
  } catch (error: any) {
    console.error('Error deleting join us item:', error)

    // Handle record not found
    if (error?.code === 'P2025') {
      return {
        success: false,
        error: 'Join us item not found'
      }
    }

    return {
      success: false,
      error: 'Failed to delete join us item'
    }
  } finally {
    await prisma.$disconnect()
  }
})
