<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Administration',
    to: 'admin',
  },
  {
    label: 'Gestion des ateliers',
    to: 'gestion',
  },
  {
    label: 'Création d\'atelier',
    to: 'createatelier',
  }
])
const itemsBackPublic = computed<NavigationMenuItem[]>(() => [
  {
    label: '👤 Les formulaires',
    to: 'ateliers',
  }
])
const itemsPublic = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Retour aux ateliers',
    to: '/ateliers',
  }
])
defineProps<{
  layoutName?: string
}>()
</script>

<template>
  <div v-if="layoutName == 'form-public'">
    <UNavigationMenu color="neutral" :items="itemsPublic" />
  </div>
  <div v-if="layoutName == 'default'" class="flex flex-row">
    <UNavigationMenu color="neutral" :items="items" />
    <UNavigationMenu color="warning" variant="link" :items="itemsBackPublic" />
  </div>
</template>
