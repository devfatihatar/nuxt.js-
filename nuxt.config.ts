
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: true,
  nitro: {
    preset: 'github-pages'
  },
  app: {
    baseURL: '/nuxt.js/'
  }
})
