<script setup lang="ts">
import HomeActivity from './HomeActivity.vue';
</script>

<template>
  <div class="body">
    <div class="activity">
      <HomeActivity />
    </div>

  </div>

</template>

<style scoped>
.body {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1.25rem;
}

.activity {
  grid-column: 1;
  grid-row: 1/3;
  border-radius: 0.625rem;
}
</style>
