<script setup lang="ts">
import w1 from '@/images/Decision/1.jpg'
const decisionList = [
  {
    name: `群名更改为'转转贫乳同好会'提案决议`,
    start_time: '2024-7-26',
    end_time: '2024-7-26',
    state: '已结束',
    url: w1,
    link: ''
  },
]
</script>

<template>
  <div class="box">
    <div class="latestPreview">
      <div v-for="item in decisionList" :key="item.name" class="box-item" @click="$router.push(item.link!)">
        <img :src="item.url">
        <div class="describe">
          <div class="name">{{ item.name }}</div>
          <div class="time">活动时间：{{ item.start_time }} - {{ item.end_time }}</div>
          <div class="state" :style="`color:` + (item.state === '进行中' ? '#009688' : '#999')">{{ item.state }}</div>
        </div>
      </div>
    </div>
    <div class="decision-list">
      <div v v-for="item in decisionList" :key="item.name" class="decision-item" @click="$router.push(item.link!)">
        <img :src="item.url">
        <div class="decision-info">
          <div class="decision-title">
            {{ item.name }}
          </div>
          <div class="decision-describe">
            <div class="decision-time">
              {{ item.start_time }} - {{ item.end_time }}
            </div>
            <div class="decision-status" :style="`color:` + (item.state === '进行中' ? '#009688' : '#999')">
              {{ item.state }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
}

.latestPreview {
  width: 100%;
  background-image: url("@/images/decision/headerBackground.webp");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  padding: 5rem 15rem 2rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4rem;
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

  img {
    width: 100%;
    height: auto;
    border-radius: 1rem 1rem 0 0;
    object-fit: cover;
  }

}

.box-item:hover {
  cursor: pointer;
  transform: scale(1.03);
  transition: all 0.3s ease-in-out;
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

.decision-list {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 1rem;
  margin: 2rem 15rem;
}

.decision-item {
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 1rem;
  background-color: #fafafa;

  img {
    width: 100%;
    height: 9rem;
    object-fit: cover;
  }
}

.decision-info {
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: space-between;
}

.decision-describe {
  display: flex;
}

.decision-title {
  font-size: 1.4rem;
  color: #333;
}

.decision-time {
  margin-left: auto;
  color: #999;
}

.decision-status {
  margin-left: 3rem;
  color: #999;
}
</style>