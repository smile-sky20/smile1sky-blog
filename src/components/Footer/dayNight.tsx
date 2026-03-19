import { ImageComp } from '@/utils'
import useThemeStore, { getSvgTheme, theme } from '@/store/useThemeStore'

export function DayNight() {
  const useTheme = useThemeStore()
  const changeTheme = (theme: theme) => {
    useTheme.setTheme(theme)
  }

  const isDay = useTheme.activeTheme === 'day'

  return (
    <div className="relative p-1 flex gap-2 border border-accents3 rounded-full bg-transparent">
      <div className={`absolute z-0 w-9 h-9 top-1 ${getSvgTheme(useTheme, 'left-12 bg-mocha', 'left-1 bg-accents3')} transition-all rounded-full`}></div>
      <button
        className={`z-[1] p-2 rounded-full transition-opacity ${!isDay ? 'opacity-40' : 'opacity-100'}`}
        onClick={() => changeTheme('day')}
        aria-label="切换亮色主题"
      >
        <ImageComp src="/sun.svg" alt="sun" width={20} height={20}></ImageComp>
      </button>
      <button
        className={`z-[1] p-2 rounded-full transition-opacity ${!isDay ? 'opacity-100' : 'opacity-40'}`}
        onClick={() => changeTheme('dark')}
        aria-label="切换暗色主题"
      >
        <ImageComp src="/moon.svg" alt="moon" width={20} height={20}></ImageComp>
      </button>
    </div>
  )
}
export default DayNight
