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
    <div className="mt-12 mx-auto">
      <div className="content-wrapper flex flex-col items-center">
        <Link className="black w-16 flex items-center text-center" href={'/'}>
          <ArrowLeft></ArrowLeft>
          <span className="ml-2">Back</span>
        </Link>

        <div className="content-warrpe mt-12">
          <div className="content-box grid  border border-accents2">
            <section
              className={`${styles.topBox} grid-cols-12 grid-rows-4 max-md:grid-cols-8 border-b text-accents4`}
            >
              <div className="bg-white row-[2/4] col-[2/12] max-md:col-[2/8]">
                <div className="grid h-full place-items-center text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl transition-all duration-200 text-accents7 font-bold selection:text-red-200">
                  About The Smile &frac12; Sky 丶
                </div>
              </div>
            </section>

            <section className='my-8 text-center'>
              <div className='text-4xl max-lg:text-3xl max-md:text-2xl font-semibold'>Technology</div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
