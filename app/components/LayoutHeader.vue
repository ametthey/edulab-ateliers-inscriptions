<script setup lang="ts">
defineProps<{
  layoutName: string
}>()
</script>

<template>

  <!-- Header public -->
  <div v-if="layoutName !== 'default'">
    <div class="pb-8 pt-8 flex flex-col items-center formulaire-public-presentation-header">
      <img src="/logo.png" alt="logo" class="header-logo w-100">
      <p class="mt-1 text-sm leading-3 font-light center">Formulaire d'inscription aux initiations</p>

      <!-- Menu for formulaire public -->
      <div v-if="layoutName == 'form-public'">
        <HeaderMenu layoutName="form-public"/>
      </div>

    </div>
  </div>

  <!-- Header default -->
  <div v-if="layoutName == 'default'">
    <UHeader>
      <template #left>
        <NuxtLink to="/">
          <img
            src="/logo.png"
            alt="logo"
            class="header-logo"
          >
        </NuxtLink>
      </template>

      <HeaderMenu layoutName="default"/>

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>
  </div>
</template>

<style scoped>
  .header-logo {
    height: 30px;
    width: auto;
  }
</style>
