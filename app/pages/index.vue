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
  <div class="main-height flex flex-col items-center justify-center">
    <PageHeader titre="Page d'accueil"/>
    <PageHeader soustitre="Process pour ajouter un atelier" margin="mt-8 mb-8"/>
    <Process />
    <PageHeader soustitre="Procédure pour s'inscrire en tant que personne" margin="mt-8 mb-8"/>
    <ProcessPublic />
    <BoiteConnexion @click="logout" />
  </div>
</template>
