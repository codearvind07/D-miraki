import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ChevronLeft, Feather, Send, LayoutList } from "lucide-react";

// --- Optimized & Refined Blog Content ---
const blog12 = {
  id: "12",
  title: "Local SEO for Business Websites: Dominating Your Local Market Online",
  content: `
  <h2><b>The Local Search Revolution: Why Proximity Matters More Than Ever</b></h2>
  <p>Local search has become the cornerstone of modern consumer behavior, with 46% of all Google searches having local intent. For businesses serving specific geographic areas, mastering local SEO is no longer optional—it's essential for survival and growth.</p>
  <ul class="list-disc list-inside">
    <li>76% of people who search for something nearby visit a business within 24 hours</li>
    <li>Local searches convert 40% more often than non-local searches</li>
    <li>Mobile local searches lead to in-store visits 78% of the time</li>
  </ul>

  <blockquote>
    Local SEO is like having a megaphone that only reaches the people who are most likely to become your customers—those right in your backyard.
  </blockquote>

  <h2>Google My Business: Your Local Digital Headquarters</h2>
  <p>Google My Business (GMB) is the foundation of local SEO success, serving as your business's digital storefront in Google's local search results and Maps.</p>
  <ul class="list-disc list-inside">
    <li>Ensure your business information is accurate and consistent across all platforms</li>
    <li>Upload high-quality photos of your business, products, and team</li>
    <li>Respond promptly to customer reviews to show you value customer feedback</li>
  </ul>

  <h2>Local Keyword Strategy: Speaking Your Customers' Language</h2>
  <p>Effective local SEO requires understanding how your target audience searches for businesses like yours in your specific geographic area.</p>
  <ul class="list-disc list-inside">
    <li>Research location-specific keywords that match your customers' search intent</li>
    <li>Optimize your website content with geo-modified keywords naturally</li>
    <li>Create location-specific landing pages for different service areas</li>
  </ul>

  <h2>Online Reviews: Building Trust and Authority</h2>
  <p>Online reviews are a critical ranking factor for local SEO and significantly influence customer purchasing decisions. Managing your online reputation is essential for local success.</p>
  <ul class="list-disc list-inside">
    <li>Encourage satisfied customers to leave positive reviews on Google and other platforms</li>
    <li>Respond professionally to both positive and negative reviews</li>
    <li>Monitor review platforms regularly to stay on top of your reputation</li>
  </ul>

  <h2>Local Link Building: Establishing Community Authority</h2>
  <p>Building relationships with other local businesses and organizations can significantly boost your local SEO efforts through relevant, geographically-focused backlinks.</p>
  <ul class="list-disc list-inside">
    <li>Partner with local organizations, charities, and community groups</li>
    <li>Sponsor local events and ensure you receive proper online recognition</li>
    <li>Get featured in local news outlets and business directories</li>
  </ul>

  <h2>Local Schema Markup: Helping Search Engines Understand Your Business</h2>
  <p>Structured data markup helps search engines better understand your business and can lead to enhanced search results that improve click-through rates.</p>
  <ul class="list-disc list-inside">
    <li>Implement LocalBusiness schema to provide detailed business information</li>
    <li>Include your business hours, address, phone number, and service areas</li>
    <li>Use review and rating schema to highlight positive customer feedback</li>
  </ul>
  `,
  excerpt:
    "Master local SEO strategies for business websites to dominate local search results and attract more customers from your geographic area.",
  coverImage:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  tags: "Local SEO,Google My Business,Local Search,Reviews,Web Development,SEO,Geographic Marketing",
  technology: ["SEO", "Google", "Local", "Schema Markup", "Reviews"],
  category: "SEO",
  publishedAt: "2025-02-26T10:00:00Z",
  metaTitle: "Local SEO for Business Websites: Dominating Your Local Market Online | DMiraki Blog",
  metaDescription:
    "Master local SEO strategies for business websites to dominate local search results and attract more customers from your geographic area.",
  author: {
    name: "DMiraki Team",
    bio: "Local SEO experts and digital marketing strategists.",
  },
  readingTime: "7 min read",
};

// --- Metadata ---
export async function generateMetadata(): Promise<Metadata> {
  const blog = blog12;
  const canonical = `https://dmiraki.com/blogs/local-seo-for-business-websites-dominating-your-local-market-online`;
  
  // Primary and secondary SEO keywords
  const seoKeywords = [
    "local SEO",
    "local search optimization",
    "Google My Business",
    "local business SEO",
    "local search ranking",
    "local SEO strategy",
    "dominate local search",
    "local SEO best practices",
    "local SEO for small business",
    "local search marketing",
    "SEO for local business",
    "local SEO checklist",
    "local SEO tips",
    "local search results",
    "local SEO services",
    "local SEO audit",
    "local SEO keywords",
    "local SEO optimization",
    "local business ranking",
    "local search visibility",
    "Google Maps SEO",
    "local citation building",
    "local link building",
    "local SEO trends 2025",
    "geographic SEO"
  ];
  
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: [
      "local SEO",
      "Google My Business",
      "search optimization",
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
export default function Blog12() {
  const tableOfContents = [
    { title: "The Local Search Revolution", id: "the-local-search-revolution-why-proximity-matters-more-than-ever" },
    { title: "Google My Business", id: "google-my-business-your-local-digital-headquarters" },
    { title: "Local Keyword Strategy", id: "local-keyword-strategy-speaking-your-customers-language" },
    { title: "Online Reviews", id: "online-reviews-building-trust-and-authority" },
    { title: "Local Link Building", id: "local-link-building-establishing-community-authority" },
    { title: "Local Schema Markup", id: "local-schema-markup-helping-search-engines-understand-your-business" },
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
              "@id": "https://dmiraki.com/blogs/local-seo-for-business-websites-dominating-your-local-market-online"
            },
            "headline": blog12.title,
            "description": blog12.excerpt,
            "image": blog12.coverImage,
            "author": {
              "@type": "Organization",
              "name": blog12.author.name,
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
            "datePublished": blog12.publishedAt,
            "dateModified": blog12.publishedAt,
            "articleSection": blog12.category,
            "keywords": blog12.tags,
            "wordCount": "790"
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

          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 relative h-64 md:h-[450px]">
            <Image src={blog12.coverImage} alt={blog12.title} className="object-cover" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={true} loading="eager" />
          </div>
        </article>

        {/* Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <article
              className="prose prose-lg dark:prose-invert max-w-none prose-h2:text-3xl prose-p:text-gray-300 prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:bg-blue-900/20 prose-blockquote:pl-4"
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