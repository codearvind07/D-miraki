import Link from "next/link";
import { Metadata } from 'next';

// Static blog data with more relevant images
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  keywords: string;
}

const blogs: BlogPost[] = [
  {
    id: "1",
    title: "Why Every Business Needs a Professional Website in 2025",
    excerpt: "Discover why having a professional website is crucial for business success in 2025, from building credibility to reaching customers 24/7.",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-01-15",
    keywords: "professional business website, website necessity 2025, why a website is important, small business website, digital presence, online credibility, 24/7 customer reach, business success website"
  },
  {
    id: "2",
    title: "Next.js 15: The Future of React Development is Here",
    excerpt: "Explore the revolutionary features of Next.js 15 including Turbopack, enhanced App Router, and built-in performance monitoring tools.",
    coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-03-22",
    keywords: "Next.js 15 features, React development future, Next.js Turbopack, App Router Next.js 15, Next.js performance monitoring, new Next.js update, server components React, Next.js trends 2025"
  },
  {
    id: "3",
    title: "The ROI of Professional Web Design: Numbers That Matter",
    excerpt: "Learn how professional web design delivers measurable ROI through increased conversions, reduced acquisition costs, and long-term value creation.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-02-08",
    keywords: "ROI of web design, professional web design benefits, measure website ROI, web design conversion rate, web design value, cost of professional website, long-term value web design, design impact on business"
  },
  {
    id: "4",
    title: "AI Integration in Modern Web Applications: Transforming User Experiences",
    excerpt: "Discover how artificial intelligence is revolutionizing web applications with personalized experiences, intelligent automation, and predictive analytics.",
    coverImage: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=996",
    date: "2025-04-10",
    keywords: "AI in web applications, AI transforming user experience, intelligent automation web, personalized web experiences, AI integration strategy, predictive analytics web apps, modern web trends AI, future of web applications"
  },
  {
    id: "5",
    title: "Cybersecurity Best Practices for Business Websites in 2025",
    excerpt: "Essential cybersecurity strategies to protect your business website from threats, including SSL implementation, regular updates, and user authentication.",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-01-30",
    keywords: "cybersecurity for business websites 2025, essential website security, SSL implementation guide, user authentication best practices, protect website from threats, business website security strategy, website updates security, small business cybersecurity"
  },
  {
    id: "6",
    title: "Responsive Web Design: Creating Seamless Experiences Across All Devices",
    excerpt: "Master responsive web design principles to ensure your website looks and functions perfectly on desktops, tablets, and smartphones.",
    coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-03-15",
    keywords: "responsive web design principles, seamless web experience, design across all devices, mobile-friendly design, adaptive design vs responsive, why is responsive design important, desktop tablet smartphone design, fluid web layouts"
  },
  {
    id: "7",
    title: "Progressive Web Apps (PWAs): The Future of Mobile Web Experience",
    excerpt: "Explore how Progressive Web Apps combine the best of web and mobile applications, delivering app-like experiences through web browsers.",
    coverImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-04-05",
    keywords: "Progressive Web Apps (PWAs), PWA benefits, mobile web experience future, web app vs native app, PWA development guide, installable web apps, app-like experiences web, service workers PWA"
  },
  {
    id: "8",
    title: "Mobile-First Design: Why Your Business Website Must Prioritize Mobile Users",
    excerpt: "With over 60% of web traffic coming from mobile devices, mobile-first design isn't just a trend—it's a business necessity.",
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-02-20",
    keywords: "mobile-first design strategy, prioritize mobile users, importance of mobile-first, mobile web traffic statistics, business website mobile priority, mobile-first vs responsive, designing for smartphone users, improved mobile UX"
  },
  {
    id: "9",
    title: "E-commerce Website Essentials: Building a Profitable Online Store in 2025",
    excerpt: "E-commerce continues to grow exponentially, with global online sales expected to reach $8 trillion by 2026.",
    coverImage: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-05-12",
    keywords: "e-commerce website essentials 2025, build a profitable online store, global online sales trends, e-commerce growth, starting an online store, best e-commerce platforms, e-commerce business tips, website for online sales"
  },
  {
    id: "10",
    title: "Serverless Architecture: The Future of Scalable Web Applications",
    excerpt: "Explore how serverless architecture is revolutionizing web development with automatic scaling, cost efficiency, and enhanced reliability.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    date: "2025-02-26",
    keywords: "serverless architecture, scalable web applications, serverless computing benefits, automatic scaling web, cost-efficiency serverless, FaaS (Function as a Service), serverless reliability, future of backend development"
  },
  {
    id: "11",
    title: "WebAssembly (WASM): High-Performance Web Applications Revolution",
    excerpt: "Discover how WebAssembly is revolutionizing web development by enabling high-performance applications to run in browsers at near-native speeds.",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-03-05",
    keywords: "WebAssembly (WASM), high-performance web applications, WASM in browsers, near-native speed web, WebAssembly development, future of web performance, WASM use cases, revolutionizing web apps"
  },
  {
    id: "12",
    title: "Local SEO for Business Websites: Dominating Your Local Market Online",
    excerpt: "Master local SEO strategies for business websites to dominate local search results and attract more customers from your geographic area.",
    coverImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-02-26",
    keywords: "local SEO for business website, dominate local search results, local market online presence, attract local customers, Google My Business SEO, local search strategies, map pack ranking, optimizing for local market"
  },
  {
    id: "13",
    title: "Website Performance Optimization: Speed Strategies That Drive Business Results",
    excerpt: "Learn essential website performance optimization strategies to improve speed, user experience, and business results with proven techniques.",
    coverImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-06-23",
    keywords: "website performance optimization, website speed strategies, core web vitals improvement, performance for business results, boost website speed, user experience optimization, page load time reduction, web performance metrics"
  },
  {
    id: "14",
    title: "Modern Development Frameworks 2025: Choosing the Right Tech Stack",
    excerpt: "Navigate the modern development framework landscape in 2025 with insights on React, Vue, Angular, and choosing the right tech stack for your project.",
    coverImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    date: "2025-05-02",
    keywords: "modern development frameworks 2025, choosing the right tech stack, React vs Vue vs Angular, frontend framework comparison, best development frameworks, MERN stack vs MEVN stack, project tech stack decision, web development landscape 2025"
  },
  {
    id: "15",
    title: "The Business Case for Custom Web Development vs Templates in 2025",
    excerpt: "Understand when to choose custom web development vs templates for your business, covering costs, benefits, scalability, and strategic considerations.",
    coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "2025-07-19",
    keywords: "custom web development vs templates, business case for custom development, custom website benefits, template limitations, cost of custom website, web development scalability, choosing a website solution, strategic web development"
  }
];

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = 'https://dmiraki.com';
  const pageTitle = 'Latest Blogs & Insights | Web Development Trends 2025';
  const pageDescription = 'Explore expert insights on Next.js, AI integration, responsive design, and web performance — stay updated with the latest web development trends.';
  const pageImage = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80';
  const canonicalUrl = `${siteUrl}/blogs`;
  
  // Combine all blog keywords for the main blogs page
  const allKeywords = blogs.flatMap(blog => blog.keywords.split(', ')).join(', ');
  
  // Primary and secondary SEO keywords for digital services
  const serviceKeywords = [
    "website development services",
    "mobile app development",
    "Android app development",
    "iOS app development",
    "SEO services for websites and apps",
    "digital marketing services",
    "online advertising solutions",
    "business growth through digital marketing",
    "professional web and app development",
    "mobile and web solutions 2025",
    "custom website and mobile app development",
    "Android and iOS app optimization",
    "SEO strategies for mobile apps",
    "social media marketing and ads",
    "pay-per-click (PPC) advertising services",
    "app store optimization (ASO) for Android & iOS",
    "digital marketing campaigns for businesses",
    "responsive website design and mobile apps",
    "full-stack web and mobile solutions",
    "marketing automation for online growth",
    "web design and UX/UI",
    "app performance and speed optimization",
    "SEO audit for websites and apps",
    "content marketing and social media ads",
    "mobile-first website strategies",
    "conversion rate optimization (CRO)",
    "local SEO and Google My Business",
    "influencer and performance marketing",
    "retargeting and display ads",
    "analytics and tracking for digital campaigns"
  ].join(', ');

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: `${allKeywords}, ${serviceKeywords}`,
    authors: [{ name: "DMiraki Team" }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      type: "website",
      siteName: "DMiraki",
      locale: "en_US",
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: "DMiraki Blog - Web Development Insights",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      site: "@dmiraki",
    },
  };
}

const Blogs = () => {
  return (
    <>
      {/* Breadcrumbs for better SEO */}
      <nav className="container mx-auto px-4 py-4 text-sm text-gray-600" aria-label="Breadcrumb">
        <ol className="flex space-x-2">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li className="before:content-['/'] before:mx-2">Blogs</li>
        </ol>
      </nav>
      
      <section className="container mx-auto px-4 py-8">
        {/* Blog Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* Added H1 tag for SEO */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight
          inline bg-gradient-to-r bg-clip-text text-transparent
                from-[rgb(255,99,71)] via-[rgb(255,165,0)] to-[rgb(0,191,255)]
                animate-text font-recoleta
          ">
            Insights & Innovations in Web Development
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Stay updated with the latest in frontend technologies, design trends, and best practices from our expert team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="h-48 bg-gradient-to-br from-pink-400 to-yellow-500 relative">
                {post.coverImage ? (
                  <img
                    src={post.coverImage}
                    alt={`${post.title} - blog cover image`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center text-white font-medium">
                    No Image Available
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </p>
                {/* Added H2 tag for SEO */}
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-pink-500 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={`/blogs/blog${post.id}`} className="inline-block">
                  <button 
                    className="mt-4 inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-200"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read More →
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {/* Additional Navigation Links for SEO */}
        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Explore Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/brand-and-reach" className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Brand & Reach</h3>
              <p className="text-gray-600 dark:text-gray-300">Enhance your brand visibility and expand your market reach with our strategic solutions.</p>
            </Link>
            <Link href="/code-and-build" className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Code & Build</h3>
              <p className="text-gray-600 dark:text-gray-300">Transform your ideas into powerful digital solutions with our development expertise.</p>
            </Link>
          </div>
        </section>
        
        {/* FAQ Section for better SEO */}
        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold mb-2">Why are your blogs focused on web development trends for 2025?</h3>
              <p className="text-gray-600">Our blog content is specifically curated to provide insights into the latest technologies and practices that will shape the digital landscape in 2025, helping businesses stay ahead of the curve.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold mb-2">How often do you publish new blog posts?</h3>
              <p className="text-gray-600">We publish new blog posts every week, covering topics such as Next.js, React, AI integration, responsive design, and performance optimization.</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold mb-2">Can I get professional web development services based on your blog insights?</h3>
              <p className="text-gray-600">Absolutely! Our blog content is directly tied to the services we offer at DMiraki. We implement these cutting-edge techniques in our web development projects to deliver exceptional results for our clients.</p>
            </div>
          </div>
        </section>
        
        {/* Related Pages Navigation */}
        <section className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Continue Exploring</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
              About Us
            </Link>
            <Link href="/contact-us" className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
              Contact Us
            </Link>
            <Link href="/brand-and-reach/search-engine-optimization" className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
              SEO Services
            </Link>
            <Link href="/code-and-build/web-design-and-development" className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors">
              Web Development
            </Link>
          </div>
        </section>
      </section>
      
      {/* JSON-LD for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "DMiraki Blog",
            "description": "Expert insights on web development trends, Next.js, AI integration, and responsive design for 2025.",
            "url": "https://dmiraki.com/blogs",
            "publisher": {
              "@type": "Organization",
              "name": "DMiraki",
              "logo": {
                "@type": "ImageObject",
                "url": "https://dmiraki.com/logo.png"
              }
            },
            "blogPost": blogs.map(blog => ({
              "@type": "BlogPosting",
              "headline": blog.title,
              "description": blog.excerpt,
              "datePublished": blog.date,
              "image": blog.coverImage,
              "author": {
                "@type": "Organization",
                "name": "DMiraki Team"
              }
            }))
          })
        }}
      />
    </>
  );
};

export default Blogs;