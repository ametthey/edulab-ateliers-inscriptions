<template>
    <!-- This is a component for site content header -->
    <div class="content-header">
      <div class="header-title">
        <span>édulab</span>
        <span>Pasteur</span>
      </div>
      <p>L’édulab est un lieu d'expérimentation et d'apprentissage dédié aux usages et aux cultures numériques, ouvert à tou.te.s.</p>
    </div>
</template>

<style lang="scss" scoped>
.content-header {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 66px 0 0 100px;

  p {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 14px;
  }
}

.header-title {
  padding: 0 0 12px;

  span {
    font-family: 'edulab', sans-serif;
    font-size: 90px;
    line-height: 90px;
    &:nth-of-type(1) {
      margin: 0 25px 0 0;
    }

    &:nth-of-type(2) {
      font-family: 'edulab-hairline', sans-serif;
    }
  }
}
</style>
