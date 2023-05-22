import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref<object | null>(null)

  const getCommon = async () => {
    const common = {
      name: '子舟',
      job: '一年前端',
      hobby: ['电影', '健身', '游戏', '听书'],
      links: ['wechat', 'qqtelp', 'github'],
      wechat: 'xxxxxxx',
      qqtelp: 'xxxxxxx',
      github: 'xxxxxxx'
    }
    user.value = common
  }

  return {
    getCommon,
    user
  }
})
