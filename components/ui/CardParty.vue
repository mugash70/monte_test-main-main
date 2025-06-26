<template>
  <router-link :to="`/party-building/${item.slug}`" target="_blank" rel="noopener noreferrer" class="card-item no-underline">
    <v-card elevation="2" class="rounded-lg hover:shadow-lg transition-shadow duration-300">
      <v-img
        :src="item.mainImage"
        height="180"
        class="rounded-t-lg"
        cover
      />
      <v-card-text class="pt-4 pb-2 px-4 card-content">
        <div class="card-date">{{ formatDate(item.date) }}</div>
        <div class="card-description truncate-text-2 mt-1" :class="{ 'vertical-text': isMongolian }">
          {{ getFirstParagraph() }}
        </div>
      </v-card-text>
    </v-card>
  </router-link>
</template>


<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { PartyBuildingDetail } from '@/composables/useParty'
import { computed } from 'vue';

const { t, locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');

interface Props {
  item: PartyBuildingDetail
}
const props = defineProps<Props>()

function formatDate(date: string): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function getFirstParagraph(): string {
  const paragraphs = props.item.paragraphs || []
  return paragraphs.length > 0 ? t(paragraphs[0]) : ''
}
</script>




<style scoped>
.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  max-height: 150px;
    overflow: hidden; 
    word-break: break-word;
}
.card-item {
  display: flex;
  flex-direction: column;
  border-radius: 0;
  overflow: hidden;
  background-color: #fff;
  outline: 1px solid #e7e7e7;
  transition: box-shadow 0.3s ease, outline 0.3s ease, background-color 0.3s ease;
  text-decoration: none;
}
.truncate-text-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.no-underline {
  text-decoration: none;
}
.card-item:hover {
  outline: none;
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card-item:hover .card-image img {
  transform: scale(1.1);
}

.card-content {
  padding: 1rem;
  text-align: start;
  background-color: #fff;
  transition: background-color 0.3s ease;
}

.card-item:hover .card-content {
  background-color: #dddddd;
}
.card-item:hover .card-description {
  color:red;
  cursor: pointer;
}
.card-date {
  font-size: 16px;
  color: #a3a3a3;
  line-height: 1.5;
  font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: 1rem;
  line-height: 1.5;
  color:#595757;
  font-weight: normal;
  font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
}

</style>

