<script setup lang="ts">
const emit = defineEmits<{ click: [] }>()
</script>

<template>
  <div class="fixed bottom-5 right-5">
    <UButton
      color="neutral"
      variant="outline"
      size="md"
      class="font-bold text-sm uppercase"
      @click="emit('click')"
    >Déconnexion</UButton>
  </div>
</template>
