import { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ChevronLeft, Feather, Send, LayoutList } from "lucide-react";

// --- Optimized & Refined Blog Content ---
const blog8 = {
  id: "8",
  title: "Mobile-First Design: Why Your Business Website Must Prioritize Mobile Users",
  content: `
  <h2><b>The Mobile-First Imperative: Designing for the Dominant Platform</b></h2>
  <p>In 2025, mobile devices account for over 70% of global web traffic, making mobile-first design not just a trend but a fundamental business requirement. Companies that don't prioritize mobile users are essentially ignoring the majority of their potential customers.</p>
  <ul class="list-disc list-inside">
    <li>Mobile users have different needs and behaviors compared to desktop users, requiring specialized design approaches</li>
    <li>Google's mobile-first indexing means your mobile site directly impacts your search engine rankings</li>
    <li>Mobile-first design naturally leads to better performance and user experience across all devices</li>
  </ul>

  <blockquote>
    Mobile-first design is like building a house starting with the foundation—you create a strong base that everything else can build upon.
  </blockquote>

  <h2>Content Prioritization: What Matters Most on Small Screens</h2>
  <p>Mobile screens have limited real estate, forcing designers to make tough decisions about what content is essential. This constraint actually leads to better, more focused websites.</p>
  <ul class="list-disc list-inside">
    <li>Identify your core value propositions and ensure they're immediately visible above the fold</li>
    <li>Streamline navigation to reduce cognitive load and make it easier for users to find what they need</li>
    <li>Eliminate non-essential elements that don't contribute to your primary business goals</li>
  </ul>

  <h2>Touch-Friendly Interactions: Designing for Fingers, Not Cursors</h2>
  <p>Mobile devices are controlled by touch, not mouse clicks, requiring a completely different approach to user interface design. Touch-friendly interfaces are more intuitive and accessible.</p>
  <ul class="list-disc list-inside">
    <li>Ensure interactive elements are large enough to be easily tapped (minimum 44px)</li>
    <li>Provide adequate spacing between buttons to prevent accidental taps</li>
    <li>Implement gesture-based interactions like swiping and pinching where appropriate</li>
  </ul>

  <h2>Performance Optimization: Speed Matters More on Mobile</h2>
  <p>Mobile users are often on slower networks and less powerful devices, making performance optimization critical for mobile success. A slow mobile site can lose up to 50% of potential customers.</p>
  <ul class="list-disc list-inside">
    <li>Optimize images and videos for mobile bandwidth constraints</li>
    <li>Minimize JavaScript and CSS to reduce load times</li>
    <li>Implement lazy loading for content that's not immediately visible</li>
  </ul>

  <h2>Context-Aware Design: Leveraging Mobile Capabilities</h2>
  <p>Mobile devices offer unique capabilities like GPS, camera, and accelerometer that can enhance user experiences when used thoughtfully.</p>
  <ul class="list-disc list-inside">
    <li>Use geolocation to provide personalized, location-based content and services</li>
    <li>Enable camera integration for features like barcode scanning or photo uploads</li>
    <li>Consider device orientation changes and how they affect your layout</li>
  </ul>

  <h2>Testing and Iteration: Ensuring Mobile Excellence</h2>
  <p>Mobile-first design requires ongoing testing and refinement to ensure optimal experiences across the vast landscape of mobile devices and browsers.</p>
  <ul class="list-disc list-inside">
    <li>Test on actual devices, not just emulators, to understand real-world performance</li>
    <li>Use analytics to identify pain points and areas for improvement</li>
    <li>Regularly update your design based on changing user behaviors and device capabilities</li>
  </ul>
  `,
  excerpt:
    "With over 60% of web traffic coming from mobile devices, mobile-first design isn't just a trend—it's a business necessity.",
  coverImage:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  tags: "Mobile-First,UX,Responsive Design,Web Development,User Experience,Mobile Optimization,Touch Design",
  technology: ["CSS", "Mobile", "Design", "User Experience", "Performance"],
  category: "Web Design",
  publishedAt: "2025-02-20T13:00:00Z",
  metaTitle: "Mobile-First Design: Why Your Business Website Must Prioritize Mobile Users | DMiraki Blog",
  metaDescription:
    "With over 60% of web traffic coming from mobile devices, mobile-first design isn't just a trend—it's a business necessity.",
  author: {
    name: "DMiraki Team",
    bio: "Mobile design experts and user experience specialists.",
  },
  readingTime: "7 min read",
};

// --- Metadata ---
export async function generateMetadata(): Promise<Metadata> {
  const blog = blog8;
  const canonical = `https://dmiraki.com/blogs/mobile-first-design-why-your-business-website-must-prioritize-mobile-users`;
  
  // Primary and secondary SEO keywords
  const seoKeywords = [
    "mobile-first design",
    "mobile website design",
    "mobile user experience",
    "responsive web design",
    "mobile optimization",
    "touch-friendly design",
    "mobile web development",
    "mobile-first strategy",
    "mobile web performance",
    "mobile design principles",
    "mobile-first vs responsive",
    "mobile website best practices",
    "mobile user interface",
    "mobile content strategy",
    "mobile SEO",
    "mobile conversion optimization",
    "mobile accessibility",
    "mobile testing",
    "mobile analytics",
    "mobile design trends 2025",
    "mobile-first indexing",
    "mobile site speed",
    "mobile user behavior",
    "mobile design guidelines",
    "mobile-first approach"
  ];
  
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: [
      "mobile-first design",
      "web development",
      "user experience",
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
export default function Blog8() {
  const tableOfContents = [
    { title: "The Mobile-First Imperative", id: "the-mobile-first-imperative-designing-for-the-dominant-platform" },
    { title: "Content Prioritization", id: "content-prioritization-what-matters-most-on-small-screens" },
    { title: "Touch-Friendly Interactions", id: "touch-friendly-interactions-designing-for-fingers-not-cursors" },
    { title: "Performance Optimization", id: "performance-optimization-speed-matters-more-on-mobile" },
    { title: "Context-Aware Design", id: "context-aware-design-leveraging-mobile-capabilities" },
    { title: "Testing and Iteration", id: "testing-and-iteration-ensuring-mobile-excellence" },
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
              "@id": "https://dmiraki.com/blogs/mobile-first-design-why-your-business-website-must-prioritize-mobile-users"
            },
            "headline": blog8.title,
            "description": blog8.excerpt,
            "image": blog8.coverImage,
            "author": {
              "@type": "Organization",
              "name": blog8.author.name,
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
            "datePublished": blog8.publishedAt,
            "dateModified": blog8.publishedAt,
            "articleSection": blog8.category,
            "keywords": blog8.tags,
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
          <span className="text-gray-200 truncate">{blog8.title}</span>
        </nav>

        {/* Blog Header */}
        <article className="max-w-4xl mx-auto mb-12">
          <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-semibold uppercase bg-blue-900/50 text-blue-300">
            {blog8.category}
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {blog8.title}
          </h1>

          <p className="text-xl text-gray-400 mb-8 italic">{blog8.excerpt}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center ring-2 ring-blue-400/50">
                <Feather className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="font-semibold text-white">{blog8.author.name}</p>
                <p className="text-xs text-blue-400">{blog8.author.bio}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-gray-500" />
                <time dateTime={blog8.publishedAt}>{formatDate(blog8.publishedAt)}</time>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{blog8.readingTime}</span>
              </span>
            </div>
          </div>

          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
            <img src={blog8.coverImage} alt={blog8.title} className="w-full h-64 md:h-[450px] object-cover" />
          </div>
        </article>

        {/* Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <article
              className="prose prose-lg dark:prose-invert max-w-none prose-h2:text-3xl prose-p:text-gray-300 prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:bg-blue-900/20 prose-blockquote:pl-4"
              dangerouslySetInnerHTML={{ __html: blog8.content }}
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