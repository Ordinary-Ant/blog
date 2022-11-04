import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const show_search = ref(false)

  const page_cate = ref('master')

  const name = ref('子舟')

  const user = ref({})

  const setUser = (val: object) => {
    user.value = val
  }

  const setName = (val :string) => {
    name.value = val
  }

  const setPageCate = (val :string) => {
    page_cate.value = val
  }

  const setShowSearch = (val :boolean) => {
    show_search.value = val
  }

  return {
    name,
    user,
    page_cate,
    show_search,
    setName,
    setUser,
    setPageCate,
    setShowSearch
  }
})
