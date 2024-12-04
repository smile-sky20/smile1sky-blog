import { notFound } from 'next/navigation'
import Image from 'next/image'
export async function fetchData(
  input: string | URL | globalThis.Request,
  init?: RequestInit
) {
  const res = await fetch(input, init)
  if (!res.ok) {
    // 如果请求失败，抛出错误
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function fetchUser(id: string) {
  // 如果路由是 /posts/1，那么 params.id 就是 1
  const post = await fetchData(
    `http://47.115.231.249/API/aiqing/api.php?type=json`,
    {
      method: 'get',
      // 默认值"force-cache"，此请求应该被缓存，直到手动失效。

      // 'no-store',此请求应该在每次请求时重新获取。
      // cache: 'no-store',

      // 设置资源的缓存生命周期 (以秒为单位)。
      // revalidate: false(无限期缓存资源) | 0(防止资源被缓存。) | number((以秒为单位) 指定资源应该有最多 n 秒的缓存生命周期。)
      // 1、如果同一路由中两个具有相同 URL 的 fetch 请求有不同的 revalidate 值，将使用较低的值。
      // 2、为方便起见，如果设置了 revalidate 为数字，就不需要设置 cache 选项。
      // 3、诸如 { revalidate: 3600, cache: 'no-store' } 这样的冲突选项将导致错误。
      next: { revalidate: 3600 },
    }
  )

  // 获取拼音
  const pinyin = await fetchData(
    `http://47.115.231.249/API/pinyin/api.php?msg=${post.text}`,
    { method: 'get', next: { revalidate: 3600 } }
  )

  // 将post.text字符串转换为数组，将拼音转为数组，然后将每个字对应每个拼音
  const textArray: string[] = post.text.split('')
  const pinyinArray: string[] = pinyin.data
  const result = textArray.map(
    (item: any, index: number): { text: string; pinyin: string } => {
      return {
        text: item,
        pinyin: pinyinArray[index],
      }
    }
  )

  // 通过 props 参数向页面传递博文的数据
  return result
}

export default async function Article(
  props: {
    params: Promise<{ id: string }>
    searchParams: Promise<{ title: string }>
  }
) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const post = await fetchUser(params.id)
  const title = searchParams.title

  if (!post) {
    notFound()
  }

  return (
    <div className={`mx-auto px-4 py-10 max-sm:py-6`}>
      <div className="article-warrper max-w-[860px] mx-auto">
        <div className="time text-accents4 text-sm">
          Thursday, October 24th 2024
        </div>
        <div className="title mt-6 mb-12 max-lg:mb-8 max-sm:mb-6 text-5xl  max-lg:text-4xl max-sm:text-2xl transition-all duration-300 font-semibold">
          { title }
        </div>

        <div className="author text-accents4">Posted by</div>

        <div className="mt-2 pb-4 flex items-center gap-x-2 border-b border-accents5">
          <div className="avatar overflow-hidden rounded-full">
            <Image
              src="/blog.png"
              alt="avatar"
              className="rounded-full"
              width={30}
              height={30}
              priority={true}
            />
          </div>
          <div>
            <div className="author-name text-sm font-semibold text-accents7">
              John Doe
            </div>
            <div className="author-desc mt-1 text-xs text-accents4">
              @John Doe
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-2 text-center text-accents7">
          {post.map((item, index) => (
            <div key={index}>
              <h1 className="text-sm max-md:text-xs font-bold selection:text-red-200 dark:selection:text-accents4">
                {item.pinyin}
              </h1>
              <h1 className="text-2xl max-md:text-xl font-bold mb-1 selection:text-red-200 dark:selection:text-accents4">
                {item.text}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
