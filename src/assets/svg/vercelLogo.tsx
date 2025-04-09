import useThemeStore, { getSvgTheme } from '@/store/useThemeStore'
import { ISvgProps } from './SvgType'

export default function VercelLogo(props: ISvgProps) {
  const useTheme = useThemeStore()
  const { width, height } = props

  return (
    <svg
      height={height}
      aria-label="Vercel logomark"
      role="img"
      viewBox="0 0 74 64"
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill={getSvgTheme(useTheme)}
      ></path>
    </svg>
  )
}
