<template>
  <Page>
    <!-- input -->
    <Propose is_comment/>
    <!-- list -->
    <div class="flex flex-wrap justify-between relative">
      <div
        class="order-none comment py-4 border-t border-dotted border-default-color"
        :style="{ 'flex-grow': item.grow }"
        v-for="(item, index) in arr"
        :key="item.id"
      >
        <div
          class="pr-4 border-r border-dotted border-default-color"
          :class="index % 2 && 'border-none pr-0 pl-4'"
        >
          <div class="flex items-center mb-4">
            <el-avatar :src="item.avator" class="mr-3" lazy />
            <span class="font-bold">{{ item.name }}</span>
          </div>
          <p
            v-for="(comment_p, index) in item.comment"
            :key="index"
            class="leading-6"
          >
            {{ comment_p }}
          </p>
          <div class="origin p-1 inline-block my-4 cursor-pointer">
            {{ item.origin_id }}
          </div>
          <div class="flex justify-between items-center">
            <span class="text-red-500">赞：{{ item.likes }}</span>
            <span>{{ item.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>

<script setup>
import Page from "@components/page/Page.vue";
import Propose from '.@components/propose/Propose.vue';
import { ref } from "vue";

const arr = ref([
  {
    id: 1,
    name: "xxxx",
    grow: "1111111",
    avator:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97",
    comment: [
      "【新的评论区十分不适合长评】",
      "昨夜海棠艳枝头，今日雨倏寒意秋。莫待阴郁复霁久，新醅能饮一杯否。",
      "首先，祝永远湿货永远温润我心的我台生日快乐！（毕竟 7 周年了，就算没搞个新页面也留个留言的地方啊 ほら）Anyway，向各位致以我最诚挚的祝福。",
      "今年毫无疑问是我人生中「空落感」最为深重的一年。这起源于持续不断的疫情，无聊且无法逃避的生活，被限制着的、隔着一层可悲的荧幕的情感联系，以及一次又一次被打消的对自由的渴求。我不知道是否在”寒气“被点明之前各位就早已感受到不适，但毫无疑问，这确实是个多事之秋。但是正如 JJ 老师在简介里所说，在「随性而愉快」的氛围的「挑动」下（我就想用这个词），生活似乎反而变得没有这么糟了。或许，不需要深远寄托，也不需要华丽辞藻，在缓缓到来的此刻，我们只需要拥有自己的心情，拥有炽热的情谊和轻松的氛围，这就够了。",
      "然后，让我们替今日的寿星许个愿吧（笑死）生日快乐，安妮薇。",
    ],
    origin_id: "拉着三位「毕业生」，我们组了一个「寒气录音室」",
    likes: 100,
    date: "2022-11-27",
  },
  {
    id: 2,
    name: "xxxx",
    grow: "11111111",
    avator:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97",
    comment: [
      "【新的评论区十分不适合长评】",
      "昨夜海棠艳枝头，今日雨倏寒意秋。莫待阴郁复霁久，新醅能饮一杯否。",
      "首先，祝永远湿货永远温润我心的我台生日快乐！（毕竟 7 周年了，就算没搞个新页面也留个留言的地方啊 ほら）Anyway，向各位致以我最诚挚的祝福。",
      "今年毫无疑问是我人生中「空落感」最为深重的一年。这起源于持续不断的疫情，无聊且无法逃避的生活，被限制着的、隔着一层可悲的荧幕的情感联系，以及一次又一次被打消的对自由的渴求。我不知道是否在”寒气“被点明之前各位就早已感受到不适，但毫无疑问，这确实是个多事之秋。但是正如 JJ 老师在简介里所说，在「随性而愉快」的氛围的「挑动」下（我就想用这个词），生活似乎反而变得没有这么糟了。或许，不需要深远寄托，也不需要华丽辞藻，在缓缓到来的此刻，我们只需要拥有自己的心情，拥有炽热的情谊和轻松的氛围，这就够了。",
      "然后，让我们替今日的寿星许个愿吧（笑死）生日快乐，安妮薇。",
    ],
    origin_id: "拉着三位「毕业生」，我们组了一个「寒气录音室」",
    likes: 100,
    date: "2022-11-27",
  },
  {
    id: 3,
    name: "xxxx",
    grow: "1111",
    avator:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97",
    comment: [
      "【新的评论区十分不适合长评】",
      "昨夜海棠艳枝头，今日雨倏寒意秋。莫待阴郁复霁久，新醅能饮一杯否。",
      "首先，祝永远湿货永远温润我心的我台生日快乐！（毕竟 7 周年了，就算没搞个新页面也留个留言的地方啊 ほら）Anyway，向各位致以我最诚挚的祝福。",
      "今年毫无疑问是我人生中「空落感」最为深重的一年。这起源于持续不断的疫情，无聊且无法逃避的生活，被限制着的、隔着一层可悲的荧幕的情感联系，以及一次又一次被打消的对自由的渴求。我不知道是否在”寒气“被点明之前各位就早已感受到不适，但毫无疑问，这确实是个多事之秋。但是正如 JJ 老师在简介里所说，在「随性而愉快」的氛围的「挑动」下（我就想用这个词），生活似乎反而变得没有这么糟了。或许，不需要深远寄托，也不需要华丽辞藻，在缓缓到来的此刻，我们只需要拥有自己的心情，拥有炽热的情谊和轻松的氛围，这就够了。",
      "然后，让我们替今日的寿星许个愿吧（笑死）生日快乐，安妮薇。",
    ],
    origin_id: "拉着三位「毕业生」，我们组了一个「寒气录音室」",
    likes: 100,
    date: "2022-11-27",
  },
  {
    id: 4,
    name: "xxxx",
    grow: "1111111",
    avator:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97",
    comment: [
      "【新的评论区十分不适合长评】",
      "昨夜海棠艳枝头，今日雨倏寒意秋。莫待阴郁复霁久，新醅能饮一杯否。",
      "首先，祝永远湿货永远温润我心的我台生日快乐！（毕竟 7 周年了，就算没搞个新页面也留个留言的地方啊 ほら）Anyway，向各位致以我最诚挚的祝福。",
      "今年毫无疑问是我人生中「空落感」最为深重的一年。这起源于持续不断的疫情，无聊且无法逃避的生活，被限制着的、隔着一层可悲的荧幕的情感联系，以及一次又一次被打消的对自由的渴求。我不知道是否在”寒气“被点明之前各位就早已感受到不适，但毫无疑问，这确实是个多事之秋。但是正如 JJ 老师在简介里所说，在「随性而愉快」的氛围的「挑动」下（我就想用这个词），生活似乎反而变得没有这么糟了。或许，不需要深远寄托，也不需要华丽辞藻，在缓缓到来的此刻，我们只需要拥有自己的心情，拥有炽热的情谊和轻松的氛围，这就够了。",
      "然后，让我们替今日的寿星许个愿吧（笑死）生日快乐，安妮薇。",
    ],
    origin_id: "拉着三位「毕业生」，我们组了一个「寒气录音室」",
    likes: 100,
    date: "2022-11-27",
  },
  {
    id: 5,
    name: "xxxx",
    grow: "1111111",
    avator:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97",
    comment: [
      "【新的评论区十分不适合长评】",
      "昨夜海棠艳枝头，今日雨倏寒意秋。莫待阴郁复霁久，新醅能饮一杯否。",
      "首先，祝永远湿货永远温润我心的我台生日快乐！（毕竟 7 周年了，就算没搞个新页面也留个留言的地方啊 ほら）Anyway，向各位致以我最诚挚的祝福。",
      "今年毫无疑问是我人生中「空落感」最为深重的一年。这起源于持续不断的疫情，无聊且无法逃避的生活，被限制着的、隔着一层可悲的荧幕的情感联系，以及一次又一次被打消的对自由的渴求。我不知道是否在”寒气“被点明之前各位就早已感受到不适，但毫无疑问，这确实是个多事之秋。但是正如 JJ 老师在简介里所说，在「随性而愉快」的氛围的「挑动」下（我就想用这个词），生活似乎反而变得没有这么糟了。或许，不需要深远寄托，也不需要华丽辞藻，在缓缓到来的此刻，我们只需要拥有自己的心情，拥有炽热的情谊和轻松的氛围，这就够了。",
      "然后，让我们替今日的寿星许个愿吧（笑死）生日快乐，安妮薇。",
    ],
    origin_id: "拉着三位「毕业生」，我们组了一个「寒气录音室」",
    likes: 100,
    date: "2022-11-27",
  },
  {
    id: 6,
    name: "xxxx",
    grow: "1111111",
    avator:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97",
    comment: [
      "【新的评论区十分不适合长评】",
      "昨夜海棠艳枝头，今日雨倏寒意秋。莫待阴郁复霁久，新醅能饮一杯否。",
      "首先，祝永远湿货永远温润我心的我台生日快乐！（毕竟 7 周年了，就算没搞个新页面也留个留言的地方啊 ほら）Anyway，向各位致以我最诚挚的祝福。",
      "今年毫无疑问是我人生中「空落感」最为深重的一年。这起源于持续不断的疫情，无聊且无法逃避的生活，被限制着的、隔着一层可悲的荧幕的情感联系，以及一次又一次被打消的对自由的渴求。我不知道是否在”寒气“被点明之前各位就早已感受到不适，但毫无疑问，这确实是个多事之秋。但是正如 JJ 老师在简介里所说，在「随性而愉快」的氛围的「挑动」下（我就想用这个词），生活似乎反而变得没有这么糟了。或许，不需要深远寄托，也不需要华丽辞藻，在缓缓到来的此刻，我们只需要拥有自己的心情，拥有炽热的情谊和轻松的氛围，这就够了。",
      "然后，让我们替今日的寿星许个愿吧（笑死）生日快乐，安妮薇。",
    ],
    origin_id: "拉着三位「毕业生」，我们组了一个「寒气录音室」",
    likes: 100,
    date: "2022-11-27",
  },
  {
    id: 7,
    name: "xxxx",
    grow: "11111",
    avator:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97",
    comment: [
      "【新的评论区十分不适合长评】",
      "昨夜海棠艳枝头，今日雨倏寒意秋。莫待阴郁复霁久，新醅能饮一杯否。",
      "首先，祝永远湿货永远温润我心的我台生日快乐！（毕竟 7 周年了，就算没搞个新页面也留个留言的地方啊 ほら）Anyway，向各位致以我最诚挚的祝福。",
      "今年毫无疑问是我人生中「空落感」最为深重的一年。这起源于持续不断的疫情，无聊且无法逃避的生活，被限制着的、隔着一层可悲的荧幕的情感联系，以及一次又一次被打消的对自由的渴求。我不知道是否在”寒气“被点明之前各位就早已感受到不适，但毫无疑问，这确实是个多事之秋。但是正如 JJ 老师在简介里所说，在「随性而愉快」的氛围的「挑动」下（我就想用这个词），生活似乎反而变得没有这么糟了。或许，不需要深远寄托，也不需要华丽辞藻，在缓缓到来的此刻，我们只需要拥有自己的心情，拥有炽热的情谊和轻松的氛围，这就够了。",
      "然后，让我们替今日的寿星许个愿吧（笑死）生日快乐，安妮薇。",
    ],
    origin_id: "拉着三位「毕业生」，我们组了一个「寒气录音室」",
    likes: 100,
    date: "2022-11-27",
  },
]);
</script>

<style lang="scss" scoped>
.comment {
  flex-basis: 34%;
}
.origin {
  background-image: var(--pattern-bg);
  background-size: calc(0.75px / 0.25) calc(0.75px * 4);
  &:hover {
    background: var(--borderColor);
  }
}
</style>
