// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // '@nuxt/eslint',
  '@nuxt/ui',
  // '@nuxt/image',
  '@nuxt/icon'
  // '@nuxt/fonts',
  // 'nuxt-mail'
  ],
  // mail: {
  //   message: {
  //     cc: 'people@public.fr',  // l'adresse expéditeur
  //   },
  //   smtp: {
  //     host: 'sandbox.smtp.mailtrap.io',
  //     port: 2525,
  //     auth: {
  //       user: 'bb6df844b48365',
  //       pass: '534d02c2aeea22',
  //     },
  //   },
  // },

  devtools: false,

  icon: {
    provider: 'iconify',
    serverBundle: false,
  },
    ui: {
    colorMode: false
  },

  ssr: false,

  css: ['~/assets/css/main.css'],

  // routeRules: {
  // '/': { prerender: true }
  // },

  telemetry: false,

  // watch: ['nuxt.config.ts', 'app/app.config.ts'],

  compatibilityDate: '2025-01-15',

  // eslint: {
  //   config: {
  //     stylistic: {
  //       commaDangle: 'never',
  //       braceStyle: '1tbs'
  //     }
  //   }
  // }
  experimental: {
    defaults: {
      nuxtLink: {
        prefetchOn: 'interaction',
      },
    },
  },
})
