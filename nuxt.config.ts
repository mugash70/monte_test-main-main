// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'path'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n'
  ],
  build: {
    transpile: ['vuetify']
  },
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/css/layout.css'
  ],
  nitro: {
    compatibilityDate: '2025-06-19'
  },
  i18n: {
    strategy: 'prefix',
    locales: ['en', 'mn', 'ch'],
    defaultLocale: 'en',
    vueI18n: resolve('./i18n.config.ts'),
    // compilation: {
    //   strictMessage: false
    // },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      alwaysRedirect: false,
      fallbackLocale: 'en'
    },
    // Disable warnings for missing routes
    skipSettingLocaleOnNavigate: true
  },
  vite: {
    define: {
      'process.env.DEBUG': 'false',
    },
  },

  typescript: {
    strict: true,
    typeCheck: true
  },

  // Router configuration to suppress warnings
  router: {
    options: {
      strict: false,
      sensitive: false
    }
  },

  // Suppress common warnings
  ssr: true,
  experimental: {
    payloadExtraction: false
  }
})
