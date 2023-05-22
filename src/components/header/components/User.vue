<template>
  <div class="my-12 flex flex-col items-center">
    <el-popover placement="right" trigger="hover" width="auto">
      <div class="flex flex-col bg-slate-200 p-2">
        <div class="p-2">
          <span class="px-2 py-1 bg-black rounded text-orange-300">{{
            user_info.name
          }}</span>
          <span class="ml-2">{{ user_info.job }}</span>
        </div>
        <div class="p-2">love {{ user_info.hobby.join(" ") }}</div>
        <ul class="p-2 flex justify-between items-center">
          <li
            class="w-10 h-10 rounded-full cursor-pointer shadow-lg"
            :class="i"
            v-for="i in user_info.links"
          >
            {{ use }}
          </li>
        </ul>
      </div>
      <template #reference>
        <div class="flex items-center">
          <el-avatar
            class="align-middle rounded shadow-md"
            shape="square"
            :src="default_avator"
          />
          <span class="ml-2 mt-1 text-slate-600">@关于我</span>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script setup>
import default_avator from "@assets/images/default_avator.jpg";
import { ref, computed } from "vue";
import { useUserStore } from "@/store/user";

const user_store = useUserStore();

user_store.getCommon();

const user_info = computed(() => {
  return user_store.user;
});

</script>

<style lang="scss" scoped>
.wechat {
  background: green;
}

.qqtelp {
  background: blue;
}

.github {
  background: purple;
}
</style>
