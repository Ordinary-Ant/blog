<template>
  <div class="flex flex-col justify-center items-center text-lg font-bold">
    <nav class="my-4 w-full cursor-pointer transition-all pb-4 relative" :class="nav.path === $route.path && 'active'"
      v-for="nav in nav_path" :key="nav.id" @click="navTo(nav.path)">
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
nav {
  &::before {
    content: '->';
    position: absolute;
    top: 0;
    right: 0;
    color: var(--navColor);
    display: none;
  }

  &:hover,
  &.active {
    color: var(--navColor);
    transform: translateX(-1rem);

    &::before {
      display: block;
    }
  }
}
</style>
