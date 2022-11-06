<template>
  <section>
    <div class="card-head" v-if="has_title">
      <div class="card-head_top">
        <span class="title">{{ props.title }}</span>
        <span v-if="more" class="more" @click="handleGoMore">更多</span>
      </div>
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
  more: {
    type: Boolean,
    default: true
  },
  has_title: {
    type: Boolean,
    default: true
  },
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
  margin-bottom: 24px;
  padding-bottom: 20px;
  box-sizing: border-box;
  border-bottom: 1px dotted #ddd;
  &:last-child {
    border-bottom: none;
  }
  .card-head {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    color: #fff;
    &_top {
      height: 28px;
      display: flex;
      align-items: center;
      &:hover {
        .title {
          background: blue;
        }
        .more {
          opacity: 1;
          transform: translateX(30px);
        }
      }
      .title {
        font-size: 16px;
        text-indent: 2px;
        padding: 5px;
        border-radius: 5px;
        transition: all .5s;
        background: skyblue;
      }
      .more {
        font-size: 14px;
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
