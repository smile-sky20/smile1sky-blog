import { getToken } from "./system";

interface ApiOptions {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  headers?: Record<string, string>;
}

// 定义基础 URL（可以根据环境变量动态设置）
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3220/api';

// 创建一个通用的 fetch 封装函数
async function request(options: ApiOptions) {
  const method = options.method.toUpperCase() || 'GET'
  options.url = formatteUrl(options.url, method, options.data)
  const url = BASE_URL + options.url;

  // token
  options.headers = { ...options.headers, Authorization: `Bearer ${getToken()}` }

  try {
    // 合并默认选项和用户传入的选项
    const response = await fetch(url, {
      method: method,
      body: method === 'POST' || method === 'PUT' ? JSON.stringify(options.data) : undefined,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    // 检查响应状态码
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    // 返回解析后的 JSON 数据
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// 处理GET请求
const formatteUrl = (url: string, method: string, data: any) => {
  if (['GET', 'DELETE'].includes(method)) {
    const queryString = new URLSearchParams(data).toString();
    return `${url}${queryString ? `?${queryString}` : ''}`;
  } else {
    return url;
  }
}

export default request;