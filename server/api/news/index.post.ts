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

    let newsData: any = {}
    let imageFile: any = null
    let attachmentFiles: any[] = []

    // Parse form data
    for (const field of form) {
      if (field.name === 'data' && field.data) {
        newsData = JSON.parse(field.data.toString())
      } else if (field.name === 'image' && field.filename && field.data) {
        imageFile = field
      } else if (field.name === 'files' && field.filename && field.data) {
        attachmentFiles.push(field)
      }
    }

    // Validate required fields
    if (!newsData.title || !newsData.description) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Title and description are required'
      })
    }

    // Generate slug from title
    const slug = newsData.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-') + '-' + Date.now()

    let imagePath = null

    // Handle image upload
    if (imageFile) {
      const publicDir = path.join(process.cwd(), 'public')
      const newsImagesDir = path.join(publicDir, 'news-images')
      
      await fs.mkdir(newsImagesDir, { recursive: true })
      
      const ext = path.extname(imageFile.filename)
      const filename = `${slug}${ext}`
      const filePath = path.join(newsImagesDir, filename)
      
      await fs.writeFile(filePath, imageFile.data)
      imagePath = `/news-images/${filename}`
    }

    // Create news entry
    const news = await prisma.news.create({
      data: {
        slug,
        title: newsData.title,
        description: newsData.description,
        content: newsData.content || null,
        image: imagePath,
        source: newsData.source || null,
        locale: newsData.locale || 'en',
        published: newsData.published !== false
      }
    })

    // Handle file attachments
    if (attachmentFiles.length > 0) {
      const publicDir = path.join(process.cwd(), 'public')
      const newsFilesDir = path.join(publicDir, 'news-files')
      
      await fs.mkdir(newsFilesDir, { recursive: true })

      for (const file of attachmentFiles) {
        const ext = path.extname(file.filename)
        const filename = `${slug}-${Date.now()}${ext}`
        const filePath = path.join(newsFilesDir, filename)
        
        await fs.writeFile(filePath, file.data)

        await prisma.newsFile.create({
          data: {
            newsId: news.id,
            filename,
            originalName: file.filename,
            path: `/news-files/${filename}`,
            size: file.data.length,
            mimeType: file.type || 'application/octet-stream'
          }
        })
      }
    }

    return {
      success: true,
      data: news
    }
  } catch (error: any) {
    console.error('Failed to create news:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to create news'
    })
  } finally {
    await prisma.$disconnect()
  }
})
