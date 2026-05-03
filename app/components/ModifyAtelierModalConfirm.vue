<script setup lang="ts">
defineProps<{
  open: boolean
  titre: string
  description: string
  date: string
  horaires: string
  nb_places: string | number
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
          La ou les modification(s) ont bien été ajoutée(s)
          <br>
          <br>
          <br>
          Aller dans <NuxtLink class="underline" to="/Admin">Administration</ NuxtLink> pour voir votre atelier à jour
          <br>
          <br>
          Aller dans <NuxtLink class="underline" to="/Gestion">Gestion</ NuxtLink> pour voir les personnes inscrites
        </p>
        <div class="flex justify-end">
          <UButton label="Fermer" color="primary" @click="$emit('close')" />                                                                                                                      </div>
      </div>
    </template>
  </UModal>
</template>
