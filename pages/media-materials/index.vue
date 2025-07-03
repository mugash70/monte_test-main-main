<template>
  <div>
    <HeroBanner :title="t('media.heroTitle')" image="/hero/media.jpeg" />


    <section class="page-content">
      <div>
      <div class="tabs" :class="{ 'vertical-tab': isMongolian }">
        <div
          :class="['tab' ,{ active: activeTab === 'video' }]"
          @click="activeTab = 'video'"
        >
        {{ t('media.tab1') }}
        </div>
        <div
          :class="['tab' ,{ active: activeTab === 'picture' }]"
          @click="activeTab = 'picture'"
        >
        {{ t('media.tab2') }}
        </div>
      </div>
    </div>

      <div class="tab-content">
        <div v-if="activeTab === 'video'">
          <div class="video-grid">
            <div class="video-item" v-for="(video, index) in videos" :key="index">
              <div class="video-container" @click="openVideoModal(video.src)">
                <video
                  ref="videoPlayer"
                  class="video-player"
                  :poster="video.poster"
                >
                  <source :src="video.src" type="video/mp4" />
                </video>

                <div class="video-content">
                  <button class="download-button" :class="{ 'vertical-button': isMongolian }" @click.stop.prevent="downloadVideo(video.src)">
                    {{ t('media.picture.download') }}
                  </button>
                  <div class="play-button" @click.stop="playVideo(video.src)">
                    <svg width="40" height="40" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="38" fill="rgba(255,255,255,0.2)" stroke="#fff" stroke-width="2"/>
                      <path d="M32 24L56 40L32 56V24Z" fill="#fff"/>
                    </svg>
                  </div>
                </div>
              </div>
              <h3 class="video-title" :class="{ 'vertical-text': isMongolian }">{{ t(video.titleKey) }}</h3>
            </div>


          <div class="video-modal" v-if="showVideoModal" @click.self="closeVideoModal">
            <div class="modal-content">
              <button class="close-button" @click="closeVideoModal">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#fff"/>
                </svg>
              </button>
              <video
                ref="modalVideo"
                class="modal-video-player"
                controls
                :src="currentVideoSrc"
              ></video>
            </div>
          </div>
        </div>

        </div>
        <div v-else>
          <!-- Picture content goes here -->
          <section class="page-content">
            <div class="card-grid">
              <CardItem v-for="(data, index) in paginatedCards" :key="index" :item="data" />
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
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, computed, onMounted, watch } from 'vue'
import HeroBanner from '@/components/ui/HeroBanner.vue'
import CardItem from '@/components/ui/CardDownloads.vue'
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');

    const currentPage = ref(1)
    const itemsPerPage = 6

    const totalPages = computed(() => Math.ceil(images.value.length / itemsPerPage))
    const paginatedCards = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage
      return images.value.slice(start, start + itemsPerPage)
    })

    const goToPage = (page: number) => currentPage.value = page
    const nextPage = () => { if (currentPage.value < totalPages.value) currentPage.value++ }
    const prevPage = () => { if (currentPage.value > 1) currentPage.value-- }

interface VideoItem {
  titleKey: string
  src: string
  poster: string
  title: string
  description?: string
}

interface ImageItem {
  image: string
  descriptionKey: string
  title: string
  description?: string
  downloadUrl: string
}

interface MediaMaterial {
  id: number
  title: string
  description?: string
  type: string
  path: string
  thumbnailPath?: string
  size: number
  mimeType: string
  duration?: number
  dimensions?: string
}

const videos = ref<VideoItem[]>([])
const images = ref<ImageItem[]>([])

// Load media materials from API
async function loadMediaMaterials() {
  try {
    const response = await $fetch<{
      success: boolean
      data: MediaMaterial[]
      pagination: any
    }>('/api/media-materials', {
      params: {
        locale: locale.value,
        published: true
      }
    })

    if (response && response.data && response.data.length > 0) {
      // Separate videos and images
      videos.value = response.data
        .filter((item: MediaMaterial) => item.type === 'video')
        .map((video: MediaMaterial) => ({
          titleKey: video.title,
          src: video.path,
          poster: video.thumbnailPath || video.path,
          title: video.title,
          description: video.description
        }))

      images.value = response.data
        .filter((item: MediaMaterial) => item.type === 'image')
        .map((image: MediaMaterial) => ({
          image: image.path,
          descriptionKey: image.title,
          title: image.title,
          description: image.description,
          downloadUrl: image.path
        }))
    } else {
      // Fallback to static content from public folder
      loadStaticContent()
    }
  } catch (error) {
    console.error('Failed to load media materials:', error)
    // Fallback to static content
    loadStaticContent()
  }
}

// Load static content from public folder
function loadStaticContent() {
  videos.value = [
    {
      titleKey: 'media.video.title1',
      src: '/media/company-profile.mp4',
      poster: '/media/banner.jpg',
      title: t('media.video.title1')
    },
    {
      titleKey: 'media.video.title2', 
      src: '/media/carousel1.mp4',
      poster: '/media/green.jpg',
      title: t('media.video.title2')
    }
  ]

  images.value = [
    {
      image: '/media/banner.jpg',
      descriptionKey: 'media.picture.description1',
      title: t('media.picture.description1'),
      downloadUrl: '/media/banner.jpg'
    },
    {
      image: '/media/center.jpg',
      descriptionKey: 'media.picture.description2',
      title: t('media.picture.description2'),
      downloadUrl: '/media/center.jpg'
    },
    {
      image: '/media/company-profile.mp4',
      descriptionKey: 'media.picture.description3',
      title: t('media.picture.description3'),
      downloadUrl: '/media/company-profile.mp4'
    },
    {
      image: '/media/green.jpg',
      descriptionKey: 'media.picture.description4',
      title: t('media.picture.description4'),
      downloadUrl: '/media/green.jpg'
    },
    {
      image: '/media/aluminium.jpg',
      descriptionKey: 'media.picture.description5',
      title: t('media.picture.description5'),
      downloadUrl: '/media/aluminium.jpg'
    },
    {
      image: '/media/alum1.jpg',
      descriptionKey: 'media.picture.description6',
      title: t('media.picture.description6'),
      downloadUrl: '/media/alum1.jpg'
    },
    {
      image: '/media/alum2.jpg',
      descriptionKey: 'media.picture.description7',
      title: t('media.picture.description7'),
      downloadUrl: '/media/alum2.jpg'
    },
    {
      image: '/media/alum3.jpg',
      descriptionKey: 'media.picture.description8',
      title: t('media.picture.description8'),
      downloadUrl: '/media/alum3.jpg'
    },
    {
      image: '/media/responsibility.jpg',
      descriptionKey: 'media.picture.description9',
      title: t('media.picture.description9'),
      downloadUrl: '/media/responsibility.jpg'
    }
  ]
}

const activeTab = ref<'video' | 'picture'>('video')
const videoPlayer = ref<HTMLVideoElement | null>(null)
const modalVideo = ref<HTMLVideoElement | null>(null)
const showVideoModal = ref(false)



const currentVideoSrc = ref('')
const playVideo = (src: string) => {
  currentVideoSrc.value = src
  showVideoModal.value = true
  nextTick(() => {
    modalVideo.value?.play()
  })
}

const openVideoModal = (src: string) => {
  currentVideoSrc.value = src
  showVideoModal.value = true
  nextTick(() => {
    modalVideo.value?.play()
  })
}

const closeVideoModal = () => {
  modalVideo.value?.pause()
  showVideoModal.value = false
}

const downloadVideo = (src: string) => {
  const link = document.createElement('a')
  link.href = src
  link.download = src.split('/').pop() || 'video.mp4'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Load data on mount and when locale changes
onMounted(() => {
  loadMediaMaterials()
})

watch(locale, () => {
  loadMediaMaterials()
})
</script>

<style scoped>
.vertical-tab  {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
text-align: center;
align-items:center;
  padding: 1rem 0.5rem;
  max-height: 350px;
    overflow: hidden;
    word-break: break-word;
}

.vertical-button {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  max-height: 350px;
    overflow: hidden;
    word-break: break-word;
}
.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  max-height: 100px;
    overflow: hidden;
    word-break: break-word;
}
.tabs {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 0.5rem 0;
}

.tab {
  position: relative;
  font-size: 2.5rem;
  font-weight: 600;
  cursor: pointer;
  color: #8b8b8b;
  transition: color 0.3s;
}

.tab:hover {
  color: red;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -0.25rem;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(
    to right,
    #f7931e 0%,
    #f7931e 50%,
    #ff4444 50%,
    #ff4444 100%
  );
}

.tab-content {
  text-align: center;
  padding: 2rem;
  color: #555;
  font-size: 1rem;
}

/* Video tab section */
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 0.1rem;
  padding: 2rem 0;
  max-width: 1100px;
  margin: 0 auto;
}
.video-item {
  position: relative;
  width: 50%;
  min-width: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}
.video-item:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  background-color: #eeeeee;
}
.video-title {
  margin-top: 0.75rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  text-align: start;
  padding-left: 20px;
  width: 90%;
  margin-bottom: 15px;
  word-wrap: break-word;
}
.video-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #ffca67;
}
.video-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.video-player {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.video-container:hover .video-player {
  transform: scale(1.05);
}
.video-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}
.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  cursor: pointer;
}
.download-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: yellow;
  color: #333;
  font-weight: bold;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.download-button:hover {
  background-color: #ffdd00;
}
.download-button, .play-button {
  pointer-events: all;
  z-index: 10;
}
.video-content h3 {
  margin-top: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  text-align: center;
}
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  position: relative;
  width: 80%;
  max-width: 1200px;
}
.modal-video-player {
  width: 100%;
  max-height: 80vh;
  border-radius: 8px;
}
.close-button {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 10;
}
/* Pucture Section */
.page-content {
  padding: 2rem;
  max-width: 1200px; /* Controls content width */
  margin: 0 auto; /* Centers the grid */
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Force 3 columns */
  gap: 1.5rem;
  padding: 0 1rem; /* Horizontal padding */
}

@media (max-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
  }
}

@media (max-width: 640px) {
  .card-grid {
    grid-template-columns: 1fr; /* 1 column for mobile */
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

/* Gaps */
.pagination > button {
  margin: 0 0.25rem; /* Small gap for page numbers */
}

.pagination > button:first-child,
.pagination > button:last-child {
  margin: 0 0.75rem; /* Larger gap for arrows */
}

</style>
