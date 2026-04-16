// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    // '@nuxt/eslint',
    '@nuxt/fonts',
    // '@nuxt/image'
  ],

  ssr: false,

  devtools: {
    enabled: false
  },

  css: ['~/assets/css/main.css'],

  // routeRules: {
  // // '/': { prerender: true }
  // },
  // routeRules: {
  //   '/_nuxt/**': { headers: { 'cache-control': 'max-age=31536000, immutable' } }
  // },
  // nitro: {
  //   compressPublicAssets: true,
  // },

  compatibilityDate: '2025-01-15',

  // eslint: {
  //   config: {
  //     stylistic: {
  //       commaDangle: 'never',
  //       braceStyle: '1tbs'
  //     }
  //   }
  // }

})
