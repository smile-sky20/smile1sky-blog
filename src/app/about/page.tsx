'use client'
import Link from 'next/link'
import styles from './index.module.css'
import ArrowLeft from '@/ui/svg/arrowLeft'
import { useRouter } from 'next/navigation'

export default function About() {
  const router = useRouter()

  const handleClick = () => {
    router.push('https://www.mi.com/')
  }

  return (
    <div className="my-12 mx-auto max-w-[1080px]">
      <div className="content-wrapper flex flex-col items-center">
        <Link className="black w-16 flex items-center text-center" href={'/'}>
          <ArrowLeft></ArrowLeft>
          <span className="ml-2">Back</span>
        </Link>

        <div className="content-warrpe mt-12">
          <div className="content-box grid  border border-accents2 *:border-b *:border-accents2 last:border-b-0">
            <section
              className={`${styles.topBox} grid-cols-12 grid-rows-4 max-md:grid-cols-8  text-accents4`}
            >
              <div className="row-[2/4] col-[2/12] max-md:col-[2/8]">
                <div className="grid h-full place-items-center text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl transition-all duration-200 text-accents7 font-bold selection:text-red-200">
                  About The Smile &frac12; Sky 丶
                </div>
              </div>
            </section>

            <section className="grid grid-cols-3">
              <div className="p-12 max-md:p-8 px-8 col-[1/4] grid grid-cols-3 grid-rows-2">
                <div className="col-[1/4] text-xl">
                  “ 永远相信美好的事情即将发生！ ”
                </div>

                <div className="flex items-center justify-end row-[2/3] col-[2/4]">
                  <div className="mr-4">
                    <div className="text-accents8">雷军 · 2022, 小米CEO</div>
                    <div className="flex justify-end">
                      <div className="w-8 h-8 bg-accents8 rounded-xl text-accents1 text-center leading-[2rem] font-bold tracking-[1px]  select-none">
                        MI
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-12 h-12 flex justify-center items-center shrink-0 bg-background hover:bg-accents2 transition-all border rounded-full rotate-180 cursor-pointer"
                    onClick={handleClick}
                  >
                    <ArrowLeft className="w-6 h-6 text-accents5 hover:text-accents7"></ArrowLeft>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-44 max-md:py-24 text-center">
              <div className="text-4xl max-lg:text-3xl max-md:text-2xl font-semibold">
                Introduce
              </div>
            </section>

            <section className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 *:border-r last:border-r-0 max-md:*:border-r-0 *:border-accents2 *:p-12 max-md:*:p-8">
              <div className="">
                <div className="text-xl max-lg:text-3xl max-md:text-2xl font-semibold text-accents8">
                  100KM runner
                </div>
                <div className="mt-4 text-base text-accents5">
                  Always running in the background, never stop.
                </div>
              </div>
              <div className="border-r-0">
                <div className="text-xl font-semibold text-accents8">
                  Jpaniese learner
                </div>
                <div className="mt-4 text-accents5">
                  Learning Japanese is my passion.
                </div>
              </div>
              <div className="border-r-0">
                <div className="text-xl font-semibold text-accents8">
                  cooker
                </div>
                <div className="mt-4 text-accents5">Study cooking.</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
