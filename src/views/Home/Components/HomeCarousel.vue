<script setup lang="ts">
import w1 from '@/images/Carouse/1.webp'
import w2 from '@/images/Carouse/2.webp'
import w3 from '@/images/Carouse/3.webp'
import w4 from '@/images/Carouse/4.webp'
import { onMounted, ref } from 'vue';
import { useWindowStore } from '@/stores';

const windowStore = useWindowStore()
const carouselItems = [
  {
    id: 1,
    url: w1,
    link: 'https://mzh.moegirl.org.cn/%E9%81%A5%E3%81%8B%E3%81%AA%E3%82%8B%E3%83%8B%E3%83%A9%E3%82%A4%E3%82%AB%E3%83%8A%E3%82%A4'
  },
  {
    id: 2,
    url: w2,
    link: 'https://metalogiq.jp/'
  },
  {
    id: 3,
    url: w3,
    link: 'https://www.purplesoftware.jp/products/mg/'
  },
  {
    id: 4,
    url: w4,
    link: 'https://mzh.moegirl.org.cn/%E5%B0%91%E5%A5%B3%E4%B8%96%E7%95%8C%E7%9A%84%E7%94%9F%E5%AD%98%E4%B9%8B%E9%81%93'
  }
]

const openLink = (link: string, index: number) => {
  if (nowIndex.value + 1 === index)
    window.open(link, '_blank')
}

const nowIndex = ref<number>(0)

function handleChange(currentIndex: number, prevIndex: number) {
  nowIndex.value = currentIndex;
}
</script>

<template>
  <div class="carousel">
    <el-carousel :interval="4000" :type="windowStore.windowSize >= 768 ? `card` : ''" height="18.75rem"
      style="margin-top: 1.25rem;" indicator-position="outside" @change="handleChange">
      <el-carousel-item v-for="item in carouselItems" class="carousel-item" :key="item.id"
        :style="{ backgroundImage: `url(${item.url})` }" @click="openLink(item.link, item.id)">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="less" scoped>
.carousel {
  margin: 3.125rem 0 0 0;
}

:deep(.el-carousel__indicators--horizontal) {

  .el-carousel__indicator--horizontal button {
    width: 1rem;
    height: 1rem;
    background: #d00a66;
    border-radius: 50%;
    opacity: 0.5;
  }

  .el-carousel__indicator--horizontal.is-active button {
    width: 2rem;
    height: 1rem;
    background: #d00a66;
    opacity: 0.5;
    border-radius: 0.625rem;
  }
}

.el-carousel__item {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


.el-carousel__item.is-animating {
  transition: opacity .2s ease-in-out !important;
}
</style>
