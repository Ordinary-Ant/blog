<template>
  <div class="flex flex-col w-full items-start mb-8">
    <textarea
      placeholder="点击发表留言"
      rows=""
      cols=""
      class="w-full h-20 resize-none border border-dotted border-default-color transition-all p-2 outline-none"
    ></textarea>
    <div class="flex items-center justify-between w-full mt-2">
        <div :class="is_comment ? 'w-1/2' : 'w-3/4'">
          <input type="text" placeholder="昵称" class="w-2/5 outline-none border border-dotted border-default-color p-2 mr-2"/>
          <input type="text" placeholder="邮箱" class="w-2/5 outline-none border border-dotted border-default-color p-2"/>
        </div>
        <button class="py-3 px-4 background-color text-white font-bold">发表 -></button>
    </div>
  </div>
</template>
<script setup>
defineProps({
  is_comment: Boolean
})
</script>
<style lang="scss" scoped></style>
