<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const liens = ref<ButtonProps[]>([
  {
    label: 'Ajouter un atelier',
    color: 'neutral',
    to: '/createatelier'
  },
  {
    label: 'Gérer les ateliers',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
    to: '/gestion'
  }
])
</script>

<template>
  <UPageCTA
    title="Outil de gestion d'ateliers et de création de formulaire"
    description="Sur cette page va se trouver la liste de tout les ateliers en cours avec les informations concernant le nombre de participants ..."
    orientation="horizontal"
    reverse
    :links="liens"
  >
  <NuxtImg
    src="/riso.webp"
    alt="riso à l'édulab"
    sizes="90vw sm:60vw md:450px"
    format="webp"
    width="439"
    height="292"
    preload
    fetchPriority="high"
  />
  </UPageCTA>
</template>
