<template>
  <div>
    <HeroBanner :title="t('products.heroTitle')" image="/hero/products.jpg" />
    <section class="product-content" >
      <div class="tabs" :class="{ 'vertical-tab': isMongolian }">
        <div
          :class="['tab', { active: activeTab === 'Aluminum products' }]"
          @click="activeTab = 'Aluminum products'"
        >
          {{ t('products.tab1') }}
        </div>
        <div
          :class="['tab', { active: activeTab === 'Coal products' }]"
          @click="activeTab = 'Coal products'"
        >
          {{ t('products.tab2') }}
        </div>
      </div>
    </section>

    <div class="tab-content">
      <div v-if="activeTab === 'Aluminum products' ">
        <!-- Aluminum tab section -->
        <div class="product-grid">
          <!-- Row 1 -->
          <div class="grid-item image-item">
            <img src="/media/aluminium1.jpg" :alt="t('products.aluminum.alt1')" />
          </div>
          <div class="grid-item content-item">
            <div class="product-info">
              <img src="/media/aluminium1-2.jpg" :alt="t('products.aluminum.alt1_2')" />
              <div class="contact-section">
                <ul class="contact-list">
                  <li class="contact-item">
                    <strong :class="{ 'vertical-text': isMongolian }">{{ t('products.contact.email') }}</strong>
                    <a href="mailto:MTLYGS@mengtaigroup.com">MTLYGS@mengtaigroup.com</a>
                  </li>
                  <li class="contact-item" :class="{ 'vertical-text': isMongolian }">
                    <strong>{{ t('products.contact.phone') }}</strong>
                    <a href="tel:0477-3898222">{{ t('products.contact.manager1') }}</a>
                  </li>
                  <li class="contact-item" :class="{ 'vertical-text': isMongolian }">
                    <strong>{{ t('products.contact.address') }}</strong>
                    {{ t('products.contact.addrValue') }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Row 2 -->
          <div class="grid-item image-item">
            <img src="/media/alumnium2.jpg" :alt="t('products.aluminum.alt2')" />
          </div>
          <div class="grid-item content-item">
            <div class="product-info">
              <img src="/media/aluminium2-2.jpeg" :alt="t('products.aluminum.alt2_2')" />
              <div class="contact-section">
                <ul class="contact-list">
                  <li class="contact-item">
                    <strong :class="{ 'vertical-text': isMongolian }">{{ t('products.contact.email') }}</strong>
                    <a href="mailto:MTLYGS@mengtaigroup.com">MTLYGS@mengtaigroup.com</a>
                  </li>
                  <li class="contact-item" :class="{ 'vertical-text': isMongolian }">
                    <strong>{{ t('products.contact.phone') }}</strong>
                    <a href="tel:0477-3898222">{{ t('products.contact.manager1') }}</a>
                  </li>
                  <li class="contact-item" :class="{ 'vertical-text': isMongolian }">
                    <strong>{{ t('products.contact.address') }}</strong>
                    {{ t('products.contact.addrValue') }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Row 3 -->
          <div class="grid-item image-item">
            <img src="/media/aluminium3.jpg" :alt="t('products.aluminum.alt3')" />
          </div>
          <div class="grid-item content-item">
            <div class="product-info">
              <img src="/media/aluminium3-2.jpeg" :alt="t('products.aluminum.alt3_2')" />
              <div class="contact-section">
                <ul class="contact-list">
                  <li class="contact-item">
                    <strong :class="{ 'vertical-text': isMongolian }">{{ t('products.contact.email') }}</strong>
                    <a href="mailto:MTLYGS@mengtaigroup.com">MTLYGS@mengtaigroup.com</a>
                  </li>
                  <li class="contact-item" :class="{ 'vertical-text': isMongolian }">
                    <strong>{{ t('products.contact.phone') }}</strong>
                    <a href="tel:0477-3898222">{{ t('products.contact.manager1') }}</a>
                  </li>
                  <li class="contact-item" :class="{ 'vertical-text': isMongolian }">
                    <strong>{{ t('products.contact.address') }}</strong>
                    {{ t('products.contact.addrValue') }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <!-- Coal tab -->
        <div class="product-grid">
          <!-- Row 1 -->
          <div class="grid-item image-item">
            <img src="/media/coal1.jpg" :alt="t('products.coal.alt1')" />
          </div>
          <div class="grid-item content-item">
            <div class="product-info">
              <img src="/media/coal1-2.jpg" :alt="t('products.coal.alt1_2')" />
              <div class="contact-section">
                <ul class="contact-list">
                  <li class="contact-item">
                    <strong :class="{ 'vertical-text': isMongolian }">{{ t('products.contact.email') }}</strong>
                    <a href="mailto:mtgjmtmy@mengtaigroup.com">mtgjmtmy@mengtaigroup.com</a>
                  </li>
                  <li class="contact-item">
                    <strong :class="{ 'vertical-text': isMongolian }">{{ t('products.contact.phone') }}</strong>
                    <a href="tel:15847700664">{{ t('products.contact.manager2') }}</a>
                  </li>
                  <li class="contact-item" :class="{ 'vertical-text': isMongolian }">
                    <strong>{{ t('products.contact.address') }}</strong>
                    {{ t('products.contact.addrValue') }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 
<script setup lang="ts"> 
import HeroBanner from '@/components/ui/HeroBanner.vue' 
import { ref } from 'vue' 
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
const { t,locale } = useI18n();
const isMongolian = computed(() => locale.value === 'mn');
const activeTab = ref<'Aluminum products' | 'Coal products'>('Aluminum products') 
</script> 
 
<style scoped> 
.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;

  max-height: 80px;
    overflow: hidden;
    word-break: break-word;
}
.vertical-tab {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 200px;
  padding: 1rem 0.5rem;
  max-height: 300px;
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

.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, auto);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.grid-item {
  border-radius: 0;
  overflow: hidden;
  background: white;
}

.image-item {
  height: 300px;
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-item:hover img {
  transform: scale(1.05);
}

.content-item {
  display: flex;
  flex-direction: column;
  min-height: 300px;
}

.product-info {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-info img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.contact-section {
  padding: 1.5rem;
  flex-grow: 1;
  background: #f8f9fa;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}


.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-item {
  margin-bottom: 0.8rem;
  color: #555;
  font-size: 0.75rem;
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
@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .tab {
    font-size: 1.8rem;
  }
  
  .tabs {
    gap: 1rem;
  }
}
</style>