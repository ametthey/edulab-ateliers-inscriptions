<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items = ref<TimelineItem[]>([
  {
    date: 'Etape 1',
    title: 'Choix d\'un des ateliers',
    description: 'Sur la pages Ateliers, la personne va choisir un des ateliers',
    icon: 'i-lucide-check'
  },
  {
    date: 'Etape 2',
    title: 'Inscription de la personne via le formulaire',
    description: 'La personne va rentrer ses informations et envoyer le formulaire',
    icon: 'i-lucide-form'
  },
  {
    date: 'Etape 3',
    title: 'Email de confirmation',
    description: 'La personne recevra directement un email de confirmation si il reste des places disponibles',
    icon: 'i-lucide-send-horizontal'
  },
  {
    date: 'Etape 4',
    title: 'Email d\'invitation',
    description: 'Une semaine avant l\'atelier, un email d\'invitation sera automatiquement envoyé à la personne',
    icon: 'i-lucide-mail'
  },
])
</script>

<template>
  <UTimeline  size="xl" color="neutral" :default-value="3" :items="items" class="w-96"/>
</template>
