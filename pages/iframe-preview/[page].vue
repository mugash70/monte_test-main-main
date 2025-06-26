<template>
  <div v-html="previewHtml"></div>
</template>

<script setup>
const route = useRoute()
const page = route.params.page
const { locale, key, value } = route.query

// Fetch the preview HTML from the API
const { data: previewHtml } = await useFetch(`/api/iframe-preview?page=${page}&locale=${locale}&key=${key}&value=${encodeURIComponent(value)}`)
</script>