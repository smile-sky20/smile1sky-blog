'use client'
import Link from 'next/link'
import styles from './index.module.css'
import { usePathname } from 'next/navigation'
import { siYuan } from '@/assets/font'

export const linksArr = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog', svg: true },
  { name: 'Article', url: '/article', svg: true },
  { name: 'About', url: '/about' },
]
export default function Links() {
  const path = usePathname()
  const selectedIndex = linksArr.findIndex((item) => item.url.includes(path))

  return (
    <div className={`max-sm:hidden sm:flex lg:flex ${siYuan.className}`}>
      {linksArr.map((link, index) => (
        <div className={`relative`} key={link.name}>
          <Link
            href={link.url}
            className={`mr-8 h-16 flex items-center text-lg text-accents7 hover:text-accents8 transition-colors   
              ${
                selectedIndex === index
                  ? 'text-blue-500 hover:text-blue-500'
                  : ''
              } `}
          >
            {link.name}
          </Link>
          {link.svg && (
            <svg
              aria-hidden="true"
              className={styles.svgClass}
              height="7"
              viewBox="0 0 6 6"
              width="7"
            >
              <path
                d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                fill="#999"
              ></path>
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}
