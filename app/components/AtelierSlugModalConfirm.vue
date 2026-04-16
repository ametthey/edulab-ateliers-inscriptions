<script setup lang="ts">
defineProps<{
  open: boolean
  atelier_id: number | null
  prenom: string
  email: string
  telephone: string
  age: number | null
}>()

defineEmits<{
  'update:open': [value: boolean]
  'close': []
}>()
</script>

<template>
  <UModal :dismissible="false" :open="open" @update:open="$emit('update:open', $event)">
    <template #content>
      <div class="p-6 space-y-4">
        <p class="text-base font-light">
        <span class="text-lg font-bold">Inscription confirmée!</span>
        <br>
        <br>
        Merci de <span class="font-bold">votre inscription.</span>
        <br>
        Dès que l'initiation sera complète, vous allez recevoir un email de confirmation ou être sur liste d'attente si l'atelier est déjà complêt.
        <br>
        <br>
        <span class="font-bold underline">Résumé de votre informations</span>
        <br>
        Prénom & Nom: <span class="font-medium">{{ prenom }}</span>
        <br>
        Email: <span class="font-medium">{{ email }}</span>
        <br>
        Téléphone: <span class="font-medium">{{ telephone }}</span>
        <br>
        Age: <span class="font-medium">{{ age}} ans</span>
        <br>
        <br>
        <span class="pb-2 font-bold text-sm">L'équipe de facilitation</span>
        <br>
        <img src="/logo.png" alt="logo" class="bt-1 header-logo w-60">
        </p>
        <div class="flex justify-end">
          <UButton label="Fermer" color="primary" @click="$emit('close')" />                      </div>
      </div>
    </template>
  </UModal>
</template>
