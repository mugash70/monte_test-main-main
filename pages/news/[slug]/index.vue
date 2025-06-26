<template>
  <div class="news-detail">
    <HeroBanner :title="t('news.heroTitle')" image="/hero/news.jpg" />

    <section class="news-content" v-if="item">
      <h1 class="news-title" :class="{ 'vertical-text': isMongolian }">{{ t(item.descriptionKey) }}</h1>

      <ul class="news-meta">
        <li>{{ item.date }}</li>
        <li :class="{ 'vertical-text': isMongolian }"><strong>{{t('news.source')}}:</strong> {{ t(item.source) }}</li>
        <li :class="{ 'vertical-text': isMongolian }"><strong>{{t('news.views')}}:</strong> {{ item.views }}</li>
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
        <!-- FILE HANDLING: PDF, DOCX, XLSX, etc. -->
<div v-if="item?.files && item.files.length" class="content-files">
  <ul>
    <li v-for="(file, index) in item.files" :key="index">
      <a
        :href="file.url"
        :download="shouldDownload(file.url) ? getFileName(file.url) : null"
        :target="shouldDownload(file.url) ? undefined : '_blank'"
        class="file-link"
      >
        {{ getFileName(file.url) }}
      </a>
    </li>
  </ul>
</div>

        <div v-if="item?.content" class="content" v-html="item.content"></div>
        <div v-if="item?.letter" class="content-letter" v-html="item.letter"></div>


        <div class="social-icons-bar">
          <ul>
            <li><a href="javascript:void(0);" aria-label="WeChat"><i class="fab fa-weixin"></i></a></li>
            <li><a href="javascript:void(0);" aria-label="Weibo"><i class="fab fa-weibo"></i></a></li>
            <li><a href="https://www.linkedin.com/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a></li>
          </ul>
        </div>

        <div class="extra-footer">
          <!-- Sidebar for Previous/Next -->
          <aside class="news-sidebar">
            <div v-if="prevArticle" class="sidebar-link">
              <strong :class="{ 'vertical-link': isMongolian }">{{t('news.prev')}}: </strong>
              <router-link :to="`/news/${prevArticle.slug}`" :class="{ 'vertical-link': isMongolian }">
                {{ t(truncateText(prevArticle.descriptionKey), 50) }}
              </router-link>
            </div>
            <div v-if="nextArticle" class="sidebar-link">
              <strong :class="{ 'vertical-link': isMongolian }">{{t('news.next')}}: </strong>
              <router-link :to="`/news/${nextArticle.slug}`" :class="{ 'vertical-link': isMongolian }">
                {{ t(truncateText(nextArticle.descriptionKey), 50) }}
              </router-link>
            </div>
          </aside>

          <div class="back-button">
            <button @click="goBack" :class="{ 'vertical-text': isMongolian }">{{t('news.button')}}</button>
          </div>
        </div>
        </div>

    </section>
  </div>
</template>



<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import HeroBanner from '@/components/ui/HeroBanner.vue'
import { useNews } from '@/composables/useNews'
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');


const route = useRoute()
const router = useRouter()

const { cards, getNewsBySlug } = useNews()

const slug = computed(() => route.params.slug as string)
const item = computed(() => getNewsBySlug(slug.value))

const truncateText = (text: string, maxLength: number = 50) => {
  if (!text) return '';
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};
const currentIndex = computed(() =>
  cards.value.findIndex((n) => n.slug === slug.value)
)

const prevArticle = computed(() =>
  currentIndex.value > 0 ? cards.value[currentIndex.value - 1] : null
)

const nextArticle = computed(() =>
  currentIndex.value < cards.value.length - 1 ? cards.value[currentIndex.value + 1] : null
)
const getFileName = (url: string) => {
  const parts = url.split('/')
  return parts[parts.length - 1]
}
const shouldDownload = (url: string) => {
  const downloadExtensions = ['docx', 'xlsx', 'pptx', 'csv', 'zip', 'rar']
  const ext = url.split('.').pop()?.toLowerCase()
  return downloadExtensions.includes(ext ?? '')
}
const goBack = () => router.back()


</script>

<style scoped>
.vertical-text {
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
.vertical-link {
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

.content-desc {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Microsoft Yahei', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.content-header {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 2rem 0 1rem;
  color: #222;
}

.content-paragraph {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.content-image {
  text-align: center;
  margin: 2rem 0;
}

.content-image img {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.content-caption {
  font-size: 0.875rem;
  color: #777;
  margin-top: 0.5rem;
  font-style: italic;
}
.content-files {
  text-align: left;
  margin-bottom: 5rem;
  list-style: none;
}

.content-files li{
  list-style: none;
}
.file-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #000000;
  text-decoration: none;
  border-radius: 0;
  transition: all 0.3s ease;
}

.file-link:hover {
  color: red;
}

.content-letter {
  padding: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  display: block;
  color: #828282;
  border-radius: 0;
  text-align: left;
  text-indent: 40px;
  line-height: 29px;
  font-family: 宋体;
}

:deep(.content-letter p) {
  margin-bottom: 16px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}

:deep(.content-letter ul) {
  padding-left: 20px;
  margin-bottom: 16px;
}
:deep(.content-letter li){
  margin-bottom: 8px;
  list-style: none;
}


:deep(.content-letter strong) {
  font-weight: bold;
  color: #828282;
}

:deep(.content-letter h6 ){
  font-size: 14px;
  font-weight: normal;
  margin-top: 32px;
  text-align: right;
  color: #555;
  line-height: 1.4;
  font-style: italic;
}

:deep(.content-letter h6 br ){
  display: block;
  content: "";
  margin-bottom: 4px;
}
.content {
  font-family: 'Georgia', serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #333;
  padding: 1.5rem;
  border-radius: 0.5rem;
  max-width: 800px;
  margin: 0.1rem auto;
}

:deep(.content p) {
  margin-bottom: 1rem;
}

:deep(.content img) {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 2rem auto;
  border-radius: 0.5rem;
  transition: transform 0.3s ease-in-out;
}

.content-images .gallery {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.content-images img {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.3s ease;
}

.content-images img:hover {
  transform: scale(1.05);
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

</style>
