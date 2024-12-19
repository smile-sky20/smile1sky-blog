// 封装fetch请求
const baseURL = process.env.NEXT_PUBLIC_API_URL || ''

interface RequestInit extends globalThis.RequestInit {
  token?: string
  params?: Record<string, string>
}

async function request(url: string, options: RequestInit = {}) {
  // 处理URL参数
  if (options.params) {
    const params = new URLSearchParams(options.params)
    url = `${url}?${params.toString()}`
  }

  // 合并请求头
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  try {
    const response = await fetch(`${baseURL}${url}`, {
      ...options,
      headers,
    })

    // 处理非2xx响应
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // 解析响应数据
    const data = await response.json()
    return data
  } catch (error) {
    console.error('请求出错:', error)
    throw error
  }
}

// 封装常用请求方法
export const fetchApi = {
  get: (url: string, options?: RequestInit) =>
    request(url, { ...options, method: 'GET' }),

  post: (url: string, body?: any, options?: RequestInit) =>
    request(url, { ...options, method: 'POST', body: JSON.stringify(body) }),

  put: (url: string, body?: any, options?: RequestInit) =>
    request(url, { ...options, method: 'PUT', body: JSON.stringify(body) }),

  delete: (url: string, options?: RequestInit) =>
    request(url, { ...options, method: 'DELETE' }),
}
