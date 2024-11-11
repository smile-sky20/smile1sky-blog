'use client'
import { geistSans, geistMono, inter } from '@/ui/font'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'
import useThemeStore from '@/utils/useThemeStore'
export default function ExampleClientComponent({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = useThemeStore()
  return (
    <html lang="zh" className={`${theme.activeTheme}`}>
      <body
        className={`flex flex-col justify-between ${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <Header />
        <div className="min-h-[450px]">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
