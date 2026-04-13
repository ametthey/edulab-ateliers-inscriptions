<script setup lang="ts">
defineProps<{
  monid: string
  title: string
  atelier: string
  description: string
  date: string
  horaires: string
  places: string | number
}>()
</script>

<template>
  <div
    :id="monid"
    class="mb-4 mt-8 flex flex-col items-center justify-items-start formulaire-public-presentation"
  >

  <div class="mb-12">
    <NuxtLink to="/Ateliers">
    Retour aux ateliers
    </NuxtLink>
  </div>

    <div class="flex flex-col justify-items-start">
      <span class="style-section">{{ title }}</span>
      <span class="style-section-title">nom: {{ atelier }}</span>
      <span class="style-section-title">description: {{ description }}</span>
      <span class="style-section-title">date: {{ date }}</span>
      <span class="style-section-title">horaires: {{ horaires }}</span>
      <span class="style-section-title">places disponibles: {{ places }}</span>
    </div>
  </div>
</template>
