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

- 父元素 hover，子元素样式改变，code 如下：

```html
<div class="group">
  <div class="group-hover:text-red-500">Hover me</div>
  <div class="group-hover:bg-red-500">Hover me</div>
  <div class="group-hover:text-red-500">Hover me</div>
</div>
```

## tailwind 的响应式布局

## tailwindcss 的暗黑模式

https://tailwindcss.com/docs/dark-mode

## tailwindcss 的动画

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

# Next

## 路由(Navagation)

```tsx
// 使用next/navigation新版，旧版是next/router
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
// 路由器
const router = useRouter()
// 页面路径
const pathname = usePathname()
// 路由参数
const searchParams = useSearchParams()
router.push('/')
router.refresh()
router.back()
router.forward()
// 预加载路由
// next的Link标签，包含该属性，会自动预加载路由，可以设置为false
router.prefetch('/')
router.replace('/')
```

## 常见问题：渲染——水合问题(Hydration)

### 解决方案 1：使用状态控制

使用 useState 定义状态，并使用 useEffect 改变状态，然后通过条件判断显示最后的值因为 useEffect 在挂载后生效，所以不会出现报错，且两端已经同步

- 前提：标注'use client'，
- 结果：服务器端和客户端打印的一样

```tsx
// 打印：Warning: Text content did not match. Server: "0" Client: "4"
// 打印：A component was suspended by an uncached promise. Creating promises inside aClient Component or hook is not yet supported, except via a Suspense-compatible libraryor framework.
'use Client'

export default function Test() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    // 将错误记录到错误报告服务
    setIsClient(true)
  }, [])
  const num = Math.random()
  // 在此打印，并在页面中显示
  console.log(num)

  return <div>{isClient ? num : 'loading...'}</div>
}
```

- 实际效果中，使用这种方法后，控制台不报错，但是服务器终端和浏览器上显示的依然不是同一个

### 解决方案 2：动态引入

- 前提：取消'use Client'

```tsx
import dynamic from 'next/dynamic'
const DynamicComponent = dynamic(() => import('./hydration'), { ssr: false })

export function Hydration() {
  const a = Math.random()
  console.log(a)

  return <div>{a}</div>
}
export default Hydration
```

### 解决方案 3：水合警告标签属性：suppressHydrationWarning

- 前提：'use client'
- 但是这一点只是浏览器不展示，但是他确实存在这个问题

```tsx
export default function Hydration() {
  const num = Math.random()
  console.log(`num:`, num)
  return <div suppressHydrationWarning={true}>{num}</div>
}
```
