import { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ChevronLeft, Feather, Send, LayoutList } from "lucide-react";

// --- Optimized & Refined Blog Content ---
const blog14 = {
  id: "14",
  title: "Modern Development Frameworks 2025: Choosing the Right Tech Stack",
  content: `
  <h2><b>The Framework Landscape in 2025</b></h2>
  <ul class="list-disc list-inside">
    <li>Choosing the right development framework is crucial for project success</li>
    <li>Modern frameworks offer different strengths in performance, developer experience, and ecosystem maturity</li>
    <li>The right choice impacts development speed, maintainability, and scalability</li>
  </ul>

  <h2>Frontend Framework Comparison</h2>
  <ul class="list-disc list-inside">
    <li>React remains dominant with its vast ecosystem and component-based architecture</li>
    <li>Vue.js offers simplicity and flexibility with gentle learning curve</li>
    <li>Angular provides enterprise-grade structure and TypeScript integration</li>
    <li>Svelte delivers exceptional performance with smaller bundles and compile-time optimizations</li>
  </ul>

  <h2>Full-Stack Solutions</h2>
  <ul class="list-disc list-inside">
    <li>Next.js revolutionizes React with server-side rendering and API routes</li>
    <li>Nuxt.js brings similar full-stack capabilities to Vue.js applications</li>
    <li>SvelteKit provides a complete solution for Svelte applications</li>
    <li>These frameworks reduce complexity and improve performance with built-in optimizations</li>
  </ul>

  <h2>Backend Framework Evolution</h2>
  <ul class="list-disc list-inside">
    <li>Node.js with Express remains popular for JavaScript-based backend development</li>
    <li>Fastify offers improved performance and developer experience with minimal overhead</li>
    <li>Deno provides a secure runtime environment with built-in TypeScript support</li>
    <li>Bun delivers exceptional speed with a modern toolkit for JavaScript and TypeScript</li>
  </ul>

  <h2>Mobile Development Trends</h2>
  <ul class="list-disc list-inside">
    <li>React Native enables code sharing across iOS and Android platforms</li>
    <li>Flutter continues to gain popularity with its performant rendering engine</li>
    <li>Native development with Swift and Kotlin remains important for platform-specific features</li>
    <li>Cross-platform solutions reduce development time while maintaining native performance</li>
  </ul>

  <h2>Selection Criteria</h2>
  <ul class="list-disc list-inside">
    <li>Consider team expertise and existing knowledge base</li>
    <li>Evaluate project requirements and performance needs</li>
    <li>Assess community support and long-term maintenance prospects</li>
    <li>Balance innovation with stability for business-critical applications</li>
  </ul>
  `,
  excerpt: "Navigate the modern development framework landscape in 2025 with insights on React, Vue, Angular, and choosing the right tech stack for your project.",
  coverImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  tags: "Development Frameworks,React,Vue,Angular,Tech Stack,Web Development",
  technology: ["React", "Vue", "Angular", "Next.js", "Web Development"],
  category: "Web Development",
  publishedAt: "2025-05-02T13:20:00Z",
  metaTitle: "Modern Development Frameworks 2025: Choosing the Right Tech Stack | DMiraki Blog",
  metaDescription: "Navigate the modern development framework landscape in 2025 with insights on React, Vue, Angular, and choosing the right tech stack for your project.",
  author: {
    name: "DMiraki Team",
    bio: "Full-stack development experts helping businesses choose the right technology stack.",
  },
  readingTime: "8 min read",
};

// --- Metadata ---
export async function generateMetadata(): Promise<Metadata> {
  const blog = blog14;
  const canonical = `https://dmiraki.com/blogs/modern-development-frameworks-2025`;
  
  // Primary and secondary SEO keywords
  const seoKeywords = [
    "modern development frameworks 2025",
    "best web development frameworks",
    "choosing the right tech stack",
    "web development technology trends",
    "full-stack frameworks 2025",
    "front-end and back-end frameworks",
    "modern programming frameworks",
    "web app framework comparison",
    "software development frameworks",
    "framework selection guide",
    "how to choose the right tech stack for web apps",
    "top frameworks for developers in 2025",
    "comparing React, Next.js, Angular, and Vue",
    "full-stack development frameworks guide",
    "framework trends for modern web development",
    "pros and cons of popular web frameworks",
    "backend and frontend framework integration",
    "future-proof development frameworks",
    "best frameworks for scalable applications",
    "choosing frameworks for startup projects",
    "front-end vs back-end frameworks",
    "serverless-friendly frameworks",
    "cross-platform app development frameworks",
    "performance and scalability comparison",
    "open-source web frameworks",
    "developer productivity tools",
    "modern programming languages and frameworks",
    "framework adoption trends 2025",
    "cloud-native frameworks",
    "web development best practices"
  ];
  
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: [
      "development frameworks",
      "tech stack",
      "React",
      "Vue",
      "Angular",
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
export default function Blog14() {
  const tableOfContents = [
    { title: "The Framework Landscape in 2025", id: "the-framework-landscape-in-2025" },
    { title: "Frontend Framework Comparison", id: "frontend-framework-comparison" },
    { title: "Full-Stack Solutions", id: "full-stack-solutions" },
    { title: "Backend Framework Evolution", id: "backend-framework-evolution" },
    { title: "Mobile Development Trends", id: "mobile-development-trends" },
    { title: "Selection Criteria", id: "selection-criteria" },
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
          <span className="text-gray-200 truncate">{blog14.title}</span>
        </nav>

        {/* Blog Header */}
        <article className="max-w-4xl mx-auto mb-12">
          <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-semibold uppercase bg-blue-900/50 text-blue-300">
            {blog14.category}
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {blog14.title}
          </h1>

          <p className="text-xl text-gray-400 mb-8 italic">{blog14.excerpt}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center ring-2 ring-blue-400/50">
                <Feather className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="font-semibold text-white">{blog14.author.name}</p>
                <p className="text-xs text-blue-400">{blog14.author.bio}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-gray-500" />
                <time dateTime={blog14.publishedAt}>{formatDate(blog14.publishedAt)}</time>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{blog14.readingTime}</span>
              </span>
            </div>
          </div>

          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
            <img src={blog14.coverImage} alt={blog14.title} className="w-full h-64 md:h-[450px] object-cover" />
          </div>
        </article>

        {/* Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <article
              className="prose prose-lg dark:prose-invert max-w-none prose-h2:text-3xl prose-p:text-gray-300 prose-blockquote:border-l-4 prose-blockquote:border-blue-400"
              dangerouslySetInnerHTML={{ __html: blog14.content }}
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