<script setup lang="ts">
const layoutPublic = 'form-public'
</script>

<template>
  <div>
    <!-- Header -->
    <LayoutHeader :layoutName="layoutPublic" />
    <slot />
    <BackToTop />
  </div>
</template>
