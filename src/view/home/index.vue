<template>
  <Page>
    <HotSnapshot />
    <HotCreation />
    <HotArticle />
    <HotJottings />
  </Page>
</template>

<script setup lang="ts">
import Page from "@components/page/Page.vue";
import HotCreation from './components/HotCreation.vue'
import HotArticle from './components/HotArticle.vue'
import HotJottings from './components/HotJottings.vue'
import HotSnapshot from "./components/HotSnapshot.vue"
</script>

<style lang="scss" scoped>
</style>
