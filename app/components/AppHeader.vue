<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Administration',
    to: '/Admin',
    active: route.name === 'Admin'
  },
  {
    label: 'Création d\'atelier',
    to: '/CreateAtelier',
    active: route.name === 'CreateAtelier'
  },
])
</script>

<template>
  <UNavigationMenu :items="items" />
</template>
