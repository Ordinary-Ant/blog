<template>
  <header
    class="w-1/6 h-full box-border border-r border-dotted fixed left-0 z-50 transition-all"
  >
    <section class="text-center h-full p-10 w-full">
      <Logo />
      <User />
      <Nav />
    </section>
  </header>
</template>

<script setup lang="ts">
import Nav from "./components/Nav.vue";
import Logo from "./components/Logo.vue";
import User from "./components/User.vue";
</script>

<style lang="scss" scoped>
header {
  border-color: #ddd;
}
</style>
