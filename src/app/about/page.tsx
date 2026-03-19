'use client'
import { siYuan } from '@/assets/font'
import Link from 'next/link'
import styles from './index.module.css'
import ArrowLeft from '@/assets/svg/arrowLeft'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Hobby {
  id: string
  title: string
  subtitle: string
  description: string
  color: string
  textColor: string
}

const hobbies: Hobby[] = [
  {
    id: 'running',
    title: 'Running',
    subtitle: '300KM Runner',
    description: '永远在跑道上，永不停歇。跑步教会我的不只是耐力，更是直面自我的勇气。每一步都是新的开始，每一公里都算数。持续奔跑，遇见更好的自己。',
    color: 'bg-accents1 border border-accents2',
    textColor: 'text-accents8',
  },
  {
    id: 'japanese',
    title: 'Japanese',
    subtitle: 'Language Learner',
    description: '日语学习是一场持久战，每天积累一点，终能水滴石穿。热爱不同文化，也享受语言学习带来的新视角。正在努力中...',
    color: 'bg-accents1 border border-accents2',
    textColor: 'text-accents8',
  },
  {
    id: 'cooking',
    title: 'Cooking',
    subtitle: 'Food Lover',
    description: '研究料理，热爱生活。亲手制作美食，是对生活最好的馈赠。享受从食材到美味的奇妙转变，认真吃饭，认真生活。',
    color: 'bg-accents1 border border-accents2',
    textColor: 'text-accents8',
  },
  {
    id: 'coding',
    title: 'Coding',
    subtitle: 'Front-end Developer',
    description: '热爱技术，喜欢创造。用代码改变世界，把想法变成可交互产品。不断学习新技术，永远走在进阶的路上。',
    color: 'bg-accents1 border border-accents2',
    textColor: 'text-accents8',
  },
]

export default function About() {
  const router = useRouter()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = hobbies.find(h => h.id === selectedId)

  const handleClick = () => {
    router.push('https://www.mi.com/')
  }

  return (
    <div className={`${siYuan.className} py-12 mx-auto max-w-[1080px] px-6`}>
      <div className="content-wrapper flex flex-col items-center">
        <Link className="flex items-center text-accents6 hover:text-accents8 transition-colors" href={'/'}>
          <ArrowLeft></ArrowLeft>
          <span className="ml-2 text-sm font-medium">Back</span>
        </Link>

        <div className="content-wrapper mt-12 w-full">
          <div className="content-box w-full">
            {/* 标题区 - 保留网格背景特色 */}
            <section
              className={`${styles.topBox} grid-cols-12 grid-rows-4 max-md:grid-cols-8 mb-8`}
            >
              <div className="row-[2/4] col-[2/12] max-md:col-[2/8]">
                <div className="grid h-full place-items-center text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl transition-all duration-200 text-accents7 font-semibold selection:text-red-200">
                  About Smile &frac12; Sky
                </div>
              </div>
            </section>

            {/* 引言区 */}
            <section className="mb-12">
              <div className="px-8 md:px-12 py-10 border border-accents2 rounded-lg bg-accents1/30">
                <div className="grid grid-cols-1 gap-6">
                  <blockquote className="text-xl text-accents7 italic">
                    “ 永远相信美好的事情即将发生！ ”
                  </blockquote>

                  <div className="flex items-center justify-end">
                    <div className="mr-4">
                      <div className="text-accents7 text-sm font-medium">雷军 · 小米CEO</div>
                    </div>
                    <div
                      className="w-12 h-12 flex justify-center items-center shrink-0 bg-background hover:bg-accents2 transition-all border border-accents3 rounded-full rotate-180 cursor-pointer"
                      onClick={handleClick}
                    >
                      <ArrowLeft className="w-6 h-6 text-accents5 hover:text-accents7"></ArrowLeft>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 自我介绍标题 */}
            <div className="text-center mb-10">
              <div className="inline-block">
                <div className="w-12 h-px bg-accents3 mx-auto mb-3"></div>
                <h2 className="text-2xl font-medium text-accents7 tracking-wide">Introduce</h2>
                <p className="mt-2 text-accents5 text-sm">点击卡片查看详情</p>
                <div className="w-12 h-px bg-accents3 mx-auto mt-3"></div>
              </div>
            </div>

            {/* 可交互动画爱好卡片 */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.id}
                  layoutId={`card-${hobby.id}`}
                  onClick={() => setSelectedId(hobby.id)}
                  className={`cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${hobby.color}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    layoutId={`inner-${hobby.id}`}
                    className="p-6 h-24 md:h-28 flex flex-col justify-end"
                  >
                    <motion.h3
                      layoutId={`title-${hobby.id}`}
                      className={`text-2xl font-bold ${hobby.textColor}`}
                    >
                      {hobby.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`subtitle-${hobby.id}`}
                      className={`text-sm opacity-80 ${hobby.textColor}`}
                    >
                      {hobby.subtitle}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* 展开详情弹窗 */}
            <AnimatePresence>
              {selectedId && selected && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setSelectedId(null)}
                  />
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                    <motion.div
                      layoutId={`card-${selectedId}`}
                      className={`w-full max-w-xl rounded-xl overflow-hidden ${selected.color}`}
                    >
                      <motion.div
                        layoutId={`inner-${selectedId}`}
                        className="p-8"
                      >
                        <motion.h3
                          layoutId={`title-${selectedId}`}
                          className={`text-3xl font-bold ${selected.textColor}`}
                        >
                          {selected.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`subtitle-${selectedId}`}
                          className={`text-sm opacity-80 ${selected.textColor} mt-1`}
                        >
                          {selected.subtitle}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="mt-6"
                        >
                          <p className={`${selected.textColor} text-base leading-relaxed opacity-90`}>
                            {selected.description}
                          </p>
                          <button
                            onClick={() => setSelectedId(null)}
                            className={`mt-6 px-5 py-2 rounded-full border ${selected.textColor} border-current opacity-70 hover:opacity-100 transition-opacity text-sm font-medium`}
                          >
                            Close
                          </button>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
