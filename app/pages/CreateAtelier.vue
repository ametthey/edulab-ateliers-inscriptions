<script setup>
import { ref } from 'vue'
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

  } catch(error) {
    // error
    console.log(error)
  }
}
/*****************************************
 * Meta
 *****************************************/
const title = 'Page de création d\'atelier'
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
      <div class="flex flex-col align-center container-formulaire-public">
        <UForm
          @submit="submitAtelierInfos"
          class="flex flex-col items-center justify-items-center"
        >
          <FormSection
            monid="infos"
            title="Ajouter les informations de l'atelier"
          />

          <!-- Titre de l'atelier -->
          <FormInput
            v-model="createFormInfos.titre"
            label="Titre de l'atelier"
            name="titre-atelier"
            type="text"
            placeholder="Entrer le titre de l'atelier"
          />
          <!-- Horaires de l'atelier -->
          <FormInput
            v-model="createFormInfos.horaires"
            label="Horaire de l'atelier"
            name="horaire-atelier"
            type="text"
            placeholder="14h à 18h30"
          />
          <!-- Date de l'atelier -->
          <FormInput
            v-model="createFormInfos.date"
            label="Date de l'atelier"
            name="date-atelier"
            type="text"
            placeholder="23/04/25"
          />
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
          <!-- Bouton envoyer -->
          <UButton
            type="submit"
            class="mt-6"
          >
            Envoyer
          </UButton>
        </UForm>
      </div>
    </UContainer>
  </div>
</template>
