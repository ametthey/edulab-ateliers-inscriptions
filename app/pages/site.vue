<script setup>
/*****************************************
 * Meta
 *****************************************/
const title = 'site'
const description = 'teset'

definePageMeta({
  middleware: 'auth',
  layout: 'page-site',
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
  </div>
</template>
