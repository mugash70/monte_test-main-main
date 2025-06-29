<template>
  <div>
    <HeroBanner :title="t('greenMonte.heroTitle')" image="/hero/green.jpg" />
    <div class="responsive-spacing"></div>
    <section class="tech-intro">
      <div class="tech-content">
        <p :class="{ 'vertical-head': isMongolian }">{{ t('greenMonte.intro') }}</p>
      </div>
    </section>


    <section class="projects-content">
      <div class="scope" :class="{ 'vertical-text': isMongolian }">
        <h2 class="section-title">{{ t('greenMonte.sectionTitle') }}</h2>
        <p class="section-paragraph">{{ t('greenMonte.sectionParagraph') }}</p>
      </div>

      <div class="grid-container">
        <div class="grid-row">
          <div class="grid-col image-col clickable" @click="navigateToPage('industrial-park')">
            <div class="image-wrapper">
              <img src="/media/green1.jpg" :alt="t('greenMonte.cards[0].alt')" />
              <div class="image-caption">
                <img src="/icons/icon-modern.png" alt="Icon" class="caption-icon" />
                <span class="caption-title little" :class="{ 'vertical-text': isMongolian }">{{ t('greenMonte.cards[0].title') }}</span>
              </div>
            </div>
          </div>

          <div class="grid-col image-col clickable" @click="navigateToPage('garden-factory')">
            <div class="image-wrapper">
              <img src="/media/green2.jpg" :alt="t('greenMonte.cards[1].alt')" />
              <div class="image-caption">
                <img src="/icons/icon-garden.png" alt="Icon" class="caption-icon" />
                <span class="caption-title little" :class="{ 'vertical-text': isMongolian }">{{ t('greenMonte.cards[1].title') }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="grid-row">
          <div class="grid-col image-col clickable" @click="navigateToPage('green-mine')">
            <div class="image-wrapper">
              <img src="/media/green3.jpg" :alt="t('greenMonte.cards[2].alt')" />
              <div class="image-caption">
                <img src="/icons/icon-green.png" alt="Icon" class="caption-icon" />
                <span class="caption-title little" :class="{ 'vertical-text': isMongolian }">{{ t('greenMonte.cards[2].title') }}</span>
              </div>
            </div>
          </div>

          <div class="grid-col image-col clickable" @click="navigateToPage('ecological-industry')">
            <div class="image-wrapper">
              <img src="/media/green4.jpg" :alt="t('greenMonte.cards[3].alt')" />
              <div class="image-caption">
                <img src="/icons/icon-ecological.png" alt="Icon" class="caption-icon" />
                <span class="caption-title little" :class="{ 'vertical-text': isMongolian }">{{ t('greenMonte.cards[3].title') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

    
    <script setup lang="ts">
    import { useRouter } from 'vue-router'
    import HeroBanner from '@/components/ui/HeroBanner.vue'
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    import { computed } from 'vue';
const { locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
    const router = useRouter()

    const navigateToPage = (pageSlug: string) => {
  console.log('🔗 Navigating to page:', pageSlug)
  
  const routes = {
    'industrial-park': '/green/industrial-park',
    'garden-factory': '/green/garden-factory',
    'green-mine': '/green/green-mine',
    'ecological-industry': '/green/ecological-industry'
  }

  const targetRoute = routes[pageSlug as keyof typeof routes]
  
  if (targetRoute) {
    console.log('🎯 Target route:', targetRoute)
    const resolvedRoute = router.resolve(targetRoute)
    const fullUrl = window.location.origin + resolvedRoute.href
    
    console.log('🌐 Opening URL in new tab:', fullUrl)

     window.open(fullUrl, '_blank')
  } else {
    console.error('❌ Invalid page slug:', pageSlug)
  }
}
    </script>
    
    <style scoped>
    .tech-intro {
      width: 100vw;
      background-color: #f2f2f2;
      padding: 40px 0;
      margin-top: -85px;
    }
    
    .tech-intro .tech-content {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px;
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
    
    .clickable {
      cursor: pointer;
      position: relative;
      transition: all 0.3s ease;
    }
    
    .projects-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }
    
    .grid-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .grid-row {
      display: grid;
      gap: 2em;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      min-height: 300px;
      padding-bottom: 1.5rem;
    }
    
    .grid-col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1.5rem;
      border-bottom: 2px solid transparent;
      position: relative;
    }
    
    .grid-col::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 6px;
      background-image: linear-gradient(to right, #f7931e 0%, #f7931e 30%, #ff4444 30%, #ff4444 100%);
    }
    
    .image-col img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease-in-out;
    }
    
    .image-col {
      overflow: hidden;
      padding: 0;
    }
    
    .image-col img:hover {
      transform: scale(1.05);
    }
    
    .scope {
      margin-bottom: 2em;
      margin-top: 2em;
      font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
      text-align: left;
    }
    
    .fade-in-down {
      opacity: 0;
      transform: translateY(-30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in-down.active {
      opacity: 1;
      transform: translateY(0);
    }
    
    .image-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    
    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease-in-out;
    }
    
    .image-wrapper img:hover {
      transform: scale(1.05);
    }
    
    .image-caption {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.5rem 1rem;
      border-radius: 9999px;
    }
    
    .caption-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #ddd;
      object-fit: contain;
    }
    
    .caption-title {
      font-size: 20px;
      font-weight: 600;
      color: #ffffff;
      font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
    }
    
    .section-title {
      position: relative;
      display: inline-block;
      font-size: 40px;
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
    
    .section-paragraph {
      color: #595757;
      font-size: 1.2rem;
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
    .vertical-head {
      writing-mode: vertical-lr;
      text-orientation: sideways;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem 0.5rem;
      max-height: 300px;
      overflow: hidden;
      word-break: break-word;
    }
    .tech-intro .vertical-text {
      max-height: 150px;
    }
    
    .scope .vertical-text {
      max-height: 100px;
    }
    
    /* Responsive Styles */
    @media (max-width: 768px) {
      .grid-row {
        grid-template-columns: 1fr;
        gap: 1rem;
        min-height: auto;
      }
    
      .grid-col {
        padding: 1rem;
      }
    
      .tech-intro .tech-content {
        padding: 0 15px;
        font-size: 1rem;
      }
    
      .section-title {
        font-size: 1.8em;
        margin-bottom: 1rem;
        padding: 0 15px;
      }
    
      .section-paragraph {
        font-size: 1rem;
      }
    
      .caption-title {
        font-size: 16px;
      }
    
      .caption-icon {
        width: 28px;
        height: 28px;
      }
    
      .image-caption {
        padding: 0.4rem 0.8rem;
        gap: 0.5rem;
      }
    
      /* Responsive vertical text */
      .vertical-text {
        max-height: 200px; /* Remove max-height restriction */
        padding: 0.5rem;
        font-size: 0.95rem;
      }
    
      .tech-intro .vertical-text {
        max-height: none;
        font-size: 0.9rem;
      }
    
      .scope .vertical-text {
        max-height: none;
        font-size: 0.9rem;
      }
    }
    
    @media (max-width: 480px) {
      .tech-intro {
        padding: 20px 0;
      }
    
      .tech-intro .tech-content {
        font-size: 0.9rem;
        padding: 0 10px;
      }
    
      .section-title {
        font-size: 1.5em;
        padding: 0 10px;
      }
    
      .section-paragraph {
        font-size: 0.85rem;
      }
    
      .caption-title {
        font-size: 14px;
      }
    
      .caption-icon {
        width: 24px;
        height: 24px;
      }
    
      .image-caption {
        padding: 0.3rem 0.6rem;
      }
    
      .grid-col {
        padding: 0.5rem;
      }
    
      .vertical-text {
        font-size: 0.85rem;
        padding: 0.3rem;
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
    