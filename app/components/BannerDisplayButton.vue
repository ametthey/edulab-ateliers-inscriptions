<script setup lang="ts">
const displayBanner= () => { isActive.value = !isActive.value }
const isActive = ref(false)
</script>

<template>
    <UButton @click="displayBanner">
        {{ isActive ? 'Désactiver' : 'Activer' }}
    </UButton>
</template>