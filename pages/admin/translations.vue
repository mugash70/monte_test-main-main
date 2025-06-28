<template>
  <!-- Modern Full-Width Admin Interface -->
  <div class="cms-admin-container">
    <!-- Header -->
    <header class="cms-header">
      <div class="cms-header-inner">
        <div class="cms-title-group">
          <h1 class="cms-title">
            <span class="cms-icon">🌐</span>
            Content Management Studio
          </h1>
          <p class="cms-description">
            Manage translations, images, and videos with live preview and advanced editing tools
          </p>
        </div>

        <!-- Quick Stats -->
        <div class="cms-stats">
          <div class="cms-stat-item">
            <span class="cms-stat-number">{{ totalItems || 0 }}</span>
            <span class="cms-stat-label">Translations</span>
          </div>
          <div class="cms-stat-item">
            <span class="cms-stat-number">{{ images.length || 0 }}</span>
            <span class="cms-stat-label">Images</span>
          </div>
          <div class="cms-stat-item">
            <span class="cms-stat-number">{{ videos.length || 0 }}</span>
            <span class="cms-stat-label">Videos</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Navigation Tabs -->
    <nav class="cms-nav" role="tablist">
      <button
        @click="activeTab = 'translations'"
        :class="['cms-nav-tab', { 'cms-nav-tab-active': activeTab === 'translations' }]"
        role="tab"
        :aria-selected="activeTab === 'translations'"
      >
        <svg class="cms-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
        </svg>
        <span>Translations</span>
        <span class="cms-nav-badge">{{ totalItems || 0 }}</span>
      </button>

      <button
        @click="activeTab = 'images'"
        :class="['cms-nav-tab', { 'cms-nav-tab-active': activeTab === 'images' }]"
        role="tab"
        :aria-selected="activeTab === 'images'"
      >
        <svg class="cms-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        <span>Images</span>
        <span class="cms-nav-badge">{{ images.length || 0 }}</span>
      </button>

      <button
        @click="activeTab = 'videos'"
        :class="['cms-nav-tab', { 'cms-nav-tab-active': activeTab === 'videos' }]"
        role="tab"
        :aria-selected="activeTab === 'videos'"
      >
        <svg class="cms-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
        <span>Videos</span>
        <span class="cms-nav-badge">{{ videos.length || 0 }}</span>
      </button>
    </nav>

    <!-- Main Content -->
    <main class="cms-main">
      <!-- Translations Tab -->
      <div v-if="activeTab === 'translations'" class="cms-content-section">
        <!-- Controls Bar -->
        <div class="cms-controls">
          <div class="cms-search-group">
            <div class="cms-search-wrapper">
              <input
                v-model="searchQuery"
                @input="performSearch"
                placeholder="Search translation keys and values..."
                class="cms-search-input"
              >
              <svg class="cms-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <div v-if="loading" class="cms-loading-icon">
                <svg class="cms-spinner" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <button
                v-if="searchQuery"
                @click="clearSearch"
                class="cms-clear-btn"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Search Type Toggle -->
            <div class="cms-search-filters">
              <button
                @click="searchType = 'all'"
                :class="['cms-filter-btn', { 'cms-filter-active': searchType === 'all' }]"
              >
                All
              </button>
              <button
                @click="searchType = 'keys'"
                :class="['cms-filter-btn', { 'cms-filter-active': searchType === 'keys' }]"
              >
                Keys Only
              </button>
              <button
                @click="searchType = 'values'"
                :class="['cms-filter-btn', { 'cms-filter-active': searchType === 'values' }]"
              >
                Values Only
              </button>
            </div>
          </div>

          <div class="cms-action-group">
            <!-- Selection Info -->
            <div v-if="selectedKey" class="cms-selection-info">
              <span class="cms-selection-count">Selected: {{ selectedKey }}</span>
              <button @click="clearSelection" class="cms-btn-link">Clear</button>
            </div>

            <button
              @click="refreshTranslations"
              class="cms-btn cms-btn-secondary"
            >
              <svg class="cms-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              <span>Refresh</span>
            </button>
          </div>
        </div>

            <!-- Main Content Area -->
            <div class="flex flex-col xl:flex-row gap-8">
              <!-- Translations Editor -->
              <div class="flex-grow w-full xl:w-2/3">
                <div class="space-y-6">
            <!-- Search Results View -->
            <div v-if="searchQuery && searchQuery.trim()" class="space-y-4">
              <div v-for="result in searchResults" :key="`${result.key}-${result.locale}`"
                   class="cms-search-result-card">
                <div class="cms-search-result-header" @click="selectFromSearchResult(result)">
                  <div class="cms-search-result-info">
                    <div class="cms-search-key">{{ result.key }}</div>
                    <div class="cms-search-locale">
                      <span class="cms-flag">{{ getLocaleFlag(result.locale) }}</span>
                      <span class="cms-locale-name">{{ getLocaleName(result.locale) }}</span>
                    </div>
                  </div>
                  <div class="cms-search-value">{{ result.value }}</div>
                </div>
              </div>
            </div>

            <!-- Regular Keys View -->
            <div v-else v-for="key in filteredKeys" :key="key"
                 class="cms-translation-card">

              <!-- Compact Key Header -->
              <div class="cms-key-header" @click="selectSingleRow(key)" :class="{ 'cms-key-selected': selectedKey === key, 'cms-key-disabled': selectedKey && selectedKey !== key }">
                <div class="cms-key-info">
                  <input
                    type="radio"
                    :checked="selectedKey === key"
                    @click.stop="selectSingleRow(key)"
                    class="cms-row-radio"
                    name="translation-key"
                  >
                  <h3 class="cms-key-title">{{ key }}</h3>
                  <span class="cms-key-counter">
                    {{ filteredKeys.indexOf(key) + 1 }}/{{ filteredKeys.length }}
                  </span>
                </div>
              </div>
              <!-- Compact Translation Editor -->
              <div class="cms-translations-editor">
                <!-- English Translation -->
                <div class="cms-translation-row">
                  <div class="cms-locale-label">
                    <span class="cms-flag">🇺🇸</span>
                    <span class="cms-locale-name">EN</span>
                  </div>
                  <h5>{{ getTranslation(key, 'en').value || 'Enter english translation...' }}</h5>
                </div>

                <!-- Mongolian Translation -->
                <div class="cms-translation-row">
                  <div class="cms-locale-label">
                    <span class="cms-flag">🇲🇳</span>
                    <span class="cms-locale-name">MN</span>
                  </div>
                  <h5>{{ getTranslation(key, 'mn').value || 'Enter Mongolian translation...' }}</h5>
                </div>

                <!-- Chinese Translation -->
                <div class="cms-translation-row">
                  <div class="cms-locale-label">
                    <span class="cms-flag">🇨🇳</span>
                    <span class="cms-locale-name">CH</span>
                  </div>
                  <h5>{{ getTranslation(key, 'ch').value || 'Enter Chinese translation...' }}</h5>
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
          
          <!-- Modern Pagination -->
          <div v-if="filteredKeys.length > 0" class="cms-pagination-container">
            <div class="cms-pagination">
              <!-- Results Info -->
              <div class="cms-pagination-info">
                <span class="cms-results-text">
                  Showing <strong>{{ ((page - 1) * pageSize) + 1 }}-{{ Math.min(page * pageSize, totalItems) }}</strong>
                  of <strong>{{ totalItems }}</strong> translations
                </span>

                <!-- Page Size Selector -->
                <div class="cms-page-size">
                  <label class="cms-page-size-label">Per page:</label>
                  <select
                    v-model="pageSize"
                    @change="page = 1; loadTranslations()"
                    class="cms-page-size-select"
                  >
                    <option :value="10">10</option>
                    <option :value="25">25</option>
                    <option :value="50">50</option>
                    <option :value="100">100</option>
                  </select>
                </div>
              </div>

              <!-- Modern Pagination Controls -->
              <div class="cms-pagination-controls">
                <!-- First Page -->
                <button
                  @click="page = 1; loadTranslations()"
                  :disabled="page === 1"
                  class="cms-page-btn"
                  :class="{ 'cms-page-btn-disabled': page === 1 }"
                  title="First page"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
                  </svg>
                </button>

                <!-- Previous Page -->
                <button
                  @click="page = Math.max(1, page - 1); loadTranslations()"
                  :disabled="page === 1"
                  class="cms-page-btn"
                  :class="{ 'cms-page-btn-disabled': page === 1 }"
                  title="Previous page"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>

                <!-- Page Numbers -->
                <div class="cms-page-numbers">
                  <span class="cms-current-page">{{ page }}</span>
                  <span class="cms-page-separator">of</span>
                  <span class="cms-total-pages">{{ totalPages || 1 }}</span>
                </div>

                <!-- Next Page -->
                <button
                  @click="page = Math.min(totalPages, page + 1); loadTranslations()"
                  :disabled="page >= totalPages"
                  class="cms-page-btn"
                  :class="{ 'cms-page-btn-disabled': page >= totalPages }"
                  title="Next page"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>

                <!-- Last Page -->
                <button
                  @click="page = totalPages; loadTranslations()"
                  :disabled="page >= totalPages"
                  class="cms-page-btn"
                  :class="{ 'cms-page-btn-disabled': page >= totalPages }"
                  title="Last page"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          </div>

          <!-- Image Preview Modal -->
          <div v-if="showImagePreview" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" @click="closeImagePreview">
            <div class="relative max-w-7xl max-h-full bg-white rounded-lg overflow-hidden shadow-2xl" @click.stop>
              <!-- Header -->
              <div class="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
                <h3 class="text-lg font-semibold">{{ previewingImage?.name }}</h3>
                <button @click="closeImagePreview" class="text-white hover:text-gray-300 text-xl font-bold">
                  ×
                </button>
              </div>

              <!-- Image Container -->
              <div class="bg-gray-100 flex items-center justify-center" style="min-height: 400px; max-height: 80vh;">
                <img
                  v-if="previewingImage"
                  :src="previewingImage.path"
                  :alt="previewingImage.name"
                  class="max-w-full max-h-full object-contain"
                  style="max-height: 80vh;"
                >
              </div>

              <!-- Footer -->
              <div class="bg-white px-4 py-3 border-t">
                <div class="flex justify-between items-center text-sm text-gray-600">
                  <div class="flex gap-4">
                    <span class="font-medium">{{ previewingImage?.dimensions || 'Loading...' }}</span>
                    <span>{{ formatFileSize(previewingImage?.size || 0) }}</span>
                    <span>{{ getImageFormat(previewingImage?.name || '') }}</span>
                  </div>
                  <button
                    @click="copyToClipboard(previewingImage?.path || '')"
                    class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    Copy Path
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Image Info Modal -->
          <div v-if="showImageInfo" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" @click="closeImageInfo">
            <div class="bg-white rounded-lg shadow-xl max-w-md w-full" @click.stop>
              <!-- Header -->
              <div class="bg-blue-600 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
                <h3 class="text-lg font-semibold">Image Information</h3>
                <button @click="closeImageInfo" class="text-white hover:text-gray-300 text-xl font-bold">
                  ×
                </button>
              </div>

              <!-- Content -->
              <div class="p-4">
                <div v-if="selectedImageInfo" class="space-y-4">
                  <!-- Image Preview -->
                  <div class="text-center">
                    <img
                      :src="selectedImageInfo.path"
                      :alt="selectedImageInfo.name"
                      class="w-32 h-32 object-cover rounded-lg border mx-auto"
                    >
                  </div>

                  <!-- Image Name -->
                  <div class="text-center">
                    <h4 class="text-lg font-bold text-gray-900">{{ selectedImageInfo.name }}</h4>
                  </div>

                  <!-- Dimensions -->
                  <div class="bg-blue-50 p-4 rounded-lg text-center">
                    <div class="text-sm font-medium text-blue-700 mb-1">Dimensions</div>
                    <div class="text-2xl font-bold text-blue-600">
                      {{ selectedImageInfo.dimensions || 'Loading...' }}
                    </div>
                  </div>

                  <!-- Other Info -->
                  <div class="grid grid-cols-2 gap-3">
                    <div class="bg-gray-50 p-3 rounded-lg text-center">
                      <div class="text-xs font-medium text-gray-700 mb-1">File Size</div>
                      <div class="text-sm font-semibold text-gray-900">
                        {{ formatFileSize(selectedImageInfo.size) }}
                      </div>
                    </div>
                    <div class="bg-gray-50 p-3 rounded-lg text-center">
                      <div class="text-xs font-medium text-gray-700 mb-1">Format</div>
                      <div class="text-sm font-semibold text-gray-900">
                        {{ getImageFormat(selectedImageInfo.name) }}
                      </div>
                    </div>
                  </div>

                  <!-- Path -->
                  <div class="bg-gray-50 p-3 rounded-lg">
                    <div class="text-xs font-medium text-gray-700 mb-2">Path</div>
                    <div class="bg-white p-2 rounded border font-mono text-xs text-gray-800 break-all">
                      {{ selectedImageInfo.path }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Footer -->
              <div class="px-4 py-3 bg-gray-50 rounded-b-lg flex justify-end">
                <button
                  @click="copyToClipboard(selectedImageInfo?.path || '')"
                  class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Copy Path
                </button>
              </div>
            </div>
          </div>

          <!-- Video Preview Modal -->
          <div v-if="showVideoPreview" class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" @click="closeVideoPreview">
            <div class="relative max-w-7xl max-h-full bg-white rounded-lg overflow-hidden shadow-2xl" @click.stop>
              <!-- Header -->
              <div class="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
                <h3 class="text-lg font-semibold">{{ previewingVideo?.name }}</h3>
                <button @click="closeVideoPreview" class="text-white hover:text-gray-300 text-xl font-bold">
                  ×
                </button>
              </div>

              <!-- Video Container -->
              <div class="bg-gray-100 flex items-center justify-center" style="min-height: 400px; max-height: 80vh;">
                <video
                  v-if="previewingVideo"
                  :src="previewingVideo.path"
                  class="max-w-full max-h-full"
                  style="max-height: 80vh;"
                  controls
                  autoplay
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <!-- Footer -->
              <div class="bg-white px-4 py-3 border-t">
                <div class="flex justify-between items-center text-sm text-gray-600">
                  <div class="flex gap-4">
                    <span class="font-medium">{{ previewingVideo?.dimensions || 'Loading...' }}</span>
                    <span>{{ formatFileSize(previewingVideo?.size || 0) }}</span>
                    <span>{{ getVideoFormat(previewingVideo?.name || '') }}</span>
                    <span v-if="previewingVideo?.duration" class="text-green-600 font-medium">{{ previewingVideo.duration }}</span>
                  </div>
                  <button
                    @click="copyToClipboard(previewingVideo?.path || '')"
                    class="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
                  >
                    Copy Path
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Video Info Modal -->
          <div v-if="showVideoInfo" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" @click="closeVideoInfo">
            <div class="bg-white rounded-lg shadow-xl max-w-md w-full" @click.stop>
              <!-- Header -->
              <div class="bg-purple-600 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
                <h3 class="text-lg font-semibold">Video Information</h3>
                <button @click="closeVideoInfo" class="text-white hover:text-gray-300 text-xl font-bold">
                  ×
                </button>
              </div>

              <!-- Content -->
              <div class="p-4">
                <div v-if="selectedVideoInfo" class="space-y-4">
                  <!-- Video Preview -->
                  <div class="text-center">
                    <video
                      :src="selectedVideoInfo.path"
                      class="w-32 h-20 object-cover rounded-lg border mx-auto"
                      preload="metadata"
                    >
                    </video>
                  </div>

                  <!-- Video Name -->
                  <div class="text-center">
                    <h4 class="text-lg font-bold text-gray-900">{{ selectedVideoInfo.name }}</h4>
                  </div>

                  <!-- Dimensions -->
                  <div class="bg-purple-50 p-4 rounded-lg text-center">
                    <div class="text-sm font-medium text-purple-700 mb-1">Dimensions</div>
                    <div class="text-2xl font-bold text-purple-600">
                      {{ selectedVideoInfo.dimensions || 'Loading...' }}
                    </div>
                  </div>

                  <!-- Other Info -->
                  <div class="grid grid-cols-2 gap-3">
                    <div class="bg-gray-50 p-3 rounded-lg text-center">
                      <div class="text-xs font-medium text-gray-700 mb-1">File Size</div>
                      <div class="text-sm font-semibold text-gray-900">
                        {{ formatFileSize(selectedVideoInfo.size) }}
                      </div>
                    </div>
                    <div class="bg-gray-50 p-3 rounded-lg text-center">
                      <div class="text-xs font-medium text-gray-700 mb-1">Format</div>
                      <div class="text-sm font-semibold text-gray-900">
                        {{ getVideoFormat(selectedVideoInfo.name) }}
                      </div>
                    </div>
                  </div>

                  <!-- Duration -->
                  <div v-if="selectedVideoInfo.duration" class="bg-green-50 p-3 rounded-lg text-center">
                    <div class="text-xs font-medium text-green-700 mb-1">Duration</div>
                    <div class="text-lg font-bold text-green-600">
                      {{ selectedVideoInfo.duration }}
                    </div>
                  </div>

                  <!-- Path -->
                  <div class="bg-gray-50 p-3 rounded-lg">
                    <div class="text-xs font-medium text-gray-700 mb-2">Path</div>
                    <div class="bg-white p-2 rounded border font-mono text-xs text-gray-800 break-all">
                      {{ selectedVideoInfo.path }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Footer -->
              <div class="px-4 py-3 bg-gray-50 rounded-b-lg flex justify-end">
                <button
                  @click="copyToClipboard(selectedVideoInfo?.path || '')"
                  class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
                >
                  Copy Path
                </button>
              </div>
            </div>
          </div>

          <!-- Translation Edit Modal -->
          <div v-if="showEditModal" class="cms-modal-overlay" @click="closeEditModal">
            <div class="cms-modal" @click.stop>
              <div class="cms-modal-header">
                <h3 class="cms-modal-title">Edit Translation: {{ selectedKey }}</h3>
                <button @click="closeEditModal" class="cms-modal-close">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div class="cms-modal-content">
                <!-- English Translation -->
                <div class="cms-modal-row">
                  <div class="cms-modal-locale">
                    <span class="cms-flag">🇺🇸</span>
                    <span class="cms-locale-name">English</span>
                    <span v-if="editingTranslations.en?.id" class="cms-translation-id">ID: {{ editingTranslations.en.id }}</span>
                    <span v-else class="cms-translation-new">NEW</span>
                  </div>
                  <div class="cms-modal-input">
                    <textarea
                      v-model="editingTranslations.en.value"
                      class="cms-modal-textarea"
                      placeholder="Enter English translation..."
                      rows="4"
                    ></textarea>
                  </div>
                </div>

                <!-- Mongolian Translation -->
                <div class="cms-modal-row">
                  <div class="cms-modal-locale">
                    <span class="cms-flag">🇲🇳</span>
                    <span class="cms-locale-name">Mongolian</span>
                    <span v-if="editingTranslations.mn?.id" class="cms-translation-id">ID: {{ editingTranslations.mn.id }}</span>
                    <span v-else class="cms-translation-new">NEW</span>
                  </div>
                  <div class="cms-modal-input">
                    <textarea
                      v-model="editingTranslations.mn.value"
                      class="cms-modal-textarea"
                      placeholder="Enter Mongolian translation..."
                      rows="4"
                    ></textarea>
                  </div>
                </div>

                <!-- Chinese Translation -->
                <div class="cms-modal-row">
                  <div class="cms-modal-locale">
                    <span class="cms-flag">🇨🇳</span>
                    <span class="cms-locale-name">Chinese</span>
                    <span v-if="editingTranslations.ch?.id" class="cms-translation-id">ID: {{ editingTranslations.ch.id }}</span>
                    <span v-else class="cms-translation-new">NEW</span>
                  </div>
                  <div class="cms-modal-input">
                    <textarea
                      v-model="editingTranslations.ch.value"
                      class="cms-modal-textarea"
                      placeholder="Enter Chinese translation..."
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div class="cms-modal-footer">
                <button @click="closeEditModal" class="cms-btn cms-btn-secondary">
                  Cancel
                </button>
                <button @click="saveAllTranslations" class="cms-btn cms-btn-primary" :disabled="isSaving">
                  {{ isSaving ? 'Saving...' : 'Save All' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Images Tab -->
        <div v-if="activeTab === 'images'" class="cms-content-section">
            <!-- Images Tab -->
            <!-- Images Header & Controls -->
            <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Image Gallery</h3>
                <p class="text-sm text-gray-600">Upload and manage your website images</p>
              </div>

            
               
                <button
                  @click="$refs.fileInput?.click()"
                  class="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl text-sm font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center space-x-2 shadow-lg shadow-green-500/25"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  <span>Upload Images</span>
                </button>
                <button
                  @click="loadImages"
                  class="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2"
                >
                  <span>Refresh</span>
                </button>
            
            </div>

            <!-- Small Image Cards Grid - 5 per row, scrollable -->
            <div v-if="images.length > 0" class="bg-gray-100 rounded-lg p-4">
              <div class="h-80 overflow-y-auto">
                <div class="grid grid-cols-5 gap-3">
                  <div
                    v-for="image in images"
                    :key="image.name"
                    class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200"
                  >
                    <!-- Small Image Thumbnail -->
                    <div class="h-20 overflow-hidden bg-gray-50">
                      <img
                        :src="image.path"
                        :alt="image.name"
                        class="w-full h-full object-cover"
                        @load="(e) => loadImageDimensions(image, e)"
                        @error="(e) => handleImageError(image, e)"
                      >
                    </div>

                    <!-- Compact Info -->
                    <div class="p-2">
                      <div class="text-xs font-medium text-gray-800 truncate mb-1" :title="image.name">
                        {{ image.name }}
                      </div>
                      <div class="text-xs text-gray-500 mb-2">
                        <div>{{ formatFileSize(image.size) }}</div>
                        <div v-if="image.dimensions" class="text-blue-600 font-medium">
                          {{ image.dimensions }}
                        </div>
                      </div>

                      <!-- Compact Action Buttons -->
                      <div class="space-y-1">
                        <button
                          @click="previewImage(image)"
                          class="w-full px-2 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors"
                        >
                          Preview
                        </button>
                        <button
                          @click="openImageInfo(image)"
                          class="w-full px-2 py-1 bg-blue-600 text-black text-xs rounded hover:bg-blue-700 transition-colors"
                        >
                          Info
                        </button>
                        <input
                          :ref="`imageInput-${image.name}`"
                          type="file"
                          accept="image/*"
                          @change="(e) => smartReplaceImage(image, e)"
                          class="hidden"
                        >
                        <button
                          @click="$refs[`imageInput-${image.name}`][0]?.click()"
                          class="w-full px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-12">
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 max-w-md mx-auto">
                <svg class="mx-auto h-16 w-16 text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">No images yet</h3>
                <p class="text-gray-600 mb-4">Upload your first images to get started with your gallery</p>
                <button
                  @click="$refs.fileInput?.click()"
                  class="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg shadow-green-500/25"
                >
                  Upload Images
                </button>
              </div>
            </div>
        </div>

        <!-- Videos Tab -->
        <div v-else-if="activeTab === 'videos'" class="cms-content-section">
            <!-- Videos Tab -->
            <!-- Videos Header & Controls -->
            <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Video Library</h3>
                <p class="text-sm text-gray-600">Upload and manage your website videos</p>
              </div>
            </div>

<!-- Responsive Small Video Cards Grid -->
<div v-if="videos.length > 0" class="bg-gray-100 rounded-lg p-2">
  <div class="max-h-[28rem] overflow-y-auto">
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
      <div
        v-for="video in videos"
        :key="video.name"
        class="bg-white rounded border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 text-center text-[10px] p-1"
      >
        <!-- Mini Video Thumbnail -->
        <div class="h-16 overflow-hidden bg-gray-50 relative rounded">
          <video
            :src="video.path"
            class="w-full h-full object-cover"
            preload="metadata"
            @loadedmetadata="(e) => loadVideoDimensions(video, e)"
            @error="(e) => handleVideoError(video, e)"
          ></video>
        </div>

        <!-- Tiny Info -->
        <div class="mt-1">
          <div class="truncate font-semibold text-[10px]" :title="video.name">
            {{ video.name }}
          </div>
          <div class="text-[10px] text-gray-500 leading-tight">
            <div>{{ formatFileSize(video.size) }}</div>
            <div v-if="video.dimensions" class="text-purple-500">{{ video.dimensions }}</div>
            <div v-if="video.duration" class="text-green-500">{{ video.duration }}</div>
          </div>
        </div>

        <!-- Tiny Buttons -->
        <div class="mt-1 space-y-0.5">
          <button
            @click="previewVideo(video)"
            class="w-full bg-gray-600 text-white rounded text-[10px] py-[2px] hover:bg-gray-700"
          >
            Preview
          </button>
          <button
            @click="openVideoInfo(video)"
            class="w-full bg-purple-600 text-white rounded text-[10px] py-[2px] hover:bg-purple-700"
          >
            Info
          </button>
          <input
            :ref="`videoInput-${video.name}`"
            type="file"
            accept="video/*"
            @change="(e) => smartReplaceVideo(video, e)"
            class="hidden"
          >
          <button
            @click="$refs[`videoInput-${video.name}`][0]?.click()"
            class="w-full bg-green-600 text-white rounded text-[10px] py-[2px] hover:bg-green-700"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

            <!-- Empty State -->
            <div v-else class="text-center py-12">
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 max-w-md mx-auto">
                <svg class="mx-auto h-16 w-16 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">No videos yet</h3>
                <p class="text-gray-600 mb-4">Upload your first videos to get started with your library</p>
                <button
                  @click="$refs.videoInput?.click()"
                  class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg shadow-purple-500/25"
                >
                  Upload Videos
                </button>
              </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script setup>

const activeTab = ref('translations')
const searchQuery = ref('')
const searchType = ref('all') // 'all', 'keys', 'values'
const translations = ref([])
const loading = ref(false)
const images = ref([])
const videos = ref([])
const selectedImage = ref(null)
const selectedKey = ref(null) // For single row selection
const showEditModal = ref(false) // Show edit modal
const editingTranslations = ref({
  en: { id: null, value: '', locale: 'en' },
  mn: { id: null, value: '', locale: 'mn' },
  ch: { id: null, value: '', locale: 'ch' }
}) // Translations being edited
const isSaving = ref(false) // Save state

// Image preview and info modals
const showImagePreview = ref(false)
const previewingImage = ref(null)
const showImageInfo = ref(false)
const selectedImageInfo = ref(null)

// Video preview and info modals
const showVideoPreview = ref(false)
const previewingVideo = ref(null)
const showVideoInfo = ref(false)
const selectedVideoInfo = ref(null)

// Image display management
const displayedImageCount = ref(10)
const displayedImages = computed(() => images.value.slice(0, displayedImageCount.value))
const activeImageFolder = ref('hero') // Current image folder
const imageFolders = ref([
  { name: 'hero', label: 'Hero Images', count: 0 },
  { name: 'backgrounds', label: 'Backgrounds', count: 0 },
  { name: 'media', label: 'Media', count: 0 },
  { name: 'icons', label: 'Icons', count: 0 }
])



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
    // Build search parameter based on search type
    let searchParam = ''
    if (searchQuery.value) {
      searchParam = searchQuery.value.trim()
    }

    const response = await $fetch('/api/translations', {
      params: {
        page: page.value,
        pageSize: pageSize.value,
        search: searchParam,
        searchType: searchType.value
      }
    })

    if (response && response.data) {
      translations.value = response.data
      totalPages.value = response.pagination?.totalPages || 1
      totalItems.value = response.pagination?.total || 0
      console.log(`Loaded ${translations.value.length} translations (search: "${searchParam}", total: ${totalItems.value})`)
    } else {
      console.warn('No data received from API')
      translations.value = []
    }
  } catch (error) {
    console.error('Failed to load translations:', error)
    translations.value = []
  } finally {
    loading.value = false
  }
}



// Initial load
await loadTranslations()

// If a key is specified in the URL, set the search to that key
if (highlightKey) {
  searchQuery.value = String(highlightKey)
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

// Enhanced search function that searches both keys and values
// Search results - show individual translations when searching, unique keys when not
const searchResults = computed(() => {
  if (searchQuery.value && searchQuery.value.trim()) {
    // When searching, show individual translation results
    return translations.value.map(t => ({
      key: t.key,
      locale: t.locale,
      value: t.value,
      id: t.id,
      isSearchResult: true
    }))
  } else {
    // When not searching, show unique keys as before
    return uniqueKeys.value.map(key => ({
      key,
      isSearchResult: false
    }))
  }
})

// For backward compatibility, keep filteredKeys pointing to unique keys
const filteredKeys = computed(() => {
  return uniqueKeys.value
})

// Current folder images
const currentFolderImages = computed(() => {
  return images.value.filter(img => img.folder === activeImageFolder.value)
})

// Database search function
async function performSearch() {
  page.value = 1 // Reset to first page when searching
  await loadTranslations()
}

async function clearSearch() {
  searchQuery.value = ''
  searchType.value = 'all'
  page.value = 1
  await loadTranslations()
}

function openAddTranslationModal() {
  // TODO: Implement add translation modal
  alert('Add translation modal will be implemented')
}

function refreshTranslations() {
  loadTranslations()
}

// Single row selection function
function selectSingleRow(key) {
  selectedKey.value = key
  openEditModal(key)
}

// Select from search result - loads all language versions of the key
async function selectFromSearchResult(result) {
  const key = result.key

  // First, load all translations for this specific key
  try {
    const response = await $fetch('/api/translations', {
      params: {
        page: 1,
        pageSize: 10,
        search: key,
        searchType: 'keys'
      }
    })

    if (response && response.data) {
      // Filter to get only exact key matches
      const keyTranslations = response.data.filter(t => t.key === key)

      // Update the translations to show this key's translations
      translations.value = keyTranslations

      // Select this key and open edit modal
      selectedKey.value = key
      openEditModal(key)

      // Clear search to show the selected key
      searchQuery.value = ''
    }
  } catch (error) {
    console.error('Failed to load key translations:', error)
    // Fallback: just select the key normally
    selectedKey.value = key
    openEditModal(key)
    searchQuery.value = ''
  }
}

// Helper functions for locale display
function getLocaleFlag(locale) {
  const flags = {
    'en': '🇺🇸',
    'mn': '🇲🇳',
    'ch': '🇨🇳'
  }
  return flags[locale] || '🌐'
}

function getLocaleName(locale) {
  const names = {
    'en': 'English',
    'mn': 'Mongolian',
    'ch': 'Chinese'
  }
  return names[locale] || locale.toUpperCase()
}

// Open edit modal for a key
function openEditModal(key) {
  selectedKey.value = key
  showEditModal.value = true

  // Reset editing translations
  editingTranslations.value = {
    en: { id: null, value: '', locale: 'en', key: key },
    mn: { id: null, value: '', locale: 'mn', key: key },
    ch: { id: null, value: '', locale: 'ch', key: key }
  }

  // Load existing translations for this key
  const keyTranslations = translations.value.filter(t => t.key === key)

  keyTranslations.forEach(translation => {
    if (editingTranslations.value[translation.locale]) {
      editingTranslations.value[translation.locale] = {
        id: translation.id,
        value: translation.value,
        locale: translation.locale,
        key: key
      }
    }
  })

  console.log(`Opened edit modal for key: ${key} with ${keyTranslations.length} existing translations`)
}

// Close edit modal
function closeEditModal() {
  showEditModal.value = false
  selectedKey.value = null
}

function selectAllRows() {
  // Not needed for single selection, but keeping for compatibility
  if (filteredKeys.value.length > 0) {
    selectedKey.value = filteredKeys.value[0]
  }
}

function clearSelection() {
  selectedKey.value = null
  showEditModal.value = false
}

// Save all translations (update existing, create new)
async function saveAllTranslations() {
  if (!selectedKey.value || isSaving.value) return

  try {
    isSaving.value = true
    const promises = []

    // Process each locale
    for (const locale of ['en', 'mn', 'ch']) {
      const translation = editingTranslations.value[locale]

      if (translation.value && translation.value.trim()) {
        if (translation.id) {
          // Update existing translation
          promises.push(
            $fetch(`/api/translations/${translation.id}`, {
              method: 'PUT',
              body: { value: translation.value }
            })
          )
        } else {
          // Create new translation
          promises.push(
            $fetch('/api/translations', {
              method: 'POST',
              body: {
                key: selectedKey.value,
                locale: locale,
                value: translation.value
              }
            })
          )
        }
      }
    }

    // Wait for all saves to complete
    await Promise.all(promises)

    // Refresh translations to get updated data
    await refreshTranslations()

    // Close modal
    closeEditModal()

    alert('All translations saved successfully!')

  } catch (error) {
    console.error('Failed to save translations:', error)
    alert('Failed to save translations. Please try again.')
  } finally {
    isSaving.value = false
  }
}

// Test translation key function
function testTranslationKey(key) {
  if (selectedKeyTranslations.value.length > 0) {
    const translations = selectedKeyTranslations.value.map(t =>
      `${t.locale.toUpperCase()}: ${t.value || 'Not translated'}`
    ).join('\n')
    alert(`Testing key: ${key}\n\n${translations}`)
  } else {
    alert(`No translations loaded for key: ${key}`)
  }
}

// Handle translation change (mark as modified)
function onTranslationChange(translation) {
  translation.isModified = true
  translation.isSaved = false
}

// Save translation by ID
async function saveTranslationById(translation) {
  if (!translation.value || translation.isSaving) return

  try {
    translation.isSaving = true
    const response = await $fetch(`/api/translations/${translation.id}`, {
      method: 'PUT',
      body: { value: translation.value }
    })

    if (response.success) {
      translation.isSaved = true
      translation.isModified = false
      console.log(`Saved translation ID ${translation.id}: ${translation.key} (${translation.locale})`)

      // Clear saved indicator after 2 seconds
      setTimeout(() => {
        translation.isSaved = false
      }, 2000)
    }
  } catch (error) {
    console.error('Failed to save translation:', error)
    alert('Failed to save translation. Please try again.')
  } finally {
    translation.isSaving = false
  }
}



// Watch for search changes from URL (updated to use searchQuery)
watch(() => route.query.key, (newKey) => {
  if (newKey && newKey !== searchQuery.value) {
    searchQuery.value = String(newKey)
  }
})

// Watch for search query changes and debounce the search
let searchTimeout = null
watch(searchQuery, (newQuery, oldQuery) => {
  if (newQuery !== oldQuery) {
    // Clear existing timeout
    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }

    // Debounce search by 500ms
    searchTimeout = setTimeout(() => {
      performSearch()
    }, 500)
  }
})

// Watch for search type changes and trigger immediate search
watch(searchType, () => {
  if (searchQuery.value) {
    performSearch()
  }
})

// Get translation for a specific key and locale
function getTranslation(key, locale) {
  const found = translations.value.find(t => t.key === key && t.locale === locale)
  if (found) {
    return found
  }
  return {
    id: null,
    key,
    locale,
    value: '',
    updatedAt: null
  }
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



// Save translation to database (new function)
async function saveTranslation(key, locale) {
  const translation = getTranslation(key, locale)
  if (!translation || !translation.value) return

  try {
    loading.value = true

    // If translation has an ID, update it; otherwise create new
    if (translation.id) {
      await $fetch('/api/translations', {
        method: 'PUT',
        body: {
          id: translation.id,
          value: translation.value
        }
      })
    } else {
      const response = await $fetch('/api/translations', {
        method: 'POST',
        body: {
          key: key,
          locale: locale,
          value: translation.value
        }
      })
      // Update the translation with the new ID
      translation.id = response.id
    }

    translation.updatedAt = new Date()

    // Show success indicator for 3 seconds
    setTimeout(() => {
      translation.updatedAt = null
    }, 3000)

  } catch (error) {
    console.error('Failed to save translation:', error)
    alert('Failed to save translation. Please try again.')
  } finally {
    loading.value = false
  }
}

// Copy translation key to clipboard
async function copyTranslationKey(key) {
  try {
    await navigator.clipboard.writeText(key)
    // You could show a toast notification here
    console.log('Key copied to clipboard:', key)
  } catch (error) {
    console.error('Failed to copy key:', error)
  }
}

// Copy text to clipboard
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    console.log('Text copied to clipboard')
  } catch (error) {
    console.error('Failed to copy text:', error)
  }
}

// Removed export function - replaced with refresh functionality

// Load images from all folders
async function loadImages() {
  try {
    const response = await $fetch('/api/images/list')
    if (response.success) {
      images.value = response.images

      // Update folder counts
      imageFolders.value.forEach(folder => {
        folder.count = images.value.filter(img => img.folder === folder.name).length
      })
    }
  } catch (error) {
    console.error('Failed to load images:', error)
  }
}

// Handle image upload
async function handleImageUpload(event) {
  const files = event.target.files
  if (!files || files.length === 0) return

  const formData = new FormData()
  for (let i = 0; i < files.length; i++) {
    formData.append('file', files[i])
  }

  try {
    loading.value = true
    const response = await $fetch('/api/images/upload', {
      method: 'POST',
      body: formData
    })

    if (response.success) {
      await loadImages() // Refresh the images list
      console.log('Images uploaded successfully:', response.files)
    }
  } catch (error) {
    console.error('Failed to upload images:', error)
    alert('Failed to upload images')
  } finally {
    loading.value = false
    // Clear the file input
    event.target.value = ''
  }
}

// Select image
function selectImage(image) {
  selectedImage.value = image
  // Copy image path to clipboard
  copyToClipboard(image.path)
  console.log('Selected image:', image.name)
}

// Load image dimensions
function loadImageDimensions(image, event) {
  const img = event.target
  if (img.naturalWidth && img.naturalHeight) {
    image.dimensions = `${img.naturalWidth} × ${img.naturalHeight}`
    image.width = img.naturalWidth
    image.height = img.naturalHeight
  }
}

// Handle image loading error
function handleImageError(image, event) {
  console.error(`Failed to load image: ${image.path}`)
  image.dimensions = 'Error loading'
}

// Preview image in modal
function previewImage(image) {
  previewingImage.value = image
  showImagePreview.value = true
}

// Close image preview
function closeImagePreview() {
  showImagePreview.value = false
  previewingImage.value = null
}

// Show image info modal
function openImageInfo(image) {
  selectedImageInfo.value = image
  showImageInfo.value = true
}

// Close image info modal
function closeImageInfo() {
  showImageInfo.value = false
  selectedImageInfo.value = null
}

// Get image format from filename
function getImageFormat(filename) {
  const ext = filename.split('.').pop()?.toLowerCase()
  const formats = {
    'jpg': 'JPEG',
    'jpeg': 'JPEG',
    'png': 'PNG',
    'gif': 'GIF',
    'webp': 'WebP',
    'svg': 'SVG'
  }
  return formats[ext] || ext?.toUpperCase() || 'Unknown'
}

// Load more images
function loadMoreImages() {
  displayedImageCount.value = Math.min(displayedImageCount.value + 10, images.value.length)
}

// Get image dimensions from file
function getImageDimensions(file) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight
      })
    }
    img.onerror = reject
    img.src = URL.createObjectURL(file)
  })
}

// Process image for replacement (resize and convert format if needed)
async function processImageForReplacement(file, originalImage, newDimensions) {
  const originalExt = originalImage.name.split('.').pop()?.toLowerCase()
  const newExt = file.name.split('.').pop()?.toLowerCase()

  // If same format and no resizing needed, return original file
  if (originalExt === newExt && originalImage.dimensions === `${newDimensions.width} × ${newDimensions.height}`) {
    return file
  }

  // Create canvas for processing
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  // Load image
  const img = new Image()
  await new Promise((resolve, reject) => {
    img.onload = resolve
    img.onerror = reject
    img.src = URL.createObjectURL(file)
  })

  // Set canvas size (use original dimensions if available)
  if (originalImage.width && originalImage.height) {
    canvas.width = originalImage.width
    canvas.height = originalImage.height
  } else {
    canvas.width = newDimensions.width
    canvas.height = newDimensions.height
  }

  // Draw image on canvas
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

  // Convert to blob with correct format
  const quality = originalExt === 'jpg' || originalExt === 'jpeg' ? 0.9 : undefined
  const mimeType = originalExt === 'png' ? 'image/png' :
                   originalExt === 'jpg' || originalExt === 'jpeg' ? 'image/jpeg' :
                   originalExt === 'webp' ? 'image/webp' : 'image/png'

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      // Create new file with original name
      const processedFile = new File([blob], originalImage.name, { type: mimeType })
      resolve(processedFile)
    }, mimeType, quality)
  })
}

// Smart image replacement with dimension checking and format conversion
async function smartReplaceImage(originalImage, event) {
  const file = event.target.files[0]
  if (!file) return

  try {
    // Get dimensions of the new image
    const newImageDimensions = await getImageDimensions(file)
    const originalDimensions = originalImage.dimensions

    let message = `Replace "${originalImage.name}" with "${file.name}"?\n\n`
    message += `Original: ${originalDimensions || 'Unknown'}\n`
    message += `New: ${newImageDimensions.width} × ${newImageDimensions.height}\n\n`

    // Check if dimensions match
    if (originalDimensions && originalDimensions !== `${newImageDimensions.width} × ${newImageDimensions.height}`) {
      message += `⚠️ Warning: Dimensions don't match!\n`
      message += `The new image will be resized to fit the original dimensions.\n\n`
    }

    // Check format conversion
    const originalExt = originalImage.name.split('.').pop()?.toLowerCase()
    const newExt = file.name.split('.').pop()?.toLowerCase()

    if (originalExt !== newExt) {
      message += `🔄 Format conversion: ${newExt?.toUpperCase()} → ${originalExt?.toUpperCase()}\n\n`
    }

    message += `Continue with replacement?`

    if (!confirm(message)) {
      event.target.value = ''
      return
    }

    loading.value = true

    // Create canvas for image processing if needed
    const processedFile = await processImageForReplacement(file, originalImage, newImageDimensions)

    const formData = new FormData()
    formData.append('file', processedFile)
    formData.append('folder', originalImage.folder || 'images')
    formData.append('replaceFile', originalImage.name)

    console.log(`Smart replacing: ${originalImage.name} in folder: ${originalImage.folder || 'images'}`)

    const response = await $fetch('/api/images/upload', {
      method: 'POST',
      body: formData
    })

    if (response.success) {
      console.log('Smart image replacement successful:', response)

      // Reload images
      await loadImages()

      // Force browser cache refresh
      const timestamp = Date.now()
      const updatedImages = images.value.map(img => {
        if (img.name === originalImage.name) {
          return {
            ...img,
            path: `${img.path}?t=${timestamp}`,
            lastModified: timestamp,
            dimensions: `${newImageDimensions.width} × ${newImageDimensions.height}`
          }
        }
        return img
      })
      images.value = updatedImages

      alert(`✅ Image "${originalImage.name}" updated successfully!\n\nNew dimensions: ${newImageDimensions.width} × ${newImageDimensions.height}`)
    }
  } catch (error) {
    console.error('Failed to replace image:', error)
    alert(`❌ Failed to replace image: ${error.message || 'Unknown error'}`)
  } finally {
    loading.value = false
    event.target.value = ''
  }
}

// Video functions
// Load video dimensions
function loadVideoDimensions(video, event) {
  const videoElement = event.target
  if (videoElement.videoWidth && videoElement.videoHeight) {
    video.dimensions = `${videoElement.videoWidth} × ${videoElement.videoHeight}`
    video.width = videoElement.videoWidth
    video.height = videoElement.videoHeight

    // Get duration
    if (videoElement.duration && !isNaN(videoElement.duration)) {
      const minutes = Math.floor(videoElement.duration / 60)
      const seconds = Math.floor(videoElement.duration % 60)
      video.duration = `${minutes}:${seconds.toString().padStart(2, '0')}`
    }
  }
}

// Handle video error
function handleVideoError(video, event) {
  console.error(`Failed to load video: ${video.path}`)
  video.dimensions = 'Error loading'
}

// Preview video in modal
function previewVideo(video) {
  previewingVideo.value = video
  showVideoPreview.value = true
}

// Close video preview
function closeVideoPreview() {
  showVideoPreview.value = false
  previewingVideo.value = null
}

// Show video info modal
function openVideoInfo(video) {
  selectedVideoInfo.value = video
  showVideoInfo.value = true
}

// Close video info modal
function closeVideoInfo() {
  showVideoInfo.value = false
  selectedVideoInfo.value = null
}

// Get video format from filename
function getVideoFormat(filename) {
  const ext = filename.split('.').pop()?.toLowerCase()
  const formats = {
    'mp4': 'MP4',
    'webm': 'WebM',
    'ogg': 'OGG',
    'avi': 'AVI',
    'mov': 'MOV',
    'wmv': 'WMV'
  }
  return formats[ext] || ext?.toUpperCase() || 'Unknown'
}

// Smart video replacement with dimension checking
async function smartReplaceVideo(originalVideo, event) {
  const file = event.target.files[0]
  if (!file) return

  try {
    loading.value = true

    if (!confirm(`Replace "${originalVideo.name}" with "${file.name}"?`)) {
      event.target.value = ''
      return
    }

    const formData = new FormData()
    formData.append('file', file)
    formData.append('replaceFile', originalVideo.name)

    const response = await $fetch('/api/videos/upload', {
      method: 'POST',
      body: formData
    })

    if (response.success) {
      await loadVideos()
      alert(`✅ Video "${originalVideo.name}" updated successfully!`)
    }
  } catch (error) {
    console.error('Failed to replace video:', error)
    alert(`❌ Failed to replace video: ${error.message || 'Unknown error'}`)
  } finally {
    loading.value = false
    event.target.value = ''
  }
}

// Replace specific video
async function replaceSpecificVideo(video, event) {
  const file = event.target.files[0]
  if (!file) return

  if (!confirm(`Are you sure you want to replace "${video.name}" with "${file.name}"?`)) {
    event.target.value = ''
    return
  }

  const formData = new FormData()
  formData.append('file', file)
  formData.append('folder', video.folder || 'videos')
  formData.append('replaceFile', video.name)

  try {
    loading.value = true
    console.log(`Replacing video: ${video.name}`)

    const response = await $fetch('/api/videos/upload', {
      method: 'POST',
      body: formData
    })

    if (response.success) {
      console.log('Video replacement successful:', response)
      await loadVideos()
      alert(`Video "${video.name}" updated successfully!`)
    }
  } catch (error) {
    console.error('Failed to replace video:', error)
    alert(`Failed to replace video: ${error.message || 'Unknown error'}`)
  } finally {
    loading.value = false
    // Reset the input
    event.target.value = ''
  }
}



// Format file size
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Load videos
async function loadVideos() {
  try {
    const response = await $fetch('/api/videos/list')
    if (response.success) {
      videos.value = response.videos
    }
  } catch (error) {
    console.error('Failed to load videos:', error)
  }
}

// Handle video upload
async function handleVideoUpload(event) {
  const files = event.target.files
  if (!files || files.length === 0) return

  const formData = new FormData()
  for (let i = 0; i < files.length; i++) {
    formData.append('file', files[i])
  }

  try {
    loading.value = true
    const response = await $fetch('/api/videos/upload', {
      method: 'POST',
      body: formData
    })

    if (response.success) {
      await loadVideos() // Refresh the videos list
      console.log('Videos uploaded successfully:', response.files)
    }
  } catch (error) {
    console.error('Failed to upload videos:', error)
    alert('Failed to upload videos')
  } finally {
    loading.value = false
    // Clear the file input
    event.target.value = ''
  }
}

// Load data on component mount
onMounted(() => {
  loadImages()
  loadVideos()
})
</script>

<style scoped>
/* Enhanced styles for the beautiful translation management interface */
.min-h-screen {
  min-height: 100vh;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #f8fafc 100%);
}

/* Search Result Cards */
.cms-search-result-card {
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);
}

.cms-search-result-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 8px 25px -5px rgba(59, 130, 246, 0.1);
  transform: translateY(-2px);
}

.cms-search-result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.cms-search-result-info {
  flex: 1;
  min-width: 0;
}

.cms-search-key {
  font-weight: 600;
  color: #1f2937;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.cms-search-locale {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #6b7280;
}

.cms-search-value {
  flex: 2;
  background: #f3f4f6;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #374151;
  border-left: 3px solid #3b82f6;
}

/* Tab navigation styling */
nav button {
  position: relative;
  overflow: hidden;
}

nav button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

nav button:hover::before {
  left: 100%;
}

/* Translation group styling */
.translation-group {
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
}

.translation-group::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ef4444);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.translation-group:hover::before {
  opacity: 1;
}

.translation-group:hover {
  border-color: #cbd5e0;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transform: translateY(-4px);
}

/* Preview item styling with glassmorphism */
.preview-item {
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.preview-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
  transition: left 0.5s;
}

.preview-item:hover::before {
  left: 100%;
}

.preview-item:hover {
  border-color: rgba(59, 130, 246, 0.3);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

/* Enhanced form elements with modern styling */
input, select, textarea {
  transition: all 0.3s ease;
  border-color: #e2e8f0;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-1px);
}

/* Button enhancements with modern effects */
button {
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 13px;
  position: relative;
  overflow: hidden;
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

button:hover::before {
  left: 100%;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

button:active:not(:disabled) {
  transform: translateY(0);
}

/* Image grid styling */
.image-grid img {
  transition: transform 0.2s ease;
}

.image-grid img:hover {
  transform: scale(1.05);
}

/* Loading states */
.loading-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

/* Beautiful animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

.slide-in-left {
  animation: slideInFromLeft 0.5s ease-out;
}

.slide-in-right {
  animation: slideInFromRight 0.5s ease-out;
}

/* Responsive improvements with enhanced mobile experience */
@media (max-width: 768px) {
  .translation-group {
    padding: 1rem;
    border-radius: 12px;
  }

  .preview-item {
    padding: 10px;
    border-radius: 8px;
  }

  nav {
    flex-direction: column;
    gap: 0.5rem;
  }
}

/* Custom scrollbar with gradient */
.overflow-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-auto::-webkit-scrollbar-track {
  background: linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%);
  border-radius: 4px;
}

.overflow-auto::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.overflow-auto::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #2563eb 0%, #7c3aed 100%);
}

/* Enhanced highlight animations */
@keyframes highlight {
  0% {
    background: transparent;
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
  }
  50% {
    background: rgba(59, 130, 246, 0.1);
    box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
  }
  100% {
    background: transparent;
    box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
  }
}

.highlight-animation {
  animation: highlight 1.5s ease-in-out;
}

/* Loading shimmer effect */
.shimmer {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: shimmer 1.5s infinite;
}

/* Glassmorphism effects */
.glass {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ef4444 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Language badge improvements */
.language-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

/* Card improvements */
.card-container {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.card-container:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

/* Search input improvements */
.search-input {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.search-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Modern CMS Admin Styles - Full Width Design */
.cms-admin-container {
  min-height: 100vh;
  background: #f8fafc;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 0;
}

.cms-header {
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  padding: 2rem 0;
}

.cms-header-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cms-title-group {
  flex: 1;
}

.cms-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.cms-icon {
  font-size: 2rem;
}

.cms-description {
  font-size: 1.1rem;
  color: #4a5568;
  margin: 0;
}

.cms-stats {
  display: flex;
  gap: 2rem;
}

.cms-stat-item {
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  min-width: 80px;
}

.cms-stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
}

.cms-stat-label {
  display: block;
  font-size: 0.875rem;
  color: #718096;
  margin-top: 0.25rem;
}

.cms-nav {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 0;
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
}

.cms-nav-tab {
  flex: 1;
  padding: 1.5rem 2rem;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  color: #718096;
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 3px solid transparent;
}

.cms-nav-tab:hover {
  background: #f7fafc;
  color: #4a5568;
}

.cms-nav-tab-active {
  color: #3182ce;
  border-bottom-color: #3182ce;
  background: #ebf8ff;
}

.cms-nav-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.cms-nav-badge {
  background: #e2e8f0;
  color: #4a5568;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.cms-nav-tab-active .cms-nav-badge {
  background: #3182ce;
  color: white;
}

.cms-main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  min-height: calc(100vh - 200px);
}

.cms-content-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.cms-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.cms-search-group {
  flex: 1;
  max-width: 500px;
}

.cms-search-wrapper {
  position: relative;
}

.cms-search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: all 0.2s ease;
}

.cms-search-input:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}

.cms-search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  color: #a0aec0;
}

.cms-loading-icon {
  position: absolute;
  right: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.cms-spinner {
  width: 1rem;
  height: 1rem;
  color: #3182ce;
  animation: spin 1s linear infinite;
}

.cms-clear-btn {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.25rem;
  border: none;
  background: none;
  color: #a0aec0;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.cms-clear-btn:hover {
  color: #718096;
  background: #f7fafc;
}

.cms-clear-btn svg {
  width: 1rem;
  height: 1rem;
}

.cms-search-filters {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.cms-filter-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  background: white;
  color: #4a5568;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cms-filter-btn:hover {
  background: #f7fafc;
  border-color: #cbd5e0;
}

.cms-filter-active {
  background: #3182ce;
  color: white;
  border-color: #3182ce;
}

.cms-filter-active:hover {
  background: #2c5282;
  border-color: #2c5282;
}

.cms-action-group {
  display: flex;
  gap: 1rem;
}

.cms-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}

.cms-btn-icon {
  width: 1rem;
  height: 1rem;
}

.cms-btn-primary {
  background: #3182ce;
  color: white;
}

.cms-btn-primary:hover {
  background: #2c5282;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(49, 130, 206, 0.3);
}

.cms-btn-secondary {
  background: white;
  color: #4a5568;
  border: 1px solid #e2e8f0;
}

.cms-btn-secondary:hover {
  background: #f7fafc;
  border-color: #cbd5e0;
}

.cms-btn-active {
  background: #48bb78;
  color: white;
}

.cms-btn-active:hover {
  background: #38a169;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(72, 187, 120, 0.3);
}

.cms-btn-purple {
  background: #805ad5;
  color: white;
}

.cms-btn-purple:hover {
  background: #6b46c1;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(128, 90, 213, 0.3);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .cms-header-inner {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .cms-stats {
    justify-content: center;
  }

  .cms-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .cms-action-group {
    justify-content: center;
    flex-wrap: wrap;
  }
}

/* Compact Translation Cards */
.cms-translation-card {
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.2s ease;
}

.cms-translation-card:hover {
  border-color: #cbd5e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.cms-key-header {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cms-key-header:hover {
  background: linear-gradient(135deg, #edf2f7 0%, #cbd5e0 100%);
}

.cms-key-selected {
  background: linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%) !important;
  border-color: #3182ce !important;
}

.cms-key-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.cms-row-radio {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid #cbd5e0;
  cursor: pointer;
}

.cms-row-radio:checked {
  background-color: #3182ce;
  border-color: #3182ce;
}

.cms-key-disabled {
  opacity: 0.5;
  pointer-events: none;
}

.cms-selection-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #ebf8ff;
  border-radius: 8px;
  border: 1px solid #3182ce;
}

.cms-selection-count {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2c5282;
}

.cms-btn-link {
  background: none;
  border: none;
  color: #3182ce;
  font-size: 0.875rem;
  cursor: pointer;
  text-decoration: underline;
}

.cms-btn-link:hover {
  color: #2c5282;
}

/* Selected Key Editor */
.cms-selected-editor {
  margin-top: 2rem;
  background: white;
  border-radius: 12px;
  border: 2px solid #3182ce;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(49, 130, 206, 0.1);
}

.cms-editor-header {
  background: linear-gradient(135deg, #3182ce 0%, #2c5282 100%);
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cms-editor-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
}

.cms-btn-small {
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
}

.cms-editor-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cms-action-test:hover {
  background: #d1fae5 !important;
  color: #065f46 !important;
}

/* Translation ID display */
.cms-translation-id {
  font-size: 0.75rem;
  color: #6b7280;
  margin-left: 0.5rem;
  font-weight: normal;
}

/* No translations message */
.cms-no-translations {
  text-align: center;
  padding: 2rem;
  color: #6b7280;
  font-style: italic;
}

/* Saved indicator */
.cms-saved-indicator {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #10b981;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Modal Styles */
.cms-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.cms-modal {
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.cms-modal-header {
  background: linear-gradient(135deg, #3182ce 0%, #2c5282 100%);
  color: white;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cms-modal-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.cms-modal-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.cms-modal-close:hover {
  background: rgba(255, 255, 255, 0.1);
}

.cms-modal-content {
  padding: 1.5rem;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cms-modal-row {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.cms-modal-locale {
  min-width: 120px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.cms-locale-name {
  font-weight: 600;
  color: #374151;
}

.cms-translation-new {
  font-size: 0.75rem;
  color: #10b981;
  font-weight: 500;
}

.cms-modal-input {
  flex: 1;
}

.cms-modal-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.875rem;
  line-height: 1.5;
  resize: vertical;
  transition: border-color 0.2s;
}

.cms-modal-textarea:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}

.cms-modal-footer {
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.cms-btn-primary {
  background: linear-gradient(135deg, #3182ce 0%, #2c5282 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.cms-btn-primary:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(49, 130, 206, 0.3);
}

.cms-btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Image Preview Modal */
.cms-image-preview-modal {
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.cms-image-preview-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #f8fafc;
  min-height: 400px;
}

.cms-image-preview-content img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Custom Scrollbar */
.scrollbar-thin {
  scrollbar-width: thin;
}

.scrollbar-thumb-blue-300::-webkit-scrollbar {
  width: 8px;
}

.scrollbar-thumb-blue-300::-webkit-scrollbar-track {
  background: #dbeafe;
  border-radius: 4px;
}

.scrollbar-thumb-blue-300::-webkit-scrollbar-thumb {
  background: #93c5fd;
  border-radius: 4px;
}

.scrollbar-thumb-blue-300::-webkit-scrollbar-thumb:hover {
  background: #60a5fa;
}

.cms-key-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.cms-key-counter {
  background: #3182ce;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.cms-key-actions {
  display: flex;
  gap: 0.5rem;
}

.cms-action-btn-small {
  padding: 0.375rem;
  border: none;
  background: #f7fafc;
  color: #4a5568;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cms-action-btn-small:hover {
  background: #edf2f7;
  color: #2d3748;
}

.cms-action-delete:hover {
  background: #fed7d7 !important;
  color: #c53030 !important;
}

.cms-translations-editor {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cms-translation-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.cms-locale-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 60px;
  padding-top: 0.5rem;
}

.cms-flag {
  font-size: 1rem;
}

.cms-locale-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #4a5568;
}

.cms-input-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cms-translation-input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.875rem;
  line-height: 1.4;
  resize: vertical;
  min-height: 2.5rem;
  transition: all 0.2s ease;
}

.cms-translation-input:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}

.cms-input-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cms-saved-indicator {
  display: flex;
  align-items: center;
  color: #48bb78;
  font-size: 0.75rem;
}

.cms-save-btn {
  padding: 0.375rem 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cms-save-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.cms-save-btn-blue {
  background: #3182ce;
  color: white;
}

.cms-save-btn-blue:hover:not(:disabled) {
  background: #2c5282;
}

.cms-save-btn-yellow {
  background: #d69e2e;
  color: white;
}

.cms-save-btn-yellow:hover:not(:disabled) {
  background: #b7791f;
}

.cms-save-btn-red {
  background: #e53e3e;
  color: white;
}

.cms-save-btn-red:hover:not(:disabled) {
  background: #c53030;
}

/* Modern Pagination Styles */
.cms-pagination-container {
  margin-top: 2rem;
}

.cms-pagination {
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.cms-pagination-info {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.cms-results-text {
  font-size: 0.875rem;
  color: #4a5568;
}

.cms-page-size {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cms-page-size-label {
  font-size: 0.875rem;
  color: #4a5568;
  font-weight: 500;
}

.cms-page-size-select {
  padding: 0.375rem 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.875rem;
  background: white;
  cursor: pointer;
}

.cms-page-size-select:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}

.cms-pagination-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cms-page-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #e2e8f0;
  background: white;
  color: #4a5568;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cms-page-btn:hover:not(.cms-page-btn-disabled) {
  background: #3182ce;
  color: white;
  border-color: #3182ce;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(49, 130, 206, 0.3);
}

.cms-page-btn-disabled {
  background: #f7fafc;
  color: #a0aec0;
  cursor: not-allowed;
  border-color: #e2e8f0;
}

.cms-page-numbers {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
}

.cms-current-page {
  font-size: 1rem;
}

.cms-page-separator {
  opacity: 0.8;
  font-size: 0.75rem;
}

.cms-total-pages {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .cms-admin-container {
    margin-left: 0;
    width: 100%;
  }

  .cms-header-inner,
  .cms-main {
    padding: 1rem;
  }

  .cms-title {
    font-size: 2rem;
  }

  .cms-nav {
    flex-direction: column;
  }

  .cms-nav-tab {
    padding: 1rem;
  }

  .cms-stats {
    flex-direction: column;
    gap: 1rem;
  }

  .cms-pagination {
    flex-direction: column;
    gap: 1rem;
  }

  .cms-pagination-info {
    flex-direction: column;
    gap: 1rem;
  }

  .cms-translation-row {
    flex-direction: column;
    gap: 0.5rem;
  }

  .cms-locale-label {
    min-width: auto;
    padding-top: 0;
  }
}
</style>