import { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ChevronLeft, Feather, Send, LayoutList } from "lucide-react";

// --- Optimized & Refined Blog Content ---
const blog13 = {
  id: "13",
  title: "Website Performance Optimization: Speed Strategies That Drive Business Results",
  content: `
  <h2><b>Why Website Speed Matters</b></h2>
  <ul class="list-disc list-inside">
    <li>Website speed directly impacts user experience, search rankings, and business revenue</li>
    <li>A 1-second delay in page load time can reduce conversions by 7%</li>
    <li>Increased bounce rates significantly affect your bottom line</li>
  </ul>

  <h2>Core Web Vitals</h2>
  <ul class="list-disc list-inside">
    <li>Google's Core Web Vitals (LCP, FID, CLS) are official ranking factors</li>
    <li>Optimizing these metrics improves search visibility</li>
    <li>Provides better user experiences across all devices</li>
  </ul>

  <h2>Image Optimization Techniques</h2>
  <ul class="list-disc list-inside">
    <li>Modern image formats like WebP and AVIF reduce file sizes significantly</li>
    <li>Lazy loading defers offscreen images until needed</li>
    <li>Responsive images and proper compression maintain quality while reducing size</li>
  </ul>

  <h2>Caching and CDN Strategies</h2>
  <ul class="list-disc list-inside">
    <li>Browser caching stores static resources locally for returning visitors</li>
    <li>Server-side caching reduces database queries and processing time</li>
    <li>Content Delivery Networks (CDNs) serve content from locations closer to users</li>
  </ul>

  <h2>Code Optimization</h2>
  <ul class="list-disc list-inside">
    <li>Minifying CSS/JavaScript removes unnecessary characters</li>
    <li>Eliminating render-blocking resources speeds up initial page display</li>
    <li>Code splitting and tree shaking reduce bundle sizes</li>
  </ul>

  <h2>Measuring and Monitoring</h2>
  <ul class="list-disc list-inside">
    <li>Tools like Google PageSpeed Insights provide actionable optimization suggestions</li>
    <li>GTmetrix offers detailed performance analysis and waterfall charts</li>
    <li>Real user monitoring tracks actual visitor experiences</li>
  </ul>
  `,
  excerpt: "Learn essential website performance optimization strategies to improve speed, user experience, and business results with proven techniques.",
  coverImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  tags: "Website Performance,Page Speed,Core Web Vitals,Optimization,User Experience",
  technology: ["Performance", "Optimization", "Core Web Vitals", "User Experience"],
  category: "Performance",
  publishedAt: "2025-06-23T10:45:00Z",
  metaTitle: "Website Performance Optimization: Speed Strategies That Drive Business Results | DMiraki Blog",
  metaDescription: "Learn essential website performance optimization strategies to improve speed, user experience, and business results with proven techniques.",
  author: {
    name: "DMiraki Team",
    bio: "Web performance experts focused on delivering lightning-fast digital experiences.",
  },
  readingTime: "7 min read",
};

// --- Metadata ---
export async function generateMetadata(): Promise<Metadata> {
  const blog = blog13;
  const canonical = `https://dmiraki.com/blogs/website-performance-optimization`;
  
  // Primary and secondary SEO keywords
  const seoKeywords = [
    "website performance optimization",
    "website speed optimization",
    "improve website load time",
    "website performance best practices",
    "fast website strategies",
    "website optimization for business",
    "website speed and conversions",
    "optimize website performance 2025",
    "high-performance websites",
    "web performance techniques",
    "how to speed up your website",
    "website optimization tips for businesses",
    "improving user experience with fast websites",
    "image optimization for faster loading",
    "caching strategies for website speed",
    "reducing website page load time",
    "mobile website performance optimization",
    "performance metrics for websites",
    "website performance monitoring tools",
    "speed optimization techniques for e-commerce",
    "Core Web Vitals",
    "browser caching and compression",
    "lazy loading images and videos",
    "minifying CSS and JavaScript",
    "server response time improvement",
    "CDN usage for faster websites",
    "mobile-first performance optimization",
    "UX and website speed correlation",
    "AMP (Accelerated Mobile Pages)",
    "modern web performance trends 2025"
  ];
  
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: [
      "website performance",
      "page speed",
      "core web vitals",
      "optimization",
      "DMiraki",
      ...blog.technology,
      ...blog.tags.split(","),
      ...seoKeywords
    ],
    alternates: { canonical },
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      type: "article",
      url: canonical,
      siteName: "DMiraki",
      images: [{ url: blog.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.coverImage],
      creator: "@dmiraki",
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
    { title: "Why Website Speed Matters", id: "why-website-speed-matters" },
    { title: "Core Web Vitals", id: "core-web-vitals" },
    { title: "Image Optimization Techniques", id: "image-optimization-techniques" },
    { title: "Caching and CDN Strategies", id: "caching-and-cdn-strategies" },
    { title: "Code Optimization", id: "code-optimization" },
    { title: "Measuring and Monitoring", id: "measuring-and-monitoring" },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200">
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
              className="prose prose-lg dark:prose-invert max-w-none prose-h2:text-3xl prose-p:text-gray-300 prose-blockquote:border-l-4 prose-blockquote:border-blue-400"
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
                    <Link
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-400 hover:text-blue-400 transition-colors font-medium hover:pl-1"
                    >
                      {index + 1}. {item.title}
                    </Link>
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
    </div>
  );
}