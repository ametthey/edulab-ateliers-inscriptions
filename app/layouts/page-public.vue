<script setup lang="ts">
  const layoutPagePublic = 'page-public'
</script>

<template>
  <div>
    <LayoutHeader :layoutName="layoutPagePublic" />
    <UMain
      :ui="{ 'base': 'min-h-[calc(100vh-80px)] ' }"
    >
      <slot />
    </UMain>
  </div>
</template>
