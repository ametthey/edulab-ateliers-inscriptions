<script setup lang="ts">
const route = useRoute()
const id = Number(route.params.slug)

const { data: atelier } = await useFetch(`/api/ateliers/${id}`)

/*****************************************
 * Modal
 *****************************************/
const modalOpen = ref(false)

function closeModal() {
  modalOpen.value = false
  cleanForm()
}

function cleanForm() {
  createFormPublic.value = setFormPublic()
}

/*****************************************
 * Formulaire
 *****************************************/
const createFormPublic = ref(setFormPublic())

const submitAtelierPublic = async () => {
  try {
    createFormPublic.value.atelier_id = atelier.value!.id
    await $fetch('/api/inscription', {
      method: 'POST',
      body: createFormPublic.value
    })
    modalOpen.value = true
  } catch(error) {
    console.log(error)
  }
}

/*****************************************
 * Meta
 *****************************************/
const titre = "Le formulaire d\'atelier"
const description = "L'aetlier sera sur ..."
definePageMeta({
  layout: 'form-public'
})
useHead({
  title: titre,
  description: description.value,
  htmlAttrs: {
    class: 'atelier-public-page'
  }
})
useSeoMeta({
  title: titre,
  description: description.value,
  ogTitle: titre,
  ogDescription: description.value,
})
</script>

<template>
  <div v-if="!atelier">
    Atelier introuvable.
  </div>

  <div v-else>
    <UContainer>
      <div class="flex flex-col mt-8 items-center gap-8">
      <!-- Les informations de présentation  -->
        <Introduction
          :titre="atelier.titre"
          :places="atelier.nb_places"
          :disponibles="atelier.nombreInscriptions"
          :date="atelier.date"
          :horaires="atelier.horaires"
          :description="atelier.description"
          orientation="vertical"
        />
      <!-- Le formulaire -->
      <div class="flex flex-col">
        <UForm
            :data-id="atelier.id"
            class="flex flex-col items-center"
            @submit="submitAtelierPublic">

        <FormInput
            v-model="createFormPublic.prenom"
            label="Prénom et Nom"
            name="prenom-atelier-public"
            type="text"
            placeholder="Entrez votre prénom et nom"
            />
        <FormInput
            v-model="createFormPublic.email"
            label="Email"
            name="email-atelier-public"
            type="email"
            placeholder="Entrez votre email"
            />
        <FormInput
            v-model="createFormPublic.telephone"
            label="Téléphone"
            name="telelephone-atelier-public"
            type="tel"
            placeholder="Entrez votre téléphone"
            />
        <FormInput
            v-model="createFormPublic.age"
            label="Âge"
            name="age-atelier-public"
            type="number"
            placeholder="Entrez votre âge"
            />
        <!-- Bouton envoyer -->
        <LazyUButton
            type="submit"
            color="neutral"
            variant="outline"
            size="md"
            class="font-bold text-sm uppercase mt-6 w-max"
            >
            Envoyer
        </LazyUButton>
        </UForm>
        <LazyAtelierSlugModalConfirm
            v-model:open="modalOpen"
            :atelier_id="atelier.id"
            :prenom="createFormPublic.prenom"
            :email="createFormPublic.email"
            :telephone="createFormPublic.telephone"
            :age="createFormPublic.age"
            @close="closeModal"
            />

      </div>
    </div>
    </UContainer>
  </div>
</template>
