import { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ChevronLeft, Feather, Send, LayoutList } from "lucide-react";

// --- Optimized & Refined Blog Content ---
const blog12 = {
  id: "12",
  title: "Local SEO for Business Websites: Dominating Your Local Market Online",
  content: `
  <h2><b>The Power of Local SEO</b></h2>
  <ul class="list-disc list-inside">
    <li>Local SEO is crucial for businesses serving local markets</li>
    <li>46% of Google searches have local intent</li>
    <li>76% of local searches result in store visits within 24 hours</li>
  </ul>

  <h2>Google My Business Optimization</h2>
  <ul class="list-disc list-inside">
    <li>A complete, optimized Google My Business profile is essential for local visibility</li>
    <li>Accurate information, photos, and regular updates significantly impact local search rankings</li>
    <li>Responding to customer reviews and posting regular updates improves engagement</li>
  </ul>

  <h2>Local Keyword Strategy</h2>
  <ul class="list-disc list-inside">
    <li>Targeting location-specific keywords like "pizza delivery near me" or "Denver dentist" helps businesses appear for high-intent local searches</li>
    <li>Using geo-modifiers in your content increases local relevance</li>
    <li>Long-tail local keywords often have higher conversion rates than broad terms</li>
  </ul>

  <h2>Online Reviews Management</h2>
  <ul class="list-disc list-inside">
    <li>Customer reviews directly impact local rankings and consumer trust</li>
    <li>Actively managing reviews, responding professionally, and encouraging satisfied customers to review boosts local SEO</li>
    <li>Negative reviews should be addressed promptly and professionally to minimize damage</li>
  </ul>

  <h2>Local Content Marketing</h2>
  <ul class="list-disc list-inside">
    <li>Creating content about local events, community involvement, and area-specific topics helps businesses establish local authority</li>
    <li>Local news, seasonal content, and neighborhood guides resonate with local audiences</li>
    <li>Partnering with other local businesses for content creates valuable local links</li>
  </ul>

  <h2>Technical Local SEO</h2>
  <ul class="list-disc list-inside">
    <li>Schema markup, NAP consistency, local citations, and mobile optimization are technical factors that significantly impact local search performance</li>
    <li>Ensuring your website loads quickly and is mobile-friendly is crucial for local search rankings</li>
    <li>Consistent business information across directories builds trust with search engines</li>
  </ul>
  `,
  excerpt: "Master local SEO strategies for business websites to dominate local search results and attract more customers from your geographic area.",
  coverImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  tags: "Local SEO,Google My Business,Local Marketing,Search Optimization,Business Growth",
  technology: ["SEO", "Google My Business", "Local Marketing", "Content Strategy"],
  category: "SEO",
  publishedAt: "2025-02-26T09:15:00Z",
  metaTitle: "Local SEO for Business Websites: Dominating Your Local Market Online | DMiraki Blog",
  metaDescription: "Master local SEO strategies for business websites to dominate local search results and attract more customers from your geographic area.",
  author: {
    name: "DMiraki Team",
    bio: "Digital marketing experts specializing in local SEO strategies.",
  },
  readingTime: "6 min read",
};

// --- Metadata ---
export async function generateMetadata(): Promise<Metadata> {
  const blog = blog12;
  const canonical = `https://dmiraki.com/blogs/local-seo-for-business-websites`;
  
  // Primary and secondary SEO keywords
  const seoKeywords = [
    "local SEO for business websites",
    "local search optimization",
    "improve local business visibility",
    "local SEO strategies",
    "dominate local market online",
    "local business online presence",
    "local SEO 2025",
    "business website local search",
    "local SEO tips for small businesses",
    "local search ranking",
    "how to optimize your business website for local search",
    "Google My Business optimization tips",
    "local SEO techniques for small businesses",
    "increase foot traffic through local SEO",
    "local SEO content strategy",
    "local backlinks and citations",
    "mobile optimization for local search",
    "local keyword research strategies",
    "improve local rankings with SEO",
    "local reviews and reputation management",
    "Google Maps SEO",
    "NAP consistency (Name, Address, Phone)",
    "online business directories",
    "local SEO audit",
    "schema markup for local business",
    "voice search optimization for local businesses",
    "local SEO analytics and reporting",
    "geo-targeted content",
    "customer reviews and ratings",
    "competitive local SEO analysis"
  ];
  
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: [
      "local SEO",
      "Google My Business",
      "local marketing",
      "SEO strategies",
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
export default function Blog12() {
  const tableOfContents = [
    { title: "The Power of Local SEO", id: "the-power-of-local-seo" },
    { title: "Google My Business Optimization", id: "google-my-business-optimization" },
    { title: "Local Keyword Strategy", id: "local-keyword-strategy" },
    { title: "Online Reviews Management", id: "online-reviews-management" },
    { title: "Local Content Marketing", id: "local-content-marketing" },
    { title: "Technical Local SEO", id: "technical-local-seo" },
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
          <span className="text-gray-200 truncate">{blog12.title}</span>
        </nav>

        {/* Blog Header */}
        <article className="max-w-4xl mx-auto mb-12">
          <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-semibold uppercase bg-blue-900/50 text-blue-300">
            {blog12.category}
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {blog12.title}
          </h1>

          <p className="text-xl text-gray-400 mb-8 italic">{blog12.excerpt}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center ring-2 ring-blue-400/50">
                <Feather className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="font-semibold text-white">{blog12.author.name}</p>
                <p className="text-xs text-blue-400">{blog12.author.bio}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-gray-500" />
                <time dateTime={blog12.publishedAt}>{formatDate(blog12.publishedAt)}</time>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{blog12.readingTime}</span>
              </span>
            </div>
          </div>

          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
            <img src={blog12.coverImage} alt={blog12.title} className="w-full h-64 md:h-[450px] object-cover" />
          </div>
        </article>

        {/* Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <article
              className="prose prose-lg dark:prose-invert max-w-none prose-h2:text-3xl prose-p:text-gray-300 prose-blockquote:border-l-4 prose-blockquote:border-blue-400"
              dangerouslySetInnerHTML={{ __html: blog12.content }}
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