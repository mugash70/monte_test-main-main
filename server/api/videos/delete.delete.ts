import { promises as fs } from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { path: videoPath } = body

    if (!videoPath) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Video path is required'
      })
    }

    // Construct full file path
    const publicDir = path.join(process.cwd(), 'public')
    const fullPath = path.join(publicDir, videoPath)

    // Security check: ensure the path is within public directory
    const resolvedPath = path.resolve(fullPath)
    const resolvedPublicDir = path.resolve(publicDir)
    
    if (!resolvedPath.startsWith(resolvedPublicDir)) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Access denied'
      })
    }

    // Check if file exists
    try {
      await fs.access(fullPath)
    } catch {
      throw createError({
        statusCode: 404,
        statusMessage: 'Video not found'
      })
    }

    // Delete the file
    await fs.unlink(fullPath)

    console.log(`Deleted video: ${videoPath}`)

    return {
      success: true,
      message: 'Video deleted successfully'
    }
  } catch (error: any) {
    console.error('Failed to delete video:', error)
    
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to delete video'
    })
  }
})
