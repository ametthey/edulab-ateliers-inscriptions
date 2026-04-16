<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
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
    :links="links"
  >
   <img
      src="https://www.edulabpasteur.fr/wp-content/uploads/2025/10/dsc00645-750x500.webp"
      width="320"
      height="364"
      alt="Illustration"
      class="w-full rounded-lg"
      loading="lazy"
    />
  </UPageCTA>
</template>
