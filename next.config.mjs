/** @type {import('next').NextConfig} */
const nextConfig = {
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
