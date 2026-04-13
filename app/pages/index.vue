<script setup lang="ts">
import { ref } from 'vue'
/*****************************************
 * Meta
 *****************************************/
const title = 'Page d\'accueil'
const description = ''

definePageMeta({
  layout: 'default'
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
    <UPage>
      <UPageBody>
        <UPageHero
          title="Formulaire"
        />
      </UPageBody>
    </UPage>
  </div>
</template>
