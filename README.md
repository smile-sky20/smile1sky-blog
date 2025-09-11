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





# Docker 学习笔记

## 目录
1. [基础操作](#基础操作)
2. [进阶优化](#进阶优化)
3. [常用命令速查表](#常用命令速查表)
4. [容器管理](#容器管理)
5. [数据卷（Volume）](#数据卷volume)
6. [补充说明](#补充说明)

---

## 基础操作

### 1. 构建镜像

```shell
docker build -t next-image .
```
- `-t`：指定镜像名
- `.`：当前目录

### 2. 运行镜像

```shell
docker run -d -p 3001:3000 --name next-container next-image
```
- `-d`：后台运行
- `-p 3001:3000`：主机端口 3001 映射到容器端口 3000
- `--name`：容器命名

### 3. 查看容器运行状态

```shell
docker ps
```

---

## 进阶优化

### 1. 删除旧镜像和容器

```shell
docker stop next-container      # 停止容器
docker rm next-container        # 删除容器
docker rmi next-image           # 删除镜像
```

### 2. 指定平台构建镜像（推荐）

```shell
docker build --platform linux/amd64 -t next-image .
```
- 优点：只下载目标平台依赖，镜像更小

### 3. 重新运行镜像

```shell
docker run -p 3000:3000 next-image
```

---

## 常用命令速查表

| 命令                                | 说明                         |
| ----------------------------------- | ---------------------------- |
| `docker ps`                         | 查看正在运行的容器           |
| `docker ps -a`                      | 查看所有容器（包括已停止的） |
| `docker logs next-container`        | 查看容器日志                 |
| `docker exec -it next-container sh` | 进入容器内部                 |
| `docker stop next-container`        | 停止容器                     |
| `docker start next-container`       | 启动已停止的容器             |
| `docker rm next-container`          | 删除容器（必须先停止）       |
| `docker rmi next-app:latest`        | 删除镜像                     |
| `docker images`                     | 查看所有镜像                 |
| `docker tag 镜像id next-image:v1`   | 给镜像打标签                 |
| `docker rename 旧名 新名`           | 重命名容器                   |

---

## 容器管理

### 暂停与恢复

| 命令           | 说明                                   | 恢复命令         |
| -------------- | -------------------------------------- | ---------------- |
| `docker stop`  | 停止容器（优雅关闭）                   | `docker start`   |
| `docker pause` | 暂停容器（冻结进程，不耗 CPU）         | `docker unpause` |

### 进入容器内部

```shell
docker exec -it next-container /bin/sh
```
- `-i`：交互模式
- `-t`：分配伪终端

### 重命名容器

```shell
docker rename 旧容器名 新容器名
```
- 容器处于任何状态都可重命名

---

## 数据卷（Volume）

本地文件与容器同步，无需重建镜像：

```shell
docker run -d -p 3002:3000 --name next-container -v $(pwd):/app next-image
```
- `-v $(pwd):/app`：将当前目录映射到容器 `/app` 目录

---

## 补充说明

- **镜像体积优化**：指定平台只下载所需依赖，减少镜像体积。
- **容器命名与管理**：重命名后需用新名字操作容器。
- **日志查看**：`docker logs 容器名` 可实时查看容器输出。

---

> 建议：每次操作前，先用 `docker ps -a` 查看容器状态，避免误删或重复创建。