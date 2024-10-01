<script setup lang="ts">
import TitleComponent from '@/components/TitleComponent.vue';

const carouselItems = [
  {
    id: 1,
    url: 'src/images/Carouse/1.webp',
  },
  {
    id: 2,
    url: 'src/images/Carouse/2.webp',
  },
  {
    id: 3,
    url: 'src/images/Carouse/3.webp',
  },
  {
    id: 4,
    url: 'src/images/Carouse/4.jpg',
  }
]
</script>

<template>
  <div class="carousel">
    <TitleComponent style="margin-left: 3.125rem;">
      <template v-slot="title">
        新作预览
      </template>
    </TitleComponent>
    <el-carousel :interval="4000" type="card" height="18.75rem" style="margin-top: 1.25rem;"
      indicator-position="outside">
      <el-carousel-item v-for="item in carouselItems" class="carousel-item" :key="item.id">
        <img :src="item.url" alt="carousel">
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<style lang="less" scoped>
.carousel {
  margin: 3.125rem 3.125rem 0 3.125rem;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
</style>
