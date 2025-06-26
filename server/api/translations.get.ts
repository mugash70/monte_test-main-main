export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const page = parseInt(query.page as string) || 1
    const pageSize = parseInt(query.pageSize as string) || 10
    const search = query.search as string || ''
    
    // Mock data for translations
    const mockTranslations = [
      { id: 1, locale: 'en', key: 'welcome.title', value: 'Welcome to our site' },
      { id: 2, locale: 'mn', key: 'welcome.title', value: 'Манай сайтад тавтай морил' },
      { id: 3, locale: 'ch', key: 'welcome.title', value: '欢迎来到我们的网站' },
      { id: 4, locale: 'en', key: 'welcome.subtitle', value: 'Discover amazing content' },
      { id: 5, locale: 'mn', key: 'welcome.subtitle', value: 'Гайхалтай контентыг нээ' },
      { id: 6, locale: 'ch', key: 'welcome.subtitle', value: '发现精彩内容' },
      { id: 7, locale: 'en', key: 'navigation.home', value: 'Home' },
      { id: 8, locale: 'mn', key: 'navigation.home', value: 'Нүүр хуудас' },
      { id: 9, locale: 'ch', key: 'navigation.home', value: '首页' },
      { id: 10, locale: 'en', key: 'navigation.about', value: 'About Us' },
      { id: 11, locale: 'mn', key: 'navigation.about', value: 'Бидний тухай' },
      { id: 12, locale: 'ch', key: 'navigation.about', value: '关于我们' },
      { id: 13, locale: 'en', key: 'navigation.contact', value: 'Contact' },
      { id: 14, locale: 'mn', key: 'navigation.contact', value: 'Холбоо барих' },
      { id: 15, locale: 'ch', key: 'navigation.contact', value: '联系我们' },
      { id: 16, locale: 'en', key: 'footer.copyright', value: 'All rights reserved' },
      { id: 17, locale: 'mn', key: 'footer.copyright', value: 'Бүх эрх хуулиар хамгаалагдсан' },
      { id: 18, locale: 'ch', key: 'footer.copyright', value: '版权所有' },
      { id: 19, locale: 'en', key: 'products.title', value: 'Our Products' },
      { id: 20, locale: 'mn', key: 'products.title', value: 'Бидний бүтээгдэхүүн' },
      { id: 21, locale: 'ch', key: 'products.title', value: '我们的产品' },
      { id: 22, locale: 'en', key: 'products.coal.description', value: 'High quality coal products' },
      { id: 23, locale: 'mn', key: 'products.coal.description', value: 'Өндөр чанарын нүүрсний бүтээгдэхүүн' },
      { id: 24, locale: 'ch', key: 'products.coal.description', value: '高质量煤炭产品' },
      { id: 25, locale: 'en', key: 'company.about.mission', value: 'Our mission is to provide sustainable solutions' },
      { id: 26, locale: 'mn', key: 'company.about.mission', value: 'Бидний эрхэм зорилго бол тогтвортой шийдлүүдийг санал болгох' },
      { id: 27, locale: 'ch', key: 'company.about.mission', value: '我们的使命是提供可持续的解决方案' },
      { id: 28, locale: 'en', key: 'responsibility.top.description', value: 'We are committed to environmental responsibility' },
      { id: 29, locale: 'mn', key: 'responsibility.top.description', value: 'Бид байгаль орчны хариуцлагатай байдалд анхаарал хандуулдаг' },
      { id: 30, locale: 'ch', key: 'responsibility.top.description', value: '我们致力于环境责任' }
    ]
    
    // Filter by search term if provided
    let filteredTranslations = mockTranslations
    if (search) {
      const searchLower = search.toLowerCase()
      filteredTranslations = mockTranslations.filter(t => 
        t.key.toLowerCase().includes(searchLower) || 
        t.value.toLowerCase().includes(searchLower)
      )
    }
    
    // Calculate pagination
    const total = filteredTranslations.length
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    const paginatedTranslations = filteredTranslations.slice(startIndex, endIndex)
    
    return { 
      data: paginatedTranslations,
      pagination: {
        page,
        pageSize,
        total,
        totalPages: Math.ceil(total / pageSize)
      }
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch translations'
    })
  }
})