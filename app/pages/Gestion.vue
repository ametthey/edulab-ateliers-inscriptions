<script setup>
const { data, refresh } = await useFetch('/api/atelier.informations')
const { data: inscriptionsData, refresh: refreshInscriptions } = await useFetch('/api/inscription.informations')

const columnsInscriptions = [
  { id: 'numero_place', header: 'Numéro inscrit' },
  { accessorKey: 'atelier_id', header: 'Atelier' },
  { accessorKey: 'prenom', header: 'Prénom / Nom' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'telephone', header: 'Téléphone' },
  { accessorKey: 'age', header: 'Âge' },
  { id: 'supprimer', header: 'Supprimer' }
]

const columnsInscriptionsAtelier = [
  { id: 'numero_place', header: 'Numéro inscrit' },
  { accessorKey: 'prenom', header: 'Prénom / Nom' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'telephone', header: 'Téléphone' },
  { accessorKey: 'age', header: 'Âge' },
  { id: 'supprimer', header: 'Supprimer' }
]

const supprimerInscription = async (id) => {
  await $fetch('/api/inscription.informations', {
    method: 'DELETE',
    body: { id }
  })
  await refreshInscriptions()
}

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
const title = 'Page de gestion des ateliers'
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
      <div v-for="atelier in data" :key="atelier.id" class="mt-12">
        <div class="grid grid-cols-3 gap-4 my-2">
          <div class="flex flex-col gap-2">
            <div>
              <p class="text-sm font-bold">Titre</p>
              <p class="text-sm font-light">{{ atelier.titre }}</p>
            </div>
            <div>
              <p class="text-sm font-bold">Description</p>
              <p class="text-sm font-light">{{ atelier.description }}</p>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div>
              <p class="text-sm font-bold">Date</p>
              <p class="text-sm font-light">{{ atelier.date }}</p>
            </div>
            <div>
              <p class="text-sm font-bold">Horaires</p>
              <p class="text-sm font-light">{{ atelier.horaires }}</p>
            </div>
          </div>
          <div>
            <p class="text-sm font-bold">Places disponibles</p>
            <p class="text-sm font-light">{{ Number(atelier.nb_places) - (inscriptionsData?.filter(i => i.atelier_id === atelier.id).length ?? 0) }} / {{ Number(atelier.nb_places) }}</p>
          </div>
        </div>

        <UTable
          :data="inscriptionsData?.filter(i => i.atelier_id === atelier.id) ?? []"
          :columns="columnsInscriptionsAtelier"
          class="flex-1 mt-4"
        >
          <template #numero_place-cell="{ row }">{{ row.index + 1 }}</template>
          <template #supprimer-cell="{ row }">
            <UButton color="error" variant="ghost" @click="supprimerInscription(row.original.id)">
              Supprimer
            </UButton>
          </template>
        </UTable>
      </div>

    </UContainer>
  </div>
</template>
