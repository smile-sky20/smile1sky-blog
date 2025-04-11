import Link from 'next/link'
import { inter } from '@/assets/font'
import { getArticleList } from '@/api/article'

interface ArticleProps {
  id: number
  title: string
  author: string
  content: string
  createTime: string
}
export default async function Article() {
  const { data } = await getArticleList({})
  const article = data.data

  return (
    <div className={`${inter.className}`}>
      <div className="title h-[450px] max-lg:h-80 max-md:h-64 max-sm:h-48 grid bg-accents2 text-5xl max-lg:text-4xl max-sm:text-2xl font-bold" style={{backgroundImage: 'url(/article/article-bg.jpg)',backgroundSize: '100%'}}>
        <div className="place-self-center">Study Record</div>
      </div>
      <div className="article-item-box my-12 mx-auto w-[960px] grid gap-y-8 transition-all max-lg:w-[720px] max-md:w-[540px] max-sm:w-full">
        {article.map((article: ArticleProps) => {
          return (
            <div
              key={article.id}
              className="article-item p-4 pb-2 border-b border-accents2"
            >
              <Link
                href={`/article/${article.id}?title=${article.title}`}
                className="article-title text-2xl text-blue-500 hover:text-accents7 transition-all  font-bold"
              >
                {article.title}
              </Link>

              <div className="article-content flex text-accents7 text-sm mt-4 gap-x-4">
                <div className="author">@{article.author}</div>
                <div className="time">{article.createTime}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
