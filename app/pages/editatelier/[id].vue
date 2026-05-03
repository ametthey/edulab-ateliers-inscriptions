<script setup lang="ts">
import { OUTILS, REFERENTS } from '~~/shared/validators'
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
  outil: atelier.value?.outil ?? '',
  referent: atelier.value?.referent ?? '',
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
  } catch (error) {
    console.log(error)
  }
}

/*****************************************
 * Meta
 *****************************************/
const title = 'modifier l\'atelier'
const description = ''

definePageMeta({
  middleware: 'auth',
  layout: 'default',
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
    <PageHeader margin="mb-8 mt-8" :titre="title" />
    <UForm @submit="submitEditAtelier">
      <div class="flex flex-col items-center gap-2">
        <FormInput
          v-model="editFormInfos.titre"
          label="Titre de l'atelier"
          name="titre-atelier"
          type="text"
          width="w-100"
          placeholder="Entrer le titre de l'atelier"
        />
        <FormTextarea
          v-model="editFormInfos.description"
          label="Description de l'atelier"
          name="description-atelier"
          placeholder="Entrer la description de l'atelier"
          rows="10"
          width="w-100"
        />
        <FormInput
          v-model="editFormInfos.date"
          label="Date de l'atelier"
          name="date-atelier"
          type="text"
          placeholder="23/04/25"
          width="w-100"
        />
        <FormInput
          v-model="editFormInfos.horaires"
          label="Horaire de l'atelier"
          name="horaire-atelier"
          type="text"
          placeholder="14h à 18h30"
          width="w-100"
        />
        <FormInput
          v-model="editFormInfos.nb_places"
          label="Nombre de places"
          name="places-atelier"
          type="number"
          placeholder="6"
          width="w-100"
        />
        <FormSelect
          v-model="editFormInfos.outil"
          label="Outil"
          :items="OUTILS.map(o => ({ label: o, value: o }))"
          width="w-100"
        />
        <FormSelect
          v-model="editFormInfos.referent"
          label="Référent"
          :items="REFERENTS.map(r => ({ label: r, value: r }))"
          width="w-100"
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
</template>
