/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
   experimental: {
    serverActions: true,
  },
  // distDir: 'dist',
  images: { unoptimized: true },
};

module.exports = nextConfig;





