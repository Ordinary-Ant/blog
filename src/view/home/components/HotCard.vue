<template>
  <section>
    <div class="card-head">
      <div
        class="card-head_top"
        @mouseenter="handleChange(false)"
        @mouseleave="handleChange(true)"
      >
        <span class="title" v-show="active">{{ props.title }}</span>
        <span class="more" v-show="!active" @click="handleGoMore">更多</span>
      </div>
      <slot name="card-head-after"> </slot>
    </div>
    <slot></slot>
  </section>
</template>
<script lang="ts" setup>
import useNav from "@/hooks/useNav";
import { computed, ref } from "vue";

const props = defineProps({
  title: String,
});

const active = ref<Boolean>(true);
const handleChange = (e: boolean) => {
  active.value = e;
};

const path_obj = computed(() => ({ name: props.title?.slice(2) }));
const { navTo } = useNav();
const handleGoMore = () => {
  navTo(path_obj);
};
</script>

<style lang="scss" scoped>
section {
  max-width: 1000px;
  margin: 24px auto;
  .card-head {
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &_top {
      transition: all 1s;
      span {
        display: inline-block;
        width: 200px;
        text-align: center;
      }
    }
    .title {
    }
  }
}
</style>
