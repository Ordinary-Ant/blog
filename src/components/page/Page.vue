<template>
  <PageHeader v-show="page_type == 'master_page'"/>
  <section>
    <PageSearch />
    <slot></slot>
  </section>
</template>
      
<script setup lang="ts">
import PageHeader from "../page-header/PageHeader.vue";
import PageSearch from '../page-search/PageSearch.vue'
const props = defineProps({
  page_type: {
    type: String,
    default: 'master_page'
  }
})
</script>
      
<style lang="scss" scoped>
section {
  padding: 0 120px;
  margin-top: 102px;
}
</style>
      