// Mock API for scanning translations
import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
  try {
    // Mock translation keys
    const mockKeys = [
      'welcome.title',
      'welcome.subtitle', 
      'navigation.home',
      'navigation.about',
      'navigation.contact',
      'footer.copyright',
      'products.title',
      'products.coal.description',
      'company.about.mission',
      'responsibility.top.description'
    ]
    
    // Initialize result object
    const result: Record<string, string[]> = {}
    mockKeys.forEach((key: string) => {
      result[key] = []
    })
    
    // Define directories to scan
    const rootDir = path.resolve('.')
    const dirsToScan = [
      'pages',
      'components',
      'layouts'
    ]
    
    // Scan files for translation keys
    for (const dir of dirsToScan) {
      const dirPath = path.join(rootDir, dir)
      if (fs.existsSync(dirPath)) {
        await scanDirectory(dirPath, mockKeys, result)
      }
    }
    
    return result
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to scan translations'
    })
  }
})

async function scanDirectory(dirPath: string, keys: string[], result: Record<string, string[]>) {
  const files = fs.readdirSync(dirPath)
  
  for (const file of files) {
    const filePath = path.join(dirPath, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {
      await scanDirectory(filePath, keys, result)
    } else if (file.endsWith('.vue') || file.endsWith('.ts') || file.endsWith('.js')) {
      const content = fs.readFileSync(filePath, 'utf-8')
      const relativePath = filePath.replace(path.resolve('.') + '/', '')
      
      // Check for each key in the file
      for (const key of keys) {
        // Look for common translation patterns
        const patterns = [
          `t('${key}')`,
          `t("${key}")`,
          `$t('${key}')`,
          `$t("${key}")`,
          `i18n.t('${key}')`,
          `i18n.t("${key}")`,
          `useI18n().t('${key}')`,
          `useI18n().t("${key}")`,
          `"${key}"`,
          `'${key}'`
        ]
        
        if (patterns.some(pattern => content.includes(pattern))) {
          result[key].push(relativePath)
        }
      }
    }
  }
}