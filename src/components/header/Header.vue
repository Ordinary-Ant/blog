<template>
  <header>
    <section class="header-container">
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
  width: 18vw;
  height: 100%;
  background: #fff;
  box-sizing: border-box;
  border-right: 1px dotted #ddd;
  position: fixed;
  left: 0;
  z-index: 998;
  overflow: auto;
  transition: all .5s;
  .header-container {
    height: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
