<script setup lang="ts">
const layoutDefault = 'default'
</script>

<template>
  <div>
    <LayoutHeader :layoutName="layoutDefault" />
    <UMain
      :ui="{ 'base': 'min-h-[calc(100vh-80px)] ' }"
    >
      <slot />
    </UMain>
  </div>
</template>
