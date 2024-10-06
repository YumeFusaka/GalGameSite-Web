// src/stores/modules/client.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useClientStore = defineStore(
  'client',
  () => {
    const token = ref<string>('eyJhbGciOiJIUzI1NiJ9.eyJxcSI6IjEzMzY2Nzk5NzEiLCJleHAiOjIxNjAxOTYyNDZ9.3pOtR531lY4hq07ni6de0nnMj3Zf74zvNyJ90RB1Czo')
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