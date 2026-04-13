<script setup lang="ts">

</script>

<template>
  <div>
    <UMain>
      <div class="mb-4 mt-8 flex flex-col items-center formulaire-public-presentation-header">
        <img src="/logo.png" alt="logo" class="header-logo w-100">
        <p class="mt-4 center w-120">L’édulab est un lieu d'expérimentation et d'apprentissage dédié aux usages et aux cultures numériques, ouvert à tou.te.s.</p>
      </div>
      <UPage>
        <UBanner
          class="fixed bottom-0 layout-banner"
          title="Cette page utilise le layout FORM PUBLIC"
          color="warning"
          icon="i-lucide-info"
          close-icon="i-lucide-x-circle"
          close
        />
        <UContainer>
          <slot />
        </UContainer>
      </UPage>
    </UMain>
  </div>
</template>
