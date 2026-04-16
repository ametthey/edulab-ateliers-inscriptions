<script setup lang="ts">
defineProps<{
  layoutName: string
}>()
</script>

<template>
  <UBanner
    class="fixed bottom-0 layout-banner"
    :title="'Cette page utilise le layout ' + layoutName"
    color="warning"
    icon="i-lucide-info"
    close-icon="i-lucide-x-circle"
    close
  />
</template>
