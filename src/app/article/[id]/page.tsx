'use client'
import styles from './index.module.css' // 注意这里使用的是复数形式styles

export default function Article() {
  const getInfo = () => {
    console.log('按钮被点击了！')
    // 这里可以添加更多的逻辑，比如调用API获取数据等
  }

  return (
    <>
      <h1>这是文章详情</h1>
      <button type="button" className='btn-style' onClick={getInfo}>
        {' '}
        {/* 使用导入的样式类 */}
        点击我
      </button>
    </>
  )
}
