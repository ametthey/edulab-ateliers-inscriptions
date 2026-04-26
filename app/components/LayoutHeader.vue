<script setup lang="ts">
const route = useRoute()

defineProps<{
  layoutName: string
}>()
</script>

<template>

  <div>
    <!-- Header public -->
    <div v-if="layoutName == 'form-public' || layoutName == 'page-public'">
      <div class="pb-8 pt-4 flex flex-row justify-between items-baseline formulaire-public-presentation-header">
        <div class="w-1/3"></div>
        <div class="flex flex-col items-center w-1/3">
          <NuxtImg
              src="/logo.png"
              alt="logo"
              format="png"
              fetchPriority="high"
              />
          <!-- <p class="mt-1 text-sm leading-3 font-light center">Formulaire d'inscription aux initiations</p> -->
        </div>

        <div class="pt-8 w-1/3" v-if="layoutName == 'page-public'"></div>


        <!-- Menu for formulaire public -->
        <div class="pt-8 w-1/3" v-if="layoutName == 'form-public'">
          <HeaderMenu layoutName="form-public"/>
        </div>

      </div>
    </div>

    <!-- Header default -->
    <div v-if="layoutName == 'default'">
      <LazyUHeader>
      <template #left>
        <NuxtLink to="/">
          <NuxtImg
            src="logo.png"
            alt="logo"
            sizes="70vw sm:70vw md:238.863px"
            format="png"
            fetchPriority="high"
          />
        </NuxtLink>
      </template>

      <HeaderMenu layoutName="default"/>

      <template #right>
      </template>
      </LazyUHeader>
    </div>
  </div>
</template>

<style scoped>
  .header-logo {
    height: 30px;
    width: auto;
  }
</style>
