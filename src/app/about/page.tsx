import Link from 'next/link'
import Image from 'next/image'
import styles from './index.module.css'
import ArrowLeft from '@/ui/svg/arrowLeft'

export default function About() {
  const num = Math.floor(Math.random() * 5)

  const arrList = [
    '/about/a',
    '/about/a/b',
    '/about/a/b/c',
    '/about/a/b/c/d',
    '/about/a/b/c/d/e',
  ]

  return (
    <div className="my-12 mx-auto max-w-[1080px]">
      <div className="content-wrapper flex flex-col items-center">
        <Link className="black w-16 flex items-center text-center" href={'/'}>
          <ArrowLeft></ArrowLeft>
          <span className="ml-2">Back</span>
        </Link>

        <div className="content-warrpe mt-12">
          <div className="content-box grid  border border-accents2">
            <section
              className={`${styles.topBox} grid-cols-12 grid-rows-4 max-md:grid-cols-8 border-b  border-accents2 text-accents4`}
            >
              <div className="row-[2/4] col-[2/12] max-md:col-[2/8]">
                <div className="grid h-full place-items-center text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl transition-all duration-200 text-accents7 font-bold selection:text-red-200">
                  About The Smile &frac12; Sky 丶
                </div>
              </div>
            </section>

            <section className="py-48 max-md:py-24 text-center border-b border-accents2">
              <div className="text-4xl max-lg:text-3xl max-md:text-2xl font-semibold">
                Introduce
              </div>
            </section>

            <section className="grid grid-cols-3 max-md:grid-cols-1 *:border-r max-md:*:border-r-0 *:border-accents2 *:p-12 max-md:*:p-8 border-b border-accents2 ">
              <div className="">
                <div className="text-xl max-lg:text-3xl max-md:text-2xl font-semibold text-accents8">
                  Infinite scalability, zero config.
                </div>
                <div className="mt-4 text-base text-accents5">
                  Enable code to run on-demand without needing to manage your
                  own infrastructure, provision servers, or upgrade hardware.
                </div>
              </div>
              <div className="border-r-0">
                <div className="text-xl font-semibold text-accents8">
                  Infinite scalability, zero config.
                </div>
                <div className="mt-4 text-accents5">
                  Enable code to run on-demand without needing to manage your
                  own infrastructure, provision servers, or upgrade hardware.
                </div>
              </div>
              <div className="border-r-0">
                <div className="text-xl font-semibold text-accents8">
                  Infinite scalability, zero config.
                </div>
                <div className="mt-4 text-accents5">
                  Enable code to run on-demand without needing to manage your
                  own infrastructure, provision servers, or upgrade hardware.
                </div>
              </div>
            </section>

            <section className="grid grid-cols-3">
              <div className="p-12 max-md:p-8 px-8 col-[1/4] grid grid-cols-3 grid-rows-2">
                <div className="col-[1/3] text-xl">
                  “ Our developers are happier, we get to market faster. Vercel
                  lets us move with confidence. ”
                </div>

                <div className="flex items-center justify-end row-[2/3] col-[2/4]">
                  <div className='mr-4'>
                    <div className="text-accents8">
                      Jonathan Lemon, Software Engineering Manager
                    </div>
                    <div className='font-bold tracking-[4px] text-end'>SONOS</div>
                  </div>
                  <div className="w-12 h-12 flex justify-center items-center shrink-0 border rounded-full rotate-180 cursor-pointer">
                    <ArrowLeft className='w-6 h-6 text-accents5'></ArrowLeft>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
