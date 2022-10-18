/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
   experimental: {
        images: {
            unoptimized: true
        }
    }
} 
  reactStrictMode: true,
}

module.exports = nextConfig
