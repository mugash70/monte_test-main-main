import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { key, locale, value } = body

    if (!key || !locale || !value) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Key, locale, and value are required'
      })
    }

    // Create new translation
    const newTranslation = await prisma.translation.create({
      data: {
        key,
        locale,
        value
      }
    })

    console.log(`Created new translation: ${key} (${locale}) - ID: ${newTranslation.id}`)

    return {
      success: true,
      translation: newTranslation
    }
  } catch (error: any) {
    console.error('Database error:', error)
    
    if (error.code === 'P2002') {
      throw createError({
        statusCode: 409,
        statusMessage: 'Translation already exists for this key and locale'
      })
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to create translation'
    })
  } finally {
    await prisma.$disconnect()
  }
})
