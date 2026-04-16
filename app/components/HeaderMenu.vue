<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Administration',
    to: 'admin',
    active: route.name === 'admin'
  },
  {
    label: 'Gestion des ateliers',
    to: 'gestion',
    active: route.name === 'gestion'
  },
  {
    label: 'Création d\'atelier',
    to: 'createatelier',
    active: route.name === 'createatelier'
  },
  {
    label: 'Les formulaires',
    to: 'ateliers',
    active: route.name === 'Ateliers'
  }
])
const itemsPublic = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Retour aux ateliers',
    to: '/ateliers',
    active: route.name === 'ateliers'
  }
])

defineProps<{
  layoutName: string
}>()
</script>

<template>
  <div v-if="layoutName == 'form-public'">
    <UNavigationMenu color="neutral" :items="itemsPublic" />
  </div>
  <div v-if="layoutName == 'default'">
    <UNavigationMenu color="neutral" :items="items" />
  </div>
</template>
