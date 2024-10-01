<script setup lang="ts">
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
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in carouselItems" class="carousel-item" :key="item.id">
        <img :src="item.url" alt="carousel">
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<style scoped>
.carousel {
  margin-top: 25px;
  margin-left: 50px;
  margin-right: 50px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
