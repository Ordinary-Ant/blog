<template>
  <div class="px-16 pt-24">
    <div class="bg-title-pic w-full h-96 bg-cover rounded-md"></div>
    <span class="text-4xl font-bold border-b inline-block border-dotted border-default-color my-6">测试markdown渲染效果，冲冲冲</span>
    <div class="bg-detail px-4">
      <MdViewer :value="test" />
    </div>
  </div>
</template>
<script setup>
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
.bg-detail {
  background-image: var(--pattern-bg);
  background-size: calc(0.75px / 0.25) calc(0.75px * 4);
}
.bg-title-pic {
    background-image: url('/src/assets/images/default-logo.webp');
}
</style>
