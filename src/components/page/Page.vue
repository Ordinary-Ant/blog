<template>
  <section class="px-16 pt-16">
    <PageHeader />
    <!-- <PageSidebar/> -->
    <slot></slot>
  </section>
</template>
      
<script setup lang="ts">
import PageHeader from "../page-header/PageHeader.vue";
// import PageSidebar from "../page-sidebar/PageSidebar.vue";
</script>
      