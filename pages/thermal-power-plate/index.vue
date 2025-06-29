<template>
  <div>
    <HeroBanner :title="t('thermalPower.title')" image="/hero/thermal.jpg" />
    <div class="responsive-spacing"></div>
    <section class="tech-intro">
      <div class="tech-content" :class="{ 'vertical-text': isMongolian }">
        <p>{{ t('thermalPower.intro.paragraph1') }}</p>
        <p>{{ t('thermalPower.intro.paragraph2') }}</p>
        <p>{{ t('thermalPower.intro.paragraph3') }}</p>
      </div>
    </section>

    <!-- Carousel section -->
    <div class="wrapper-bot">
      <section class="bottom-section">
        <h2 class="section-title" :class="{ 'vertical-text': isMongolian }">{{ t('thermalPower.projects.title') }}</h2>

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
                v-for="(item, index) in thermoItemsKeys"
                :key="`bottom-${index}`"
                @click="goToDetail(item)"
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

    <!-- services -->
    <section class="services-section" >
      <div class="section-therm" :class="{ 'vertical-text': isMongolian }">
      <h2 class="section-title">{{ t('thermalPower.heating.title') }}</h2>
      <p class="section-para">{{ t('thermalPower.heating.description') }}</p>
    </div>
      <section class="grid-gallery">
        <div class="grid-container">
          <!-- Left Column: 3 Stacked Background Cards -->
          <div class="left-column" >
            <div
              class="heating-item"
              v-for="(item, index) in itemsWithKeys"
              :key="index"
              :style="{ backgroundImage: `url(${item.image})` }"
              :class="{ 'vertical-text': isMongolian }"
            >
              <div class="heating-head" >
                <h5 class="card-title" >{{ t(item.titleKey) }}</h5>
                <p class="card-description">
                  <template v-if="item.link">
                    <a :href="item.link" class="tel-link">{{ t(item.descriptionKey) }}</a>
                  </template>
                  <template v-else>
                    {{ t(item.descriptionKey) }}
                  </template>
                </p>
              </div>
            </div>
          </div>

          <!-- Right Column: Large Rectangle -->
          <div class="right-column">
            <div class="heating-rectangle" :class="{ 'vertical-text': isMongolian }">
              <h4>{{ t('thermalPower.heating.serviceRegulations.title') }}</h4>
              <ul class="heating-list">
                <li>{{ t('thermalPower.heating.serviceRegulations.items.onSiteService') }}</li>
                <li>{{ t('thermalPower.heating.serviceRegulations.items.businessHandling') }}</li>
                <li>{{ t('thermalPower.heating.serviceRegulations.items.regulations') }}</li>
                <li>{{ t('thermalPower.heating.serviceRegulations.items.userTips') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroBanner from '@/components/ui/HeroBanner.vue'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronLeft, faChevronRight)
import { defineComponent } from 'vue'
import { useThermo } from '@/composables/useThermo';
import { useI18n } from 'vue-i18n';

const { t,locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
const { thermoItemsKeys } = useThermo()

defineComponent({
  components: {
    'font-awesome-icon': FontAwesomeIcon
  }
})

const router = useRouter()

const goToDetail = (item: { slug: string }) => {
  router.push(`/thermal/${item.slug}`)
}

const currentIndex = ref(0)
const visibleItems = 3

const isAtEnd = computed(() => {
  return currentIndex.value >= thermoItemsKeys.value.length - visibleItems
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

const itemsWithKeys = ref([
  {
    titleKey: 'thermalPower.heating.items.concept.title',
    descriptionKey: 'thermalPower.heating.items.concept.description',
    image: '/hero/service-card1.jpg'
  },
  {
    titleKey: 'thermalPower.heating.items.serviceArea.title',
    descriptionKey: 'thermalPower.heating.items.serviceArea.description',
    image: '/hero/service-card2.jpg'
  },
  {
    titleKey: 'thermalPower.heating.items.hotline.title',
    descriptionKey: 'thermalPower.heating.items.hotline.description',
    image: '/hero/service-card3.jpg',
    link: 'tel:4000477996'
  }
])

</script>

<style scoped>
.tech-intro {
  max-width: 1400px;
  background-color: #f2f2f2;
  padding: 40px 0px;
  margin-top: -85px;
}

.tech-intro .tech-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  color: #595757;
  line-height: 1.8;
}
.tech-intro .tech-content p {
  margin-bottom: 1.5rem;
  text-align: justify;
}

.services-section {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.section-para {
  text-align: left;
}
.bottom-section {

  text-align: center;
  padding: 2rem 1rem;
  margin: 0 auto;
  max-width: 1200px;
}
.wrapper-bot {
  background-color : rgb(255, 255, 255);
}
.section-title {
  position: relative;
  display: inline-block;
  font-size: 30px;
  font-weight: normal;
  margin-bottom: 2rem;
  padding: 0 20px;
  color: #595757;
  font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
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
/* Bottom Section Card Styles */
.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  max-width: 1400px;
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
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem 1rem;
}

.card-item {

  border-radius: 0;
  overflow: hidden;

  flex: 0 0 calc(105% / 3);
  text-align: start;
  padding: 0.5rem;
  box-sizing: border-box;
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
  font-size: 1.125rem;
  font-weight: 400;
  color: #333;
  text-align: start;
  padding: 1rem;
  font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
}

.grid-gallery {
  background-color: #fff;
  padding: 2rem 1rem;
  margin-bottom: 50vh;
  max-width: 1400px;

}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;;
  gap: 1.5rem;
  height: 200px;
}

/* Left Column */
.left-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.heating-item {
  height: calc((100% - 48px) / 3);
  background: url('/hero/service-card4.jpg') no-repeat center center;
  background-size: 100% 100%;
  margin-bottom: 18px;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  color: #5e5e5e;
  overflow: hidden;
}

.heating-head {
  text-align: left;
}

.heating-head .card-title {
  font-size: 1rem;
  font-weight: 400;
  color: #9c9c9c;
}

.heating-head .card-description {
  font-size: 1.125rem;
  padding-left: 15px;
  line-height: 1.6;
  color: #2c2c2c;
}

.tel-link {
  color: inherit;
  text-decoration: none;
}

.tel-link:hover {
  color: #d32f2f;
}

/* Right Column Rectangle */
.heating-list {
  list-style-type: disc;
  list-style-position: inside;
  padding-left: 0;
  display: block;
  margin-top: 1rem;

}


.heating-list li {
  margin-bottom: 0.5rem;
  text-align: left;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;

}

.heating-list li:hover {
  color: #ff4444;
}
.heating-list li::marker {
  color: #ff4444;
}

.heating-rectangle h4 {
  margin-top: 2.2rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  padding-top:2rem;
  border-bottom: 1px solid #ccc;
  font-size: 1.25rem;
  text-align: start;
  font-weight: 600;
}

.right-column .heating-rectangle {
  background: url('/hero/service-card4.jpg') no-repeat center center;
  background-size: cover;
  border: 1px solid #dbdbdb;
  height: 100%;
  padding: 20px;
  color: #666666;
  position: relative;
  overflow: hidden;
}

.right-column .heating-rectangle h4,
.right-column .heating-rectangle p {
  position: relative;
  z-index: 2;
  margin: 0;
}

.right-column .heating-rectangle h4 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.right-column .heating-rectangle p {
  font-size: 1rem;
  line-height: 1.4;
}

/* Responsive Handling */
@media (max-width: 900px) {
  .grid-container {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .left-column {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .heating-item {
    flex: 1 1 calc(50% - 10px);
    height: 200px;
  }

  .right-column .heating-rectangle {
    height: 250px;
    margin-top: 1rem;
  }
}

.vertical-text {
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
.tech-intro .vertical-text {
  max-height: 150px;
}
.section-therm.vertical-text {
  max-height: 150px;
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
