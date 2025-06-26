<template>
  <div>
    <HeroBanner :title="t('thermalPower.title')" image="/hero/thermal-detail.jpg" />

    <section class="page-intro">
      <h4 :class="{ 'vertical-title': isMongolian }">{{ t(item?.titleKey || '') }}</h4>
    </section> 
    <section class="page-content" :class="{ 'vertical-content': isMongolian }" v-html="translatedHtmlContent"></section>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroBanner from '@/components/ui/HeroBanner.vue'
import { useThermo } from '@/composables/useThermo'

const { t, locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');

const route = useRoute()
const { getThermoBySlug } = useThermo()

const slug = computed(() => route.params.slug as string)
const item = computed(() => getThermoBySlug(slug.value))

const translatedHtmlContent = computed(() => {
  if (!item.value?.contentKeys) return ''
  return item.value.contentKeys
    .map((key) => `<p>${t(key)}</p>`)
    .join('')
})
</script>

<style scoped>
.page-intro {
  text-align: center;
  margin: 2rem 0;
}
.page-intro h4 {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin: 0 auto 1rem;
  max-width: 600px;
  line-height: 1.4;
  padding: 0 1rem;
}

.page-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  border-top: 1px solid #ccc;
}

:deep(.page-content p ){
  text-align: left;
  padding: 1rem 1rem;
  line-height: 1.6;
  font-size: 1.125rem;
  color: #555;
}
.vertical-title  {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;

  padding: 1rem 0.5rem;
  max-height: 350px;
    overflow: hidden;
    word-break: break-word;
}

.vertical-content {
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
</style>
