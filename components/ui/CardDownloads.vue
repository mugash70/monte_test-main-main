<template>
  <div class="card-item" :class="{ 'vertical-layout': isMongolian }">
    <div class="card-image">
      <img :src="item.image" alt="Card Image" />
      <button class="download-button" :class="{ 'vertical-text': isMongolian }" @click.stop.prevent="downloadImage(item.image)">
        {{ t('media.picture.download') }}
      </button>
    </div>
    <div class="card-content" :class="{ 'vertical-text': isMongolian }">
      <p class="card-description">{{ t(truncatedDescription) }}</p>
    </div>
  </div>

</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n';
const { t , locale} = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
const props = defineProps<{
  item: {
    image: string
    descriptionKey: string
  }
}>()

const truncatedDescription = computed(() =>
  props.item.descriptionKey.length > 50
    ? props.item.descriptionKey.slice(0, 50) + '...'
    : props.item.descriptionKey
)

const downloadImage = (imageUrl: string) => {
  const link = document.createElement('a')
  link.href = imageUrl
  link.download = imageUrl.split('/').pop() || 'image.jpg'
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<style scoped>
.card-item {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
}
.card-item:hover {
  background-color: #f5f5f5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.card-link {
  text-decoration: none;
  color: inherit;
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
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
  background-color: inherit;
  transition: background-color 0.3s ease;
  position: relative;
}

.card-content::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #ffeb3b;
}
.card-item:hover .card-description {
  color:red;
  cursor: pointer;
}


.card-description {
  font-size: 1rem;
  line-height: 1.5;
  color:#595757;
  font-weight: normal;
  font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
}

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
.download-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #ffeb3b;
  color: #000;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  transition: all 0.3s ease;
  opacity: 1;
}

.download-button:hover {
  color: red;
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

