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
    <UContainer>
      <div class="gestion-title mt-10">
        <p class="text-2xl font-bold">{{title}}</p>
      </div>
      <div class="flex flex-col items-start justify-items-start mt-12 container-formulaire-public">
        <UForm
          @submit="submitAtelierInfos"
          class="flex flex-col items-start justify-items-start"
        >
        <div class="flex flex-col">
          <!-- Titre de l'atelier -->
          <FormInput
            v-model="createFormInfos.titre"
            label="Titre de l'atelier"
            name="titre-atelier"
            type="text"
            placeholder="Entrer le titre de l'atelier"
          />
          <FormSelect
            v-model="createFormInfos.outil"
            label="Outil"
            :items="setOutils"
          />
          <div class="flex flex-row gap-4 ">
            <!-- Date de l'atelier -->
            <FormInput
                v-model="createFormInfos.date"
                label="Date de l'atelier"
                name="date-atelier"
                type="text"
                placeholder="23/04/25"
                />
            <!-- Horaires de l'atelier -->
            <FormInput
              v-model="createFormInfos.horaires"
              label="Horaire de l'atelier"
              name="horaire-atelier"
              type="text"
              placeholder="14h à 18h30"
            />
          </div>
          <div class="flex flex-col gap-0">
            <!-- Description de l'atelier -->
            <FormTextarea
              v-model="createFormInfos.description"
              label="Description de l'atelier"
              name="description-atelier"
              placeholder="Entrer la description de l'atelier"
            />
            <!-- Nombre de places de l'atelier -->
            <FormInput
              v-model="createFormInfos.nb_places"
              label="Places disponibles de l'atelier"
              name="places-atelier"
              type="number"
              placeholder="6"
            />
          </div>
        </div>
          <!-- Bouton envoyer -->
          <UButton
            type="submit"
            color="neutral"
            variant="outline"
            size="md"
            class="font-bold text-sm uppercase mt-6"
          >
            Envoyer
          </UButton>
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

      </div>
    </UContainer>
  </div>
</template>
