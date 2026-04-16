import type { RouterConfig } from '@nuxt/schema'

/* Les pages
 * Admin.vue
 * CreateAtelier.vue
 * Ateliers.vue
 * atelier-[slug].vue
 */

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions#routes
  routes: _routes => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/index.vue'),
    },
    {
      name: 'admin',
      path: '/Admin',
      component: () => import('~/pages/Admin.vue'),
    },
    {
      name: 'createatelier',
      path: '/CreateAtelier',
      component: () => import('~/pages/CreateAtelier.vue'),
    },
    {
      name: 'ateliers',
      path: 'Ateliers',
      component: () => import('~/pages/Ateliers.vue'),
    },
    {
      name: 'atelier-slug',
      path: '/ateliers/:slug',
      component: () => import('~/pages/ateliers/atelier-[slug].vue'),
    },
  ],
} satisfies RouterConfig

