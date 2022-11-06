<template>
  <header>
    <section class="header-container">
      <Logo />
      <User />
      <Nav />
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
  width: 15vw;
  height: 100%;
  background: #fff;
  box-sizing: border-box;
  border-right: 1px dotted #ddd;
  position: fixed;
  left: 0;
  z-index: 998;
  overflow-y: scroll;
  scrollbar-width: none; 
  -ms-overflow-style: none;
  transition: all .5s;
  margin: 12px 0 12px 12px;
  &::-webkit-scrollbar {
    display: none;
  }
  .header-container {
    height: 100%;
    padding: 40px;
    text-align: center;
  }
}
</style>
