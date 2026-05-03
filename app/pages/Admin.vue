<script setup>
const { data, refresh } = await useFetch('/api/atelier.informations')
const { data: inscriptionsData } = await useFetch('/api/inscription.informations')

/*****************************************
 * Tableau
 *****************************************/
const columns = [
  { accessorKey: 'titre', header: 'Atelier' },
  { accessorKey: 'date', header: 'Date' },
  { accessorKey: 'outil', header: 'Outil' },
  { accessorKey: 'referent', header: 'Référent' },
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
usePageMeta(title, description)
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
  <div id="main-container" class="py-10 w-full main-height flex flex-col items-center justify-start">
      <PageHeader margin="mt-8 mb-8" titre="les ateliers en cours" />
      <UTable
        id="tableauAteliers"
        :empty="'pas d\'atelier'"
        :data="data"
        :columns="columns"
        class="w-3/4"
      >
        <template #dispo_places-cell="{ row }">
          {{ Number(row.original.nb_places) - (inscriptionsData?.filter(i => i.atelier_id === row.original.id).length ?? 0) }}
        </template>
          <template #modifier-header>Modifier</template>
          <template #supprimer-header>Supprimer</template>
        <template #modifier-cell="{ row }">
          <UButton class="button-admin-table" color="info" variant="ghost" @click="navigateTo(`/editatelier/${row.original.id}`)">
          Modifier
          </UButton>
        </template>
        <template #supprimer-cell="{ row }">
          <UButton class="button-admin-table" color="error" variant="ghost" @click="supprimerAtelier(row.original.id)">
          Supprimer
          </UButton>
        </template>
      </UTable>
      <UButton color="neutral" variant="outline" size="md" class="font-bold text-sm uppercase" to="/createatelier" label="Créer un nouvel atelier" />
  </div>
</template>
