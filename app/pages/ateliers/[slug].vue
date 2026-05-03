<script setup lang="ts">
import { inscriptionSchema } from '~~/shared/validators'

const route = useRoute()

const formSchema = inscriptionSchema.omit({ atelier_id: true })

// Le slug est directement utilisable, plus besoin de le convertir en nombre
const { data: atelier } = await useFetch(`/api/ateliers/${route.params.slug}`)

/*****************************************
 * Modal
 *****************************************/
const inscrit = ref(false)
const modalOpen = ref(false)

function closeModal() {
  modalOpen.value = false
  inscrit.value = true
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
  }
}

/*****************************************
 * Meta
 *****************************************/
const titre = computed(() => atelier.value?.titre ?? 'Atelier')
const description = computed(() => atelier.value?.description ?? 'Description')

definePageMeta({
  layout: 'form-public'
})
usePageMeta(titre, description)
</script>

<template>

  <div v-if="!atelier">
    Atelier introuvable.
  </div>

  <div v-else id="main-container" class="my-10 w-full main-height flex flex-col items-center justify-start">
    <div v-if="!inscrit" id="inscrit-statut" class="flex flex-col justify-center items-center gap-10">
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
            :schema="formSchema"
            :state="createFormPublic"
            :data-id="atelier.id"
            class="atelier-public-form flex flex-col items-center"
            @submit="submitAtelierPublic">

        <FormInput
            v-model="createFormPublic.prenom"
            label="Prénom et Nom"
            name="prenom"
            type="text"
            placeholder="Entrez votre prénom et nom"
            width="w-80"
            />
        <FormInput
            v-model="createFormPublic.email"
            label="Email"
            name="email"
            type="email"
            placeholder="Entrez votre email"
            width="w-80"
            />
        <FormInput
            v-model="createFormPublic.telephone"
            label="Téléphone"
            name="telephone"
            type="tel"
            placeholder="Entrez votre téléphone"
            width="w-80"
            />
        <FormInput
            v-model="createFormPublic.age"
            label="Âge"
            name="age"
            type="number"
            placeholder="Entrez votre âge"
            width="w-80"
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

    <div class="w-80" v-else>
      <p>Votre inscription a bien été prise en compte. Vous recevrez un email pour confirmer ou non votre inscription.</p>
    </div>
  </div>

</template>
