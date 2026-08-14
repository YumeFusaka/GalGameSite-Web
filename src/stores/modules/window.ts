// src/stores/modules/window.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 窗口宽度由 App.vue 监听 resize 写入；不持久化（原先每次 resize 都写 localStorage）
export const useWindowStore = defineStore('window', () => {
  const windowSize = ref<number>(0)

  return {
    windowSize,
    setWindowSize: (val: number) => {
      windowSize.value = val
    }
  }
})
