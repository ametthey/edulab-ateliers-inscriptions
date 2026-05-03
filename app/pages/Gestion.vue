<script setup>
const { data } = await useFetch('/api/atelier.informations')
const { data: inscriptionsData, refresh: refreshInscriptions } = await useFetch('/api/inscription.informations')

const columnsInscriptionsAtelier = [
  { id: 'numero_place', header: 'N°' },
  { accessorKey: 'prenom', header: '' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'telephone', header: 'Téléphone' },
  { accessorKey: 'age', header: 'Âge' },
  {
    header: 'Emails',
    meta: { id: 'column-classic', class: { th: 'column-email pt-1 pb-1 text-center border-b-2 border-(--ui-border-accented) rounded-xs' } },
    columns: [
      { id: 'mail_confirmation', header: 'Confirmation', meta: { class: { th: 'th-conf' } } },
      { id: 'mail_invitation', header: 'Invitation', meta: { class: { th: 'th-inv' } } },
    ]
  },
  { id: 'status', header: 'Status' },
  { id: 'supprimer', header: 'Supprimer' }
]

/*****************************************
 * Meta
 *****************************************/
const title = 'gestion des ateliers'
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
    <PageHeader margin="mt-8 mb-8" :titre="title" />
    <div
      v-for="atelier in data"
      :key="atelier.id"
      class="w-10/12"
    >

      <GestionAtelierInfos :atelier="atelier" :inscriptions-data="inscriptionsData" />
      <GestionAtelierTableau :atelier="atelier" :inscriptions-data="inscriptionsData" :columns="columnsInscriptionsAtelier" @deleted="refreshInscriptions" />


      <USeparator class="mt-16 mb-24" :label="atelier.titre" color="neutral" type="solid" />
    </div>
  </div>
</template>
