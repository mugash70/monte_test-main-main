<!-- layouts/default.vue -->
<template>
    <div>
      <TopHeader />
      <AppHeader />
      <NuxtPage />
      <AppFooter />
    </div>
  </template>
  
  <script setup>
  import TopHeader from './TopHeader.vue'
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  </script>
  