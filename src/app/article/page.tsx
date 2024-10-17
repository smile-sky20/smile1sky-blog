import Link from 'next/link'

export default function Article() {
  return (
    <>
      <h1>这是文章主页</h1>
      <Link href={'/article/1'} className='w-4 h-4 bg-sky-200'>id：1</Link>
    </>
  )
}
