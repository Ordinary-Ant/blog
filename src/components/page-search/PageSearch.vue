<template>
  <div class="search-container">
    <div class="input-container">
      <input type="text" placeholder="搜索内容">
      <span>搜</span>
    </div>
  </div>
</template>
    
<script setup lang="ts">
</script>
    
<style lang="scss" scoped>
.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  .input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    input {
      padding-left: 50px !important;
      width: 500px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 10px;
      outline: none;
    }
    span {
      left: 0;
      position: absolute;
      width: 46px;
      height: 46px;
      background: #000;
      text-align: center;
      line-height: 46px;
    }
  }
}
</style>
    