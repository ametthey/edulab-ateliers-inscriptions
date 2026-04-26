<script setup lang="ts">
const layoutPublic = 'form-public'
</script>

<template>
  <div>
    <!-- Header -->
    <LayoutHeader :layoutName="layoutPublic" />

    <UPage>
      <!-- <LayoutBanner :layoutName="layoutPublic" /> -->
      <UContainer>
        <slot />
      </UContainer>
    </UPage>
  </div>
</template>
