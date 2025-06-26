<template>
  <HeroBanner :title="t('dev.title')" image="/hero/development.jpg" />
  <div class="achievements-carousel">
    <h2 class="section-title" :class="{ 'vertical-text': isMongolian }">{{ t('dev.section') }}</h2>
    
    <div class="achievements-layout">
      <!-- Vertical Year Selector -->
      <div class="year-selector-vertical">
        <button
          v-for="year in years"
          :key="year"
          @click="selectYear(Number(year))"
          :class="{ active: selectedYear === Number(year) }"
        >
          {{ year }}
        </button>
      </div>

      <!-- Achievement Content -->
      <div class="achievements-container">
        <div v-if="!filteredAchievements.length || !filteredAchievements[0]?.items?.length" 
             class="no-data">
          No achievements found for {{ selectedYear }}
        </div>
        
        <transition-group name="fade" mode="out-in" v-else>
          <div class="achievement-list" v-for="(achievement, index) in filteredAchievements" :key="index">
            <div class="achievement-item" v-for="(item, idx) in achievement.items" :key="idx">
              <span class="bullet-point">•</span>
              <span class="achievement-text" :class="{ 'vertical-text': isMongolian }">
                {{ t ? t(item) : item }}
              </span>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import HeroBanner from '@/components/ui/HeroBanner.vue';
import { useI18n } from 'vue-i18n';
const { t,locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
const selectedYear = ref(2022);
interface Achievement {
  items: string[];
}

const achievements = ref<Record<string, Achievement>>({
  2024: {
    items: [
      "dev.achievements.item2024[0]"
    ]
  },
  2023: {
    items: [
       "dev.achievements.item2023[0]",
       "dev.achievements.item2023[1]",
       "dev.achievements.item2023[2]",
       "dev.achievements.item2023[3]",
    ]
  },
  2022: {
    items: [
      "dev.achievements.item2022[0]",
      "dev.achievements.item2022[1]",
      "dev.achievements.item2022[2]",
      "dev.achievements.item2022[3]",
    ]
  },
  2021: {
    items: [
      "dev.achievements.item2021[0]",
      "dev.achievements.item2021[1]",
      "dev.achievements.item2021[2]",
      "dev.achievements.item2021[3]",
      "dev.achievements.item2021[4]",
      "dev.achievements.item2021[5]",
      "dev.achievements.item2021[6]",
    ]
  },
  2020: {
    items: [
      "dev.achievements.item2020[0]",
      "dev.achievements.item2020[1]",
      "dev.achievements.item2020[2]",
      "dev.achievements.item2020[3]",
      "dev.achievements.item2020[4]",
      "dev.achievements.item2020[5]",
      "dev.achievements.item2020[6]",
      "dev.achievements.item2020[7]"
    ]
  },
  2019: {
    items: [
      "dev.achievements.item2019[0]",
      "dev.achievements.item2019[1]",
      "dev.achievements.item2019[2]",
      "dev.achievements.item2019[3]"
    ]
  },
  2018: {
    items: [
      "dev.achievements.item2018[0]",
      "dev.achievements.item2018[1]",
    ]
  },
  2017: {
    items: [
      "dev.achievements.item2017[0]",
      "dev.achievements.item2017[1]",
      "dev.achievements.item2017[2]",
    ]
  },
  2016: {
    items: [
      "dev.achievements.item2016[0]",
      "dev.achievements.item2016[1]",
    ]
  },
  2015: {
    items: [
      "dev.achievements.item2015[0]",
      "dev.achievements.item2015[1]",
      "dev.achievements.item2015[2]",
    ]
  }
});

const years = computed(() => Object.keys(achievements.value).sort().reverse());
const filteredAchievements = computed(() => {
  const yearData = achievements.value[Number(selectedYear.value)];
  return yearData ? [yearData] : [];
});

function selectYear(year: number) {
  selectedYear.value = year;
}

// Debug logging
onMounted(() => {
  console.log('Component mounted');
  console.log('Achievements data:', achievements.value);
  console.log('Selected year:', selectedYear.value);
  console.log('Years:', years.value);
  console.log('Filtered achievements:', filteredAchievements.value);
});
</script>

<style scoped>
.achievements-carousel {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
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

h2 {
  text-align: start;
  color: #333;
  margin-bottom: 30px;
}

.achievements-layout {
  display: flex;
  gap: 30px;
}

.year-selector-vertical {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 5px;
}

.year-selector-vertical::-webkit-scrollbar {
  width: 6px;
}

.year-selector-vertical::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.year-selector-vertical::-webkit-scrollbar-thumb {
  background: #dc3545;
  border-radius: 3px;
}

.year-selector-vertical::-webkit-scrollbar-thumb:hover {
  background: #c82333;
}

.year-selector-vertical {
  scrollbar-width: thin;
  scrollbar-color: #dc3545 #f1f1f1;
}

.year-selector-vertical button {
  margin: 4px 0;
  padding: 10px 14px;
  background: #f0f0f000;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  font-size: 30px;
  white-space: nowrap;
}

.year-selector-vertical button.active {
  color: #dc3545;
  font-size: 40px;
  font-weight: bold;
}

.year-selector-vertical button:hover {
  background: #f5f5f5;
  transform: translateX(5px);
}

.achievements-container {
  flex: 1;
  min-height: 200px;
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 8px;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 500px;
  overflow-y: auto;
}

.achievements-container::-webkit-scrollbar {
  width: 6px;
}

.achievements-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.achievements-container::-webkit-scrollbar-thumb {
  background: #dc3545;
  border-radius: 3px;
}

.achievements-container::-webkit-scrollbar-thumb:hover {
  background: #c82333;
}

.achievements-container {
  scrollbar-width: thin;
  scrollbar-color: #dc3545 #f1f1f1;
}

.achievement-item {
  margin-bottom: 15px;
  padding: 15px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: flex-start;
  gap: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.achievement-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.bullet-point {
  color: #dc3545;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.2;
  flex-shrink: 0;
  margin-top: 2px;
}

.achievement-text {
  flex: 1;
  line-height: 1.5;
  color: #333;
}

.no-data {
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 40px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .achievements-carousel {
    padding: 15px;
  }

  .section-title {
    font-size: 28px;
    margin-bottom: 1.5rem;
    padding: 0 10px;
  }

  .achievements-layout {
    flex-direction: column;
    gap: 20px;
  }

  .year-selector-vertical {
    flex-direction: row;
    max-height: none;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 10px;
    gap: 10px;
  }

  .year-selector-vertical button {
    font-size: 24px;
    padding: 8px 12px;
    flex-shrink: 0;
  }

  .year-selector-vertical button.active {
    font-size: 28px;
  }

  .achievements-container {
    max-height: 400px;
    padding: 15px;
  }

  .achievement-item {
    padding: 12px;
    margin-bottom: 12px;
  }

  .bullet-point {
    font-size: 18px;
  }

  .achievement-text {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .achievements-carousel {
    padding: 10px;
  }

  .section-title {
    font-size: 24px;
    padding: 0 5px;
  }

  .year-selector-vertical button {
    font-size: 20px;
    padding: 6px 10px;
  }

  .year-selector-vertical button.active {
    font-size: 24px;
  }

  .achievements-container {
    padding: 10px;
    max-height: 350px;
  }

  .achievement-item {
    padding: 10px;
    gap: 8px;
  }

  .bullet-point {
    font-size: 16px;
  }

  .achievement-text {
    font-size: 13px;
    line-height: 1.4;
  }
}
.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 150px;
  overflow: hidden;
  word-break: break-word;
}

.achievement-text.vertical-text {
  max-height: 50px;
}
</style>