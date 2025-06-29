<template>
  <div>
    <HeroBanner :title="t('collaborativeProjects.title')" image="/hero/collaborative.jpg" />
    <br/> <br/><br/>
    <section class="projects-intro">
      <p :class="{ 'vertical-intro': isMongolian }">{{ t('collaborativeProjects.intro') }}</p>
    </section>

    <section class="projects-content">
      <div class="grid-container">
        <!-- Row 1 -->
        <div class="grid-row row-1 fade-up">
          <div class="grid-col image-col">
            <img src="/media/project1.jpg" :alt="t('collaborativeProjects.projects.newMaterials.title')">
          </div>
          <div class="grid-col text-col">
            <div :class="{ 'vertical-grid': isMongolian }">
              <h2>{{ t('collaborativeProjects.projects.newMaterials.title') }}</h2>
              <div class="description">
                <p>{{ t('collaborativeProjects.projects.newMaterials.description') }}</p>
              </div>
            </div>
            <div class="contact-section">
              <ul class="contact-list">
                <li class="contact-item">
                  <strong :class="{ 'vertical-text': isMongolian }">{{ t('collaborativeProjects.contact.email') }}</strong>
                  <a href="mailto:mtgjmtmy@mengtaigroup.com">mtgjmtmy@mengtaigroup.com</a>
                </li>
                <li class="contact-item">
                  <strong :class="{ 'vertical-text': isMongolian }">{{ t('collaborativeProjects.contact.phone') }}</strong>
                  <a href="tel:15847700664">{{ t('collaborativeProjects.contact.name') }}</a>
                </li>
                <li class="contact-item">
                  <strong :class="{ 'vertical-text': isMongolian }">{{ t('collaborativeProjects.contact.address') }}</strong>
                  No. 35 Yimei North Road, Ordos, Inner Mongolia, China
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="grid-row row-2 fade-up">
          <div class="grid-col row2 text-col">
            <div :class="{ 'vertical-grid': isMongolian }">
              <h2>{{ t('collaborativeProjects.projects.newEnergy.title') }}</h2>
              <div class="description">
                <p>{{ t('collaborativeProjects.projects.newEnergy.description') }}</p>
              </div>
            </div>
            <div class="contact-section">
              <ul class="contact-list">
                <li class="contact-item">
                  <strong :class="{ 'vertical-text': isMongolian }">{{ t('collaborativeProjects.contact.email') }}</strong>
                  <a href="mailto:mtgjmtmy@mengtaigroup.com">mtgjmtmy@mengtaigroup.com</a>
                </li>
                <li class="contact-item">
                  <strong :class="{ 'vertical-text': isMongolian }">{{ t('collaborativeProjects.contact.phone') }}</strong>
                  <a href="tel:15847700664">{{ t('collaborativeProjects.contact.name') }}</a>
                </li>
                <li class="contact-item">
                  <strong :class="{ 'vertical-text': isMongolian }">{{ t('collaborativeProjects.contact.address') }}</strong>
                  No. 35 Yimei North Road, Ordos, Inner Mongolia, China
                </li>
              </ul>
            </div>
          </div>
          <div class="grid-col image-col">
            <img src="/media/project2.jpg" :alt="t('collaborativeProjects.projects.newEnergy.title')">
          </div>
        </div>

        <!-- Row 3 -->
        <div class="grid-row row-3 fade-up">
          <div class="grid-col image-col">
            <img src="/media/project3.jpg" :alt="t('collaborativeProjects.projects.flyAsh.title')">
          </div>
          <div class="grid-col text-col">
            <div :class="{ 'vertical-grid': isMongolian }">
              <h2>{{ t('collaborativeProjects.projects.flyAsh.title') }}</h2>
              <div class="description">
                <p>{{ t('collaborativeProjects.projects.flyAsh.description') }}</p>
              </div>
            </div>
            <div class="contact-section">
              <ul class="contact-list">
                <li class="contact-item">
                  <strong :class="{ 'vertical-text': isMongolian }">{{ t('collaborativeProjects.contact.email') }}</strong>
                  <a href="mailto:mtgjmtmy@mengtaigroup.com">mtgjmtmy@mengtaigroup.com</a>
                </li>
                <li class="contact-item">
                  <strong :class="{ 'vertical-text': isMongolian }">{{ t('collaborativeProjects.contact.phone') }}</strong>
                  <a href="tel:15847700664">{{ t('collaborativeProjects.contact.name') }}</a>
                </li>
                <li class="contact-item">
                  <strong :class="{ 'vertical-text': isMongolian }">{{ t('collaborativeProjects.contact.address') }}</strong>
                  No. 35 Yimei North Road, Ordos, Inner Mongolia, China
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Row 4 -->
        <div class="grid-row row-4 full-width fade-up">
          <div class="background-image">
            <div :class="{ 'vertical-text': isMongolian }">
              <h2>{{ t('collaborativeProjects.cooperation.title') }}</h2>
              <p>{{ t('collaborativeProjects.cooperation.description') }}</p>
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
const { t } = useI18n();

const { locale } = useI18n();
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

  const elements = document.querySelectorAll('.fade-up');
  elements.forEach(el => observer.observe(el));

  onBeforeUnmount(() => {
    elements.forEach(el => observer.unobserve(el));
  });
});
</script>

<style scoped>
.vertical-intro {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  max-height: 240px;
  overflow: hidden;
  word-break: break-word;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  margin: 0 auto;
}

.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;
  max-height: 300px;
  overflow: hidden;
  word-break: break-word;
}

.vertical-grid {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  max-height: 200px;
  overflow: hidden;
  word-break: break-word;
}

.projects-intro {
  width: 100%;
  background-color: #f2f2f2;
  padding: 4rem 1rem;
  line-height: 2;
  text-align: center;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 500;
  margin-top: -85px;
  margin-bottom: 20px;
  color: #595757;
  display: flex;
  justify-content: center;
  align-items: center;
}

.projects-intro p {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
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
  border-bottom: none;
}

.grid-row.row-1 .grid-col,
.grid-row.row-3 .grid-col {
  background-color: #dbdbdb;
  color: #6b6b6b;
}

.grid-row.row-1 .image-col img,
.grid-row.row-2 .image-col img,
.grid-row.row-3 .image-col img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.grid-row.row-1 .image-col,
.grid-row.row-2 .image-col,
.grid-row.row-3 .image-col {
  padding: 0;
}

.grid-col.row2 {
  border-top: 2px solid yellow;
  border-bottom: 2px solid yellow;
  border-left: 2px solid yellow;
  box-sizing: border-box;
}

.grid-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
}

.image-col {
  overflow: hidden;
}

.image-col img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
}

.image-col img:hover {
  transform: scale(1.05);
}

.text-col h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: normal;
  margin-bottom: 0.5rem;
  font-family: "Microsoft YaHei", Arial, sans-serif;
}

.description {
  max-height: 120px;
  overflow-y: auto;
  margin-bottom: 1rem;
  scrollbar-width: thin;
  scrollbar-color: red #ccc;
}

.description p {
  margin-bottom: 0.5rem;
  line-height: 1.4;
  font-family: "Microsoft YaHei", Arial, sans-serif;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
}

.contact-section {
  padding: 1.5rem;
  flex-grow: 1;
  background: inherit;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #ccc;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-item {
  margin-bottom: 0.8rem;
  color: #555;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.contact-item::before {
  content: '';
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.contact-item:nth-child(1)::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23f7931e' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'/%3E%3C/svg%3E");
}

.contact-item:nth-child(2)::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23f7931e' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'/%3E%3C/svg%3E");
}

.contact-item:nth-child(3)::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23f7931e' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'/%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'/%3E%3C/svg%3E");
}

.contact-item strong {
  color: #333;
  font-weight: 600;
  display: inline-block;
  min-width: 70px;
}

.contact-item a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: red;
}

.full-width {
  grid-template-columns: 1fr;
}

.grid-row.full-width .background-image {
  position: relative;
  background-image: url('/media/project4.jpg');
  background-size: cover;
  background-position: center;
  padding: 4rem 2rem;
  color: #fff;
  text-align: left;
}

.grid-row.full-width .background-image h2,
.grid-row.full-width .background-image p {
  display: block;
  margin: 0;
  padding: 0;
}

.grid-row.full-width .background-image h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: start;
}

.grid-row.full-width .background-image p {
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  text-align: start;
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

.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-up.active {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .projects-intro {
    padding: 2.5rem 0.5rem;
    font-size: clamp(0.875rem, 2.5vw, 1rem);
  }

  .vertical-intro {
    max-height: 200px;
    font-size: clamp(0.875rem, 2.5vw, 1rem);
    padding: 0.5rem;
  }

  .grid-row {
    grid-template-columns: 1fr;
    min-height: auto;
    gap: 1rem;
  }

  .grid-col {
    padding: 1rem;
  }

  .text-col h2 {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
  }

  .description {
    max-height: 150px;
  }

  .contact-section {
    padding: 1rem;
  }

  .contact-item {
    font-size: clamp(0.625rem, 2vw, 0.75rem);
  }

  .grid-row.full-width .background-image {
    padding: 2rem 1rem;
  }

  .grid-row.full-width .background-image h2 {
    font-size: clamp(1.25rem, 4vw, 1.5rem);
  }

  .grid-row.full-width .background-image p {
    font-size: clamp(0.75rem, 2.5vw, 0.875rem);
  }
}

@media (max-width: 480px) {
  .projects-intro {
    padding: 1.5rem 0.5rem;
    font-size: clamp(0.75rem, 2.5vw, 0.875rem);
  }

  .vertical-intro {
    max-height: 150px;
    font-size: clamp(0.75rem, 2.5vw, 0.875rem);
    padding: 0.5rem;
  }

  .grid-row {
    gap: 0.5rem;
  }

  .grid-col {
    padding: 0.75rem;
  }

  .text-col h2 {
    font-size: clamp(1rem, 3vw, 1.25rem);
  }

  .description {
    max-height: 120px;
  }

  .contact-section {
    padding: 0.75rem;
  }

  .contact-item {
    font-size: clamp(0.625rem, 2vw, 0.75rem);
  }

  .grid-row.full-width .background-image {
    padding: 1.5rem 0.75rem;
  }

  .grid-row.full-width .background-image h2 {
    font-size: clamp(1rem, 4vw, 1.25rem);
  }

  .grid-row.full-width .background-image p {
    font-size: clamp(0.625rem, 2.5vw, 0.75rem);
  }
}
</style>