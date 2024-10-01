<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue';
const recommondList = [
  {
    name: "白色相簿2",
    url: "src/images/Recommend/1.webp"
  },
  {
    name: "美好的每一天 不连续的存在",
    url: "src/images/Recommend/2.webp"
  },
  {
    name: "樱花萌放",
    url: "src/images/Recommend/3.webp"
  },
  {
    name: "甜蜜女友2+",
    url: "src/images/Recommend/4.webp"
  },
  {
    name: "樱之诗",
    url: "src/images/Recommend/5.webp"
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
  margin: 0 6.25rem 0 6.25rem;
}

.box {
  display: grid;
  margin-top: 1.5625rem;
  grid-template-rows: 1fr;
  column-gap: 1.5625rem;
  grid-template-columns: repeat(5, 1fr);
}

.box-item {
  display: flex;
  flex-direction: column;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  object-fit: cover;
}

.name {
  margin-top: 0.625rem;
  font-size: 1rem;
  color: #f0767e;
  font-weight: 600;
  align-self: center;
}
</style>
