<script setup lang="ts">
/*****************************************
 * Modal
 *****************************************/
const modalOpen = ref(false)

function closeModal() {
  modalOpen.value = false
  navigateTo('/admin')
}
/*****************************************
 * Récupération de l'atelier à modifier
 *****************************************/
const route = useRoute()
const id = Number(route.params.id)

const { data: ateliersData } = await useFetch('/api/atelier.informations')
const atelier = computed(() => ateliersData.value?.find(a => a.id === id))

// Pré-remplissage du formulaire avec les données existantes
const editFormInfos = ref({
  titre: atelier.value?.titre ?? '',
  horaires: atelier.value?.horaires ?? '',
  date: atelier.value?.date ?? '',
  description: atelier.value?.description ?? '',
  nb_places: atelier.value?.nb_places ?? 0,
})

/*****************************************
 * Soumission — PUT avec l'id
 *****************************************/
const submitEditAtelier = async () => {
  try {
    await $fetch('/api/atelier.informations', {
      method: 'PUT',
      body: { id, ...editFormInfos.value }
    })
    modalOpen.value = true
    await refreshNuxtData('/api/atelier.informations')
  console.log('fini?')
  } catch (error) {
    console.log(error)
  }
}

/*****************************************
 * Meta
 *****************************************/
const title = 'Modifier l\'atelier'
const description = ''

definePageMeta({
  middleware: 'auth',
  layout: 'default',
})
useHead({
  title: title,
  description: description.value,
})
useSeoMeta({
  title: title,
  description: description.value,
  ogTitle: title,
  ogDescription: description.value,
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
  <div class="flex flex-col items-center justify-start mt-4">
    <PageHeader class="mb-4" :titre="title" />
    <UForm @submit="submitEditAtelier">
      <div class="flex flex-col items-center gap-2">
        <FormInput
          v-model="editFormInfos.titre"
          label="Titre de l'atelier"
          name="titre-atelier"
          type="text"
          width="w-80"
          placeholder="Entrer le titre de l'atelier"
        />
        <FormTextarea
          v-model="editFormInfos.description"
          label="Description de l'atelier"
          name="description-atelier"
          placeholder="Entrer la description de l'atelier"
          rows="3"
          width="w-80"
        />
        <FormInput
          v-model="editFormInfos.date"
          label="Date de l'atelier"
          name="date-atelier"
          type="text"
          placeholder="23/04/25"
          width="w-80"
        />
        <FormInput
          v-model="editFormInfos.horaires"
          label="Horaire de l'atelier"
          name="horaire-atelier"
          type="text"
          placeholder="14h à 18h30"
          width="w-80"
        />
        <FormInput
          v-model="editFormInfos.nb_places"
          label="Nombre de places"
          name="places-atelier"
          type="number"
          placeholder="6"
          width="w-80"
        />
      </div>
      <div class="flex flex-wrap justify-center gap-3 mt-6">
        <UButton type="submit">
          Enregistrer
        </UButton>
        <UButton color="neutral" variant="outline" @click="navigateTo('/admin')">
          Annuler
        </UButton>
      </div>
    </UForm>
    <LazyModifyAtelierModalConfirm
      v-model:open="modalOpen"
      :titre="editFormInfos.titre"
      :description="editFormInfos.description"
      :date="editFormInfos.date"
      :horaires="editFormInfos.horaires"
      :nb_places="editFormInfos.nb_places"
      @close="closeModal"
    />
  </div>
    <BoiteConnexion @click="logout" />
</template>
