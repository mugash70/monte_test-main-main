export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { id, value } = body

    if (!id || value === undefined) {
      throw createError({
        statusCode: 400,
        statusMessage: 'ID and value are required'
      })
    }

    // In a real app, this would update the database
    // For now, we'll just return success
    return { 
      success: true, 
      data: { 
        id: parseInt(id), 
        value,
        updatedAt: new Date()
      } 
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update translation'
    })
  }
})