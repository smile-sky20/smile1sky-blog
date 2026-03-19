'use client'
import Image from 'next/image'
import { siYuan } from '@/assets/font'
import { useState } from 'react'

import styles from './index.module.css'

const infoList = [
  { id: 1, title: '1916806218', type: 'QQ', img: '/qq.png' },
  { id: 2, title: 'g1916806218', type: 'WX', img: '/wx.png' },
  { id: 3, title: 'https://github.com/smile-sky20', type: 'github', img: '/github.png' },
  { id: 4, title: 'https://gitee.com/smile1sky', type: 'gitee', img: '/gitee.png' },
]

export default function Blog() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const copyToClipboard = async (title: string, type: string) => {
    if (['github', 'gitee'].includes(type)) {
      window.open(title, '_blank')
      return
    }
    try {
      await navigator.clipboard.writeText(title)
      setCopiedItem(type)

      // 3秒后清除提示
      setTimeout(() => {
        setCopiedItem(null)
      }, 1000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  return (
    <div className={`${siYuan.className} ${styles.back} min-h-[80vh] text-2xl py-16 max-lg:px-6`}>
      <div
        className={`card-warp max-w-5xl w-full ${styles.cardBg} px-8 md:px-12 lg:px-16 py-12 bg-transparent`}
      >
        <div className="card-box flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 transition-all duration-500">
          <div className="card-left flex flex-col items-center md:items-start">
            <div className="text-sm text-accents5 tracking-wide">My Name is</div>
            <div
              className={`mt-3 text-5xl max-lg:text-4xl max-md:text-3xl font-semibold text-accents8 transition-all duration-200`}
            >
              Smile &frac12; sky.
            </div>
            <div className="mt-6 text-base text-accents6">
              A Front-End Developer
            </div>
            <div className="mt-2 text-sm text-accents5">
              A Runner &nbsp;•&nbsp; A Language student
            </div>

            <div className="icon-boxs mt-6 flex relative">
              {infoList.map((item) => (
                <div
                  key={item.id}
                  className="mr-3 size-9 rounded-md cursor-pointer hover:opacity-70 transition-opacity bg-white dark:bg-white p-[1px]"
                  title={item.type}
                  onClick={() => copyToClipboard(item.title, item.type)}
                >
                  <Image
                    src={'/blog' + item.img}
                    alt={`${item.type} logo`}
                    width={36}
                    height={36}
                    className="rounded-md"
                  />
                </div>
              ))}

              {/* 复制成功提示 */}
              {copiedItem && (
                <div className="absolute -top-8 left-0 bg-accents8 text-accents1 text-sm py-1 px-2 rounded">
                  已复制{copiedItem}
                </div>
              )}
            </div>

            <button className="py-2 px-6 mt-8 w-fit border border-accents4 text-accents7 bg-transparent text-sm font-medium hover:bg-accents1 hover:border-accents5 transition-colors duration-200">
              Let&apos;s connect
            </button>
          </div>

          <div className="card-right flex-shrink-0 flex max-sm:mt-4 justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-mocha to-sky-200 rounded-full blur-md opacity-40 dark:opacity-20"></div>
              <Image
                src="/blog.png"
                alt="Avatar"
                width={260}
                height={260}
                className="relative rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}