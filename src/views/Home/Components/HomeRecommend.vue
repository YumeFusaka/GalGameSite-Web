<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue';
import w1 from '@/images/Recommend/1.webp'
import w2 from '@/images/Recommend/2.webp'
import w3 from '@/images/Recommend/3.webp'
import w4 from '@/images/Recommend/4.webp'
import w5 from '@/images/Recommend/5.webp'
const recommondList = [
  {
    name: "白色相簿2",
    url: w1
  },
  {
    name: "美好的每一天 不连续的存在",
    url: w2
  },
  {
    name: "樱花萌放",
    url: w3
  },
  {
    name: "甜蜜女友2+",
    url: w4
  },
  {
    name: "樱之诗",
    url: w5
  },
]
</script>

<template>
  <div class="recommend">
    <TitleComponent style="">
      <template v-slot="title">
        佳作推荐
      </template>
    </TitleComponent>
    <div class="box">
      <div v-for="item in recommondList" :key="item.url" class="box-item">
        <div class="box-item">
          <img :src="item.url">
          <div class="name">{{ item.name }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.recommend {
  margin: 0 5rem 0 5rem;
  padding: 1.5rem 1.25rem 1.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.3);
  /* 半透明白色 */
  backdrop-filter: blur(10px);
  /* 模糊效果 */
  border-radius: 0.625rem;
  /* 圆角 */
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  /* 轻微阴影 */
}

.box {
  display: grid;
  margin-top: 1.5625rem;
  grid-template-rows: 1fr;
  column-gap: 1.5625rem;
  row-gap: 1.5625rem;
  grid-template-columns: repeat(2, 1fr);
}


@media (min-width: 768px) {
  .box {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 900px) {
  .box {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* 当屏幕宽度大于1200px时，每行显示4张图片 */
@media (min-width: 1200px) {
  .box {
    grid-template-columns: repeat(5, 1fr);
  }
}

.box-item {
  display: flex;
  flex-direction: column;
}

img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  object-fit: cover;
}

.name {
  margin-top: 0.625rem;
  font-size: 1rem;
  color: #f0767e;
  font-weight: 600;
  align-self: center;
  text-align: center;
}
</style>
