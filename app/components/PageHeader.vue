<script setup lang="ts">
defineProps<{
  titre?: string | ''
  soustitre?: string | ''
  margin?: string | ''
}>()

// defineEmits<{
//   'update:open': [value: boolean]
// }>()
</script>

<template>
  <div :class="margin">
    <p v-if="titre" class="text-4xl tracking-tight font-light">{{ titre }}</p>
    <p v-if="soustitre" class="text-3xl tracking-tight font-light text-center w-180">{{ soustitre }}</p>
  </div>
</template>
