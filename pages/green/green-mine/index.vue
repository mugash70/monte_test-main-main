<template>
  <div>
    <HeroBanner :title="t('greenMine.heroTitle')" image="/hero/green-mine.jpg" />

    <section class="page-intro">
      <h4 :class="{ 'vertical-text': isMongolian }">{{ t('greenMine.title') }}</h4>

      <section class="page-content">
        <p :class="{ 'vertical-text-main': isMongolian }">{{ t('greenMine.description1') }}</p>
        <p :class="{ 'vertical-text-main': isMongolian }">{{ t('greenMine.description2') }}</p>

        <h6 :class="{ 'vertical-text': isMongolian }">{{ t('greenMine.subTitle') }}</h6>

        <ul>
          <li v-for="(item, index) in greenMinelist" :key="index" :class="{ 'vertical-text-main': isMongolian }">
            {{ item }}
          </li>
        </ul>

        <h6 :class="{ 'vertical-text': isMongolian }">{{ t('greenMine.outro') }}</h6>

        <img src="/media/mine1.jpg" :alt="t('greenMine.imageAlt1')" />
        <img src="/media/mine2.jpg" :alt="t('greenMine.imageAlt2')" />
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroBanner from '@/components/ui/HeroBanner.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue';

const { t, tm, rt, locale } = useI18n()

const isMongolian = computed(() => locale.value === 'mn')

const greenMinelist = computed(() => {
  const raw = tm('greenMine.list') as unknown
  return Array.isArray(raw) ? raw.map(item => rt(item)) : []
})
</script>

<style scoped>
.page-intro {
  text-align: center;
  margin: 2rem 0;
  padding: 0 1rem;
}

.page-intro h4 {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  color: #333;
  margin: 0 auto 1rem;
  max-width: min(90%, 600px);
  line-height: 1.4;
}

.page-content {
  max-width: min(90%, 800px);
  margin: 0 auto;
  padding: 2rem 1rem;
  border-top: 1px solid #ccc;
}

.page-content p {
  text-align: left;
  padding: 1rem 0;
  line-height: 1.6;
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  color: #555;
}

.page-content ul {
  list-style-type: disc;
  list-style-position: outside;
  padding-left: 2rem;
  margin: 1rem 0;
}

.page-content li {
  display: list-item;
  text-align: left;
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  padding: 0.5rem 0;
  line-height: 1.5;
  color: #555;
}

.page-content h4 {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 600;
  margin: 2rem 0 1rem;
  color: #333;
  text-align: left;
}

.page-content h6 {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 600;
  margin: 2rem 0 1rem;
  color: #333;
  text-align: center;
}

.page-content img {
  width: 100%;
  max-width: min(100%, 800px);
  height: auto;
  margin: 1rem auto;
  border-radius: 0;
  object-fit: cover;
  display: block;
}

.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  max-height: 250px;
  overflow: hidden;
  word-break: break-word;
}

.vertical-text-main {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  max-height: 250px;
  overflow: hidden;
  word-break: break-word;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .page-intro {
    margin: 1.5rem 0;
    padding: 0 0.5rem;
  }

  .page-content {
    padding: 1.5rem 0.5rem;
  }

  .page-content p,
  .page-content li {
    font-size: clamp(0.875rem, 2.5vw, 1rem);
  }

  .page-content ul {
    padding-left: 1.5rem;
  }

  .page-content img {
    max-width: 100%;
    margin: 0.5rem auto;
  }

  .vertical-text {
    max-height: 200px;
    padding: 0.5rem;
    font-size: clamp(0.875rem, 2.5vw, 1rem);
  }

  .vertical-text-main {
    max-height: 300px;
    padding: 0.5rem;
    font-size: clamp(0.875rem, 2.5vw, 1rem);
  }
}

@media (max-width: 480px) {
  .page-intro h4 {
    font-size: clamp(1.25rem, 4vw, 1.5rem);
  }

  .page-content h4 {
    font-size: clamp(1rem, 3vw, 1.25rem);
  }

  .page-content h6 {
    font-size: clamp(0.875rem, 2.5vw, 1rem);
  }

  .page-content p,
  .page-content li {
    font-size: clamp(0.75rem, 2.5vw, 0.875rem);
  }

  .page-content ul {
    padding-left: 1rem;
    margin: 0.5rem 0;
  }

  .vertical-text {
    max-height: 150px;
    padding: 0.25rem;
  }

  .vertical-text-main {
    max-height: 250px;
    padding: 0.25rem;
  }
}
</style>