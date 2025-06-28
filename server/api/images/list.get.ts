import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  try {
    const publicDir = path.join(process.cwd(), 'public');
    const imageFolders = ['hero', 'backgrounds', 'media', 'icons', 'images'];
    const images = [];

    for (const folder of imageFolders) {
      const folderPath = path.join(publicDir, folder);

      try {
        const files = await fs.readdir(folderPath);

        for (const file of files) {
          const filePath = path.join(folderPath, file);
          const stats = await fs.stat(filePath);

          // Check if it's an image file
          if (stats.isFile() && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)) {
            images.push({
              name: file,
              folder: folder,
              path: `/${folder}/${file}`,
              url: `/${folder}/${file}`,
              size: stats.size,
              modified: stats.mtime,
              extension: path.extname(file).toLowerCase()
            });
          }
        }
      } catch (error: any) {
        console.warn(`Could not read folder ${folder}:`, error.message);
      }
    }

    // Sort by folder and name
    images.sort((a, b) => {
      if (a.folder !== b.folder) {
        return a.folder.localeCompare(b.folder);
      }
      return a.name.localeCompare(b.name);
    });

    console.log(`Found ${images.length} images across ${imageFolders.length} folders`);

    return {
      success: true,
      images,
      total: images.length
    };
  } catch (error) {
    console.error('Error listing images:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to list images'
    });
  }
});
