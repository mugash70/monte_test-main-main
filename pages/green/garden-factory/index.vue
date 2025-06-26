<template>
  <div>
    <HeroBanner :title="t('gardenFactory.heroTitle')" image="/hero/garden-factory.jpg" />

    <section class="page-intro">
      <h4 :class="{ 'vertical-text': isMongolian }">{{ t('gardenFactory.heading') }}</h4>

      <section class="page-content">
        <p :class="{ 'vertical-text': isMongolian }">{{ t('gardenFactory.description') }}</p>
        <img src="/media/garden1.jpg" alt="Garden 1" />
        <img src="/media/garden2.png" alt="Garden 2" />
        <img src="/media/garden3.png" alt="Garden 3" />
        <img src="/media/garden4.jpg" alt="Garden 4" />
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
  max-height: 150px;
    overflow: hidden;
    word-break: break-word;
}
</style>

