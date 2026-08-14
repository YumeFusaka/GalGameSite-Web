<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import LayoutHeader from './Components/LayoutHeader.vue'

// 列表类页面用纯色背景，其余页面显示全屏背景图
const plainBackgroundRoutes = ['user-list', 'activity-list', 'decision-list']

const isShowBackground = computed(
  () => !plainBackgroundRoutes.includes(useRoute().path.split('/')[1])
)
</script>

<template>
  <div class="layout" :class="{ background: isShowBackground }">
    <LayoutHeader class="header" />
    <RouterView class="body" />
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
  /* 放大以掩盖 blur 后的边缘透明 */
  inset: -2rem;
  background-image: url('@/images/background.webp');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  /* 背景图一次性模糊（GPU 纹理缓存，滚动不重算），
     替代各组件的 backdrop-filter 逐帧模糊，消除滚动卡顿 */
  filter: blur(12px);
  z-index: -1;
}
</style>
