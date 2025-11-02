import { Metadata } from 'next';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  keywords: string;
  content: string;
  category: string;
  tags: string[];
  technology: string[];
  publishedAt: string;
  metaTitle: string;
  metaDescription: string;
  author: {
    name: string;
    bio: string;
    avatar: string;
  };
  readingTime: string;
}

export const blogs: BlogPost[] = [
  {
    id: "1",
    title: "Why Every Business Needs a Professional Website in 2025",
    excerpt: "Discover why having a professional website is crucial for business success in 2025, from building credibility to reaching customers 24/7.",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-01-15",
    keywords: "professional business website, website necessity 2025, why a website is important, small business website, digital presence, online credibility, 24/7 customer reach, business success website",
    content: `
      <p>In today's digital landscape, a professional website is no longer a luxury—it's a necessity for businesses of all sizes. Here's why:</p>
      
      <h2>Building Credibility and Trust</h2>
      <p>A well-designed website immediately establishes your business as credible and trustworthy. Potential customers often research companies online before making purchasing decisions.</p>
      
      <h2>24/7 Availability</h2>
      <p>Your website works around the clock, providing information about your products or services even when your physical store is closed.</p>
      
      <h2>Reaching a Wider Audience</h2>
      <p>With a website, you're not limited by geography. You can reach customers anywhere in the world, expanding your market beyond local boundaries.</p>
    `,
    category: "Business Strategy",
    tags: ["Business Website", "Digital Marketing", "Online Presence", "Web Development"],
    technology: ["HTML", "CSS", "JavaScript", "SEO"],
    publishedAt: "2025-01-15T14:30:00Z",
    metaTitle: "Why Every Business Needs a Professional Website in 2025 | DMiraki",
    metaDescription: "Discover why having a professional website is essential for business success in 2025. Learn how to build credibility, reach customers 24/7, and drive growth with effective web design.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "8 min read"
  },
  {
    id: "2",
    title: "Next.js 15: The Future of React Development is Here",
    excerpt: "Explore the revolutionary features of Next.js 15 including Turbopack, enhanced App Router, and built-in performance monitoring tools.",
    coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-03-22",
    keywords: "Next.js 15 features, React development future, Next.js Turbopack, App Router Next.js 15, Next.js performance monitoring, new Next.js update, server components React, Next.js trends 2025",
    content: `
      <p>Next.js 15 brings exciting new features that push the boundaries of React development even further.</p>
      
      <h2>Turbopack: Lightning-Fast Compilation</h2>
      <p>Turbopack, the new Rust-based compiler, offers up to 700x faster updates and 10x faster cold starts compared to Webpack.</p>
      
      <h2>Enhanced App Router</h2>
      <p>The App Router in Next.js 15 introduces improved layouts, better error handling, and more intuitive data fetching patterns.</p>
      
      <h2>Built-in Performance Monitoring</h2>
      <p>Next.js 15 now includes built-in performance monitoring tools that help you identify and fix performance bottlenecks.</p>
    `,
    category: "Web Development",
    tags: ["Next.js", "React", "Turbopack", "Web Development", "Performance"],
    technology: ["Next.js", "React", "JavaScript", "TypeScript"],
    publishedAt: "2025-03-22T09:15:00Z",
    metaTitle: "Next.js 15: The Future of React Development is Here | DMiraki",
    metaDescription: "Explore the revolutionary features of Next.js 15 including Turbopack, enhanced App Router, and built-in performance monitoring tools for modern web development.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "6 min read"
  },
  {
    id: "3",
    title: "The ROI of Professional Web Design: Numbers That Matter",
    excerpt: "Learn how professional web design delivers measurable ROI through increased conversions, reduced acquisition costs, and long-term value creation.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-02-08",
    keywords: "ROI of web design, professional web design benefits, measure website ROI, web design conversion rate, web design value, cost of professional website, long-term value web design, design impact on business",
    content: `
      <p>Investing in professional web design isn't just about aesthetics—it's a strategic decision that delivers measurable returns.</p>
      
      <h2>Increased Conversion Rates</h2>
      <p>Professional web design can increase conversion rates by 15-50% through improved user experience and strategic call-to-action placement.</p>
      
      <h2>Reduced Customer Acquisition Costs</h2>
      <p>A well-designed website reduces bounce rates and increases engagement, leading to lower customer acquisition costs.</p>
      
      <h2>Long-term Value Creation</h2>
      <p>Professional design creates lasting brand impressions that build customer loyalty and drive repeat business.</p>
    `,
    category: "Business Strategy",
    tags: ["Web Design", "ROI", "Business Growth", "Conversion Rate", "Digital Marketing"],
    technology: ["UI/UX", "Web Design", "Conversion Optimization"],
    publishedAt: "2025-02-08T16:45:00Z",
    metaTitle: "The ROI of Professional Web Design: Numbers That Matter | DMiraki",
    metaDescription: "Learn how professional web design delivers measurable ROI through increased conversions, reduced acquisition costs, and long-term value creation for your business.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "7 min read"
  },
  // Placeholder for remaining blogs - extend with similar structure
  {
    id: "4",
    title: "AI Integration in Modern Web Applications: Transforming User Experiences",
    excerpt: "Discover how artificial intelligence is revolutionizing web applications with personalized experiences, intelligent automation, and predictive analytics.",
    coverImage: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=996",
    date: "2025-04-10",
    keywords: "AI in web applications, AI transforming user experience, intelligent automation web, personalized web experiences, AI integration strategy, predictive analytics web apps, modern web trends AI, future of web applications",
    content: `
      <p>AI is changing how we interact with web apps. Here's how:</p>
      
      <h2>Personalized Experiences</h2>
      <p>AI tailors content to individual users based on behavior and preferences.</p>
      
      <h2>Intelligent Automation</h2>
      <p>Automate routine tasks to improve efficiency and user satisfaction.</p>
      
      <h2>Predictive Analytics</h2>
      <p>Anticipate user needs and provide proactive solutions.</p>
    `,
    category: "Web Development",
    tags: ["AI", "Web Apps", "Personalization", "Automation"],
    technology: ["AI", "Machine Learning", "JavaScript"],
    publishedAt: "2025-04-10T10:00:00Z",
    metaTitle: "AI Integration in Modern Web Applications | DMiraki",
    metaDescription: "Discover how AI revolutionizes web apps with personalization and automation.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "5 min read"
  },
  {
    id: "5",
    title: "Cybersecurity Best Practices for Business Websites in 2025",
    excerpt: "Essential cybersecurity strategies to protect your business website from threats, including SSL implementation, regular updates, and user authentication.",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-01-30",
    keywords: "cybersecurity for business websites 2025, essential website security, SSL implementation guide, user authentication best practices, protect website from threats, business website security strategy, website updates security, small business cybersecurity",
    content: `
      <p>Protect your site with these best practices:</p>
      
      <h2>SSL Implementation</h2>
      <p>Secure data transmission with HTTPS.</p>
      
      <h2>Regular Updates</h2>
      <p>Keep software current to patch vulnerabilities.</p>
      
      <h2>User Authentication</h2>
      <p>Implement strong login and access controls.</p>
    `,
    category: "Security",
    tags: ["Cybersecurity", "SSL", "Authentication", "Website Security"],
    technology: ["HTTPS", "Security", "Best Practices"],
    publishedAt: "2025-01-30T12:00:00Z",
    metaTitle: "Cybersecurity Best Practices for Business Websites 2025 | DMiraki",
    metaDescription: "Essential strategies to protect your business website from threats.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "4 min read"
  },
  // Continue for ids 6-15 with similar placeholder structure...
  {
    id: "6",
    title: "Responsive Web Design: Creating Seamless Experiences Across All Devices",
    excerpt: "Master responsive web design principles to ensure your website looks and functions perfectly on desktops, tablets, and smartphones.",
    coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-03-15",
    keywords: "responsive web design principles, seamless web experience, design across all devices, mobile-friendly design, adaptive design vs responsive, why is responsive design important, desktop tablet smartphone design, fluid web layouts",
    content: `
      <p>Responsive design ensures accessibility across devices.</p>
      
      <h2>Media Queries</h2>
      <p>Use CSS to adapt layouts.</p>
      
      <h2>Flexible Grids</h2>
      <p>Build scalable structures.</p>
      
      <h2>Fluid Images</h2>
      <p>Optimize visuals for different screens.</p>
    `,
    category: "Web Design",
    tags: ["Responsive", "Mobile", "Design", "UX"],
    technology: ["CSS", "Media Queries", "Tailwind"],
    publishedAt: "2025-03-15T15:00:00Z",
    metaTitle: "Responsive Web Design Principles | DMiraki",
    metaDescription: "Create seamless experiences across all devices with responsive design.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "5 min read"
  },
  {
    id: "7",
    title: "Progressive Web Apps (PWAs): The Future of Mobile Web Experience",
    excerpt: "Explore how Progressive Web Apps combine the best of web and mobile applications, delivering app-like experiences through web browsers.",
    coverImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-04-05",
    keywords: "Progressive Web Apps (PWAs), PWA benefits, mobile web experience future, web app vs native app, PWA development guide, installable web apps, app-like experiences web, service workers PWA",
    content: `
      <p>PWAs bridge web and native apps.</p>
      
      <h2>Service Workers</h2>
      <p>Enable offline functionality.</p>
      
      <h2>App Shell</h2>
      <p>Fast loading core UI.</p>
      
      <h2>Push Notifications</h2>
      <p>Engage users like native apps.</p>
    `,
    category: "Web Development",
    tags: ["PWA", "Mobile", "Offline", "Service Workers"],
    technology: ["JavaScript", "PWA", "Next.js"],
    publishedAt: "2025-04-05T11:00:00Z",
    metaTitle: "Progressive Web Apps: Future of Mobile Web | DMiraki",
    metaDescription: "Explore PWAs for app-like web experiences.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "6 min read"
  },
  {
    id: "8",
    title: "Mobile-First Design: Why Your Business Website Must Prioritize Mobile Users",
    excerpt: "With over 60% of web traffic coming from mobile devices, mobile-first design isn't just a trend—it's a business necessity.",
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-02-20",
    keywords: "mobile-first design strategy, prioritize mobile users, importance of mobile-first, mobile web traffic statistics, business website mobile priority, mobile-first vs responsive, designing for smartphone users, improved mobile UX",
    content: `
      <p>Mobile traffic dominates - design accordingly.</p>
      
      <h2>Start with Mobile</h2>
      <p>Build base layout for small screens first.</p>
      
      <h2>Progressive Enhancement</h2>
      <p>Add features for larger devices.</p>
      
      <h2>Performance Focus</h2>
      <p>Optimize for mobile speeds and data usage.</p>
    `,
    category: "Web Design",
    tags: ["Mobile-First", "UX", "Responsive", "Business"],
    technology: ["CSS", "Mobile", "Design"],
    publishedAt: "2025-02-20T13:00:00Z",
    metaTitle: "Mobile-First Design for Business Websites | DMiraki",
    metaDescription: "Prioritize mobile users for better business results.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "5 min read"
  },
  {
    id: "9",
    title: "E-commerce Website Essentials: Building a Profitable Online Store in 2025",
    excerpt: "E-commerce continues to grow exponentially, with global online sales expected to reach $8 trillion by 2026.",
    coverImage: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-05-12",
    keywords: "e-commerce website essentials 2025, build a profitable online store, global online sales trends, e-commerce growth, starting an online store, best e-commerce platforms, e-commerce business tips, website for online sales",
    content: `
      <p>Key elements for successful e-commerce sites.</p>
      
      <h2>Product Catalog</h2>
      <p>Clear, searchable product listings.</p>
      
      <h2>Secure Checkout</h2>
      <p>Trustworthy payment processing.</p>
      
      <h2>Customer Support</h2>
      <p>Easy help and returns process.</p>
    `,
    category: "E-commerce",
    tags: ["E-commerce", "Online Store", "Sales", "Payments"],
    technology: ["Shopify", "WooCommerce", "Next.js"],
    publishedAt: "2025-05-12T14:00:00Z",
    metaTitle: "E-commerce Essentials 2025 | DMiraki",
    metaDescription: "Build a profitable online store with these essentials.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "6 min read"
  },
  {
    id: "10",
    title: "Serverless Architecture: The Future of Scalable Web Applications",
    excerpt: "Explore how serverless architecture is revolutionizing web development with automatic scaling, cost efficiency, and enhanced reliability.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    date: "2025-02-26",
    keywords: "serverless architecture, scalable web applications, serverless computing benefits, automatic scaling web, cost-efficiency serverless, FaaS (Function as a Service), serverless reliability, future of backend development",
    content: `
      <p>Serverless simplifies deployment and scaling.</p>
      
      <h2>Automatic Scaling</h2>
      <p>Handle traffic spikes without manual intervention.</p>
      
      <h2>Cost Efficiency</h2>
      <p>Pay only for actual usage.</p>
      
      <h2>Enhanced Reliability</h2>
      <p>Built-in redundancy and failover.</p>
    `,
    category: "Backend",
    tags: ["Serverless", "AWS Lambda", "Scaling", "Cost"],
    technology: ["Serverless", "FaaS", "Cloud"],
    publishedAt: "2025-02-26T16:00:00Z",
    metaTitle: "Serverless Architecture for Web Apps | DMiraki",
    metaDescription: "Revolutionize development with serverless scaling and efficiency.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "5 min read"
  },
  {
    id: "11",
    title: "WebAssembly (WASM): High-Performance Web Applications Revolution",
    excerpt: "Discover how WebAssembly is revolutionizing web development by enabling high-performance applications to run in browsers at near-native speeds.",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-03-05",
    keywords: "WebAssembly (WASM), high-performance web applications, WASM in browsers, near-native speed web, WebAssembly development, future of web performance, WASM use cases, revolutionizing web apps",
    content: `
      <p>WASM brings native performance to the web.</p>
      
      <h2>Near-Native Speeds</h2>
      <p>Run code at speeds close to native applications.</p>
      
      <h2>Language Agnostic</h2>
      <p>Compile from C++, Rust, etc., to web.</p>
      
      <h2>Future Potential</h2>
      <p>Enable complex apps in browsers.</p>
    `,
    category: "Web Development",
    tags: ["WASM", "Performance", "Browser", "Native"],
    technology: ["WebAssembly", "Rust", "C++"],
    publishedAt: "2025-03-05T09:00:00Z",
    metaTitle: "WebAssembly Revolution in Web Apps | DMiraki",
    metaDescription: "High-performance web apps with WASM near-native speeds.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "4 min read"
  },
  {
    id: "12",
    title: "Local SEO for Business Websites: Dominating Your Local Market Online",
    excerpt: "Master local SEO strategies for business websites to dominate local search results and attract more customers from your geographic area.",
    coverImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-02-26",
    keywords: "local SEO for business website, dominate local search results, local market online presence, attract local customers, Google My Business SEO, local search strategies, map pack ranking, optimizing for local market",
    content: `
      <p>Local SEO targets nearby customers.</p>
      
      <h2>Google My Business</h2>
      <p>Optimize your local listing.</p>
      
      <h2>Local Keywords</h2>
      <p>Use location-specific terms.</p>
      
      <h2>Reviews Management</h2>
      <p>Encourage and respond to reviews.</p>
    `,
    category: "SEO",
    tags: ["Local SEO", "Google My Business", "Local Search", "Reviews"],
    technology: ["SEO", "Google", "Local"],
    publishedAt: "2025-02-26T10:00:00Z",
    metaTitle: "Local SEO Strategies for Business Websites | DMiraki",
    metaDescription: "Dominate local search and attract nearby customers.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "5 min read"
  },
  {
    id: "13",
    title: "Website Performance Optimization: Speed Strategies That Drive Business Results",
    excerpt: "Learn essential website performance optimization strategies to improve speed, user experience, and business results with proven techniques.",
    coverImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-06-23",
    keywords: "website performance optimization, website speed strategies, core web vitals improvement, performance for business results, boost website speed, user experience optimization, page load time reduction, web performance metrics",
    content: `
      <p>Speed impacts user retention and SEO.</p>
      
      <h2>Core Web Vitals</h2>
      <p>Focus on LCP, FID, CLS metrics.</p>
      
      <h2>Image Optimization</h2>
      <p>Compress and lazy-load images.</p>
      
      <h2>Caching Strategies</h2>
      <p>Implement browser and server caching.</p>
    `,
    category: "Performance",
    tags: ["Performance", "Speed", "Optimization", "Core Web Vitals"],
    technology: ["Next.js", "Image Optimization", "Caching"],
    publishedAt: "2025-06-23T17:00:00Z",
    metaTitle: "Website Performance Optimization Strategies | DMiraki",
    metaDescription: "Improve speed and business results with performance techniques.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "6 min read"
  },
  {
    id: "14",
    title: "Modern Development Frameworks 2025: Choosing the Right Tech Stack",
    excerpt: "Navigate the modern development framework landscape in 2025 with insights on React, Vue, Angular, and choosing the right tech stack for your project.",
    coverImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    date: "2025-05-02",
    keywords: "modern development frameworks 2025, choosing the right tech stack, React vs Vue vs Angular, frontend framework comparison, best development frameworks, MERN stack vs MEVN stack, project tech stack decision, web development landscape 2025",
    content: `
      <p>Choose frameworks that fit your needs.</p>
      
      <h2>React Ecosystem</h2>
      <p>Component-based with large community.</p>
      
      <h2>Vue Flexibility</h2>
      <p>Progressive framework for various sizes.</p>
      
      <h2>Angular Enterprise</h2>
      <p>Full-featured for large applications.</p>
    `,
    category: "Frameworks",
    tags: ["React", "Vue", "Angular", "Tech Stack"],
    technology: ["React", "Vue", "Angular", "JavaScript"],
    publishedAt: "2025-05-02T12:00:00Z",
    metaTitle: "Modern Frameworks 2025: Tech Stack Guide | DMiraki",
    metaDescription: "Choose the right framework for your project in 2025.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "7 min read"
  },
  {
    id: "15",
    title: "The Business Case for Custom Web Development vs Templates in 2025",
    excerpt: "Understand when to choose custom web development vs templates for your business, covering costs, benefits, scalability, and strategic considerations.",
    coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-07-19",
    keywords: "custom web development vs templates, business case for custom development, custom website benefits, template limitations, cost of custom website, web development scalability, choosing a website solution, strategic web development",
    content: `
      <p>Custom vs templates: pros and cons.</p>
      
      <h2>Custom Benefits</h2>
      <p>Tailored to specific needs, scalable.</p>
      
      <h2>Template Advantages</h2>
      <p>Quick setup, lower initial cost.</p>
      
      <h2>Strategic Choice</h2>
      <p>Consider long-term business goals.</p>
    `,
    category: "Web Development",
    tags: ["Custom Development", "Templates", "Scalability", "Business"],
    technology: ["Custom Code", "Templates", "Strategy"],
    publishedAt: "2025-07-19T15:00:00Z",
    metaTitle: "Custom Web Development vs Templates 2025 | DMiraki",
    metaDescription: "Decide between custom development and templates for your business.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "5 min read"
  }
];

export function generateStaticParams() {
  return blogs.map((blog) => ({ id: blog.id }));
}

export function getBlogById(id: string) {
  return blogs.find((blog) => blog.id === id);
}
