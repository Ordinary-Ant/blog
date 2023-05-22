<template>
  <main id="main" class="w-5/6 fixed right-0 box-border overflow-auto transition-all h-full">
    <slot></slot>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import Footer from '@components/footer/Footer.vue'
</script>

<style lang="scss" scoped>
main {
  scrollbar-width: none; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
