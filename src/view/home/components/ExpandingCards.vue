<template>
  <div class="cards-container">
    <div
      v-for="card in cards"
      :key="card.id"
      :class="['card', active == card.id && 'active']"
      @click="handleChangeActive(card.id)"
    >
      <el-image :src="card.img" lazy class="card-image"/>
      <div v-if="active == card.id" class="card-content">
        <div class="imgs">
          <el-image
            :src="img"
            :key="index"
            v-for="(img, index) in card.imgs"
            lazy
          />
        </div>
        <div class="content">
          <div class="title">{{ card.title }}</div>
          <div class="tag">
            <div v-for="i in 2" :key="i">{{ i }}</div>
          </div>
          <div class="snapshot">{{ card.snapshot }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ComputedRef, ref } from "vue";

const props = defineProps({
  lazy: Boolean,
  cards_list: {
    type: Array,
    default: () => [],
  },
  delay: {
    type: Number,
    default: 200,
  },
});

const active = ref<string>("1");

const cards: ComputedRef<any[]> = computed(() => {
  return props.cards_list;
});

const handleChangeActive = (active_id: string) => {
  active.value = active_id;
};
</script>

<style lang="scss" scoped>
.cards-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .card {
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    position: relative;
    width: 400px;
    height: 20px;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    &.active {
      width: 800px;
      height: 200px;
    }
    .el-image.card-image {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      ::v-deep() .el-image__inner {
        object-fit: cover;
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        transform: scale(1.55);
        filter: blur(16px) brightness(0.75);
      }
    }
    .card-content {
      font-size: 14px;
      color: #fff;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
      border-radius: 10px;
      display: flex;
      align-items: center;
      .imgs {
        flex: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        .el-image {
          width: 140px;
          height: 140px;
          margin: 0 6px;
          border-radius: 5px;
          ::v-deep() .el-image__inner {
            object-fit: cover;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
        }
      }
      .content {
        flex: 2;
        .title {
          font-size: 24px;
        }
        .snapshot {
          text-indent: 24px;
          font-size: 12px;
          padding-right: 18px;
        }
        .tag {
          display: flex;
          align-items: center;
          div {
            width: 30px;
            height: 30px;
            line-height: 30px;
            border-radius: 50%;
            text-align: center;
            background: #000;
            margin: 10px 10px;
          }
        }
      }
    }
  }
}
</style>
