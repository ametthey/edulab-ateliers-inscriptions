<template>
  <!-- This is a component for site content menu -->
  <div class="content-menu">
    <div class="content-menu-line"></div>
    <div class="content-menu-container">
      <div class="content-menu-item">
        <a href="#" target="_blank">
          agenda
        </a>
      </div>
      <div class="content-menu-item">
        <a href="#" target="_blank">
          explorations
        </a>
      </div>
      <div class="content-menu-item">
        <a href="#" target="_blank">
          projets
        </a>
      </div>
      <div class="content-menu-item">
        <a href="#" target="_blank">
          le lieu
        </a>
      </div>
      <div class="content-menu-item">
        <a href="#" target="_blank">
          informations pratiques
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.content-menu {
   padding: 66px 0 0 100px;
   margin: 0 0 88px 0;
}
.content-menu-container {
  display: flex;
  justify-content: space-between;
  margin: 0 50px 0 0;
}
.content-menu-line {
  left: -3px;
  background-color: #b8e5ff;
  height: 30px;
  width: 3px;
  position: absolute;
}
.content-menu-item {
  a {
    font-family: 'Inter', sans-serif;
    font-size: 25px;
    line-height: 25px;
    transition: all 0.5s;
    padding: 0 0 3px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0);

    &:hover {
      border-bottom: 1px solid rgba(0, 0, 0, 1);
    }
  }
}
</style>
