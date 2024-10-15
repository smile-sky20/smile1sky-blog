'use client'

export default function Article(context: any) {
  const { req, query, res, asPath, pathname } = context
  const getInfo = () => {}
  return (
    <>
      <h1>这是文章详情</h1>
      <button onClick={getInfo}>点击我</button>
    </>
  )
}
