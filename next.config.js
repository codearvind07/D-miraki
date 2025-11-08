/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static HTML export
  distDir: 'out', // Output directory for static files
  trailingSlash: true, // Add trailing slashes to URLs for better compatibility

  images: {
    unoptimized: true, // Good for self-hosted or non-Vercel deployment
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'dmiraki.com',
        port: '',
      },
    ],
  },

  reactStrictMode: true, // Recommended for catching issues early
  
  // Remove basePath configuration for static export
  // basePath: '',
  
  // Ensure proper asset handling for static export
  assetPrefix: '',
};

module.exports = nextConfig;