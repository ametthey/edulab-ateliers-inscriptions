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
usePageMeta(title, description)
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
  <div id="main-container" class="py-10 main-height flex flex-col items-center justify-center">
    <PageHeader soustitre="Procédure de création d'atelier" margin="mt-8 mb-8"/>
    <IndexProcess />
    <PageHeader soustitre="Procédure d'inscription" margin="mt-8 mb-8"/>
    <IndexProcessPublic />
  </div>
</template>
