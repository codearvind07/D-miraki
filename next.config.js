/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    serverActions: true, // if you're actually using server actions
  },

  images: {
    unoptimized: true, // Good for self-hosted or non-Vercel deployment
  },

  reactStrictMode: true, // Recommended for catching issues early
  swcMinify: true, // Enable SWC-based minification for performance
};

module.exports = nextConfig;
