<script setup lang="ts">
import w1 from '@/images/Activity/1.webp'
import w2 from '@/images/Activity/2.webp'
import w3 from '@/images/Activity/3.webp'
const activityList = [
  {
    name: '湖交GalGame十二交器选拔',
    start_time: '2024-10-8',
    end_time: '2024-10-15',
    state: '已结束',
    url: w1,
    link: '/activity/galGame-twelve-voting/vote'
  },
  {
    name: '湖交GalGame十二交器榜单',
    start_time: '2024-10-15',
    end_time: '永久',
    state: '已结束',
    url: w2,
    link: '/activity/galGame-twelve-voting/tier'
  },
  {
    name: 'GalGame TierMaker',
    start_time: '2024-11-8',
    end_time: '永久',
    state: '进行中',
    url: w3,
    link: '/activity/galgame-tier-maker'
  },
]

</script>

<template>
  <div class="box">
    <div class="latestPreview">
      <div v-for="item in activityList" :key="item.name" class="box-item" @click="$router.push(item.link!)">
        <img :src="item.url">
        <div class="describe">
          <div class="name">{{ item.name }}</div>
          <div class="time">活动时间：{{ item.start_time }} - {{ item.end_time }}</div>
          <div class="state" :style="`color:` + (item.state === '进行中' ? '#009688' : '#999')">{{ item.state }}</div>
        </div>
      </div>
    </div>
    <div class="activity-list">
      <div v v-for="item in activityList" :key="item.name" class="activity-item" @click="$router.push(item.link!)">
        <img :src="item.url">
        <div class="activity-info">
          <div class="activity-title">
            {{ item.name }}
          </div>
          <div class="activity-describe">
            <div class="activity-time">
              {{ item.start_time }} - {{ item.end_time }}
            </div>
            <div class="activity-status" :style="`color:` + (item.state === '进行中' ? '#009688' : '#999')">
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
  background-image: url("@/images/Activity/headerBackground.webp");
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

.activity-list {
  display: grid;
  grid-auto-rows: auto;
  row-gap: 1rem;
  margin: 2rem 15rem;
}

.activity-item {
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

.activity-info {
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: space-between;
}

.activity-describe {
  display: flex;
}

.activity-title {
  font-size: 1.4rem;
  color: #333;
}

.activity-time {
  margin-left: auto;
  color: #999;
}

.activity-status {
  margin-left: 3rem;
  color: #999;
}
</style>