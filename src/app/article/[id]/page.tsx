'use client'
import { usePathname } from 'next/navigation'
import styles from './index.module.css' // 注意这里使用的是复数形式styles

export default function Article({ params }: { params: { id: string } }) {
  const path = usePathname()
  const id = params.id
  const getInfo = () => {
    console.log('按钮被点击了！', path)
    // 这里可以添加更多的逻辑，比如调用API获取数据等
  }

  return (
    <div className="my-8">
      <div className="text-3xl">标题</div>
      <div className="mt-4">id是{id}</div>
      <button type="button" className="btn-style mt-4" onClick={getInfo}>
        点击我
      </button>
    </div>
  )
}
