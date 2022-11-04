<template>
  <section>
    <PageHeader />
    <PageSidebar/>
    <div class="page-main">
      <slot></slot>
    </div>
  </section>
</template>
      
<script setup lang="ts">
import { useUserStore } from "@/store/user";
import { computed } from "vue";
import PageHeader from "../page-header/PageHeader.vue";
const props = defineProps({
  page_type: {
    type: String,
    default: 'master_page'
  }
})

const user = useUserStore()
const curr_search_status = computed(() => {
  return user.show_search
})
const curr_page_type = computed(() => {
  return user.page_cate
})

</script>
      
<style lang="scss" scoped>
section {
  padding: 60px 60px 60px 0;
  .page-main {
    padding-left: 60px;
  }
}
</style>
      