<script setup lang="ts">
import HomeBody from './Components/HomeBody.vue';
import HomeCarousel from './Components/HomeCarousel.vue';
import HomeRecommend from './Components/HomeRecommend.vue';
</script>

<template>
  <div class="home">
    <div class="homeCarousel">
      <HomeCarousel />
    </div>
    <div class="homeRecommend">
      <HomeRecommend />
    </div>
    <div class="homeBody">
      <HomeBody />
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  display: grid;
  row-gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: 28.125rem auto auto;
}

.homeBody {
  margin: 0 5rem;
}
</style>
