import Image from 'next/image'
import useThemeStore, { getSvgTheme, theme } from './useThemeStore'
import { useEffect, useState } from 'react'

interface IImageType {
  src: string
  width: number
  height: number
  alt?: string
  isPriority?: boolean
}
export const ImageComp = ({
  src,
  width,
  height,
  alt = 'Logo',
  isPriority = true,
}: IImageType) => {
  const useTheme = useThemeStore()
  return (
    <Image
      className={getSvgTheme(useTheme, 'invert', '')}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={isPriority}
    />
  )
}

/**
 * 
 * @returns 鼠标位置
 */
export const useMouseMove = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return position
}
