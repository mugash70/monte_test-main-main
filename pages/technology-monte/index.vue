<template>
  <div>
    <HeroBanner :title="t('technologyMonte.title')" image="/hero/technology.jpg" />

    <section class="tech-intro">
      <div class="tech-content" >
        <p :class="{ 'vertical-text': isMongolian }">{{ t('technologyMonte.intro1') }}</p>
        <p :class="{ 'vertical-text': isMongolian }">{{ t('technologyMonte.intro2') }}</p>
      </div>
    </section>

    <section class="projects-content">
      <div class="grid-container">

        <!-- Row 1 -->
        <div class="grid-row">
          <div class="grid-col image-col">
            <img src="/media/techmonte1.jpg" alt="Project 1" />
          </div>
          <div class="grid-col text-col" :class="{ 'vertical-text': isMongolian }">
            <h2 class="fade-in">{{ t('technologyMonte.sections[0].title') }}</h2>
            <div class="description">
              <p>{{ t('technologyMonte.sections[0].description') }}</p>
            </div>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="grid-row">
          <div class="grid-col image-col">
            <img src="/media/techmonte2.jpg" alt="Project 2" />
          </div>
          <div class="grid-col text-col fade-in" :class="{ 'vertical-text': isMongolian }">
            <h2 class="fade-in">{{ t('technologyMonte.sections[1].title') }}</h2>
            <div class="description">
              <p>{{ t('technologyMonte.sections[1].description') }}</p>
            </div>
          </div>
        </div>

        <!-- Row 3 -->
        <div class="grid-row">
          <div class="grid-col image-col">
            <img src="/media/techmonte3.jpg" alt="Project 3" />
          </div>
          <div class="grid-col text-col fade-in" :class="{ 'vertical-text': isMongolian }">
            <h2 class="fade-in">{{ t('technologyMonte.sections[2].title') }}</h2>
            <div class="description">
              <p>{{ t('technologyMonte.sections[2].description') }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

    
    
    <script setup lang="ts">
    import HeroBanner from '@/components/ui/HeroBanner.vue'
    import { onMounted, onBeforeUnmount, computed } from 'vue';
    import { useI18n } from 'vue-i18n';
    const { t, locale } = useI18n();
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
      grid-template-columns: 1fr 1fr;
      width: 100%;
      min-height: 300px;
      border-bottom: 1px solid #d9d9d9;
      padding-bottom: 1.5rem;
    }
    
    .grid-col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1.5rem;
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
    
    .text-col h2 {
      font-size: 2em;
      font-weight: normal;
      margin-bottom: 1.8rem;
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
      max-height: 120px;
      overflow-y: auto;
      margin-bottom: 1rem;
    }
    
    .description p {
      margin-bottom: 0.5rem;
      line-height: 1.4;
      font-size: 1em;
      font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
    }
    
    .full-width {
      grid-template-columns: 1fr;
    }
    
    /* Scrollbar customization */
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: #ccc;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: red;
      border-radius: 10px;
    }
    
    .description::-webkit-scrollbar {
      width: 6px;
    }
    
    .description::-webkit-scrollbar-track {
      background: #f0f0f0;
    }
    
    .description::-webkit-scrollbar-thumb {
      background-color: red;
      border-radius: 6px;
    }
    
    .description {
      scrollbar-width: thin;
      scrollbar-color: red #ccc;
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
      padding: 1rem 0.5rem;
      max-height: 350px;
      overflow: hidden;
      word-break: break-word;
    }
    
    .tech-intro .vertical-text {
      max-height: 150px;
    }
    
    /* Responsive Styles */
    @media (max-width: 768px) {
      .grid-row {
        grid-template-columns: 1fr;
        grid-template-areas:
          "image"
          "text";
      }
    
      .image-col {
        grid-area: image;
        padding: 0;
      }
    
      .text-col {
        grid-area: text;
        padding: 1rem;
      }
    
      .tech-intro .tech-content {
        padding: 0 15px;
        font-size: 1rem;
      }
    
      .text-col h2 {
        font-size: 1.5em;
        margin-bottom: 1rem;
      }
    
      .description {
        max-height: 100px;
      }
    
      /* Responsive vertical text */
      .vertical-text {
        max-height: none; 
        padding: 0.5rem;
        font-size: 1rem;
      }
    
      .tech-intro .vertical-text .description {
        max-height: none;
        font-size: 0.95rem;
      }
    }
    
    @media (max-width: 480px) {
      .tech-intro .tech-content {
        font-size: 0.9rem;
        padding: 0 10px;
      }
    
      .text-col h2 {
        font-size: 1.2em;
      }
    
      .description {
        max-height: 80px;
        font-size: 1.2em;
      }
    
      .grid-row {
        min-height: auto;
      }
    
      .vertical-text {
        font-size: 0.9rem;
        padding: 0.5rem;
      }
    }
    </style>