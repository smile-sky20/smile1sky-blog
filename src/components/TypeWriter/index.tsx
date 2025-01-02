import { FC, RefObject, useEffect, useRef, useState } from 'react'
import './index.modules.scss'

interface IProps {
  list: string[]
  speed?: number
  style: any
}
const Typewriter: FC<IProps> = ({ list, speed = 50, style = '' }) => {
  const [value, setValue] = useState<string>(list[0])
  // 显示的文字
  const [displayText, setDisplayText] = useState<string>('')
  // 显示到的索引
  const [index, setIndex] = useState<number>(0)
  // 打字方向 false左
  const [flag, setFlag] = useState<boolean>(true)

  // 定时器
  const timer: RefObject<any> = useRef(null)

  // 控制打字方向
  useEffect(() => {
    if (index <= 0 && !flag) setFlag(true)
    if (index > value.length && flag) setFlag(false)
  }, [value, speed, flag])

  // 创建打字机效果
  useEffect(() => {
    const speedMap = {
      // 起始速度
      0: speed * 2,
      // 打字速度
      [value.length]: speed * 4,
      // 内容完全时停顿时间
      [value.length + 1]: 1500,
    }
    timer.current = setTimeout(() => {
      if (flag) {
        setDisplayText((prev: any) => prev + (value[index] ?? ''))
        setIndex((prev: number) => {
          if (prev + 1 > value.length) setFlag(false)
          return prev + 1
        })
      } else {
        setDisplayText((prev: string) => prev.substring(0, prev.length - 1))
        setIndex((prev: number) => prev - 1)
        if (index < 0) {
          setValue(list[Math.floor(Math.random() * list.length)])
        }
      }
      // console.log(value.length, index, speedMap[index] || speed)
    }, speedMap[index] || speed)
    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
        timer.current = null
      }
    }
  }, [value, speed, flag, index])

  return <div className={`typewriter ${style}`}>{displayText}</div>
}

export default Typewriter
