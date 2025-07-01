<template>
  <div>
    <HeroBanner :title="t('partyBuilding.title')" image="/hero/party.jpg" />
    <section class="page-content">
      <div class="card-grid">
        <CardItem
          v-for="(card, index) in paginatedCards"
          :key="index"
          :item="card"
        />
      </div>

      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">&laquo;</button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: currentPage === page }"
        >
          {{ page }}
        </button>
        <button @click="nextPage" :disabled="currentPage === totalPages">&raquo;</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroBanner from '@/components/ui/HeroBanner.vue'
import CardItem from '@/components/ui/CardParty.vue'
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n';

interface PartyBuildingApiResponse {
  id: number;
  title: string;
  description: string | null;
  content?: any;
  contentImages?: any;
  source: string | null;
  locale: string;
  slug: string;
  date: string | Date; // Can be string from API or Date object
  views: number;
  published: boolean;
  mainImage: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
}

interface PartyBuildingCard {
  slug: string;
  titleKey: string;
  date: string;
  source: string;
  views: string;
  mainImage: string;
  contentImages: string[];
  paragraphs: string[];
}

const { t , locale} = useI18n();

const currentPage = ref(1)
const itemsPerPage = 9
const partyBuildingCards = ref<PartyBuildingCard[]>([])
const loading = ref(false)

// Transform API response to match component interface
const transformApiData = (apiData: PartyBuildingApiResponse[]): PartyBuildingCard[] => {
  return apiData.map(item => ({
    slug: item.slug,
    titleKey: item.title,
    date: new Date(item.date).toISOString().split('T')[0],
    source: item.source || '',
    views: item.views.toString(),
    mainImage: item.mainImage || '/media/default-party.jpg',
    contentImages: item.contentImages ? JSON.parse(item.contentImages) : [],
    paragraphs: item.content ? JSON.parse(item.content) : []
  }));
};

// Load data from API
const loadPartyBuildingData = async () => {
  loading.value = true;
  try {
    const response = await $fetch('/api/party-building', {
      query: {
        locale: locale.value,
        published: true
      }
    });

    if (response.success) {
      partyBuildingCards.value = transformApiData(response.data as PartyBuildingApiResponse[]);
    }
  } catch (error) {
    console.error('Failed to load party building data:', error);
  } finally {
    loading.value = false;
  }
};

const totalPages = computed(() => Math.ceil(partyBuildingCards.value.length / itemsPerPage))
const paginatedCards = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return partyBuildingCards.value.slice(start, start + itemsPerPage)
})

// Watch for locale changes
watch(locale, () => {
  loadPartyBuildingData();
});

// Load data on mount
onMounted(() => {
  loadPartyBuildingData();
});

const goToPage = (page: number) => {
  currentPage.value = page
}
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}
</script>

<style scoped>
.page-content {
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

.pagination {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagination button {
  width: 40px;
  height: 40px;
  border: 1px solid grey;
  background-color: transparent;
  color: #333;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.pagination button.active {
  background-color: red;
  color: white;
  border-color: red;
}

.pagination button:hover:not(.active):not(:disabled) {
  background-color: #f0f0f0;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.pagination > button {
  margin: 0 0.25rem;
}

.pagination > button:first-child,
.pagination > button:last-child {
  margin: 0 0.75rem;
}
</style>
