<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useWindowStore, useRouterStore } from './stores';
import { useRouter } from 'vue-router';
import Live2d from '@/components/Live2d.vue';

const router = useRouter();
const windowStore = useWindowStore();
const routerStore = useRouterStore();
const updateScreenWidth = () => {
  windowStore.setWindowSize(window.innerWidth)
}
window.addEventListener('resize', updateScreenWidth);

watch(() => router.currentRoute.value.path, (newPath, oldPath) => {
  routerStore.setRouter(newPath.split('/')[1]);
});

onMounted(() => {
  routerStore.setRouter(router.currentRoute.value.path.split('/')[1]);
  updateScreenWidth();
})
</script>

<template>
  <Live2d />
  <RouterView class="app" />
</template>

<style scoped>
.app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
