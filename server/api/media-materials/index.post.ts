import { PrismaClient } from '@prisma/client'
import { readMultipartFormData } from 'h3'
import { promises as fs } from 'fs'
import path from 'path'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const form = await readMultipartFormData(event)
    
    if (!form) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No form data received'
      })
    }

    let materialData: any = {}
    let mediaFile: any = null

    // Parse form data
    for (const field of form) {
      if (field.name === 'data' && field.data) {
        materialData = JSON.parse(field.data.toString())
      } else if (field.name === 'file' && field.filename && field.data) {
        mediaFile = field
      }
    }

    // Validate required fields
    if (!materialData.title || !mediaFile) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Title and file are required'
      })
    }

    // Determine file type
    const mimeType = mediaFile.type || 'application/octet-stream'
    let fileType = 'pdf'
    
    if (mimeType.startsWith('video/')) {
      fileType = 'video'
    } else if (mimeType.startsWith('image/')) {
      fileType = 'image'
    }

    // Create directory based on type
    const publicDir = path.join(process.cwd(), 'public')
    const typeDir = path.join(publicDir, `media-${fileType}s`)
    
    await fs.mkdir(typeDir, { recursive: true })

    // Generate filename
    const ext = path.extname(mediaFile.filename)
    const timestamp = Date.now()
    const filename = `${materialData.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${timestamp}${ext}`
    const filePath = path.join(typeDir, filename)
    
    // Save file
    await fs.writeFile(filePath, mediaFile.data)
    const publicPath = `/media-${fileType}s/${filename}`

    // For videos and images, try to get dimensions
    let dimensions = null
    let duration = null

    // Create media material entry
    const material = await prisma.mediaMaterial.create({
      data: {
        title: materialData.title,
        description: materialData.description || null,
        type: fileType,
        filename,
        originalName: mediaFile.filename,
        path: publicPath,
        size: mediaFile.data.length,
        mimeType,
        dimensions,
        duration,
        locale: materialData.locale || 'en',
        published: materialData.published !== false
      }
    })

    return {
      success: true,
      data: material
    }
  } catch (error: any) {
    console.error('Failed to create media material:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to create media material'
    })
  } finally {
    await prisma.$disconnect()
  }
})
