/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 可以对链接进行静态类型检查，以防止在使用 next/link 时出现拼写错误和其他错误，从而提高在页面间导航时的类型安全性。
  experimental: {
    typedRoutes: true,
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
  }
};

export default nextConfig;
