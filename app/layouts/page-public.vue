<script setup lang="ts">
const layoutPublic = 'page-public'
</script>

<template>
  <div>
    <!-- Header -->
    <LayoutHeader :layoutName="layoutPublic" />

    <UMain>
      <!-- <LayoutBanner :layoutName="layoutPublic" /> -->
        <slot />
    </UMain>
  </div>
</template>
