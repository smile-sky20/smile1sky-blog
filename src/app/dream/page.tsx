import MochaBtn from '@/components/MochaBtn'
import Link from 'next/link'

export function Dream() {
  return (
    <div className="titleImg absolute z-999 top-0 w-[100vw] h-[100vh] overflow-y-hidden">
      <img
        src="/dream/guoqi.jpg"
        alt=""
        className="w-full h-full object-cover select-none"
      />
      <div className="titleBd absolute top-0 left-0 w-full h-[100vh] flex flex-col justify-center items-center">
        <span className="text-[36px] tracking-[5px] font-bold text-[#FF0000] selection:bg-[yellow]">
          为实现中华民族伟大复兴的中国梦而努力奋斗!
        </span>
        <div className="btn mt-6 w-[180px] h-[50px] max-md:w-[120px] max-md:h-[30px]">
          <MochaBtn>
            <Link
              href="https://baike.baidu.com/item/%E5%AE%9E%E7%8E%B0%E4%B8%AD%E5%8D%8E%E6%B0%91%E6%97%8F%E4%BC%9F%E5%A4%A7%E5%A4%8D%E5%85%B4"
              target="_blank"
              className='w-full'
            >
              ☆
            </Link>
          </MochaBtn>
        </div>
      </div>
    </div>
  )
}
export default Dream
