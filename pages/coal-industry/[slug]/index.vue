<template>
  <div>
    <HeroBanner :title="t('coalIndustry.title')" image="/hero/coal.jpg" />

    <section class="page-intro" :class="{ 'vertical-text': isMongolian }">
      <h4>{{ t(item?.titleKey || '') }}</h4>
    </section>

    <section class="page-content" :class="{ 'vertical-text': isMongolian }" v-html="translatedHtmlContent"></section>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import HeroBanner from '@/components/ui/HeroBanner.vue';
import { useCoal } from '@/composables/useCoal';

const { t, locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
const route = useRoute();
const { getCoalBySlug } = useCoal();

const slug = computed(() => route.params.slug as string);
const item = computed(() => getCoalBySlug(slug.value));

const translatedHtmlContent = computed(() => {
  if (!item.value?.contentKeys) return '';
  return item.value.contentKeys
    .map((key) => `<p>${t(key)}</p>`)
    .join('');
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: clamp(0.5rem, 1vw, 0.75rem);
  overflow-y: auto;
  overflow-wrap: anywhere;
  line-height: 1.4;
  text-align: center;
}
.page-intro {
  text-align: center;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: clamp(100px, 30vh, 200px);
}

.page-intro.vertical-text {
  max-height: clamp(150px, 50vh, 250px);
  text-align: center;
padding-left: 500px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page-content.vertical-text {
  max-height: none;
}

:deep(.page-content p) {
  text-align: left;
  padding: 1rem;
  line-height: 1.6;
  font-size: 1.125rem;
  color: #555;
}

.page-content.vertical-text :deep(p) {
  text-align: center;
}

:deep(.page-content img) {
  max-width: 100%;
  height: auto;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .page-intro {
    margin: clamp(1rem, 2vw, 1.5rem);
    padding: clamp(0.5rem, 1vw, 0.75rem);
    height: clamp(80px, 25vh, 150px);
  }

  .page-intro h4 {
    font-size: clamp(1.2rem, 4vw, 1.6rem);
    max-width: clamp(200px, 80vw, 400px);
    padding: clamp(0.5rem, 1vw, 0.75rem);
  }

  .page-intro.vertical-text {
    max-height: clamp(120px, 40vh, 200px);
    padding: clamp(0.25rem, 0.8vw, 0.5rem);
    padding-left: 180px;
  }

  .page-content {
    max-width: clamp(300px, 90vw, 600px);
    padding: clamp(1rem, 2vw, 1.5rem);
  }

  .page-content.vertical-text {
    padding: clamp(0.25rem, 0.8vw, 0.5rem);
  }

  :deep(.page-content p) {
    font-size: clamp(0.9rem, 3vw, 1rem);
    padding: clamp(0.5rem, 1vw, 0.75rem);
  }
}

@media (max-width: 480px) {
  .page-intro {
    margin: clamp(0.75rem, 1.5vw, 1rem);
    height: clamp(60px, 20vh, 120px);
  }

  .page-intro h4 {
    font-size: clamp(1rem, 3.5vw, 1.4rem);
    max-width: clamp(150px, 85vw, 300px);
    padding: clamp(0.25rem, 0.8vw, 0.5rem);
  }

  .page-intro.vertical-text {
    max-height: clamp(100px, 35vh, 150px);
  }

  .page-content {
    padding: clamp(0.75rem, 1.5vw, 1rem);
  }

  :deep(.page-content p) {
    font-size: clamp(0.8rem, 2.8vw, 0.9rem);
    padding: clamp(0.25rem, 0.8vw, 0.5rem);
  }
}
</style>