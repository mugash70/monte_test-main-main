<!-- layouts/default.vue -->
<template>
    <div class="app-layout">
      <TopHeader />
      <AppHeader />
      <main class="main-content">
        <NuxtPage />
      </main>
      <AppFooter />
    </div>
  </template>

  <script setup>
  import TopHeader from './TopHeader.vue'
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  </script>

  <style scoped>
  .app-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .main-content {
    flex: 1;
    /* Add top padding to account for fixed header */
    padding-top: 140px; /* TopHeader (~40px) + MainHeader (~100px) */
    min-height: calc(100vh - 140px);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .main-content {
      padding-top: 120px; /* Adjust for mobile header height */
      min-height: calc(100vh - 120px);
    }
  }

  @media (max-width: 480px) {
    .main-content {
      padding-top: 100px; /* Further adjust for smaller screens */
      min-height: calc(100vh - 100px);
    }
  }
  </style>
  