```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
# TailwindCss

## tailwind的响应式布局

## tailwindcss的暗黑模式
https://tailwindcss.com/docs/dark-mode

## tailwindcss的动画
https://tailwindcss.com/docs/animation


# zustand 及其持久化
```ts
import { persist, createJSONStorage } from 'zustand/middleware'
```

以下是一些常用的持久化选项：
- name：存储中使用的唯一键名。
- storage：自定义存储引擎。
- partialize：选择存储部分状态字段。
- onRehydrateStorage：存储恢复时调用的监听函数。
- version：版本控制，用于处理存储的兼容性。
- migrate：处理版本迁移的函数。
- merge：自定义持久化值与当前状态的合并方式。
- skipHydration：跳过初始化时的自动恢复。
