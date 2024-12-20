'use client'

import { useEffect, useRef } from 'react'

// 定义云朵对象
interface Cloud {
  x: number
  y: number
  radius: number
}

// 定义方块对象
interface Block {
  x: number
  y: number
  size: number
}
const randomFn = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const moveRect = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  ctx.beginPath()
  ctx.rect(x, y, 20, 20)
  ctx.fillStyle = 'green'
  ctx.fill()
}

const clearRect = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
  ctx.fillStyle = '#add8e6'
  ctx.rect(x, y, 20, 20)
  ctx.fill()
}

export default function AboutRelated() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 设置画布大小
    canvas.width = document.documentElement.offsetWidth - 5
    canvas.height = window.innerHeight - 200

    // 渲染蓝色背景
    ctx.fillStyle = '#add8e6'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const clouds: Cloud[][] = [
      [
        { x: 50, y: 100, radius: 30 },
        { x: 80, y: 90, radius: 25 },
        { x: 110, y: 100, radius: 30 },
        { x: 80, y: 110, radius: 25 },
      ],
      [
        { x: 50, y: 100, radius: 30 },
        { x: 85, y: 100, radius: 25 },
        { x: 110, y: 100, radius: 30 },
        { x: 75, y: 110, radius: 25 },
      ],
    ]
    // 绘制白云
    ctx.fillStyle = '#fff'
    clouds.forEach((cloud1) => {
      const randomX = randomFn(10, window.innerWidth - 200)
      const randomY = randomFn(10, 100)
      ctx.beginPath()
      cloud1.forEach((cloud2) => {
        ctx.arc(
          cloud2.x + randomX,
          cloud2.y + randomY,
          cloud2.radius,
          0,
          Math.PI * 2
        )
      })
      ctx.fill()
    })

    // 初始化方块数组
    const blocks: Block[] = []
    const blockSize = 50
    for (let i = 0; i <= canvas.width / blockSize; i++) {
      blocks.push({
        x: i * blockSize,
        y: canvas.height - blockSize,
        size: blockSize,
      })
    }
    // 绘制带边框颜色的方块
    ctx.lineWidth = 2
    ctx.strokeStyle = '#aaa'
    ctx.fillStyle = '#8B4513'
    blocks.forEach((block) => {
      ctx.fillRect(block.x, block.y, block.size, block.size)
      ctx.strokeRect(block.x, block.y, block.size, block.size)
    })

    ctx.moveTo(0, 0)
    // 定义一个操作的方块
    const activeBlock: Block = {
      x: 100,
      y: 430,
      size: 20,
    }
    ctx.fillStyle = 'green'
    ctx.fillRect(
      activeBlock.x,
      activeBlock.y,
      activeBlock.size,
      activeBlock.size
    )

    // 监听键盘左右上键,移动操作方块
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          clearRect(ctx, activeBlock.x, activeBlock.y)
          activeBlock.x -= 10
          moveRect(ctx, activeBlock.x, activeBlock.y)
          break
        case 'ArrowRight':
          clearRect(ctx, activeBlock.x, activeBlock.y)
          activeBlock.x += 10
          moveRect(ctx, activeBlock.x, activeBlock.y)
          break
        case 'ArrowUp':
          clearRect(ctx, activeBlock.x, activeBlock.y)
          activeBlock.y -= 10
          moveRect(ctx, activeBlock.x, activeBlock.y)
          break
      }
    })

    // 动画函数
    const animate = () => {
      // 清除画布
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      requestAnimationFrame(animate)
    }

    // animate()
  }, [])

  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} className="border border-gray-200 rounded-lg" />
    </div>
  )
}
