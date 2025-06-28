<template>
  <div class="iframe-preview">
    <!-- Highlight overlay for the specific translation key -->
    <div 
      v-if="highlightKey" 
      class="highlight-overlay"
      :style="highlightStyle"
    ></div>
    
    <!-- Render the actual page content -->
    <div class="page-content" :class="{ 'highlight-mode': highlightKey }">
      <!-- This would dynamically render the page based on the slug -->
      <component 
        :is="pageComponent" 
        v-if="pageComponent"
        :preview-mode="true"
        :highlight-key="highlightKey"
        :preview-value="previewValue"
      />
      <div v-else class="preview-placeholder">
        <h2>Page Preview</h2>
        <p>Preview for: {{ pagePath }}</p>
        <p>Locale: {{ locale }}</p>
        <p>Key: {{ highlightKey }}</p>
        <div v-if="previewValue" class="preview-content">
          <strong>Preview Text:</strong>
          <div class="preview-text">{{ previewValue }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { $i18n } = useNuxtApp();

// Get parameters
const pagePath = route.params.slug ? (Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug) : 'index';
const locale = route.query.locale || 'en';
const highlightKey = route.query.key;
const previewValue = route.query.value;

// Set the locale for preview
if ($i18n && $i18n.locale) {
  $i18n.locale.value = locale;
}

// Dynamic component loading based on page path
const pageComponent = ref(null);

// Map of page paths to components (simplified)
const pageComponentMap = {
  'index': 'pages/index.vue',
  'company-profile': 'pages/company-profile/index.vue',
  'responsibility-monte': 'pages/responsibility-monte/index.vue',
  'coal-industry': 'pages/coal-industry/index.vue',
  'news': 'pages/news/index.vue'
};

// Load the appropriate component
onMounted(async () => {
  try {
    if (pageComponentMap[pagePath]) {
      // In a real implementation, you'd dynamically import the component
      // For now, we'll show a placeholder
      console.log(`Loading component for: ${pagePath}`);
    }
  } catch (error) {
    console.error('Error loading page component:', error);
  }
});

// Highlight style for the translation key
const highlightStyle = computed(() => {
  if (!highlightKey) return {};
  
  // This would be calculated based on the actual element position
  // For demo purposes, we'll use a simple overlay
  return {
    position: 'absolute',
    top: '20%',
    left: '10%',
    right: '10%',
    height: '60px',
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    border: '2px solid #3b82f6',
    borderRadius: '4px',
    zIndex: 1000,
    pointerEvents: 'none'
  };
});
</script>

<style scoped>
.iframe-preview {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.highlight-overlay {
  position: absolute;
  z-index: 1000;
  pointer-events: none;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}

.page-content {
  width: 100%;
  height: 100%;
  transform-origin: top left;
  transform: scale(0.8);
}

.highlight-mode {
  position: relative;
}

.preview-placeholder {
  padding: 20px;
  font-family: system-ui, -apple-system, sans-serif;
  background: #f9fafb;
  min-height: 200px;
}

.preview-content {
  margin-top: 15px;
  padding: 10px;
  background: white;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
}

.preview-text {
  margin-top: 8px;
  padding: 8px;
  background: #f3f4f6;
  border-radius: 4px;
  font-style: italic;
  color: #374151;
  line-height: 1.5;
}
</style>
