<template>
  <div>
    <HeroBanner :title="t('staffStyle.title')" image="/hero/join.jpg" />

    <section class="party-content" v-if="detail">
      <h1 class="party-title" :class="{ 'vertical-head': isMongolian }">{{ t(detail.titleKey) }}</h1>

      <ul class="party-meta">
        <li>{{ formatDate(detail.date) }}</li>
        <li :class="{ 'vertical-no': isMongolian }"><strong :class="{ 'vertical-head': isMongolian }" >{{ t('staffStyle.source') }}:</strong> {{ t(detail.source) || 'Official' }}</li>
        <li :class="{ 'vertical-no': isMongolian }"><strong :class="{ 'vertical-head': isMongolian }">{{ t('staffStyle.views') }}:</strong> {{ t(detail.views) || '0' }}</li>
        <li class="social-icons">
          <a href="javascript:void(0);" aria-label="WeChat"><i class="fab fa-weixin"></i></a>
          <a href="javascript:void(0);" aria-label="Weibo"><i class="fab fa-weibo"></i></a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        </li>
      </ul>
    </section>

    <div class="news-extra-container">
      <div class="news-extra">
      <div class="pb-page" v-if="detail">
        <v-img :src="detail.mainImage" height="300px" cover class="max-w-full mb-4" />
        
     
        <div
        v-for="(paragraph, idx) in detail.paragraphs"
        :key="idx"
        class="paragraph-block"
        :class="{ 'vertical-text': isMongolian }"
      >
        {{ t(paragraph) || paragraph }}
      
        <v-img
          v-if="detail.contentImages && detail.contentImages[idx]"
          :src="detail.contentImages[idx]"
          class="content-img"
          height="300"
          cover
        />
      </div>
      </div>
      
      <div v-else class="pb-page" :class="{ 'vertical-head': isMongolian }">
        <p>Content not found for slug: {{ slug }}</p>
      </div>

      <div class="social-icons-bar">
        <ul>
          <li> <a href="javascript:void(0);" aria-label="WeChat"><i class="fab fa-weixin"></i></a></li>
          <li> <a href="javascript:void(0);" aria-label="Weibo"><i class="fab fa-weibo"></i></a></li>
          <li> <a href="https://www.linkedin.com/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
      
      <div class="extra-footer">
        <!-- Sidebar for Previous/Next -->
        <aside class="news-sidebar" :class="{ 'vertical-text': isMongolian }">
          <div v-if="prevArticle" class="sidebar-link">
            <strong>{{ t('news.prev') }}: </strong>
            <router-link :to="`/join-us/${prevArticle.slug}`">
              {{ truncateText(t(prevArticle.titleKey), 50) }}
            </router-link>
          </div>
          <div v-if="nextArticle" class="sidebar-link">
            <strong>{{ t('news.next') }}: </strong>
            <router-link :to="`/join-us/${nextArticle.slug}`">
              {{ truncateText(t(nextArticle.titleKey), 50) }}
            </router-link>
          </div>
        </aside>

        <div class="back-button" :class="{ 'vertical-text': isMongolian }">
          <button @click="goBack">{{ t('news.button') }}</button>
        </div>
      </div>
    </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type { StaffStyleDetail } from '@/composables/useStaff'
import { staffStyleCards } from '@/composables/useStaff'
import HeroBanner from '@/components/ui/HeroBanner.vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
const slug = route.params.slug as string

const detail = computed< StaffStyleDetail | undefined>(() => {
  return staffStyleCards.find(card => card.slug === slug)
})

function formatDate(date: string): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

const truncateText = (text: string, maxLength: number = 50) => {
  if (!text) return ''
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}

// Fixed: Get current index from the cards array, not from detail
const currentIndex = computed(() => {
  if (!detail.value) return -1
  return staffStyleCards.findIndex(card => card.slug === slug)
})

const prevArticle = computed(() => {
  const index = currentIndex.value
  return index > 0 ? staffStyleCards[index - 1] : null
})

const nextArticle = computed(() => {
  const index = currentIndex.value
  return index >= 0 && index < staffStyleCards.length - 1 
    ? staffStyleCards[index + 1] 
    : null
})

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/join-us')
  }
}
</script>

<style scoped>
.vertical-head {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  max-height: 200px;
    overflow: hidden; 
    word-break: break-word;
}
.vertical-no {
  text-orientation: mixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  max-height: 200px;
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
  max-height: 150px;
    overflow: hidden; 
    word-break: break-word;
}
.party-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.party-title {
  font-family: "Microsoft Yahei", Arial, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
  line-height: 1.4;
}

.party-meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  list-style: none;
  padding-left: 0;
  font-size: 0.95rem;
  color: #666;
}

.party-meta li {
  font-family: "Microsoft Yahei", Arial, sans-serif;
  margin: 0.5rem 0;
}

.pb-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
}

.pb-page .paragraph-block {
  display: block;
  text-align: left;
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 1.5rem;
}

.pb-page .paragraph-block v-img,
.pb-page .paragraph-block img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 1rem;
}

.news-extra-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  padding: 2rem;
  max-width: 900px;
  border-radius: 1rem;
}

.social-icons {
  display: flex;
  gap: 0.5rem;
}
.content-img {
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 1rem;
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
  margin-top: 2rem;
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
  transition: color 0.3s ease;
}

.social-icons-bar li i:hover {
  color: red;
}

.extra-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 1.5rem 0;
  margin-top: 2rem;
}

.news-sidebar .sidebar-link {
  font-size: 1rem;
  display: flex;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
}

.news-sidebar a {
  color: #000;
  text-decoration: none;
  transition: color 0.3s ease;
}

.news-sidebar a:hover {
  color: red;
}

.back-button {
  text-align: right;
}

.back-button button {
  padding: 0.6rem 1.5rem;
  font-weight: 600;
  color: #fff;
  background: red;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 0;
  transition: all 0.3s ease;
}

.back-button button:hover {
  background-color: #b20000;
}
</style>