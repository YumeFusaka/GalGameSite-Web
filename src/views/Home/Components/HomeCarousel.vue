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
      <el-carousel-item v-for="item in carouselItems" class="carousel-item" :key="item.id"
        :style="{ backgroundImage: `url(${item.url})` }">
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<style lang="less" scoped>
.carousel {
  margin: 3.125rem 3.125rem 0 3.125rem;
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
