<template>
  <div class="avator" v-if="user_login_type">
    <div @click="handleChangeStatus" class="header-option">搜</div>
    <el-popover 
      popper-class="avator_pop"
      placement="bottom-end" 
      trigger="hover" 
      width="220px" 
      :offset="5"
      :show-arrow="false" 
      :teleported="false"
    >
      <div class="info">
        <div class="setting">
          <span>{{ user_name }}</span><button>设</button>
        </div>
        <div class="vip">
          <span>加入会员，尊享 0 大特权</span><button>立即购买</button>
        </div>
      </div>
      <ul class="select">
        <li v-for="i in 4">{{ i }}</li>
      </ul>
      <template #reference>
        <el-avatar shape="square" :src="squareUrl" />
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import squareUrl from "@assets/vue.svg";
import { ref } from "vue";
import { useUserStore } from "@/store/user";

const user_login_type = true;
const user_name = ref<string>('子舟')

const user = useUserStore()
const handleChangeStatus = () :void => {
  user.setShowSearch(!user.show_search)
}
</script>

<style lang="scss" scoped>
.avator {
  flex: 1;
  display: flex;
  align-items: center;
  :deep() .avator_pop {
    padding: 0 !important;
  }
  .info {
    padding: 10px;
  }
  .setting, .vip {
    display: flex;
    justify-content: space-between;
  }
  .vip {
    font-size: 12px;
    color: #ccc;
  }
  .select {
    background: #ccc;
    li {
      padding: 5px 5px 5px 20px;
    }
  }
  .header-option {

  }
}
</style>
