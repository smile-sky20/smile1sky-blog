import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getArticleDetail } from '@/api/article'

export default async function Article(props: {
  params: Promise<{ id: number }>
  searchParams: Promise<{ title: string }>
}) {
  const searchParams = await props.searchParams
  const params = await props.params
  const title = searchParams.title

  const { code, data } = await getArticleDetail(Number(params.id))

  if (code !== 200 || !data) {
    notFound()
  }

  return (
    <div className={`mx-auto px-4 py-10 max-sm:py-6`}>
      <div className="article-warrper max-w-[860px] mx-auto">
        <div className="time text-accents4 text-sm">{data.createTime}</div>
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
              priority
            />
          </div>
          <div>
            <div className="author-name text-sm font-semibold text-accents7">
              Smile1sky
            </div>
            <div className="author-desc mt-1 text-xs text-accents4">
              @Smile1sky
            </div>
          </div>
        </div>

        <div className="mt-8 gap-x-2 text-accents7">
          {data.content || '无内容'}
        </div>
      </div>
    </div>
  )
}
