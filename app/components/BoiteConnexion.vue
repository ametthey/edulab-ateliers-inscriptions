<script setup lang="ts">
const emit = defineEmits<{ click: [] }>()
</script>

<template>
  <div class="absolute bottom-5 right-0">
    <UButton
      color="neutral"
      variant="outline"
      size="md"
      @click="emit('click')"
      class="font-bold text-sm uppercase"
    >Déconnexion</UButton>
  </div>
</template>
