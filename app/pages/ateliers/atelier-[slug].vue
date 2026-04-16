<script setup lang="ts">
// Récupère l'id de l'atelier depuis l'URL
const route = useRoute()
const id = Number(route.params.slug)

// Charge uniquement l'atelier concerné + son nombre d'inscriptions
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
definePageMeta({
  layout: 'form-public'
})
useHead({
  title: () => atelier.value?.titre ?? '',
  description: () => atelier.value?.description ?? '',
  htmlAttrs: {
    class: 'atelier-public-page'
  }
})
useSeoMeta({
  title: () => atelier.value?.titre ?? '',
  description: () => atelier.value?.description ?? '',
  ogTitle: () => atelier.value?.titre ?? '',
  ogDescription: () => atelier.value?.description ?? '',
})
</script>

<template>
  <div v-if="!atelier">
    Atelier introuvable.
  </div>

  <div v-else>
    <UContainer>
      <div class="flex flex-col mb-10 items-center content-center gap-8">
      <!-- Les informations de présentation  -->
      <FormPresentationAtelier
        :monid="'form-public-atelier-' + atelier.id"
        title="Les informations de l'atelier"
        :atelier="atelier.titre"
        :description="atelier.description"
        :date="atelier.date"
        :horaires="atelier.horaires"
        :places="atelier.nb_places"
        :inscriptions="atelier.nombreInscriptions"
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
        <UButton
            type="submit"
            color="neutral"
            variant="outline"
            size="md"
            class="font-bold text-sm uppercase mt-6 w-max"
            >
            Envoyer
        </UButton>
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
