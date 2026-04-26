<script setup lang="ts">
const layoutDefault = 'default'
</script>

<template>
  <div>
    <!-- Header -->
    <LayoutHeader :layoutName="layoutDefault" />

    <UPage>
      <!-- <LayoutBanner :layoutName="layoutDefault" /> -->
      <UContainer>
        <slot />
      </UContainer>
    </UPage>
  </div>
</template>
