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
    <div className={`${siYuan.className} ${styles.back} min-h-[80vh] text-2xl py-12 max-lg:px-6`}>
      <div
        className={`card-warp-border p-1 flex justify-center items-center border border-accents3`}
      >
        <div
          className={`card-warp ${styles.cardBg} max-sm:px-4 max-md:px-6 max-lg:px-8 lg:px-12 py-6 bg-background border border-accents3 shadow-2xl shadow-accents4`}
        >
          <div className="card-box mt-12 flex justify-center items-center transition-all duration-500">
            <div className="card-left mx-24 max-md:mx-20 flex flex-col max-md:items-center">
              <div className="text-base">My Name is</div>
              <div
                className={`mt-4 text-5xl max-lg:text-4xl max-md:text-3xl font-bold underline decoration-sky-300 transition-all duration-200`}
              >
                Smile &frac12; sky.
              </div>
              <div className="mt-6 text-base text-accents6">
                A Front-End Developer
              </div>
              <div className="mt-2 text-sm text-accents5">
                A Runner && A Language student
              </div>

              <div className="icon-boxs mt-4 flex relative">
                {infoList.map((item) => (
                  <div
                    key={item.id}
                    className="mr-2 size-8 border border-accents4 rounded-md cursor-pointer"
                    title={item.type}
                    onClick={() => copyToClipboard(item.title, item.type)}
                  >
                    <Image
                      src={'/blog' + item.img}
                      alt={`${item.type} logo`}
                      width={32}
                      height={32}
                    />
                  </div>
                ))}

                {/* 复制成功提示 */}
                {copiedItem && (
                  <div className="absolute -top-8 left-0 bg-black text-white text-sm py-1 px-2 rounded whitespace-nowrap">
                    已复制{copiedItem}号
                  </div>
                )}
              </div>

              <button className="py-1 px-[12px] mt-8 w-40 border border-accents6 bg-foreground text-accents1 text-sm font-semibold">
                Learn
              </button>
            </div>

            <div className="card-right flex-1 flex max-sm:hidden justify-center items-center">
              <Image
                src="/blog.png"
                alt="Next.js logo"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}