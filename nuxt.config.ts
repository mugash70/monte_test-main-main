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
    '@mdi/font/css/materialdesignicons.css'
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
    }
  },
  vite: {
    define: {
      'process.env.DEBUG': 'false',
    },
  },
  typescript: {
    strict: true,
    typeCheck: true
  }
})
