// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    'nuxt-mail',
    'nuxt-email-renderer',
    'nuxt-auth-utils'
  ],
  mail: {
    message: {
      from: '"Edulab Pasteur" <noreply@edulabpasteur.fr>',
      cc: '"Team" <team@edulabpasteur.fr>'
    },
    smtp: {
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'bb6df844b48365',
        pass: '534d02c2aeea22',
      },
    },
  },
  icon: {
    provider: 'iconify',
    serverBundle: false,
  },
  devtools: {
    enabled: true,
  },
  ui: {
    colorMode: false
  },
  ssr: false,
  routeRules: {
    // Page statiques généré au build
    // '/': { prerender: true },
    // '/connexion': { prerender: true },
    // '/register': { prerender: true },
    //
    // // page public avec cache - raffraichi en arrière plan
    // '/ateliers': { swr: 60 },
    // '/ateliers/**': { swr: 30 },
    //
    // // Page admin - rendu serveur à chaque requête - jamais mis en cache
    // '/admin': { ssr: true },
    // '/gestion': { ssr: true },
    // '/createatelier': { ssr: true },
    // '/editatelier/**': { ssr: true },
    // '/userinfo': { ssr: true },
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      // title: 'Edulab Ateliers', // default fallback title,
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
    // domains: ['localhost'],
    quality: 70,
    format: ['svg', 'jpg', 'png', 'webp'],
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
    },
  },
})
