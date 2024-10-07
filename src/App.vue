<script setup lang="ts">
import { onMounted } from 'vue';
import { useWindowStore } from './stores';

const windowStore = useWindowStore();
const updateScreenWidth = () => {
  windowStore.setWindowSize(window.innerWidth)
}
window.addEventListener('resize', updateScreenWidth);

onMounted(() => {
  updateScreenWidth();
})
</script>

<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<style scoped>
.app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
