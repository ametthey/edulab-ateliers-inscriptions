<script setup lang="ts">
const layoutPublic = 'page-public'
</script>

<template>
  <div>
    <!-- Header -->
    <LayoutHeader :layoutName="layoutPublic" />

    <!-- Main -->
    <UMain>
      <UPage>
        <!-- <LayoutBanner :layoutName="layoutPublic" /> -->
        <UContainer>
          <slot />
        </UContainer>
      </UPage>
    </UMain>
  </div>
</template>
