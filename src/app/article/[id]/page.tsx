import { notFound } from 'next/navigation'
import Image from 'next/image'
import { GET } from '@/app/api/route'

async function fetchUser(id: string) {
  // 如果路由是 /posts/1，那么 params.id 就是 1
  const post = await GET(`http://47.115.231.249/API/aiqing/api.php?type=json`, {
    next: { revalidate: 3600 },
  })

  // 获取拼音
  const pinyin = await GET(
    `http://47.115.231.249/API/pinyin/api.php?msg=${post.text}`,
    { next: { revalidate: 3600 } }
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

export default async function Article(props: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ title: string }>
}) {
  const searchParams = await props.searchParams
  const params = await props.params
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
          {title}
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
