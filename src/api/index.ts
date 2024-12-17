// 封装axios
import axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'
import { getRefreshToken } from '@/utils/auth'
import router from '@/router'
import { refreshToken } from '@/api/user'
import { useUserStore } from '@/store/user'
const baseURL = import.meta.env.VITE_BASE_API
const service = axios.create({
  baseURL,
  timeout: 5000,
})
service.interceptors.request.use(
  (config: any) => {
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  (response: any) => {
    return response
  },
  async (error: { config: any; response: { status: number } }) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const userStore = useUserStore()
      const refreshTokenStr = getRefreshToken()
      if (refreshTokenStr) {
        try {
          const res = await refreshToken(refreshTokenStr)
          userStore.setToken(res.data.accessToken)
          return service(originalRequest)
        } catch (error) {
          Message.error('登录过期，请重新登录')
          router.push('/login')
        }
      }
    }
  }
)
