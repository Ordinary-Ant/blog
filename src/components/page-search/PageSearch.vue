<template>
  <div class="search-container">
    <div class="input-container">
      <input type="text" placeholder="搜索内容" v-model="keyword" @keydown.enter="search">
      <span>搜</span>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import { ref } from "vue";
import { debounce } from "lodash-es";

const keyword = ref<String>('')
const search = debounce(() => {
  console.log(keyword.value)
}, 500)
</script>
    
<style lang="scss" scoped>
.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .5s;
  .input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    transition: all .5s;
    input {
      padding-left: 50px !important;
      width: 500px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 20px;
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
    