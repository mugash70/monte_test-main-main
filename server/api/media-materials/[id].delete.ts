import { PrismaClient } from '@prisma/client'
import { promises as fs } from 'fs'
import path from 'path'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = parseInt(getRouterParam(event, 'id') as string)

    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid media material ID'
      })
    }

    // Get media material before deletion
    const material = await prisma.mediaMaterial.findUnique({
      where: { id }
    })

    if (!material) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Media material not found'
      })
    }

    // Delete file from filesystem
    const publicDir = path.join(process.cwd(), 'public')
    try {
      await fs.unlink(path.join(publicDir, material.path))
    } catch (error) {
      console.warn('Failed to delete file:', material.path)
    }

    // Delete thumbnail if exists
    if (material.thumbnailPath) {
      try {
        await fs.unlink(path.join(publicDir, material.thumbnailPath))
      } catch (error) {
        console.warn('Failed to delete thumbnail:', material.thumbnailPath)
      }
    }

    // Delete from database
    await prisma.mediaMaterial.delete({
      where: { id }
    })

    return {
      success: true,
      message: 'Media material deleted successfully'
    }
  } catch (error: any) {
    console.error('Failed to delete media material:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to delete media material'
    })
  } finally {
    await prisma.$disconnect()
  }
})
