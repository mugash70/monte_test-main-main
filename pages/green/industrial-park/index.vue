<template>
  <div>
    <HeroBanner :title="t('modernPark.heroTitle')" image="/hero/modern-park.jpg" />

    <section class="page-intro">
      <h4 :class="{ 'vertical-text-main': isMongolian }">
        {{ t('modernPark.title') }}
      </h4>

      <section class="page-content">
        <p :class="{ 'vertical-text': isMongolian }">{{ t('modernPark.description1') }}</p>
        <img src="/media/modern1.jpg" :alt="t('modernPark.imageAlt1')" />

        <p :class="{ 'vertical-text': isMongolian }">{{ t('modernPark.description2') }}</p>
        <img src="/media/modern2.jpg" :alt="t('modernPark.imageAlt2')" />
      </section>
    </section>
  </div>
</template>



<script setup lang="ts">
import HeroBanner from '@/components/ui/HeroBanner.vue'
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const { locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
</script>

<style scoped>
.page-intro {
  text-align: center;
  margin: 2rem 0;
}

.page-intro h4 {
  font-size: 2rem;
  font-weight: 300;
  color: #333;
  margin: 0 auto 1rem;
  max-width: 800px;
  line-height: 1.4;
  padding: 0 1rem;
}

.page-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  border-top: 1px solid #ccc; 
}

.page-content p {
  padding: 1rem 1rem;
  line-height: 1.6;
  font-size: 1.125rem;
  color: #555;
}

.page-content img {
  width: 100%;
  height: auto;
  margin: 1rem 0;
  border-radius: 0;
  object-fit: cover;
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
.vertical-text-main{ 
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
</style>


