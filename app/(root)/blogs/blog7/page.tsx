import { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ChevronLeft, Feather, Send, LayoutList } from "lucide-react";

// --- Optimized & Refined Blog Content ---
const blog7 = {
  id: "7",
  title: "Progressive Web Apps (PWAs): The Future of Mobile Web Experience",
  content: `
  <h2><b>Breaking Down the PWA Advantage: Best of Both Worlds</b></h2>
  <p>Progressive Web Apps represent a revolutionary approach to web development that combines the reach of the web with the capabilities of native applications. In 2025, PWAs are becoming the preferred choice for businesses looking to deliver app-like experiences without the complexity of multiple platform development.</p>
  <ul class="list-disc list-inside">
    <li>PWAs work on any device with a modern browser, eliminating the need for separate iOS and Android development</li>
    <li>Users can install PWAs directly from the browser without going through app stores</li>
    <li>PWAs automatically update, ensuring users always have the latest version without manual intervention</li>
  </ul>

  <blockquote>
    PWAs are like digital chameleons—they adapt to their environment, providing the optimal experience whether accessed through a browser or installed as a standalone app.
  </blockquote>

  <h2>Service Workers: The Magic Behind Offline Functionality</h2>
  <p>Service workers are the backbone of PWA functionality, acting as programmable network proxies that intercept network requests and provide offline capabilities. This technology is what enables PWAs to work in unpredictable network conditions.</p>
  <ul class="list-disc list-inside">
    <li>Service workers cache critical resources to ensure the app works even when the network is unavailable</li>
    <li>They enable background sync, allowing data to be sent when connectivity is restored</li>
    <li>Push notifications through service workers keep users engaged even when the app isn't open</li>
  </ul>

  <h2>The App Shell Model: Lightning-Fast Initial Loads</h2>
  <p>The app shell architecture separates the core application structure from its content, allowing PWAs to load instantly on repeat visits. This approach mimics the performance of native apps by keeping the UI framework cached locally.</p>
  <ul class="list-disc list-inside">
    <li>The app shell includes the minimal HTML, CSS, and JavaScript required to power the user interface</li>
    <li>Dynamic content is loaded separately, reducing initial load times significantly</li>
    <li>Strategic caching of the app shell ensures consistent performance across network conditions</li>
  </ul>

  <h2>Push Notifications: Engaging Users Like Native Apps</h2>
  <p>One of the most powerful features of PWAs is their ability to send push notifications, keeping users engaged and bringing them back to your application. This capability was previously exclusive to native apps.</p>
  <ul class="list-disc list-inside">
    <li>Users must opt-in to receive notifications, respecting their privacy preferences</li>
    <li>Notifications can be personalized based on user behavior and preferences</li>
    <li>Rich media support allows for engaging, visually appealing notifications</li>
  </ul>

  <h2>Performance Optimization: Delivering Native App Speeds</h2>
  <p>PWAs are designed for performance from the ground up, leveraging modern web technologies to deliver experiences that rival native applications.</p>
  <ul class="list-disc list-inside">
    <li>Lazy loading ensures only necessary resources are loaded when needed</li>
    <li>Code splitting reduces initial bundle sizes for faster first loads</li>
    <li>Smart caching strategies minimize network requests and maximize speed</li>
  </ul>

  <h2>Implementation Best Practices for 2025</h2>
  <p>Creating successful PWAs requires following established best practices and leveraging modern development tools to ensure optimal user experiences.</p>
  <ul class="list-disc list-inside">
    <li>Start with a mobile-first approach to ensure core functionality works on all devices</li>
    <li>Implement a comprehensive testing strategy across different browsers and devices</li>
    <li>Monitor performance metrics continuously to identify and address bottlenecks</li>
  </ul>
  `,
  excerpt:
    "Explore how Progressive Web Apps combine the best of web and mobile applications, delivering app-like experiences through web browsers.",
  coverImage:
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  tags: "PWA,Progressive Web Apps,Mobile,Web Development,Service Workers,Offline,Push Notifications,App Shell",
  technology: ["JavaScript", "PWA", "Service Workers", "Next.js", "Web Development"],
  category: "Web Development",
  publishedAt: "2025-04-05T11:00:00Z",
  metaTitle: "Progressive Web Apps (PWAs): The Future of Mobile Web Experience | DMiraki Blog",
  metaDescription:
    "Explore how Progressive Web Apps combine the best of web and mobile applications, delivering app-like experiences through web browsers.",
  author: {
    name: "DMiraki Team",
    bio: "Web application development experts and PWA specialists.",
  },
  readingTime: "8 min read",
};

// --- Metadata ---
export async function generateMetadata(): Promise<Metadata> {
  const blog = blog7;
  const canonical = `https://dmiraki.com/blogs/progressive-web-apps-the-future-of-mobile-web-experience`;
  
  // Primary and secondary SEO keywords
  const seoKeywords = [
    "progressive web apps",
    "PWA development",
    "mobile web applications",
    "offline web apps",
    "service workers",
    "web app vs native app",
    "installable web apps",
    "app-like web experiences",
    "PWA benefits",
    "web development 2025",
    "progressive web app examples",
    "PWA performance",
    "web app installation",
    "push notifications web",
    "app shell model",
    "background sync PWA",
    "responsive web apps",
    "cross-platform web apps",
    "web app advantages",
    "PWA best practices",
    "modern web development",
    "web app optimization",
    "user engagement PWA",
    "web app conversion",
    "PWA case studies"
  ];
  
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: [
      "PWA",
      "web development",
      "mobile apps",
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
export default function Blog7() {
  const tableOfContents = [
    { title: "The PWA Advantage", id: "breaking-down-the-pwa-advantage-best-of-both-worlds" },
    { title: "Service Workers", id: "service-workers-the-magic-behind-offline-functionality" },
    { title: "App Shell Model", id: "the-app-shell-model-lightning-fast-initial-loads" },
    { title: "Push Notifications", id: "push-notifications-engaging-users-like-native-apps" },
    { title: "Performance Optimization", id: "performance-optimization-delivering-native-app-speeds" },
    { title: "Implementation Best Practices", id: "implementation-best-practices-for-2025" },
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
              "@id": "https://dmiraki.com/blogs/progressive-web-apps-the-future-of-mobile-web-experience"
            },
            "headline": blog7.title,
            "description": blog7.excerpt,
            "image": blog7.coverImage,
            "author": {
              "@type": "Organization",
              "name": blog7.author.name,
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
            "datePublished": blog7.publishedAt,
            "dateModified": blog7.publishedAt,
            "articleSection": blog7.category,
            "keywords": blog7.tags,
            "wordCount": "890"
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
          <span className="text-gray-200 truncate">{blog7.title}</span>
        </nav>

        {/* Blog Header */}
        <article className="max-w-4xl mx-auto mb-12">
          <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-semibold uppercase bg-blue-900/50 text-blue-300">
            {blog7.category}
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {blog7.title}
          </h1>

          <p className="text-xl text-gray-400 mb-8 italic">{blog7.excerpt}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center ring-2 ring-blue-400/50">
                <Feather className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="font-semibold text-white">{blog7.author.name}</p>
                <p className="text-xs text-blue-400">{blog7.author.bio}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-gray-500" />
                <time dateTime={blog7.publishedAt}>{formatDate(blog7.publishedAt)}</time>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{blog7.readingTime}</span>
              </span>
            </div>
          </div>

          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
            <img src={blog7.coverImage} alt={blog7.title} className="w-full h-64 md:h-[450px] object-cover" />
          </div>
        </article>

        {/* Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <article
              className="prose prose-lg dark:prose-invert max-w-none prose-h2:text-3xl prose-p:text-gray-300 prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:bg-blue-900/20 prose-blockquote:pl-4"
              dangerouslySetInnerHTML={{ __html: blog7.content }}
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