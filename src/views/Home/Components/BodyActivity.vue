<script setup lang="ts">
import w1 from '@/images/Activity/1.webp'
import w2 from '@/images/Activity/2.webp'
import w3 from '@/images/Activity/3.webp'
const activityList = [
  {
    name: '湖交GalGame十二神器大选',
    start_time: '2024-10-9',
    end_time: '2024-10-15',
    state: '未开始',
    url: w1
  },
  {
    name: '湖交GalGame十二神器实时榜单',
    start_time: '2024-10-9',
    end_time: '2024-10-15',
    state: '未开始',
    url: w2
  },
  {
    name: '湖交GalGame十二神器结果公示',
    start_time: '2024-10-16',
    end_time: '永久',
    state: '未开始',
    url: w3
  },
]

</script>

<template>
  <div class="activity">
    <TitleComponent style="">
      <template v-slot="title">
        社团活动
      </template>
    </TitleComponent>
    <div class="box">
      <div v-for="item in activityList" :key="item.name" class="box-item">
        <img :src="item.url">
        <div class="describe">
          <div class="name">{{ item.name }}</div>
          <div class="time">活动时间：{{ item.start_time }} - {{ item.end_time }}</div>
          <div class="state">{{ item.state }}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.activity {
  width: 100%;
  height: 100%;
  padding: 1.5rem 1.25rem 1.5rem 1.25rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 0.625rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
}

.box {
  margin-top: 1.5625rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2.5rem;
  grid-template-rows: repeat(auto, 1fr);
  row-gap: 2.5rem;
}

@media screen and (max-width: 1200px) {
  .box {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .box {
    grid-template-columns: repeat(1, 1fr);
  }
}

.box-item {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.8);
  /* 半透明白色 */
  backdrop-filter: blur(10px);
  /* 模糊效果 */
  border-radius: 1rem;
  /* 圆角 */
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  /* 轻微阴影 */
}


img {
  width: 100%;
  height: auto;
  border-radius: 1rem 1rem 0 0;
  object-fit: cover;
}

.describe {
  padding: 0.625rem 0.9375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #333;
}

.time {
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.3125rem;
}

.state {
  font-size: 0.875rem;
  color: #999;
  margin-top: 0.3125rem;
}
</style>
