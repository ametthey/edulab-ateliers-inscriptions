<script setup lang="ts">
defineProps<{
  nom: string,
  connecte?: string
}>()
</script>

<template>
  <UBanner
    :nom="nom"
   class="fixed bottom-0 layout-banner"
    color="warning"
    icon="i-lucide-info"
    close-icon="i-lucide-x-circle"
    close
  />
</template>
