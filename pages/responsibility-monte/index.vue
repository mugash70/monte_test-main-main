<template>
  <div>
    <HeroBanner :title="t('responsibility.heroTitle')" image="/hero/responsibility.jpg" />

    <section class="top-section">
      <div :class="{ 'vertical-text-main': isMongolian }">
        <h2 class="section-title">{{ t('responsibility.top.title') }}</h2>
        <p class="section-para">
          {{ t('responsibility.top.description') }}
        </p>
      </div>
      <section class="grid-gallery">
        <div class="grid-item" v-for="(item, index) in items" :key="index">
          <div class="image-wrapper">
            <img :src="item.image" :alt="t(item.titleKey)" />
          </div>
          <h5 :class="{ 'vertical-text-card': isMongolian }">{{ t(item.titleKey) }}</h5>
        </div>
      </section>
    </section>

    <div class="wrapper">
      <section class="middle-section">
        <h2 class="section-title" :class="{ 'vertical-text-title': isMongolian }">{{ t('responsibility.middle.title') }}</h2>

        <div class="grid-container">
          <!-- Row 1 -->
          <div class="grid-row">
            <div class="grid-col image-col">
              <img src="/media/respo3.jpg" :alt="t('responsibility.middle.image1Alt')">
            </div>
            <div class="grid-col text-col">
              <div class="description" :class="{ 'vertical-text-row': isMongolian }">
                <p>{{ t('responsibility.middle.description1') }}</p>
              </div>
            </div>
          </div>
          <!-- Row 2 -->
          <div class="grid-row">
            <div class="grid-col text-col fade-in">
              <div class="description" :class="{ 'vertical-text-row': isMongolian }">
                <p>{{ t('responsibility.middle.description2') }}</p>
              </div>
            </div>
            <div class="grid-col image-col">
              <img src="/media/respo4.jpg" :alt="t('responsibility.middle.image2Alt')">
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="wrapper-bot">
      <section class="bottom-section">
        <h2 class="section-title" :class="{ 'vertical-text-title': isMongolian }">{{ t('responsibility.bottom.title') }}</h2>

        <div class="carousel-container">
          <button
            class="carousel-arrow left"
            :class="{ disabled: currentIndex === 0 }"
            @click="prevSlide"
          >
            <font-awesome-icon icon="chevron-left" />
          </button>

          <div class="carousel-wrapper">
            <div
              class="carousel-track"
              :style="{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }"
            >
              <div
                class="card-item"
                v-for="(item, index) in bottomItems"
                :key="`bottom-${index}`"
              >
                <div class="card-image">
                  <img :src="item.image" :alt="t(item.titleKey)" />
                </div>
                <h5 class="card-title" :class="{ 'vertical-text': isMongolian }">{{ t(item.titleKey) }}</h5>
                <div class="bottom-border"></div>
              </div>
            </div>
          </div>

          <button
            class="carousel-arrow right"
            :class="{ disabled: isAtEnd }"
            @click="nextSlide"
          >
            <font-awesome-icon icon="chevron-right" />
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroBanner from '@/components/ui/HeroBanner.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronLeft, faChevronRight)
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');

const items = [
  { image: '/media/respo1.jpg', titleKey: 'responsibility.item.title1' },
  { image: '/media/respo2.jpg', titleKey: 'responsibility.item.title2' },
];

const bottomItems = [
  { image: '/media/pool.jpg', titleKey: 'responsibility.carousel.title1' },
  { image: '/media/gym.jpg', titleKey: 'responsibility.carousel.title2' },
  { image: '/media/canteen.jpg', titleKey: 'responsibility.carousel.title3' },
  { image: '/media/dorm.jpg', titleKey: 'responsibility.carousel.title4' },
  { image: '/media/center.jpg', titleKey: 'responsibility.carousel.title5' },
];

const currentIndex = ref(0)
const visibleItems = ref(3) // Default for desktop

// Dynamically set visibleItems based on screen size
const updateVisibleItems = () => {
  if (window.matchMedia('(max-width: 480px)').matches) {
    visibleItems.value = 1; // Mobile: 1 item
  } else if (window.matchMedia('(max-width: 768px)').matches) {
    visibleItems.value = 2; // Tablet: 2 items
  } else {
    visibleItems.value = 3; // Desktop: 3 items
  }
}


onMounted(() => {
  updateVisibleItems();
  window.addEventListener('resize', updateVisibleItems);
})

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleItems);
})

const isAtEnd = computed(() => {
  return currentIndex.value >= bottomItems.length - visibleItems.value
})

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const nextSlide = () => {
  if (!isAtEnd.value) {
    currentIndex.value++
  }
}
</script>

<style scoped>
.vertical-text-main {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  max-height: 200px;
  overflow: hidden;
  word-break: break-word;
}
.vertical-text-card {
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
.vertical-text-title {
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
.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  max-height: 100px;
  overflow: hidden;
  word-break: break-word;
}
.vertical-text-row {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: block;
  max-height: 100%;
  max-width: 280px; /* Constrain width to prevent pushing image */
  overflow-y: auto; /* Scrollbar for vertical text */
  word-break: break-word;
  scrollbar-width: thin; /* Firefox: visible scrollbar */
  scrollbar-color: #f7931e #f0f0f0; /* Orange thumb, light track */
}
.vertical-text-row::-webkit-scrollbar {
  width: 6px; /* WebKit: visible scrollbar */
}
.vertical-text-row::-webkit-scrollbar-track {
  background: #f0f0f0;
}
.vertical-text-row::-webkit-scrollbar-thumb {
  background-color: #f7931e;
  border-radius: 6px;
}

.wrapper {
  background-color: rgb(230, 230, 230);
}
.wrapper-bot {
  background-color: #fff;
}
.top-section {
  text-align: center;
  max-width: min(90%, 1000px);
  margin: 0 auto;
  padding: 2rem 1rem;
}
.middle-section {
  text-align: center;
  padding: 2rem 1rem;
  margin: 0 auto;
  max-width: min(90%, 1000px);
}
.bottom-section {
  text-align: center;
  padding: 2rem 1rem;
  margin: 0 auto;
  max-width: min(90%, 1200px);
}
.section-title {
  position: relative;
  display: inline-block;
  font-size: clamp(1.5rem, 4vw, 1.875rem);
  font-weight: normal;
  margin-bottom: 2rem;
  padding: 0 1rem;
  color: #595757;
  font-family: "Times New Roman", Arial, sans-serif;
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
.section-para {
  text-align: left;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  line-height: 1.6;
}
.grid-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem 1rem;
}
.image-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 0;
  position: relative;
}
.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.image-wrapper:hover img {
  transform: scale(1.1);
}
.grid-item {
  text-align: center;
}
.grid-item img {
  width: 100%;
  height: auto;
  border-radius: 0;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.grid-item img:hover {
  transform: scale(1.05);
}
.grid-item h5 {
  margin-top: 0.75rem;
  font-size: clamp(0.875rem, 2.5vw, 1.125rem);
  font-weight: 300;
  color: #333;
}
.grid-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.grid-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  min-height: 300px;
}
.grid-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
}
.image-col {
  position: relative;
  overflow: hidden;
}
.image-col img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease-in-out;
  display: block;
}
.image-col img:hover {
  transform: scale(1.1);
}
.text-col {
  padding: 1.5rem;
  background-color: white;
}
.description {
  max-height: 120px;
  overflow-y: auto;
  margin-bottom: 0;
  padding-right: 1rem;
  scrollbar-width: none; /* Firefox: hide for non-Mongolian */
  -ms-overflow-style: none; /* IE and Edge: hide for non-Mongolian */
}
.description::-webkit-scrollbar {
  display: none; /* WebKit: hide for non-Mongolian */
}
.description p {
  margin-bottom: 0.5rem;
  line-height: 1.4;
  font-family: "Times New Roman", Arial, sans-serif;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
}
.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  max-width: min(90%, 1200px);
  margin: 2rem auto;
}
.carousel-wrapper {
  overflow: hidden;
  width: 100%;
}
.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.card-item {
  flex: 0 0 calc(100% / 3); /* Default: 3 items */
  text-align: start;
  padding: 0.5rem;
  box-sizing: border-box; /* Fixed typo */
}
.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.card-item:hover .card-image img {
  transform: scale(1.05);
}
.card-title {
  font-size: clamp(0.875rem, 2.5vw, 1.125rem);
  font-weight: 400;
  color: #333;
  text-align: start;
  padding: 1rem;
  font-family: "Times New Roman", Arial, sans-serif;
}
.bottom-border {
  margin-top: 0.5rem;
  height: 2px;
  background-color: #ffd9ae;
  width: 100%;
}
.carousel-arrow {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: red;
  transition: color 0.3s ease;
}
.carousel-arrow.disabled {
  color: grey;
  cursor: not-allowed;
}
.carousel-arrow.left {
  margin-right: 1rem;
}
.carousel-arrow.right {
  margin-left: 1rem;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .grid-row {
    grid-template-columns: 1fr; /* Stack columns vertically */
    min-height: auto;
    gap: 1rem;
  }
  .grid-col {
    padding: 0.5rem;
  }
  .text-col {
    padding: 1rem;
  }
  .description {
    max-height: 150px;
  }
  .image-col img {
    max-height: 300px;
  }
  .vertical-text-row {
    max-width: 300px; /* Tighter constraint for tablet */
    overflow-x: auto;
    font-size: clamp(0.75rem, 2.5vw, 0.875rem);
    scrollbar-width: thin;
    scrollbar-color: #f7931e #f0f0f0;
  }
  .vertical-text-row::-webkit-scrollbar {
    width: 6px;
  }
  .vertical-text-row::-webkit-scrollbar-track {
    background: #f0f0f0;
  }
  .vertical-text-row::-webkit-scrollbar-thumb {
    background-color: #f7931e;
    border-radius: 6px;
  }
  .section-title {
    font-size: clamp(1.25rem, 4vw, 1.5rem);
  }
  .description p,
  .section-para,
  .grid-item h5,
  .card-title {
    font-size: clamp(0.75rem, 2.5vw, 0.875rem);
  }
  .middle-section,
  .top-section,
  .bottom-section {
    padding: 1.5rem 0.5rem;
  }
  .card-item {
    flex: 0 0 calc(100% / 2); /* Tablet: 2 items */
  }
}

@media (max-width: 480px) {
  .grid-row {
    gap: 0.5rem;
  }
  .grid-col {
    padding: 0.25rem;
  }
  .text-col {
    padding: 0.75rem;
  }
  .description {
    max-height: 120px;
  }
  .image-col img {
    max-height: 200px;
  }
  .vertical-text-row {
    max-width: 280px; /* Tighter for mobile */
    overflow-x: auto;
    font-size: clamp(0.625rem, 2.5vw, 0.75rem);
    scrollbar-width: thin;
    scrollbar-color: #f7931e #f0f0f0;
  }
  .vertical-text-row::-webkit-scrollbar {
    width: 4px; /* Smaller scrollbar for mobile */
  }
  .vertical-text-row::-webkit-scrollbar-track {
    background: #f0f0f0;
  }
  .vertical-text-row::-webkit-scrollbar-thumb {
    background-color: #f7931e;
    border-radius: 4px;
  }
  .section-title {
    font-size: clamp(1rem, 4vw, 1.25rem);
  }
  .description p,
  .section-para,
  .grid-item h5,
  .card-title {
    font-size: clamp(0.625rem, 2.5vw, 0.75rem);
  }
  .card-item {
    flex: 0 0 100%; /* Mobile: 1 item */
  }
  .carousel-arrow {
    font-size: 1.25rem;
  }
  .carousel-arrow.left {
    margin-right: 0.5rem;
  }
  .carousel-arrow.right {
    margin-left: 0.5rem;
  }
}
</style>