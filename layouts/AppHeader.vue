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

let ticking = false
let lastScrollY = 0

const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY

      // Only update if scroll position has changed significantly
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        isScrolled.value = currentScrollY > 50
        lastScrollY = currentScrollY
      }

      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  // Use passive listener for better performance
  window.addEventListener('scroll', handleScroll, { passive: true })
  // Set initial state
  isScrolled.value = window.scrollY > 50
  lastScrollY = window.scrollY
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
  transform: translateZ(0); /* Force hardware acceleration */
  backface-visibility: hidden; /* Prevent flickering */
}


.main-header-wrapper {
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1001; /* Lower than top header */
  transition: box-shadow 0.2s ease-out, background-color 0.2s ease-out;
  will-change: box-shadow, background-color;
}

.main-header {
  background-color: #fff;
  width: 100%;
  height: 100px;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s ease-out, border-bottom-color 0.2s ease-out;
  will-change: background-color, border-bottom-color;
}

/* Smooth transition when header becomes sticky */
.main-header-wrapper.sticky {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  background-color: rgba(255, 255, 255, 0.98);
}

.main-header.sticky {
  background-color: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid rgba(240, 240, 240, 0.8);
}

/* Smooth slide-up transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
  transform-origin: top;
  will-change: transform, opacity;
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
