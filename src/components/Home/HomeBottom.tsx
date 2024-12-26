import Link from 'next/link'
import MochaBtn from '../MochaBtn'

export function HomeBottom() {
  return (
    <>
      <div className="clearHd flex justify-center items-center">
        <div className="text-mocha text-[42px] font-[700] tracking-[3px]">
          清晰
        </div>
      </div>
      <div className="clearBd mt-12 flex justify-center w-[759px]">
        <div className="h-full flex items-center text-accents8 text-[24px] tracking-[1px]">
          丢掉幻想，准备斗争
        </div>
      </div>
      <div className="clearBt mt-12 flex justify-center items-center max-lg:block">
        <div className="clearBtL flex-1 flex justify-center">
          <img src="/home/bottom.webp" alt="" className="w-[360px] h-[310px]" />
        </div>
        <div className="clearBtR flex-1 h-full flex flex-col justify-center items-center">
          <div className="relative flex top-[20px] left-[40px] pl-[30px] w-[300px] text-accents8 tracking-[1.5px] indent-[2em]">
            矛盾存在于一切事物发展的过程中，矛盾贯穿于每一事物发展过程的始终，这是矛盾的普遍性和绝对性。
          </div>
          <h4 className="relative flex top-[45px] left-[100px] text-accents8 text-[14px] tracking-[2px]">
            ——《矛盾论》
          </h4>
        </div>
      </div>
    </>
  )
}
export default HomeBottom
