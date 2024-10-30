import Link from 'next/link'
import { inter } from '@/ui/font'

const articleList = [
  {
    id: 1,
    title: 'NextJs 13',
    content:
      'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
    author: 'John Doe',
    date: '2023-01-01',
  },
  {
    id: 2,
    title: 'NextJs 14',
    content:
      'NextJs 14 is the latest version of NextJslorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
  },
]
export default function Article() {
  return (
    <div className={`${inter.className}`}>
      <div className="title h-64 max-lg:h-56 max-md:h-48 max-sm:h-40 grid bg-accents2 text-5xl max-lg:text-4xl max-sm:text-2xl font-bold">
        <div className="place-self-center">The Latest NextJs News</div>
      </div>
      <div className="article-item-box m-12 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-24">
        {articleList.map((article) => {
          return (
            <div
              key={article.id}
              className="article-item p-4 pb-2 border border-accents2 rounded-2xl"
            >
              <Link
                href={`/article/${article.id}`}
                className="article-title text-xl text-blue-500 hover:text-accents7 font-bold"
              >
                {article.title}
              </Link>
              <div className="article-content mt-4 text-accents5">
                {article.content}
              </div>

              <Link
                href={`/article/${article.id}`}
                className="block mt-4 py-2 bg-accents2 rounded-md text-accents5 hover:text-accents7 text-center cursor-pointer"
              >
                Read More
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
