<script setup lang="ts">
defineProps<{
  monid: string
  title: string
  atelier: string
  description: string
  date: string
  horaires: string
  places: string | number
  inscriptions: number
}>()
</script>

<template>
  <div
    :id="monid"
    class="mb-4 mt-8 max-w-lg mx-auto flex flex-col items-start justify-items-start formulaire-public-presentation"
  >
    <p class="text-2xl font-bold">{{ title }}</p>
    <div class="flex flex-col">
      <!-- Nom de l'atelier -->
      <div class="my-2 flex flex-col justify-items-start">
        <p class="text-sm  font-bold">Nom de l'atelier</p>
        <p class="text-sm font-light">{{ atelier }}</p>
      </div>
      <div class="my-2 flex flex-col justify-items-start">
        <p class="text-sm  font-bold">Description de l'atelier</p>
        <p class="text-sm font-light w-90">{{ description }}</p>
      </div>
      <div class="my-2 flex flex-col justify-items-start">
        <p class="text-sm  font-bold">Date de l'atelier</p>
        <p class="text-sm font-light">{{ date }}</p>
      </div>
      <div class="my-2 flex flex-col justify-items-start">
        <p class="text-sm  font-bold">Horaires de l'atelier</p>
        <p class="text-sm font-light">{{ horaires }}</p>
      </div>
      <div class="my-2 flex flex-col justify-items-start">
        <p class="text-sm  font-bold">Nombre de places disponible</p>
        <p class="text-sm font-light">{{ Number(places) - inscriptions }} disponible</p>
      </div>
    </div>
  </div>
</template>
