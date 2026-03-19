// src/app/article/page.tsx
import { siYuan } from '@/assets/font'

export default async function Article() {
  return (
    <div className={`${siYuan.className} min-h-[80vh] py-16 px-6`}>
      <article className="max-w-3xl mx-auto">
        {/* 诗歌标题区域 */}
        <header className="text-center mb-12">
          <div className="w-12 h-px bg-accents3 mx-auto mb-6"></div>
          <h1 className="text-2xl font-medium text-accents7 tracking-wide">国庆有感</h1>
          <div className="w-12 h-px bg-accents3 mx-auto mt-6"></div>
        </header>

        {/* 诗歌内容 */}
        <div className="px-4 md:px-8">
          <div className="text-center space-y-6">
            <p className="text-xl md:text-2xl leading-loose text-accents7 font-light tracking-wide">
              十四抗战烽火燃，山河泣血映长天。<br />
              四十改革展新颜，春潮涌起绘宏绵。<br />
              八零阅兵威振宇，三军列阵气如山。<br />
              五千历史光辉灿，复兴伟业耀宇寰！
            </p>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="mt-16 flex items-center justify-center">
          <div className="w-24 h-px bg-accents2"></div>
        </div>

        {/* 文章底部信息 */}
        <footer className="mt-8 text-center text-accents5 text-sm">
          <p>© {new Date().getFullYear()} Smile &frac12; sky. All rights reserved.</p>
        </footer>
      </article>
    </div>
  )
}