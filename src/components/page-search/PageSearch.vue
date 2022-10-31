<template>
  <div class="search-container">
    <input type="text" placeholder="搜索内容">
    <button>搜</button>
  </div>
</template>
    
<script setup lang="ts">
</script>
    
<style lang="scss" scoped>
.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 500px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
}
</style>
    