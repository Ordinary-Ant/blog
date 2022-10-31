<template>
  <HotCard title="有趣_文章" padding="0 80px">
    <div class="hot-article">
      <div
        v-for="(article_item, index) in articles"
        :class="['article-item', index % 2 && 'flex-reverse']"
        :key="article_item.id"
      >
        <el-image :src="article_item.img" lazy />
        <div class="blur-img">
          <img :src="article_item.img" alt="" />
        </div>
        <div :class="['article-content', index % 2 ? 'ml-44' : 'mr-44']">
          <div class="title">{{ article_item.title }}</div>
          <div class="tag">
            <span>{{ article_item.time }}</span>
            <div>
              <span>{{ article_item.category }}</span>
              <span>{{ article_item.num }}</span>
            </div>
          </div>
          <div class="snapshot">{{ article_item.snapshot }}</div>
        </div>
      </div>
    </div>
  </HotCard>
</template>
<script lang="ts" setup>
import HotCard from "./HotCard.vue";
import { ref } from "vue";
const articles = ref([
  {
    id: 1,
    img: "https://img1.baidu.com/it/u=3009731526,373851691&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1667235600&t=1fa050ba9b29111cb2f8e2975e75d350",
    title: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    time: "2022年10月11日 23时12分",
    num: 1111,
    category: "前端技术",
    snapshot:
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: 2,
    img: "https://img1.baidu.com/it/u=3009731526,373851691&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1667235600&t=1fa050ba9b29111cb2f8e2975e75d350",
    title: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    time: "2022年10月11日 23时12分",
    num: 1111,
    category: "公共学习",
    snapshot:
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: 3,
    img: "https://img1.baidu.com/it/u=3009731526,373851691&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1667235600&t=1fa050ba9b29111cb2f8e2975e75d350",
    title: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    time: "2022年10月11日 23时12分",
    num: 1111,
    category: "生活随笔",
    snapshot:
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
]);
</script>

<style lang="scss" scoped>
.article-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.2);
  overflow: hidden;
  position: relative;

  .blur-img {
    box-sizing: border-box;
    z-index: 0;
    img {
      object-fit: cover;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
      transform: scale(1.55);
      filter: blur(1.875rem) brightness(0.75);
    }
  }
  .el-image {
    width: 300px;
    z-index: 10;
    ::v-deep() .el-image__inner {
      object-fit: cover;
      background-position: center;
      background-size: cover;
      transition: all 0.5s;

      &:hover {
        transform: scale(1.2) rotate(3deg);
      }
    }
  }
  .article-content {
    z-index: 10;
    width: 480px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #fff;
    .title {
      font-size: 28px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      letter-spacing: 1px;
    }
    .snapshot {
      text-indent: 18px;
      text-overflow: ellipsis;
      word-break: break-all;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      letter-spacing: 1px;
    }
    .tag {
      font-size: 12px;
      margin: 12px 0;
      display: flex;
      justify-content: space-between;
    }
  }

  &.flex-reverse {
    flex-direction: row-reverse;
  }

  .mr-44 {
    margin-right: 32px;
  }

  .ml-44 {
    margin-left: 32px;
  }
}
</style>
