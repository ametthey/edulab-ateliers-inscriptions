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
    class="flex flex-col gap-4 formulaire-public-presentation"
  >
    <div class="flex flex-col items-center">
      <p class="text-xs uppercase font-extrabold">Atelier</p>
      <p class="text-lg tracking-tight font-light">{{ atelier }}</p>
    </div>
    <div class="flex flex-col items-center">
      <p class="text-xs uppercase font-extrabold">Description</p>
      <p class="text-sm text-center font-light w-60 text-sm/4">{{ description }}</p>
    </div>
    <div class="flex flex-row justify-center items-center gap-8">
      <div class="flex flex-col items-center">
        <p class="text-xs uppercase font-extrabold">Date</p>
        <p class="text-sm text-center font-light text-sm/4">{{ date }}</p>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-xs uppercase font-extrabold">Horaires</p>
        <p class="text-sm text-center font-light text-sm/4">{{ horaires }}</p>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <p class="text-xs uppercase font-extrabold">Nombre de places</p>
      <p class="text-sm text-center font-light text-sm/4">{{ Number(places) - inscriptions }}/{{ Number(places) }} disponible</p>
    </div>
  </div>
</template>
