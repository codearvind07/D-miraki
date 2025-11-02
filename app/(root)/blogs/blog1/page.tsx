import { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ChevronLeft, Feather, Send, LayoutList } from "lucide-react";

// --- Optimized & Refined Blog Content ---
const blog1 = {
  id: "1",
  title: "Why Every Business Needs a Professional Website in 2025",
  content: `
  <h2><b>First Impressions: Your Digital Handshake</b></h2>
  <p>Let's face it when someone hears about your business, the first thing they do is look you up online. If they find a dated or poorly designed site or worse, nothing at all your credibility takes an immediate hit. Your website is your digital storefront, and how it looks sets the tone for your brand.</p>
  <ul class="list-disc list-inside">
    <li>If your online presence looks unprofessional, customers may assume your business isn't trustworthy or well-managed.</li>
    <li>A modern, well-designed site with intuitive navigation signals that you're legitimate and ready for business.</li>
    <li>First impressions happen in seconds. Make sure those seconds work for you, not against you.</li>
  </ul>

  <blockquote>
    Think of your website as your brand's most reliable, perfectly dressed representative always welcoming, always ready.
  </blockquote>

  <h2>Always Open: Your 24/7 Sales Representative</h2>
  <p>Your website never sleeps. It works day and night to showcase your products, answer questions, and convert visitors into customers. In a global digital economy, being accessible 24/7 means you're not missing out on opportunities when you're offline.</p>
  <ul class="list-disc list-inside">
    <li>Your website serves customers across time zones, enabling growth beyond your local market.</li>
    <li>It's a tireless platform that answers questions, takes inquiries, and builds awareness around the clock.</li>
    <li>In many cases, your website is your most productive team member always working, never needing a break.</li>
  </ul>

  <h2>Build Trust and Establish Authority</h2>
  <p>Today's digital audience is cautious and informed. A professional website helps you build trust, display authenticity, and show that you're a credible business worth engaging with.</p>
  <ul class="list-disc list-inside">
    <li>Showcase testimonials, client logos, and case studies to prove your track record.</li>
    <li>Use HTTPS and professional branding to show customers you care about security and detail.</li>
    <li>Share blogs, insights, and thought leadership content to position your business as an industry expert.</li>
  </ul>

  <h2>The Command Center for All Your Marketing</h2>
  <p>Every digital marketing effort SEO, social media, Google Ads, email campaigns leads back to your website. It's where curiosity turns into conversions.</p>
  <ul class="list-disc list-inside">
    <li>It's the foundation for your SEO strategy, helping you appear in search results where your audience is looking.</li>
    <li>Your website lets you track performance, gather analytics, and refine marketing decisions based on real data.</li>
    <li>It's where potential leads finally become paying customers, making it your most powerful digital asset.</li>
  </ul>

  <h2>Future-Proof Your Brand</h2>
  <p>The digital landscape is evolving rapidly with new technologies like AI, voice search, and automation. A professional website ensures your business stays adaptable and ready for whatever comes next.</p>
  <ul class="list-disc list-inside">
    <li>Modern sites integrate with CRMs, chatbots, and analytics tools to improve efficiency.</li>
    <li>They allow seamless updates as trends evolve, keeping your business ahead of competitors.</li>
    <li>Investing in a future-ready site today means saving time and money tomorrow.</li>
  </ul>
  `,
  excerpt:
    "In 2025, your website is more than an online presence it's your business's first impression, credibility builder, and 24/7 salesperson. Learn why you can't afford to skip it.",
  coverImage:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2070&q=80",
  tags: "Business Website,Digital Marketing,Online Presence,Web Development 2025,Credibility,SEO",
  technology: ["Next.js", "Tailwind CSS", "SEO", "UX Design", "Digital Growth"],
  category: "Business Strategy",
  publishedAt: "2025-01-15T14:30:00Z",
  metaTitle: "Why Every Business Needs a Professional Website in 2025 | DMiraki Blog",
  metaDescription:
    "In 2025, a professional website isn't optional it's essential. Learn how a modern, responsive website helps build credibility, reach customers 24/7, and drive business growth.",
  author: {
    name: "DMiraki Team",
    bio: "Digital strategists and web developers helping brands grow online.",
  },
  readingTime: "7 min read",
};

// --- Metadata ---
export async function generateMetadata(): Promise<Metadata> {
  const blog = blog1;
  const canonical = `https://dmiraki.com/blogs/why-every-business-needs-a-professional-website-in-2025`;
  
  // Primary and secondary SEO keywords
  const seoKeywords = [
    "professional website for business",
    "why businesses need a website",
    "importance of a business website in 2025",
    "business website benefits",
    "website for small business 2025",
    "online presence for business",
    "professional web design services",
    "company website importance",
    "digital presence for businesses",
    "why your business needs a website",
    "how a professional website helps business growth",
    "reasons every business needs a website in 2025",
    "benefits of having a professional website",
    "business credibility through websites",
    "website vs social media for business",
    "cost of professional website design 2025",
    "website development for startups",
    "SEO benefits of professional websites",
    "mobile-friendly website for business",
    "impact of websites on customer trust",
    "business website trends 2025",
    "responsive web design",
    "modern business branding online",
    "website conversion optimization",
    "user experience design",
    "website maintenance and security",
    "website ROI for small businesses"
  ];
  
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: [
      "business website 2025",
      "professional website design",
      "digital presence",
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
export default function Blog1() {
  const tableOfContents = [
    { title: "Digital Handshake: First Impressions", id: "first-impressions-your-digital-handshake" },
    { title: "24/7 Sales Rep: Always Open", id: "always-open-your-24-7-sales-representative" },
    { title: "Build Trust & Authority", id: "build-trust-and-establish-authority" },
    { title: "Marketing Command Center", id: "the-command-center-for-all-your-marketing" },
    { title: "Future-Proof Your Brand", id: "future-proof-your-brand" },
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
              "@id": "https://dmiraki.com/blogs/why-every-business-needs-a-professional-website-in-2025"
            },
            "headline": blog1.title,
            "description": blog1.excerpt,
            "image": blog1.coverImage,
            "author": {
              "@type": "Organization",
              "name": blog1.author.name,
              "url": "https://dmiraki.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "DMiraki",
              "logo": {
                "@type": "ImageObject",
                "url": "https://dmiraki.com/assets/icon.png"
              }
            },
            "datePublished": blog1.publishedAt,
            "dateModified": blog1.publishedAt,
            "articleBody": blog1.content.replace(/<[^>]*>/g, ''), // Strip HTML tags for structured data
            "keywords": blog1.tags,
            "articleSection": blog1.category,
            "wordCount": blog1.content.split(/\s+/).length
          })
        }}
      />
      
      <div className="min-h-screen bg-black text-gray-200">
        {/* Breadcrumb for better SEO */}
        <nav className="container mx-auto px-4 py-4 text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex space-x-2">
            <li><Link href="/" className="hover:text-white hover:underline">Home</Link></li>
            <li className="before:content-['/'] before:mx-2"><Link href="/blogs" className="hover:text-white hover:underline">Articles</Link></li>
            <li className="before:content-['/'] before:mx-2 text-gray-200">{blog1.title}</li>
          </ol>
        </nav>
        
        {/* Main */}
        <main className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
          {/* Blog Header */}
          <article className="max-w-4xl mx-auto mb-12">
            <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-semibold uppercase bg-blue-900/50 text-blue-300">
              {blog1.category}
            </span>

            {/* Added H1 tag for SEO */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              {blog1.title}
            </h1>

            <p className="text-xl text-gray-400 mb-8 italic">{blog1.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center ring-2 ring-blue-400/50">
                  <Feather className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">{blog1.author.name}</p>
                  <p className="text-xs text-blue-400">{blog1.author.bio}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <time dateTime={blog1.publishedAt}>{formatDate(blog1.publishedAt)}</time>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>{blog1.readingTime}</span>
                </span>
              </div>
            </div>

            <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
              <img src={blog1.coverImage} alt={blog1.title} className="w-full h-64 md:h-[450px] object-cover" loading="eager" />
            </div>
          </article>

          {/* Content & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <article
                className="prose prose-lg dark:prose-invert max-w-none prose-h2:text-3xl prose-p:text-gray-300 prose-blockquote:border-l-4 prose-blockquote:border-blue-400"
                dangerouslySetInnerHTML={{ __html: blog1.content }}
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
          
          {/* FAQ Section for better SEO */}
          <section className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-xl font-semibold mb-2 text-white">Why is a professional website important for my business in 2025?</h3>
                <p className="text-gray-400">A professional website serves as your digital storefront, establishing credibility, building trust, and providing 24/7 access to your products or services. In 2025, having a modern, responsive website is essential for staying competitive.</p>
              </div>
              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-xl font-semibold mb-2 text-white">How much does a professional website cost?</h3>
                <p className="text-gray-400">The cost varies depending on your business needs, but investing in a professional website is one of the best ROI decisions you can make. At DMiraki, we offer customized solutions to fit your budget and business goals.</p>
              </div>
              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-xl font-semibold mb-2 text-white">How long does it take to build a website?</h3>
                <p className="text-gray-400">Most professional websites take 4-12 weeks to develop, depending on complexity. With DMiraki's streamlined process, we ensure timely delivery without compromising quality.</p>
              </div>
            </div>
          </section>
          
          {/* Additional Navigation Links */}
          <section className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Explore Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/code-and-build/web-design-and-development" className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-6 rounded-xl hover:shadow-lg transition-all border border-blue-700/50">
                <h3 className="text-xl font-semibold mb-2 text-white">Web Design & Development</h3>
                <p className="text-gray-400">Create a stunning, high-converting website that represents your brand perfectly.</p>
              </Link>
              <Link href="/brand-and-reach/search-engine-optimization" className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 p-6 rounded-xl hover:shadow-lg transition-all border border-purple-700/50">
                <h3 className="text-xl font-semibold mb-2 text-white">SEO Services</h3>
                <p className="text-gray-400">Improve your search engine rankings and drive more organic traffic to your site.</p>
              </Link>
              <Link href="/contact-us" className="bg-gradient-to-br from-green-900/50 to-green-800/50 p-6 rounded-xl hover:shadow-lg transition-all border border-green-700/50">
                <h3 className="text-xl font-semibold mb-2 text-white">Get in Touch</h3>
                <p className="text-gray-400">Ready to elevate your digital presence? Let's discuss your project.</p>
              </Link>
            </div>
          </section>
          
          {/* Related Articles */}
          <section className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blogs/blog2" className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-white">Next.js 15: The Future of React Development is Here</h3>
                <p className="text-gray-400 mb-4">Explore the revolutionary features of Next.js 15 including Turbopack, enhanced App Router, and built-in performance monitoring tools.</p>
                <span className="text-blue-400 hover:underline">Read More →</span>
              </Link>
              <Link href="/blogs/blog3" className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-white">The ROI of Professional Web Design: Numbers That Matter</h3>
                <p className="text-gray-400 mb-4">Learn how professional web design delivers measurable ROI through increased conversions, reduced acquisition costs, and long-term value creation.</p>
                <span className="text-blue-400 hover:underline">Read More →</span>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}