<template>
  <router-link :to="`/offline-tender-announcement/${item.slug}`" target="_blank" rel="noopener noreferrer" class="card-link">
  <div class="page-section">
  <div class="card-item">
      <p class="card-date">{{ item.date }}</p>
      <p class="card-description" :class="{ 'vertical-text': isMongolian }">{{ t(truncatedDescription) }}</p>
      <div class="chevy">
      <button class="chevron">
        <FontAwesomeIcon :icon="['fas', 'chevron-right']" />
      </button>
    </div>
  </div>

</div>
</router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
library.add(fas)
const props = defineProps<{
  item: {
    date: string
    descriptionKey: string
    slug: string
  }
}>()

const truncatedDescription = computed(() =>
  props.item.descriptionKey.length > 100
    ? props.item.descriptionKey.slice(0, 100) + '...'
    : props.item.descriptionKey
)
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
.page-section {
margin: auto;
  
}
.card-item {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #e8dcb1;
  padding: 30px 20px;
  margin: 0 6px;

}
@media only screen and (max-width: 1366px) {
  .card-item {
      margin: 0 10px;
  }
}
.card-item:hover {
  background-color: red;
}

.card-item:hover .card-description {
  color:rgb(255, 255, 255);
  cursor: pointer;
}

.card-item:hover .chevron {
  color:rgb(255, 255, 255);
  cursor: pointer;
  border: 1px solid #ffffff;
}

.card-item:hover .card-date {
  color:rgb(255, 255, 255);

}
.card-date {
  font-size: 16px;
  color: #a3a3a3;
  line-height: 1.5;
  font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
  font-weight: 600;
  margin-bottom: 10px;
}

.card-description {
  font-size: 1rem;
  line-height: 1.5;
  color:#595757;
  font-weight: normal;
  font-family: "Microsoft Yahei", arial, "\5b8b\4f53";
  cursor: pointer;
}
.card-link {
  text-decoration: none;
  color: inherit;
}
/* for chevron   */
.chevy {
  padding-top: 30px;
  margin: 0;
  display: block;
  unicode-bidi: isolate;
}
.chevron {
  border: 1px solid #b1b1b1;
  border-radius: 50%;
  background: transparent;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 32px;
    height: 32px;
    line-height: 32px; 
}
.chevron:hover {
  border-color: red;
  color: red;
}

.chevron .fa-chevron-right {
  transition: transform 0.3s ease, color 0.3s ease;
}


</style>

