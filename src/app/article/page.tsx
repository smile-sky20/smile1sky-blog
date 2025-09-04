// src/app/article/page.tsx
import { inter } from '@/assets/font'

export default async function Article() {
  return (
    <div className={`${inter.className} min-h-screen bg-gray-50`}>
      <article className="max-w-3xl mx-auto px-4 py-8">
        {/* 文章内容 */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-3xl leading-[42px] text-red-500 text-center font-bold">
              十四抗战烽火燃，山河泣血映长天。<br />
              四十改革展新颜，春潮涌起绘宏绵。<br />
              八零阅兵威振宇，三军列阵气如山。<br />
              五千历史光辉灿，复兴伟业耀宇寰！
            </p>
          </div>
        </div>

        {/* 文章底部信息 */}
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 技术博客. 保留所有权利.</p>
        </footer>
      </article>
    </div>
  )
}