<script setup>
const { data, refresh } = await useFetch('/api/atelier.informations')
const { data: inscriptionsData } = await useFetch('/api/inscription.informations')

/*****************************************
 * Tableau
 *****************************************/
const columns = [
  { accessorKey: 'titre', header: 'Atelier' },
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'nb_places', header: 'Jauge' },
  { id: 'dispo_places', header: 'Places dispo' },
  { id: 'modifier', header: '' },
  { id: 'supprimer', header: '' }
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
  middleware: 'auth',
  layout: 'default',
  // layoutTransition: 'layout',
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
/*****************************************
 * Connexion
 *****************************************/
const { user, clear } = useUserSession();
function logout() {
  clear();
  navigateTo("/connexion");
}
</script>

<template>
  <div>
    <UContainer>
      <PageHeader titre="Les ateliers en cours" />
      <div class="my-12">
      <UTable id="tableauAteliers" :empty="'pas d\'atelier'" :data="data" :columns="columns" class="flex-1">
        <template #dispo_places-cell="{ row }">
          {{ Number(row.original.nb_places) - (inscriptionsData?.filter(i => i.atelier_id === row.original.id).length ?? 0) }}
        </template>
          <template #modifier-header>Modifier</template>
          <template #supprimer-header>Supprimer</template>
        <template #modifier-cell="{ row }">
          <UButton color="info" variant="ghost" @click="navigateTo(`/editatelier/${row.original.id}`)">
          Modifier
          </UButton>
        </template>
        <template #supprimer-cell="{ row }">
          <UButton color="error" variant="ghost" @click="supprimerAtelier(row.original.id)">
          Supprimer
          </UButton>
        </template>
      </UTable>
      </div>
      <UButton color="neutral" variant="outline" size="md" class="font-bold text-sm uppercase" to="/createatelier" label="Créer un nouvel atelier" />

    </UContainer>
        <BoiteConnexion @click="logout" />
  </div>
</template>
