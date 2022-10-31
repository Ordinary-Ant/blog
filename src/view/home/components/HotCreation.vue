<template>
  <HotCard title="出色_作品">
    <div class="hot-creation">
      <el-carousel :interval="4000" type="card" height="250px">
        <el-carousel-item v-for="item in 3" :key="item">
          <el-image
            src="https://img1.baidu.com/it/u=1234898636,1354725942&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
  </HotCard>
</template>
<script lang="ts" setup>
import HotCard from "./HotCard.vue";
</script>

<style lang="scss" scoped>
.hot-creation {
  .el-carousel__item {
    border-radius: 5px;
    overflow: hidden;
    .el-image {
      border-radius: 5px;
    }
  }
}
</style>
