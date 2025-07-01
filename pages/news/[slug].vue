<template>
  <div class="news-detail">
    <HeroBanner
      :title="t('news.detail.title')"
      :subtitle="t('news.detail.subtitle')"
      image="/hero/news-hero.jpg"
    />
    
    <div class="container mx-auto px-4 py-8">
      <div v-if="loading" class="text-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p class="mt-4">{{ t('common.loading') }}</p>
      </div>
      
      <div v-else-if="newsItem" class="max-w-4xl mx-auto">
        <!-- News Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold mb-4" :class="{ 'vertical-text': isMongolian }">
            {{ newsItem.title }}
          </h1>
          <div class="flex flex-wrap gap-4 text-gray-600 mb-6">
            <span class="flex items-center gap-2">
              <i class="fas fa-calendar"></i>
              {{ formatDate(newsItem.date) }}
            </span>
            <span class="flex items-center gap-2">
              <i class="fas fa-eye"></i>
              {{ newsItem.views }} {{ t('news.views') }}
            </span>
            <span v-if="newsItem.source" class="flex items-center gap-2">
              <i class="fas fa-newspaper"></i>
              {{ newsItem.source }}
            </span>
          </div>
        </div>

        <!-- News Image -->
        <div v-if="newsItem.mainImage" class="mb-8">
          <img 
            :src="newsItem.mainImage" 
            :alt="newsItem.title"
            class="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        <!-- News Content -->
        <div class="prose max-w-none mb-8" :class="{ 'vertical-text': isMongolian }">
          <div v-if="newsItem.description" class="text-lg text-gray-700 mb-6">
            {{ newsItem.description }}
          </div>
          <div v-if="newsItem.content" v-html="newsItem.content"></div>
        </div>

        <!-- Files/Attachments -->
        <div v-if="newsItem.files && newsItem.files.length > 0" class="mb-8">
          <h3 class="text-xl font-semibold mb-4">{{ t('news.attachments') }}</h3>
          <div class="grid gap-3">
            <a 
              v-for="(file, index) in newsItem.files" 
              :key="index"
              :href="file.url"
              target="_blank"
              class="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <i class="fas fa-file-pdf text-red-500"></i>
              <span>{{ getFileName(file.url) }}</span>
              <i class="fas fa-external-link-alt text-gray-400 ml-auto"></i>
            </a>
          </div>
        </div>

        <!-- Back Button -->
        <div class="text-center">
          <router-link 
            :to="localePath('/news')"
            class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <i class="fas fa-arrow-left"></i>
            {{ t('common.backToNews') }}
          </router-link>
        </div>
      </div>
      
      <div v-else class="text-center py-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ t('news.notFound') }}</h2>
        <p class="text-gray-600 mb-6">{{ t('news.notFoundDescription') }}</p>
        <router-link 
          :to="localePath('/news')"
          class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <i class="fas fa-arrow-left"></i>
          {{ t('common.backToNews') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroBanner from '@/components/ui/HeroBanner.vue'
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const isMongolian = computed(() => locale.value === 'mn')

const newsItem = ref<any>(null)
const loading = ref(true)

const loadNewsItem = async () => {
  loading.value = true
  try {
    const slug = route.params.slug as string
    const response = await $fetch('/api/news', {
      query: {
        slug,
        locale: locale.value
      }
    })

    if (response.success && response.data.length > 0) {
      newsItem.value = response.data[0]
    } else {
      newsItem.value = null
    }
  } catch (error) {
    console.error('Failed to load news item:', error)
    newsItem.value = null
  } finally {
    loading.value = false
  }
}

const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString(locale.value === 'en' ? 'en-US' : locale.value === 'ch' ? 'zh-CN' : 'mn-MN')
}

const getFileName = (url: string) => {
  return url.split('/').pop() || 'Download'
}

onMounted(() => {
  loadNewsItem()
})

// Watch for route changes
watch(() => route.params.slug, () => {
  loadNewsItem()
})

// Watch for locale changes
watch(locale, () => {
  loadNewsItem()
})
</script>

<style scoped>
.news-detail {
  min-height: 100vh;
}

.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.prose {
  line-height: 1.7;
}

.prose img {
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
  border-radius: 8px;
}

.prose p {
  margin-bottom: 1rem;
}

.prose ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .vertical-text {
    writing-mode: horizontal-tb;
    text-orientation: mixed;
  }
}
</style>
