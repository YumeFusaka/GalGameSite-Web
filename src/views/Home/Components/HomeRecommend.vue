<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue';
import w1 from '@/images/Recommend/1.webp'
import w2 from '@/images/Recommend/2.webp'
import w3 from '@/images/Recommend/3.webp'
import w4 from '@/images/Recommend/4.webp'
import w5 from '@/images/Recommend/5.webp'
import { useWindowStore } from '@/stores';
const windowStore = useWindowStore();
const recommondList = [
  {
    name: "白色相簿2",
    url: w1,
    link: 'https://bangumi.tv/subject/54898'
  },
  {
    name: "美好的每一天 不连续的存在",
    url: w2,
    link: 'https://bangumi.tv/subject/259061'
  },
  {
    name: "樱花萌放",
    url: w3,
    link: 'https://bangumi.tv/subject/233030'
  },
  {
    name: "甜蜜女友2+",
    url: w4,
    link: 'https://mzh.moegirl.org.cn/%E7%94%9C%E8%9C%9C%E5%A5%B3%E5%8F%8B2'
  },
  {
    name: "樱之诗",
    url: w5,
    link: 'https://mzh.moegirl.org.cn/%E6%A8%B1%E4%B9%8B%E8%AF%97'
  },
]

const openLink = (link: string) => {
  window.open(link, '_blank')
}

const showNumber = () => {
  if (windowStore.windowSize < 768) {
    return 4;
  }
  return recommondList.length;
}
</script>

<template>
  <div class="recommend">
    <TitleComponent style="">
      <template v-slot="title">
        佳作推荐
      </template>
    </TitleComponent>
    <div class="box">
      <div v-for="i in showNumber()" :key="i" class="box-item" @click="openLink(recommondList[i - 1].link)">
        <div class="box-item">
          <img :src="recommondList[i - 1].url">
          <div class="name">{{ recommondList[i - 1].name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recommend {
  padding: 1.5rem 1.25rem 1.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 0.625rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
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

@media (min-width: 1200px) {
  .box {
    grid-template-columns: repeat(5, 1fr);
  }
}

.box-item {
  display: flex;
  flex-direction: column;
}

.box-item:hover {
  cursor: pointer;
  transform: scale(1.03);
  transition: all 0.3s ease-in-out;
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
  font-weight: 500;
  align-self: center;
  text-align: center;
}
</style>
