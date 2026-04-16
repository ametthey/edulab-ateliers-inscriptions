<script setup lang="ts">
defineProps<{
  titre: string
}>()

// defineEmits<{
//   'update:open': [value: boolean]
// }>()
</script>

<template>
  <div>
    <p class="text-4xl tracking-tight font-light">{{ titre }}</p>
  </div>
</template>
