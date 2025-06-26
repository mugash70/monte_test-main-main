<template>
  <div>
    <HeroBanner :title="t('ecoIndustry.heroTitle')" image="/hero/eco-industry.jpg" />

    <section class="page-intro">
      <h4 :class="{ 'vertical-text': isMongolian }">{{ t('ecoIndustry.heading') }}</h4>
      <section class="page-content">
        <div>
        <p :class="{ 'vertical-text-main': isMongolian }">{{ t('ecoIndustry.paragraph1') }}</p>
        <p :class="{ 'vertical-text-main': isMongolian }">{{ t('ecoIndustry.paragraph2') }}</p>
        </div>
        <h6 :class="{ 'vertical-text': isMongolian }">{{ t('ecoIndustry.greenPlanting') }}</h6>
        <img src="/media/eco1.jpg" alt="Green Planting Industry" />
        <h6 :class="{ 'vertical-text': isMongolian }">{{ t('ecoIndustry.blackDonkey') }}</h6>
        <img src="/media/eco2.jpg" alt="Black Donkey Breeding Industry" />
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
  display: block;
  text-align: left;
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
.page-content h6 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  color: #333;
  text-align: left;
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
.vertical-text-main{ 
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
</style>

