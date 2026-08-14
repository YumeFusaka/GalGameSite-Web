import { useUserStore } from '@/stores'
import axios from 'axios'
import router from '@/router'
import { ElMessage } from 'element-plus'
import type { ApiResponse } from '@/types/common/api'

// const baseURL = 'https://galApi.yumefusaka.com'

const baseURL = 'http://localhost:8080'

const instance = axios.create({
  baseURL,
  timeout: 100000
})

instance.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = 'bearer ' + userStore.token
    }
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 200) {
      return res.data
    }
    ElMessage({ message: res.data.msg || '服务异常', type: 'error' })
    return Promise.reject(res.data)
  },
  (err) => {
    // 401 静默跳转登录页，避免未登录时每个页面都弹"请先登录"错误提示
    if (err.response?.status === 401) {
      router.push('/login')
      return Promise.reject(err)
    }
    ElMessage({
      message: err.response?.data?.data || err.message || '服务异常',
      type: 'error'
    })
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }

export const unwrap = async <T>(
  promise: Promise<ApiResponse<T>>
): Promise<T> => {
  const response = await promise
  return response.data
}
