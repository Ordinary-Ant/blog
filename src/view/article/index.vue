<template>
  <Page>
    <section class="section-container">
      <div v-for="sect in Object.keys(arr)" :key="sect" class="section-wrapper">
        <div class="section-title">
          <span>{{ sect }}</span>
          <div class="title-seq"></div>
        </div>
        <div class="section-content">
          <div v-for="item in arr[sect]" :key="item.id" class="section-item">
            <span>{{ item.number }}</span>
            <div class="content">
              <a href="" class="title">{{ item.title }}</a>
              <div class="snap">
                {{ item.snap }}
              </div>
              <div class="info">
                <span>{{ item.time }}</span>
                <span v-for="(tag, i) in item.tags" :key="i">#{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import Page from "@components/page/Page.vue";
import { ref } from "vue";
const arr = ref<any>({
  '2021': [
    {
      id: 1,
      number: 21,
      title: '和创业中的前 Adobe XD 设计师聊聊 Figma 收购案',
      background: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
      snap: '我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍 35 条评论',
      time: '10月12日',
      tags: ['职业发展', '创业', 'body', '访谈']
    },{
      id: 2,
      number: 22,
      title: '和创业中的前 Adobe XD 设计师聊聊 Figma 收购案',
      background: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
      snap: '我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍 35 条评论',
      time: '10月12日',
      tags: ['职业发展', '创业', 'body', '访谈']
    },{
      id: 3,
      number: 23,
      title: '和创业中的前 Adobe XD 设计师聊聊 Figma 收购案',
      background: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
      snap: '我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍 35 条评论',
      time: '10月12日',
      tags: ['职业发展', '创业', 'body', '访谈']
    },{
      id: 4,
      number: 24,
      title: '和创业中的前 Adobe XD 设计师聊聊 Figma 收购案',
      background: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F17%2F20161017225110_FXsRZ.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670570902&t=03d3449e62c1cc016f87f5e40aae5b97',
      snap: '我们邀请到了三位「本年度被裁员过」的群友，和他们一起在这个说冷不冷，说热也不热的深秋，聊聊这段特殊的经历，不制造焦虑，只想给有类似经历的朋友一点儿慰籍 35 条评论',
      time: '10月12日',
      tags: ['职业发展', '创业', 'body', '访谈']
    }
  ]
})
</script>

<style lang="scss" scoped>
.section-wrapper {
  margin-bottom: 24px;
}
.section-title {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  span {
    font-size: 24px;
    font-weight: bold;
    color: skyblue;
  }
  .title-seq {
    border: 0.5px dotted #ddd;
    flex: 1;
  }
}
.section-content {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  flex-wrap: wrap;
  .section-item {
    width: 33.33%;
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    margin-bottom: 12px;
    &>span {
      height: 26px;
      padding: 4px 8px;
      background: skyblue;
      border-radius: 5px;
      color: #fff;
    }
    .content {
      flex: 1;
      margin: 0 15px 0 8px;
      box-sizing: border-box;
      padding-bottom: 12px;
      border-bottom: 1px dotted #ddd;
      .title {
        display: block;
        font-size: 18px;
        font-weight: bold;
      }
      .snap {
        margin: 12px 0;
        font-size: 14px;
        color: #595959;
      }
      .info {
        font-size: 12px;
        color: #ccc;
        span {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>
