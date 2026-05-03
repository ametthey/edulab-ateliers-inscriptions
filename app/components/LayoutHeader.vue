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
      <div class="flex flex-row justify-around items-center formulaire-public-presentation-header">
        <div class="w-1/3"></div>
        <div class="flex flex-col items-center w-1/3">
          <NuxtImg
              src="/logo.png"
              alt="logo"
              format="webp"
              fetchPriority="high"
              class="header-logo"
              />
          <!-- <p class="mt-1 text-sm leading-3 font-light center">Formulaire d'inscription aux initiations</p> -->
        </div>

        <div class="pt-8 w-1/3" v-if="layoutName == 'page-public'"></div>


        <!-- Menu for formulaire public -->
        <div class="w-1/3 justify-self-end" v-if="layoutName == 'form-public'">
          <HeaderMenu layoutName="form-public"/>
        </div>

      </div>
    </div>

    <!-- Header default -->
    <div class="formulaire-public-presentation-header" v-if="layoutName == 'default'">
      <LazyUHeader>
      <template #left>
        <NuxtLink to="/">
          <NuxtImg
            src="logo.png"
            alt="logo"
            sizes="lg:238.863px"
            format="webp"
            fetchPriority="high"
            class="header-logo"
          />
        </NuxtLink>
      </template>

      <HeaderMenu layoutName="default"/>

      <template #right>
        <UButton color="neutral" variant="outline" size="md" class="ml-4 font-bold text-sm uppercase" to="/ateliers" label="Les formulaires" />
        <BoiteConnexion />
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
