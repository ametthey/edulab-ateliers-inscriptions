<script setup lang="ts">
const { data } = await useFetch('/api/atelier.informations')
const { data: inscriptionsData } = await useFetch('/api/inscription.informations')

const getNombreInscriptions = (atelierId) =>
  inscriptionsData.value?.filter(i => i.atelier_id === atelierId).length ?? 0

/*****************************************
 * Meta
 *****************************************/
const title = 'Page des ateliers'
const description = ''

definePageMeta({
  layout: 'page-public'
})
usePageMeta(title, description)
</script>

<template>
  <!-- <div> -->
  <div id="main-container" class="py-10 w-full main-height flex flex-col items-center justify-start">
    <PageHeader margin="mt-8 mb-8" titre="les formulaires d'inscription" />

    <div class="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-8">
      <UCard class="card-atelier " v-for="atelier in data" variant="outline" :key="atelier.id" :ui="{ 'root': 'rounded-xs' ,'body': 'p-4 sm:p-4 grid grid-cols-2 grid-rows-3 w-full h-full', 'header': 'border-color: #fff' }">
        <div class="container-titre col-span-2 place-self-stretch self-stretch row-span-1">
          <p class="text-xl font-base">{{ atelier.titre }}</p>
        </div>
        <div class="container-date-horaires flex justify-center flex-col col-span-2 place-self-stretch self-stretch row-span-1">
          <p class="text-base text-base/4 font-light">Le {{ atelier.date }}</p>
          <p class="text-base text-base/4 font-light">{{ atelier.horaires }}</p>
        </div>
        <div class="flex justify-center flex-col place-self-stretch self-stretch row-span-1">
          <p class="text-sm text-sm/4 font-medium">{{ atelier.nb_places - getNombreInscriptions(atelier.id) }}/{{ atelier.nb_places }} places disponibles</p>
        </div>
        <div class="bg-red-250 self-center justify-self-center">
          <UButton
            :to="getNombreInscriptions(atelier.id) >= atelier.nb_places ? undefined : `/ateliers/${atelier.slug}`"
            :label="getNombreInscriptions(atelier.id) >= atelier.nb_places ? 'Complet' : 'S\'inscrire'"
            :disabled="getNombreInscriptions(atelier.id) >= atelier.nb_places"
            :color="getNombreInscriptions(atelier.id) >= atelier.nb_places ? 'error' : 'neutral'"
            :variant="getNombreInscriptions(atelier.id) >= atelier.nb_places ? 'solid' : 'outline'"
            size="md"
            class="font-base text-sm-4 text-sm uppercase w-auto"
            block
            />
        </div>
      </UCard>
    </div>
  </div>
</template>
