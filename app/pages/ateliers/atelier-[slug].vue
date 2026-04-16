<script setup lang="ts">
import { ref } from 'vue'
const { data } = await useFetch('/api/atelier.informations')
const { data: inscriptionsData } = await useFetch('/api/inscription.informations')

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

    const response = await $fetch('/api/atelier.public', {
      method: 'POST',
      body: createFormPublic.value
    })
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
const nombreInscriptions = computed(() =>
  inscriptionsData.value?.filter(i => i.atelier_id === atelier.value?.id).length ?? 0
)

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
  <div v-if="data == undefined">
    No fucking data
  </div>

  <div v-else>
      <UContainer>
        <!-- Les informations de présentation  -->
        <FormPresentationAtelier
          :monid="'form-public-atelier-' + atelier.id"
          title="Les informations de l'atelier"
          :atelier="atelier.titre"
          :description="atelier.description"
          :date="atelier.date"
          :horaires="atelier.horaires"
          :places="atelier.nb_places"
          :inscriptions="nombreInscriptions"
        />
        <!-- Le formulaire -->
        <div class="flex flex-col align-center container-formulaire-public">
          <UForm
            v-model="createFormPublic.id"
            :data-id="atelier.id"
            class="pb-8 pt-4 min-w-lg mx-auto flex flex-col items-start justify-items-start"
            @submit="submitAtelierPublic">
            <p class="text-2xl font-bold">Le formulaire de l'atelier</p>
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
                l'id de l'atelier est {{atelier.id}}
                <br>
                La personne est {{ createFormPublic.prenom }}
                <br>
                Son email est {{ createFormPublic.email }}
                <br>
                Son téléphone est {{ createFormPublic.telephone }}
                <br>
                Son age est {{ createFormPublic.age}}
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
