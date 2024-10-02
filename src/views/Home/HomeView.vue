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
    <div class="homeRecommend space">
      <HomeRecommend />
    </div>
    <div class="homeBody space">
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
  grid-template-rows: 25rem auto auto;
}

.space {
  margin: 0 10rem;
}

@media (max-width: 1200px) {
  .space {
    margin: 0 8rem;
  }
}

@media (max-width: 900px) {
  .space {
    margin: 0 6rem;
  }
}

@media (max-width: 768px) {
  .space {
    margin: 0 4rem;
  }
}



@media (max-width: 600px) {
  .space {
    margin: 0 2rem;
  }
}

@media (max-width: 400px) {
  .space {
    margin: 0 1rem;
  }
}
</style>
