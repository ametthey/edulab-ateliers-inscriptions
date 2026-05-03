<script setup lang="ts">
defineProps<{
  titre?: string | ''
  soustitre?: string | ''
  margin?: string | 'mt-8 mb-8'
}>()

// defineEmits<{
//   'update:open': [value: boolean]
// }>()
</script>

<template>
  <div :class="margin" class="header-page">
    <p v-if="titre" class="threeline text-5xl tracking-tight">{{ titre }}</p>
    <p v-if="soustitre" class="threeline text-4xl tracking-tight para">{{ soustitre }}</p>
  </div>
</template>
