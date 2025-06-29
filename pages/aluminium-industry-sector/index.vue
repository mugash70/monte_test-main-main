<template>
  <div>
    <HeroBanner :title="t('aluminiumIndustry.title')" image="/hero/aluminium.jpg" />
    <div class="responsive-spacing"></div>
    <section class="tech-intro">
      <div class="tech-content" :class="{ 'vertical-text': isMongolian }">
        <p>{{ t('aluminiumIndustry.intro') }}</p>
      </div>
    </section>

    <section class="projects-content">
      <div class="grid-container">
        <!-- Row 1 -->
        <div class="grid-row">
          <div class="grid-col image-col">
            <img src="/media/alum1.jpg" :alt="t('aluminiumIndustry.projects.primary.altText')">
          </div>
          <div class="grid-col text-col" :class="{ 'vertical-text': isMongolian }">
            <h2 class="fade-in">{{ t('aluminiumIndustry.projects.primary.title') }}</h2>
            <div class="description">
              <p>{{ t('aluminiumIndustry.projects.primary.description') }}</p>
            </div>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="grid-row">
          <div class="grid-col image-col">
            <img src="/media/alum2.jpg" :alt="t('aluminiumIndustry.projects.highEnd.altText')">
          </div>
          <div class="grid-col text-col fade-in" :class="{ 'vertical-text': isMongolian }">
            <h2 class="fade-in">{{ t('aluminiumIndustry.projects.highEnd.title') }}</h2>
            <div class="description">
              <p>{{ t('aluminiumIndustry.projects.highEnd.description') }}</p>
            </div>
          </div>
        </div>

        <!-- Row 3 -->
        <div class="grid-row">
          <div class="grid-col image-col">
            <img src="/media/alum3.jpg" :alt="t('aluminiumIndustry.projects.deepProcessing.altText')">
          </div>
          <div class="grid-col text-col fade-in" :class="{ 'vertical-text': isMongolian }">
            <h2 class="fade-in">{{ t('aluminiumIndustry.projects.deepProcessing.title') }}</h2>
            <div class="description">
              <p>{{ t('aluminiumIndustry.projects.deepProcessing.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroBanner from '@/components/ui/HeroBanner.vue';
import { onMounted, onBeforeUnmount, computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const { locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.2 }
  );

  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => observer.observe(el));

  onBeforeUnmount(() => {
    elements.forEach(el => observer.unobserve(el));
  });
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.tech-intro {
  width: 100%;
  background-color: #f2f2f2;
  padding: clamp(1rem, 3vw, 2rem) clamp(0.5rem, 2vw, 1rem);
  margin-top: -85px;
}

.tech-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
  text-align: center;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 500;
  color: #595757;
  line-height: 1.8;
}

.tech-content p {
  margin-bottom: 1.5rem;
  text-align: justify;
}

.projects-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(1rem, 2vw, 1.5rem) clamp(0.5rem, 1vw, 0.75rem);
}

.grid-container {
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vw, 1.5rem);
}

.grid-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: clamp(0.75rem, 2vw, 1rem);
}

.grid-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(0.75rem, 2vw, 1rem);
}

.image-col {
  overflow: hidden;
  padding: 0;
}

.image-col img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease, filter 0.5s ease;
}

.image-col img:hover {
  transform: scale(1.08);
  filter: brightness(1.05) contrast(1.1);
}

.text-col {
  justify-content: flex-start;
}

.text-col h2 {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: normal;
  margin-bottom: 1.5rem;
  font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
  position: relative;
  padding-bottom: 0.75rem;
}

.text-col h2::after {
  content: '';
  position: absolute;
  bottom: -0.25rem;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(
    to right,
    #f7931e 0%,
    #f7931e 50%,
    #ff4444 50%,
    #ff4444 100%
  );
}

.description {
  overflow-y: auto;
  line-height: 1.6;
  font-family: "Microsoft Yahei", arial, sans-serif;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

.fade-in {
  opacity: 0;
  transform: translateY(-30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.active {
  opacity: 1;
  transform: translateY(0);
}

.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: clamp(0.5rem, 1vw, 0.75rem);
  max-height: 350px;
  overflow-y: auto;
  overflow-wrap: anywhere;
}

.tech-intro .vertical-text {
  max-height: clamp(100px, 40vh, 250px);
}

.vertical-text .text-col h2::after {
  content: "";
  display: inline-block;
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, #f7931e 0%, #f7931e 50%, #ff4444 50%, #ff4444 100%);
  border-radius: 2px;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.3);
  margin-left: 0.25rem;
  writing-mode: vertical-lr;
  vertical-align: top;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .grid-row {
    gap: clamp(0.5rem, 1vw, 0.75rem);
  }

  .tech-content {
    padding: 0 clamp(0.5rem, 2vw, 1rem);
  }
}

@media (max-width: 768px) {
  .grid-row {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .image-col img {
    max-height: 300px;
  }

  .grid-col {
    padding: clamp(0.5rem, 1vw, 0.75rem);
  }

  .vertical-text {
    max-height: clamp(250px, 70vh, 350px);
    white-space: normal;
  }

  .tech-intro .vertical-text {
    max-height: clamp(80px, 30vh, 120px);
  }
}

@media (max-width: 480px) {
  .projects-content {
    padding: clamp(0.5rem, 1vw, 0.75rem) clamp(0.25rem, 0.5vw, 0.5rem);
  }

  .tech-intro {
    padding: clamp(0.5rem, 2vw, 1rem) clamp(0.25rem, 0.5vw, 0.5rem);
  }

  .vertical-text {
    max-height: clamp(200px, 60vh, 300px);
  }

  .tech-intro .vertical-text {
    max-height: clamp(60px, 25vh, 100px);
  }
}

/* Responsive spacing */
.responsive-spacing {
  margin-top: 5rem;
}

@media (max-width: 768px) {
  .responsive-spacing {
    margin-top: 2rem;
  }
}

@media (max-width: 480px) {
  .responsive-spacing {
    margin-top: 1.5rem;
  }
}
</style>