<template>
  <div
    :id="monid"
    class="mb-4 mt-8 formulaire-section"
    :style="{ scrollMarginTop: 'var(--ui-header-height)' }"
  >
    <span class="style-section">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  monid: string
}>()
</script>
