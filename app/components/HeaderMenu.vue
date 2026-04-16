<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Administration',
    to: '/admin',
  },
  {
    label: 'Gestion des ateliers',
    to: '/gestion',
  },
])
const itemsBackPublic = computed<NavigationMenuItem[]>(() => [
  {
    label: '👤 Les formulaires',
    to: 'ateliers',
  }
])
defineProps<{
  layoutName?: string
}>()
</script>

<template>
  <div v-if="layoutName == 'form-public'">
    <UButton color="neutral" variant="outline" size="md" class="font-bold text-sm uppercase" to="/ateliers" label="Retour aux ateliers" />
  </div>
  <div v-if="layoutName == 'default'" class="flex flex-row items-center">
    <UNavigationMenu color="neutral" :items="items" />
    <UButton color="neutral" variant="outline" size="md" class="ml-4 font-bold text-sm uppercase" to="/ateliers" label="Les formulaires" />
  </div>
</template>
