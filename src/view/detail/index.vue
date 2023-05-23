<template>
  <div class="px-16 pt-24">
    <div class="bg-title-pic w-full h-96 bg-cover rounded-md"></div>
    <span class="text-4xl font-bold border-b inline-block border-dotted border-default-color my-6">测试markdown渲染效果，冲冲冲</span>
    <div class="flex w-full">
      <div class="px-2 w-2/3">
        <MdViewer :value="test" />
      </div>
      <div class="w-1/3 box-border pl-4 pt-4 border-l border-dotted border-default-color">
        <Propose :is_comment="false"/>
      </div>
    </div>
  </div>
</template>
<script setup>
import Propose from '@components/propose/Propose.vue';
import MdViewer from "@components/mdViewer/MdViewer.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const {
  params: { id },
} = route;

const test = ref('');
onMounted(async () => {
  const res = await axios({
    method: "get",
    url: "https://yjpsix.com/blog/api/blog/detail?blogid=3&type=update",
  });
  console.log(res);
  test.value = res.data.data.detail.content
});
</script>
<style lang="scss" scoped>
.bg-title-pic {
    background-image: url('/src/assets/images/default-logo.webp');
}
</style>
