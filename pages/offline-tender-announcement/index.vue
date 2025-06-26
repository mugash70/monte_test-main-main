<template>
  <div>
    <HeroBanner :title="t('offline.heroTitle')" image="/hero/tender.jpg" />

    <section class="offline-content">
      <div class="tabs" :class="{ 'vertical-tab': isMongolian }">
        <div
          :class="['tab', { active: activeTab === 'Tender Notice' }]"
          @click="setActiveTab('Tender Notice')"
        >
          {{ t('offline.tab1') }}
        </div>
        <div
          :class="['tab', { active: activeTab === 'Winning bid announcement' }]"
          @click="setActiveTab('Winning bid announcement')"
        >
         {{ t('offline.tab2') }}
        </div>
      </div>
    </section>

    <div class="tab-content">
      <div v-if="activeTab === 'Tender Notice'">
        <div class="card-grid">
          <CardItem v-for="(notice, index) in paginatedTender" :key="index" :item="notice" />
        </div>
        <Pagination
          :current-page="tenderPage"
          :total-pages="totalPagesTender"
          @page-change="updateTenderPage"
        />
      </div>

      <div v-else>
        <div class="card-grid">
          <CardItem v-for="(bid, index) in paginatedBid" :key="index" :item="bid" />
        </div>
        <Pagination
          :current-page="bidPage"
          :total-pages="totalPagesBid"
          @page-change="updateBidPage"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroBanner from '@/components/ui/HeroBanner.vue'
import CardItem from '@/components/ui/CardTender.vue'
import Pagination from '@/components/ui/Pagination.vue'

import { ref, computed, watch } from 'vue'
import { useTender } from '@/composables/useTender'
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
const { notice, bid } = useTender()

const activeTab = ref<'Tender Notice' | 'Winning bid announcement'>('Tender Notice')

const itemsPerPage = 6

const tenderPage = ref(1)
const bidPage = ref(1)

const totalPagesTender = computed(() => Math.ceil(notice.value.length / itemsPerPage))
const totalPagesBid = computed(() => Math.ceil(bid.value.length / itemsPerPage))

const paginatedTender = computed(() => {
  const start = (tenderPage.value - 1) * itemsPerPage
  return notice.value.slice(start, start + itemsPerPage)
})

const paginatedBid = computed(() => {
  const start = (bidPage.value - 1) * itemsPerPage
  return bid.value.slice(start, start + itemsPerPage)
})

const setActiveTab = (tab: 'Tender Notice' | 'Winning bid announcement') => {
  activeTab.value = tab
}

const updateTenderPage = (page: number) => {
  tenderPage.value = page
}

const updateBidPage = (page: number) => {
  bidPage.value = page
}

watch(activeTab, (newTab) => {
  if (newTab === 'Tender Notice') tenderPage.value = 1
  else bidPage.value = 1
})
</script>


<style scoped>
.vertical-tab  {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;

  padding: 1rem 0.5rem;
  max-height: 220px;
    overflow: hidden;
    word-break: break-word;
}
.tabs { 
  display: flex; 
  gap: 2rem; 
  justify-content: center; 
  margin: 2rem 0; 
} 
 
.tab { 
  position: relative; 
  font-size: 2.5rem; 
  font-weight: 600; 
  cursor: pointer; 
  color: #929191; 
  transition: color 0.3s; 
} 
 
.tab:hover { 
  color: red;  
} 
 
.tab.active::after { 
  content: ''; 
  position: absolute; 
  bottom: -0.25rem; 
  left: 0; 
  width: 100%; 
  height: 4px; 
  background: linear-gradient( 
    to right, 
    #f7931e 0%, 
    #f7931e 50%, 
    #ff4444 50%, 
    #ff4444 100% 
  ); 
} 
 
.tab-content { 
  padding: 2rem; 
} 
.offline-content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto; 
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 0 1rem;
}

@media (max-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .card-grid {
    grid-template-columns: 1fr; 
  }
}
</style>
