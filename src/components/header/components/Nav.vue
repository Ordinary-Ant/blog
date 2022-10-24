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
  justify-content: center;
  align-items: center;

  .nav-item {
    padding: 12px 18px;
    margin: 0 12px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.5s;

    &:hover {
      background: black;
    }

    &.active {
      background: black;
    }
  }

}
</style>
