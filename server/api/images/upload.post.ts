import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export default defineEventHandler(async (event) => {
  try {
    const form = await readMultipartFormData(event);

    if (!form || form.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No files uploaded'
      });
    }

    const uploadedFiles = [];
    const publicDir = path.join(process.cwd(), 'public');

    // Get form fields
    let folder = 'images';
    let replaceFile = null;

    for (const field of form) {
      if (field.name === 'folder' && field.data) {
        folder = field.data.toString();
      }
      if (field.name === 'replaceFile' && field.data) {
        replaceFile = field.data.toString();
      }
    }

    for (const file of form) {
      if (file.name === 'file' && file.filename && file.data) {
        // Get file extension
        const ext = path.extname(file.filename);
        const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

        if (!allowedExtensions.includes(ext.toLowerCase())) {
          throw createError({
            statusCode: 400,
            statusMessage: `File type ${ext} not allowed. Allowed types: ${allowedExtensions.join(', ')}`
          });
        }

        // Determine filename
        let newFilename;
        if (replaceFile) {
          // Replace existing file with same name
          newFilename = replaceFile;
        } else {
          // Generate new filename
          const originalName = path.parse(file.filename).name;
          newFilename = `${originalName}-${Date.now()}${ext}`;
        }

        const targetDir = path.join(publicDir, folder);
        const filePath = path.join(targetDir, newFilename);

        // Ensure target directory exists
        await fs.mkdir(targetDir, { recursive: true });

        // Write file (this will overwrite if replacing)
        await fs.writeFile(filePath, file.data);

        uploadedFiles.push({
          originalName: file.filename,
          newName: newFilename,
          path: `/${folder}/${newFilename}`,
          size: file.data.length,
          type: file.type || 'unknown',
          folder: folder,
          replaced: !!replaceFile
        });

        console.log(`Image ${replaceFile ? 'replaced' : 'uploaded'}: /${folder}/${newFilename}`);
      }
    }

    return {
      success: true,
      files: uploadedFiles
    };
  } catch (error: any) {
    console.error('Error uploading files:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to upload files'
    });
  }
});
