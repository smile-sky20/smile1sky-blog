import { ISvgProps } from './SvgType'
import useThemeStore, { getTheme } from '@/utils/useThemeStore'

export default function Hamburge(props: ISvgProps) {
  const useTheme = useThemeStore()
  const { width, height } = props
  return (
    <div className="relative cursor-pointer">
      <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
      >
        <path
          d="M4 8h24M4 16h24M4 24h24"
          stroke={getTheme(useTheme,'#eee','#333')}
        ></path>
      </svg>
    </div>
  )
}
