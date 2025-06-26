<template>
  <section class="hero-carousel">
    <div class="carousel-wrapper" :style="wrapperStyle" ref="carouselRef">
      <div class="carousel-item" v-for="(item, index) in items" :key="index">
        <div v-if="item.type === 'image'" class="media-container">
          <img :src="item.src" alt="carousel media" />
        </div>
        <div v-else-if="item.type === 'video'" class="media-container">
          <video :src="item.src" autoplay loop muted playsinline></video>
        </div>
        <div class="carousel-description" :class="{ 'slide-in': index === activeIndex, 'vertical-text': isMongolian }">
          <p>{{ t(item.description) }}</p>
        </div>
      </div>
    </div>

    <button class="chevron left" @click="prev">
      <img src="/hero/carousel_prev.png" alt="Previous" />
    </button>
    <button class="chevron right" @click="next">
      <img src="/hero/carousel_next.png" alt="Next" />
    </button>
  </section>

  <section class="content-section">
    <div class="background-video">
      <video src="/hero/video-bg.mp4" autoplay loop muted playsinline></video>
    </div>
    <div class="about-sec" :class="{ 'vertical-text': isMongolian }">
      <h2 class="section-title">{{ t('home.title') }}</h2>
      <p class="section-paragraph">{{ t('home.p1') }}</p>
      <p>{{ t('home.p2') }}</p>
      <p>{{ t('home.p3') }}</p>
      <p>{{ t('home.p4') }}</p>
      <p>{{ t('home.p5') }}</p>
      <p>{{ t('home.p6') }}</p>
    </div>

    <h2 class="section-title" :class="{ 'vertical-text': isMongolian }">{{ t('home.core') }}</h2>
  </section>

  <section class="mother-section">
    <div class="core-sec">
      <div class="core-cards">
        <div
          v-for="(card, index) in coreCards"
          :key="index"
          class="core-card"
          :class="{ active: activeCardIndex === index, 'vertical-text': isMongolian }"
          @mouseenter="setActiveCard(index)"
        >
          <img
            :src="activeCardIndex === index || isSectionHovered ? card.iconActive : card.iconDefault"
            alt="icon"
            class="card-icon"
          />
          <p>{{ t(card.title) }}</p>
        </div>

        <div class="core-card-wrapper">
          <div
            class="core-hover-content"
            v-if="activeCard"
            @mouseenter="isSectionHovered = true"
            @mouseleave="isSectionHovered = false"
          >
            <img :src="activeCard.background" alt="background" class="core-background" />
            <div class="core-hover-text" :class="{ 'vertical-text': isMongolian }">
              <h3>{{ t(activeCard.title) }}</h3>
              <p>{{ t(activeCard.description) }}</p>
              <router-link
                :to="activeCard.link"
                class="chevron-icon"
                :class="{ active: chevronHovered }"
                @mouseenter="chevronHovered = true"
                @mouseleave="chevronHovered = false"
              >
                <font-awesome-icon icon="chevron-right" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="news-section">
    <h2 class="section-title" :class="{ 'vertical-text': isMongolian }">{{ t('home.news') }}</h2>
    <div class="card-grid">
      <CardItem v-for="(card, index) in limitedCards" :key="index" :item="card" />
    </div>
    <div class="see-more-container">
      <router-link to="/news" class="see-more-btn" :class="{ 'vertical-text': isMongolian }">
        {{ t('home.see') }}
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
import CardItem from '@/components/ui/CardItemNews.vue'
import { useNews } from '@/composables/useNews'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {  faChevronRight } from '@fortawesome/free-solid-svg-icons'
library.add( faChevronRight)
import { defineComponent } from 'vue'


const { locale, t } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
defineComponent({
  components: {
    'font-awesome-icon': FontAwesomeIcon
  }
})

const { cards } = useNews()

const limitedCards = computed(() => cards.value.slice(0, 3))
interface CarouselItem {
  description: string;
  src: string;
  type: 'image' | 'video';
}
interface CoreCard {
  title: string;
  description: string;
  iconDefault: string;
  iconActive: string;
  background: string;
  link: string;
}

const items = ref<CarouselItem[]>([
  { description: 'home.items.description1', src: '/media/carousel1.mp4', type: 'video' },
  { description: 'home.items.description2', src: '/hero/carousel3.jpg', type: 'image' },
  { description: 'home.items.description3', src: '/hero/carousel4.jpg', type: 'image' },
  { description: 'home.items.description4', src: '/hero/carousel2.jpg', type: 'image' },
]);

const coreCards = ref<CoreCard[]>([
  {
    title: 'home.cards1.title',
    description: 'home.cards1.desc',
    iconDefault: '/icons/aluminum-default.png',
    iconActive: '/icons/aluminum-active.png',
    background: '/backgrounds/aluminum.jpg',
    link: '/aluminium-industry-sector',
  },
  {
    title: 'home.cards2.title',
    description: 'home.cards2.desc',
    iconDefault: '/icons/coal-default.png',
    iconActive: '/icons/coal-active.png',
    background: '/backgrounds/coal.jpg',
    link: '/coal-industry',
  },
  {
    title: 'home.cards3.title',
    description: 'home.cards3.desc',
    iconDefault: '/icons/thermal-default.png',
    iconActive: '/icons/thermal-active.png',
    background: '/backgrounds/thermal.jpg',
    link: '/thermal-power-plate',
  },
  {
    title: 'home.cards4.title',
    description: 'home.cards4.desc',
    iconDefault: '/icons/agriculture-default.png',
    iconActive: '/icons/agriculture-active.png',
    background: '/backgrounds/agriculture.jpg' ,
    link: '/modern-agriculture',
  },
  {
    title: 'home.cards5.title',
    description: 'home.cards5.desc',
    iconDefault: '/icons/logistics-default.png',
    iconActive: '/icons/logistics-active.png',
    background: '/backgrounds/logistics.jpg',
    link: '/modern-trade-logistics',
  },
]);




const activeIndex = ref(0);
const intervalRef = ref<number | null>(null);
const activeCardIndex = ref(0)
const isSectionHovered = ref(false);
const chevronHovered = ref(false);

const activeCard = computed(() => coreCards.value[activeCardIndex.value])

const setActiveCard = (index: number) => {
  activeCardIndex.value = index
}

onMounted(() => {
  const defaultIndex = coreCards.value.findIndex(card => card.title === 'Aluminum Industry Sector')
  activeCardIndex.value = defaultIndex !== -1 ? defaultIndex : 0
})

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % items.value.length;
};

const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + items.value.length) % items.value.length;
};

const startAutoScroll = () => {
  intervalRef.value = window.setInterval(next, 5000);
};

const stopAutoScroll = () => {
  if (intervalRef.value) {
    clearInterval(intervalRef.value);
    intervalRef.value = null;
  }
};

const wrapperStyle = computed(() => ({
  transform: `translateX(-${activeIndex.value * 100}%)`,
  transition: 'transform 0.6s ease-in-out',
  display: 'flex',
}));

onMounted(() => {
  startAutoScroll();
});

onBeforeUnmount(() => {
  stopAutoScroll();
});
</script>

<style scoped>
.hero-carousel {
  position: relative;
  overflow: hidden;
  height: 75vh;
}

.carousel-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
}

.carousel-item {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.media-container {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.media-container img,
.media-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-description {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  color: white;
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  z-index: 5;
}

.carousel-description.slide-in {
  opacity: 1;
  transform: translateX(0);
}
.chevron {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-size: 26px !important;
  border: none;
  padding: 0.75rem;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
}

.chevron.left {
  left: 1rem;
}

.chevron.right {
  right: 1rem;
}

.chevron img {
  width: 62px;
  height: 62px;
  object-fit: contain;
}

/*  about sec */
.content-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  z-index: 1;
  position: relative;
}
.background-video {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  overflow: hidden;
}
.background-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
}


.about-sec {
  margin-bottom: 2em;
  margin-top:2em;
  font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
  text-align: left;
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

.section-paragraph {
  color: #000000;
}

/* core section */
.mother-section {
  position: relative;
  background: transparent;
  padding: 2rem 0;
}
.core-sec {
  margin: 0 auto;
  position: relative;
  height: 120vh;
  max-width: 100%;

}
.core-cards {
  position: relative;
  display: flex;
  gap: 0;
  margin-top: 1.5rem;
  justify-content: center;

}

.core-card {
  background: white;
  color: black;
  padding: 1.5rem;
  border-radius: 0;
  text-align: center;
  width: 200px;
  cursor: pointer;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #313e50;

}

.core-card.active {
  background: #d7b461; /* Brown */
  color: #f2f2f2;

  border-right: 1px solid #ffffff;
}

.core-card img {
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
}

.core-hover-content {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100vh;

  background-size: cover;
  background-position: center;
  padding: 2rem;
  display: flex;
  align-items: center;
  transition: all 0.4s ease;

}

.core-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.core-hover-text {
  position: relative;
  z-index: 2;
  padding-bottom:100px;
  align-items: center;
  justify-content: center;
}

.core-hover-text h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  text-align: center;
  color: white;
}

.core-hover-text p {
  font-size: 1rem;
  text-align: center;
  color: white;
  margin-bottom:5rem;
}

.chevron-icon {
padding-left: 40rem;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-top: 10rem;
  transition: filter 0.3s ease;

}

.chevron-icon.active {
  color: white;

}

.chevron-icon:hover {
  color:red;
}

.news-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  z-index: 5;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 0 1rem;

}

@media (max-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}

.see-more-container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.see-more-btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  color: red;
  text-decoration: underline;
  cursor: pointer;
  border-radius: 0;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways-right;
}
.carousel-description.vertical-text {
  top: 1.5rem;
  left: auto;
  right: 1.5rem;
  transform: translateY(0);
  opacity: 1;
}
.about-sec.vertical-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.core-card.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  padding: 1.5rem 0.5rem;
  width: auto;
  height: 200px;
}

.core-hover-text.vertical-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 20px;
}
.core-hover-text.vertical-text .chevron-icon {
  padding-left: 0;
  margin-top: 1rem;
}
.see-more-btn.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways-right;
  padding: 0.75rem 1rem;
}
</style>
