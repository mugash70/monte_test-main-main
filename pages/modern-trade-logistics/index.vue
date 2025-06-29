
    <template>
      <div>
        <HeroBanner :title="t('logistics.title')" image="/hero/logistics.jpg" />
        <div class="responsive-spacing"></div>
        <section class="tech-intro">
          <div class="tech-content">
            <p :class="{ 'vertical-head': isMongolian }">{{ t('logistics.intro') }}</p>
          </div>
        </section>


        <section class="projects-content">
          <div class="grid-container">

            <!-- Row 1 -->
            <div class="grid-row">
              <div class="grid-col image-col">
                <img src="/media/log1.jpg" alt="Project 1">
              </div>
              <div class="grid-col text-col" :class="{ 'vertical-text': isMongolian }">
               <h2 class="fade-in">{{ t('logistics.energy.title') }}</h2>

                <div class="description">
                  <p>{{ t('logistics.energy.desc') }}</p>
                </div>
              </div>
            </div>
            <!-- Row 2 -->
            <div class="grid-row">
              <div class="grid-col text-col fade-in" :class="{ 'vertical-text': isMongolian }">
                <h2 class="fade-in">{{ t('logistics.material.title') }}</h2>

                <div class="description">
                  <p>{{ t('logistics.material.desc') }}</p>
                </div>
              </div>
              <div class="grid-col image-col">
                <img src="/media/log2.jpg" alt="Project 1">
              </div>
            </div>
            <!-- Row 3 -->
            <div class="grid-row">
              <div class="grid-col image-col">
                <img src="/media/log3.jpg" alt="Project 1">
              </div>
              <div class="grid-col text-col fade-in" :class="{ 'vertical-text': isMongolian }">
                <h2  class="fade-in">{{ t('logistics.logisticsSystem.title') }}</h2>

                <div class="description">
                  <p>{{ t('logistics.logisticsSystem.desc') }}</p>
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

const { t,locale } = useI18n();
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
      transition: transform 0.5s ease, filter 0.5s ease;
    }
    .image-col {
      overflow: hidden;
      padding: 0;
    }
    .image-col img:hover {
      transform: scale(1.08);
      filter: brightness(1.05) contrast(1.1);
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
    .vertical-head {
      writing-mode: vertical-lr;
      text-orientation: sideways;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 0.5rem;
      max-height: 250px;
        word-break: break-word;
    }
    @media (max-width: 768px) {
 .vertical-head {
    text-orientation: mixed;
    max-height: none;
    padding: 0.5rem;
    line-height: 1.6;
    max-height: 250px;
  }
  
  .tech-intro .tech-content {
    padding: 0 20px;
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 32px;
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



