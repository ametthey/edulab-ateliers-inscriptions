<script setup lang="ts">
definePageMeta({
  layout: 'site'
})
</script>

<template>
  <div class="site-container">

    <SiteSidebar />

    <div class="site-content">

      <div class="site-content-header">
        <SiteContentHeader />
        <SiteContentMenu />
      </div>

      <div class="site-content-elements">
        <div class="elements-container-item">
        this is the left
        </div>
        <div class="elements-sidebar-item">
          <SiteElementsSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.elements-container-item {
  background-color: red;
}
.elements-sidebar-item {
  background-color: blue;
}
.site-container {
  display: flex;
  height: 100vh;
  color: black;
}

.site-content {
  position: relative;
  width: calc( 100% - 150px );
  background-color: #f7fdff;
}

.site-content-header {
  background-color: #f7fdff;
  position: fixed;
  top: 0;
  left: 150px;
  z-index: 1;
  width: calc(100% - 150px);
}

.site-content-elements {
  margin: 360px 120px 0 100px;
  width: calc( 100% - 150px);
  position: absolute;
  left: 150px;
  background-color: #f7fdff;
  height: 100vh;


  display: grid;
  grid-template-columns: 2fr 1fr;
}

</style>
