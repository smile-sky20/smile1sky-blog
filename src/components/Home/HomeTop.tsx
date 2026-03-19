import Link from 'next/link'
import MochaBtn from '../MochaBtn'
import Typewriter from '@/components/TypeWriter'

export function Top() {
  const TypeWriterList = [
    'Do BEST',
    'Do Beautifully',
    'Do Amazingly',
    'Do Unbelievably',
  ]

  return (
    <>
      <div className="mb-6 box-border max-2xl:pl-24 max-xl:pl-20 max-lg:pl-16 max-md:pl-6">
        <h1 className="text-[72px] text-accents9 max-lg:text-[52px] max-md:text-[42px]">
          smile1sky
        </h1>
        <div className="text-left text-[24px] text-accents7 max-lg:text-[20px] max-md:text-[14px]">
          ——Mysterious smile from space
        </div>
      </div>
      <div className="heart relative w-full max-w-[1280px] flex justify-center text-white drop-shadow-md max-2xl:px-24 max-xl:px-20 max-lg:px-16 max-md:px-6">
        <img
          src="/home/daozi.png"
          alt=""
          className="p-auto w-full h-[550px] transition-all duration-500 max-lg:h-[500px] max-md:h-[400px] object-cover rounded-md dark:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        />

        <div
          className="heartBd animate__animated animate__fadeInDown absolute top-[260px] transition-all
          max-2xl:left-[210px]
          max-xl:left-[150px]
          max-lg:top-[220px] max-lg:left-[120px]
          max-md:top-[180px] max-md:left-[90px]"
        >
          <div
            className="text-white text-[36px] font-bold tracking-[7px] select-none
            max-lg:text-[28px] max-lg:tracking-[4px]
            max-md:text-[20px] max-md:tracking-[3px]"
          >
            Do What You Want To
          </div>

          <div className={'h-[54px] max-lg:h-[42px] max-md:h-[30px]'}>
            <Typewriter
              list={TypeWriterList}
              style={`
              text-white text-[36px] font-bold tracking-[7px] select-none
              max-lg:text-[28px] max-lg:tracking-[4px]
              max-md:text-[20px] max-md:tracking-[3px]
            `}
            />
          </div>

          <div
            className="mt-3 text-white text-[20px] select-none
            max-lg:text-[16px]
            max-md:text-[14px]"
          >
            心随梦前行 & 梦随心而动
          </div>
        </div>
      </div>
    </>
  )
}
export default Top
