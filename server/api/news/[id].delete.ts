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
        statusMessage: 'Invalid news ID'
      })
    }

    // Get news with files before deletion
    const news = await prisma.news.findUnique({
      where: { id },
      include: { files: true }
    })

    if (!news) {
      throw createError({
        statusCode: 404,
        statusMessage: 'News not found'
      })
    }

    // Delete associated files from filesystem
    const publicDir = path.join(process.cwd(), 'public')

    // Delete image file
    if (news.image) {
      try {
        await fs.unlink(path.join(publicDir, news.image))
      } catch (error) {
        console.warn('Failed to delete image file:', news.image)
      }
    }

    // Delete attachment files
    for (const file of news.files) {
      try {
        await fs.unlink(path.join(publicDir, file.path))
      } catch (error) {
        console.warn('Failed to delete file:', file.path)
      }
    }

    // Delete from database (cascade will handle files)
    await prisma.news.delete({
      where: { id }
    })

    return {
      success: true,
      message: 'News deleted successfully'
    }
  } catch (error: any) {
    console.error('Failed to delete news:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to delete news'
    })
  } finally {
    await prisma.$disconnect()
  }
})
