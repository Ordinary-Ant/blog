<template>
  <section>
    <div class="card-head">
      <div class="card-head_top">
        <span class="title">{{ props.title }}</span>
        <span class="more" @click="handleGoMore">更多</span>
      </div>
      <slot name="card-head-after"></slot>
    </div>
    <div :style="`padding: ${padding}`">
      <slot></slot>
    </div>
  </section>
</template>
<script lang="ts" setup>
import useNav from "@/hooks/useNav";
import { computed, ref } from "vue";

const props = defineProps({
  title: String,
  padding: {
    type: String,
    default: ''
  }
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
  margin: 30px auto;
  box-sizing: border-box;
  .card-head {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &_top {
      height: 28px;
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        .title {
          transform: translateX(-15px);
          border-bottom: 2px solid #ccc;
        }
        .more {
          opacity: 1;
          transform: translateX(30px);
        }
      }
      .title {
        transform: translateX(15px);
        font-size: 20px;
        text-indent: 2px;
        padding-bottom: 5px;
        transition: all .5s;
        border-bottom: 2px solid transparent;
      }
      .more {
        opacity: 0;
        color: #ccc;
        cursor: pointer;
        transform: translateX(0);
        transition: all .8s;
      }
    }
  }
}
</style>
