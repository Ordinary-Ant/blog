<template>
  <div class="page-header-container">
    <div class="title">
      子舟
      <span class="interval"></span>
      {{ $route.name }}
    </div>
    <div class="screen" v-if="$route.path == '/article'">
      <span>排列顺序</span>
      <span>浏览模式</span>
    </div>
  </div>
</template>
    
<script setup lang="ts">
</script>
    
<style lang="scss" scoped>
.page-header-container {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 30px 60px;
  transition: all 0.5s;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  text-indent: 3px;
  color: #ccc;
  .title {
    font-size: 36px;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  .interval {
    display: block;
    margin: 0 10px;
    width: 12px;
    height: 12px;
    background: skyblue;
  }
}
</style>
    