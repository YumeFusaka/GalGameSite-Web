<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useWindowStore } from './stores'

const windowStore = useWindowStore()

// resize 高频触发，防抖 100ms 避免频繁更新响应式状态
let resizeTimer: ReturnType<typeof setTimeout> | null = null
const updateScreenWidth = () => {
  if (resizeTimer) clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    windowStore.setWindowSize(window.innerWidth)
  }, 100)
}
window.addEventListener('resize', updateScreenWidth)

onMounted(() => {
  updateScreenWidth()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth)
  if (resizeTimer) clearTimeout(resizeTimer)
})
</script>

<template>
  <RouterView class="app" />
</template>

<style scoped>
.app {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
