// Translation Engine Composable
export const useTranslationEngine = () => {
  
  // Language mappings for translation services
  const languageMap = {
    'en': 'en',
    'mn': 'mn', 
    'ch': 'zh-cn'
  }

  // Simple translation dictionaries for common terms (fallback)
  const translationDictionary = {
    // Navigation
    'Home': { mn: 'Нүүр', ch: '首页' },
    'About': { mn: 'Тухай', ch: '关于' },
    'Services': { mn: 'Үйлчилгээ', ch: '服务' },
    'News': { mn: 'Мэдээ', ch: '新闻' },
    'Media': { mn: 'Медиа', ch: '媒体' },
    'Contact': { mn: 'Холбоо барих', ch: '联系' },
    'Join Us': { mn: 'Бидэнтэй нэгдэх', ch: '加入我们' },
    
    // Common terms
    'Loading': { mn: 'Ачааллаж байна', ch: '加载中' },
    'Search': { mn: 'Хайх', ch: '搜索' },
    'Submit': { mn: 'Илгээх', ch: '提交' },
    'Cancel': { mn: 'Цуцлах', ch: '取消' },
    'Save': { mn: 'Хадгалах', ch: '保存' },
    'Edit': { mn: 'Засах', ch: '编辑' },
    'Delete': { mn: 'Устгах', ch: '删除' },
    'View': { mn: 'Харах', ch: '查看' },
    'Update': { mn: 'Шинэчлэх', ch: '更新' },
    'Create': { mn: 'Үүсгэх', ch: '创建' },
    'Add': { mn: 'Нэмэх', ch: '添加' },
    'Remove': { mn: 'Хасах', ch: '移除' },
    'Close': { mn: 'Хаах', ch: '关闭' },
    'Open': { mn: 'Нээх', ch: '打开' },
    'Yes': { mn: 'Тийм', ch: '是' },
    'No': { mn: 'Үгүй', ch: '否' },
    
    // Business terms
    'Monte Group': { mn: 'Монте Групп', ch: '蒙特集团' },
    'Coal Mining': { mn: 'Нүүрс олборлолт', ch: '煤炭开采' },
    'Aluminum Production': { mn: 'Хөнгөн цагааны үйлдвэрлэл', ch: '铝生产' },
    'Renewable Energy': { mn: 'Сэргээгдэх эрчим хүч', ch: '可再生能源' },
    'Sustainability': { mn: 'Тогтвортой байдал', ch: '可持续性' },
    'Innovation': { mn: 'Инноваци', ch: '创新' },
    'Technology': { mn: 'Технологи', ch: '技术' },
    'Development': { mn: 'Хөгжил', ch: '发展' },
    'Investment': { mn: 'Хөрөнгө оруулалт', ch: '投资' },
    'Growth': { mn: 'Өсөлт', ch: '增长' },
    'Strategy': { mn: 'Стратеги', ch: '战略' },
    'Management': { mn: 'Удирдлага', ch: '管理' },
    'Operations': { mn: 'Үйл ажиллагаа', ch: '运营' },
    'Quality': { mn: 'Чанар', ch: '质量' },
    'Safety': { mn: 'Аюулгүй байдал', ch: '安全' },
    'Environment': { mn: 'Байгаль орчин', ch: '环境' },
    'Report': { mn: 'Тайлан', ch: '报告' },
    'Annual': { mn: 'Жилийн', ch: '年度' },
    'Company': { mn: 'Компани', ch: '公司' },
    'Overview': { mn: 'Тойм', ch: '概览' },
    'Profile': { mn: 'Танилцуулга', ch: '简介' },
    'Vision': { mn: 'Алсын хараа', ch: '愿景' },
    'Mission': { mn: 'Эрхэм зорилго', ch: '使命' },
    'Values': { mn: 'Үнэт зүйлс', ch: '价值观' }
  }

  // Check if text exists in dictionary
  const getDictionaryTranslation = (text, targetLang) => {
    const cleanText = text.trim()
    if (translationDictionary[cleanText] && translationDictionary[cleanText][targetLang]) {
      return translationDictionary[cleanText][targetLang]
    }
    return null
  }

  // Auto-translate using Google Translate API (free tier)
  const translateWithGoogle = async (text, sourceLang, targetLang) => {
    try {
      const sourceCode = languageMap[sourceLang] || sourceLang
      const targetCode = languageMap[targetLang] || targetLang
      
      // Using Google Translate API (you'll need to set up API key)
      const response = await $fetch('/api/translate', {
        method: 'POST',
        body: {
          text: text,
          source: sourceCode,
          target: targetCode
        }
      })
      
      return response.translatedText
    } catch (error) {
      console.error('Google Translate API error:', error)
      return null
    }
  }

  // Main auto-translate function
  const autoTranslate = async (text, sourceLang, targetLangs = ['en', 'mn', 'ch']) => {
    if (!text || !text.trim()) return {}
    
    const translations = {}
    
    for (const targetLang of targetLangs) {
      if (targetLang === sourceLang) {
        translations[targetLang] = text
        continue
      }
      
      // First try dictionary lookup for exact matches
      const dictionaryResult = getDictionaryTranslation(text, targetLang)
      if (dictionaryResult) {
        translations[targetLang] = dictionaryResult
        continue
      }
      
      // Try Google Translate API
      try {
        const apiResult = await translateWithGoogle(text, sourceLang, targetLang)
        if (apiResult) {
          translations[targetLang] = apiResult
          continue
        }
      } catch (error) {
        console.error(`Translation failed for ${targetLang}:`, error)
      }
      
      // Fallback: leave empty for manual input
      translations[targetLang] = ''
    }
    
    return translations
  }

  // Detect language of input text
  const detectLanguage = (text) => {
    if (!text) return 'en'
    
    // Simple language detection based on character sets
    const hasLatin = /[a-zA-Z]/.test(text)
    const hasCyrillic = /[а-яё]/i.test(text)
    const hasChinese = /[\u4e00-\u9fff]/.test(text)
    const hasMongolian = /[\u1800-\u18af]/.test(text)
    
    if (hasMongolian || hasCyrillic) return 'mn'
    if (hasChinese) return 'ch'
    if (hasLatin) return 'en'
    
    return 'en' // default
  }

  // Smart translation that detects source language
  const smartTranslate = async (text, excludeLang = null) => {
    const detectedLang = detectLanguage(text)
    const targetLangs = ['en', 'mn', 'ch'].filter(lang => lang !== excludeLang)
    
    return await autoTranslate(text, detectedLang, targetLangs)
  }

  // Batch translate multiple texts
  const batchTranslate = async (texts, sourceLang) => {
    const results = {}
    
    for (const [key, text] of Object.entries(texts)) {
      if (text && text.trim()) {
        results[key] = await autoTranslate(text, sourceLang)
      }
    }
    
    return results
  }

  return {
    autoTranslate,
    smartTranslate,
    batchTranslate,
    detectLanguage,
    getDictionaryTranslation
  }
}
