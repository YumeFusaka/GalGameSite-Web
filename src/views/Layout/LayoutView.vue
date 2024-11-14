<script setup lang="ts">
import LayoutHeader from './Components/LayoutHeader.vue';
import LayoutFooter from './Components/LayoutFooter.vue';
import { useRouterStore } from '@/stores';

const routerStore = useRouterStore();

const notShowBackgroudList = [
  'member-list',
  'activity-list',
  'decision-list'
]

const isShowBackground = () => {
  for (var i = 0; i < notShowBackgroudList.length; i++) {
    if (routerStore.router === notShowBackgroudList[i]) {
      return false;
    }
  }
  return true;
}
</script>

<template>
  <div class="layout" :class="{ 'background': isShowBackground() }">
    <LayoutHeader class="header" />
    <RouterView class="body" />
    <!-- <LayoutFooter /> -->
  </div>

</template>

<style scoped>
.layout {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
}


.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  z-index: 10;
}

.background::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/images/background.webp');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  /* filter: blur(12px);
  opacity: 0.8; */
  z-index: -1;
}
</style>
