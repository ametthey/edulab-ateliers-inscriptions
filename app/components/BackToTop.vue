<script setup lang="ts">
// Source
// https://dev.to/dailysandbox/simple-1-minute-guide-to-add-a-back-to-top-button-with-vue-3-2j59
const isVisible = ref(false)

// Fonction pour check scroll position and toggle visibility
const handleScroll = () => {
console.log('coucou')
  isVisible.value = window.scrollY > 200 //Show when scroll 200px
}

// Smooth scroll to the top of the page
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// Add and remove scroll event listeners
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <a v-show="isVisible" href="#" class="back-to-top-control" @click.prevent="scrollToTop">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-icon lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
    </a>
</template>

<style lang="scss" scoped>
.back-to-top-control {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    width: 60px;
    height: 60px;
    color: black;
    opacity: 0.5;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
    }

    > svg {
        width: 24px;
        height: 24px;
    }
}
</style>
