<script setup lang="ts">
/*****************************************
 * Modal
 *****************************************/
const modalOpen = ref(false)

function closeModal() {
  modalOpen.value = false
  cleanForm()
}

function cleanForm() {
  createFormInfos.value = setFormInfos()
}
/*****************************************
 * Formulaire
 *****************************************/
const createFormInfos = ref(setFormInfos())

const submitAtelierInfos = async () => {
  try {
    const response = await $fetch('/api/atelier.informations', {
      method: 'POST',
      body: createFormInfos.value
    })
    modalOpen.value = true
    console.log('submit atelier infos')

  } catch(error) {
    // error
    console.log(error)
  }
}
/*****************************************
 * Meta
 *****************************************/
const title = 'Créer un nouvel atelier'
const description = ''

definePageMeta({
  middleware: 'auth',
  layout: 'default',
  // layoutTransition: 'layout',
})
useHead({
  title: title,
  description: description.value,
})
useSeoMeta({
  title: title,
  description: description.value,
  ogTitle: title,
  ogDescription: description.value
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
    <UForm @submit="submitAtelierInfos">
      <div class="flex flex-col items-center gap-2">
        <FormInput
          v-model="createFormInfos.titre"
          label="Titre de l'atelier"
          name="titre-atelier"
          type="text"
          width="w-80"
          placeholder="Entrer le titre de l'atelier"
        />
        <FormTextarea
          v-model="createFormInfos.description"
          label="Description de l'atelier"
          name="description-atelier"
          placeholder="Entrer la description de l'atelier"
          rows="3"
          width="w-80"
        />
        <FormSelect
          v-model="createFormInfos.outil"
          label="Outil"
          :items="setOutils"
          width="w-80"
        />
        <FormInput
          v-model="createFormInfos.date"
          label="Date de l'atelier"
          name="date-atelier"
          type="text"
          placeholder="23/04/25"
          width="w-80"
        />
        <FormInput
          v-model="createFormInfos.horaires"
          label="Horaire de l'atelier"
          name="horaire-atelier"
          type="text"
          placeholder="14h à 18h30"
          width="w-80"
        />
        <FormInput
          v-model="createFormInfos.nb_places"
          label="Nombre de places"
          name="places-atelier"
          type="number"
          placeholder="6"
          width="w-80"
        />
      </div>
      <div class="flex flex-wrap justify-center gap-3 mt-2">
      <UButton
        type="submit"
        color="neutral"
        variant="outline"
        size="md"
        class="font-bold text-sm uppercase"
      >
        Envoyer
      </UButton>
      </div>
    </UForm>
    <LazyCreateAtelierModalConfirm
      v-model:open="modalOpen"
      :titre="createFormInfos.titre"
      :description="createFormInfos.description"
      :date="createFormInfos.date"
      :horaires="createFormInfos.horaires"
      :nb_places="createFormInfos.nb_places"
      @close="closeModal"
    />
    />
    <BoiteConnexion @click="logout" />
  </div>
</template>
