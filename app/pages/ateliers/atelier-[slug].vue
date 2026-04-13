<script setup lang="ts">
import { ref } from 'vue'
const { data } = await useFetch('/api/atelier.informations')

/*****************************************
 * Modal
 *****************************************/
const modalOpen = ref(false)

function closeModal() {
  modalOpen.value = false
  submittedData.value = null
  resetForm()
}

/*****************************************
 * Formulaire
 *****************************************/
const createFormPublic = ref(setFormPublic())

const submitAtelierPublic = async () => {
  try {
    // const response = await $fetch('/api/atelier.informations', {
    //   method: 'POST',
    //   body: createFormInfos.value
    // })
    modalOpen.value = true


    // console.log(`le champ titre est ${response.atelier.titre} `)
    console.log('submit atelier public')
  } catch(error) {
    // error
    console.log(error)
  }
}
/*****************************************
 * Post config
 *****************************************/
const route = useRoute()
const atelier = computed(() => data.value?.find(a => a.id === Number(route.params.slug)))

/*****************************************
 * Meta
 *****************************************/
const title = atelier.value.titre
const description = atelier.value.description

definePageMeta({
  layout: 'form-public'
})
useHead({
  title: title,
  description: description,
  htmlAttrs: {
    class: 'atelier-public-page'
  }
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
        <FormPresentationAtelier
          :monid="'form-public-atelier-' + atelier.id"
          title="Formulaire d'inscription"
          :atelier="atelier.titre"
          :description="atelier.description"
          :date="atelier.date"
          :horaires="atelier.horaires"
          :places="atelier.nb_places"
        />
        <div class="flex flex-col align-center container-formulaire-public">
          <UForm
            v-model="createFormPublic.id"
            :data-id="atelier.id"
            class="flex flex-col items-center justify-items-center"
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
                class="mt-6"
                >
                Envoyer
            </UButton>
          </UForm>

          <UModal v-model:open="modalOpen">
            <template #content>
              <div class="p-6 space-y-4">
                <p class="text-lg font-semibold">
                Votre inscription est terminé,<br> vous allez reçevoir un email de confirmation.
                <br>
                Voici les informations retenues
                l'id est {{atelier.id}}
                </p>
                <div class="flex justify-end">
                  <UButton
                    label="Fermer"
                    color="primary"
                    @click="closeModal"
                  />
                </div>
              </div>
            </template>
          </UModal>

        </div>
      </UContainer>
  </div>
</template>
