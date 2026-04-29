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
      Votre place à l'atelier <strong>{{ atelierTitre }}</strong> est confirmée.
    </p>
    <p>
      Rendez-vous le {{ date }}<br>
      Horaires : {{ horaires }}
    </p>
    <p>Nous avons hâte de vous accueillir !</p>
    <p style="margin-top: 32px;">L'équipe de facilitation Edulab</p>
  </div>
</template>
