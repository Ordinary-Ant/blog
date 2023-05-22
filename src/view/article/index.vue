<template>
  <Page>
    <div v-for="sect in Object.keys(arr)" :key="sect" class="mb-7">
      <div class="flex items-center mb-4">
        <span class="text-4xl font-bold cate-text-color">{{ sect }}</span>
        <div class="border border-dotted flex-1 border-default-color"></div>
      </div>
      <div class="flex items-center flex-wrap">
        <div
          v-for="item in arr[sect]"
          :key="item.id"
          class="w-1/3 flex justify-start box-border mb-4"
        >
          <span
            class="h-7 py-2 px-3 rounded-md leading-4 title-text-color background-color"
            >{{ item.number }}</span
          >
          <div
            class="flex-1 mr-4 ml-3 box-border pb-4 border-b border-dotted border-default-color"
          >
            <a @click="navTo(`/detail/${item.id}`)" class="block font-bold text-lg">{{ item.title }}</a>
            <div class="my-3">
              <span>{{ item.snap }}</span>
            </div>
            <div class="text-xs tag-text-color">
              <span class="mr-2">{{ item.time }}</span>
              <span class="mr-2" v-for="(tag, i) in item.tags" :key="i">
                <span class="cate-text-color">#</span>
                <span class="cursor-pointer hover:blur-sm">{{ tag }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>

<script setup>
import Page from "@components/page/Page.vue";

import useNav from '@hooks/useNav';

const { navTo } = useNav()

import { ref } from "vue";
const arr = ref({
  2020: [
    {
      id: 1,
      number: 21,
      title: "和创业中的前 Adobe XD 设计师聊聊 Figma 收购案",
      background:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97",
      snap: "我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍 35 条评论",
      time: "10月12日",
      tags: ["职业发展", "创业", "body", "访谈"],
    },
    {
      id: 2,
      number: 22,
      title: "和创业中的前 Adobe XD 设计师聊聊 Figma 收购案",
      background:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97",
      snap: "我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍 35 条评论",
      time: "10月12日",
      tags: ["职业发展", "创业", "body", "访谈"],
    },
    {
      id: 3,
      number: 23,
      title: "和创业中的前 Adobe XD 设计师聊聊 Figma 收购案",
      background:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97",
      snap: "我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍 35 条评论",
      time: "10月12日",
      tags: ["职业发展", "创业", "body", "访谈"],
    },
    {
      id: 4,
      number: 24,
      title: "我们得收集信仰，让信徒信仰太阳",
      background:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97",
      snap: "我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍 35 条评论",
      time: "10月12日",
      tags: ["职业发展", "创业", "body", "访谈"],
    },
  ],
  2021: [
    {
      id: 1,
      number: 21,
      title: "和创业中的前 Adobe XD 设计师聊聊 Figma 收购案",
      background:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97",
      snap: "我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍 35 条评论",
      time: "10月12日",
      tags: ["职业发展", "创业", "body", "访谈"],
    },
    {
      id: 2,
      number: 22,
      title: "和创业中的前 Adobe XD 设计师聊聊 Figma 收购案",
      background:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97",
      snap: "我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍 35 条评论",
      time: "10月12日",
      tags: ["职业发展", "创业", "body", "访谈"],
    },
    {
      id: 3,
      number: 23,
      title: "和创业中的前 Adobe XD 设计师聊聊 Figma 收购案",
      background:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97",
      snap: "我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍 35 条评论",
      time: "10月12日",
      tags: ["职业发展", "创业", "body", "访谈"],
    },
    {
      id: 4,
      number: 24,
      title: "我们得收集信仰，让信徒",
      background:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97",
      snap: "我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍 35 条评论",
      time: "10月12日",
      tags: ["职业发展", "创业", "body", "访谈"],
    },
  ],
});
</script>
