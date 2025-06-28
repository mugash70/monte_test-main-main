import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = parseInt(getRouterParam(event, 'id') || '0')
    const body = await readBody(event)
    const { value } = body

    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Translation ID is required'
      })
    }

    if (value === undefined) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Translation value is required'
      })
    }

    // Update the specific translation by ID
    const updatedTranslation = await prisma.translation.update({
      where: {
        id: id
      },
      data: {
        value: value
      }
    })

    console.log(`Updated translation ID ${id}: ${updatedTranslation.key} (${updatedTranslation.locale})`)

    return {
      success: true,
      translation: updatedTranslation
    }
  } catch (error: any) {
    console.error('Database error:', error)
    
    if (error.code === 'P2025') {
      throw createError({
        statusCode: 404,
        statusMessage: 'Translation not found'
      })
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update translation'
    })
  } finally {
    await prisma.$disconnect()
  }
})
