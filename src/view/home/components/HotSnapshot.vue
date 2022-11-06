<template>
  <HotCard :has_title="false">
    <div class="hot-snapshot">
        <div class="snapshot">
            <p>我台正式开播于 2015 年，一对「好基友」JJ Ying 和 Leon Gao 出于对设计的热爱录下了第一期节目，想通过声音抒发自己的热情、输出吐槽并把有用没用的见解分享给更多人。非常荣幸，在开播五期之后我台就获得了Apple Best of 2015 最佳播客奖项。</p>
            <p>目前我台有对谈、访谈、评测等不同类型的节目，也衍生出了安妮薇时报 Anyway.News、术语小词典 Anyway.ABC、浏览器插件 Anyway.Tab 等周边服务，同时也在 2018 年推出了 Anyway.Member 会员计划和视频节目 Anyway.TV。</p>
        </div>
        <div class="sum_data">
            <p>我台目前已经发布的播客中共有：</p>
            <div class="">
            </div>
        </div>
    </div>

  </HotCard>
</template>
<script lang="ts" setup>
import HotCard from "./HotCard.vue";
</script>

<style lang="scss" scoped>
.hot-snapshot {
  display: flex;
  justify-content: space-between;
  .snapshot {
    flex-basis: 72%;
    box-sizing: border-box;
    padding-right: 20px;
    border-right: 1px dotted #ddd;
    p:last-child {
        margin-top: 24px;
    }
  }
  .sum_data {
    flex-basis: 28%;
    box-sizing: border-box;
    padding-left: 20px;
  }
}
</style>
