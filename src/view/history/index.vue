<template>
  <Page>
    <div class="history-container">
      <div v-for="year in Object.keys(arr)" :key="year">
        <div class="year">{{ year }}</div>
        <div v-for="(item, index) in arr[year]" :key="item.id" :class="['history-item', index % 2 && 'flex-reverse']">
          <div :class="['img', !(index % 2) && 'flex-end']">
            <el-image :src="item.image" lazy></el-image>
          </div>
          <div class="seq">
            <div></div>
            <span></span>
            <div></div>
          </div>
          <div :class="['info', !(index % 2) && 'flex-col-start']">
            <span class="type">子舟.{{item.type}}</span>
            <span class="name">{{ item.name }}</span>
            <span class="content">{{item.content}}</span>
            <span class="date">{{item.date}}</span>
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>
  
<script setup lang="ts">
import Page from '@components/page/Page.vue';
import { ref } from 'vue'
const arr = ref<any>({
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
.history-container {
  box-sizing: border-box;
  .year {
    padding: 12px 0;
    text-align: center;
    font-size: 30px;
    color: skyblue;
    letter-spacing: 2px;
  }
  .history-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    .img {
      flex: 1;
      display: flex;
      padding: 24px 32px;
      box-sizing: border-box;
      .el-image {
        width: 550px;
        height: 320px;
        border-radius: 8px;
      }
    }
    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      padding: 24px 32px;
      letter-spacing: 2px;
      .type{
        font-size: 24px;
        color: #333;
      }
      .name, .content, .date{
        font-size: 18px;
        color: #ccc;
      }
      .content, .date {
        font-size: 14px;
      }
    }
    .seq {
      height: 368px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        margin: 6px 0;
        width: 12px;
        height: 12px;
        background: #000;
        border-radius: 50%;
      }
      div {
        flex: 1;
        width: 1px;
        background: #000;
        height: 100%;
      }
    }
  }
}
.flex-reverse {
  flex-direction: row-reverse;
}
.flex-end {
  justify-content: flex-end;
}
.flex-col-start {
  align-items: flex-start !important;
}
</style>
  