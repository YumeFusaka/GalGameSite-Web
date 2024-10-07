// src/stores/modules/client.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref<string>('')
    const setToken = (val: string) => {
      token.value = val
    }
    const clearToken = () => {
      token.value = ''
    }
    return {
      token,
      setToken,
      clearToken
    }
  },
  {
    persist: true
  },
)