<script setup lang="ts">
  const layoutPagePublic = 'page-public'
</script>

<template>
  <div>
    <!-- Header -->
    <LayoutHeader :layoutName="layoutPagePublic" />

    <UMain>
      <!-- <LayoutBanner :layoutName="layoutPublic" /> -->
        <slot />
    </UMain>
  </div>
</template>
