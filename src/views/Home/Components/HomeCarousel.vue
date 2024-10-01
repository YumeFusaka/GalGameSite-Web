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
    <div class="title">
      <span class="logo"></span>
      <span class="title-text"> 新作预览 </span>
    </div>
    <el-carousel :interval="4000" type="card" height="300px" style="margin-top: 20px;">
      <el-carousel-item v-for="item in carouselItems" class="carousel-item" :key="item.id">
        <img :src="item.url" alt="carousel">
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<style scoped>
.carousel {
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  margin-left: 80px;
  display: flex;
}

.logo {
  display: inline-block;
  width: 10px;
  height: 38px;
  background-color: #81c2f3;
  border-radius: 2px;
}

.title-text {
  margin-left: 15px;
  font-size: 28px;
  font-weight: 600;
  color: #d00a66;

}
</style>
