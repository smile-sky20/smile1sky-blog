import { FC, RefObject, useEffect, useRef, useState } from 'react'
import './index.modules.scss'

interface IProps {
  list: string[]
  speed?: number
  style?: string
}
const Typewriter: FC<IProps> = ({ list, speed = 50, style = '' }) => {
  // 处理 list 为空的边界情况
  const [value, setValue] = useState<string>(list[0] || '')
  // 显示的文字
  const [displayText, setDisplayText] = useState<string>('')
  // 显示到的索引
  const [index, setIndex] = useState<number>(0)
  // 打字方向 false=删除(向左), true=输入(向右)
  const [flag, setFlag] = useState<boolean>(true)

  // 定时器
  const timer: RefObject<any> = useRef(null)

  // 创建打字机效果
  useEffect(() => {
    if (list.length === 0) return

    const speedMap = {
      // 起始速度
      0: speed * 4,
      // 内容完全时停顿时间
      [value.length]: 1500,
    }

    timer.current = setTimeout(() => {
      if (flag) {
        // 正向打字
        setDisplayText((prev) => prev + (value[index] ?? ''))
        setIndex((prev) => {
          const next = prev + 1
          // 当打完所有字符后，切换方向
          if (next > value.length) {
            setFlag(false)
          }
          return next
        })
      } else {
        // 反向删除
        setDisplayText((prev) => prev.substring(0, prev.length - 1))
        setIndex((prev) => {
          const next = prev - 1
          // 当删除完所有字符后，切换方向并随机选择下一个文本
          if (next <= 0) {
            setFlag(true)
            // 随机选择一个不同于当前的文本
            let nextValue
            do {
              nextValue = list[Math.floor(Math.random() * list.length)]
            } while (nextValue === value && list.length > 1)
            setValue(nextValue)
            setDisplayText('')
          }
          return next
        })
      }
    }, speedMap[index] || speed)

    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
        timer.current = null
      }
    }
  }, [value, speed, flag, index, list])

  return <div className={`typewriter ${style}`}>{displayText}</div>
}

export default Typewriter
