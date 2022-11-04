<template>
  <main id="main">
    <slot></slot>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
main {
  width: 82vw;
  height: 100%;
  position: fixed;
  right: 0;
  box-sizing: border-box;
  overflow: auto;
  transition: all 0.5s;
}
</style>
