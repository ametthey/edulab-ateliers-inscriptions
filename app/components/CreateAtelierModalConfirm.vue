<script setup lang="ts">
defineProps<{
  open: boolean
  titre: string
  description: string
  date: string
  horaires: string
  nb_places: string | number
  outil: string
}>()

defineEmits<{
  'update:open': [value: boolean]
  'close': []
}>()
</script>

<template>
  <UModal :dismissible="false" :open="open" @update:open="$emit('update:open', $event)">
    <template #content>
      <div class="p-6 space-y-4">
        <p class="text-base font-light">
          Tu viens de créer un atelier et en même temps un formulaire !
          <br><br>
          Voici les informations principales :
          <br>
          <span class="font-bold">Titre de l'atelier</span> {{ titre }}<br>
          <span class="font-bold">Description</span> {{ description }}<br>
          <span class="font-bold">Date</span> {{ date }}<br>
          <span class="font-bold">Horaires</span> {{ horaires }}<br>
          <span class="font-bold">Nombre de places</span> {{ nb_places }}<br>
          <span class="font-bold">Outil</span> {{ outil }}<br>
          <br>
          <br>
          Aller dans <NuxtLink class="underline" to="/Admin">Administration</ NuxtLink> pour voir votre atelier
        </p>
        <div class="flex justify-end">
          <UButton label="Fermer" color="primary" @click="$emit('close')" />                                                                                                                      </div>
      </div>
    </template>
  </UModal>
</template>
