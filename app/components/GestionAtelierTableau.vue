<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
const { atelierRows } = useAtelierRows()

type InscriptionRow = {
  id?: number
  atelier_id?: number
  prenom: string
  email: string
  telephone: string
  age: number | string
  mail_confirmation?: boolean
  mail_invitation?: boolean
  _empty?: boolean
}

type Atelier = {
  id: number
  titre: string
  nb_places: number
}

const props = defineProps<{
  atelier: Atelier
  inscriptionsData: InscriptionRow[]
  columns: TableColumn<InscriptionRow>[]
}>()

const emit = defineEmits<{ deleted: [] }>()

const rows = computed(() =>
  atelierRows(props.inscriptionsData?.filter(i => i.atelier_id === props.atelier.id), props.atelier.nb_places)
)

const supprimerInscription = async (id: number) => {
  await $fetch('/api/inscription.informations', {
    method: 'DELETE',
    body: { id }
  })
  emit('deleted')
}
</script>

<template>
  <UTable
    :empty="'pas d\'inscriptions'"
    :data="rows"
    :columns="columns"
    class="flex-1 mt-4"
  >
    <template #prenom-header>Personne</template>
    <template #mail_confirmation-header>Confirmation</template>
    <template #mail_invitation-header>Invitation</template>
    <template #age-cell="{ row }">{{ row.original._empty ? '' : `${row.original.age} ans` }}</template>
    <template #numero_place-cell="{ row }">{{ row.index + 1 }}</template>
    <template #status-cell="{ row }">{{ row.original._empty ? '' : row.index < Number(atelier.nb_places) ? 'Confirmé' : 'En attente' }}</template>
    <template #mail_confirmation-cell="{ row }">{{ row.original._empty ? '' : row.original.mail_confirmation ? '✅' : '❌' }}</template>
    <template #mail_invitation-cell="{ row }">{{ row.original._empty ? '' : row.original.mail_invitation ? '✅' : '❌' }}</template>
    <template #supprimer-cell="{ row }">
      <UButton v-if="!row.original._empty" :ui="{ 'base' : 'px-2 py-1' }" color="error" variant="ghost" @click="supprimerInscription(row.original.id!)">
        Supprimer
      </UButton>
    </template>
  </UTable>
</template>
