<template>
  <div class="news-detail">
    <HeroBanner :title="t('offline.heroTitle')" image="/hero/tender.jpg" />

    <section class="news-content" v-if="item">
      <h1 class="news-title" :class="{ 'vertical-title': isMongolian }">{{ t(item.descriptionKey) }}</h1>

      <ul class="news-meta">
        <li>{{ item.date }}</li>
        <li :class="{ 'vertical-title': isMongolian }"><strong>{{ t('offline.source') }}:</strong> {{ t(item.source) }}</li>
        <li :class="{ 'vertical-title': isMongolian }"><strong>{{ t('offline.views') }}:</strong> {{ t(item.views) }}</li>
        <li class="social-icons">
          <a href="javascript:void(0);" aria-label="WeChat"><i class="fab fa-weixin"></i></a>
          <a href="javascript:void(0);" aria-label="Weibo"><i class="fab fa-weibo"></i></a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        </li>
      </ul>
    </section>

    <section class="news-extra-container">
      <!-- Centered News Extra -->

      <div class="news-extra">
        <section class="tender-details" :class="{ 'vertical-title': isMongolian }" v-if="item?.projectName || item?.organizer">
          <div class="detail-item" v-if="item?.projectName">
            <strong>{{ t('offline.projectName') }}:</strong> {{ t(item?.projectName) }}
          </div>
          <div class="detail-item" v-if="item?.organizer">
            <strong>{{ t('offline.organizer') }}:</strong> {{ t(item?.organizer)}}
          </div>
          <div class="detail-item" v-if="item?.tenderOpeningLocation">
            <strong>{{ t('offline.tenderOpeningLocation') }}:</strong> {{ t(item?.tenderOpeningLocation) }}
          </div>
          <div class="detail-item" v-if="item?.releaseTime">
            <strong>{{ t('offline.releaseTime') }}:</strong> {{ t(item?.releaseTime) }}
          </div>
          <div class="detail-item" v-if="item?.openingTime">
            <strong>{{ t('offline.openingTime') }}:</strong> {{ t(item?.openingTime) }}
          </div>
        </section>



        <div v-if="isLoading" class="loading-indicator">
          <p>{{ t('offline.loading') }}...</p>
        </div>
        <section v-if="fileType === 'docx' && !isLoading" class="docx-rendered" v-html="htmlContent"></section>
        <section v-if="fileType === 'pdf' && !isLoading" ref="pdfContainer" class="pdf-rendered"></section>




        <div class="social-icons-bar">
          <ul>
            <li><a href="javascript:void(0);" aria-label="WeChat"><i class="fab fa-weixin"></i></a></li>
            <li><a href="javascript:void(0);" aria-label="Weibo"><i class="fab fa-weibo"></i></a></li>
            <li><a href="https://www.linkedin.com/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
        <div class="extra-footer">
          <aside class="news-sidebar">
            <div v-if="prevArticle" class="sidebar-link">
              <strong :class="{ 'vertical-title': isMongolian }">{{ t('offline.previousPost') }}: </strong>
              <router-link :to="`/news/${prevArticle.slug}`" :class="{ 'vertical-title': isMongolian }">
                {{ t(truncateText(prevArticle.descriptionKey, 50)) }}
              </router-link>
            </div>
            <div v-if="nextArticle" class="sidebar-link">
              <strong :class="{ 'vertical-title': isMongolian }">{{ t('offline.nextArticle') }}: </strong>
              <router-link :to="`/news/${nextArticle.slug}`" :class="{ 'vertical-title': isMongolian }">
                {{ t(truncateText(nextArticle.descriptionKey, 50)) }}
              </router-link>
            </div>
          </aside>

          <div class="back-button" :class="{ 'vertical-title': isMongolian }">
            <button @click="goBack">{{ t('offline.close') }}</button>
          </div>
        </div>
        </div>

    </section>
  </div>
</template>


<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, watch } from 'vue'
import HeroBanner from '@/components/ui/HeroBanner.vue'
import { useTender } from '@/composables/useTender'
import { useDocxParser } from '@/composables/useDocxParser'
import { usePdfRenderer } from '@/composables/usePdfRenderer'
import { useI18n } from 'vue-i18n';

const {t, locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
const { htmlContent, fetchAndParseDocx } = useDocxParser()
const { pdfContainer, renderPdf } = usePdfRenderer()

const route = useRoute()
const router = useRouter()

const { notice, getNoticeBySlug, bid, getBidBySlug } = useTender()

const slug = computed(() => route.params.slug as string)
const item = computed(() => getNoticeBySlug(slug.value) || getBidBySlug(slug.value))

const fileUrl = ref<string | null>(null)
const fileType = ref<'docx' | 'pdf' | null>(null)
const isLoading = ref<boolean>(false)
  const fetchFileWithLogging = async (url: string, type: 'docx' | 'pdf') => {
  try {
    console.log('🚀 Starting file fetch process...')
    console.log('📄 File URL:', url)
    console.log('📋 File Type:', type)
    console.log('⏰ Fetch started at:', new Date().toISOString())

    isLoading.value = true
    const response = await fetch(url)

    console.log('📊 Response Status:', response.status)
    console.log('📊 Response OK:', response.ok)
    console.log('📊 Response Headers:', Object.fromEntries(response.headers.entries()))

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const contentLength = response.headers.get('content-length')
    const contentType = response.headers.get('content-type')

    console.log('📏 Content Length:', contentLength ? `${contentLength} bytes` : 'Unknown')
    console.log('🏷️ Content Type:', contentType)

    // Get the file as blob to inspect it
    const blob = await response.blob()
    console.log('💾 Blob size:', blob.size, 'bytes')
    console.log('💾 Blob type:', blob.type)

    // Create a new URL for the blob (optional, for verification)
    const blobUrl = URL.createObjectURL(blob)
    console.log('🔗 Blob URL created:', blobUrl)

    // Log file fetching completion
    console.log('✅ File fetch completed successfully')
    console.log('⏰ Fetch completed at:', new Date().toISOString())

    // Now process the file based on type
    if (type === 'docx') {
      console.log('📝 Processing DOCX file...')
      await fetchAndParseDocx(url)
      console.log('✅ DOCX processing completed')
    } else if (type === 'pdf') {
      console.log('📄 Processing PDF file...')
      await renderPdf(url)
      console.log('✅ PDF processing completed')
    }

    // Clean up blob URL
    URL.revokeObjectURL(blobUrl)
    console.log('🧹 Blob URL cleaned up')

  } catch (error) {
    console.error('❌ Error fetching file:', error)
    console.error('📍 Error occurred at:', new Date().toISOString())
    if (error instanceof Error) {
      console.error('🔍 Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      })
    } else {
      console.error('🔍 Error details:', {
        name: 'Unknown',
        message: String(error),
        stack: 'No stack available'
      })
    }
  } finally {
    isLoading.value = false
    console.log('🏁 File fetch process completed')
    console.log('-----------------------------------')
  }
}

// Watch for item changes and extract file info
watch(item, (newItem) => {
  console.log('👀 Item changed:', newItem)

  if (newItem?.files?.[0]?.url) {
    const url = newItem.files[0].url
    const detectedType = url.endsWith('.docx') ? 'docx' : url.endsWith('.pdf') ? 'pdf' : null

    console.log('📁 Files found:', newItem.files)
    console.log('🎯 Selected file URL:', url)
    console.log('🏷️ Detected file type:', detectedType)

    fileUrl.value = url
    fileType.value = detectedType
  } else {
    console.log('❌ No files found in item')
    fileUrl.value = null
    fileType.value = null
  }
}, { immediate: true })

// Watch for file type changes and trigger processing
watch([fileType, fileUrl], ([newType, newUrl]) => {
  console.log('🔄 File type or URL changed:', { type: newType, url: newUrl })

  if (newType && newUrl) {
    console.log('🚀 Triggering file fetch for:', newType)
    fetchFileWithLogging(newUrl, newType)
  }
})

const truncateText = (text: string | undefined, maxLength: number = 50) => {
  if (!text) return '';
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

const allArticles = computed(() => [...notice.value, ...bid.value])
const currentIndex = computed(() => allArticles.value.findIndex(n => n.slug === slug.value))
const prevArticle = computed(() => currentIndex.value > 0 ? allArticles.value[currentIndex.value - 1] : null)
const nextArticle = computed(() => currentIndex.value < allArticles.value.length - 1 ? allArticles.value[currentIndex.value + 1] : null)

const goBack = () => router.back()
</script>


<style scoped>
.vertical-title  {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;

  padding: 1rem 0.5rem;
  max-height: 200px;
    overflow: hidden;
    word-break: break-word;
}
.extra-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem 0;
  border-top: 1px solid #ddd;
}
.news-extra-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  max-width: 900px;
  padding: 2rem;
  border-radius: 1rem;
}

.news-extra {
  width: 100%;
  text-align: center;
}

.news-extra h3 {
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
}

.news-content {
  max-width: 800px;
  margin: 40px auto;
  padding: 1rem;
}

.news-title {
  font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
  line-height: 1.5;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  list-style: none;
  padding-left: 0;
}

.news-meta li {
  font-size: 1rem;
  color: #828282;
  text-align: center;
  font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
}

.news-meta li strong {
  font-weight: 600;
}

.social-icons {
  display: flex;
  gap: 0.5rem;
}

.social-icons i {
  font-size: 1.2rem;
  color: #acacac;
  cursor: pointer;
  transition: color 0.3s ease;
}

.social-icons i:hover {
  color: red;
}

.social-icons-bar {
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
  width: 100%;
}
.social-icons-bar ul {
  display: flex;
  justify-content: start;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
.social-icons-bar li i {
  font-size: 1.5rem;
  color: #acacac;
  cursor: pointer;
  transition: color 0.3s ease;
}
.social-icons-bar li i:hover {
  color: red;
}

.back-button {
  flex: 0 0 auto; /* Don't let it grow */
  text-align: right;
  margin-left: auto;
}

.back-button button {
  padding: 0.7rem 2rem;
  font-weight: 600;
  color: #ffffff;
  border: 1px solid #ccc;
  background: red;
  border-radius: 0;
  transition: all 0.3s ease;
  cursor: pointer;
}

.news-sidebar .sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1rem;
}

.news-sidebar strong {
  font-weight: 600;
}

.news-sidebar a {
  text-decoration: none;
  color: #000000;
  transition: color 0.3s ease;
}
.news-sidebar a:hover {
  color: red;
}

/* data here   */
.tender-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 40px;
}
.detail-item {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  padding-bottom: 0.5rem;
}

.detail-item strong {
  font-weight: 600;
  color: #555;
  min-width: 180px;
  display: inline-block;
}

.loading-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-size: 1.1rem;
  color: #666;
}

.loading-indicator p {
  margin: 0;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.docx-rendered h1, .docx-rendered h2, .docx-rendered h3 {
  font-weight: bold;
  margin: 1rem 0;
}

.docx-rendered p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.pdf-rendered {
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
}

.pdf-rendered canvas {
  width: 100%;
  height: auto;
  display: block;
}
</style>
