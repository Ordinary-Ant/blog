<template>
  <header>
    <section>
      <Logo />
      <Nav />
      <User />
    </section>
  </header>
</template>

<script setup lang="ts">
import Nav from './components/Nav.vue';
import Logo from './components/Logo.vue';
import User from './components/User.vue';

</script>

<style lang="scss" scoped>
header{
  height: 64px;
  background: transparent;
  box-shadow: 0 2px 4px #00000014;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(17,24,39,.1);
  position: fixed;
  width: 100vw;
  top: 0;
  background-color: #fff;
  z-index: 999;
  section {
    height: 100%;
    padding: 0 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
