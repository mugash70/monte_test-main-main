<template>
  <div class="top-header" :class="{ 'vertical-layout': isMongolian }">
    <!-- Mobile hamburger button -->
    <button
      v-if="isMobile"
      class="mobile-menu-toggle"
      @click="toggleMobileMenu"
      :aria-label="t('Menu')"
    >
      <span class="hamburger-line" :class="{ active: isMobileMenuOpen }"></span>
      <span class="hamburger-line" :class="{ active: isMobileMenuOpen }"></span>
      <span class="hamburger-line" :class="{ active: isMobileMenuOpen }"></span>
    </button>

    <!-- Desktop navigation -->
    <ul v-if="!isMobile" class="header-list">
      <li class="list-item" @mouseenter="activeMenu = 'group'" @mouseleave="activeMenu = null">
        <span :class="{ 'vertical-text': isMongolian }">{{ t('Group Website Group') }}</span>
        <div v-if="activeMenu == 'group'" class="dropdown-menu">
          <ul>
            <li>
              <a href="/" target="_blank" rel="noopener noreferrer" :class="{ 'vertical-text': isMongolian }">
                {{ t('Monte Group') }}
              </a>
            </li>
            <li>
              <a href="https://www.apt-alu-products.com/en/" target="_blank" rel="noopener noreferrer" :class="{ 'vertical-text': isMongolian }">
                {{ t('Apt') }}
              </a>
            </li>
          </ul>
        </div>
      </li>

      <li class="separator"></li>

      <li class="list-item" @mouseenter="activeMenu = 'staff'" @mouseleave="activeMenu = null">
        <span :class="{ 'vertical-text': isMongolian }">{{ t('Staff Channel') }}</span>
        <div v-if="activeMenu == 'staff'" class="dropdown-menu">
          <ul>
            <li>
              <a href="https://ecology.mengtaigroup.com/wui/index.html#/?logintype=1&time=1748897582084" target="_blank" rel="noopener noreferrer" :class="{ 'vertical-text': isMongolian }">
                {{ t('Collaborative Office') }}
              </a>
            </li>
            <li>
              <a href="https://mail.mengtaigroup.com/" target="_blank" rel="noopener noreferrer" :class="{ 'vertical-text': isMongolian }">
                {{ t('Corporate Email') }}
              </a>
            </li>
          </ul>
        </div>
      </li>

      <li class="separator"></li>

      <li class="list-item" @mouseenter="activeMenu = 'language'" @mouseleave="activeMenu = null">
        <span :class="{ 'vertical-text': isMongolian }">{{ getLanguageDisplay() }}</span>
        <div v-if="activeMenu == 'language'" class="dropdown-menu">
          <ul>
            <li @click="setLanguage('en')">
              <span :class="{ active: currentLocale === 'en', 'vertical-text': isMongolian }">{{ t('English') }}</span>
            </li>
            <li @click="setLanguage('ch')">
              <span :class="{ active: currentLocale === 'ch', 'vertical-text': isMongolian }">{{ t('Chinese') }}</span>
            </li>
            <li @click="setLanguage('mn')">
              <span :class="{ active: currentLocale === 'mn', 'vertical-text': isMongolian }">{{ t('Mongolian') }}</span>
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <!-- Mobile drawer overlay -->
    <div
      v-if="isMobile && isMobileMenuOpen"
      class="mobile-overlay"
      @click="closeMobileMenu"
    ></div>

    <!-- Mobile drawer -->
    <div
      v-if="isMobile"
      class="mobile-drawer"
      :class="{ 'open': isMobileMenuOpen, 'vertical-layout': isMongolian }"
    >
      <div class="drawer-header">
        <h3 :class="{ 'vertical-text': isMongolian }">{{ t('Menu') }}</h3>
        <button class="close-button" @click="closeMobileMenu" :aria-label="t('Close')">
          <span class="close-icon"></span>
        </button>
      </div>

      <nav class="drawer-nav">
        <!-- Group Website Section -->
        <div class="nav-section">
          <button
            class="section-toggle"
            @click="toggleSection('group')"
            :class="{ 'vertical-text': isMongolian }"
          >
            {{ t('Group Website Group') }}
            <span class="toggle-icon" :class="{ expanded: expandedSections.group }">▼</span>
          </button>
          <div class="section-content" :class="{ expanded: expandedSections.group }">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
            >
              {{ t('Monte Group') }}
            </a>
            <a
              href="https://www.apt-alu-products.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
            >
              {{ t('Apt') }}
            </a>
          </div>
        </div>

        <!-- Staff Channel Section -->
        <div class="nav-section">
          <button
            class="section-toggle"
            @click="toggleSection('staff')"
            :class="{ 'vertical-text': isMongolian }"
          >
            {{ t('Staff Channel') }}
            <span class="toggle-icon" :class="{ expanded: expandedSections.staff }">▼</span>
          </button>
          <div class="section-content" :class="{ expanded: expandedSections.staff }">
            <a
              href="https://ecology.mengtaigroup.com/wui/index.html#/?logintype=1&time=1748897582084"
              target="_blank"
              rel="noopener noreferrer"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
            >
              {{ t('Collaborative Office') }}
            </a>
            <a
              href="https://mail.mengtaigroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              :class="{ 'vertical-text': isMongolian }"
              @click="closeMobileMenu"
            >
              {{ t('Corporate Email') }}
            </a>
          </div>
        </div>

        <!-- Language Section -->
        <div class="nav-section">
          <button
            class="section-toggle"
            @click="toggleSection('language')"
            :class="{ 'vertical-text': isMongolian }"
          >
            {{ t('Language') }}: {{ getLanguageDisplay() }}
            <span class="toggle-icon" :class="{ expanded: expandedSections.language }">▼</span>
          </button>
          <div class="section-content" :class="{ expanded: expandedSections.language }">
            <button
              @click="setLanguageAndClose('en')"
              :class="{ active: currentLocale === 'en', 'vertical-text': isMongolian }"
            >
            {{ t('English') }}
            </button>
            <button
              @click="setLanguageAndClose('ch')"
              :class="{ active: currentLocale === 'ch', 'vertical-text': isMongolian }"
            >
            {{ t('Chinese') }}
            </button>
            <button
              @click="setLanguageAndClose('mn')"
              :class="{ active: currentLocale === 'mn', 'vertical-text': isMongolian }"
            >
            {{ t('Mongolian') }}
            </button>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted, onUnmounted,computed } from 'vue';

import { useI18n } from 'vue-i18n';
const { locale: currentLocale, setLocale } = useI18n();


const activeMenu = ref<string | null>(null);
const isMobileMenuOpen = ref(false);
const isMobile = ref(false);
const expandedSections = ref({ group: false, staff: false, language: false });
const { t } = useI18n();


const isMongolian = computed(() => currentLocale.value === 'mn');
const checkMobile = () => {
 isMobile.value = window.innerWidth <= 768;
  if (!isMobile.value) {
    isMobileMenuOpen.value = false;
    expandedSections.value = { group: false, staff: false, language: false };
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : '';
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
  expandedSections.value = { group: false, staff: false, language: false };
};

const toggleSection = (section: 'group' | 'staff' | 'language') => {
  expandedSections.value[section] = !expandedSections.value[section];
};

const getLanguageDisplay = () => {
  switch (currentLocale.value) {
    case 'ch':
      return '简体中文';
    case 'mn':
      return 'ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠬᠡᠯᠡ';
    default:
      return 'English';
  }
};


const setLanguage = async (newLocale: 'en' | 'mn' | 'ch') => {
  console.log('Switching to locale:', newLocale);
  await setLocale(newLocale);
  console.log('Current locale after switch:', currentLocale.value);
};


const setLanguageAndClose = async (newLocale: 'en' | 'mn' | 'ch') => {
  await setLanguage(newLocale);
  closeMobileMenu();
};

  onMounted(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile);
    document.body.style.overflow = '';
  });
</script>

<style scoped>
.top-header {
  background-color: #f1f1f1;
  color: #595757;
  padding: 0.5rem 5rem;
  position: relative;
  z-index: 1002;
  font-family: "Mongolian Baiti", "Microsoft Yahei", sans-serif;
  min-height: 60px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.header-list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

.list-item {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  white-space: nowrap;
}

.list-item span {
  padding: 0.5rem 0.75rem;
  transition: color 0.3s ease;
}

.list-item:hover span {
  color: #d10000;
}

.separator {
  width: 1px;
  height: 14px;
  background-color: #c0c0c0;
  background-image: url('/media/line.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.2rem);
  left: 0;
  background-color: #f1f1f1;
  color: #595757;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  min-width: 160px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1003;
  transform-origin: top;
  animation: slideDown 0.3s ease forwards;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-10px) scaleY(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
}

.dropdown-menu ul {
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
}

.dropdown-menu li {
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
  cursor: pointer;
}

.dropdown-menu li:hover {
  color: #d10000;
}

.dropdown-menu li a {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s, color 0.3s;
}

.dropdown-menu li span {
  display: block;
  width: 100%;
  padding: 0;
  transition: background-color 0.3s, color 0.3s;
}

.dropdown-menu li span.active {
  color: #d10000;
  font-weight: bold;
}

/* Vertical text for Mongolian */
.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
}

/* Adjust header layout for vertical text */
.top-header.vertical-layout .header-list {
  flex-direction: row;
  gap: 0.5rem;
}

.top-header.vertical-layout .list-item {
  align-items: flex-start;
  padding: 0.5rem;
}

.top-header.vertical-layout .dropdown-menu {
  min-width: 100px;
  left: auto;
  right: 0;
}

/* Mobile hamburger button */
.mobile-menu-toggle {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1004;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
}

.hamburger-line {
  display: block;
  height: 3px;
  width: 100%;
  background-color: #595757;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger-line.active:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-line.active:nth-child(2) {
  opacity: 0;
}

.hamburger-line.active:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1003;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Mobile drawer */
.mobile-drawer {
  position: fixed;
  top: 0;
  right: -320px;
  width: 320px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 1004;
  overflow-y: auto;
  transition: right 0.3s ease;
}

.mobile-drawer.open {
  right: 0;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f1f1f1;
  border-bottom: 1px solid #ddd;
}

.drawer-header h3 {
  margin: 0;
  color: #595757;
  font-size: 1.1rem;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-icon {
  width: 20px;
  height: 20px;
  position: relative;
}

.close-icon::before,
.close-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 2px;
  background-color: #595757;
  transform-origin: center;
}

.close-icon::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.close-icon::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

/* Drawer navigation */
.drawer-nav {
  padding: 1rem 0;
}

.nav-section {
  border-bottom: 1px solid #eee;
}

.section-toggle {
  width: 100%;
  padding: 1rem;
  background: none;
  border: none;
  text-align: left;
  font-size: 1rem;
  color: #595757;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
}

.section-toggle:hover {
  background-color: #f8f8f8;
}

.toggle-icon {
  transition: transform 0.3s ease;
  font-size: 0.8rem;
}

.toggle-icon.expanded {
  transform: rotate(180deg);
}

.section-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: #fafafa;
}

.section-content.expanded {
  max-height: 300px;
}

.section-content a,
.section-content button {
  display: block;
  width: 100%;
  padding: 0.75rem 1.5rem;
  color: #666;
  text-decoration: none;
  background: none;
  border: none;
  text-align: left;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;
}

.section-content a:hover,
.section-content button:hover {
  color: #d10000;
  background-color: #f0f0f0;
}

.section-content button.active {
  color: #d10000;
  font-weight: bold;
  background-color: #f0f0f0;
}

/* Vertical text adjustments for mobile drawer */
.mobile-drawer.vertical-layout .drawer-header h3.vertical-text,
.mobile-drawer.vertical-layout .section-toggle.vertical-text,
.mobile-drawer.vertical-layout .section-content .vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  text-align: right;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
}

/* ENHANCED RESPONSIVE BREAKPOINTS */

/* Large desktop - 1200px and up */
@media (min-width: 1200px) {
  .top-header {
    padding: 0.5rem 6rem;
  }

  .header-list {
    gap: 2rem;
  }

  .list-item {
    font-size: 1rem;
  }
}

/* Desktop - 992px to 1199px */
@media (max-width: 1199px) and (min-width: 992px) {
  .top-header {
    padding: 0.5rem 4rem;
  }

  .header-list {
    gap: 1.5rem;
  }
}

/* Tablet landscape - 768px to 991px */
@media (max-width: 991px) and (min-width: 769px) {
  .top-header {
    padding: 0.5rem 2rem;
  }

  .header-list {
    gap: 1rem;
  }

  .list-item {
    font-size: 0.9rem;
  }

  .list-item span {
    padding: 0.4rem 0.6rem;
  }
}

/* Mobile and tablet portrait - 768px and below */
@media (max-width: 768px) {
  .top-header {
    padding: 0.75rem 1rem;
    min-height: 50px;
    justify-content: flex-start;
  }

  .top-header.vertical-layout {
    min-height: 60px;
    align-items: flex-start;
    padding-top: 1rem;
  }

  .mobile-menu-toggle {
    right: 1rem;
    width: 28px;
    height: 28px;
  }

  .mobile-drawer {
    width: min(85vw, 320px);
    right: calc(-1 * min(85vw, 320px));
  }
}

/* Large mobile devices - 481px to 768px */
@media (max-width: 768px) and (min-width: 481px) {
  .mobile-drawer {
    width: min(80vw, 300px);
    right: calc(-1 * min(80vw, 300px));
  }

  .drawer-header {
    padding: 1rem;
  }

  .section-toggle {
    font-size: 1rem;
    padding: 1rem;
  }

  .section-content a,
  .section-content button {
    font-size: 0.9rem;
    padding: 0.75rem 1.5rem;
  }
}

/* Standard mobile devices - 361px to 480px */
@media (max-width: 480px) {
  .top-header {
    padding: 0.6rem 1rem;
    min-height: 45px;
  }

  .mobile-menu-toggle {
    right: 0.8rem;
    width: 26px;
    height: 26px;
  }

  .hamburger-line {
    height: 2.5px;
  }

  .mobile-drawer {
    width: min(85vw, 280px);
    right: calc(-1 * min(85vw, 280px));
  }

  .drawer-header {
    padding: 0.875rem;
  }

  .drawer-header h3 {
    font-size: 1rem;
  }

  .section-toggle {
    font-size: 0.9rem;
    padding: 0.875rem;
  }

  .section-content a,
  .section-content button {
    font-size: 0.85rem;
    padding: 0.625rem 1.25rem;
  }

  .mobile-drawer.vertical-layout .section-toggle,
  .mobile-drawer.vertical-layout .section-content a,
  .mobile-drawer.vertical-layout .section-content button {
    font-size: 0.85rem;
    padding: 0.5rem 0;
  }
}

/* Small mobile devices - 320px to 360px */
@media (max-width: 360px) {
  .top-header {
    padding: 0.5rem 0.8rem;
    min-height: 42px;
  }

  .mobile-menu-toggle {
    right: 0.6rem;
    width: 24px;
    height: 24px;
  }

  .hamburger-line {
    height: 2px;
  }

  .mobile-drawer {
    width: min(90vw, 260px);
    right: calc(-1 * min(90vw, 260px));
  }

  .drawer-header {
    padding: 0.75rem;
  }

  .drawer-header h3 {
    font-size: 0.95rem;
  }

  .close-button {
    width: 28px;
    height: 28px;
    padding: 0.4rem;
  }

  .close-icon {
    width: 16px;
    height: 16px;
  }

  .close-icon::before,
  .close-icon::after {
    width: 16px;
    height: 1.5px;
  }

  .section-toggle {
    font-size: 0.85rem;
    padding: 0.75rem;
  }

  .toggle-icon {
    font-size: 0.7rem;
  }

  .section-content a,
  .section-content button {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }

  .mobile-drawer.vertical-layout .section-toggle,
  .mobile-drawer.vertical-layout .section-content a,
  .mobile-drawer.vertical-layout .section-content button {
    font-size: 0.8rem;
    padding: 0.45rem 0;
  }
}

/* Extra small devices - below 320px */
@media (max-width: 319px) {
  .top-header {
    padding: 0.4rem 0.6rem;
    min-height: 40px;
  }

  .mobile-menu-toggle {
    right: 0.5rem;
    width: 22px;
    height: 22px;
  }

  .mobile-drawer {
    width: 95vw;
    right: -95vw;
  }

  .drawer-header {
    padding: 0.6rem;
  }

  .drawer-header h3 {
    font-size: 0.9rem;
  }

  .section-toggle {
    font-size: 0.8rem;
    padding: 0.6rem;
  }

  .section-content a,
  .section-content button {
    font-size: 0.75rem;
    padding: 0.45rem 0.8rem;
  }
}

/* Landscape orientation adjustments */
@media (max-width: 768px) and (orientation: landscape) {
  .top-header {
    min-height: 45px;
    padding: 0.5rem 1rem;
  }

  .mobile-drawer {
    width: min(70vw, 320px);
    right: calc(-1 * min(70vw, 320px));
  }

  .mobile-drawer.vertical-layout {
    padding: 0 0.5rem;
  }

  .drawer-header {
    padding: 0.75rem;
  }

  .section-toggle {
    padding: 0.75rem;
  }

  .section-content a,
  .section-content button {
    padding: 0.5rem 1rem;
  }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .hamburger-line {
    height: 2px;
  }

  .close-icon::before,
  .close-icon::after {
    height: 1px;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .dropdown-menu {
    animation: none;
  }

  .mobile-drawer,
  .hamburger-line,
  .toggle-icon {
    transition: none;
  }

  .mobile-overlay {
    animation: none;
  }
}

/* Print styles */
@media print {
  .top-header {
    position: static;
    background: white;
    box-shadow: none;
    padding: 0.5rem 0;
  }

  .mobile-menu-toggle,
  .mobile-drawer,
  .mobile-overlay {
    display: none;
  }

  .dropdown-menu {
    position: static;
    display: none;
  }
}</style>
