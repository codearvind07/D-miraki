import { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ChevronLeft, Feather, Send, LayoutList } from "lucide-react";

// --- Optimized & Refined Blog Content ---
const blog13 = {
  id: "13",
  title: "Website Performance Optimization: Speed Strategies That Drive Business Results",
  content: `
  <h2><b>The Need for Speed: Why Performance Equals Profit</b></h2>
  <p>In the hyper-competitive digital landscape of 2025, website performance isn't just a technical consideration—it's a business imperative. A one-second delay in page load time can result in a 7% reduction in conversions, making performance optimization directly tied to revenue.</p>
  <ul class="list-disc list-inside">
    <li>Google uses page speed as a ranking factor, directly impacting your search visibility</li>
    <li>53% of mobile users abandon sites that take longer than 3 seconds to load</li>
    <li>Fast websites have higher user engagement, better retention, and increased conversions</li>
  </ul>

  <blockquote>
    Website performance optimization is like tuning a race car—every millisecond counts, and small improvements can lead to dramatic results.
  </blockquote>

  <h2>Core Web Vitals: The Metrics That Matter</h2>
  <p>Google's Core Web Vitals represent the essential metrics for measuring user experience quality. Optimizing for these metrics improves both user satisfaction and search rankings.</p>
  <ul class="list-disc list-inside">
    <li>Largest Contentful Paint (LCP) measures loading performance—aim for under 2.5 seconds</li>
    <li>First Input Delay (FID) measures interactivity—target under 100 milliseconds</li>
    <li>Cumulative Layout Shift (CLS) measures visual stability—keep it under 0.1</li>
  </ul>

  <h2>Image Optimization: Reducing the Largest Resource Burden</h2>
  <p>Images typically account for 60-80% of a webpage's total bytes, making image optimization one of the most impactful performance improvements you can make.</p>
  <ul class="list-disc list-inside">
    <li>Choose modern image formats like WebP or AVIF for better compression</li>
    <li>Implement responsive images with srcset to serve appropriately sized images</li>
    <li>Use lazy loading to defer off-screen images until they're needed</li>
  </ul>

  <h2>Caching Strategies: Serving Content at Lightning Speed</h2>
  <p>Effective caching strategies can reduce server load and deliver content to users almost instantaneously, especially for repeat visitors.</p>
  <ul class="list-disc list-inside">
    <li>Implement browser caching to store static assets locally on users' devices</li>
    <li>Use server-side caching to reduce database queries and processing time</li>
    <li>Leverage Content Delivery Networks (CDNs) to serve content from locations closer to users</li>
  </ul>

  <h2>Code Optimization: Streamlining the Foundation</h2>
  <p>Clean, efficient code is the backbone of high-performance websites. Optimizing your codebase can yield significant performance improvements.</p>
  <ul class="list-disc list-inside">
    <li>Minify CSS, JavaScript, and HTML to reduce file sizes</li>
    <li>Remove unused code and dependencies to reduce bundle sizes</li>
    <li>Implement code splitting to load only necessary JavaScript for each page</li>
  </ul>

  <h2>Performance Monitoring: Continuous Improvement</h2>
  <p>Website performance optimization is an ongoing process that requires continuous monitoring and refinement to maintain optimal results.</p>
  <ul class="list-disc list-inside">
    <li>Use tools like Google PageSpeed Insights and Lighthouse for regular performance audits</li>
    <li>Implement real-user monitoring to understand actual performance experienced by visitors</li>
    <li>Set up automated testing to catch performance regressions before they reach production</li>
  </ul>
  `,
  excerpt:
    "Learn essential website performance optimization strategies to improve speed, user experience, and business results with proven techniques.",
  coverImage:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  tags: "Performance,Speed,Optimization,Core Web Vitals,User Experience,Web Development,Loading Time,SEO",
  technology: ["Next.js", "Image Optimization", "Caching", "Performance", "SEO"],
  category: "Performance",
  publishedAt: "2025-06-23T17:00:00Z",
  metaTitle: "Website Performance Optimization: Speed Strategies That Drive Business Results | DMiraki Blog",
  metaDescription:
    "Learn essential website performance optimization strategies to improve speed, user experience, and business results with proven techniques.",
  author: {
    name: "DMiraki Team",
    bio: "Web performance experts and user experience specialists.",
  },
  readingTime: "7 min read",
};

// --- Metadata ---
export async function generateMetadata(): Promise<Metadata> {
  const blog = blog13;
  const canonical = `https://dmiraki.com/blogs/website-performance-optimization-speed-strategies-that-drive-business-results`;
  
  // Primary and secondary SEO keywords
  const seoKeywords = [
    "website performance optimization",
    "website speed optimization",
    "Core Web Vitals",
    "page load speed",
    "website optimization techniques",
    "improve website performance",
    "web performance best practices",
    "site speed optimization",
    "performance optimization strategies",
    "website loading time",
    "user experience optimization",
    "SEO performance",
    "web page optimization",
    "performance testing",
    "website speed test",
    "optimize website for speed",
    "web performance metrics",
    "loading speed improvement",
    "website optimization tools",
    "performance audit",
    "Google PageSpeed Insights",
    "Lighthouse optimization",
    "web performance monitoring",
    "website speed tips",
    "performance optimization 2025"
  ];
  
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: [
      "website performance",
      "speed optimization",
      "Core Web Vitals",
      "DMiraki",
      ...blog.technology,
      ...blog.tags.split(","),
      ...seoKeywords
    ],
    authors: [{ name: blog.author.name }],
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
    alternates: { canonical },
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      type: "article",
      url: canonical,
      siteName: "DMiraki",
      images: [
        {
          url: blog.coverImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        }
      ],
      publishedTime: blog.publishedAt,
      authors: [blog.author.name],
      tags: blog.tags.split(","),
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.coverImage],
      site: "@dmiraki",
    },
  };
}

// --- Helper ---
const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

// --- Blog Page ---
export default function Blog13() {
  const tableOfContents = [
    { title: "The Need for Speed", id: "the-need-for-speed-why-performance-equals-profit" },
    { title: "Core Web Vitals", id: "core-web-vitals-the-metrics-that-matter" },
    { title: "Image Optimization", id: "image-optimization-reducing-the-largest-resource-burden" },
    { title: "Caching Strategies", id: "caching-strategies-serving-content-at-lightning-speed" },
    { title: "Code Optimization", id: "code-optimization-streamlining-the-foundation" },
    { title: "Performance Monitoring", id: "performance-monitoring-continuous-improvement" },
  ];

  return (
    <>
      {/* JSON-LD Structured Data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://dmiraki.com/blogs/website-performance-optimization-speed-strategies-that-drive-business-results"
            },
            "headline": blog13.title,
            "description": blog13.excerpt,
            "image": blog13.coverImage,
            "author": {
              "@type": "Organization",
              "name": blog13.author.name,
              "url": "https://dmiraki.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "DMiraki",
              "logo": {
                "@type": "ImageObject",
                "url": "https://dmiraki.com/logo.png"
              }
            },
            "datePublished": blog13.publishedAt,
            "dateModified": blog13.publishedAt,
            "articleSection": blog13.category,
            "keywords": blog13.tags,
            "wordCount": "820"
          })
        }}
      />
      
      {/* Main */}
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronLeft className="w-3 h-3 rotate-180" />
          <Link href="/blogs" className="hover:text-white">Articles</Link>
          <ChevronLeft className="w-3 h-3 rotate-180" />
          <span className="text-gray-200 truncate">{blog13.title}</span>
        </nav>

        {/* Blog Header */}
        <article className="max-w-4xl mx-auto mb-12">
          <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-semibold uppercase bg-blue-900/50 text-blue-300">
            {blog13.category}
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {blog13.title}
          </h1>

          <p className="text-xl text-gray-400 mb-8 italic">{blog13.excerpt}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center ring-2 ring-blue-400/50">
                <Feather className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="font-semibold text-white">{blog13.author.name}</p>
                <p className="text-xs text-blue-400">{blog13.author.bio}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-gray-500" />
                <time dateTime={blog13.publishedAt}>{formatDate(blog13.publishedAt)}</time>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{blog13.readingTime}</span>
              </span>
            </div>
          </div>

          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
            <img src={blog13.coverImage} alt={blog13.title} className="w-full h-64 md:h-[450px] object-cover" />
          </div>
        </article>

        {/* Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <article
              className="prose prose-lg dark:prose-invert max-w-none prose-h2:text-3xl prose-p:text-gray-300 prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:bg-blue-900/20 prose-blockquote:pl-4"
              dangerouslySetInnerHTML={{ __html: blog13.content }}
            />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-20 space-y-8">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h4 className="font-bold text-lg text-white mb-4 flex items-center space-x-2">
                  <LayoutList className="w-5 h-5 text-blue-400" />
                  <span>On This Page</span>
                </h4>
                <nav className="space-y-3">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-400 hover:text-blue-400 transition-colors font-medium hover:pl-1"
                    >
                      {index + 1}. {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
                <h4 className="font-semibold text-white mb-4 flex items-center space-x-2">
                  <Send className="w-5 h-5 text-blue-400" />
                  <span>Share this article</span>
                </h4>
                <div className="flex flex-col space-y-2">
                  {["LinkedIn", "Twitter", "Facebook"].map((platform) => (
                    <button
                      key={platform}
                      className="w-full py-2 bg-blue-600/20 text-blue-400 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      Share on {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}