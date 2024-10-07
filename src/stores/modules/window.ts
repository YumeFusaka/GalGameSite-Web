// src/stores/modules/client.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useWindowStore = defineStore(
  'window',
  () => {
    const windowSize = ref<number>(0)
    const setWindowSize = (val: number) => {
      windowSize.value = val
    }
    const clearWindowSize = () => {
      windowSize.value = 0
    }
    return {
      windowSize,
      setWindowSize,
      clearWindowSize
    }
  },
  {
    persist: true
  },
)