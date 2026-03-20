import { siYuan } from '@/assets/font'

export function Dream() {
  return (
    <div className={`${siYuan.className} min-h-[80vh] py-12 px-6 flex flex-col justify-center`}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* 诗词区域 */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-medium text-accents8 mb-8 tracking-wide">清平乐·六盘山</h3>
            <div className="space-y-4 text-lg text-accents7 leading-loose tracking-wide">
              <p>天高云淡，望断南飞雁。</p>
              <p>不到长城非好汉，屈指行程二万。</p>
              <p className="my-6"></p>
              <p>六盘山上高峰，红旗漫卷西风。</p>
              <p>今日长缨在手，何时缚住苍龙？</p>
            </div>
            <p className="mt-8 text-right text-sm text-accents5">—— 毛泽东</p>
          </div>

          {/* 图片区域 */}
          <div className="flex justify-center">
            <div className="p-3 bg-background rounded-lg border border-accents2">
              <img
                src="/dream/guoqi.jpg"
                alt="五星红旗"
                className="max-w-full h-auto max-h-[60vh] rounded select-none object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dream
