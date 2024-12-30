/**
 *
 * @param url
 * @param init
 * @returns
 *
 * @description cache: 'no-store',
 * 默认值"force-cache"：此请求应该被缓存，直到手动失效。
 * 'no-store'：此请求应该在每次请求时重新获取。
 * 设置资源的缓存生命周期 (以秒为单位)。
 * revalidate: false(无限期缓存资源) | 0(防止资源被缓存。) | number((以秒为单位) 指定资源应该有最多 n 秒的缓存生命周期。)
 * 1、如果同一路由中两个具有相同 URL 的 fetch 请求有不同的 revalidate 值，将使用较低的值。
 * 2、为方便起见，如果设置了 revalidate 为数字，就不需要设置 cache 选项。
 * 3、诸如 { revalidate: 3600, cache: 'no-store' } 这样的冲突选项将导致错误。
 */

export async function GET(url: string, init?: RequestInit) {
  const res = await fetch(url, {
    method: 'GET',
    ...init,
  })
  if (!res.ok) {
    // 如果请求失败，抛出错误
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export async function POST(url: string) {
  const res = await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    next: { revalidate: 3600 },
  })
  return res.json()
}

export async function PUT(url: string) {
  const res = await fetch(url, {
    method: 'PUT',
    cache: 'no-cache',
    next: { revalidate: 3600 },
  })
  return res.json()
}

export async function DELETE(url: string) {
  const res = await fetch(url, {
    method: 'DELETE',
    cache: 'no-cache',
    next: { revalidate: 3600 },
  })
  return res.json()
}

export default { GET, POST, PUT, DELETE }
