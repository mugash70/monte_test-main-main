<template>
  <header class="app-header">
    <transition name="slide-up">
      <div v-show="!isScrolled">
        <TopHeader />
      </div>
    </transition>
    <div class="main-header-wrapper" :class="{ sticky: isScrolled }">
      <ManHeader :class="{ sticky: isScrolled }" class="main-header" />
    </div>
  </header>x
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import TopHeader from './TopHeader.vue'
import ManHeader from './ManHeader.vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1010;
}


.main-header-wrapper {
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1001; /* Lower than top header */
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.main-header {
  background-color: #fff;
  width: 100%;
  height: 100px;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Smooth transition when header becomes sticky */
.main-header-wrapper.sticky {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(8px);
}

.main-header.sticky {
  background-color: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgba(240, 240, 240, 0.8);
}

/* Smooth slide-up transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: top;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}

.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
