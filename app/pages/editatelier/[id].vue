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
      <div class="gestion-title mt-20">
        <p class="text-2xl font-bold">{{ title }}</p>
        <p class="text-sm text-gray-500 mt-1">Atelier #{{ id }}</p>
      </div>
      <div class="flex flex-col items-start justify-items-start mt-12 container-formulaire-public">
        <UForm
          @submit="submitEditAtelier"
          class="flex flex-col items-start justify-items-start"
        >
          <div class="flex flex-col">
            <FormInput
              v-model="editFormInfos.titre"
              label="Titre de l'atelier"
              name="titre-atelier"
              type="text"
              placeholder="Entrer le titre de l'atelier"
            />
            <div class="flex flex-row gap-4">
              <FormInput
                v-model="editFormInfos.date"
                label="Date de l'atelier"
                name="date-atelier"
                type="text"
                placeholder="23/04/25"
              />
              <FormInput
                v-model="editFormInfos.horaires"
                label="Horaire de l'atelier"
                name="horaire-atelier"
                type="text"
                placeholder="14h à 18h30"
              />
            </div>
            <div class="flex flex-col gap-0">
              <FormTextarea
                v-model="editFormInfos.description"
                label="Description de l'atelier"
                name="description-atelier"
                placeholder="Entrer la description de l'atelier"
              />
              <FormInput
                v-model="editFormInfos.nb_places"
                label="Places disponibles de l'atelier"
                name="places-atelier"
                type="number"
                placeholder="6"
              />
            </div>
          </div>

          <div class="flex gap-3 mt-6">
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
    </UContainer>
  </div>
</template>
