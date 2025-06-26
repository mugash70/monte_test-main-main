<template>
  <div>
    <HeroBanner :title="t('coalIndustry.title')" image="/hero/coal.jpg" />

    <section class="coal-intro">
      <div class="coal-overlay">
        <div class="coals-content">
          <p :class="{ 'vertical-text': isMongolian }">{{ t('coalIndustry.intro') }}</p>

          <div class="triangle-buttons-container">
            <div class="triangle-layout">
              <img src="/icons/new_squr.png" class="triangle-bg" alt="Triangle Background" />

              <div class="circle-wrapper top">
                <button
                  class="circle-button top"
                  @mouseover="hoveredButton = 'production'"
                  @mouseleave="hoveredButton = null"
                  :class="{ 'button-hovered': hoveredButton === 'production' }"
                >
                  <div class="button-content" style="background-image: url('icons/new_squr_item1.png')" alt="t('coalIndustry.ttop')" loading="lazy">
                    <img src="/icons/new_squr_icon1.png" class="button-icon" />
                    <span class="button-label" :class="{ 'vertical-text': isMongolian }">{{ t('coalIndustry.ttop') }}</span>
                  </div>
                </button>
              </div>

              <div class="circle-wrapper left">
                <button
                  class="circle-button left"
                  @mouseover="hoveredButton = 'sale'"
                  @mouseleave="hoveredButton = null"
                  :class="{ 'button-hovered': hoveredButton === 'sale' }"
                >
                  <div class="button-content" style="background-image: url('icons/new_squr_item2.png')" alt="t('coalIndustry.tleft')" loading="lazy">
                    <img src="/icons/new_squr_icon2.png" class="button-icon" />
                    <span class="button-label" :class="{ 'vertical-text': isMongolian }">{{ t('coalIndustry.tleft') }}</span>
                  </div>
                </button>
              </div>

              <div class="circle-wrapper right">
                <button
                  class="circle-button right"
                  @mouseover="hoveredButton = 'transportation'"
                  @mouseleave="hoveredButton = null"
                  :class="{ 'button-hovered': hoveredButton === 'transportation' }"
                >
                  <div class="button-content" style="background-image: url('icons/new_squr_item3.png')" alt="t('coalIndustry.tright')" loading="lazy">
                    <img src="/icons/new_squr_icon3.png" class="button-icon" />
                    <span class="button-label" :class="{ 'vertical-text': isMongolian }">{{ t('coalIndustry.tright') }}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="coal-content">
      <div class="coal-container">
        <!-- GRID-ROW 1: Image + Flex Content -->
        <div class="grid-row">
          <!-- First Column: Full-width image -->
          <div class="first-col image-col">
            <img src="/media/coalindustry1.jpg" :alt="t('coalIndustry.sections.production.altText1')">
          </div>

          <!-- Second Column: Image + Text side by side (flex) -->
          <div class="first-col text-col">
            <div class="flex-wrapper">
              <img src="/media/coalindustry2.jpg" :alt="t('coalIndustry.sections.production.altText2')" class="small-image">
              <div class="content-text" :class="{ 'vertical-text': isMongolian }">
                <h2 class="fade-in">{{ t('coalIndustry.sections.production.title') }}</h2>
                <div class="description">
                  <p>{{ t('coalIndustry.sections.production.description') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SECOND-ROW: Text + Image Grid -->
        <div class="second-row">
          <!-- Text Column -->
          <div class="grid-col2 text-col fade-in" :class="{ 'vertical-text': isMongolian }">
            <h2>{{ t('coalIndustry.sections.transportation.title') }}</h2>
            <div class="description">
              <p>{{ t('coalIndustry.sections.transportation.description') }}</p>
            </div>
          </div>

          <!-- Full-Width Image Column -->
          <div class="grid-col2 image-col2 full-width-image">
            <img src="/media/coalindustry3.jpg" :alt="t('coalIndustry.sections.transportation.altText1')">
          </div>

          <!-- Stacked Images Column -->
          <div class="grid-col2 image-col2 stacked-images">
            <img src="/media/coalindustry4.jpg" :alt="t('coalIndustry.sections.transportation.altText2')">
            <img src="/media/coalindustry5.jpg" :alt="t('coalIndustry.sections.transportation.altText3')">
          </div>
        </div>

        <!-- GRID-ROW 3: Image with Text Overlay -->
        <div class="grid-row3">
          <div class="image-with-text">
            <img src="/media/coalindustry6.jpg" :alt="t('coalIndustry.sections.sales.altText')">
            <div class="text-overlay fade-in" :class="{ 'vertical-text': isMongolian }">
              <h2>{{ t ('coalIndustry.sections.sales.title') }}</h2>
              <div class="description">
                <p>{{ t('coalIndustry.sections.sales.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel section -->
      <div class="wrapper-bot">
        <section class="bottom-section">
          <h2 class="section-title" :class="{ 'vertical-text-ca': isMongolian }">{{ t('coalIndustry.developmentProject.title') }}</h2>

          <div class="carousel-container">
            <div class="carousel-wrapper">
              <div class="carousel-track">
                <div
                  class="card-item"
                  v-for="(item, index) in coalItems"
                  :key="`bottom-${index}`"
                  @click="goToDetail(item)"
                >
                  <div class="card-image">
                    <img :src="item.image" :alt="item.titleKey" />
                  </div>
                  <h5 class="card-title" :class="{ 'vertical-text': isMongolian }">{{ t(item.titleKey) }}</h5>
                  <div class="bottom-border"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroBanner from '@/components/ui/HeroBanner.vue';
import { useRouter } from 'vue-router';
import { useCoal } from '@/composables/useCoal';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t,locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
const { coalItems } = useCoal();
const router = useRouter();
const hoveredButton = ref<string | null>(null);

const goToDetail = (item: { slug: string }) => {
  router.push(`/coal-industry/${item.slug}`);
};
</script>

<style scoped>
.triangle-buttons-container {
  text-align: center;
  margin-top: 2rem;
  position: relative;
}

.triangle-layout {
  position: relative;
  width: 520px;
  height: 480px;
  margin: 0 auto;
}

.triangle-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 520px;
  height: 480px;
  object-fit: contain;
  z-index: 0;
  pointer-events: none;
}

/* OUTER CIRCLE - Decorative Wrapper */
.circle-wrapper {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.top {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border: 2px solid rgba(255, 107, 107, 0.4);
  }

  &.left {
    bottom: 40px;
    left: 0;
    border: 2px solid rgba(128, 128, 128, 0.4);
  }

  &.right {
    bottom: 40px;
    right: 0;
    border: 2px solid rgba(128, 128, 128, 0.4);
  }
}

/* INNER BUTTON (no positioning here, centered by wrapper) */
.circle-button {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-button:hover {
  transform: scale(1.08);
}

.circle-button .button-content {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.circle-button .button-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
  z-index: 2;
}

.circle-button .button-label {
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin-top: 8px;
  z-index: 2;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7);
}

.button-hovered .button-content::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(255, 0, 0, 0.4);
  z-index: 1;
  transition: background-color 0.3s ease;
}

.coal-intro {
  position: relative;
  width: 100%;
  height: 150vh;
  background-image: url('/media/coalindustry1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  margin-top: -40px;
  filter: brightness(1.5);
}

.coal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(89, 87, 87, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 1;
}

.coals-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
  padding-left: 20px;
  padding-right: 20px;
}

.coals-content p {
  font-size: 1.2rem;
  line-height: 1.6;
  font-weight: 500;
}

/* SECTION: Outer Container */
.coal-content {
  position: relative;
  padding: 4rem 2rem;
  background-color: #f9f9f9;
}

.coal-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* GRID-ROW 1: Image + Flex Content */
.grid-row {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: stretch;
  gap: 2rem;
  min-height: 400px;
}

/* First Column: Full-width Image */
.grid-row .image-col img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Second Column: Flex Content */
.grid-row .text-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Flex Wrapper: Image + Text */
.grid-row .flex-wrapper {
  display: flex;
  align-items: stretch;
  gap: 1.5rem;
  height: 100%;
}

/* Small Image: Scales to fit */
.grid-row .flex-wrapper .small-image {
  flex: 0 0 20%;
  object-fit: cover;
  border-radius: 8px;
  height: 100%;
  width: auto;
}

/* Text Content: Takes remaining space */
.grid-row .flex-wrapper .content-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.grid-row .content-text h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.grid-row .content-text .description p {
  font-size: 1rem;
  line-height: 1.6;
}

/* SECOND-ROW: 3-Column Layout */
.second-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: stretch;
  gap: 2rem;
}

/* Text Column */
.grid-col2.text-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.grid-col2.text-col h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.grid-col2.text-col .description p {
  font-size: 1rem;
  line-height: 1.6;
}

/* Full-Width Image Column */
.grid-col2.image-col2.full-width-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Stacked Images Column */
.grid-col2.image-col2.stacked-images {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
}

.grid-col2.image-col2.stacked-images img {
  flex: 1;
  width: 100%;
  height: 0;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
}

.second-row {
  min-height: 400px;
}

/* GRID-ROW 3: Single Column with Image + Text Overlay */
.grid-row3 {
  position: relative;
  width: 100%;
  height: 450px;
  overflow: hidden;
  border-radius: 8px;
}

.image-with-text {
  position: relative;
  width: 100%;
  height: 100%;
}

.image-with-text img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Text Overlay on Image */
.image-with-text .text-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 35%;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.image-with-text .text-overlay h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
  position: relative;
  padding-bottom: 0.75rem;
}

.image-with-text .text-overlay h2::after {
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

.image-with-text .description p {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  font-family: "Microsoft Yahei", arial, sans-serif;
}

.text-col h2 {
  font-size: 2.2em;
  font-weight: normal;
  margin-bottom: 1.5rem;
  font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
  position: relative;
  padding-bottom: 0.75rem;
}

.text-col {
  justify-content: flex-start;
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
}

.section-title {
  position: relative;
  display: inline-block;
  font-size: 30px;
  font-weight: normal;
  margin-bottom: 2rem;
  color: #595757;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #f7931e 0%, #f7931e 50%, #ff4444 50%, #ff4444 100%);
}

/* Optional: Fade-in Animations */
.fade-in {
  animation: fadeIn 1s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.wrapper-bot {
  padding: 4rem 2rem;
  background: #f8f9fa;
}

.bottom-section {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
}

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.carousel-wrapper {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  padding-bottom: 1rem;
}

.carousel-track {
  display: flex;
  gap: 1rem;
}

.card-item {
  flex: 0 0 auto;
  width: 280px;
  scroll-snap-align: start;
  background: transparent;
  border-radius: 0;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.card-image {
  overflow: hidden;
  border-radius: 8px;
}

.card-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.4s ease-in-out;
}

.card-item:hover .card-image img {
  transform: scale(1.1);
}

.card-title {
  font-size: 1.1rem;
  margin: 0.75rem 0;
}

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
.vertical-text-ca {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  max-height: 160px;
  overflow: hidden;
  word-break: break-word;
}
.coal-intro .vertical-text {
  max-height: 100px;
}

.card-title .vertical-text {
  max-height: 15px;
}

.bottom-section.section-title .vertical-text {
  max-height: 50px;
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .grid-row,
  .second-row,
  .grid-row3 {
    grid-template-columns: 1fr;
  }

  .grid-row .flex-wrapper {
    flex-direction: column;
    align-items: flex-start;
  }

  .grid-col2.image-col2 .image-grid2 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .coal-intro {
    height: 100vh;
    margin-top: -20px;
  }

  .coals-content p {
    font-size: 1rem;
  }

  .triangle-layout {
    width: 320px;
    height: 300px;
  }

  .triangle-bg {
    width: 320px;
    height: 300px;
  }

  .circle-wrapper {
    width: 120px;
    height: 120px;
  }

  .circle-button {
    width: 100px;
    height: 100px;
  }

  .circle-button .button-icon {
    width: 32px;
    height: 32px;
  }

  .circle-button .button-label {
    font-size: 12px;
  }

  .grid-row {
    grid-template-columns: 1fr;
  }

  .grid-row .flex-wrapper {
    flex-direction: column;
    align-items: center;
    height: auto;
  }

  .grid-row .flex-wrapper .content-text {
    min-height: clamp(100px, 20vh, 150px);
  }

  .grid-row .content-text .description {
    max-height: none;
    overflow-y: auto;
    padding: 0.5rem;
    font-size: clamp(0.8rem, 1.8vw, 1rem);
  }

  .grid-row .content-text.vertical-text {
    max-height: none;
    overflow-y: auto;
  }

  .second-row {
    grid-template-columns: 1fr;
  }

  .grid-col2.image-col2.stacked-images {
    flex-direction: column;
    gap: clamp(0.5rem, 1vw, 0.75rem);
  }

  .grid-row3 {
    height: auto;
  }

  .image-with-text .text-overlay {
    position: static;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    padding: clamp(0.75rem, 1.5vw, 1rem);
  }

  .card-item {
    width: 200px;
  }

  /* Uniform image dimensions */
  .image-col img,
  .flex-wrapper .small-image,
  .image-col2.stacked-images img,
  .image-with-text img,
  .card-image img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .vertical-text {
    padding: clamp(0.25rem, 0.8vw, 0.5rem);
    max-height: 150px;
    overflow-y: auto;
    line-height: 1.4;
    white-space: normal;
  }

  .coal-intro .vertical-text {
    max-height: clamp(60px, 25vh, 100px);
  }

  .card-title.vertical-text {
    max-height: clamp(50px, 15vh, 80px);
  }

  .section-title.vertical-text {
    max-height: clamp(50px, 15vh, 80px);
  }

  .vertical-text .button-label {
    max-height: clamp(30px, 12vh, 50px);
    font-size: clamp(8px, 1.6vw, 10px);
  }
}

@media (max-width: 480px) {
  .card-item {
    width: 160px;
  }

  /* Uniform image dimensions */
  .image-col img,
  .flex-wrapper .small-image,
  .image-col2.stacked-images img,
  .image-with-text img,
  .card-image img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
}
</style>