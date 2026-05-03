<!-- app/pages/protected.vue -->
<script setup>
const { user, clear } = useUserSession();

const title = 'Utilisateur'
const description = 'Interface utilisateur après connexion'

definePageMeta({
  middleware: 'auth',
  layout: 'default',
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

function logout() {
  clear();
  navigateTo("/connexion");
}
</script>

<template>
  <div class="main-height flex flex-col gap-8 items-center justify-center">

    <UCard class="max-w-md mx-auto mt-8">
      <div class="flex flex-col items-center justify-between">
        <h2 class="text-xl font-semibold dark:text-white">Salut {{ user.name }} !</h2>
        <p class="text-gray-800 dark:text-gray-100">Ton adresse mail est</p>
        <p class="text-gray-500 dark:text-gray-400">{{ user.email }}</p>
      </div>
    </UCard>

    <UButton
      color="neutral"
      variant="outline"
      size="md"
      class="font-bold text-sm uppercase"
      to="/admin"
      label="Aller à l'administration"
    />
    <UButton
      color="neutral"
      variant="outline"
      size="md"
      class="font-bold text-sm uppercase"
      label="Se déconnecter"
      @click="logout"
    />
  </div>
</template>
