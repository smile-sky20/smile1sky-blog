// store/themeStore.ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type theme = 'day' | 'dark'

type themeStore = {
  themes: theme[]
  activeTheme: theme
  isDark: (darkColor?: string, dayColor?: string) => string
  setTheme: (theme: theme) => void
}

const useThemeStore = create<themeStore>()(
  // 持久化中间件
  persist(
    (set, get) => ({
      themes: ['day', 'dark'],
      activeTheme: 'day',
      setTheme: (activeTheme: theme) => set(() => ({ activeTheme })),
      // 获取当前是否为day
      isDark: (darkColor: string = '#fff', dayColor: string = '#000') =>
        get().activeTheme === 'dark' ? darkColor : dayColor,
    }),
    {
      name: 'active-theme', // 存储在storage中的key名
      storage: createJSONStorage(() => localStorage), // 存储数据库配置，默认使用localStorage
      // 过滤函数
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => key === 'activeTheme')
        ),
    }
  )
)
export default useThemeStore

// 专供Svg获取当前背景颜色
export const getTheme = (
  theme: any,
  darkColor: string = '#fff',
  dayColor: string = '#000'
) => {
  return theme.activeTheme == 'dark' ? darkColor : dayColor
}
