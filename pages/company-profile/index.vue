<template>
  <HeroBanner :title="t('companyProfile.title')" image="/hero/company.png" />

  <section class="video-section">
    <div class="content-wrapper">
      <div class="video-text-container">
        <div class="video-container" @click="openVideoModal">
          <video
            ref="videoPlayer"
            class="video-player"
            poster="/hero/company.png"
            @mouseenter="zoomIn"
            @mouseleave="zoomOut"
          >
            <source src="/media/company-profile.mp4" type="video/mp4">
          </video>
          <div class="play-button" @click.stop="playVideo">
            <svg class="play-icon" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="38" fill="rgba(255,255,255,0.2)" stroke="#fff" stroke-width="2"/>
              <path d="M32 24L56 40L32 56V24Z" fill="#fff"/>
            </svg>
          </div>
        </div>

        <div class="text-content" :class="{ 'vertical-text': isMongolian }">
          <p class="section-text">{{ t('companyProfile.intro1') }}</p>
          <p class="section-text">{{ t('companyProfile.intro2') }}</p>
        </div>
      </div>

      <div class="full-width-text" :class="{ 'vertical-text': isMongolian }">
        <p class="section-text">{{ t('companyProfile.detail1') }}</p>
        <p class="section-text">{{ t('companyProfile.detail2') }}</p>
        <p class="section-text">{{ t('companyProfile.detail3') }}</p>
        <p class="section-text">{{ t('companyProfile.detail4') }}</p>
        <p class="section-text">{{ t('companyProfile.detail5') }}</p>
        <p class="section-text">{{ t('companyProfile.detail6') }}</p>
        <p class="section-text">{{ t('companyProfile.detail7') }}</p>
        <p class="section-text">{{ t('companyProfile.detail8') }}</p>
        <p class="section-text">{{ t('companyProfile.detail9') }}</p>
        <p class="section-text">{{ t('companyProfile.detail10') }}</p>
      </div>
    </div>

    <!-- Video Modal -->
    <div class="video-modal" v-if="showVideoModal" @click.self="closeVideoModal">
      <div class="modal-content">
        <button class="close-button" @click="closeVideoModal">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#fff"/>
          </svg>
        </button>
        <video
          ref="modalVideo"
          class="modal-video-player"
          controls
          autoplay
          muted
        >
          <source src="/media/company-profile.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroBanner from '@/components/ui/HeroBanner.vue';
import { ref, nextTick, computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const { locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');

const videoPlayer = ref<HTMLVideoElement | null>(null);
const modalVideo = ref<HTMLVideoElement | null>(null);
const showVideoModal = ref(false);

const zoomIn = () => {
  const video = videoPlayer.value;
  if (video) {
    video.style.transform = 'scale(1.05)';
    video.style.transition = 'transform 0.5s ease';
  }
};

const zoomOut = () => {
  const video = videoPlayer.value;
  if (video) {
    video.style.transform = 'scale(1)';
  }
};

const playVideo = () => {
  showVideoModal.value = true;
  nextTick(() => {
    modalVideo.value?.play();
  });
};

const openVideoModal = () => {
  showVideoModal.value = true;
  nextTick(() => {
    modalVideo.value?.play();
  });
};

const closeVideoModal = () => {
  modalVideo.value?.pause();
  showVideoModal.value = false;
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.video-section {
  padding: clamp(1rem, 3vw, 1.5rem) 0;
  background-color: #fff;
}

.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 3rem);
}

.video-text-container {
  display: flex;
  gap: clamp(1rem, 3vw, 2rem);
  align-items: flex-start;
  margin-bottom: clamp(1.5rem, 4vw, 2rem);
}

.video-container {
  position: relative;
  width: 50%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.video-player {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 10;
  transition: transform 0.3s ease;
}

.play-icon {
  width: clamp(50px, 10vw, 80px);
  height: clamp(50px, 10vw, 80px);
  transition: transform 0.3s ease;
}

.play-button:hover .play-icon {
  transform: scale(1.1);
}

.text-content {
  flex: 1;
  padding: clamp(0.5rem, 2vw, 1rem) 0;
}

.full-width-text {
  width: 100%;
  padding: clamp(0.5rem, 2vw, 1rem) 0;
}

.section-text {
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  line-height: 1.8;
  color: #555;
  margin-bottom: clamp(0.75rem, 2vw, 1rem);
  font-family: "Mongolian Baiti", "Microsoft Yahei", Arial, sans-serif;
}

.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(5px, 2vw, 10px);
}

.modal-content {
  position: relative;
  width: 80%;
  max-width: 1200px;
}

.modal-video-player {
  width: 100%;
  height: 80vh;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: clamp(-2.5rem, -5vw, -2rem);
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
  padding: clamp(0.5rem, 1vw, 0.75rem);
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

.close-button svg {
  width: clamp(18px, 3vw, 24px);
  height: clamp(18px, 3vw, 24px);
}

.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: clamp(300px, 80vh, 400px);
  overflow: hidden;
  overflow-wrap: anywhere;
  padding: clamp(0.5rem, 2vw, 1rem);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-wrapper {
    padding: 0 clamp(0.75rem, 3vw, 1.5rem);
  }

  .video-text-container {
    gap: clamp(0.75rem, 2vw, 1.5rem);
  }

  .video-container {
    width: 60%;
  }
}

@media (max-width: 768px) {
  .video-text-container {
    flex-direction: column;
    align-items: center;
    gap: clamp(0.5rem, 2vw, 1rem);
  }

  .video-container {
    width: 100%;
    max-width: 100%;
  }

  .text-content,
  .full-width-text {
    width: 100%;
  }

  .vertical-text {
    max-height: clamp(200px, 60vh, 300px);
  }

  .modal-video-player {
    max-height: 75vh;
  }
}

@media (max-width: 480px) {
  .video-section {
    padding: clamp(0.5rem, 2vw, 0.75rem) 0;
  }

  .content-wrapper {
    padding: 0 clamp(0.5rem, 1.5vw, 0.75rem);
  }

  .section-text {
    margin-bottom: clamp(0.5rem, 1.5vw, 0.75rem);
  }

  .vertical-text {
    max-height: clamp(150px, 50vh, 200px);
  }

  .modal-video-player {
    max-height: 70vh;
  }

  .close-button {
    top: clamp(-2rem, -4vw, -1.5rem);
  }
}

@media (max-width: 360px) {
  .content-wrapper {
    padding: 0 clamp(0.25rem, 1vw, 0.5rem);
  }

  .section-text {
    font-size: clamp(0.8rem, 1.8vw, 0.9rem);
  }

  .vertical-text {
    max-height: clamp(120px, 40vh, 150px);
  }

  .modal-video-player {
    max-height: 65vh;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .video-container {
    max-height: 50vh;
  }

  .modal-video-player {
    max-height: 90vh;
  }

  .vertical-text {
    max-height: clamp(100px, 30vh, 150px);
  }
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .play-icon {
    width: clamp(45px, 8vw, 75px);
    height: clamp(45px, 8vw, 75px);
  }
}

@media (hover: none) and (pointer: coarse) {
  .play-button {
    transform: translate(-50%, -50%) scale(1.15);
  }

  .close-button {
    padding: clamp(0.75rem, 1.5vw, 1rem);
  }

  .video-player {
    transform: none !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .video-player,
  .play-button,
  .play-icon,
  .close-button {
    transition: none;
  }
}
</style>