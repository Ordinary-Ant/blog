<script setup lang="ts">
import Header from "@components/header/Header.vue";
import Main from "./components/main/Main.vue";
import MasterPage from "./components/page/MasterPage.vue";
</script>

<template>
  <MasterPage>
    <Header />
    <Main>
      <router-view />
      <el-backtop :visibility-height="500" />
    </Main>
  </MasterPage>
</template>
