<template>
  <Page>
    <div class="hot-article">
      
    </div>
    <div class="hot-creation">
      <el-carousel :interval="4000" type="card" height="250px">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="hot-jottings">

    </div>
    <div class="hot-comments">
    
    </div>
  </Page>
</template>

<script setup lang="ts">
import Page from "@components/page/Page.vue";
</script>

<style lang="scss" scoped>
.hot-creation {
  width: 1000px;
  margin: 0 auto;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
