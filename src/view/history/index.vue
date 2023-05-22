<template>
  <Page>
    <div class="box-border">
      <template v-for="year in Object.keys(arr)" :key="year">
        <div class="py-8 text-center text-4xl font-bold tracking-wide cate-text-color">{{ year }}</div>
        <div v-for="(item, index) in arr[year]" :key="item.id" :class="['flex', index % 2 && 'flex-row-reverse']">
          <div :class="['h-left py-3 px-8 flex justify-start', !(index % 2) && ' flex-row-reverse']">
            <el-image :src="item.image" fit="cover" class="w-full rounded-md" style="max-width: 25rem;" lazy></el-image>
          </div>
          <div class="relative step">
          </div>
          <div :class="['h-right flex flex-col py-3 px-8 justify-center', !(index % 2) ? 'items-start' : 'items-end']">
            <span class="text-3xl mb-2">子舟.{{item.type}}</span>
            <span class="text-xl title-color-ash mb-2">{{ item.name }}</span>
            <span class="tag-text-color">{{item.date}}</span>
          </div>
        </div>
      </template>
    </div>
  </Page>
</template>
  
<script setup>
import Page from '@components/page/Page.vue';
import { ref } from 'vue'
const arr = ref({
  2022: [
  {
    id: 1,
    type: 'Article',
    name: '2022 年度愚人节官网首页「纪录片 FM」',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
    content: '因为众所周知的原因，第一次把线下活动搬到线上',
    origin_id: '123456',
    date: '2022-11-27'
  },
  {
    id: 2,
    type: 'Article',
    name: '2022 年度愚人节官网首页「纪录片 FM」',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
    content: '因为众所周知的原因，第一次把线下活动搬到线上',
    origin_id: '123456',
    date: '2022-11-27'
  },
  {
    id: 3,
    type: 'Article',
    name: '2022 年度愚人节官网首页「纪录片 FM」',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
    content: '因为众所周知的原因，第一次把线下活动搬到线上',
    origin_id: '123456',
    date: '2022-11-27'
  },
  {
    id: 4,
    type: 'Article',
    name: '2022 年度愚人节官网首页「纪录片 FM」',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
    content: '因为众所周知的原因，第一次把线下活动搬到线上',
    origin_id: '123456',
    date: '2022-11-27'
  },
],
2021: [
  {
    id: 1,
    type: 'Article',
    name: '2022 年度愚人节官网首页「纪录片 FM」',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
    content: '因为众所周知的原因，第一次把线下活动搬到线上',
    origin_id: '123456',
    date: '2022-11-27'
  },
  {
    id: 2,
    type: 'Article',
    name: '2022 年度愚人节官网首页「纪录片 FM」',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
    content: '因为众所周知的原因，第一次把线下活动搬到线上',
    origin_id: '123456',
    date: '2022-11-27'
  },
  {
    id: 3,
    type: 'Article',
    name: '2022 年度愚人节官网首页「纪录片 FM」',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
    content: '因为众所周知的原因，第一次把线下活动搬到线上',
    origin_id: '123456',
    date: '2022-11-27'
  },
  {
    id: 4,
    type: 'Article',
    name: '2022 年度愚人节官网首页「纪录片 FM」',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
    content: '因为众所周知的原因，第一次把线下活动搬到线上',
    origin_id: '123456',
    date: '2022-11-27'
  },
]
})
</script>
  
<style lang="scss" scoped>
.h-left,.h-right {
  flex: 0 0 calc(50% - 1px / 2);
}
.step {
  flex: 0 0 1px;
  background: var(--defaultBorderColor);
}
.step::before {
  content: '';
  position: absolute;
  width: .8571rem;
  height: .8571rem;
  border-radius: 50%;
  background: var(--navColor);
  top: 50%;
  left: 51%;
  transform: translate(-50%, -50%);
}
</style>
  