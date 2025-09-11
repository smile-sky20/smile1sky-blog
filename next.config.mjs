// import NextBundleAnalyzer from '@next/bundle-analyzer';

// const withBundleAnalyzer = NextBundleAnalyzer({
//   enabled: true,
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用独立构建模式（减小产物体积）
  output: 'standalone',
  // 生产环境禁用 source map（减小 .next 体积）
  productionBrowserSourceMaps: false,
  // Next.js 可以对链接进行静态类型检查，以防止在使用 next/link 时出现拼写错误和其他错误，从而提高在页面间导航时的类型安全性。
  // experimental: {
  //   typedRoutes: true,
  // },
  rewrites() {
    return [
      {
        source: '/api/:path*', // 匹配所有以 /api 开头的路径
        destination: 'http://localhost:3220/:path*', // 转发到目标服务
      },
    ]
  },
  images: {
    // 允许访问外部图片
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      },
      {
        protocol: 'https',
        hostname: 'camo.githubusercontent.com'
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true, // 忽略 eslint 检查
  },
  typescript: {
    ignoreBuildErrors: true, // 忽略 TypeScript 检查
  }
}

export default nextConfig;
