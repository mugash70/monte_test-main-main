<template>
  <div class="corporate-culture">
    <HeroBanner :title="t('corporateCulture.title')" image="/hero/corporate.jpg" />

    <section class="culture-section">
      <div class="title-wrapper">
        <img
          src="/media/corporate-title.png"
          alt="Corporate Culture"
          class="title-image"
        />
        <div class="title-line"></div>
      </div>

      <div class="culture-grid">
        <!-- Image Column -->
        <div class="culture-image">
          <img src="/media/mission.jpg" alt="Mission Image" />
        </div>

        <!-- Content Column -->
        <div class="mission-content">
          <section class="mission-block" :class="{ 'vertical-text': isMongolian }">
            <h3 class="title">{{ t('corporateCulture.mission.title') }}</h3>
            <div class="block-scroll">
              <h2 class="block-title">{{ t('corporateCulture.mission.subtitle') }}</h2>
              <p class="block-text">{{ t('corporateCulture.mission.content') }}</p>
            </div>
          </section>
        </div>
      </div>

      <div class="culture-grid">
        <!-- Content Column -->
        <div class="culture-content">
          <section class="culture-block" :class="{ 'vertical-text': isMongolian }">
            <h3 class="title">{{ t('corporateCulture.development.title') }}</h3>
            <p class="block-text">{{ t('corporateCulture.development.content') }}</p>
          </section>
        </div>
        <!-- Image Column -->
        <div class="culture-image">
          <img src="/media/outlook.jpg" alt="Development Image" />
        </div>
      </div>

      <div class="culture-grid">
        <!-- Image Column -->
        <div class="culture-image">
          <img src="/media/values.jpg" alt="Values Image" />
        </div>

        <!-- Content Column -->
        <div class="culture-content">
          <section class="culture-block" :class="{ 'vertical-text': isMongolian }">
            <h3 class="title">{{ t('corporateCulture.coreValues.title') }}</h3>
            <div class="block-scroll">
              <h2 class="block-title">{{ t('corporateCulture.coreValues.subtitle') }}</h2>
              <p class="block-text">{{ t('corporateCulture.coreValues.content') }}</p>
            </div>
          </section>
        </div>
      </div>
      
      <div class="culture-grid">
        <!-- Content Column -->
        <div class="methodology-content">
          <section class="methodology-block" :class="{ 'vertical-text': isMongolian }">
            <h3 class="title">{{ t('corporateCulture.methodology.title') }}</h3>
            <div class="block-scroll">
              <h2 class="block-title">{{ t('corporateCulture.methodology.subtitle') }}</h2>
              <p class="block-text">{{ t('corporateCulture.methodology.content') }}</p>
            </div>
          </section>
        </div>
        <!-- Image Column -->
        <div class="culture-image">
          <img src="/media/methodology.jpg" alt="Methodology Image" />
        </div>
      </div>

      <div class="culture-grid">
        <!-- Image Column -->
        <div class="culture-image">
          <img src="/media/totem.jpg" alt="Totem Image" />
        </div>

        <!-- Content Column -->
        <div class="culture-content">
          <section class="culture-block" :class="{ 'vertical-text': isMongolian }">
            <h3 class="title">{{ t('corporateCulture.culturalTotem.title') }}</h3>
            <div class="block-scroll">
              <h2 class="block-title">{{ t('corporateCulture.culturalTotem.subtitle') }}</h2>
              <p class="block-text">{{ t('corporateCulture.culturalTotem.content') }}</p>
            </div>
          </section>
        </div>
      </div>
     
      <div class="culture-maxims">
        <h3 class="title-culture" :class="{ 'vertical-text': isMongolian }">
          {{ t('corporateCulture.culturalMotto.title') }}
        </h3>
        <div class="maxims-overlay">
          <div class="separator-line"></div>
    
          <div class="maxim-item">
            <span class="maxim-number">01</span>
            <div class="maxim-content" :class="{ 'vertical-text': isMongolian }">
              <h3 class="maxim-title">{{ t('corporateCulture.culturalMotto.corporateStyle.title') }}</h3>
              <p class="maxim-text">{{ t('corporateCulture.culturalMotto.corporateStyle.content') }}</p>
            </div>
          </div>
    
          <div class="separator-line"></div>
          <div class="maxim-item">
            <span class="maxim-number">02</span>
            <div class="maxim-content" :class="{ 'vertical-text': isMongolian }">
            <h3 class="maxim-title">{{ t('corporateCulture.culturalMotto.marketManagement.title') }}</h3>
            <p class="maxim-text">{{ t('corporateCulture.culturalMotto.marketManagement.content') }}</p>
          </div>
          </div>
          <div class="separator-line"></div>
          <div class="maxim-item">
            <span class="maxim-number">03</span>
            <div class="maxim-content"  :class="{ 'vertical-text': isMongolian }">
              <h3 class="maxim-title">{{ t('corporateCulture.culturalMotto.talentOutlook.title') }}</h3>
              <p class="maxim-text">{{ t('corporateCulture.culturalMotto.talentOutlook.content') }}</p>
            </div>
          </div>
      
          <div class="separator-line"></div>
          <div class="maxim-item">
            <span class="maxim-number">04</span>
            <div class="maxim-content"  :class="{ 'vertical-text': isMongolian }">
              <h3 class="maxim-title">{{ t('corporateCulture.culturalMotto.salaryView.title') }}</h3>
              <p class="maxim-text">{{ t('corporateCulture.culturalMotto.salaryView.content') }}</p>
            </div>
          </div>
      
          <div class="separator-line"></div>
        </div>
      </div>
    
        <div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroBanner from '@/components/ui/HeroBanner.vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const { locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.corporate-culture {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
}

.culture-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 3rem) clamp(1rem, 2vw, 1.5rem);
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 2rem;
}

.title-image {
  width: 100%;
  max-width: clamp(300px, 50vw, 600px);
  height: auto;
  object-fit: contain;
  margin-bottom: 1rem;
}

.title-line {
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #f7931e 0%, #f7931e 50%, #ff4444 50%, #ff4444 100%);
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.culture-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: stretch;
  min-height: 350px;
  max-height: 450px;
}

.culture-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.culture-content,
.mission-content,
.methodology-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-height: 100%;
  overflow-y: auto;
  padding-right: 8px;
  padding: 1.5rem;
  justify-content: center;
  height: 100%;
}

.culture-content::-webkit-scrollbar,
.mission-content::-webkit-scrollbar,
.methodology-content::-webkit-scrollbar {
  width: 4px;
}

.culture-content::-webkit-scrollbar-thumb,
.mission-content::-webkit-scrollbar-thumb,
.methodology-content::-webkit-scrollbar-thumb {
  background-color: #f5b942;
  border-radius: 2px;
}

.mission-content .mission-block {
  position: relative;
  background-image: url('/media/mission1.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 4rem 2rem;
  color: #5f5f5f;
  border-radius: 0;
  overflow: hidden;
}

.mission-content .mission-block::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}

.mission-content .mission-block > * {
  position: relative;
  z-index: 2;
}

.methodology-content .methodology-block {
  position: relative;
  background-image: url('/media/methodology1.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 4rem 2rem;
  color: #5f5f5f;
  border-radius: 0;
  overflow: hidden;
}

.methodology-content .methodology-block::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}

.methodology-content .methodology-block > * {
  position: relative;
  z-index: 2;
}

.culture-block,
.mission-block,
.methodology-block {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 8px;
  height: 100%;
  align-items: flex-start;
}

.title {
  display: inline-block;
  position: relative;
  margin-bottom: 20px;
}

.title::after {
  content: "";
  display: block;
  height: 3px;
  width: 100%;
  background: linear-gradient(to right, #f7931e 0%, #f7931e 50%, #ff4444 50%, #ff4444 100%);
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-top: 0.25rem;
}

.block-scroll {
  max-height: 200px;
  overflow-y: auto;
  padding-right: 6px;
  scroll-behavior: smooth;
}

.block-scroll::-webkit-scrollbar {
  width: 6px;
}

.block-scroll::-webkit-scrollbar-track {
  background-color: #b6b6b6;
  border-radius: 2px;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
}

.block-scroll::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 4px;
  min-height: 4px;
}

.block-scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(212, 0, 0);
}

.block-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: #222;
}

.block-text {
  font-size: 1.5rem;
  line-height: 1.6;
}

.culture-maxims {
  background: url('/media/culture.jpg') center/cover no-repeat;
  padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 2vw, 2rem);
  color: rgb(0, 0, 0);
  position: relative;
  overflow: hidden;
}

.culture-maxims .title-culture {
  margin-bottom: 2rem;
  letter-spacing: 0.05em;
  display: inline-block;
  position: relative;
}

.culture-maxims .title-culture::after {
  content: "";
  display: block;
  height: 3px;
  width: 100%;
  background: linear-gradient(to right, #f7931e 0%, #f7931e 50%, #ff4444 50%, #ff4444 100%);
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-top: 0.25rem;
}

.culture-maxims .maxims-overlay {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.culture-maxims .maxim-item {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  z-index: 1;
}

.culture-maxims .maxim-number {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 6rem;
  font-weight: bold;
  font-family: Arial;
  line-height: 30px;
  color: rgba(205, 173, 103, 0.39);
  pointer-events: none;
  z-index: 0;
  white-space: nowrap;
}

.culture-maxims .maxim-content {
  position: relative;
  z-index: 1;
}

.culture-maxims .maxim-title {
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 0.5rem;
}

.culture-maxims .maxim-text {
  font-size: 1rem;
  line-height: 1.4;
}

.culture-maxims .separator-line {
  width: 3px;
  background-color: rgba(205, 173, 103, 0.39);
  border-radius: 2px;
  min-height: 150px;
  align-self: center;
  opacity: 1;
}

.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: clamp(0.5rem, 2vw, 1rem) clamp(0.25rem, 1vw, 0.5rem);
  max-height: clamp(300px, 80vh, 400px);
  overflow: hidden;
  word-break: break-word;
}

.vertical-text .title::after {
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
  .culture-grid {
    gap: 0.5rem;
  }

  .culture-maxims .maxims-overlay {
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .culture-grid {
    grid-template-columns: 1fr;
    min-height: auto;
    max-height: none;
  }

  .culture-image img {
    max-height: 300px;
  }

  .culture-content,
  .mission-content,
  .methodology-content {
    max-height: none;
    padding: 1rem;
  }

  .culture-maxims .maxims-overlay {
    flex-direction: column;
    align-items: stretch;
  }

  .culture-maxims .maxim-item {
    flex: 1 1 100%;
  }

  .culture-maxims .separator-line {
    width: 100%;
    height: 3px;
    min-height: auto;
  }

  .vertical-text {
    max-height: clamp(200px, 60vh, 300px);
  }
}

@media (max-width: 480px) {
  .culture-section {
    padding: clamp(1rem, 3vw, 1.5rem) 0.5rem;
  }

  .title-image {
    max-width: clamp(200px, 80vw, 400px);
  }

  .vertical-text {
    max-height: clamp(150px, 50vh, 200px);
  }
}
</style>