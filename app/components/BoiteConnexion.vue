<script setup lang="ts">
const emit = defineEmits<{ click: [] }>()
</script>

<template>
  <div class="">
    <UButton
      color="neutral"
      variant="outline"
      size="md"
      class="font-bold text-sm uppercase"
      @click="emit('click')"
    >Déconnexion</UButton>
  </div>
</template>
