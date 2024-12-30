'use client'
import Image from 'next/image'
import { siYuan } from '@/assets/font'

import styles from './index.module.css'

export default function Blog() {
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

              <div className="icon-boxs mt-4 flex">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="mr-2 size-8 border border-accents4 rounded-md"
                  ></div>
                ))}
              </div>

              <button className="py-1 px-[12px] mt-8 w-40 border  border-accents6 bg-foreground text-accents1 text-sm font-semibold">
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
