<template>
  <div>
    <HeroBanner :title="t('husbandry.title')" image="/hero/husbandry.jpg" />

    <section class="tech-intro">
      <div class="tech-content">
        <p  :class="{ 'vertical-head': isMongolian }">{{ t('husbandry.intro.paragraph1') }}</p>
        <p  :class="{ 'vertical-head': isMongolian }">{{ t('husbandry.intro.paragraph2') }}</p>
      </div>
    </section>

    <section class="projects-content">
      <div class="scope">
        <div :class="{ 'vertical-text': isMongolian }">
        <h2 class="section-title"  v-intersect="'in-view'">{{ t('husbandry.sections.farming.title') }}</h2>
        <p class="section-paragraph">{{ t('husbandry.sections.farming.description') }}</p>
      </div>
      <img src="/media/animal1.jpg" :alt="t('husbandry.sections.farming.alt')" />

      <div :class="{ 'vertical-text': isMongolian }">
        <h2 class="section-title" v-intersect="'in-view'">{{ t('husbandry.sections.planting.title') }}</h2>
        <p class="section-paragraph">{{ t('husbandry.sections.planting.description') }}</p>
      </div>
      <img src="/media/animal2.jpg" :alt="t('husbandry.sections.planting.alt')" />

      <div :class="{ 'vertical-text': isMongolian }">
        <h2 class="section-title" v-intersect="'in-view'">{{ t('husbandry.sections.processing.title') }}</h2>
        <p class="section-paragraph">{{ t('husbandry.sections.processing.description') }}</p>
      </div>
      <img src="/media/animal3.png" :alt="t('husbandry.sections.processing.alt')" />

      <div :class="{ 'vertical-text': isMongolian }">
        <h2 class="section-title" v-intersect="'in-view'">{{ t('husbandry.sections.tourism.title') }}</h2>
        <p class="section-paragraph">{{ t('husbandry.sections.tourism.description') }}</p>
      </div>
      <img src="/media/animal4.png" :alt="t('husbandry.sections.tourism.alt')" />
      </div>
    </section>
  </div>
</template>


<script setup lang="ts">
import HeroBanner from '@/components/ui/HeroBanner.vue'
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t,locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
</script>

<style scoped>
.projects-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.tech-intro {
  max-width: 1400px;
  background-color: #f2f2f2;
  padding: 40px 0;
  margin-top: -85px;
}

.tech-intro .tech-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: #595757;
  line-height: 1.8;
}

.tech-intro .tech-content p {
  margin-bottom: 1.5rem;
  text-align: justify;
}

.scope {
  margin-bottom: 2em;
  margin-top: 2em;
  font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
  text-align: start;
  overflow: hidden;
  padding: 0;
}

/* Section Title Animation */
.section-title {
  position: relative;
  display: inline-block;
  font-size: 40px;
  font-weight: normal;
  margin: 2rem 0;
  padding: 0 20px;
  color: #595757;
  font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
  opacity: 0;
  transform: translateY(-30px);
  animation: fadeSlideIn 0.8s ease forwards;
}

/* Pseudo-element Animation */
.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(to right, #f7931e 0%, #f7931e 50%, #ff4444 50%, #ff4444 100%);
  animation: slideBar 1s ease forwards;
  animation-delay: 0.6s;
}

/* Keyframes */
@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideBar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.in-view {
  opacity: 1;
  transform: translateY(0);
}

.in-view::after {
  width: 100%;
}
.section-paragraph {
  color: #595757;
  margin-bottom:40px;
  font-size: 16px;
}

.scope img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  display: block;
  transform: scale(1.08);
  transition: transform 0.5s ease-in;
}

.scope img:hover {
  transform: scale(1);
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
.vertical-head {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;
  max-height: 250px;
    word-break: break-word;
}

@media (max-width: 768px) {
 .vertical-head {
    text-orientation: mixed;
    max-height: none;
    padding: 0.5rem;
    line-height: 1.6;
    max-height: 250px;
  }
  
  .tech-intro .tech-content {
    padding: 0 20px;
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 32px;
  }
}
</style>
