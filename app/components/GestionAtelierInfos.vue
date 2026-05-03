<script setup>
defineProps({
  atelier: Object,
  inscriptionsData: Array,
});
</script>

<template>
  <!-- INFOS -->
  <div class="flex flex-col items-start max-w-4/6 mr-auto gap-2 my-2">
    <div class="flex flew-row  items-center gap-4">
      <p class="text-xl font-base">{{ atelier.titre }}</p>-
      <p class="text-lg font-extrabold">{{ atelier.referent }}</p>
    </div>
    <p class="text-sm font-light">Nombre de places {{ Number(atelier.nb_places) }}</p>
    <p class="text-sm font-light">Places disponibles {{ Number(atelier.nb_places) - (inscriptionsData?.filter(i => i.atelier_id === atelier.id).length ?? 0) }}</p>
    <p class="text-sm font-bold">Le {{ atelier.date }} de {{ atelier.horaires }}</p>
    <p class="text-sm font-light w-140">{{ atelier.description }}</p>
  </div>
</template>
