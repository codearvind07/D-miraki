/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static HTML export
  distDir: 'out', // Output directory for static files
  trailingSlash: true, // Add trailing slashes to URLs for better compatibility

  images: {
    unoptimized: true, // Good for self-hosted or non-Vercel deployment
  },

  reactStrictMode: true, // Recommended for catching issues early
  
  // Add basePath configuration for static export
  basePath: '',
  
  // Ensure proper asset handling for static export
  assetPrefix: '',
};

module.exports = nextConfig;