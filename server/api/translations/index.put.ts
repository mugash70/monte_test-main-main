import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { id, value } = body;

    if (!id || value === undefined) {
      throw createError({
        statusCode: 400,
        statusMessage: 'ID and value are required'
      });
    }

    // Update the translation
    const updatedTranslation = await prisma.translation.update({
      where: { id: parseInt(id) },
      data: { value }
    });

    return {
      success: true,
      data: updatedTranslation
    };
  } catch (error) {
    console.error('Error updating translation:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update translation'
    });
  }
});
