import { promises as fs } from 'fs';
import path from 'path';

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
    const mediaDir = path.join(publicDir, 'media');

    // Check if this is a replacement operation
    let replaceFile = null;
    for (const field of form) {
      if (field.name === 'replaceFile' && field.data) {
        replaceFile = field.data.toString();
        break;
      }
    }

    for (const file of form) {
      if (file.name === 'file' && file.filename && file.data) {
        // Get file extension
        const ext = path.extname(file.filename);
        const allowedExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.wmv', '.flv', '.mkv'];

        if (!allowedExtensions.includes(ext.toLowerCase())) {
          throw createError({
            statusCode: 400,
            statusMessage: `File type ${ext} not allowed. Allowed types: ${allowedExtensions.join(', ')}`
          });
        }

        let newFilename;
        let filePath;

        if (replaceFile) {
          // Replace existing file - keep the same name
          newFilename = replaceFile;
          filePath = path.join(mediaDir, newFilename);

          // Backup the original file
          const backupPath = path.join(mediaDir, `${replaceFile}.backup.${Date.now()}`);
          try {
            await fs.copyFile(filePath, backupPath);
            console.log(`Backed up original file to: ${backupPath}`);
          } catch (error) {
            console.log('No existing file to backup or backup failed:', error);
          }
        } else {
          // New file upload
          const originalName = path.parse(file.filename).name;
          newFilename = `${originalName}-${Date.now()}${ext}`;
          filePath = path.join(mediaDir, newFilename);
        }

        // Ensure media directory exists
        await fs.mkdir(path.dirname(filePath), { recursive: true });

        // Write file
        await fs.writeFile(filePath, file.data);

        uploadedFiles.push({
          originalName: file.filename,
          newName: newFilename,
          path: `/media/${newFilename}`,
          size: file.data.length,
          type: file.type || 'unknown',
          replaced: !!replaceFile
        });

        console.log(`${replaceFile ? 'Replaced' : 'Uploaded'} video: ${newFilename}`);
      }
    }

    return {
      success: true,
      files: uploadedFiles
    };
  } catch (error) {
    console.error('Error uploading videos:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to upload videos'
    });
  }
});
