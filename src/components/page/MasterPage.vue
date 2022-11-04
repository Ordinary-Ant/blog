<template>
  <div id="master-container" class="master-container">
    <div class="pg pg-top"></div>
    <div class="pg pg-left"></div>
    <div class="pg pg-right"></div>
    <div class="pg pg-down"></div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.master-container {
  width: 100vw;
  height: 100vh;
  .pg {
    position: fixed;
    z-index: 999;
    border: calc(1vw / 2) solid skyblue;
    background: skyblue;
    pointer-events: none;
    &-top {
      width: 100vw;
      top: 0;
    }
    &-down {
      width: 100vw;
      bottom: 0;
    }
    &-left {
      left: 0;
      height: 100vh;
    }
    &-right {
      right: 0;
      height: 100vh;
    }
  }
}
</style>
