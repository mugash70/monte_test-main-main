<template>
  <div class="page-container min-h-screen bg-gray-50">
    <div class="content-wrapper max-w-7xl mx-auto">
      
      <!-- Search & Controls -->
      <div class="bg-white rounded shadow p-3 mb-4">
        <div class="flex flex-wrap gap-2">
          <div class="relative flex-grow max-w-md">
            <div class="relative">
              <input 
                v-model="searchKey" 
                @input="page = 1; loadTranslations()"
                placeholder="Search translation keys..." 
                class="w-full px-3 py-2 pl-9 border border-gray-300 rounded text-sm"
              >
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div v-if="loading" class="absolute inset-y-0 right-8 flex items-center">
                <svg class="animate-spin h-4 w-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <button 
                v-if="searchKey" 
                @click="searchKey = ''; page = 1; loadTranslations()"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                type="button"
              >
              </button>
            </div>
          </div>
          
          <button 
            @click="showPreview = !showPreview"
            class="px-3 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
          >
            {{ showPreview ? 'Hide Preview' : 'Show Preview' }}
          </button>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Translations Editor -->
        <div class="flex-grow w-full lg:w-3/5">
          <div class="grid gap-8">
            <div v-for="key in filteredKeys" :key="key" 
                 class="bg-white rounded shadow overflow-hidden border border-gray-200 mb-3">
              
              <!-- Key Header -->
              <div class="bg-gray-50 px-3 py-2 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <h3 class="font-medium text-sm text-gray-800 flex items-center truncate max-w-[70%]">
                    <span class="truncate">{{ key }}</span>
                  </h3>
                  <div class="text-xs text-gray-500 flex-shrink-0">{{ filteredKeys.indexOf(key) + 1 }}/{{ filteredKeys.length }}</div>
                </div>
              </div>
              
              <!-- Context Preview -->
              <div v-if="keyUsageInfo[key]" class="bg-gray-50 border-b border-gray-200 p-2">
                <div class="flex justify-between items-center mb-1">
                  <div class="text-xs text-gray-500">Used in: {{ keyUsageInfo[key].page }}</div>
                  <button 
                    @click="toggleContextPreview(key)" 
                    class="text-xs text-blue-500 hover:underline"
                  >
                    {{ showContextPreviewFor === key ? 'Hide Context' : 'Show Context' }}
                  </button>
                </div>
                
                <!-- Live Context Preview -->
                <div v-if="showContextPreviewFor === key" class="mt-2 border border-gray-300 rounded overflow-hidden">
                  <div class="bg-gray-100 text-xs p-1 flex justify-between items-center">
                    <span>Page Preview</span>
                    <div class="flex gap-1">
                      <button 
                        @click="contextPreviewLocale = 'en'"
                        class="px-1.5 py-0.5 rounded text-xs"
                        :class="contextPreviewLocale === 'en' ? 'bg-blue-100' : 'bg-white border border-gray-200'"
                      >EN</button>
                      <button 
                        @click="contextPreviewLocale = 'mn'"
                        class="px-1.5 py-0.5 rounded text-xs"
                        :class="contextPreviewLocale === 'mn' ? 'bg-yellow-100' : 'bg-white border border-gray-200'"
                      >MN</button>
                      <button 
                        @click="contextPreviewLocale = 'ch'"
                        class="px-1.5 py-0.5 rounded text-xs"
                        :class="contextPreviewLocale === 'ch' ? 'bg-red-100' : 'bg-white border border-gray-200'"
                      >CH</button>
                    </div>
                  </div>
                  <div class="relative">
                    <iframe 
                      :src="`/iframe-preview/${keyUsageInfo[key].page}?locale=${contextPreviewLocale}&key=${key}&value=${encodeURIComponent(getTranslationValue(key, contextPreviewLocale))}`" 
                      class="w-full h-48 border-none"
                    ></iframe>
                    <div class="absolute inset-0 pointer-events-none border-2 border-blue-500 opacity-30"></div>
                  </div>
                </div>
              </div>
              
              <div class="p-4 space-y-3">
                <!-- Translation Stack -->
                <div>
                    <div class="flex justify-between items-center mb-2">
                      <div class="flex items-center">
                        <span class="px-2 py-1 bg-blue-500 text-white rounded text-xs font-medium mr-2">🇺🇸 EN</span>
                        <span class="text-gray-600 text-sm">English</span>
                      </div>
                      <span v-if="getTranslation(key, 'en')?.updatedAt" class="text-green-600 text-xs">✓ Updated</span>
                    </div>
                    <div class="flex gap-1">
                      <textarea 
                        v-model="getTranslation(key, 'en').value" 
                        class="w-full p-2 border border-gray-200 rounded h-16 focus:outline-none focus:border-blue-500 resize-vertical text-sm"
                        placeholder="Enter English translation..."
                      ></textarea>
                      <button 
                        @click="updateTranslation(getTranslation(key, 'en'))"
                        class="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 h-fit self-end"
                      >
                        Save
                      </button>
                  </div>
                    <div class="flex justify-between items-center mb-2">
                      <div class="flex items-center">
                        <span class="px-2 py-1 bg-yellow-500 text-white rounded text-xs font-medium mr-2">🇲🇳 MN</span>
                        <span class="text-gray-600 text-sm">Mongolian</span>
                      </div>
                      <span v-if="getTranslation(key, 'mn')?.updatedAt" class="text-green-600 text-xs">✓ Updated</span>
                    </div>
                    <div class="flex gap-1">
                      <textarea 
                        v-model="getTranslation(key, 'mn').value" 
                        class="w-full p-2 border border-gray-200 rounded h-16 focus:outline-none focus:border-yellow-500 resize-vertical text-sm"
                        placeholder="Enter Mongolian translation..."
                      ></textarea>
                      <button 
                        @click="updateTranslation(getTranslation(key, 'mn'))"
                        class="px-2 py-1 bg-yellow-500 text-white text-xs rounded hover:bg-yellow-600 h-fit self-end"
                      >
                        Save
                      </button>
                  </div>
                  
                  <!-- Chinese Translation -->
                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <div class="flex items-center">
                        <span class="px-2 py-1 bg-red-500 text-white rounded text-xs font-medium mr-2">🇨🇳 CH</span>
                        <span class="text-gray-600 text-sm">Chinese</span>
                      </div>
                      <span v-if="getTranslation(key, 'ch')?.updatedAt" class="text-green-600 text-xs">✓ Updated</span>
                    </div>
                    <div class="flex items-end gap-2">
                      <textarea 
                        v-model="getTranslation(key, 'ch').value" 
                        class="w-full p-2 border border-gray-200 rounded h-16 focus:outline-none focus:border-red-500 resize-vertical text-sm"
                        placeholder="Enter Chinese translation..."
                      ></textarea>
                      <button 
                        @click="updateTranslation(getTranslation(key, 'ch'))"
                        class="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 h-fit self-end"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="filteredKeys.length === 0" class="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div class="text-6xl mb-4 opacity-75">🔍</div>
            <h3 class="text-2xl font-bold text-gray-800 mb-2">No translations found</h3>
            <p class="text-gray-600 max-w-md mx-auto">Try adjusting your search terms or check if translations exist in the database.</p>
          </div>
          
          <!-- Pagination -->
          <div v-if="filteredKeys.length > 0" class="mt-6 flex justify-between items-center bg-white p-4 rounded-lg shadow">
            <div class="text-sm text-gray-600">
              Showing {{ ((page - 1) * pageSize) + 1 }}-{{ Math.min(page * pageSize, totalItems) }} of {{ totalItems }} translations
            </div>
            <div class="flex items-center space-x-2">
              <select v-model="pageSize" @change="page = 1; loadTranslations()" class="border border-gray-300 rounded px-2 py-1 text-sm bg-white">
                <option :value="10">10 per page</option>
                <option :value="25">25 per page</option>
                <option :value="50">50 per page</option>
                <option :value="100">100 per page</option>
              </select>
              
              <div class="flex space-x-1">
                <button 
                  @click="page = 1; loadTranslations()" 
                  :disabled="page === 1"
                  class="px-3 py-1 border rounded text-sm" 
                  :class="page === 1 ? 'bg-gray-100 text-gray-400' : 'bg-white hover:bg-blue-50'"
                  type="button"
                >
                  &laquo;
                </button>
                <button 
                  @click="page = Math.max(1, page - 1); loadTranslations()" 
                  :disabled="page === 1"
                  class="px-3 py-1 border rounded text-sm" 
                  :class="page === 1 ? 'bg-gray-100 text-gray-400' : 'bg-white hover:bg-blue-50'"
                  type="button"
                >
                  &lsaquo;
                </button>
                
                <div class="px-3 py-1 border rounded bg-blue-50 text-blue-600 text-sm font-medium">
                  {{ page }} / {{ totalPages || 1 }}
                </div>
                
                <button 
                  @click="page = Math.min(totalPages, page + 1); loadTranslations()" 
                  :disabled="page >= totalPages"
                  class="px-3 py-1 border rounded text-sm" 
                  :class="page >= totalPages ? 'bg-gray-100 text-gray-400' : 'bg-white hover:bg-blue-50'"
                  type="button"
                >
                  &rsaquo;
                </button>
                <button 
                  @click="page = totalPages; loadTranslations()" 
                  :disabled="page >= totalPages"
                  class="px-3 py-1 border rounded text-sm" 
                  :class="page >= totalPages ? 'bg-gray-100 text-gray-400' : 'bg-white hover:bg-blue-50'"
                  type="button"
                >
                  &raquo;
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Preview Panel -->
        <div v-if="showPreview" class="w-full lg:w-1/3">
          <div class="bg-white rounded shadow sticky top-4 overflow-hidden border border-gray-200">
            <!-- Preview Header -->
            <div class="bg-blue-500 p-2 text-white">
              <h2 class="text-sm font-medium">Preview</h2>
            </div>
            
            <!-- Language Selector -->
            <div class="p-2 border-b border-gray-200 bg-gray-50">
              <div class="flex gap-1 text-xs">
                <button 
                  @click="previewLocale = 'en'"
                  class="px-2 py-1 rounded border"
                  :class="previewLocale === 'en' ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'"
                >
                  EN
                </button>
                <button 
                  @click="previewLocale = 'mn'"
                  class="px-2 py-1 rounded border"
                  :class="previewLocale === 'mn' ? 'bg-yellow-100 border-yellow-300' : 'bg-white border-gray-200'"
                >
                  MN
                </button>
                <button 
                  @click="previewLocale = 'ch'"
                  class="px-2 py-1 rounded border"
                  :class="previewLocale === 'ch' ? 'bg-red-100 border-red-300' : 'bg-white border-gray-200'"
                >
                  CH
                </button>
              </div>
            </div>
            
            <!-- Preview Content -->
            <div class="p-2 max-h-[calc(100vh-10rem)] overflow-auto">
              <div class="space-y-2">
                <div v-for="key in filteredKeys" :key="key" class="border-b border-gray-100 pb-2 mb-2 last:border-b-0 last:mb-0 last:pb-0">
                  <div class="text-xs text-gray-500 mb-1 truncate">{{ key }}</div>
                  <div class="text-sm">{{ getTranslationValue(key, previewLocale) || '(No translation)' }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const searchKey = ref('')
const translations = ref([])
const loading = ref(false)
const showPreview = ref(false)
const previewLocale = ref('en')
const contextPreviewLocale = ref('en')
const showContextPreviewFor = ref(null)

// Sample usage info - in a real app, this would come from the API
const keyUsageInfo = ref({
  'responsibility.top.description': {
    page: 'responsibility-monte',
    element: '.top-description'
  },
  'company.about.mission': {
    page: 'company-profile',
    element: '.mission-statement'
  },
  'products.coal.description': {
    page: 'coal-industry',
    element: '.product-description'
  }
})

// Get query parameters
const route = useRoute()
const highlightKey = route.query.key

// Pagination and search state
const page = ref(1)
const pageSize = ref(10)
const totalPages = ref(1)
const totalItems = ref(0)

// Load translations with pagination and search
async function loadTranslations() {
  loading.value = true
  try {
    const { data, pagination } = await $fetch('/api/translations', {
      params: {
        page: page.value,
        pageSize: pageSize.value,
        search: searchKey.value
      }
    })
    translations.value = data
    totalPages.value = pagination.totalPages
    totalItems.value = pagination.total
  } catch (error) {
    console.error('Failed to load translations:', error)
  } finally {
    loading.value = false
  }
}

// Initial load
await loadTranslations()

// If a key is specified in the URL, set the search to that key
if (highlightKey) {
  searchKey.value = String(highlightKey)
}

// Toggle context preview for a specific key
function toggleContextPreview(key) {
  if (showContextPreviewFor.value === key) {
    showContextPreviewFor.value = null
  } else {
    showContextPreviewFor.value = key
  }
}

// Get unique keys
const uniqueKeys = computed(() => {
  const keys = new Set()
  translations.value.forEach(t => keys.add(t.key))
  return Array.from(keys)
})

// Filter keys based on search
const filteredKeys = computed(() => {
  if (!searchKey.value) return uniqueKeys.value
  return uniqueKeys.value.filter(key => 
    key.toLowerCase().includes(searchKey.value.toLowerCase())
  )
})

// Watch for search key changes from URL
watch(() => route.query.key, (newKey) => {
  if (newKey && newKey !== searchKey.value) {
    searchKey.value = String(newKey)
    page.value = 1
    loadTranslations()
  }
})

// Get translation for a specific key and locale
function getTranslation(key, locale) {
  return translations.value.find(t => t.key === key && t.locale === locale) || { value: '' }
}

// Get translation value for preview
function getTranslationValue(key, locale) {
  const translation = getTranslation(key, locale)
  return translation.value || ''
}

// Update translation
async function updateTranslation(translation) {
  if (!translation || !translation.id) return
  
  try {
    loading.value = true
    await $fetch('/api/translations', {
      method: 'PUT',
      body: {
        id: translation.id,
        value: translation.value
      }
    })
    translation.updatedAt = new Date()
    
    // Clear the update status after 3 seconds
    setTimeout(() => {
      translation.updatedAt = null
    }, 3000)
  } catch (error) {
    console.error('Failed to update translation:', error)
    alert('Failed to update translation')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Custom styles to improve UI */
.min-h-screen {
  min-height: 100vh;
  background-color: #f5f7fa;
}

.rounded {
  border-radius: 6px;
}

.shadow {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.bg-blue-500 {
  background-color: #3b82f6;
}

.bg-yellow-500 {
  background-color: #f59e0b;
}

.bg-red-500 {
  background-color: #ef4444;
}

.text-blue-500 {
  color: #3b82f6;
}

.hover\:bg-blue-600:hover {
  background-color: #2563eb;
}

.hover\:bg-yellow-600:hover {
  background-color: #d97706;
}

.hover\:bg-red-600:hover {
  background-color: #dc2626;
}

.border {
  border: 1px solid #e5e7eb;
}

.p-4 {
  padding: 1rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.gap-2 {
  gap: 0.5rem;
}

/* Improve form elements */
input, select, textarea {
  transition: all 0.2s;
  border-color: #e5e7eb;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

/* Improve buttons */
button {
  transition: all 0.2s;
}

/* Improve pagination */
.pagination-button {
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>