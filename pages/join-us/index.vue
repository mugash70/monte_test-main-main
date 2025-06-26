<template>
  <div>
    <HeroBanner :title="t('Join Us')" image="/hero/join.jpg" />

    <section class="page-content">
      <div class="tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="['tab-button', { active: activeTab === tab }]"
          @click="changeTab(tab)"
        >
          <span :class="{ 'vertical-text': isMongolian }">{{ t(`tabs.${tab}`) }}</span>
        </button>
      </div>

      <template v-if="activeTab === 'Staff Style'">
        <StaffData />
      </template>

      <template v-else>
        <div class="recruitment-form">
          <input
            type="text"
            :placeholder="t('form.Please enter job keywords')"
            :class="{ 'vertical-no': isMongolian }"
            v-model="searchKeyword"
          />
          <div class="selector" @click="toggleCategory">
            <span :class="{ 'vertical-no': isMongolian }">{{
              selectedCategory ? t(`form.${selectedCategory}`) : t('form.Job Category')
            }}</span>
            <FontAwesomeIcon :icon="['fas', 'chevron-down']" :class="{ rotated: isCategoryOpen }" />
            <transition name="slide">
              <ul v-if="isCategoryOpen" class="dropdown">
                <li
                  v-for="(category, index) in categories"
                  :key="index"
                  @click.stop="selectCategory(category)"
                >
                  <span :class="{ 'vertical-no': isMongolian }">{{ t(`form.${category}`) }}</span>
                </li>
              </ul>
            </transition>
          </div>
          <div class="selector" @click="toggleLocation">
            <span :class="{ 'vertical-text': isMongolian }">{{
              selectedLocation ? t(`form.${selectedLocation}`) : t('form.Work Location')
            }}</span>
            <FontAwesomeIcon :icon="['fas', 'chevron-down']" :class="{ rotated: isLocationOpen }" />
            <transition name="slide">
              <ul v-if="isLocationOpen" class="dropdown">
                <li
                  v-for="(location, index) in locations"
                  :key="index"
                  @click.stop="selectLocation(location)"
                >
                  <span :class="{ 'vertical-text': isMongolian }">{{ t(`form.${location}`) }}</span>
                </li>
              </ul>
            </transition>
          </div>
          <button class="search-button" :class="{ 'vertical-text': isMongolian }" @click="searchJobs">{{ t('form.Search') }}</button>
        </div>

        <p class="info-text" :class="{ 'vertical-no': isMongolian }">
          {{ t('form.We are willing to work together with all people of insight to create a better future!') }}
        </p>

        <section class="campus-jobs">
          <template v-if="jobs.length > 0">
            <div
              v-for="(job, index) in jobs"
              :key="index"
              :class="['job-card', { expanded: job.showDetails }]"
              @click="toggleDetails(index, $event)"
            >
              <div class="job-header">
                <div class="job-info" :class="{ 'vertical-no': isMongolian }">
                  <p>{{ t(`form.${job.title}`) }}</p>
                  <p>{{ t(`form.${job.degree}`) }}</p>
                  <p>{{ t(`form.${job.vacancies}`) }}</p>
                </div>
                <div class="job-meta">
                  <span class="date">{{ job.date }}</span>
                  <button class="expand-btn" @click.stop="toggleDetails(index)">
                    <FontAwesomeIcon
                      :icon="['fas', 'chevron-right']"
                      :class="{ rotated: job.showDetails }"
                    />
                  </button>
                </div>
              </div>

              <div :class="['job-details-expanded', { show: job.showDetails }]">
                <div class="job-meta-row">
                  <p :class="{ 'vertical-no': isMongolian }">
                    <strong :class="{ 'vertical-no': isMongolian }">{{ t('form.Job Category') }}:</strong>
                    {{ t(`form.${job.category}`) }}
                  </p>
                  <p :class="{ 'vertical-no': isMongolian }">
                    <strong>{{ t('form.Work Location') }}:</strong>
                    {{ t(`form.${job.location}`) }}
                  </p>
                  <p :class="{ 'vertical-no': isMongolian }">
                    <strong>{{ t('form.Salary Range') }}:</strong>
                    {{ job.salary }}
                  </p>
                  <p :class="{ 'vertical-no': isMongolian }">
                    <strong>{{ t('form.Contact') }}:</strong>
                    {{ job.contact }}
                  </p>
                  <p :class="{ 'vertical-no': isMongolian }">
                    <strong>{{ t('form.Contact Number') }}:</strong>
                    {{ job.contactnumber }}
                  </p>
                </div>

                <div class="job-details">
                  <div class="column">
                    <h4 :class="{ 'vertical-no': isMongolian }">{{ t('form.Job Responsibilities') }}</h4>
                    <ul>
                      <li
                        v-for="(item, i) in job.responsibilities"
                        :key="i"
                        :class="{ 'vertical-text': isMongolian }"
                      >
                        {{ t(item) }}
                      </li>
                    </ul>
                  </div>
                  <div class="column">
                    <h4 :class="{ 'vertical-no': isMongolian }">{{ t('form.Qualifications') }}</h4>
                    <ul>
                      <li
                        v-for="(item, i) in job.qualifications"
                        :key="i"
                        :class="{ 'vertical-text': isMongolian }"
                      >
                        {{ t(item) }}
                      </li>
                    </ul>
                  </div>
                </div>

                <button class="submit-button" :class="{ 'vertical-no': isMongolian }"> 
                  <FontAwesomeIcon :icon="['fas', 'paper-plane']" />
                  {{ t('form.Submit Your Resume') }}
                </button>
              </div>
            </div>
          </template>

          <template v-else>
            <p class="no-data" :class="{ 'vertical-no': isMongolian }">
              {{ t('form.No relevant information found!') }}
            </p>
          </template>
        </section>
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import HeroBanner from '@/components/ui/HeroBanner.vue';
import { jobData } from '../../data/jobs';
import StaffData from '@/components/StaffData.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
library.add(fas);

const { locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');

interface Job {
  title: string;
  degree: string;
  vacancies: string;
  date: string;
  category: string;
  location: string;
  salary: string;
  contact: string;
  contactnumber: string;
  responsibilities: string[];
  qualifications: string[];
  showDetails: boolean;
}

const tabs = ['Social Recruitment', 'Campus Recruitment', 'Staff Style'];
const activeTab = ref('Campus Recruitment');
const searchKeyword = ref('');
const selectedCategory = ref('');
const selectedLocation = ref('');
const isCategoryOpen = ref(false);
const isLocationOpen = ref(false);

const categories = ref<string[]>([]);
const locations = ref<string[]>([]);
const jobs = ref<Job[]>([]);

const loadTabData = () => {
  const source = activeTab.value === 'Campus Recruitment' ? jobData.campusRecruitment : jobData.socialRecruitment;
  categories.value = source.categories;
  locations.value = source.locations;
  jobs.value = source.jobs.map(job => ({ ...job, showDetails: false }));
};

// Initial load
loadTabData();

const changeTab = (tab: string) => {
  activeTab.value = tab;
  isCategoryOpen.value = false;
  isLocationOpen.value = false;
  selectedCategory.value = '';
  selectedLocation.value = '';
  searchKeyword.value = '';
  loadTabData();
};

const toggleCategory = () => {
  isCategoryOpen.value = !isCategoryOpen.value;
  if (isCategoryOpen.value) isLocationOpen.value = false;
};

const toggleLocation = () => {
  isLocationOpen.value = !isLocationOpen.value;
  if (isLocationOpen.value) isCategoryOpen.value = false;
};

const selectCategory = (category: string) => {
  selectedCategory.value = category;
  isCategoryOpen.value = false;
};

const selectLocation = (location: string) => {
  selectedLocation.value = location;
  isLocationOpen.value = false;
};

const searchJobs = () => {
  const source = activeTab.value === 'Campus Recruitment' ? jobData.campusRecruitment.jobs : jobData.socialRecruitment.jobs;
  const keyword = searchKeyword.value.toLowerCase();
  jobs.value = source
    .filter(job =>
      (!selectedCategory.value || selectedCategory.value === 'All' || job.category === selectedCategory.value) &&
      (!selectedLocation.value || selectedLocation.value === 'All' || job.location === selectedLocation.value) &&
      (!keyword || job.title.toLowerCase().includes(keyword))
    )
    .map(job => ({ ...job, showDetails: false }));
};

const toggleDetails = (index: number, event?: MouseEvent) => {
  if (event) {
    const target = event.target as HTMLElement;
    const isInsideDetails = target.closest('.job-details-expanded') || target.closest('.submit-button');
    const isButton = target.closest('button');
    if (isInsideDetails || isButton) return;
  }
  jobs.value[index].showDetails = !jobs.value[index].showDetails;
  nextTick(() => {
    const el = document.querySelectorAll('.job-details-expanded')[index] as HTMLElement;
    if (el && jobs.value[index].showDetails) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
};
</script>

<style scoped>
.page-content {
  padding: 1.5rem;
  text-align: center;
  font-family: "Mongolian Baiti", "Microsoft Yahei", Arial, sans-serif;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.tab-button {
  padding: 0.5rem 1rem;
  border: 1px solid #999;
  background: transparent;
  color: #999;
  cursor: pointer;
  font-weight: 400;
  font-size: clamp(0.9rem, 2vw, 1rem);
  border-radius: 4px;
  transition: all 0.3s ease;
}

.tab-button:hover {
  color: #e60000;
  border-color: #e60000;
}

.tab-button.active {
  background: #e60000;
  color: white;
  border-color: #e60000;
  border-width: 2px;
}

.recruitment-form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.recruitment-form input {
  border: none;
  border-bottom: 1px solid #e60000;
  outline: none;
  padding: 0.5rem 0.25rem;
  width: clamp(150px, 30vw, 200px);
  font-size: clamp(0.85rem, 2vw, 0.95rem);
}

.selector {
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid #e60000;
  padding: 0.5rem 0.25rem;
  width: clamp(120px, 25vw, 150px);
  text-align: left;
  user-select: none;
}

.selector span {
  font-size: clamp(0.85rem, 2vw, 0.95rem);
}

.selector .fa-chevron-down {
  float: right;
  font-size: 0.8rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.selector .rotated {
  transform: rotate(180deg);
  color: #e60000;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  z-index: 10;
  list-style: none;
  padding: 0;
  margin: 0.25rem 0 0 0;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown li {
  padding: 0.5rem;
  cursor: pointer;
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dropdown li:hover {
  background-color: #f5f5f5;
  color: #e60000;
}

.search-button {
  border: 1px solid #e60000;
  padding: 0.5rem 1rem;
  background: transparent;
  color: #e60000;
  font-weight: 600;
  font-size: clamp(0.9rem, 2vw, 1rem);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.search-button:hover {
  background: #e60000;
  color: white;
}

.info-text {
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #555;
  margin: 1rem 0;
  padding: 0 1rem;
}

.job-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem auto;
  width: clamp(90%, 95vw, 800px);
  text-align: left;
  cursor: pointer;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.job-card.expanded {
  background-color: #f9f9f9;
  border-color: #bbb;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.job-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-weight: 600;
  color: #333;
}

.job-info p {
  margin: 0;
  font-size: clamp(0.85rem, 2vw, 0.95rem);
}

.job-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.date {
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: #777;
}

.expand-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #999;
  border-radius: 50%;
  background: transparent;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.expand-btn:hover {
  border-color: #e60000;
  color: #e60000;
}

.expand-btn .fa-chevron-right {
  font-size: 0.8rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.expand-btn .fa-chevron-right.rotated {
  transform: rotate(90deg);
  color: #e60000;
}

.job-details-expanded {
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  max-height: 0;
  padding: 0 0.5rem;
}

.job-details-expanded.show {
  max-height: 1200px; 
  padding: 1rem 0.5rem;
}

.job-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  margin-bottom: 1rem;
}

.job-details {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  position: relative;
}

.job-details::before {
  content: none; 
}

.job-details .column {
  flex: 1;
  min-width: 200px;
}

.job-details h4 {
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: clamp(0.95rem, 2vw, 1rem);
}

.job-details ul {
  list-style: none;
  padding-left: 0;
}

.job-details ul li {
  margin-bottom: 0.25rem;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
}

.submit-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #e60000;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: clamp(0.9rem, 2vw, 1rem);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background: #cc0000;
}

.no-data {
  text-align: start;
  color: #777;
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 500;
  padding: 1rem;
  margin: 1rem auto;
  width: 90%;
  border-bottom: 1px solid #ddd;
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
.vertical-no {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: inline-block;
  max-height: 100px;
  overflow: hidden;
  word-break: break-word;
}
.vertical-search {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: inline-block;
  max-height: 100px;
  overflow: hidden;
  word-break: break-word;
}
/* Responsive Design - Large Desktop */
@media (max-width: 1200px) {
  .page-content {
    padding: 1.2rem;
  }

  .job-card {
    width: 95%;
  }
}

/* Responsive Design - Tablet */
@media (max-width: 992px) {
  .tabs {
    gap: 0.3rem;
  }

  .recruitment-form {
    gap: 0.8rem;
  }

  .job-details {
    flex-direction: column;
  }
}

/* Responsive Design - Mobile Large */
@media (max-width: 768px) {
  .page-content {
    padding: 1rem;
  }

  .tabs {
    flex-direction: column;
    gap: 0.5rem;
  }

  .tab-button {
    width: 100%;
    padding: 0.6rem;
  }

  .recruitment-form {
    flex-direction: column;
    align-items: stretch;
  }

  .recruitment-form input,
  .selector {
    width: 100%;
    max-width: none;
  }

  .job-card {
    width: 100%;
    padding: 0.8rem;
    margin: 0.8rem auto;
  }

  .job-info {
    flex-direction: column;
    gap: 0.5rem;
  }

  .job-meta-row {
    flex-direction: column;
    gap: 0.3rem;
  }

  .vertical-text {
    max-height: 120px; /* ~8-10 characters */
  }
}

/* Responsive Design - Mobile Medium */
@media (max-width: 576px) {
  .page-content {
    padding: 0.8rem;
  }

  .tabs {
    gap: 0.4rem;
  }

  .recruitment-form {
    gap: 0.6rem;
  }

  .job-card {
    padding: 0.6rem;
    margin: 0.6rem auto;
  }

  .job-info p,
  .job-meta-row p,
  .job-details ul li {
    font-size: clamp(0.8rem, 2.5vw, 0.85rem);
  }

  .job-details h4 {
    font-size: clamp(0.9rem, 2.5vw, 0.95rem);
  }

  .submit-button,
  .search-button,
  .tab-button {
    font-size: clamp(0.85rem, 2.5vw, 0.9rem);
  }

  .vertical-text {
    max-height: 100px; /* ~6-8 characters */
  }
}

/* Responsive Design - Mobile Small */
@media (max-width: 480px) {
  .page-content {
    padding: 0.6rem;
  }

  .job-card {
    padding: 0.5rem;
    margin: 0.5rem auto;
  }

  .expand-btn {
    width: 28px;
    height: 28px;
  }

  .vertical-text {
    max-height: 80px; /* ~5-6 characters */
  }
}

/* Responsive Design - Mobile Extra Small */
@media (max-width: 360px) {
  .page-content {
    padding: 0.5rem;
  }

  .recruitment-form input,
  .selector {
    padding: 0.4rem 0.2rem;
  }

  .dropdown li {
    padding: 0.4rem;
  }

  .job-card {
    padding: 0.4rem;
  }

  .submit-button,
  .search-button {
    padding: 0.4rem 0.8rem;
  }

  .vertical-text {
    max-height: 80px; /* ~5-6 characters */
  }
}

/* Responsive Design - Ultra Small Devices */
@media (max-width: 320px) {
  .page-content {
    padding: 0.4rem;
  }

  .tabs {
    gap: 0.3rem;
  }

  .recruitment-form input,
  .selector {
    font-size: clamp(0.75rem, 2.5vw, 0.8rem);
  }

  .dropdown li {
    font-size: clamp(0.75rem, 2.5vw, 0.8rem);
  }

  .job-info p,
  .job-meta-row p,
  .job-details ul li {
    font-size: clamp(0.75rem, 2.5vw, 0.8rem);
  }

  .job-details h4 {
    font-size: clamp(0.85rem, 2.5vw, 0.9rem);
  }

  .submit-button,
  .search-button,
  .tab-button {
    font-size: clamp(0.8rem, 2.5vw, 0.85rem);
  }

  .expand-btn {
    width: 26px;
    height: 26px;
  }

  .vertical-text {
    max-height: 70px; /* ~4-5 characters */
  }
}

/* Landscape Orientation on Mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .job-card {
    width: 95%;
  }

  .job-details-expanded.show {
    max-height: 800px;
  }

  .vertical-text {
    max-height: 100px;
  }
}

/* High DPI / Retina Display Support */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .job-card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .expand-btn {
    border-width: 1.5px;
  }
}

/* Touch Device Optimizations */
@media (hover: none) and (pointer: coarse) {
  .tab-button,
  .search-button,
  .submit-button,
  .expand-btn {
    padding: 0.6rem;
  }

  .dropdown li {
    padding: 0.6rem;
  }
}

/* Accessibility Improvements */
@media (prefers-reduced-motion: reduce) {
  .tab-button,
  .search-button,
  .submit-button,
  .expand-btn,
  .job-details-expanded,
  .fa-chevron-right,
  .fa-chevron-down {
    transition: none;
  }
}
</style>