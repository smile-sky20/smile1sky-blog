'use client'

import Link from 'next/link'

export default function About() {
  const num = Math.floor(Math.random() * 5)

  const arrList = [
    '/about/a',
    '/about/a/b',
    '/about/a/b/c',
    '/about/a/b/c/d',
    '/about/a/b/c/d/e',
  ]
  return (
    <>
      <div className="text-3xl">About页面</div>

      <Link className="block btn-style w-96" href={arrList[num]}>
        点击我跳转[...slug]特性的页面
      </Link>
    </>
  )
}
