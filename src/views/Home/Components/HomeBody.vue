<script setup lang="ts">
import BodyActivity from './BodyActivity.vue';
import BodyInfo from './BodyInfo.vue';
</script>

<template>
  <div class="body">
    <div class="bodyActivity">
      <BodyActivity />
    </div>
    <div class="bodyInfo">
      <BodyInfo />
    </div>
  </div>
</template>

<style scoped>
.body {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 2fr;
  column-gap: 1.25rem;
}

.bodyActivity {
  grid-column: 1;
  grid-row: 1/3;
  border-radius: 0.625rem;
}
</style>
