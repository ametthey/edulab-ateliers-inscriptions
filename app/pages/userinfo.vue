<!-- app/pages/protected.vue -->
<script setup>
const { user, clear } = useUserSession();

const title = 'protected'
const description = 'propro'

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
  ogDescription: description
})

function logout() {
  clear();
  navigateTo("/connexion");
}
</script>

<template>
  <!-- <LayoutBanner title="page-public middleware-auth"/> -->
  <div class="flex flex-col items-center justify-center">
    <UCard class="max-w-md mx-auto mt-8">
    <div class="flex flex-col items-center justify-between mb-6">
      <UButton
          color="red"
          variant="soft"
          @click="logout"
          >
          Se déconnecter
      </UButton>
      <div class="flex items-center space-x-4">
        <div>
          <h2 class="text-xl font-semibold dark:text-white">{{ user.name }}</h2>
          <p class="text-gray-500 dark:text-gray-400">{{ user.email }}</p>
        </div>
      </div>
    </div>

    <div class="border-t dark:border-gray-700 pt-4">
      <h3 class="text-lg font-medium mb-2 dark:text-gray-200">
        Information du compte
      </h3>
      <div class="space-y-2">
        <div class="flex justify-between">
          <span class="text-gray-500 dark:text-gray-400">Member since</span>
          <span class="dark:text-gray-200">{{
            new Date().toLocaleDateString()
            }}</span>
        </div>
      </div>
    </div>
    </UCard>
    <UButton color="neutral" variant="outline" size="md" class="font-bold text-sm uppercase" to="/admin" label="Aller à l'administration" />
  </div>
</template>
