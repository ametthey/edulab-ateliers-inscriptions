// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
  '@nuxt/eslint',
  '@nuxt/ui',
  '@nuxt/image',
  '@nuxt/fonts',
   // 'nuxt-mail'
  '@nuxt/icon',
  'nuxt-auth-utils'
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
  icon: {
    provider: 'iconify',
    serverBundle: false,
  },
  devtools: {
    enabled: false,
  },
  ui: {
    colorMode: false
  },
  ssr: false,
  routeRules: {
    // '/': { prerender: true },
    // '/ateliers/**': { swr: true },
    // '/gestion': { swr: true },
    // '/admin': { swr: true },
    // '/createatelier': { swr: 3600 },
    // '/editatelier/**': { isr: 3600 },
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Edulab Ateliers', // default fallback title,
      htmlAttrs: {
        lang: "fr",
      },
      link:[
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  compatibilityDate: '2025-01-15',
  image: {
    domains: ['localhost'],
    quality: 70,
    format: ['jpg', 'png', 'webp'],
    screens: {
      'md': 768,
      'lg': 1024,
      'xl': 1280,
    },
  },
  experimental: {
    defaults: {
      nuxtLink: {
        prefetchOn: 'interaction', // Prefetch on hover/focus instead
      },
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        'zod',
      ]
    }
  },
})
