<template>
  <router-link :to="`/news/${item.slug}`" target="_blank" rel="noopener noreferrer" class="card-link">
    <div class="card-item" :class="{ 'vertical-layout': isMongolian }">
      <div class="card-image">
        <img :src="item.image" alt="Card Image" />
      </div>
      <div class="card-content" :class="{ 'vertical-text': isMongolian }">
        <p class="card-date">{{ item.date }}</p>
        <p class="card-description">{{ t(truncatedDescription) }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');

const props = defineProps<{
  item: {
    image: string;
    date: string;
    descriptionKey: string;
    slug: string;
  };
}>();

const truncatedDescription = computed(() =>
  props.item.descriptionKey.length > 100
    ? props.item.descriptionKey.slice(0, 100) + '...'
    : props.item.descriptionKey
);
</script>

<style scoped>
.card-item {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.3s ease;
}

.card-link {
  text-decoration: none;
  color: inherit;
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

.card-item:hover .card-description {
  color: red;
  cursor: pointer;
}

.card-date {
  font-size: 16px;
  color: #a3a3a3;
  line-height: 1.5;
  font-family: "Mongolian Baiti", "Microsoft Yahei", arial, "\5b8b\4f53", sans-serif;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: 1rem;
  line-height: 1.5;
  color: #595757;
  font-weight: normal;
  font-family: "Mongolian Baiti", "Microsoft Yahei", arial, "\5b8b\4f53", sans-serif;
}

/* Vertical text for Mongolian */
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

/* Adjust card-item layout for vertical text */
.card-item.vertical-layout {
  flex-direction: row;
  align-items: stretch;
}

.card-item.vertical-layout .card-image {
  width: 50%;
  height: auto;
}

.card-item.vertical-layout .card-content {
  width: 50%;
  justify-content: center;
}

/* Mobile-specific adjustments */
@media (max-width: 640px) {
  .card-item {
    flex-direction: column;
  }

  .card-item.vertical-layout {
    flex-direction: column;
  }

  .card-item.vertical-layout .card-image {
    width: 100%;
    height: 200px;
  }

  .card-item.vertical-layout .card-content {
    width: 100%;
    padding: 1rem;
  }

  /* Limit line length for vertical text on mobile */
  .vertical-text {
    max-height: 200px; /* Adjust to control characters per line */
    overflow: hidden; /* Hide overflow text */
    word-break: break-word; /* Ensure text wraps to next line */
  }

  .vertical-text .card-date,
  .vertical-text .card-description {
    max-height: 100px; /* Limit height per text element */
    overflow: hidden;
  }
}

/* Tablet adjustments */
@media (max-width: 1024px) {
  .card-item.vertical-layout {
    flex-direction: column;
  }

  .card-item.vertical-layout .card-image {
    width: 100%;
    height: 200px;
  }

  .card-item.vertical-layout .card-content {
    width: 100%;
    padding: 1rem;
  }
}
</style>