import Image from 'next/image'
import useThemeStore, { getTheme, theme } from './useThemeStore'

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
      className={getTheme(useTheme, 'invert', '')}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={isPriority}
    />
  )
}
