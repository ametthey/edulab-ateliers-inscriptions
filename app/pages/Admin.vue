<script setup>
const { data, refresh } = await useFetch('/api/atelier.informations')

/*****************************************
 * Tableau
 *****************************************/
const columns = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'titre', header: 'Titre' },
  { accessorKey: 'horaires', header: 'Horaires' },
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'description', header: 'Description' },
  { accessorKey: 'nb_places', header: 'Places' },
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
  layout: 'default'
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

      <UTable :data="data" :columns="columns" class="flex-1">
        <template #lien-cell="{ row }">
          <NuxtLink :to="`/ateliers/atelier-${row.original.id}`" target="_blank">
          Lien vers l'atelier
          </NuxtLink>
        </template>

        <template #supprimer-cell="{ row }">
          <UButton color="error" variant="ghost" @click="supprimerAtelier(row.original.id)">
            Supprimer
          </UButton>
        </template>
      </UTable>
      <div class="mb-12">
        <NuxtLink to="/Ateliers">
        Voir les ateliers
        </NuxtLink>
      </div>
    </UContainer>
  </div>
</template>

