<template>
  <Page>
    <section class="creation-container">
      <div class="creation-list">
        <div 
          v-for="(creation_item, index) in creation_list" 
          :key="creation_item.id"
          :class="['creation-item', index % 2 && 'flex-reverse']"
        >
          <el-image :src="creation_item.image" lazy />
          <div :class="['creation-content', index % 2 ? 'mr-4' : 'ml-4']">
            <div class="ator">@{{ creation_item.ator }}</div>
            <div class="title">{{ creation_item.title }}</div>
            <div class="snapshot">{{ creation_item.snap }}</div>
            <div class="tag">{{ creation_item.time }}</div>
            <div class="cate">
              <div class="cate-img" v-for="i in 3" :key="i">
                <img src="@/assets/vue.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="creation-aside">
        
      </div>
    </section>
  </Page>
</template>
  
<script setup lang="ts">
import Page from '@components/page/Page.vue';
import { ref } from 'vue';

const creation_list = ref<any>([
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
  
<style lang="scss" scoped>
.creation-container {
  display: flex;
  .creation-list {
    flex: 1;
    .creation-item {
      display: flex;
      border-bottom: 1px dotted #ddd;
      box-sizing: border-box;
      padding: 12px 0;
      .el-image {
        min-width: 200px;
        width: 30%;
        border-radius: 5px;
        overflow: hidden;
      }
      .creation-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .ator {
          color: #ccc;
          font-size: 14px;
        }
        .title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 12px;
        }
        .snapshot {
          color: #595959;
          margin: 6px 0;
        }
        .tag {
          color: #ccc;
          font-size: 14px;
        }
      }
    }
  }
  .creation-aside {
    width: 400px;
  }
}
.cate {
  display: flex;
  justify-content: flex-end;
  .cate-img {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 0 10px;
  }
}
.creation-item {
  &.flex-reverse {
    flex-direction: row-reverse;
  }
}
</style>
  