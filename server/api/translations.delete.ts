import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { key } = body

    if (!key) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Translation key is required'
      })
    }

    // Delete all translations for this key (all locales)
    const result = await prisma.translation.deleteMany({
      where: {
        key: key
      }
    })

    console.log(`Deleted ${result.count} translations for key: ${key}`)

    return {
      success: true,
      message: `Deleted ${result.count} translations for key: ${key}`,
      deletedCount: result.count
    }
  } catch (error: any) {
    console.error('Failed to delete translation key:', error)

    if (error.statusCode) {
      throw error
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to delete translation key'
    })
  } finally {
    await prisma.$disconnect()
  }
})
