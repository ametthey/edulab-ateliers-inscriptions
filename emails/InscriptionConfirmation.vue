<script setup lang="ts">
defineProps<{
  prenom: string
  atelierTitre: string
  date: string
  horaires: string
}>()
</script>

<template>
  <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
    <p>Bonjour <strong>{{ prenom }}</strong>,</p>
    <p>
      Ton inscription à l'atelier <strong>{{ atelierTitre }}</strong> a bien été enregistrée.
    </p>
    <p>
      Date : {{ date }}<br>
      Horaires : {{ horaires }}
    </p>
    <p>Tu recevras un email de confirmation dès que l'atelier sera complet.</p>
    <p style="margin-top: 32px;">L'équipe de facilitation Edulab</p>
  </div>
</template>
