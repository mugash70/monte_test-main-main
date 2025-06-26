<template>
  <div>
    <div class="main-header">
      <div class="header-container">
        <!-- Logo -->
        <div class="logo-section">
          <router-link to="/" aria-label="Home">
            <img src="/logo.svg" alt="Company Logo" class="logo" />
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="nav-section">
          <ul class="nav-list">
            <li
              class="nav-item dropdown-item"
              :class="{ 'vertical-text': isMongolian }"
              @mouseenter="hoverDropdown = 'about-monte'"
              @mouseleave="hoverDropdown = null"
            >
              <router-link to="#" class="nav-link" @click.prevent>{{
                t('mainHeader.aboutMonte')
              }}</router-link>
              <div class="dropdown-menu" :class="{ visible: hoverDropdown === 'about-monte' }">
                <router-link to="/company-profile" class="dropdown-link">{{
                  t('mainHeader.aboutLinks.companyProfile')
                }}</router-link>
                <router-link to="/chairman-speech" class="dropdown-link">{{
                  t('mainHeader.aboutLinks.chairmanSpeech')
                }}</router-link>
                <router-link to="/corporate-culture" class="dropdown-link">{{
                  t('mainHeader.aboutLinks.corporateCulture')
                }}</router-link>
                <router-link to="/development-history" class="dropdown-link">{{
                  t('mainHeader.aboutLinks.developmentHistory')
                }}</router-link>
                <router-link to="/party-building" class="dropdown-link">{{
                  t('mainHeader.aboutLinks.partyBuilding')
                }}</router-link>
                <router-link to="/join-us" class="dropdown-link">{{
                  t('mainHeader.aboutLinks.joinUs')
                }}</router-link>
              </div>
            </li>

            <li
              class="nav-item mega-dropdown-item"
              :class="{ 'vertical-text': isMongolian }"
              @mouseenter="hoverDropdown = 'industries'"
              @mouseleave="hoverDropdown = null"
            >
              <router-link
                to="#"
                class="nav-link"
                :class="{ active: activeParentNav === 'core-industries' }"
                @click.prevent
              >
                {{ t('mainHeader.coreIndustries') }}
              </router-link>
              <!-- Mega menu handled below -->
            </li>

            <li
              class="nav-item mega-dropdown-item"
              :class="{ 'vertical-text': isMongolian }"
              @mouseenter="hoverDropdown = 'development'"
              @mouseleave="hoverDropdown = null"
            >
              <router-link
                to="#"
                class="nav-link"
                :class="{ active: activeParentNav === 'high-quality-development' }"
                @click.prevent
              >
                {{ t('mainHeader.highQualityDevelopment') }}
              </router-link>
            </li>

            <li
              class="nav-item dropdown-item"
              :class="{ 'vertical-text': isMongolian }"
              @mouseenter="hoverDropdown = 'news'"
              @mouseleave="hoverDropdown = null"
            >
              <router-link to="/news" class="nav-link">{{ t('mainHeader.news') }}</router-link>
              <div class="dropdown-menu" :class="{ visible: hoverDropdown === 'news' }">
                <router-link to="/news" class="dropdown-link">{{
                  t('mainHeader.newsLinks.news')
                }}</router-link>
                <router-link to="/media-materials" class="dropdown-link">{{
                  t('mainHeader.newsLinks.mediaMaterial')
                }}</router-link>
              </div>
            </li>

            <li
              class="nav-item dropdown-item"
              :class="{ 'vertical-text': isMongolian }"
              @mouseenter="hoverDropdown = 'cooperation'"
              @mouseleave="hoverDropdown = null"
            >
              <router-link to="#" class="nav-link" @click.prevent>{{
                t('mainHeader.externalCooperation')
              }}</router-link>
              <div class="dropdown-menu" :class="{ visible: hoverDropdown === 'cooperation' }">
                <router-link to="/products" class="dropdown-link">{{
                  t('mainHeader.cooperationLinks.products')
                }}</router-link>
                <router-link to="/collaborative-projects" class="dropdown-link">{{
                  t('mainHeader.cooperationLinks.collaborativeProjects')
                }}</router-link>
                <a
                  href="https://fkpt.mengtaigroup.com/mtDev/jingjia/user/login.html"
                  class="dropdown-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ t('mainHeader.cooperationLinks.biddingPlatform') }}</a
                >
                <router-link to="/offline-tender-announcement" class="dropdown-link">{{
                  t('mainHeader.cooperationLinks.offlineTender')
                }}</router-link>
                <a
                  href="https://mall-front.caigou.mengtaigroup.com/inquiry/index?initQueryType=BID_INFO"
                  class="dropdown-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ t('mainHeader.cooperationLinks.sourcingAnnouncement') }}</a
                >
              </div>
            </li>
          </ul>
        </nav>

        <!-- Mobile Actions Container -->
        <div class="mobile-actions">
          <!-- Search -->
          <div class="search-item" ref="searchItem">
            <button class="search-button" @click="toggleSearch" aria-label="Toggle search">
              <svg
                class="search-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
            <div class="search-input-container" :class="{ 'search-expanded': searchExpanded }">
              <input
                type="search"
                :placeholder="t('mainHeader.searchPlaceholder')"
                :class="{ 'vertical-text': isMongolian }"
                class="search-input"
                ref="searchInput"
                aria-label="Search"
              />
            </div>
          </div>

          <!-- Mobile Menu Toggle -->
          <button
            class="mobile-menu-toggle"
            @click="toggleMobileMenu"
            :class="{ active: mobileMenuOpen }"
            aria-label="Toggle mobile menu"
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
        </div>
      </div>

      <!-- MEGA MENUS -->
      <!-- Industries Mega Menu -->
      <div
        class="mega-menu"
        :class="{ visible: hoverDropdown === 'industries' }"
        @mouseenter="hoverDropdown = 'industries'"
        @mouseleave="hoverDropdown = null"
      >
        <div class="mega-menu-container">
          <div class="mega-menu-section">
            <ul class="mega-menu-links" :class="{ 'vertical-text': isMongolian }">
              <li v-for="item in industries" :key="item.id">
                <router-link
                  :to="item.href"
                  class="mega-menu-link"
                  @mouseenter="setActiveIndustry(item.id)"
                  :class="{ active: activeIndustry?.id === item.id }"
                >
                  {{ t(item.title) }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="mega-menu-section">
            <img :src="activeIndustry?.image" :alt="activeIndustry?.title" class="logo" />
          </div>
          <div class="mega-menu-section" :class="{ 'vertical-text': isMongolian }">
            <h3 class="mega-menu-title">{{ t(activeIndustry?.title || '') }}</h3>
            <p>{{ t(activeIndustry?.description || '') }}</p>
          </div>
        </div>
      </div>

      <!-- Development Mega Menu -->
      <div
        class="mega-menu"
        :class="{ visible: hoverDropdown === 'development' }"
        @mouseenter="hoverDropdown = 'development'"
        @mouseleave="hoverDropdown = null"
      >
        <div class="mega-menu-container">
          <div class="mega-menu-section">
            <ul class="mega-menu-links" :class="{ 'vertical-text': isMongolian }">
              <li v-for="item in development" :key="item.id">
                <router-link
                  :to="item.href"
                  class="mega-menu-link"
                  @mouseenter="setActiveDevelopment(item.id)"
                  :class="{ active: activeDevelopment?.id === item.id }"
                >
                  {{ t(item.title) }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="mega-menu-section">
            <img :src="activeDevelopment?.image" :alt="activeDevelopment?.title" class="logo" />
          </div>
          <div class="mega-menu-section" :class="{ 'vertical-text': isMongolian }">
            <h3 class="mega-menu-title">{{ t(activeDevelopment?.title || '') }}</h3>
            <p>{{ t(activeDevelopment?.description || '') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Overlay -->
    <div class="mobile-overlay" :class="{ active: mobileMenuOpen }" @click="closeMobileMenu"></div>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" :class="{ active: mobileMenuOpen }">
      <div class="mobile-drawer-header">
        <div>
          <router-link to="/" aria-label="Home">
            <img src="/logo.svg" alt="Company Logo" class="logo" />
          </router-link>
        </div>
        <button class="mobile-close-btn" @click="closeMobileMenu" aria-label="Close mobile menu">
          ×
        </button>
      </div>

      <ul class="mobile-nav-list">
        <li class="mobile-nav-item">
          <button
            class="mobile-nav-link"
            :class="{ 'vertical-text': isMongolian }"
            @click="toggleMobileSubmenu('about')"
            :aria-expanded="activeSubmenu === 'about'"
            aria-controls="about-submenu"
          >
            {{ t('mainHeader.aboutMonte') }}
            <span class="mobile-expand-icon" :class="{ expanded: activeSubmenu === 'about' }"
              >▼</span
            >
          </button>
          <div
            class="mobile-submenu"
            id="about-submenu"
            :class="{ expanded: activeSubmenu === 'about' }"
          >
            <router-link
              to="/company-profile"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.aboutLinks.companyProfile') }}</router-link
            >
            <router-link
              to="/chairman-speech"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.aboutLinks.chairmanSpeech') }}</router-link
            >
            <router-link
              to="/corporate-culture"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.aboutLinks.corporateCulture') }}</router-link
            >
            <router-link
              to="/development-history"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.aboutLinks.developmentHistory') }}</router-link
            >
            <router-link
              to="/party-building"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.aboutLinks.partyBuilding') }}</router-link
            >
            <router-link
              to="/join-us"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.aboutLinks.joinUs') }}</router-link
            >
          </div>
        </li>

        <li class="mobile-nav-item">
          <button
            class="mobile-nav-link"
            @click="toggleMobileSubmenu('industries')"
            :aria-expanded="activeSubmenu === 'industries'"
            aria-controls="industries-submenu"
            :class="{ 'vertical-text': isMongolian }"
          >
            {{ t('mainHeader.coreIndustries') }}
            <span class="mobile-expand-icon" :class="{ expanded: activeSubmenu === 'industries' }"
              >▼</span
            >
          </button>
          <div
            class="mobile-submenu"
            id="industries-submenu"
            :class="{ expanded: activeSubmenu === 'industries' }"
          >
            <router-link
              to="/aluminium-industry-sector"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.industry.title1') }}</router-link
            >
            <router-link
              to="/coal-industry"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.industry.title2') }}</router-link
            >
            <router-link
              to="/thermal-power-plate"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.industry.title3') }}</router-link
            >
            <router-link
              to="/modern-agriculture"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.industry.title4') }}</router-link
            >
            <router-link
              to="/modern-trade-logistics"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.industry.title5') }}</router-link
            >
          </div>
        </li>

        <li class="mobile-nav-item">
          <button
            class="mobile-nav-link"
            :class="{ 'vertical-text': isMongolian }"
            @click="toggleMobileSubmenu('development')"
            :aria-expanded="activeSubmenu === 'development'"
            aria-controls="development-submenu"
          >
            {{ t('mainHeader.highQualityDevelopment') }}
            <span class="mobile-expand-icon" :class="{ expanded: activeSubmenu === 'development' }"
              >▼</span
            >
          </button>
          <div
            class="mobile-submenu"
            id="development-submenu"
            :class="{ expanded: activeSubmenu === 'development' }"
          >
            <router-link
              to="/technology-monte"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.development.title1') }}</router-link
            >
            <router-link
              to="/green-monte"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.development.title2') }}</router-link
            >
            <router-link
              to="/responsibility-monte"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.development.title3') }}</router-link
            >
          </div>
        </li>

        <li class="mobile-nav-item">
          <button
            class="mobile-nav-link"
            :class="{ 'vertical-text': isMongolian }"
            @click="toggleMobileSubmenu('news')"
            :aria-expanded="activeSubmenu === 'news'"
            aria-controls="news-submenu"
          >
            {{ t('mainHeader.news') }}
            <span class="mobile-expand-icon" :class="{ expanded: activeSubmenu === 'news' }"
              >▼</span
            >
          </button>
          <div
            class="mobile-submenu"
            id="news-submenu"
            :class="{ expanded: activeSubmenu === 'news' }"
          >
            <router-link
              to="/news"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.newsLinks.news') }}</router-link
            >
            <router-link
              to="/media-materials"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.newsLinks.mediaMaterial') }}</router-link
            >
          </div>
        </li>

        <li class="mobile-nav-item">
          <button
            class="mobile-nav-link"
            :class="{ 'vertical-text': isMongolian }"
            @click="toggleMobileSubmenu('cooperation')"
            :aria-expanded="activeSubmenu === 'cooperation'"
            aria-controls="cooperation-submenu"
          >
            {{ t('mainHeader.externalCooperation') }}
            <span class="mobile-expand-icon" :class="{ expanded: activeSubmenu === 'cooperation' }"
              >▼</span
            >
          </button>
          <div
            class="mobile-submenu"
            id="cooperation-submenu"
            :class="{ expanded: activeSubmenu === 'cooperation' }"
          >
            <router-link
              to="/products"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.cooperationLinks.products') }}</router-link
            >
            <router-link
              to="/collaborative-projects"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.cooperationLinks.collaborativeProjects') }}</router-link
            >
            <a
              href="https://fkpt.mengtaigroup.com/mtDev/jingjia/user/login.html"
              class="mobile-submenu-link"
              target="_blank"
              rel="noopener noreferrer"
              @click="closeMobileMenu"
              >{{ t('mainHeader.cooperationLinks.biddingPlatform') }}</a
            >
            <router-link
              to="/offline-tender-announcement"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
              >{{ t('mainHeader.cooperationLinks.offlineTender') }}</router-link
            >
            <a
              href="https://mall-front.caigou.mengtaigroup.com/inquiry/index?initQueryType=BID_INFO"
              class="mobile-submenu-link"
              :class="{ 'vertical-text': isMongolian }"
              target="_blank"
              rel="noopener noreferrer"
              @click="closeMobileMenu"
              >{{ t('mainHeader.cooperationLinks.sourcingAnnouncement') }}</a
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const route = useRoute()
const isMongolian = computed(() => locale.value === 'mn')

// Track which submenu is active
const activeSubmenu = ref<string | null>(null)

const toggleMobileSubmenu = (menuId: string) => {
  activeSubmenu.value = activeSubmenu.value === menuId ? null : menuId
}

const activeParentNav = computed(() => {
  const currentPath = route.path
  if (
    currentPath.includes('/company-profile') ||
    currentPath.includes('/chairman-speech') ||
    currentPath.includes('/corporate-culture') ||
    currentPath.includes('/development-history') ||
    currentPath.includes('/party-building') ||
    currentPath.includes('/join-us')
  ) {
    return 'about-monte'
  }
  if (
    currentPath.includes('/aluminium-industry-sector') ||
    currentPath.includes('/coal-industry') ||
    currentPath.includes('/thermal-power-plate') ||
    currentPath.includes('/modern-agriculture') ||
    currentPath.includes('/modern-trade-logistics')
  ) {
    return 'core-industries'
  }
  if (
    currentPath.includes('/technology-monte') ||
    currentPath.includes('/green-monte') ||
    currentPath.includes('/responsibility-monte')
  ) {
    return 'high-quality-development'
  }
  if (currentPath.includes('/news') || currentPath.includes('/media-materials')) {
    return 'news'
  }
  if (
    currentPath.includes('/products') ||
    currentPath.includes('/collaborative-projects') ||
    currentPath.includes('/offline-tender-announcement')
  ) {
    return 'external-cooperation'
  }
  return ''
})

interface MegaMenuItem {
  id: string
  href: string
  title: string
  image: string
  description: string
}

const industries = ref<MegaMenuItem[]>([
  {
    id: 'aluminium',
    href: '/aluminium-industry-sector',
    title: 'mainHeader.industry.title1',
    image: '/media/aluminium.jpg',
    description: 'mainHeader.industry.description1',
  },
  {
    id: 'coal',
    href: '/coal-industry',
    title: 'mainHeader.industry.title2',
    image: '/media/coal.jpg',
    description: 'mainHeader.industry.description2',
  },
  {
    id: 'thermo',
    href: '/thermal-power-plate',
    title: 'mainHeader.industry.title3',
    image: '/media/thermal.jpg',
    description: 'mainHeader.industry.description3',
  },
  {
    id: 'agriculture',
    href: '/modern-agriculture',
    title: 'mainHeader.industry.title4',
    image: '/media/husbandry.jpg',
    description: 'mainHeader.industry.description4',
  },
  {
    id: 'logistics',
    href: '/modern-trade-logistics',
    title: 'mainHeader.industry.title5',
    image: '/media/logistics.jpg',
    description: 'mainHeader.industry.description5',
  },
])

const development = ref<MegaMenuItem[]>([
  {
    id: 'technology',
    href: '/technology-monte',
    title: 'mainHeader.development.title1',
    image: '/media/technology.jpg',
    description: 'mainHeader.development.description1',
  },
  {
    id: 'green',
    href: '/green-monte',
    title: 'mainHeader.development.title2',
    image: '/media/green.jpg',
    description: 'mainHeader.development.description2',
  },
  {
    id: 'responsibility',
    href: '/responsibility-monte',
    title: 'mainHeader.development.title3',
    image: '/media/responsibility.jpg',
    description: 'mainHeader.development.description3',
  },
])

const activeIndustry = ref<MegaMenuItem | null>(industries.value[0])
const setActiveIndustry = (id: string) => {
  activeIndustry.value = industries.value.find((item) => item.id === id) || null
}

const activeDevelopment = ref<MegaMenuItem | null>(development.value[0])
const setActiveDevelopment = (id: string) => {
  activeDevelopment.value = development.value.find((item) => item.id === id) || null
}

const hoverDropdown = ref<string | null>(null)
const searchExpanded = ref(false)
const mobileMenuOpen = ref(false)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0)

const toggleSearch = () => {
  searchExpanded.value = !searchExpanded.value
  if (searchExpanded.value) {
    nextTick(() => {
      const searchInput = document.querySelector('.search-input')
      if (searchInput instanceof HTMLInputElement) searchInput.focus()
    })
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
  // Close all submenus when toggling the main menu
  if (!mobileMenuOpen.value) {
    activeSubmenu.value = null
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
  activeSubmenu.value = null
}

const handleResize = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value > 768) {
    closeMobileMenu()
  }
}

const handleClickOutside = (event: Event) => {
  const searchItem = document.querySelector('.search-item') as HTMLElement
  if (searchItem && !searchItem.contains(event.target as Node)) {
    searchExpanded.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Microsoft Yahei', arial, '宋体';
}

.main-header {
  background-color: #fff;
  position: sticky;
  top: 0;
  width: 100%;
  height: 100px;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  z-index: 1000;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 47px;
  height: 100%;
}

/* Logo Section */
.logo-section {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo {
  height: 40px;
  width: auto;
  object-fit: contain;
  border-radius: 4px;
}

/* Desktop Navigation */
.nav-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
}

.nav-link {
  display: block;
  padding: 20px 25px;
  font-size: 16px;
  font-weight: 500;
  color: #6c757d;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border-radius: 8px 8px 0 0;
  white-space: nowrap;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: -18px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #ff6b6b, #dc3545, #c82333);
  border-radius: 2px;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-item:hover .nav-link {
  color: #dc3545;
  background-color: #fff;
}

.nav-item:hover .nav-link::before {
  width: 80%;
}

.nav-link.active::before {
  width: 100%;
}

/* Desktop Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 18px);
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 0;
  min-width: 220px;
  z-index: 2000;
  padding: 12px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%) translateY(-10px);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.dropdown-item:hover .dropdown-menu.visible {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-link {
  display: block;
  padding: 12px 24px;
  color: #6c757d;
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;
  margin: 0 8px;
}

.dropdown-link:hover {
  background-color: rgba(153, 113, 1, 0.568);
  color: #ffffff;
}

/* Desktop Mega Menu */
.mega-menu {
  position: absolute;
  top: calc(100% + 1px);
  background-color: #fff;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
  padding: 12px 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.mega-menu.visible {
  opacity: 1;
  visibility: visible;
}

.mega-menu-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 47px;
}

.mega-menu-section {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
}

.mega-menu-section:nth-child(2) {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mega-menu-section img.logo {
  width: 80%;
  max-width: 300px;
  height: auto;
  border-radius: 0.75rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  object-fit: cover;
}

.mega-menu-title {
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
  padding-bottom: 8px;
}

.mega-menu-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mega-menu-links li {
  margin-bottom: 8px;
}

.mega-menu-link {
  display: block;
  padding: 8px 12px;
  color: #6c757d;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  border-bottom: 1px solid #e9ecef;
}

.mega-menu-link:hover,
.mega-menu-link.active {
  background-color: rgba(153, 113, 1, 0.568);
  color: #ffffff;
}

/* Search Styles */
.search-item {
  position: relative;
}

.search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #6c757d;
  position: relative;
  z-index: 10;
}

.search-input-container {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid transparent;
}

.search-input-container.search-expanded {
  width: 250px;
  border-color: rgba(46, 46, 46, 0.308);
}

.search-input {
  width: 100%;
  height: 36px;
  border: none;
  outline: none;
  padding: 0 50px 0 16px;
  font-size: 14px;
  background-color: transparent;
  color: #2c3e50;
}

.search-input::placeholder {
  color: #9ca3af;
}

/* Mobile Actions Container */
.mobile-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

/* Mobile Menu Styles */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background-color: #6c757d;
  transition: all 0.3s ease;
  margin: 2px 0;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Mobile Drawer */
.mobile-drawer {
  display: none;
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  z-index: 3000;
  transition: left 0.3s ease;
  overflow-y: auto;
}

.mobile-drawer.active {
  left: 0;
}

.mobile-drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  margin-top: 24px;
}

.mobile-close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #6c757d;
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 16px;
}

.mobile-nav-item {
  border-bottom: 1px solid #f0f0f0;
}

.mobile-nav-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 20px;
  color: #2c3e50;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
}

.mobile-nav-link:hover {
  background-color: #f8f9fa;
}

.mobile-expand-icon {
  transition: transform 0.3s ease;
  font-size: 12px;
  margin-left: 8px;
}

.mobile-expand-icon.expanded {
  transform: rotate(180deg);
}

.mobile-submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: #f8f9fa;
  padding-left: 20px;
}

.mobile-submenu.expanded {
  max-height: 1000px;
}

.mobile-submenu-link {
  display: block;
  padding: 12px 20px;
  color: #6c757d;
  text-decoration: none;
  font-size: 14px;
  border-bottom: 1px solid #e9ecef;
  transition: all 0.2s ease;
}

.mobile-submenu-link:hover {
  background-color: #e9ecef;
  color: #dc3545;
}

/* Mobile Overlay */
.mobile-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2500;
}

.mobile-overlay.active {
  display: block;
}

/* Vertical text for Mongolian */
.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
}

.mega-menu-section.vertical-text {
  max-height: 250px; /* Adjust to control characters per line */
  overflow: hidden; /* Hide overflow text */
  word-break: break-word; /* Ensure text wraps to next line */
}

/* Adjust header layout for vertical text */
.main-header.vertical-layout .nav-list {
  flex-direction: row;
  gap: 0.5rem;
}

.main-header.vertical-layout .nav-link {
  padding: 10px 15px;
}

.main-header.vertical-layout .dropdown-menu {
  min-width: 100px;
  left: auto;
  right: 0;
  transform: translateX(0);
}

.main-header.vertical-layout .mega-menu-container {
  grid-template-columns: 1fr;
  gap: 20px;
}

.main-header.vertical-layout .mega-menu-link {
  padding: 8px 8px;
}

.main-header.vertical-layout .mobile-nav-link {
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
}

.main-header.vertical-layout .mobile-submenu-link {
  padding: 10px 30px;
}
/* Responsive Design */
@media (max-width: 768px) {
  .main-header {
    height: 70px;
    padding: 8px 0;
  }

  .header-container {
    gap: 16px;
    padding: 0 16px;
  }

  .logo {
    height: 32px;
  }

  /* Hide desktop navigation */
  .nav-section {
    display: none;
  }

  /* Show mobile elements */
  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-drawer {
    display: block;
    width: 80%;
    max-width: 320px;
  }

  .mobile-overlay {
    display: none;
  }

  .mobile-overlay.active {
    display: block;
  }

  /* Adjust mobile actions */
  .mobile-actions {
    gap: 6px;
  }

  .search-input-container.search-expanded {
    width: 200px;
  }

  .mobile-nav-list {
    margin-top: 12px;
  }
  .vertical-text {
    max-height: 120px;
    overflow: hidden;
    word-break: break-word;
  }

  .main-header.vertical-layout .mobile-nav-list {
    flex-direction: column;
  }

  .main-header.vertical-layout .mobile-nav-item {
    flex-direction: row;
    align-items: center;
  }

  .main-header.vertical-layout .mobile-submenu {
    padding-left: 20px;
  }

  .search-input::placeholder {
    writing-mode: vertical-lr;
    text-orientation: sideways;
  }
}

@media (max-width: 480px) {
  .header-container {
    gap: 12px;
    padding: 0 12px;
  }

  .mobile-actions {
    gap: 4px;
  }

  .search-input-container.search-expanded {
    width: 150px;
  }

  .mobile-nav-list {
    margin-top: 8px;
  }

  .mobile-drawer {
    width: 90%;
  }
  .vertical-text {
    max-height: 100px; /* ~6-8 characters */
  }
}
@media (max-width: 360px) {
  .header-container {
    gap: 20px;
    padding: 0 8px;
  }

  .vertical-text {
    max-height: 80px; /* ~5-6 characters */
  }
}
</style>
