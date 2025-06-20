/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  // distDir: 'dist',
  images: { unoptimized: true },
};

module.exports = nextConfig;





