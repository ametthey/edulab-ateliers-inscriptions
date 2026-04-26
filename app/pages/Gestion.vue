<script setup>
const { data } = await useFetch('/api/atelier.informations')
const { data: inscriptionsData, refresh: refreshInscriptions } = await useFetch('/api/inscription.informations')

const columnsInscriptionsAtelier = [
  { id: 'numero_place', header: 'N°' },
  { accessorKey: 'prenom', header: '' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'telephone', header: 'Téléphone' },
  { accessorKey: 'age', header: 'Âge' },
  { id: 'mail_confirmation', header: '' },
  { id: 'mail_invitation', header: '' },
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
 * Meta
 *****************************************/
const title = 'Gestion des ateliers'
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
      <PageHeader :titre="title" />
      <div v-for="atelier in data" :key="atelier.id" class="mt-12">

        <!-- INFOS -->
        <div class="flex flex-col items-start max-w-9/10 gap-2 my-2">
          <div class="flex flew-row  items-center gap-4">
            <p class="text-xl font-base">{{ atelier.titre }}</p>-
            <p class="text-lg font-light">{{ Number(atelier.nb_places) - (inscriptionsData?.filter(i => i.atelier_id === atelier.id).length ?? 0) }}/{{ Number(atelier.nb_places) }} places disponibles</p>
          </div>
          <p class="text-sm font-bold">Le {{ atelier.date }} de {{ atelier.horaires }}</p>
          <p class="text-sm font-light w-90">{{ atelier.description }}</p>
        </div>

        <!-- TABLEAUX -->
        <UTable
          :empty="'pas d\'inscriptions'"
          :data="inscriptionsData?.filter(i => i.atelier_id === atelier.id) ?? []"
          :columns="columnsInscriptionsAtelier"
          class="flex-1 mt-4"
        >
          <template #prenom-header>Prénom<br>Nom</template>
          <template #mail_confirmation-header>Email<br>confirmation</template>
          <template #mail_invitation-header>Email<br>invitation</template>
          <template #numero_place-cell="{ row }">{{ row.index + 1 }}</template>
          <template #mail_confirmation-cell="{ row }">️✅</template>
          <template #mail_invitation-cell="{ row }">❌</template>
          <template #supprimer-cell="{ row }">
            <UButton :ui="{ 'base' : 'px-2 py-1' }" color="error" variant="ghost" @click="supprimerInscription(row.original.id)">
              Supprimer
            </UButton>
          </template>
        </UTable>

         <USeparator class="mt-16 mb-24" :label="atelier.titre" color="neutral" type="solid" />
      </div>

    </UContainer>
    <BoiteConnexion @click="logout" />
  </div>
</template>
