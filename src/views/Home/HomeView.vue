<script setup lang="ts">
import HomeCarousel from './Components/HomeCarousel.vue';
</script>

<template>
  <div class="home">
    <div class="carousel">
      <HomeCarousel />
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 450px 1fr 1fr;
}
</style>
