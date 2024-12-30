'use client'
import { siYuan } from '@/assets/font'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import useThemeStore from '@/utils/useThemeStore'

import Loading from '@/components/Loading'
import { Suspense } from 'react'

export default function ExampleClientComponent({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = useThemeStore()
  return (
    <html lang="zh" className={`${theme.activeTheme}`}>
      <body
        className={`flex flex-col justify-between ${siYuan.variable} `}
      >
        <Suspense fallback={<Loading />}>
          <Header />
          <div className="min-h-[80vh]">{children}</div>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
