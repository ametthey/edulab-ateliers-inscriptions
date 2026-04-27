<script setup lang="ts">
  const layoutPagePublic = 'page-public'
</script>

<template>
  <div class="h-screen">
    <div class="main-container flex items-stretch">
      <!-- sidebar -->
      <div class="sidebar-container h-screen">
        the sidebar
      </div>

      <!-- site container -->
      <div class="site-container grow">
        the container
      </div>

    </div>

    <!-- <UMain> -->
    <!--   &#60;&#33;&#45;&#45; <LayoutBanner :layoutName="layoutPublic" /> &#45;&#45;&#62; -->
    <!--     <slot /> -->
    <!-- </UMain> -->
  </div>
</template>

<style scoped>
  .sidebar-container {
    width: 150px;
    height: 100vh;
  }
</style>
