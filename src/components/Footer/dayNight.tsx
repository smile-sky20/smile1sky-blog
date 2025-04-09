import { ImageComp } from '@/utils'
import useThemeStore, { getSvgTheme, theme } from '@/store/useThemeStore'

export function DayNight() {
  const useTheme = useThemeStore()
  const changeTheme = (theme: theme) => {
    useTheme.setTheme(theme)
  }
  return (
    <div className="relative p-1 flex gap-2 border border-accents3 rounded-full bg-transparent">
      <div className={`absolute z-0 w-9 h-9 top-1 ${getSvgTheme(useTheme, 'left-12 bg-purple-700', 'left-1 bg-accents3')} transition-all rounded-full`}></div>
      <button
        className={`p-2 z-[1] rounded-full bg-transparent`}
        onClick={() => changeTheme('day')}
      >
        <ImageComp src="/sun.svg" alt="sun" width={20} height={20}></ImageComp>
      </button>
      <button
        className={`z-[1] p-2 rounded-full`}
        onClick={() => changeTheme('dark')}
      >
        <ImageComp src="/moon.svg" alt="sun" width={20} height={20}></ImageComp>
      </button>
    </div>
  )
}
export default DayNight
