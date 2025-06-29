
   

    <template>
      <div>
        <HeroBanner :title="t('news.heroTitle')" image="/hero/news.jpg" />
    
        <section class="page-content">
          <div class="card-grid">
            <CardItem v-for="(card, index) in paginatedCards" :key="index" :item="card" />
          </div>
    
          <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">&laquo;</button>
            <button
              v-for="page in totalPages"
              :key="page"
              @click="goToPage(page)"
              :class="{ active: currentPage === page }"
            >
              {{ page }}
            </button>
            <button @click="nextPage" :disabled="currentPage === totalPages">&raquo;</button>
          </div>
        </section>
      </div>
    </template>
    
    <script setup lang="ts">
    import HeroBanner from '@/components/ui/HeroBanner.vue'
    import CardItem from '@/components/ui/CardItemNews.vue'
    import { ref, computed, onMounted, watch } from 'vue'
    import { useI18n } from 'vue-i18n';

    const { t, locale } = useI18n();

    interface NewsItem {
      id: number
      slug: string
      title: string
      description: string
      content?: string
      image?: string
      date: string
      source?: string
      views: number
      published: boolean
      locale: string
      files?: Array<{
        id: number
        filename: string
        originalName: string
        path: string
        size: number
        mimeType: string
      }>
    }

    const newsItems = ref<NewsItem[]>([])
    const loading = ref(false)
    const currentPage = ref(1)
    const itemsPerPage = 6
    const totalItems = ref(0)

    // Load news from API
    async function loadNews() {
      loading.value = true
      try {
        const response = await $fetch<{
          success: boolean
          data: NewsItem[]
          pagination: {
            page: number
            pageSize: number
            total: number
            totalPages: number
          }
        }>('/api/news', {
          params: {
            page: currentPage.value,
            pageSize: itemsPerPage,
            locale: locale.value,
            published: true
          }
        })

        if (response && response.data) {
          newsItems.value = response.data
          totalItems.value = response.pagination.total
        }
      } catch (error) {
        console.error('Failed to load news:', error)
      } finally {
        loading.value = false
      }
    }

    const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage))

    const goToPage = async (page: number) => {
      currentPage.value = page
      await loadNews()
    }

    const nextPage = async () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++
        await loadNews()
      }
    }

    const prevPage = async () => {
      if (currentPage.value > 1) {
        currentPage.value--
        await loadNews()
      }
    }

    // Convert API data to match CardItem component format
    const paginatedCards = computed(() => {
      return newsItems.value.map((news: NewsItem) => ({
        slug: news.slug,
        image: news.image || '/media/news-placeholder.png',
        date: news.date,
        descriptionKey: news.description, // Use description directly instead of translation key
        source: news.source || 'Monte Group',
        views: news.views,
        content: news.content,
        files: news.files || []
      }))
    })

    onMounted(() => {
      loadNews()
    })

    // Watch locale changes
    watch(locale, () => {
      currentPage.value = 1
      loadNews()
    })
    </script>
    
    
    <style scoped>
    .page-content {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .card-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      padding: 0 1rem;
    }
    
    @media (max-width: 1024px) {
      .card-grid {
        grid-template-columns: repeat(2, 1fr); 
      }
    }
    
    @media (max-width: 640px) {
      .card-grid {
        grid-template-columns: 1fr; 
      }
    }
    .pagination {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .pagination button {
      width: 40px;
      height: 40px;
      border: 1px solid grey;
      background-color: transparent;
      color: #333;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s ease;
    }
    
    .pagination button.active {
      background-color: red;
      color: white;
      border-color: red;
    }
    
    .pagination button:hover:not(.active):not(:disabled) {
      background-color: #f0f0f0;
    }
    
    .pagination button:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    
    .pagination > button {
      margin: 0 0.25rem; 
    }
    
    .pagination > button:first-child,
    .pagination > button:last-child {
      margin: 0 0.75rem; 
    }
    
    
    </style>
    
 
