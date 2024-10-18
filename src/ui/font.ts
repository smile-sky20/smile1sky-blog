import { Inter, Lusitana } from 'next/font/google'
import localFont from 'next/font/local'

// 使用库数据

// 使用本地数据
export const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
export const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

// 文艺风
export const inter = Inter({ subsets: ['latin'] })

// 中世纪风
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
})
