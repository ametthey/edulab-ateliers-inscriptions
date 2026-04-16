<script setup>
import { ref } from 'vue'
const { data } = await useFetch('/api/atelier.informations')

/*****************************************
 * Meta
 *****************************************/
const title = 'Page des ateliers'
const description = ''

definePageMeta({
  layout: 'page-public'
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
      <p class="text-2xl font-bold">Liste des ateliers</p>
      <div class="mt-1 mb-10 mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-8">
        <UCard
          v-for="atelier in data"
          :key="atelier.id"
          class=""
        >
          <template #header>
            <div class="my-2 flex flex-col justify-items-start">
              <p class="text-sm font-bold">Titre</p>
              <p class="text-sm font-light">{{ atelier.titre }}</p>
            </div>
            <div class="my-2 flex flex-col justify-items-start">
              <p class="text-sm font-bold">Date & Horaires</p>
              <p class="text-sm font-light">Le {{ atelier.date }} de {{ atelier.horaires }}</p>
            </div>
            <div class="my-2 flex flex-col justify-items-start">
              <p class="text-sm font-bold">Nombre de places</p>
              <p class="text-sm font-light">{{ atelier.nb_places }} places</p>
              <p class="text-sm font-light">{{ atelier.nb_places }} / {{ atelier.nb_places }} disponibles</p>
            </div>
          </template>

          <template #footer>
            <UButton
              :to="`/ateliers/atelier-${atelier.id}`"
              label="S'inscrire"
              color="neutral"
              class="w-auto"
              block
            />
          </template>
        </UCard>
      </div>

    </UContainer>
  </div>
</template>
