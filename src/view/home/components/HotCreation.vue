<template>
  <HotCard title="出色_作品">
    <div class="hot-creation">
      <div class="master-creation">
        <div class="blur-img">
          <img :src="master_crea.img" alt="" />
        </div>
      </div>
      <div class="more-creation">
        <div v-for="item in more_list" :key="item.id">
          <div class="blur-img">
            <img :src="master_crea.img" alt="" />
          </div>
        </div>
      </div>
    </div>
  </HotCard>
</template>
<script lang="ts" setup>
import HotCard from "./HotCard.vue";
import { computed } from "vue";

const list = [{
  id: '1',
  num: 100,
  snapshot: '天下大同天下大同天下大同天下大同天下大同天下大同天下大同天下大同',
  img: 'https://img1.baidu.com/it/u=1234898636,1354725942&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  imgs: [
    'https://img1.baidu.com/it/u=1234898636,1354725942&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    'https://img2.baidu.com/it/u=4147884680,3389833900&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    'https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500'
  ],
  title: '天下大同',
  time: '2022.12.12',
  category: '前端'
},{
  id: '2',
  num: 100,
  snapshot: '天下大同天下大同天下大同天下大同天下大同天下大同天下大同天下大同',
  img: 'https://img1.baidu.com/it/u=1234898636,1354725942&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  imgs: [
    'https://img1.baidu.com/it/u=1234898636,1354725942&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    'https://img2.baidu.com/it/u=4147884680,3389833900&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    'https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500'
  ],
  title: '天下大同',
  time: '2022.12.12',
  category: '前端'
},{
  id: '3',
  num: 100,
  snapshot: '天下大同天下大同天下大同天下大同天下大同天下大同天下大同天下大同',
  img: 'https://img1.baidu.com/it/u=1234898636,1354725942&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
  imgs: [
    'https://img1.baidu.com/it/u=1234898636,1354725942&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    'https://img2.baidu.com/it/u=4147884680,3389833900&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    'https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500'
  ],
  title: '天下大同',
  time: '2022.12.12',
  category: '前端'
}]

const master_crea = computed(() => {
  return list[0]
})

const more_list = computed(() => {
  return list.slice(1)
})

</script>

<style lang="scss" scoped>
.hot-creation {
  display: flex;
  .master-creation {
    flex: 2
  }
  .more-creation {
    flex: 1;
  }
}
</style>
