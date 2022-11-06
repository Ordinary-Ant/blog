<template>
  <div class="nav-list">
    <nav :class="['nav-item', nav.path === $route.path && 'active']" v-for="nav in nav_path" :key="nav.id"
      @click="navTo(nav.path)">
      {{ nav.name }}
    </nav>
  </div>
</template>

<script setup lang="ts">
import { nav_path } from "@utils/index";
import useNav from "@hooks/useNav";

const { navTo } = useNav();
</script>

<style lang="scss" scoped>
.nav-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  .nav-item {
    margin: 12px 0;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.5s;
    padding: 10px 15px;
    &:hover {
      background: black;
    }
    &.active {
      background: black;
    }
  }

}
</style>
