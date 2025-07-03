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
            Manage static contexts, images, and videos with live preview and advanced editing tools
          </p>
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
        <span>Static Texts</span>
        <span class="cms-nav-badge">{{ totalItems || 0 }}</span>
      </button>

      <button
        @click="activeTab = 'news'"
        :class="['cms-nav-tab', { 'cms-nav-tab-active': activeTab === 'news' }]"
        role="tab"
        :aria-selected="activeTab === 'news'"
      >
        <span>News</span>
        <span class="cms-nav-badge">{{ newsItems.length || 0 }}</span>
      </button>

      <button
        @click="activeTab = 'media'"
        :class="['cms-nav-tab', { 'cms-nav-tab-active': activeTab === 'media' }]"
        role="tab"
        :aria-selected="activeTab === 'media'"
      >
        <span>Media Materials</span>
        <span class="cms-nav-badge">{{ mediaItems.length || 0 }}</span>
      </button>

      <button
        @click="activeTab = 'images'"
        :class="['cms-nav-tab', { 'cms-nav-tab-active': activeTab === 'images' }]"
        role="tab"
        :aria-selected="activeTab === 'images'"
      >
        <span>Static Images</span>
        <span class="cms-nav-badge">{{ images.length || 0 }}</span>
      </button>

      <button
        @click="activeTab = 'videos'"
        :class="['cms-nav-tab', { 'cms-nav-tab-active': activeTab === 'videos' }]"
        role="tab"
        :aria-selected="activeTab === 'videos'"
      >
        <span>Static Videos</span>
        <span class="cms-nav-badge">{{ videos.length || 0 }}</span>
      </button>

      <button
        @click="activeTab = 'join-us'"
        :class="['cms-nav-tab', { 'cms-nav-tab-active': activeTab === 'join-us' }]"
        role="tab"
        :aria-selected="activeTab === 'join-us'"
      >
        <span>Join Us</span>
        <span class="cms-nav-badge">{{ joinUsItems.length || 0 }}</span>
      </button>

      <button
        @click="activeTab = 'party-building'"
        :class="['cms-nav-tab', { 'cms-nav-tab-active': activeTab === 'party-building' }]"
        role="tab"
        :aria-selected="activeTab === 'party-building'"
      >
        <span>Party Building</span>
        <span class="cms-nav-badge">{{ partyBuildingItems.length || 0 }}</span>
      </button>

      <button
        @click="activeTab = 'development-history'"
        :class="['cms-nav-tab', { 'cms-nav-tab-active': activeTab === 'development-history' }]"
        role="tab"
        :aria-selected="activeTab === 'development-history'"
      >
        <span>Development History</span>
        <span class="cms-nav-badge">{{ developmentHistoryItems.length || 0 }}</span>
      </button>

      <button
        @click="activeTab = 'collaborative-projects'"
        :class="['cms-nav-tab', { 'cms-nav-tab-active': activeTab === 'collaborative-projects' }]"
        role="tab"
        :aria-selected="activeTab === 'collaborative-projects'"
      >
        <span>Collaborative Projects</span>
        <span class="cms-nav-badge">{{ collaborativeProjectsItems.length || 0 }}</span>
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
                <div class="modal-header-content">
                  <h3 class="cms-modal-title">Edit Translation: {{ selectedKey }}</h3>
                </div>
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
                        <input
                          :id="`imageInput-${image.name.replace(/[^a-zA-Z0-9]/g, '_')}`"
                          type="file"
                          accept="image/*"
                          @change="(event) => smartReplaceImage(image, event)"
                          style="display: none;"
                        />
                        <button
                          @click="document.getElementById(`imageInput-${image.name.replace(/[^a-zA-Z0-9]/g, '_')}`)?.click()"
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
          <input
            :id="`videoInput-${video.name.replace(/[^a-zA-Z0-9]/g, '_')}`"
            type="file"
            accept="video/*"
            @change="(event) => smartReplaceVideo(video, event)"
            style="display: none;"
          />
          <button
            @click="document.getElementById(`videoInput-${video.name.replace(/[^a-zA-Z0-9]/g, '_')}`)?.click()"
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

        <!-- News Tab -->
        <div v-else-if="activeTab === 'news'" class="cms-content-section">
          <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">News Management</h3>
              <p class="text-sm text-gray-600">Create and manage news articles</p>
            </div>
            <button
              @click="showNewsForm = true"
              class="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-sm font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              Add News
            </button>
          </div>

          <!-- News List -->
          <div v-if="groupedNews.length > 0" class="space-y-6">
            <div v-for="group in groupedNews" :key="group.slug" class="news-group">
              <div class="news-group-header">
                <div class="news-group-info">
                  <h4 class="news-group-title">{{ group.title }}</h4>
                  <p class="news-group-meta">
                    <span class="news-date">{{ formatDate(group.date) }}</span>
                    <span class="news-separator">•</span>
                    <span class="news-source">{{ group.source || 'Monte Group' }}</span>
                    <span class="news-separator">•</span>
                    <span class="news-views">{{ group.views }} views</span>
                  </p>
                </div>
                <div class="news-group-actions">
                  <button
                    @click="editNewsGroup(group)"
                    class="btn-action btn-edit"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteNewsGroup(group.slug)"
                    class="btn-action btn-delete"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div class="news-translations">
                <div v-for="translation in group.translations" :key="translation.id" class="news-translation">
                  <div class="translation-header">
                    <span class="translation-flag">{{ getLanguageFlag(translation.locale) }}</span>
                    <span class="translation-language">{{ getLanguageName(translation.locale) }}</span>
                    <span class="translation-status" :class="{ 'published': translation.published, 'draft': !translation.published }">
                      {{ translation.published ? 'Published' : 'Draft' }}
                    </span>
                  </div>
                  <div class="translation-content">
                    <h5 class="translation-title">{{ translation.title }}</h5>
                    <p class="translation-description">{{ translation.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="text-center py-12">
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 max-w-md mx-auto">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">No news articles yet</h3>
              <p class="text-gray-600 mb-4">Create your first news article to get started</p>
              <button
                @click="showNewsForm = true"
                class="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Create News Article
              </button>
            </div>
          </div>
        </div>

        <!-- Media Materials Tab -->
        <div v-else-if="activeTab === 'media'" class="cms-content-section">
          <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Media Materials</h3>
              <p class="text-sm text-gray-600">Manage videos, images, and PDFs for media materials page</p>
            </div>
            <button
              @click="showMediaForm = true"
              class="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500  rounded-xl text-sm font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg shadow-green-500/25"
            >
              Add Media
            </button>
          </div>

        

          <!-- Media Grid -->
          <div v-if="groupedMedia.length > 0" class="space-y-6">
            <div v-for="group in groupedMedia" :key="group.key" class="media-group-card">
              <div class="media-group-header">
                <div class="media-group-info">
                  <h4 class="media-group-title">{{ group.mainTitle }}</h4>
                  <p class="media-group-meta">
                    <span class="media-type">{{ group.type.toUpperCase() }}</span>
                    <span class="media-separator">•</span>
                    <span class="media-date">{{ formatDate(group.createdAt) }}</span>
                    <span class="media-separator">•</span>
                    <span class="media-count">{{ group.translations.length }} language(s)</span>
                  </p>
                </div>

              </div>

              <div class="media-translations">
                <div v-for="translation in group.translations" :key="translation.id" class="media-translation">
                  <div class="media-preview">
                    <video v-if="translation.type === 'video'" :src="translation.path" class="media-thumbnail" preload="metadata"></video>
                    <img v-else-if="translation.type === 'image'" :src="translation.path" class="media-thumbnail" :alt="translation.title">
                    <div v-else class="media-thumbnail media-pdf">
                      <span class="pdf-icon">📄</span>
                      <span class="pdf-label">PDF</span>
                    </div>
                  </div>

                  <div class="media-info">
                    <div class="media-header">
                      <span class="media-flag">{{ getLanguageFlag(translation.locale) }}</span>
                      <span class="media-language">{{ getLanguageName(translation.locale) }}</span>
                      <span class="media-status" :class="{ 'published': translation.published, 'draft': !translation.published }">
                        {{ translation.published ? 'Published' : 'Draft' }}
                      </span>
                    </div>

                    <div class="media-content">
                      <h5 class="media-title">{{ translation.title }}</h5>
                      <p class="media-description">{{ translation.description }}</p>
                      <div class="media-actions">
                        <button @click="editSingleMedia(translation)" class="btn-mini btn-edit">Edit</button>
                        <button @click="deleteMedia(translation.id)" class="btn-mini btn-delete">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="text-center py-12">
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 max-w-md mx-auto">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">No media materials yet</h3>
              <p class="text-gray-600 mb-4">Upload your first media materials to get started</p>
              <button
                @click="showMediaForm = true"
                class="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 texwhite rounded-xl font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg shadow-green-500/25"
              >
                Upload Media
              </button>
            </div>
          </div>
        </div>

        <!-- Join Us Tab -->
        <div v-else-if="activeTab === 'join-us'" class="cms-content-section">
          <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Join Us Management</h3>
              <p class="text-sm text-gray-600">Manage recruitment, social, campus, and staff style content</p>
            </div>
            <button
              @click="showJoinUsForm = true"
              class="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              Add New Item
            </button>
          </div>

          <!-- Join Us Content -->
          <div v-if="joinUsItems.length === 0" class="text-center py-12">
            <div class="text-gray-400 mb-4">
              <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">No Join Us Items</h3>
            <p class="text-gray-600 mb-4">Create your first recruitment or staff content to get started</p>
            <button
              @click="showJoinUsForm = true"
              class="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 shadow-lg shadow-blue-500/25"
            >
              Add Join Us Item
            </button>
          </div>

          <!-- Join Us Items Table -->
          <div v-else class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="item in joinUsItems" :key="item.id" class="hover:bg-gray-50">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900">{{ item.title }}</div>
                      <div class="text-sm text-gray-500">{{ item.description }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                            :class="{
                              'bg-blue-100 text-blue-800': item.type === 'campus',
                              'bg-green-100 text-green-800': item.type === 'social',
                              'bg-purple-100 text-purple-800': item.type === 'staff-style'
                            }">
                        {{ item.type }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {{ item.category || '-' }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {{ item.location || '-' }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <button
                        @click="toggleJoinUsStatus(item.id, item.published)"
                        :class="[
                          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                          item.published
                            ? 'bg-green-100 text-green-800 hover:bg-green-200'
                            : 'bg-red-100 text-red-800 hover:bg-red-200'
                        ]"
                      >
                        {{ item.published ? 'Published' : 'Draft' }}
                      </button>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div class="flex space-x-2">
                        <button
                          @click="editJoinUsItem(item)"
                          class="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </button>
                        <button
                          @click="deleteJoinUsItem(item.id)"
                          class="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Party Building Tab -->
        <div v-else-if="activeTab === 'party-building'" class="cms-content-section">
          <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Party Building Management</h3>
              <p class="text-sm text-gray-600">Manage party building articles and content</p>
            </div>
            <button
              @click="showPartyBuildingForm = true"
              class="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500  rounded-lg font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-lg shadow-red-500/25"
            >
              Add New Article
            </button>
          </div>

          <!-- Party Building Content -->
          <div v-if="partyBuildingItems.length === 0" class="text-center py-12">
            <div class="text-gray-400 mb-4">
              <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">No Party Building Articles</h3>
            <p class="text-gray-600 mb-4">Create your first party building article to get started</p>
            <button
              @click="showPartyBuildingForm = true"
              class="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-lg shadow-red-500/25"
            >
              Add Party Building Article
            </button>
          </div>

          <!-- Party Building Items Grid -->
          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="item in partyBuildingItems" :key="item.id" class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div v-if="item.mainImage" class="aspect-video bg-gray-100">
                <img :src="item.mainImage" :alt="item.title" class="w-full h-full object-cover">
              </div>
              <div class="p-4">
                <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2">{{ item.title }}</h3>
                <p class="text-sm text-gray-600 mb-3 line-clamp-3">{{ item.description }}</p>
                <div class="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{{ new Date(item.date).toLocaleDateString() }}</span>
                  <span>{{ item.views }} views</span>
                </div>
                <div class="flex items-center justify-between">
                  <span :class="[
                    'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
                    item.published
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  ]">
                    {{ item.published ? 'Published' : 'Draft' }}
                  </span>
                  <div class="flex space-x-2">
                    <button
                      @click="editPartyBuildingItem(item)"
                      class="text-indigo-600 hover:text-indigo-900 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      @click="deletePartyBuildingItem(item.id)"
                      class="text-red-600 hover:text-red-900 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Development History Tab -->
        <div v-else-if="activeTab === 'development-history'" class="cms-content-section">
          <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Development History Management</h3>
              <p class="text-sm text-gray-600">Manage company development milestones and achievements</p>
            </div>
            <button
              @click="showDevelopmentHistoryForm = true"
              class="px-4 py-2 bg-gradient-to-r from-purple-500 to-violet-500  rounded-lg font-medium hover:from-purple-600 hover:to-violet-600 transition-all duration-200 shadow-lg shadow-purple-500/25"
            >
              Add New Milestone
            </button>
          </div>

          <!-- Development History Content -->
          <div v-if="developmentHistoryItems.length === 0" class="text-center py-12">
            <div class="text-gray-400 mb-4">
              <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">No Development History</h3>
            <p class="text-gray-600 mb-4">Add your first development milestone to get started</p>
            <button
              @click="showDevelopmentHistoryForm = true"
              class="px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl font-medium hover:from-purple-600 hover:to-violet-600 transition-all duration-200 shadow-lg shadow-purple-500/25"
            >
              Add Development Milestone
            </button>
          </div>

          <!-- Development History Timeline -->
          <div v-else class="space-y-6">
            <div v-for="item in developmentHistoryItems" :key="item.id" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <div class="flex items-center space-x-3 mb-3">
                    <div class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {{ item.year }}
                    </div>
                    <span :class="[
                      'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
                      item.published
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    ]">
                      {{ item.published ? 'Published' : 'Draft' }}
                    </span>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
                  <p class="text-gray-600 mb-4">{{ item.description }}</p>
                  <div v-if="item.achievements && item.achievements.length > 0" class="space-y-2">
                    <h4 class="text-sm font-medium text-gray-900">Key Achievements:</h4>
                    <ul class="list-disc list-inside space-y-1">
                      <li v-for="achievement in item.achievements" :key="achievement" class="text-sm text-gray-600">
                        {{ achievement }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="flex space-x-2 ml-4">
                  <button
                    @click="editDevelopmentHistoryItem(item)"
                    class="text-indigo-600 hover:text-indigo-900 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteDevelopmentHistoryItem(item.id)"
                    class="text-red-600 hover:text-red-900 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Collaborative Projects Tab -->
        <div v-else-if="activeTab === 'collaborative-projects'" class="cms-content-section">
          <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Collaborative Projects Management</h3>
              <p class="text-sm text-gray-600">Manage collaborative projects and partnerships</p>
            </div>
            <button
              @click="showCollaborativeProjectsForm = true"
              class="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500  rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg shadow-emerald-500/25"
            >
              Add New Project
            </button>
          </div>

          <!-- Collaborative Projects Content -->
          <div v-if="collaborativeProjectsItems.length === 0" class="text-center py-12">
            <div class="text-gray-400 mb-4">
              <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">No Collaborative Projects</h3>
            <p class="text-gray-600 mb-4">Add your first collaborative project to get started</p>
            <button
              @click="showCollaborativeProjectsForm = true"
              class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg shadow-emerald-500/25"
            >
              Add Collaborative Project
            </button>
          </div>

          <!-- Collaborative Projects Grid -->
          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="item in collaborativeProjectsItems" :key="item.id" class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div v-if="item.image" class="aspect-video bg-gray-100">
                <img :src="item.image" :alt="item.title" class="w-full h-full object-cover">
              </div>
              <div class="p-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                        :class="{
                          'bg-blue-100 text-blue-800': item.type === 'new-materials',
                          'bg-green-100 text-green-800': item.type === 'new-energy',
                          'bg-yellow-100 text-yellow-800': item.type === 'fly-ash',
                          'bg-purple-100 text-purple-800': item.type === 'cooperation'
                        }">
                    {{ item.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) }}
                  </span>
                  <span :class="[
                    'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
                    item.published
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  ]">
                    {{ item.published ? 'Published' : 'Draft' }}
                  </span>
                </div>
                <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2">{{ item.title }}</h3>
                <p class="text-sm text-gray-600 mb-3 line-clamp-3">{{ item.description }}</p>
                <div v-if="item.contactName || item.contactEmail" class="text-xs text-gray-500 mb-3">
                  <div v-if="item.contactName">Contact: {{ item.contactName }}</div>
                  <div v-if="item.contactEmail">{{ item.contactEmail }}</div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="text-xs text-gray-500">
                    {{ new Date(item.createdAt).toLocaleDateString() }}
                  </div>
                  <div class="flex space-x-2">
                    <button
                      @click="editCollaborativeProjectsItem(item)"
                      class="text-indigo-600 hover:text-indigo-900 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      @click="deleteCollaborativeProjectsItem(item.id)"
                      class="text-red-600 hover:text-red-900 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  </div>

  <!-- News Form Modal -->
  <Transition name="modal">
    <div v-if="showNewsForm" class="modal-overlay" @click="showNewsForm = false">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Add News Article</h3>
          <button @click="showNewsForm = false" class="modal-close">
            ×
          </button>
        </div>

        <form @submit.prevent="submitNewsForm" class="modal-form">
          <!-- Language Tabs -->
          <div class="language-tabs">
            <button
              v-for="lang in languages"
              :key="lang.code"
              type="button"
              @click="activeLanguage = lang.code"
              :class="['language-tab', { 'active': activeLanguage === lang.code }]"
            >
              {{ lang.flag }} {{ lang.name }}
            </button>
          </div>

          <!-- English Fields -->
          <div v-show="activeLanguage === 'en'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (English) *</label>
              <div class="input-with-translate">
                <input
                  v-model="newsForm.translations.en.title"
                  type="text"
                  required
                  class="form-input"
                  placeholder="Enter English title"
                  @blur="autoTranslateNews('en', 'title')"
                >
                <button
                  type="button"
                  @click="autoTranslateNews('en', 'title')"
                  class="translate-btn"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Description (English) *</label>
              <div class="input-with-translate">
                <textarea
                  v-model="newsForm.translations.en.description"
                  required
                  rows="3"
                  class="form-textarea"
                  placeholder="Enter English description"
                  @blur="autoTranslateNews('en', 'description')"
                ></textarea>
                <button
                  type="button"
                  @click="autoTranslateNews('en', 'description')"
                  class="translate-btn translate-btn-textarea"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Content (English)</label>
              <textarea
                v-model="newsForm.translations.en.content"
                rows="6"
                class="form-textarea"
                placeholder="Enter English content (HTML supported)"
              ></textarea>
            </div>
          </div>

          <!-- Mongolian Fields -->
          <div v-show="activeLanguage === 'mn'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (Mongolian)</label>
              <div class="input-with-translate">
                <input
                  v-model="newsForm.translations.mn.title"
                  type="text"
                  class="form-input"
                  placeholder="Enter Mongolian title"
                  @blur="autoTranslateNews('mn', 'title')"
                >
                <button
                  type="button"
                  @click="autoTranslateNews('mn', 'title')"
                  class="translate-btn"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Description (Mongolian)</label>
              <div class="input-with-translate">
                <textarea
                  v-model="newsForm.translations.mn.description"
                  rows="3"
                  class="form-textarea"
                  placeholder="Enter Mongolian description"
                  @blur="autoTranslateNews('mn', 'description')"
                ></textarea>
                <button
                  type="button"
                  @click="autoTranslateNews('mn', 'description')"
                  class="translate-btn translate-btn-textarea"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Content (Mongolian)</label>
              <textarea
                v-model="newsForm.translations.mn.content"
                rows="6"
                class="form-textarea"
                placeholder="Enter Mongolian content"
              ></textarea>
            </div>
          </div>

          <!-- Chinese Fields -->
          <div v-show="activeLanguage === 'ch'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (Chinese)</label>
              <div class="input-with-translate">
                <input
                  v-model="newsForm.translations.ch.title"
                  type="text"
                  class="form-input"
                  placeholder="Enter Chinese title"
                  @blur="autoTranslateNews('ch', 'title')"
                >
                <button
                  type="button"
                  @click="autoTranslateNews('ch', 'title')"
                  class="translate-btn"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Description (Chinese)</label>
              <div class="input-with-translate">
                <textarea
                  v-model="newsForm.translations.ch.description"
                  rows="3"
                  class="form-textarea"
                  placeholder="Enter Chinese description"
                  @blur="autoTranslateNews('ch', 'description')"
                ></textarea>
                <button
                  type="button"
                  @click="autoTranslateNews('ch', 'description')"
                  class="translate-btn translate-btn-textarea"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Content (Chinese)</label>
              <textarea
                v-model="newsForm.translations.ch.content"
                rows="6"
                class="form-textarea"
                placeholder="Enter Chinese content"
              ></textarea>
            </div>
          </div>

          <!-- Common Fields -->
          <div class="form-group">
            <label class="form-label">Source</label>
            <input
              v-model="newsForm.source"
              type="text"
              class="form-input"
              placeholder="News source (e.g., Monte Group Press Release)"
            >
          </div>

          <div class="form-group">
            <label class="form-label">Featured Image</label>
            <input
              ref="newsImageInput"
              type="file"
              accept="image/*"
              @change="handleNewsImageUpload"
              class="form-file"
            >
          </div>

          <div class="form-group">
            <label class="form-checkbox">
              <input
                v-model="newsForm.published"
                type="checkbox"
                class="form-checkbox-input"
              >
              <span class="form-checkbox-label">Publish immediately</span>
            </label>
          </div>

          <div class="modal-actions">
            <button
              type="button"
              @click="showNewsForm = false"
              class="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="newsFormLoading"
              class="btn btn-primary"
            >
              {{ newsFormLoading ? 'Creating...' : 'Create News' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>

  <!-- Media Form Modal -->
  <Transition name="modal">
    <div v-if="showMediaForm" class="modal-overlay" @click="showMediaForm = false">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <div class="modal-header-content">
            <h3 class="modal-title">Add Media Material</h3>
            <div class="auto-translate-controls">
              <label class="auto-translate-toggle">
                <input
                  type="checkbox"
                  v-model="autoTranslateEnabled"
                  class="toggle-checkbox"
                >
                <span class="toggle-label">Auto-translate</span>
              </label>
              <span v-if="isAutoTranslating" class="auto-translate-indicator">
                🔄 Translating...
              </span>
            </div>
          </div>
          <button @click="showMediaForm = false" class="modal-close">
            ×
          </button>
        </div>

        <form @submit.prevent="submitMediaForm" class="modal-form">
          <!-- Language Tabs -->
          <div class="language-tabs">
            <button
              v-for="lang in languages"
              :key="lang.code"
              type="button"
              @click="activeMediaLanguage = lang.code"
              :class="['language-tab', { 'active': activeMediaLanguage === lang.code }]"
            >
              {{ lang.flag }} {{ lang.name }}
            </button>
          </div>

          <!-- English Fields -->
          <div v-show="activeMediaLanguage === 'en'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (English) *</label>
              <div class="input-with-translate">
                <input
                  v-model="mediaForm.translations.en.title"
                  type="text"
                  required
                  class="form-input"
                  placeholder="Enter English title"
                  @blur="autoTranslateMedia('en', 'title')"
                >
                <button
                  type="button"
                  @click="autoTranslateMedia('en', 'title')"
                  class="translate-btn"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Description (English)</label>
              <div class="input-with-translate">
                <textarea
                  v-model="mediaForm.translations.en.description"
                  rows="3"
                  class="form-textarea"
                  placeholder="Enter English description"
                  @blur="autoTranslateMedia('en', 'description')"
                ></textarea>
                <button
                  type="button"
                  @click="autoTranslateMedia('en', 'description')"
                  class="translate-btn translate-btn-textarea"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>
          </div>

          <!-- Mongolian Fields -->
          <div v-show="activeMediaLanguage === 'mn'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (Mongolian)</label>
              <div class="input-with-translate">
                <input
                  v-model="mediaForm.translations.mn.title"
                  type="text"
                  class="form-input"
                  placeholder="Enter Mongolian title"
                  @blur="autoTranslateMedia('mn', 'title')"
                >
                <button
                  type="button"
                  @click="autoTranslateMedia('mn', 'title')"
                  class="translate-btn"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Description (Mongolian)</label>
              <div class="input-with-translate">
                <textarea
                  v-model="mediaForm.translations.mn.description"
                  rows="3"
                  class="form-textarea"
                  placeholder="Enter Mongolian description"
                  @blur="autoTranslateMedia('mn', 'description')"
                ></textarea>
                <button
                  type="button"
                  @click="autoTranslateMedia('mn', 'description')"
                  class="translate-btn translate-btn-textarea"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>
          </div>

          <!-- Chinese Fields -->
          <div v-show="activeMediaLanguage === 'ch'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (Chinese)</label>
              <div class="input-with-translate">
                <input
                  v-model="mediaForm.translations.ch.title"
                  type="text"
                  class="form-input"
                  placeholder="Enter Chinese title"
                  @blur="autoTranslateMedia('ch', 'title')"
                >
                <button
                  type="button"
                  @click="autoTranslateMedia('ch', 'title')"
                  class="translate-btn"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Description (Chinese)</label>
              <div class="input-with-translate">
                <textarea
                  v-model="mediaForm.translations.ch.description"
                  rows="3"
                  class="form-textarea"
                  placeholder="Enter Chinese description"
                  @blur="autoTranslateMedia('ch', 'description')"
                ></textarea>
                <button
                  type="button"
                  @click="autoTranslateMedia('ch', 'description')"
                  class="translate-btn translate-btn-textarea"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Media File *</label>
            <input
              ref="mediaFileInput"
              type="file"
              accept="video/*,image/*,.pdf"
              required
              @change="handleMediaFileUpload"
              class="form-file"
            >
            <p class="form-help">Supported: Videos (MP4, WebM), Images (JPG, PNG), PDFs</p>
          </div>

          <div class="form-group">
            <label class="form-checkbox">
              <input
                v-model="mediaForm.published"
                type="checkbox"
                class="form-checkbox-input"
              >
              <span class="form-checkbox-label">Publish immediately</span>
            </label>
          </div>

          <div class="modal-actions">
            <button
              type="button"
              @click="showMediaForm = false"
              class="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="mediaFormLoading"
              class="btn btn-primary btn-success"
            >
              {{ mediaFormLoading ? 'Uploading...' : 'Upload Media' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>

  <!-- News Edit Modal -->
  <Transition name="modal">
    <div v-if="showNewsEditModal" class="modal-overlay" @click="showNewsEditModal = false">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <div class="modal-header-content">
            <h3 class="modal-title">Edit News Group</h3>
            <div class="auto-translate-controls">
              <label class="auto-translate-toggle">
                <input
                  type="checkbox"
                  v-model="autoTranslateEnabled"
                  class="toggle-checkbox"
                >
                <span class="toggle-label">Auto-translate</span>
              </label>
              <span v-if="isAutoTranslating" class="auto-translate-indicator">
                🔄 Translating...
              </span>
            </div>
          </div>
          <button @click="showNewsEditModal = false" class="modal-close">×</button>
        </div>

        <div class="modal-form">
          <div class="language-tabs">
            <button
              v-for="lang in languages"
              :key="lang.code"
              type="button"
              @click="activeLanguage = lang.code"
              :class="['language-tab', { 'active': activeLanguage === lang.code }]"
            >
              {{ lang.flag }} {{ lang.name }}
            </button>
          </div>

          <div v-if="editingNewsGroup" v-for="lang in languages" :key="lang.code" v-show="activeLanguage === lang.code" class="language-section">
            <div class="form-group">
              <label class="form-label">Title ({{ lang.name }})</label>
              <div class="input-with-translate">
                <input
                  v-model="editingNewsGroup.translations[lang.code].title"
                  type="text"
                  class="form-input"
                  :placeholder="`Enter ${lang.name} title`"
                  @blur="autoTranslateEditNews(lang.code, 'title')"
                >
                <button
                  type="button"
                  @click="autoTranslateEditNews(lang.code, 'title')"
                  class="translate-btn"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Description ({{ lang.name }})</label>
              <div class="input-with-translate">
                <textarea
                  v-model="editingNewsGroup.translations[lang.code].description"
                  rows="3"
                  class="form-textarea"
                  :placeholder="`Enter ${lang.name} description`"
                  @blur="autoTranslateEditNews(lang.code, 'description')"
                ></textarea>
                <button
                  type="button"
                  @click="autoTranslateEditNews(lang.code, 'description')"
                  class="translate-btn translate-btn-textarea"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Content ({{ lang.name }})</label>
              <div class="input-with-translate">
                <textarea
                  v-model="editingNewsGroup.translations[lang.code].content"
                  rows="6"
                  class="form-textarea"
                  :placeholder="`Enter ${lang.name} content`"
                  @blur="autoTranslateEditNews(lang.code, 'content')"
                ></textarea>
                <button
                  type="button"
                  @click="autoTranslateEditNews(lang.code, 'content')"
                  class="translate-btn translate-btn-textarea"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>
          </div>

          <div class="modal-actions">
            <button @click="showNewsEditModal = false" class="btn btn-secondary">Cancel</button>
            <button @click="saveNewsGroup" class="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Media Edit Modal -->
  <Transition name="modal">
    <div v-if="showMediaEditModal" class="modal-overlay" @click="showMediaEditModal = false">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <div class="modal-header-content">
            <h3 class="modal-title">Edit Media Group</h3>
            <div class="auto-translate-controls">
              <label class="auto-translate-toggle">
                <input
                  type="checkbox"
                  v-model="autoTranslateEnabled"
                  class="toggle-checkbox"
                >
                <span class="toggle-label">Auto-translate</span>
              </label>
              <span v-if="isAutoTranslating" class="auto-translate-indicator">
                🔄 Translating...
              </span>
            </div>
          </div>
          <button @click="showMediaEditModal = false" class="modal-close">×</button>
        </div>

        <div class="modal-form">
          <div class="language-tabs">
            <button
              v-for="lang in languages"
              :key="lang.code"
              type="button"
              @click="activeEditMediaLanguage = lang.code"
              :class="['language-tab', { 'active': activeEditMediaLanguage === lang.code }]"
            >
              {{ lang.flag }} {{ lang.name }}
            </button>
          </div>

          <div v-if="editingMediaGroup" v-for="lang in languages" :key="lang.code" v-show="activeEditMediaLanguage === lang.code" class="language-section">
            <div class="form-group">
              <label class="form-label">Title ({{ lang.name }})</label>
              <div class="input-with-translate">
                <input
                  v-model="editingMediaGroup.translations[lang.code].title"
                  type="text"
                  class="form-input"
                  :placeholder="`Enter ${lang.name} title`"
                  @blur="autoTranslateEditMedia(lang.code, 'title')"
                >
                <button
                  type="button"
                  @click="autoTranslateEditMedia(lang.code, 'title')"
                  class="translate-btn"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Description ({{ lang.name }})</label>
              <div class="input-with-translate">
                <textarea
                  v-model="editingMediaGroup.translations[lang.code].description"
                  rows="3"
                  class="form-textarea"
                  :placeholder="`Enter ${lang.name} description`"
                  @blur="autoTranslateEditMedia(lang.code, 'description')"
                ></textarea>
                <button
                  type="button"
                  @click="autoTranslateEditMedia(lang.code, 'description')"
                  class="translate-btn translate-btn-textarea"
                  :disabled="isAutoTranslating"
                  title="Auto-translate to other languages"
                >
                  {{ isAutoTranslating ? '🔄' : '🌐' }}
                </button>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Media Info</label>
            <div class="media-info-display">
              <p><strong>Type:</strong> {{ editingMediaGroup?.type?.toUpperCase() }}</p>
              <p><strong>Filename:</strong> {{ editingMediaGroup?.filename }}</p>
              <p><strong>Path:</strong> {{ editingMediaGroup?.path }}</p>
            </div>
          </div>

          <div class="modal-actions">
            <button @click="showMediaEditModal = false" class="btn btn-secondary">Cancel</button>
            <button @click="saveMediaGroup" class="btn btn-primary btn-success">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Join Us Form Modal -->
  <Transition name="modal">
    <div v-if="showJoinUsForm" class="modal-overlay" @click="showJoinUsForm = false">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Add Join Us Item</h3>
          <button @click="showJoinUsForm = false" class="modal-close">×</button>
        </div>
        <form @submit.prevent="submitJoinUsForm" class="modal-form">
          <!-- Language Tabs -->
          <div class="language-tabs">
            <button
              v-for="lang in languages"
              :key="lang.code"
              type="button"
              @click="activeJoinUsLanguage = lang.code"
              :class="['language-tab', { 'active': activeJoinUsLanguage === lang.code }]"
            >
              {{ lang.flag }} {{ lang.name }}
            </button>
          </div>

          <!-- English Fields -->
          <div v-show="activeJoinUsLanguage === 'en'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (English) *</label>
              <input
                v-model="joinUsForm.translations.en.title"
                type="text"
                required
                class="form-input"
                placeholder="Enter English title"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description (English)</label>
              <textarea
                v-model="joinUsForm.translations.en.description"
                rows="3"
                class="form-textarea"
                placeholder="Enter English description"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Requirements (English)</label>
              <textarea
                v-model="joinUsForm.translations.en.requirements"
                rows="3"
                class="form-textarea"
                placeholder="Enter English requirements"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Responsibilities (English)</label>
              <textarea
                v-model="joinUsForm.translations.en.responsibilities"
                rows="3"
                class="form-textarea"
                placeholder="Enter English responsibilities"
              ></textarea>
            </div>
          </div>

          <!-- Mongolian Fields -->
          <div v-show="activeJoinUsLanguage === 'mn'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (Mongolian)</label>
              <input
                v-model="joinUsForm.translations.mn.title"
                type="text"
                class="form-input"
                placeholder="Enter Mongolian title"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description (Mongolian)</label>
              <textarea
                v-model="joinUsForm.translations.mn.description"
                rows="3"
                class="form-textarea"
                placeholder="Enter Mongolian description"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Requirements (Mongolian)</label>
              <textarea
                v-model="joinUsForm.translations.mn.requirements"
                rows="3"
                class="form-textarea"
                placeholder="Enter Mongolian requirements"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Responsibilities (Mongolian)</label>
              <textarea
                v-model="joinUsForm.translations.mn.responsibilities"
                rows="3"
                class="form-textarea"
                placeholder="Enter Mongolian responsibilities"
              ></textarea>
            </div>
          </div>

          <!-- Chinese Fields -->
          <div v-show="activeJoinUsLanguage === 'ch'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (Chinese)</label>
              <input
                v-model="joinUsForm.translations.ch.title"
                type="text"
                class="form-input"
                placeholder="Enter Chinese title"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description (Chinese)</label>
              <textarea
                v-model="joinUsForm.translations.ch.description"
                rows="3"
                class="form-textarea"
                placeholder="Enter Chinese description"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Requirements (Chinese)</label>
              <textarea
                v-model="joinUsForm.translations.ch.requirements"
                rows="3"
                class="form-textarea"
                placeholder="Enter Chinese requirements"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Responsibilities (Chinese)</label>
              <textarea
                v-model="joinUsForm.translations.ch.responsibilities"
                rows="3"
                class="form-textarea"
                placeholder="Enter Chinese responsibilities"
              ></textarea>
            </div>
          </div>

          <!-- Common fields -->
          <div class="form-group">
            <label class="form-label">Slug *</label>
            <input v-model="joinUsForm.slug" type="text" required class="form-input" placeholder="unique-slug">
          </div>
          <div class="form-group">
            <label class="form-label">Type *</label>
            <select v-model="joinUsForm.type" required class="form-input">
              <option value="">Select type</option>
              <option value="campus">Campus</option>
              <option value="social">Social</option>
              <option value="staff-style">Staff Style</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Category</label>
            <input v-model="joinUsForm.category" type="text" class="form-input" placeholder="Job category">
          </div>
          <div class="form-group">
            <label class="form-label">Location</label>
            <input v-model="joinUsForm.location" type="text" class="form-input" placeholder="Location">
          </div>
          <div class="form-group">
            <label class="form-label">Salary</label>
            <input v-model="joinUsForm.salary" type="text" class="form-input" placeholder="Salary range">
          </div>
          <div class="form-group">
            <label class="form-label">Image</label>
            <input
              type="file"
              accept="image/*"
              @change="handleJoinUsImageUpload"
              class="form-file"
            >
            <small class="text-gray-500">Upload an image for this job posting</small>
          </div>
          <div class="form-actions">
            <button type="button" @click="showJoinUsForm = false" class="btn btn-secondary">Cancel</button>
            <button type="submit" class="btn btn-primary" :disabled="joinUsFormLoading">
              {{ joinUsFormLoading ? 'Creating...' : 'Create Item' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>

  <!-- Party Building Form Modal -->
  <Transition name="modal">
    <div v-if="showPartyBuildingForm" class="modal-overlay" @click="showPartyBuildingForm = false">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Add Party Building Article</h3>
          <button @click="showPartyBuildingForm = false" class="modal-close">×</button>
        </div>
        <form @submit.prevent="submitPartyBuildingForm" class="modal-form">
          <!-- Language Tabs -->
          <div class="language-tabs">
            <button
              v-for="lang in languages"
              :key="lang.code"
              type="button"
              @click="activePartyBuildingLanguage = lang.code"
              :class="['language-tab', { 'active': activePartyBuildingLanguage === lang.code }]"
            >
              {{ lang.flag }} {{ lang.name }}
            </button>
          </div>

          <!-- English Fields -->
          <div v-show="activePartyBuildingLanguage === 'en'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (English) *</label>
              <input
                v-model="partyBuildingForm.translations.en.title"
                type="text"
                required
                class="form-input"
                placeholder="Enter English title"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description (English)</label>
              <textarea
                v-model="partyBuildingForm.translations.en.description"
                rows="3"
                class="form-textarea"
                placeholder="Enter English description"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Content (English)</label>
              <textarea
                v-model="partyBuildingForm.translations.en.content"
                rows="5"
                class="form-textarea"
                placeholder="Enter English content"
              ></textarea>
            </div>
          </div>

          <!-- Mongolian Fields -->
          <div v-show="activePartyBuildingLanguage === 'mn'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (Mongolian)</label>
              <input
                v-model="partyBuildingForm.translations.mn.title"
                type="text"
                class="form-input"
                placeholder="Enter Mongolian title"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description (Mongolian)</label>
              <textarea
                v-model="partyBuildingForm.translations.mn.description"
                rows="3"
                class="form-textarea"
                placeholder="Enter Mongolian description"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Content (Mongolian)</label>
              <textarea
                v-model="partyBuildingForm.translations.mn.content"
                rows="5"
                class="form-textarea"
                placeholder="Enter Mongolian content"
              ></textarea>
            </div>
          </div>

          <!-- Chinese Fields -->
          <div v-show="activePartyBuildingLanguage === 'ch'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (Chinese)</label>
              <input
                v-model="partyBuildingForm.translations.ch.title"
                type="text"
                class="form-input"
                placeholder="Enter Chinese title"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description (Chinese)</label>
              <textarea
                v-model="partyBuildingForm.translations.ch.description"
                rows="3"
                class="form-textarea"
                placeholder="Enter Chinese description"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Content (Chinese)</label>
              <textarea
                v-model="partyBuildingForm.translations.ch.content"
                rows="5"
                class="form-textarea"
                placeholder="Enter Chinese content"
              ></textarea>
            </div>
          </div>

          <!-- Common fields -->
          <div class="form-group">
            <label class="form-label">Slug *</label>
            <input v-model="partyBuildingForm.slug" type="text" required class="form-input" placeholder="unique-slug">
          </div>
          <div class="form-group">
            <label class="form-label">Main Image</label>
            <input
              type="file"
              accept="image/*"
              @change="handlePartyBuildingMainImageUpload"
              class="form-file"
            >
            <small class="text-gray-500">Upload the main image for this article</small>
          </div>
          <div class="form-group">
            <label class="form-label">Content Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              @change="handlePartyBuildingContentImagesUpload"
              class="form-file"
            >
            <small class="text-gray-500">Upload additional images for the article content</small>
          </div>
          <div class="form-group">
            <label class="form-label">Source</label>
            <input v-model="partyBuildingForm.source" type="text" class="form-input" placeholder="Source">
          </div>
          <div class="form-actions">
            <button type="button" @click="showPartyBuildingForm = false" class="btn btn-secondary">Cancel</button>
            <button type="submit" class="btn btn-primary" :disabled="partyBuildingFormLoading">
              {{ partyBuildingFormLoading ? 'Creating...' : 'Create Article' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>

  <!-- Development History Form Modal -->
  <Transition name="modal">
    <div v-if="showDevelopmentHistoryForm" class="modal-overlay" @click="showDevelopmentHistoryForm = false">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Add Development Milestone</h3>
          <button @click="showDevelopmentHistoryForm = false" class="modal-close">×</button>
        </div>
        <form @submit.prevent="submitDevelopmentHistoryForm" class="modal-form">
          <!-- Language Tabs -->
          <div class="language-tabs">
            <button
              v-for="lang in languages"
              :key="lang.code"
              type="button"
              @click="activeDevelopmentHistoryLanguage = lang.code"
              :class="['language-tab', { 'active': activeDevelopmentHistoryLanguage === lang.code }]"
            >
              {{ lang.flag }} {{ lang.name }}
            </button>
          </div>

          <!-- English Fields -->
          <div v-show="activeDevelopmentHistoryLanguage === 'en'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (English) *</label>
              <input
                v-model="developmentHistoryForm.translations.en.title"
                type="text"
                required
                class="form-input"
                placeholder="Enter English title"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description (English) *</label>
              <textarea
                v-model="developmentHistoryForm.translations.en.description"
                required
                rows="3"
                class="form-textarea"
                placeholder="Enter English description"
              ></textarea>
            </div>
          </div>

          <!-- Mongolian Fields -->
          <div v-show="activeDevelopmentHistoryLanguage === 'mn'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (Mongolian)</label>
              <input
                v-model="developmentHistoryForm.translations.mn.title"
                type="text"
                class="form-input"
                placeholder="Enter Mongolian title"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description (Mongolian)</label>
              <textarea
                v-model="developmentHistoryForm.translations.mn.description"
                rows="3"
                class="form-textarea"
                placeholder="Enter Mongolian description"
              ></textarea>
            </div>
          </div>

          <!-- Chinese Fields -->
          <div v-show="activeDevelopmentHistoryLanguage === 'ch'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (Chinese)</label>
              <input
                v-model="developmentHistoryForm.translations.ch.title"
                type="text"
                class="form-input"
                placeholder="Enter Chinese title"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description (Chinese)</label>
              <textarea
                v-model="developmentHistoryForm.translations.ch.description"
                rows="3"
                class="form-textarea"
                placeholder="Enter Chinese description"
              ></textarea>
            </div>
          </div>

          <!-- Common fields -->
          <div class="form-group">
            <label class="form-label">Year *</label>
            <input v-model="developmentHistoryForm.year" type="number" required class="form-input" placeholder="2024" min="1900" :max="new Date().getFullYear() + 10">
          </div>
          <div class="form-group">
            <label class="form-label">Achievements (one per line)</label>
            <textarea v-model="achievementsText" class="form-input" rows="5" placeholder="Achievement 1&#10;Achievement 2&#10;Achievement 3"></textarea>
          </div>
          <div class="form-actions">
            <button type="button" @click="showDevelopmentHistoryForm = false" class="btn btn-secondary">Cancel</button>
            <button type="submit" class="btn btn-primary" :disabled="developmentHistoryFormLoading">
              {{ developmentHistoryFormLoading ? 'Creating...' : 'Create Milestone' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>

  <!-- Collaborative Projects Form Modal -->
  <Transition name="modal">
    <div v-if="showCollaborativeProjectsForm" class="modal-overlay" @click="showCollaborativeProjectsForm = false">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Add Collaborative Project</h3>
          <button @click="showCollaborativeProjectsForm = false" class="modal-close">×</button>
        </div>
        <form @submit.prevent="submitCollaborativeProjectsForm" class="modal-form">
          <!-- Language Tabs -->
          <div class="language-tabs">
            <button
              v-for="lang in languages"
              :key="lang.code"
              type="button"
              @click="activeCollaborativeProjectsLanguage = lang.code"
              :class="['language-tab', { 'active': activeCollaborativeProjectsLanguage === lang.code }]"
            >
              {{ lang.flag }} {{ lang.name }}
            </button>
          </div>

          <!-- English Fields -->
          <div v-show="activeCollaborativeProjectsLanguage === 'en'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (English) *</label>
              <input
                v-model="collaborativeProjectsForm.translations.en.title"
                type="text"
                required
                class="form-input"
                placeholder="Enter English title"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description (English)</label>
              <textarea
                v-model="collaborativeProjectsForm.translations.en.description"
                rows="3"
                class="form-textarea"
                placeholder="Enter English description"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Content (English)</label>
              <textarea
                v-model="collaborativeProjectsForm.translations.en.content"
                rows="5"
                class="form-textarea"
                placeholder="Enter English content"
              ></textarea>
            </div>
          </div>

          <!-- Mongolian Fields -->
          <div v-show="activeCollaborativeProjectsLanguage === 'mn'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (Mongolian)</label>
              <input
                v-model="collaborativeProjectsForm.translations.mn.title"
                type="text"
                class="form-input"
                placeholder="Enter Mongolian title"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description (Mongolian)</label>
              <textarea
                v-model="collaborativeProjectsForm.translations.mn.description"
                rows="3"
                class="form-textarea"
                placeholder="Enter Mongolian description"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Content (Mongolian)</label>
              <textarea
                v-model="collaborativeProjectsForm.translations.mn.content"
                rows="5"
                class="form-textarea"
                placeholder="Enter Mongolian content"
              ></textarea>
            </div>
          </div>

          <!-- Chinese Fields -->
          <div v-show="activeCollaborativeProjectsLanguage === 'ch'" class="language-section">
            <div class="form-group">
              <label class="form-label">Title (Chinese)</label>
              <input
                v-model="collaborativeProjectsForm.translations.ch.title"
                type="text"
                class="form-input"
                placeholder="Enter Chinese title"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description (Chinese)</label>
              <textarea
                v-model="collaborativeProjectsForm.translations.ch.description"
                rows="3"
                class="form-textarea"
                placeholder="Enter Chinese description"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Content (Chinese)</label>
              <textarea
                v-model="collaborativeProjectsForm.translations.ch.content"
                rows="5"
                class="form-textarea"
                placeholder="Enter Chinese content"
              ></textarea>
            </div>
          </div>

          <!-- Common fields -->
          <div class="form-group">
            <label class="form-label">Slug *</label>
            <input v-model="collaborativeProjectsForm.slug" type="text" required class="form-input" placeholder="unique-slug">
          </div>
          <div class="form-group">
            <label class="form-label">Type *</label>
            <select v-model="collaborativeProjectsForm.type" required class="form-input">
              <option value="">Select type</option>
              <option value="new-materials">New Materials</option>
              <option value="new-energy">New Energy</option>
              <option value="fly-ash">Fly Ash</option>
              <option value="cooperation">Cooperation</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Contact Email</label>
            <input v-model="collaborativeProjectsForm.contactEmail" type="email" class="form-input" placeholder="contact@example.com">
          </div>
          <div class="form-group">
            <label class="form-label">Contact Name</label>
            <input v-model="collaborativeProjectsForm.contactName" type="text" class="form-input" placeholder="Contact person">
          </div>
          <div class="form-group">
            <label class="form-label">Project Image</label>
            <input
              type="file"
              accept="image/*"
              @change="handleCollaborativeProjectsImageUpload"
              class="form-file"
            >
            <small class="text-gray-500">Upload an image for this project</small>
          </div>
          <div class="form-actions">
            <button type="button" @click="showCollaborativeProjectsForm = false" class="btn btn-secondary">Cancel</button>
            <button type="submit" class="btn btn-primary" :disabled="collaborativeProjectsFormLoading">
              {{ collaborativeProjectsFormLoading ? 'Creating...' : 'Create Project' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>

  <!-- Join Us Edit Modal -->
  <Transition name="modal">
    <div v-if="showJoinUsEditModal" class="modal-overlay" @click="showJoinUsEditModal = false">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Edit Join Us Item</h3>
          <button @click="showJoinUsEditModal = false" class="modal-close">×</button>
        </div>

        <div class="modal-form">
          <!-- Language Tabs -->
          <div class="language-tabs">
            <button
              v-for="lang in languages"
              :key="lang.code"
              type="button"
              @click="activeJoinUsLanguage = lang.code"
              :class="['language-tab', { 'active': activeJoinUsLanguage === lang.code }]"
            >
              {{ lang.flag }} {{ lang.name }}
            </button>
          </div>

          <!-- Language sections for editing -->
          <div v-for="lang in languages" :key="lang.code" v-show="activeJoinUsLanguage === lang.code" class="language-section">
            <div class="form-group">
              <label class="form-label">Title ({{ lang.name }})</label>
              <input
                v-model="editingJoinUsItem.translations[lang.code].title"
                type="text"
                class="form-input"
                :placeholder="`Enter ${lang.name} title`"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description ({{ lang.name }})</label>
              <textarea
                v-model="editingJoinUsItem.translations[lang.code].description"
                rows="3"
                class="form-textarea"
                :placeholder="`Enter ${lang.name} description`"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Requirements ({{ lang.name }})</label>
              <textarea
                v-model="editingJoinUsItem.translations[lang.code].requirements"
                rows="3"
                class="form-textarea"
                :placeholder="`Enter ${lang.name} requirements`"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Responsibilities ({{ lang.name }})</label>
              <textarea
                v-model="editingJoinUsItem.translations[lang.code].responsibilities"
                rows="3"
                class="form-textarea"
                :placeholder="`Enter ${lang.name} responsibilities`"
              ></textarea>
            </div>
          </div>

          <!-- Common fields -->
          <div class="form-group">
            <label class="form-label">Slug</label>
            <input v-model="editingJoinUsItem.slug" type="text" class="form-input" placeholder="unique-slug">
          </div>
          <div class="form-group">
            <label class="form-label">Type</label>
            <select v-model="editingJoinUsItem.type" class="form-input">
              <option value="campus">Campus</option>
              <option value="social">Social</option>
              <option value="staff-style">Staff Style</option>
            </select>
          </div>

          <div class="modal-actions">
            <button @click="showJoinUsEditModal = false" class="btn btn-secondary">Cancel</button>
            <button @click="saveJoinUsItem" class="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Party Building Edit Modal -->
  <Transition name="modal">
    <div v-if="showPartyBuildingEditModal && editingPartyBuildingItem?.translations" class="modal-overlay" @click="showPartyBuildingEditModal = false">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Edit Party Building Item</h3>
          <button @click="showPartyBuildingEditModal = false" class="modal-close">×</button>
        </div>

        <div class="modal-form">
          <!-- Language Tabs -->
          <div class="language-tabs">
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="activePartyBuildingLanguage = lang.code"
              :class="['language-tab', { active: activePartyBuildingLanguage === lang.code }]"
            >
              {{ lang.flag }} {{ lang.name }}
            </button>
          </div>

          <!-- Language sections for editing -->
          <div v-for="lang in languages" :key="lang.code" v-show="activePartyBuildingLanguage === lang.code" class="language-section">
            <div class="form-group">
              <label class="form-label">Title ({{ lang.name }})</label>
              <input
                v-model="editingPartyBuildingItem.translations[lang.code].title"
                type="text"
                class="form-input"
                :placeholder="`Enter ${lang.name} title`"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description ({{ lang.name }})</label>
              <textarea
                v-model="editingPartyBuildingItem.translations[lang.code].description"
                rows="3"
                class="form-textarea"
                :placeholder="`Enter ${lang.name} description`"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Content ({{ lang.name }})</label>
              <textarea
                v-model="editingPartyBuildingItem.translations[lang.code].content"
                rows="5"
                class="form-textarea"
                :placeholder="`Enter ${lang.name} content`"
              ></textarea>
            </div>
          </div>

          <!-- Common fields -->
          <div class="form-group">
            <label class="form-label">Base Slug</label>
            <input v-model="editingPartyBuildingItem.baseSlug" type="text" class="form-input" placeholder="unique-slug">
          </div>
          <div class="form-group">
            <label class="form-label">Source</label>
            <input v-model="editingPartyBuildingItem.source" type="text" class="form-input" placeholder="Source">
          </div>
          <div class="form-group">
            <label class="form-label">Main Image URL</label>
            <input v-model="editingPartyBuildingItem.mainImage" type="text" class="form-input" placeholder="Image URL">
          </div>

          <div class="modal-actions">
            <button @click="showPartyBuildingEditModal = false" class="btn btn-secondary">Cancel</button>
            <button @click="savePartyBuildingItem" class="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Development History Edit Modal -->
  <Transition name="modal">
    <div v-if="showDevelopmentHistoryEditModal && editingDevelopmentHistoryItem?.translations" class="modal-overlay" @click="showDevelopmentHistoryEditModal = false">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Edit Development History Item</h3>
          <button @click="showDevelopmentHistoryEditModal = false" class="modal-close">×</button>
        </div>

        <div class="modal-form">
          <!-- Language Tabs -->
          <div class="language-tabs">
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="activeDevelopmentHistoryLanguage = lang.code"
              :class="['language-tab', { active: activeDevelopmentHistoryLanguage === lang.code }]"
            >
              {{ lang.flag }} {{ lang.name }}
            </button>
          </div>

          <!-- Language sections for editing -->
          <div v-for="lang in languages" :key="lang.code" v-show="activeDevelopmentHistoryLanguage === lang.code" class="language-section">
            <div class="form-group">
              <label class="form-label">Title ({{ lang.name }})</label>
              <input
                v-model="editingDevelopmentHistoryItem.translations[lang.code].title"
                type="text"
                class="form-input"
                :placeholder="`Enter ${lang.name} title`"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description ({{ lang.name }})</label>
              <textarea
                v-model="editingDevelopmentHistoryItem.translations[lang.code].description"
                rows="5"
                class="form-textarea"
                :placeholder="`Enter ${lang.name} description`"
              ></textarea>
            </div>
          </div>

          <!-- Common fields -->
          <div class="form-group">
            <label class="form-label">Year</label>
            <input v-model="editingDevelopmentHistoryItem.year" type="number" class="form-input" placeholder="2024">
          </div>

          <div class="modal-actions">
            <button @click="showDevelopmentHistoryEditModal = false" class="btn btn-secondary">Cancel</button>
            <button @click="saveDevelopmentHistoryItem" class="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Collaborative Projects Edit Modal -->
  <Transition name="modal">
    <div v-if="showCollaborativeProjectsEditModal && editingCollaborativeProjectsItem?.translations" class="modal-overlay" @click="showCollaborativeProjectsEditModal = false">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Edit Collaborative Projects Item</h3>
          <button @click="showCollaborativeProjectsEditModal = false" class="modal-close">×</button>
        </div>

        <div class="modal-form">
          <!-- Language Tabs -->
          <div class="language-tabs">
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="activeCollaborativeProjectsLanguage = lang.code"
              :class="['language-tab', { active: activeCollaborativeProjectsLanguage === lang.code }]"
            >
              {{ lang.flag }} {{ lang.name }}
            </button>
          </div>

          <!-- Language sections for editing -->
          <div v-for="lang in languages" :key="lang.code" v-show="activeCollaborativeProjectsLanguage === lang.code" class="language-section">
            <div class="form-group">
              <label class="form-label">Title ({{ lang.name }})</label>
              <input
                v-model="editingCollaborativeProjectsItem.translations[lang.code].title"
                type="text"
                class="form-input"
                :placeholder="`Enter ${lang.name} title`"
              >
            </div>

            <div class="form-group">
              <label class="form-label">Description ({{ lang.name }})</label>
              <textarea
                v-model="editingCollaborativeProjectsItem.translations[lang.code].description"
                rows="3"
                class="form-textarea"
                :placeholder="`Enter ${lang.name} description`"
              ></textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Content ({{ lang.name }})</label>
              <textarea
                v-model="editingCollaborativeProjectsItem.translations[lang.code].content"
                rows="5"
                class="form-textarea"
                :placeholder="`Enter ${lang.name} content`"
              ></textarea>
            </div>
          </div>

          <!-- Common fields -->
          <div class="form-group">
            <label class="form-label">Base Slug</label>
            <input v-model="editingCollaborativeProjectsItem.baseSlug" type="text" class="form-input" placeholder="unique-slug">
          </div>
          <div class="form-group">
            <label class="form-label">Type</label>
            <input v-model="editingCollaborativeProjectsItem.type" type="text" class="form-input" placeholder="Project Type">
          </div>
          <div class="form-group">
            <label class="form-label">Contact Name</label>
            <input v-model="editingCollaborativeProjectsItem.contactName" type="text" class="form-input" placeholder="Contact Name">
          </div>
          <div class="form-group">
            <label class="form-label">Contact Email</label>
            <input v-model="editingCollaborativeProjectsItem.contactEmail" type="email" class="form-input" placeholder="Contact Email">
          </div>

          <div class="modal-actions">
            <button @click="showCollaborativeProjectsEditModal = false" class="btn btn-secondary">Cancel</button>
            <button @click="saveCollaborativeProjectsItem" class="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>

</template>

<script setup>
// Use admin layout
definePageMeta({
  layout: 'admin'
})

const activeTab = ref('translations')
const searchQuery = ref('')
const searchType = ref('all') // 'all', 'keys', 'values'
const translations = ref([])
const loading = ref(false)
const images = ref([])
const videos = ref([])
const newsItems = ref([])
const mediaItems = ref([])
const joinUsItems = ref([])
const partyBuildingItems = ref([])
const developmentHistoryItems = ref([])
const collaborativeProjectsItems = ref([])
const showNewsForm = ref(false)
const showMediaForm = ref(false)
const showJoinUsForm = ref(false)
const showPartyBuildingForm = ref(false)
const showDevelopmentHistoryForm = ref(false)
const showCollaborativeProjectsForm = ref(false)
const showNewsEditModal = ref(false)
const showMediaEditModal = ref(false)
const showJoinUsEditModal = ref(false)
const showPartyBuildingEditModal = ref(false)
const showDevelopmentHistoryEditModal = ref(false)
const showCollaborativeProjectsEditModal = ref(false)
const editingNewsGroup = ref(null)
const editingMediaGroup = ref(null)
const editingJoinUsItem = ref(null)
const editingPartyBuildingItem = ref(null)
const editingDevelopmentHistoryItem = ref(null)
const editingCollaborativeProjectsItem = ref(null)
const mediaFilter = ref('all')
const newsFormLoading = ref(false)
const mediaFormLoading = ref(false)
const joinUsFormLoading = ref(false)
const partyBuildingFormLoading = ref(false)
const developmentHistoryFormLoading = ref(false)
const collaborativeProjectsFormLoading = ref(false)
const activeLanguage = ref('en')
const activeMediaLanguage = ref('en')
const activeEditLanguage = ref('en')
const activeEditMediaLanguage = ref('en')
const activeJoinUsLanguage = ref('en')
const activePartyBuildingLanguage = ref('en')
const activeDevelopmentHistoryLanguage = ref('en')
const activeCollaborativeProjectsLanguage = ref('en')

// Auto-translation functionality
const { autoTranslate, smartTranslate, detectLanguage } = useTranslationEngine()
const isAutoTranslating = ref(false)
const autoTranslateEnabled = ref(true)

// Language configuration
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'mn', name: 'Mongolian', flag: '🇲🇳' },
  { code: 'ch', name: 'Chinese', flag: '🇨🇳' }
]

// Form data with translations
const newsForm = ref({
  translations: {
    en: { title: '', description: '', content: '' },
    mn: { title: '', description: '', content: '' },
    ch: { title: '', description: '', content: '' }
  },
  source: '',
  published: true
})

const mediaForm = ref({
  translations: {
    en: { title: '', description: '' },
    mn: { title: '', description: '' },
    ch: { title: '', description: '' }
  },
  published: true
})

// Join Us form
const joinUsForm = ref({
  translations: {
    en: { title: '', description: '', requirements: '', responsibilities: '' },
    mn: { title: '', description: '', requirements: '', responsibilities: '' },
    ch: { title: '', description: '', requirements: '', responsibilities: '' }
  },
  slug: '',
  type: '',
  category: '',
  location: '',
  salary: '',
  contact: '',
  contactNumber: '',
  image: '',
  published: true
})

// Party Building form
const partyBuildingForm = ref({
  translations: {
    en: { title: '', description: '', content: '' },
    mn: { title: '', description: '', content: '' },
    ch: { title: '', description: '', content: '' }
  },
  slug: '',
  mainImage: '',
  contentImages: '',
  source: '',
  published: true
})

// Development History form
const developmentHistoryForm = ref({
  translations: {
    en: { title: '', description: '' },
    mn: { title: '', description: '' },
    ch: { title: '', description: '' }
  },
  year: new Date().getFullYear(),
  achievements: [],
  published: true
})

// Collaborative Projects form
const collaborativeProjectsForm = ref({
  translations: {
    en: { title: '', description: '', content: '' },
    mn: { title: '', description: '', content: '' },
    ch: { title: '', description: '', content: '' }
  },
  slug: '',
  type: '',
  image: '',
  contactEmail: '',
  contactPhone: '',
  contactName: '',
  address: '',
  published: true
})

// Helper for achievements text area
const achievementsText = ref('')

const newsImageFile = ref(null)
const mediaFile = ref(null)
const joinUsImageFile = ref(null)
const partyBuildingMainImageFile = ref(null)
const partyBuildingContentImagesFiles = ref([])
const collaborativeProjectsImageFile = ref(null)
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

// Filtered media items based on type
const filteredMediaItems = computed(() => {
  if (mediaFilter.value === 'all') {
    return mediaItems.value
  }
  return mediaItems.value.filter(item => item.type === mediaFilter.value)
})

// Group news items by slug for multi-language display
const groupedNews = computed(() => {
  const groups = {}

  newsItems.value.forEach(news => {
    if (!groups[news.slug]) {
      groups[news.slug] = {
        slug: news.slug,
        mainTitle: news.title,
        date: news.date,
        source: news.source,
        totalViews: 0,
        translations: []
      }
    }

    groups[news.slug].translations.push(news)
    groups[news.slug].totalViews += news.views || 0

    // Use the first English title as main title, fallback to first available
    if (news.locale === 'en' || !groups[news.slug].mainTitle) {
      groups[news.slug].mainTitle = news.title
    }
  })

  return Object.values(groups).sort((a, b) => new Date(b.date) - new Date(a.date))
})

// Group media items by original filename for multi-language display
const groupedMedia = computed(() => {
  const groups = {}

  mediaItems.value.forEach(media => {
    const baseKey = media.originalName || media.filename
    if (!groups[baseKey]) {
      groups[baseKey] = {
        key: baseKey,
        type: media.type,
        mainTitle: media.title,
        createdAt: media.createdAt,
        translations: []
      }
    }

    groups[baseKey].translations.push(media)
  })

  return Object.values(groups).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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

// Helper functions for language display
function getLanguageFlag(locale) {
  const flags = {
    'en': '🇺🇸',
    'mn': '🇲🇳',
    'ch': '🇨🇳'
  }
  return flags[locale] || '🌐'
}

function getLanguageName(locale) {
  const names = {
    'en': 'English',
    'mn': 'Mongolian',
    'ch': 'Chinese'
  }
  return names[locale] || locale.toUpperCase()
}

// News group management functions
function editNewsGroup(group) {
  console.log('Editing group:', group)
  
  // Handle both grouped and flat news structures
  const translations = group.translations || []
  
  editingNewsGroup.value = {
    slug: group.slug,
    translations: {
      en: translations.find(t => t.locale === 'en') || { locale: 'en', title: '', description: '', content: '' },
      mn: translations.find(t => t.locale === 'mn') || { locale: 'mn', title: '', description: '', content: '' },
      ch: translations.find(t => t.locale === 'ch') || { locale: 'ch', title: '', description: '', content: '' }
    }
  }
  showNewsEditModal.value = true
}

async function saveNewsGroup() {
  if (!editingNewsGroup.value) return
  
  try {
    const promises = []
    
    for (const [locale, translation] of Object.entries(editingNewsGroup.value.translations)) {
      if (translation.title && translation.title.trim()) {
        const newsData = {
          title: translation.title,
          description: translation.description || translation.title,
          content: translation.content || '',
          slug: editingNewsGroup.value.slug,
          locale: locale,
          published: true
        }
        
        if (translation.id) {
          promises.push($fetch(`/api/news/${translation.id}`, {
            method: 'PUT',
            body: newsData
          }))
        } else {
          const formData = new FormData()
          formData.append('data', JSON.stringify(newsData))
          
          promises.push($fetch('/api/news', {
            method: 'POST',
            body: formData
          }))
        }
      }
    }
    
    if (promises.length > 0) {
      await Promise.all(promises)
      await loadNews()
      showNewsEditModal.value = false
      alert('News group updated successfully!')
    } else {
      alert('Please fill in at least one title')
    }
  } catch (error) {
    console.error('Failed to save news group:', error)
    alert('Failed to save news group')
  }
}

function editSingleNews(news) {
  // Find all news items with the same slug
  const relatedNews = newsItems.value.filter(item => item.slug === news.slug)

  // Create editing structure
  editingNewsGroup.value = {
    slug: news.slug,
    translations: {
      en: relatedNews.find(n => n.locale === 'en') || { locale: 'en', title: '', description: '', content: '' },
      mn: relatedNews.find(n => n.locale === 'mn') || { locale: 'mn', title: '', description: '', content: '' },
      ch: relatedNews.find(n => n.locale === 'ch') || { locale: 'ch', title: '', description: '', content: '' }
    }
  }

  activeEditLanguage.value = 'en'
  showNewsEditModal.value = true
}

async function deleteNewsGroup(slug) {
  if (!confirm('Are you sure you want to delete all translations of this news article?')) return

  try {
    // Find all news items with this slug and delete them
    const newsToDelete = newsItems.value.filter(news => news.slug === slug)
    const deletePromises = newsToDelete.map(news =>
      $fetch(`/api/news/${news.id}`, { method: 'DELETE' })
    )

    await Promise.all(deletePromises)
    await loadNews() // Reload news list

    alert(`Deleted ${newsToDelete.length} news translations successfully!`)
  } catch (error) {
    console.error('Failed to delete news group:', error)
    alert('Failed to delete news group')
  }
}

// Media group management functions
function editMediaGroup(group) {
  editingMediaGroup.value = {
    key: group.key,
    type: group.type,
    filename: group.filename,
    path: group.path,
    translations: {
      en: group.translations.en || { locale: 'en', title: '', description: '' },
      mn: group.translations.mn || { locale: 'mn', title: '', description: '' },
      ch: group.translations.ch || { locale: 'ch', title: '', description: '' }
    }
  }

  activeEditMediaLanguage.value = 'en'
  showMediaEditModal.value = true
}

function editSingleMedia(media) {
  // Find all media items with the same originalName or filename
  const groupKey = media.originalName || media.filename
  const relatedMedia = mediaItems.value.filter(item =>
    (item.originalName || item.filename) === groupKey
  )

  // Create editing structure
  editingMediaGroup.value = {
    key: groupKey,
    type: media.type,
    filename: media.filename,
    path: media.path,
    translations: {
      en: relatedMedia.find(m => m.locale === 'en') || { locale: 'en', title: '', description: '' },
      mn: relatedMedia.find(m => m.locale === 'mn') || { locale: 'mn', title: '', description: '' },
      ch: relatedMedia.find(m => m.locale === 'ch') || { locale: 'ch', title: '', description: '' }
    }
  }

  activeEditMediaLanguage.value = 'en'
  showMediaEditModal.value = true
}

async function saveMediaGroup() {
  if (!editingMediaGroup.value) return

  try {
    const promises = []

    // Update or create media items for each language that has a title
    for (const [locale, translation] of Object.entries(editingMediaGroup.value.translations)) {
      if (translation.title && translation.title.trim()) {
        if (translation.id) {
          // Update existing media item
          promises.push($fetch(`/api/media-materials/${translation.id}`, {
            method: 'PUT',
            body: {
              title: translation.title,
              description: translation.description || ''
            }
          }))
        } else {
          // Create new media item (this shouldn't happen in edit mode, but just in case)
          promises.push($fetch('/api/media-materials', {
            method: 'POST',
            body: {
              title: translation.title,
              description: translation.description || '',
              type: editingMediaGroup.value.type,
              filename: editingMediaGroup.value.filename,
              originalName: editingMediaGroup.value.key,
              path: editingMediaGroup.value.path,
              locale: locale,
              published: true
            }
          }))
        }
      }
    }

    if (promises.length > 0) {
      await Promise.all(promises)
      await loadMediaMaterials()
      showMediaEditModal.value = false
      alert('Media group updated successfully!')
    } else {
      alert('Please fill in at least one title')
    }
  } catch (error) {
    console.error('Failed to save media group:', error)
    alert('Failed to save media group')
  }
}

async function deleteMediaGroup(key) {
  if (!confirm('Are you sure you want to delete all translations of this media item?')) return

  try {
    // Find all media items with this key and delete them
    const mediaToDelete = mediaItems.value.filter(media =>
      (media.originalName || media.filename) === key
    )
    const deletePromises = mediaToDelete.map(media =>
      $fetch(`/api/media-materials/${media.id}`, { method: 'DELETE' })
    )

    await Promise.all(deletePromises)
    await loadMediaMaterials() // Reload media list

    alert(`Deleted ${mediaToDelete.length} media translations successfully!`)
  } catch (error) {
    console.error('Failed to delete media group:', error)
    alert('Failed to delete media group')
  }
}

// News Management Functions
async function loadNews() {
  try {
    // Fetch all locales like static text translations
    const promises = languages.map(lang =>
      $fetch('/api/news', {
        params: {
          locale: lang.code,
          published: false, // Load all including unpublished
          pageSize: 100
        }
      })
    )

    const responses = await Promise.all(promises)
    console.log('News API responses for all locales:', responses)

    // Combine all language results
    const allNews = []
    responses.forEach((response, index) => {
      if (response && response.data && Array.isArray(response.data)) {
        console.log(`Adding ${response.data.length} news items for ${languages[index].code}`)
        allNews.push(...response.data)
      }
    })

    newsItems.value = allNews
    console.log('Total loaded news items:', allNews.length)
  } catch (error) {
    console.error('Failed to load news:', error)
    newsItems.value = []
  }
}

function editNews(news) {
  // TODO: Implement news editing modal
  console.log('Edit news:', news)
}

async function deleteNews(id) {
  if (!confirm('Are you sure you want to delete this news article?')) return

  try {
    await $fetch(`/api/news/${id}`, { method: 'DELETE' })
    await loadNews() // Reload news list
  } catch (error) {
    console.error('Failed to delete news:', error)
    alert('Failed to delete news article')
  }
}

// Media Management Functions
async function loadMediaMaterials() {
  try {
    // Fetch all locales like static text translations
    const promises = languages.map(lang =>
      $fetch('/api/media-materials', {
        params: {
          locale: lang.code,
          published: false, // Load all including unpublished
          pageSize: 100
        }
      })
    )

    const responses = await Promise.all(promises)
    console.log('Media API responses for all locales:', responses)

    // Combine all language results
    const allMedia = []
    responses.forEach((response, index) => {
      if (response && response.data && Array.isArray(response.data)) {
        console.log(`Adding ${response.data.length} media items for ${languages[index].code}`)
        allMedia.push(...response.data)
      }
    })

    mediaItems.value = allMedia
    console.log('Total loaded media items:', allMedia.length)
  } catch (error) {
    console.error('Failed to load media materials:', error)
    mediaItems.value = []
  }
}

function editMedia(media) {
  // TODO: Implement media editing modal
  console.log('Edit media:', media)
}

async function deleteMedia(id) {
  if (!confirm('Are you sure you want to delete this media item?')) return

  try {
    await $fetch(`/api/media-materials/${id}`, { method: 'DELETE' })
    await loadMediaMaterials() // Reload media list
  } catch (error) {
    console.error('Failed to delete media item:', error)
    alert('Failed to delete media item')
  }
}

// Utility function for date formatting
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// Auto-translation functions
async function autoFillTranslations(sourceText, sourceLang, targetObject, fieldName) {
  if (!sourceText || !sourceText.trim() || !autoTranslateEnabled.value) return

  isAutoTranslating.value = true

  try {
    const translations = await autoTranslate(sourceText, sourceLang, ['en', 'mn', 'ch'])

    // Fill in the translations for other languages
    for (const [lang, translatedText] of Object.entries(translations)) {
      if (lang !== sourceLang && translatedText && targetObject[lang]) {
        // Only auto-fill if the field is empty or user confirms
        if (!targetObject[lang][fieldName] || targetObject[lang][fieldName].trim() === '') {
          targetObject[lang][fieldName] = translatedText
        }
      }
    }
  } catch (error) {
    console.error('Auto-translation failed:', error)
  } finally {
    isAutoTranslating.value = false
  }
}

// Auto-translate for news forms
async function autoTranslateNews(sourceLang, fieldName) {
  const sourceText = newsForm.value.translations[sourceLang][fieldName]
  await autoFillTranslations(sourceText, sourceLang, newsForm.value.translations, fieldName)
}

// Auto-translate for media forms
async function autoTranslateMedia(sourceLang, fieldName) {
  const sourceText = mediaForm.value.translations[sourceLang][fieldName]
  await autoFillTranslations(sourceText, sourceLang, mediaForm.value.translations, fieldName)
}

// Auto-translate for editing news
async function autoTranslateEditNews(sourceLang, fieldName) {
  if (!editingNewsGroup.value) return
  const sourceText = editingNewsGroup.value.translations[sourceLang][fieldName]
  await autoFillTranslations(sourceText, sourceLang, editingNewsGroup.value.translations, fieldName)
}

// Auto-translate for editing media
async function autoTranslateEditMedia(sourceLang, fieldName) {
  if (!editingMediaGroup.value) return
  const sourceText = editingMediaGroup.value.translations[sourceLang][fieldName]
  await autoFillTranslations(sourceText, sourceLang, editingMediaGroup.value.translations, fieldName)
}

// Auto-translate for static text translations
async function autoTranslateStatic(translation, fieldName) {
  if (!translation.value || !translation.value.trim()) return

  const sourceLang = detectLanguage(translation.value)
  const translations = await autoTranslate(translation.value, sourceLang, ['en', 'mn', 'ch'])

  // Find related translations with the same key
  const relatedTranslations = filteredTranslations.value.filter(t => t.key === translation.key)

  for (const [lang, translatedText] of Object.entries(translations)) {
    if (lang !== sourceLang && translatedText) {
      const existingTranslation = relatedTranslations.find(t => t.locale === lang)
      if (existingTranslation && (!existingTranslation.value || existingTranslation.value.trim() === '')) {
        existingTranslation.value = translatedText
      }
    }
  }
}

// Auto-translate for static text in edit modal
async function autoTranslateStaticText(sourceLang) {
  if (!editingTranslations.value[sourceLang]?.value || !autoTranslateEnabled.value) return

  isAutoTranslating.value = true

  try {
    const sourceText = editingTranslations.value[sourceLang].value
    const translations = await autoTranslate(sourceText, sourceLang, ['en', 'mn', 'ch'])

    // Fill in the translations for other languages
    for (const [lang, translatedText] of Object.entries(translations)) {
      if (lang !== sourceLang && translatedText && editingTranslations.value[lang]) {
        // Only auto-fill if the field is empty
        if (!editingTranslations.value[lang].value || editingTranslations.value[lang].value.trim() === '') {
          editingTranslations.value[lang].value = translatedText
        }
      }
    }
  } catch (error) {
    console.error('Auto-translation failed:', error)
  } finally {
    isAutoTranslating.value = false
  }
}

// Form handling functions
function handleNewsImageUpload(event) {
  const file = event.target.files[0]
  if (file) {
    newsImageFile.value = file
  }
}

function handleMediaFileUpload(event) {
  const file = event.target.files[0]
  if (file) {
    mediaFile.value = file
  }
}

function handleJoinUsImageUpload(event) {
  const file = event.target.files[0]
  if (file) {
    joinUsImageFile.value = file
  }
}

function handlePartyBuildingMainImageUpload(event) {
  const file = event.target.files[0]
  if (file) {
    partyBuildingMainImageFile.value = file
  }
}

function handlePartyBuildingContentImagesUpload(event) {
  const files = Array.from(event.target.files)
  if (files.length > 0) {
    partyBuildingContentImagesFiles.value = files
  }
}

function handleCollaborativeProjectsImageUpload(event) {
  const file = event.target.files[0]
  if (file) {
    collaborativeProjectsImageFile.value = file
  }
}

async function submitNewsForm() {
  // Validate required English fields
  if (!newsForm.value.translations.en.title || !newsForm.value.translations.en.description) {
    alert('Please fill in required English fields (Title and Description)')
    return
  }

  newsFormLoading.value = true

  try {
    // Create news articles for each language that has content
    const promises = []

    for (const lang of languages) {
      const translation = newsForm.value.translations[lang.code]

      // Only create if title exists for this language
      if (translation.title && translation.title.trim()) {
        const formData = new FormData()

        const newsData = {
          title: translation.title,
          description: translation.description || translation.title,
          content: translation.content || '',
          source: newsForm.value.source || '',
          locale: lang.code,
          published: newsForm.value.published
        }

        formData.append('data', JSON.stringify(newsData))

        if (newsImageFile.value) {
          formData.append('image', newsImageFile.value)
        }

        promises.push($fetch('/api/news', {
          method: 'POST',
          body: formData
        }))
      }
    }

    const responses = await Promise.all(promises)

    if (responses.every(r => r.success)) {
      // Reset form
      newsForm.value = {
        translations: {
          en: { title: '', description: '', content: '' },
          mn: { title: '', description: '', content: '' },
          ch: { title: '', description: '', content: '' }
        },
        source: '',
        published: true
      }
      newsImageFile.value = null
      showNewsForm.value = false
      activeLanguage.value = 'en'

      // Reload news list
      await loadNews()

      alert(`News articles created successfully for ${responses.length} language(s)!`)
    }
  } catch (error) {
    console.error('Failed to create news:', error)
    alert('Failed to create news articles')
  } finally {
    newsFormLoading.value = false
  }
}

async function submitMediaForm() {
  // Validate required fields
  if (!mediaForm.value.translations.en.title || !mediaFile.value) {
    alert('Please fill in required fields (English Title and Media File)')
    return
  }

  mediaFormLoading.value = true

  try {
    // Create media materials for each language that has content
    const promises = []

    for (const lang of languages) {
      const translation = mediaForm.value.translations[lang.code]

      // Only create if title exists for this language
      if (translation.title && translation.title.trim()) {
        const formData = new FormData()

        const mediaData = {
          title: translation.title,
          description: translation.description || '',
          locale: lang.code,
          published: mediaForm.value.published
        }

        formData.append('data', JSON.stringify(mediaData))
        formData.append('file', mediaFile.value)

        promises.push($fetch('/api/media-materials', {
          method: 'POST',
          body: formData
        }))
      }
    }

    const responses = await Promise.all(promises)

    if (responses.every(r => r.success)) {
      // Reset form
      mediaForm.value = {
        translations: {
          en: { title: '', description: '' },
          mn: { title: '', description: '' },
          ch: { title: '', description: '' }
        },
        published: true
      }
      mediaFile.value = null
      showMediaForm.value = false
      activeMediaLanguage.value = 'en'

      // Reload media list
      await loadMediaMaterials()

      alert(`Media materials uploaded successfully for ${responses.length} language(s)!`)
    }
  } catch (error) {
    console.error('Failed to upload media:', error)
    alert('Failed to upload media materials')
  } finally {
    mediaFormLoading.value = false
  }
}

// Submit Join Us form
async function submitJoinUsForm() {
  // Validate required fields
  if (!joinUsForm.value.slug || !joinUsForm.value.type) {
    alert('Please fill in required fields (Slug and Type)')
    return
  }

  // Check if at least one language has a title
  const hasTitle = languages.some(lang =>
    joinUsForm.value.translations[lang.code].title.trim()
  )

  if (!hasTitle) {
    alert('Please provide a title in at least one language')
    return
  }

  joinUsFormLoading.value = true
  try {
    let imageUrl = ''

    // Upload image if provided
    if (joinUsImageFile.value) {
      const formData = new FormData()
      formData.append('file', joinUsImageFile.value)

      const uploadResponse = await $fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (uploadResponse.success) {
        imageUrl = uploadResponse.path
      }
    }

    // Create records for each language
    const promises = languages.map(async (lang) => {
      const translation = joinUsForm.value.translations[lang.code]
      if (translation.title.trim()) { // Only create if title exists
        return $fetch('/api/join-us', {
          method: 'POST',
          body: {
            slug: joinUsForm.value.slug,
            title: translation.title,
            description: translation.description,
            requirements: translation.requirements,
            responsibilities: translation.responsibilities,
            type: joinUsForm.value.type,
            category: joinUsForm.value.category,
            location: joinUsForm.value.location,
            salary: joinUsForm.value.salary,
            contact: joinUsForm.value.contact,
            contactNumber: joinUsForm.value.contactNumber,
            image: imageUrl,
            published: joinUsForm.value.published,
            locale: lang.code
          }
        })
      }
    })

    const responses = await Promise.all(promises.filter(Boolean))
    const allSuccessful = responses.every(response => response?.success)

    if (allSuccessful) {
      alert('Join Us item created successfully!')
      showJoinUsForm.value = false
      // Reset form
      joinUsForm.value = {
        translations: {
          en: { title: '', description: '', requirements: '', responsibilities: '' },
          mn: { title: '', description: '', requirements: '', responsibilities: '' },
          ch: { title: '', description: '', requirements: '', responsibilities: '' }
        },
        slug: '',
        type: '',
        category: '',
        location: '',
        salary: '',
        contact: '',
        contactNumber: '',
        image: '',
        published: true
      }
      joinUsImageFile.value = null
      // Refresh data
      await loadJoinUsItems()
    } else {
      alert('Failed to create Join Us item: ' + response.error)
    }
  } catch (error) {
    console.error('Failed to create Join Us item:', error)
    alert('Failed to create Join Us item')
  } finally {
    joinUsFormLoading.value = false
  }
}

// Submit Party Building form
async function submitPartyBuildingForm() {
  // Validate required fields
  if (!partyBuildingForm.value.slug) {
    alert('Please fill in required field: Slug')
    return
  }

  // Check if at least one language has a title
  const hasTitle = languages.some(lang =>
    partyBuildingForm.value.translations[lang.code].title.trim()
  )

  if (!hasTitle) {
    alert('Please provide a title in at least one language')
    return
  }

  partyBuildingFormLoading.value = true
  try {
    let mainImageUrl = ''
    let contentImagesUrls = []

    // Upload main image if provided
    if (partyBuildingMainImageFile.value) {
      const formData = new FormData()
      formData.append('file', partyBuildingMainImageFile.value)

      const uploadResponse = await $fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (uploadResponse.success) {
        mainImageUrl = uploadResponse.path
      }
    }

    // Upload content images if provided
    if (partyBuildingContentImagesFiles.value.length > 0) {
      for (const file of partyBuildingContentImagesFiles.value) {
        const formData = new FormData()
        formData.append('file', file)

        const uploadResponse = await $fetch('/api/upload', {
          method: 'POST',
          body: formData
        })

        if (uploadResponse.success) {
          contentImagesUrls.push(uploadResponse.path)
        }
      }
    }

    // Create records for each language
    const promises = languages.map(async (lang) => {
      const translation = partyBuildingForm.value.translations[lang.code]
      if (translation.title.trim()) { // Only create if title exists
        return $fetch('/api/party-building', {
          method: 'POST',
          body: {
            slug: partyBuildingForm.value.slug,
            title: translation.title,
            description: translation.description,
            content: translation.content,
            mainImage: mainImageUrl,
            contentImages: contentImagesUrls.join(','),
            source: partyBuildingForm.value.source,
            published: partyBuildingForm.value.published,
            locale: lang.code
          }
        })
      }
    })

    const responses = await Promise.all(promises.filter(Boolean))
    const allSuccessful = responses.every(response => response?.success)

    if (allSuccessful) {
      alert('Party Building article created successfully!')
      showPartyBuildingForm.value = false
      // Reset form
      partyBuildingForm.value = {
        translations: {
          en: { title: '', description: '', content: '' },
          mn: { title: '', description: '', content: '' },
          ch: { title: '', description: '', content: '' }
        },
        slug: '',
        mainImage: '',
        contentImages: '',
        source: '',
        published: true
      }
      partyBuildingMainImageFile.value = null
      partyBuildingContentImagesFiles.value = []
      // Refresh data
      await loadPartyBuildingItems()
    } else {
      alert('Failed to create Party Building article: ' + response.error)
    }
  } catch (error) {
    console.error('Failed to create Party Building article:', error)
    alert('Failed to create Party Building article')
  } finally {
    partyBuildingFormLoading.value = false
  }
}

// Submit Development History form
async function submitDevelopmentHistoryForm() {
  if (!developmentHistoryForm.value.year || !developmentHistoryForm.value.title || !developmentHistoryForm.value.description) {
    alert('Please fill in required fields (Year, Title, and Description)')
    return
  }

  developmentHistoryFormLoading.value = true
  try {
    // Convert achievements text to array
    const achievements = achievementsText.value
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)

    const formData = {
      ...developmentHistoryForm.value,
      achievements
    }

    const response = await $fetch('/api/development-history', {
      method: 'POST',
      body: formData
    })

    if (response.success) {
      alert('Development milestone created successfully!')
      showDevelopmentHistoryForm.value = false
      // Reset form
      developmentHistoryForm.value = {
        year: new Date().getFullYear(),
        title: '',
        description: '',
        achievements: [],
        published: true,
        locale: 'en'
      }
      achievementsText.value = ''
      // Refresh data
      await loadDevelopmentHistoryItems()
    } else {
      alert('Failed to create Development milestone: ' + response.error)
    }
  } catch (error) {
    console.error('Failed to create Development milestone:', error)
    alert('Failed to create Development milestone')
  } finally {
    developmentHistoryFormLoading.value = false
  }
}

// Submit Collaborative Projects form
async function submitCollaborativeProjectsForm() {
  if (!collaborativeProjectsForm.value.slug || !collaborativeProjectsForm.value.title || !collaborativeProjectsForm.value.type) {
    alert('Please fill in required fields (Slug, Title, and Type)')
    return
  }

  collaborativeProjectsFormLoading.value = true
  try {
    let imageUrl = ''

    // Upload image if provided
    if (collaborativeProjectsImageFile.value) {
      const formData = new FormData()
      formData.append('file', collaborativeProjectsImageFile.value)

      const uploadResponse = await $fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (uploadResponse.success) {
        imageUrl = uploadResponse.path
      }
    }

    const response = await $fetch('/api/collaborative-projects', {
      method: 'POST',
      body: {
        ...collaborativeProjectsForm.value,
        image: imageUrl
      }
    })

    if (response.success) {
      alert('Collaborative project created successfully!')
      showCollaborativeProjectsForm.value = false
      // Reset form
      collaborativeProjectsForm.value = {
        slug: '',
        title: '',
        description: '',
        content: '',
        type: '',
        image: '',
        contactEmail: '',
        contactPhone: '',
        contactName: '',
        address: '',
        published: true,
        locale: 'en'
      }
      collaborativeProjectsImageFile.value = null
      // Refresh data
      await loadCollaborativeProjectsItems()
    } else {
      alert('Failed to create Collaborative project: ' + response.error)
    }
  } catch (error) {
    console.error('Failed to create Collaborative project:', error)
    alert('Failed to create Collaborative project')
  } finally {
    collaborativeProjectsFormLoading.value = false
  }
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

// Join Us Management Functions
async function loadJoinUsItems() {
  try {
    const response = await $fetch('/api/join-us', {
      query: {
        page: 1,
        limit: 100,
        locale: 'en'
      }
    })
    if (response.success) {
      joinUsItems.value = response.data
    }
  } catch (error) {
    console.error('Failed to load join us items:', error)
  }
}

async function deleteJoinUsItem(id) {
  if (!confirm('Are you sure you want to delete this item?')) return

  try {
    const response = await $fetch(`/api/join-us/${id}`, {
      method: 'DELETE'
    })
    if (response.success) {
      await loadJoinUsItems()
    } else {
      alert('Failed to delete item: ' + response.error)
    }
  } catch (error) {
    console.error('Failed to delete join us item:', error)
    alert('Failed to delete item')
  }
}

async function toggleJoinUsStatus(id, published) {
  try {
    const response = await $fetch(`/api/join-us/${id}`, {
      method: 'PUT',
      body: { published: !published }
    })
    if (response.success) {
      await loadJoinUsItems()
    } else {
      alert('Failed to update status: ' + response.error)
    }
  } catch (error) {
    console.error('Failed to update join us status:', error)
    alert('Failed to update status')
  }
}

async function editJoinUsItem(item) {
  try {
    // Load all translations for this slug
    const response = await $fetch(`/api/join-us?slug=${item.slug}`)
    if (response.success) {
      const allTranslations = response.data

      // Group translations by locale
      editingJoinUsItem.value = {
        ...item,
        translations: {
          en: allTranslations.find(t => t.locale === 'en') || { locale: 'en', title: '', description: '', requirements: '', responsibilities: '' },
          mn: allTranslations.find(t => t.locale === 'mn') || { locale: 'mn', title: '', description: '', requirements: '', responsibilities: '' },
          ch: allTranslations.find(t => t.locale === 'ch') || { locale: 'ch', title: '', description: '', requirements: '', responsibilities: '' }
        }
      }
    }
  } catch (error) {
    console.error('Failed to load join us translations:', error)
    // Fallback to single item
    editingJoinUsItem.value = {
      ...item,
      translations: {
        en: { locale: 'en', title: item.title || '', description: item.description || '', requirements: item.requirements || '', responsibilities: item.responsibilities || '' },
        mn: { locale: 'mn', title: '', description: '', requirements: '', responsibilities: '' },
        ch: { locale: 'ch', title: '', description: '', requirements: '', responsibilities: '' }
      }
    }
  }

  activeJoinUsLanguage.value = 'en'
  showJoinUsEditModal.value = true
}

async function saveJoinUsItem() {
  if (!editingJoinUsItem.value) return

  try {
    // Save/update each language that has content
    const promises = languages.map(async (lang) => {
      const translation = editingJoinUsItem.value.translations[lang.code]
      if (translation.title.trim()) { // Only save if title exists
        const method = translation.id ? 'PUT' : 'POST'
        const url = translation.id ? `/api/join-us/${translation.id}` : '/api/join-us'

        return $fetch(url, {
          method,
          body: {
            slug: editingJoinUsItem.value.slug,
            title: translation.title,
            description: translation.description,
            requirements: translation.requirements,
            responsibilities: translation.responsibilities,
            type: editingJoinUsItem.value.type,
            category: editingJoinUsItem.value.category,
            location: editingJoinUsItem.value.location,
            salary: editingJoinUsItem.value.salary,
            contact: editingJoinUsItem.value.contact,
            contactNumber: editingJoinUsItem.value.contactNumber,
            image: editingJoinUsItem.value.image,
            published: editingJoinUsItem.value.published,
            locale: lang.code
          }
        })
      }
    })

    const responses = await Promise.all(promises.filter(Boolean))
    const allSuccessful = responses.every(response => response?.success)

    if (allSuccessful) {
      await loadJoinUsItems()
      showJoinUsEditModal.value = false
      alert('Join Us item updated successfully!')
    } else {
      alert('Failed to update some translations')
    }
  } catch (error) {
    console.error('Failed to save join us item:', error)
    alert('Failed to save join us item')
  }
}

// Party Building Management Functions
async function loadPartyBuildingItems() {
  try {
    const response = await $fetch('/api/party-building', {
      query: {
        page: 1,
        limit: 100,
        locale: 'en'
      }
    })
    if (response.success) {
      partyBuildingItems.value = response.data
    }
  } catch (error) {
    console.error('Failed to load party building items:', error)
  }
}

async function deletePartyBuildingItem(id) {
  if (!confirm('Are you sure you want to delete this party building article?')) return

  try {
    const response = await $fetch(`/api/party-building/${id}`, {
      method: 'DELETE'
    })
    if (response.success) {
      await loadPartyBuildingItems()
    } else {
      alert('Failed to delete article: ' + response.error)
    }
  } catch (error) {
    console.error('Failed to delete party building item:', error)
    alert('Failed to delete article')
  }
}

async function editPartyBuildingItem(item) {
  try {
    // Extract base slug (remove locale suffix if present)
    const baseSlug = item.slug.replace(/-(en|mn|ch)$/, '')

    // Load all translations for this base slug
    const response = await $fetch(`/api/party-building`)
    if (response.success) {
      const allItems = response.data

      // Find all items with the same base slug
      const relatedItems = allItems.filter(i => {
        const itemBaseSlug = i.slug.replace(/-(en|mn|ch)$/, '')
        return itemBaseSlug === baseSlug
      })

      // Group translations by locale
      editingPartyBuildingItem.value = {
        ...item,
        baseSlug: baseSlug || item.slug,
        translations: {}
      }

      // Initialize translations for each language
      languages.forEach(lang => {
        editingPartyBuildingItem.value.translations[lang.code] =
          relatedItems.find(t => t.locale === lang.code) || {
            locale: lang.code,
            title: '',
            description: '',
            content: ''
          }
      })
    }
  } catch (error) {
    console.error('Failed to load party building translations:', error)
    // Fallback to single item
    const baseSlug = item.slug.replace(/-(en|mn|ch)$/, '')
    editingPartyBuildingItem.value = {
      ...item,
      baseSlug: baseSlug || item.slug,
      translations: {}
    }

    // Initialize translations for each language
    languages.forEach(lang => {
      editingPartyBuildingItem.value.translations[lang.code] =
        lang.code === item.locale
          ? { locale: lang.code, title: item.title || '', description: item.description || '', content: item.content || '' }
          : { locale: lang.code, title: '', description: '', content: '' }
    })
  }

  activePartyBuildingLanguage.value = 'en'
  showPartyBuildingEditModal.value = true
}

async function savePartyBuildingItem() {
  if (!editingPartyBuildingItem.value) return

  try {
    // Save/update each language that has content
    const promises = languages.map(async (lang) => {
      const translation = editingPartyBuildingItem.value.translations[lang.code]
      console.log(`Processing ${lang.code} translation:`, translation)
      if (translation && translation.title && translation.title.trim()) { // Only save if title exists
        const baseSlug = editingPartyBuildingItem.value.baseSlug || editingPartyBuildingItem.value.slug?.replace(/-(en|mn|ch)$/, '') || editingPartyBuildingItem.value.slug
        console.log(`Saving ${lang.code} with baseSlug:`, baseSlug)
        return $fetch('/api/party-building', {
          method: 'POST',
          body: {
            slug: baseSlug,
            title: translation.title,
            description: translation.description,
            content: translation.content,
            source: editingPartyBuildingItem.value.source,
            mainImage: editingPartyBuildingItem.value.mainImage,
            contentImages: editingPartyBuildingItem.value.contentImages,
            date: editingPartyBuildingItem.value.date,
            views: editingPartyBuildingItem.value.views,
            published: editingPartyBuildingItem.value.published,
            locale: lang.code,
            upsert: true // Flag to indicate this should be an upsert operation
          }
        })
      }
    })

    const responses = await Promise.all(promises.filter(Boolean))
    console.log('Party Building save responses:', responses)
    const allSuccessful = responses.every(response => response?.success)

    if (allSuccessful) {
      await loadPartyBuildingItems()
      showPartyBuildingEditModal.value = false
      alert('Party Building item updated successfully!')
    } else {
      console.error('Failed responses:', responses.filter(r => !r?.success))
      alert('Failed to update some translations')
    }
  } catch (error) {
    console.error('Failed to save party building item:', error)
    alert('Failed to save changes')
  }
}

// Development History Management Functions
async function loadDevelopmentHistoryItems() {
  try {
    const response = await $fetch('/api/development-history', {
      query: {
        page: 1,
        limit: 100,
        locale: 'en'
      }
    })
    if (response.success) {
      developmentHistoryItems.value = response.data
    }
  } catch (error) {
    console.error('Failed to load development history items:', error)
  }
}

async function deleteDevelopmentHistoryItem(id) {
  if (!confirm('Are you sure you want to delete this development history item?')) return

  try {
    const response = await $fetch(`/api/development-history/${id}`, {
      method: 'DELETE'
    })
    if (response.success) {
      await loadDevelopmentHistoryItems()
    } else {
      alert('Failed to delete item: ' + response.error)
    }
  } catch (error) {
    console.error('Failed to delete development history item:', error)
    alert('Failed to delete item')
  }
}

async function editDevelopmentHistoryItem(item) {
  try {
    // Load all translations for this year
    const response = await $fetch(`/api/development-history?year=${item.year}`)
    if (response.success) {
      const allTranslations = response.data

      // Group translations by locale
      editingDevelopmentHistoryItem.value = {
        ...item,
        translations: {}
      }

      // Initialize translations for each language
      languages.forEach(lang => {
        editingDevelopmentHistoryItem.value.translations[lang.code] =
          allTranslations.find(t => t.locale === lang.code) || {
            locale: lang.code,
            title: '',
            description: ''
          }
      })
    }
  } catch (error) {
    console.error('Failed to load development history translations:', error)
    // Fallback to single item
    editingDevelopmentHistoryItem.value = {
      ...item,
      translations: {}
    }

    // Initialize translations for each language
    languages.forEach(lang => {
      editingDevelopmentHistoryItem.value.translations[lang.code] =
        lang.code === item.locale
          ? { locale: lang.code, title: item.title || '', description: item.description || '' }
          : { locale: lang.code, title: '', description: '' }
    })
  }

  activeDevelopmentHistoryLanguage.value = 'en'
  showDevelopmentHistoryEditModal.value = true
}

async function saveDevelopmentHistoryItem() {
  if (!editingDevelopmentHistoryItem.value) return

  try {
    // Save/update each language that has content
    const promises = languages.map(async (lang) => {
      const translation = editingDevelopmentHistoryItem.value.translations[lang.code]
      console.log(`Processing ${lang.code} translation:`, translation)
      if (translation && translation.title && translation.title.trim()) { // Only save if title exists
        // For development history, we use upsert based on year and locale
        return $fetch('/api/development-history', {
          method: 'POST',
          body: {
            year: editingDevelopmentHistoryItem.value.year,
            title: translation.title,
            description: translation.description,
            achievements: editingDevelopmentHistoryItem.value.achievements,
            published: editingDevelopmentHistoryItem.value.published,
            locale: lang.code,
            upsert: true // Flag to indicate this should be an upsert operation
          }
        })
      }
    })

    const responses = await Promise.all(promises.filter(Boolean))
    console.log('Development History save responses:', responses)
    const allSuccessful = responses.every(response => response?.success)

    if (allSuccessful) {
      await loadDevelopmentHistoryItems()
      showDevelopmentHistoryEditModal.value = false
      alert('Development History item updated successfully!')
    } else {
      console.error('Failed responses:', responses.filter(r => !r?.success))
      alert('Failed to update some translations')
    }
  } catch (error) {
    console.error('Failed to save development history item:', error)
    alert('Failed to save changes')
  }
}

// Collaborative Projects Management Functions
async function loadCollaborativeProjectsItems() {
  try {
    const response = await $fetch('/api/collaborative-projects', {
      query: {
        page: 1,
        limit: 100,
        locale: 'en'
      }
    })
    if (response.success) {
      collaborativeProjectsItems.value = response.data
    }
  } catch (error) {
    console.error('Failed to load collaborative projects items:', error)
  }
}

async function deleteCollaborativeProjectsItem(id) {
  if (!confirm('Are you sure you want to delete this collaborative project?')) return

  try {
    const response = await $fetch(`/api/collaborative-projects/${id}`, {
      method: 'DELETE'
    })
    if (response.success) {
      await loadCollaborativeProjectsItems()
    } else {
      alert('Failed to delete project: ' + response.error)
    }
  } catch (error) {
    console.error('Failed to delete collaborative project:', error)
    alert('Failed to delete project')
  }
}

async function editCollaborativeProjectsItem(item) {
  try {
    // Extract base slug (remove locale suffix if present)
    const baseSlug = item.slug.replace(/-(en|mn|ch)$/, '')

    // Load all translations for this base slug
    const response = await $fetch(`/api/collaborative-projects`)
    if (response.success) {
      const allItems = response.data

      // Find all items with the same base slug
      const relatedItems = allItems.filter(i => {
        const itemBaseSlug = i.slug.replace(/-(en|mn|ch)$/, '')
        return itemBaseSlug === baseSlug
      })

      // Group translations by locale
      editingCollaborativeProjectsItem.value = {
        ...item,
        baseSlug: baseSlug || item.slug,
        translations: {}
      }

      // Initialize translations for each language
      languages.forEach(lang => {
        editingCollaborativeProjectsItem.value.translations[lang.code] =
          relatedItems.find(t => t.locale === lang.code) || {
            locale: lang.code,
            title: '',
            description: '',
            content: ''
          }
      })
    }
  } catch (error) {
    console.error('Failed to load collaborative projects translations:', error)
    // Fallback to single item
    const baseSlug = item.slug.replace(/-(en|mn|ch)$/, '')
    editingCollaborativeProjectsItem.value = {
      ...item,
      baseSlug: baseSlug || item.slug,
      translations: {}
    }

    // Initialize translations for each language
    languages.forEach(lang => {
      editingCollaborativeProjectsItem.value.translations[lang.code] =
        lang.code === item.locale
          ? { locale: lang.code, title: item.title || '', description: item.description || '', content: item.content || '' }
          : { locale: lang.code, title: '', description: '', content: '' }
    })
  }

  activeCollaborativeProjectsLanguage.value = 'en'
  showCollaborativeProjectsEditModal.value = true
}

async function saveCollaborativeProjectsItem() {
  if (!editingCollaborativeProjectsItem.value) return

  try {
    // Save/update each language that has content
    const promises = languages.map(async (lang) => {
      const translation = editingCollaborativeProjectsItem.value.translations[lang.code]
      console.log(`Processing ${lang.code} translation:`, translation)
      if (translation && translation.title && translation.title.trim()) { // Only save if title exists
        const baseSlug = editingCollaborativeProjectsItem.value.baseSlug || editingCollaborativeProjectsItem.value.slug?.replace(/-(en|mn|ch)$/, '') || editingCollaborativeProjectsItem.value.slug
        console.log(`Saving ${lang.code} with baseSlug:`, baseSlug)
        return $fetch('/api/collaborative-projects', {
          method: 'POST',
          body: {
            slug: baseSlug,
            title: translation.title,
            description: translation.description,
            content: translation.content,
            type: editingCollaborativeProjectsItem.value.type,
            image: editingCollaborativeProjectsItem.value.image,
            address: editingCollaborativeProjectsItem.value.address,
            contactName: editingCollaborativeProjectsItem.value.contactName,
            contactEmail: editingCollaborativeProjectsItem.value.contactEmail,
            contactPhone: editingCollaborativeProjectsItem.value.contactPhone,
            published: editingCollaborativeProjectsItem.value.published,
            locale: lang.code,
            upsert: true // Flag to indicate this should be an upsert operation
          }
        })
      }
    })

    const responses = await Promise.all(promises.filter(Boolean))
    console.log('Collaborative Projects save responses:', responses)
    const allSuccessful = responses.every(response => response?.success)

    if (allSuccessful) {
      await loadCollaborativeProjectsItems()
      showCollaborativeProjectsEditModal.value = false
      alert('Collaborative Projects item updated successfully!')
    } else {
      console.error('Failed responses:', responses.filter(r => !r?.success))
      alert('Failed to update some translations')
    }
  } catch (error) {
    console.error('Failed to save collaborative projects item:', error)
    alert('Failed to save changes')
  }
}

// Load data on component mount
onMounted(async () => {
  console.log('Admin page mounted, loading data...')
  await loadImages()
  await loadVideos()
  await loadNews()
  await loadMediaMaterials()
  await loadJoinUsItems()
  await loadPartyBuildingItems()
  await loadDevelopmentHistoryItems()
  await loadCollaborativeProjectsItems()
  console.log('Data loading complete')
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

/* Beautiful Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.modal-container {
  background: white;
  border-radius: 20px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
}

.modal-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}

.modal-header-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.auto-translate-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.auto-translate-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
}

.toggle-checkbox {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  cursor: pointer;
}

.toggle-checkbox:checked {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
}

.toggle-label {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.modal-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  pointer-events: none;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  position: relative;
  z-index: 1;
}

.modal-close {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}

.modal-form {
  padding: 2rem;
  max-height: calc(90vh - 200px);
  overflow-y: auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.form-input,
.form-textarea,
.form-select,
.form-file {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 0.875rem;
  transition: all 0.3s ease;
  background: #f9fafb;
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus,
.form-file:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  transform: translateY(-1px);
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
}

.form-file {
  padding: 0.5rem;
  background: white;
  border-style: dashed;
}

.form-help {
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.25rem;
}

.form-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.form-checkbox-input {
  width: 18px;
  height: 18px;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  margin-right: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-checkbox-input:checked {
  background: #667eea;
  border-color: #667eea;
}

.form-checkbox-label {
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
  margin-top: 1.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.btn:hover::before {
  left: 100%;
}

.btn-secondary {
  background: #f3f4f6;
  color: #374151;
  border: 2px solid #e5e7eb;
}

.btn-secondary:hover {
  background: #e5e7eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.btn-success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.btn-success:hover {
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

/* Modal Animations */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.9) translateY(-20px);
}

.modal-enter-to .modal-container,
.modal-leave-from .modal-container {
  transform: scale(1) translateY(0);
}

/* Language Tabs */
.language-tabs {
  display: flex;
  background: #f8fafc;
  border-radius: 12px;
  padding: 4px;
  margin-bottom: 1.5rem;
  gap: 4px;
}

.language-tab {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  color: #64748b;
}

.language-tab.active {
  background: white;
  color: #1e293b;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.language-tab:hover:not(.active) {
  background: rgba(255, 255, 255, 0.5);
  color: #475569;
}

.language-section {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* News Group Cards */
.news-group-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.news-group-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.news-group-header {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #e2e8f0;
}

.news-group-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.news-group-meta {
  font-size: 0.875rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.news-separator {
  color: #cbd5e1;
}

.news-group-actions {
  display: flex;
  gap: 0.5rem;
}

.news-translations {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.news-translation {
  background: #f8fafc;
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.translation-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.translation-flag {
  font-size: 1.25rem;
}

.translation-language {
  font-weight: 600;
  color: #374151;
}

.translation-status {
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: auto;
}

.translation-status.published {
  background: #dcfce7;
  color: #166534;
}

.translation-status.draft {
  background: #fef3c7;
  color: #92400e;
}

.translation-title {
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.translation-description {
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
}

.translation-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

/* Media Group Cards */
.media-group-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.media-group-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.media-group-header {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #e2e8f0;
}

.media-group-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.media-group-meta {
  font-size: 0.875rem;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.media-separator {
  color: #cbd5e1;
}

.media-group-actions {
  display: flex;
  gap: 0.5rem;
}

.media-translations {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.media-translation {
  background: #f8fafc;
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  display: flex;
  gap: 1rem;
}

.media-preview {
  flex-shrink: 0;
  width: 120px;
  height: 80px;
}

.media-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  background: #f1f5f9;
}

.media-pdf {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  color: #64748b;
}

.pdf-icon {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.pdf-label {
  font-size: 0.75rem;
  font-weight: 500;
}

.media-info {
  flex: 1;
}

.media-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.media-flag {
  font-size: 1.25rem;
}

.media-language {
  font-weight: 600;
  color: #374151;
}

.media-status {
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-left: auto;
}

.media-status.published {
  background: #dcfce7;
  color: #166534;
}

.media-status.draft {
  background: #fef3c7;
  color: #92400e;
}

.media-title {
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
}

.media-description {
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0 0 0.75rem 0;
}

.media-actions {
  display: flex;
  gap: 0.5rem;
}

/* Action Buttons */
.btn-action {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-action.btn-edit {
  background: #dbeafe;
  color: #1d4ed8;
}

.btn-action.btn-edit:hover {
  background: #bfdbfe;
  transform: translateY(-1px);
}

.btn-action.btn-delete {
  background: #fee2e2;
  color: #dc2626;
}

.btn-action.btn-delete:hover {
  background: #fecaca;
  transform: translateY(-1px);
}

.btn-mini {
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-mini.btn-edit {
  background: #dbeafe;
  color: #1d4ed8;
}

.btn-mini.btn-edit:hover {
  background: #bfdbfe;
}

.btn-mini.btn-delete {
  background: #fee2e2;
  color: #dc2626;
}

.btn-mini.btn-delete:hover {
  background: #fecaca;
}

/* Media Info Display */
.media-info-display {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.875rem;
}

.media-info-display p {
  margin: 0.25rem 0;
  color: #64748b;
}

.media-info-display strong {
  color: #374151;
  font-weight: 600;
}

/* Auto-Translation Styles */
.input-with-translate {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.input-with-translate .form-input,
.input-with-translate .form-textarea {
  flex: 1;
}

.translate-btn {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);
}

.translate-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
}

.translate-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  animation: spin 1s linear infinite;
}

.translate-btn-textarea {
  align-self: flex-start;
  margin-top: 0.25rem;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Auto-translate indicator */
.auto-translate-indicator {
  background: #dcfce7;
  color: #166534;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-left: 0.5rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive Design */
@media (max-width: 640px) {
  .modal-container {
    margin: 1rem;
    max-width: calc(100vw - 2rem);
    border-radius: 16px;
  }

  .modal-header {
    padding: 1.5rem 1.5rem 1rem;
  }

  .modal-title {
    font-size: 1.25rem;
  }

  .modal-form {
    padding: 1.5rem;
  }

  .modal-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .language-tab {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
  }

  .news-group-header,
  .media-group-header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .news-group-actions,
  .media-group-actions {
    justify-content: flex-end;
  }

  .media-translation {
    flex-direction: column;
  }

  .media-preview {
    width: 100%;
    height: 120px;
  }
}
</style>