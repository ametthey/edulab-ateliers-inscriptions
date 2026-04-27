<script setup>
/*****************************************
 * Meta
 *****************************************/
const title = 'page d\'accueil'
const description = 'la page d\'accueil'

definePageMeta({
  middleware: 'auth',
  layout: 'default',
  // layoutTransition: 'layout',
})
useHead({
  title: title,
  description: description,
})
useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
})
/*****************************************
 * Connexion
 *****************************************/
const { user, clear } = useUserSession();
function logout() {
  clear();
  navigateTo("/connexion");
}
</script>

<template>
  <div>
    <UContainer>
      <PageCTA />
    </UContainer>
    <BoiteConnexion @click="logout" />
  </div>
</template>
