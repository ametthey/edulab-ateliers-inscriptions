<script setup>
import { ref } from 'vue'
const { data } = await useFetch('/api/atelier.informations')

/*****************************************
 * Meta
 *****************************************/
const title = 'Page des ateliers'
const description = ''

definePageMeta({
  layout: 'form-public'
})
useHead({
  title: title,
  description: description,
})
useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <div>
    <UContainer>
      <h1>Liste des ateliers</h1>
      <div class="mt-1 mb-10 mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-8">
        <UCard
          v-for="atelier in data"
          :key="atelier.id"
          class=""
        >
          <template #header>
            <p class="text-sm font-bold">Titre</p>
            <p>{{atelier.titre}}</p>
            <p class="text-sm font-bold">Description</p>
            <p>{{atelier.description}}</p>
            <p class="text-sm font-bold">Horaires</p>
            <p>{{atelier.horaires}}</p>
            <p class="text-sm font-bold">Date</p>
            <p>{{atelier.date}}</p>
            <p class="text-sm font-bold">Places disponibles</p>
            <p>{{atelier.nb_places}}</p>
          </template>

          <template #footer>
            <UButton
              :to="`/ateliers/atelier-${atelier.id}`"
              label="Inscription"
              trailing-icon="i-lucide-file-pen-line"
              color="primary"
              class="w-auto"
              block
            />
          </template>
        </UCard>
      </div>

    </UContainer>
  </div>
</template>
