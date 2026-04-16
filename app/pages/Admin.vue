<script setup>
const { data, refresh } = await useFetch('/api/atelier.informations')
const { data: inscriptionsData } = await useFetch('/api/inscription.informations')

/*****************************************
 * Tableau
 *****************************************/
const columns = [
  { accessorKey: 'titre', header: 'Titre' },
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'nb_places', header: 'Places' },
  { id: 'dispo_places', header: 'Places disponible' },
  { id: 'lien', header: 'Lien' },
  { id: 'supprimer', header: 'Supprimer' }
]

/*****************************************
 * Fonction supprimer atelier
 *****************************************/
const supprimerAtelier = async (id) => {
  await $fetch('/api/atelier.informations', {
    method: 'DELETE',
    body: { id }
  })
  await refresh() // recharge les données
}

/*****************************************
 * Meta
 *****************************************/
const title = 'Page d\'administration'
const description = ''

definePageMeta({
  layout: 'default',
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
    <UPageHeader
      :title="title"
      :description="description"
    />

    <UContainer>
      <h1> Tableau des ateliers</h1>

      <UTable id="tableauAteliers" :data="data" :columns="columns" class="flex-1">
        <template #lien-cell="{ row }">
          <NuxtLink :to="`/ateliers/atelier-${row.original.id}`" target="_blank">
          Lien vers l'atelier
          </NuxtLink>
        </template>

        <template #dispo_places-cell="{ row }">
          {{ Number(row.original.nb_places) - (inscriptionsData?.filter(i => i.atelier_id === row.original.id).length ?? 0) }}
        </template>

        <template #supprimer-cell="{ row }">
          <UButton color="error" variant="ghost" @click="supprimerAtelier(row.original.id)">
            Supprimer
          </UButton>
        </template>
      </UTable>
    </UContainer>
  </div>
</template>
