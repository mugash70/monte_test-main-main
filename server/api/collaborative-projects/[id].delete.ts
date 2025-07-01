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

    // Delete the collaborative project
    await prisma.collaborativeProject.delete({
      where: { id }
    })

    return {
      success: true,
      message: 'Collaborative project deleted successfully'
    }
  } catch (error: any) {
    console.error('Error deleting collaborative project:', error)

    // Handle record not found
    if (error?.code === 'P2025') {
      return {
        success: false,
        error: 'Collaborative project not found'
      }
    }
    
    return {
      success: false,
      error: 'Failed to delete collaborative project'
    }
  } finally {
    await prisma.$disconnect()
  }
})
