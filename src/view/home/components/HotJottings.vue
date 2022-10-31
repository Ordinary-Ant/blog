<template>
  <HotCard title="最近_闪念" padding="0 80px">
    <div class="hot-jottings">
      <el-timeline>
        <el-timeline-item
          timestamp="2018/4/12"
          placement="top"
          v-for="i in 4"
          :key="i"
        >
          <el-card>
            <h4>Update Github template</h4>
            <p>Tom committed 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </HotCard>
</template>
<script lang="ts" setup>
import HotCard from "./HotCard.vue";
</script>

<style lang="scss" scoped></style>
