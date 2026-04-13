<template>
  <div>
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

      <AppHeader />

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <UPage>
        <UBanner
          class="fixed bottom-0 layout-banner"
          title="Cette page utilise le layout DEFAULT"
          color="primary"
          icon="i-lucide-info"
           close-icon="i-lucide-x-circle"
          close
        />
        <UContainer>
          <slot />
        </UContainer>
      </UPage>
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          edulabpasteur • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right />
    </UFooter>
  </div>
</template>

<style scoped>
  .header-logo {
    height: 30px;
    width: auto;
  }
</style>
