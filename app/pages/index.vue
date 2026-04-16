<script setup lang="ts">
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
    <UContainer>
      <PageCTA/>
    </UContainer>
  </div>
</template>
