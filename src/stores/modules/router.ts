// src/stores/modules/client.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useRouterStore = defineStore(
  'router',
  () => {
    const router = ref<string>()
    const setRouter = (val: string) => {
      router.value = val
    }
    const clearRouter = () => {
      router.value = ''
    }
    return {
      router,
      setRouter,
      clearRouter
    }
  },
  {
    persist: true
  },
)