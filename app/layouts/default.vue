<script setup lang="ts">
const layoutDefault = 'default'
</script>

<template>
  <div>
    <!-- Header -->
    <LayoutHeader :layoutName="layoutDefault" />

    <UPage>
      <LayoutBanner :layoutName="layoutDefault" />
      <UContainer>
        <slot />
      </UContainer>
    </UPage>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          edulabpasteur • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right />
    </UFooter>
  </div>
</template>

