import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
  try {
    const publicDir = path.join(process.cwd(), 'public');
    const mediaDir = path.join(publicDir, 'media');

    // Ensure media directory exists
    try {
      await fs.access(mediaDir);
    } catch {
      await fs.mkdir(mediaDir, { recursive: true });
      return { success: true, videos: [] };
    }

    // Read all files in media directory
    const files = await fs.readdir(mediaDir, { withFileTypes: true });

    const videos = [];
    for (const file of files) {
      if (file.isFile()) {
        const ext = path.extname(file.name).toLowerCase();
        const allowedExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.wmv', '.flv', '.mkv'];

        if (allowedExtensions.includes(ext)) {
          const filePath = path.join(mediaDir, file.name);
          const stats = await fs.stat(filePath);

          videos.push({
            name: file.name,
            path: `/media/${file.name}`,
            size: stats.size,
            modified: stats.mtime,
            extension: ext
          });
        }
      }
    }

    // Sort by modification date (newest first)
    videos.sort((a, b) => new Date(b.modified).getTime() - new Date(a.modified).getTime());

    return {
      success: true,
      videos
    };
  } catch (error) {
    console.error('Error listing videos:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to list videos'
    });
  }
});
