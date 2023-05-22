<template>
  <Page>
    <section class="flex">
      <div class="flex-1">
        <div v-for="(creation_item, index) in creation_list" :key="creation_item.id"
          :class="['flex', 'border-b', 'border-dotted', 'py-4', 'border-default-color', index % 2 && 'flex-row-reverse']">
          <el-image :src="creation_item.image" class="rounded-md overflow-hidden w-1/4 min-width-240" lazy />
          <div :class="['flex', 'flex-col', ' justify-center', index % 2 ? 'mr-8' : 'ml-8']">
            <div class="tag-text-color">@{{ creation_item.ator }}</div>
            <div class="font-bold text-2xl mb-4 cursor-pointer">{{ creation_item.title }}</div>
            <div class="mb-2 pr-4">{{ creation_item.snap }}</div>
            <div class="tag-text-color">{{ creation_item.time }}</div>
            <div class="flex justify-start">
              <div class=" mr-4 mt-8 shadow-md p-2 rounded" v-for="i in 3" :key="i">
                <img src="@/assets/vue.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Page>
</template>
  
<script setup>
import Page from '@components/page/Page.vue';
import { ref } from 'vue';

const creation_list = ref([
  {
    id: 1,
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
    title: '真正牛逼得无敌得强的一批得项目',
    snap: '我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍',
    techs: ['webpack', 'vue', 'nestjs', 'mongodb'],
    time: '2022年10月12日',
    ator: '子舟'
  },
  {
    id: 2,
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
    title: '真正牛逼得无敌得强的一批得项目',
    snap: '我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍',
    techs: ['webpack', 'vue', 'nestjs', 'mongodb'],
    time: '2022年10月12日',
    ator: '子舟'
  },
  {
    id: 3,
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
    title: '真正牛逼得无敌得强的一批得项目',
    snap: '我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍',
    techs: ['webpack', 'vue', 'nestjs', 'mongodb'],
    time: '2022年10月12日',
    ator: '子舟'
  },
  {
    id: 4,
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
    title: '真正牛逼得无敌得强的一批得项目',
    snap: '我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍',
    techs: ['webpack', 'vue', 'nestjs', 'mongodb'],
    time: '2022年10月12日',
    ator: '子舟'
  },
])
</script>
  