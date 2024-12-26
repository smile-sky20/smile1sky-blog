'use client'
import { siYuan } from '@/ui/font'
import useThemeStore from '@/utils/useThemeStore'
import { theme } from '@/utils/useThemeStore'

import HomeTop from './HomeTop'
import HomeCenter from './HomeCenter'
import HomeBottom from './HomeBottom'

export default function Home() {
  const useTheme = useThemeStore()
  const changeTheme = (theme: theme) => {
    useTheme.setTheme(theme)
  }
  return (
    <div
      className={`py-24 flex flex-col justify-center items-center ${siYuan.className}`}
    >
      <div className='top-1'>
      <HomeTop></HomeTop>
      </div>
      
      <div className="center mt-24 w-full flex flex-col items-center justify-center max-md:mt-32">
        <HomeCenter></HomeCenter>
      </div>

      <div className="bottom mt-24 w-full flex flex-col items-center justify-center max-md:mt-32">
        <HomeBottom></HomeBottom>
      </div>
    </div>
  )
}
