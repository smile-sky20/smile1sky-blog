'use client'
import { siYuan } from '@/assets/font'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import useThemeStore from '@/store/useThemeStore'

import Loading from '@/components/Loading'
import { Suspense, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ExampleClientComponent({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = useThemeStore()
  const pathname = usePathname()

  // 路由跳转时滚动到页面顶部
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <html lang="zh" className={`${theme.activeTheme}`}>
      <body
        className={`flex flex-col justify-between ${siYuan.variable} `}
      >
        <Suspense fallback={<Loading />}>
          <Header />
          <div>{children}</div>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
