<template>
  <section class="chairman-speech" :class="{ 'vertical-layout': isMongolian }">
    <div class="speech-card">
      <div class="speech-header">
        <h1 :class="{ 'vertical-text': isMongolian }">{{ t('chairman.title') }}</h1>
        <div class="gradient-line"></div>
        <h2 class="speech-intro" :class="{ 'vertical-text': isMongolian }">{{ t('chairman.subTitle') }}</h2>
        <p :class="{ 'vertical-text': isMongolian }">{{ t('chairman.description') }}</p>
      </div>

      <div class="speech-content">
        <p v-for="i in 5" :key="i" :class="{ 'vertical-text': isMongolian }">{{ t(`chairman.p${i}`) }}</p>
      </div>

      <div class="speech-footer">
        <p class="chairman-title" :class="{ 'vertical-text': isMongolian }">{{ t('chairman.signatureTitle') }}</p>
        <p class="chairman-name" :class="{ 'vertical-text': isMongolian }">{{ t('chairman.signatureName') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const { locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
</script>

<style scoped>
.chairman-speech {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: url('/media/speech.jpg') center/cover no-repeat fixed;
  color: #fff;
}

.chairman-speech::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
}

.speech-card {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 2rem;
  width: 100%;
  max-width: 900px;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  color: #fff;
  margin: 1rem;
  font-family: "Mongolian Baiti", "Microsoft Yahei", Arial, sans-serif;
}

.speech-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
}

.speech-header h1 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  color: #fff;
}

.gradient-line {
  width: 75%;
  height: 4px;
  margin: 1rem 0;
  background: linear-gradient(to right, #f7931e 0%, #f7931e 50%, #ff4444 50%, #ff4444 100%);
  border-radius: 999px;
}

.speech-header .speech-intro {
  font-style: italic;
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  margin: 0.5rem 0 0 0;
  color: #f5f5f5;
}

.speech-header p {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  margin: 0.5rem 0 0 0;
  color: #f5f5f5;
}

.speech-content p {
  margin-bottom: 1rem;
  line-height: 1.7;
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: #f5f5f5;
}

.speech-footer {
  text-align: right;
  margin-top: 2rem;
}

.chairman-name {
  font-weight: bold;
  font-size: clamp(1.2rem, 2.5vw, 1.3rem);
  color: #f6d365;
}

.chairman-title {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: #f5f5f5;
}

/* Vertical text for Mongolian */
.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: inline-block;
  max-height: 400px;
  overflow: hidden;
  word-break: break-word;
}

.vertical-layout .speech-content p,
.vertical-layout .speech-footer p {
  display: inline-block;
}

/* Responsive Design - Large Desktop */
@media (max-width: 1200px) {
  .speech-card {
    max-width: 800px;
    padding: 1.5rem;
  }
}

/* Responsive Design - Tablet */
@media (max-width: 992px) {
  .chairman-speech {
    padding: 1.5rem;
  }

  .speech-card {
    max-width: 700px;
  }

  .gradient-line {
    width: 85%;
  }

  .vertical-text {
    max-height: 350px;
  }
}

/* Responsive Design - Mobile Large */
@media (max-width: 768px) {
  .chairman-speech {
    padding: 1rem;
    min-height: auto;
  }

  .speech-card {
    padding: 1.2rem;
    margin: 0.5rem;
    max-width: 100%;
  }

  .speech-header {
    margin-bottom: 1rem;
    padding-bottom: 0.8rem;
  }

  .speech-header h1 {
    font-size: clamp(1.6rem, 5vw, 2rem);
  }

  .speech-header .speech-intro {
    font-size: clamp(1rem, 3vw, 1.1rem);
  }

  .speech-header p,
  .speech-content p,
  .chairman-title {
    font-size: clamp(0.9rem, 3vw, 1rem);
  }

  .chairman-name {
    font-size: clamp(1.1rem, 3vw, 1.2rem);
  }

  .gradient-line {
    width: 100%;
    height: 3px;
  }

  .speech-content p {
    margin-bottom: 0.8rem;
  }

  .speech-footer {
    margin-top: 1.5rem;
  }

  .vertical-text {
    max-height: 120px; /* ~8-10 characters */
  }
}

/* Responsive Design - Mobile Medium */
@media (max-width: 576px) {
  .chairman-speech {
    padding: 0.8rem;
  }

  .speech-card {
    padding: 1rem;
    border-radius: 0.8rem;
  }

  .speech-header h1 {
    font-size: clamp(1.4rem, 4vw, 1.8rem);
  }

  .speech-header .speech-intro {
    font-size: clamp(0.9rem, 2.5vw, 1rem);
  }

  .speech-header p,
  .speech-content p,
  .chairman-title {
    font-size: clamp(0.85rem, 2.5vw, 0.95rem);
  }

  .chairman-name {
    font-size: clamp(1rem, 2.5vw, 1.1rem);
  }

  .vertical-text {
    max-height: 100px; /* ~6-8 characters */
  }
}

/* Responsive Design - Mobile Small */
@media (max-width: 480px) {
  .chairman-speech {
    padding: 0.6rem;
  }

  .speech-card {
    padding: 0.8rem;
    margin: 0.3rem;
    border-radius: 0.6rem;
  }

  .speech-header h1 {
    font-size: clamp(1.3rem, 4vw, 1.6rem);
  }

  .speech-header .speech-intro {
    font-size: clamp(0.85rem, 2.5vw, 0.95rem);
  }

  .speech-header p,
  .speech-content p,
  .chairman-title {
    font-size: clamp(0.8rem, 2.5vw, 0.9rem);
  }

  .vertical-text {
    max-height: 80px; /* ~5-6 characters */
  }
}

/* Responsive Design - Mobile Extra Small */
@media (max-width: 360px) {
  .chairman-speech {
    padding: 0.5rem;
  }

  .speech-card {
    padding: 0.7rem;
    margin: 0.2rem;
  }

  .speech-header h1 {
    font-size: clamp(1.2rem, 4vw, 1.5rem);
  }

  .speech-header .speech-intro {
    font-size: clamp(0.8rem, 2.5vw, 0.9rem);
  }

  .speech-header p,
  .speech-content p,
  .chairman-title {
    font-size: clamp(0.75rem, 2.5vw, 0.85rem);
  }

  .chairman-name {
    font-size: clamp(0.95rem, 2.5vw, 1rem);
  }

  .vertical-text {
    max-height: 80px; /* ~5-6 characters */
  }
}

/* Responsive Design - Ultra Small Devices */
@media (max-width: 320px) {
  .chairman-speech {
    padding: 0.4rem;
  }

  .speech-card {
    padding: 0.6rem;
    margin: 0.1rem;
    border-radius: 0.5rem;
  }

  .speech-header h1 {
    font-size: clamp(1.1rem, 4vw, 1.4rem);
  }

  .speech-header .speech-intro {
    font-size: clamp(0.75rem, 2.5vw, 0.85rem);
  }

  .speech-header p,
  .speech-content p,
  .chairman-title {
    font-size: clamp(0.7rem, 2.5vw, 0.8rem);
  }

  .chairman-name {
    font-size: clamp(0.9rem, 2.5vw, 0.95rem);
  }

  .vertical-text {
    max-height: 70px; /* ~4-5 characters */
  }
}

/* Landscape Orientation on Mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .chairman-speech {
    min-height: 80vh;
  }

  .speech-card {
    max-width: 90%;
  }

  .vertical-text {
    max-height: 100px;
  }
}

/* High DPI / Retina Display Support */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .speech-card {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
}

/* Touch Device Optimizations */
@media (hover: none) and (pointer: coarse) {
  .speech-card {
    padding: 1rem;
  }
}

/* Accessibility Improvements */
@media (prefers-reduced-motion: reduce) {
  .gradient-line {
    transition: none;
  }
}
</style>