<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items = ref<TimelineItem[]>([
  {
    date: 'Etape 1',
    title: 'Création d\'atelier',
    description: 'C\'est la 1ère étape, ou l\'on va créer un nouvel atelier avec les informations comme date, heures, titre, description et jauge',
    icon: 'i-lucide-check'
  },
  {
    date: 'Etape 2',
    title: 'Atelier dans l\'administration et la gestion',
    description: 'L\'atelier est automatiquement ajouté sur 2 pages, Administration et Gestion. pour voir les informations principales et les inscrits',
    icon: 'i-lucide-palette'
  },
])
</script>

<template>
  <UTimeline  size="xl" color="neutral" :default-value="3" :items="items" class="w-96"/>
</template>
