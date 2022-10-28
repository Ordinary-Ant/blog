<template>
  <Page>
    <HotCard title="有趣_文章">
      <div class="hot-article">

      </div>
    </HotCard>
    <HotCard title="出色_作品">
      <div class="hot-creation">
        <el-carousel :interval="4000" type="card" height="250px">
          <el-carousel-item v-for="item in 3" :key="item">
            <h3 text="2xl" justify="center">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </HotCard>
    <HotCard title="最近_闪念">
      <div class="hot-jottings"></div>
    </HotCard>
    <HotCard title="热门_评论">
      <div class="hot-comments"></div>
    </HotCard>
  </Page>
</template>

<script setup lang="ts">
import Page from "@components/page/Page.vue";
import HotCard from "./components/HotCard.vue";
</script>

<style lang="scss" scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
