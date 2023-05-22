<template>
  <div
    class="tag-text-color w-full box-border pb-8 transition-all flex flex-col justify-center items-start"
  >
    <div class="text-4xl flex items-center mb-4">
      Blog.{{ $route.meta.es_name }}
      <span class="block mx-4 w-4 h-4 background-color"></span>
      {{ $route.name }}
    </div>
  </div>
</template>

<script setup lang="ts"></script>