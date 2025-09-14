module.exports = {
  siteUrl: 'https://dmiraki.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/dashboard',
    '/dashboard/**',
    '/login',
    '/register',
    '/api/*',
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/dashboard', '/dashboard/**', '/api/*', '/register'] },
    ],
    additionalSitemaps: [
      'https://dmiraki.com/sitemap-0.xml',
    ],
  },
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';
    if (path === '/') { priority = 1.0; changefreq = 'daily'; }
    else if (path.startsWith('/blogs')) { priority = 0.8; changefreq = 'daily'; }
    // Prioritize key service pages
    else if (path.includes('social-media-marketing-and-management') || 
             path.includes('profitable-performance-marketing') || 
             path.includes('content-creation') || 
             path.includes('search-engine-optimization') || 
             path.includes('web-design-and-development') || 
             path.includes('ui-and-ux-design') || 
             path.includes('iot-based-software')) { 
      priority = 0.9; 
      changefreq = 'weekly'; 
    }
    else if (path.startsWith('/brand-and-reach') || path.startsWith('/code-and-build')) { priority = 0.8; changefreq = 'weekly'; }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};