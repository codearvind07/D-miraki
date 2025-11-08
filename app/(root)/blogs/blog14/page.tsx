import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ChevronLeft, Feather, Send, LayoutList } from "lucide-react";

// --- Optimized & Refined Blog Content ---
const blog14 = {
  id: "14",
  title: "Modern Development Frameworks 2025: Choosing the Right Tech Stack",
  content: `
  <h2><b>The Framework Landscape: Navigating 2025's Development Ecosystem</b></h2>
  <p>The modern web development landscape in 2025 offers an overwhelming array of frameworks and libraries, each promising to solve different problems and optimize for various use cases. Choosing the right tech stack is crucial for project success, developer productivity, and long-term maintainability.</p>
  <ul class="list-disc list-inside">
    <li>React continues to dominate the frontend ecosystem with its component-based architecture</li>
    <li>Vue.js offers a balanced approach between simplicity and powerful features</li>
    <li>Angular provides a comprehensive solution for large-scale enterprise applications</li>
  </ul>

  <blockquote>
    Choosing a development framework is like choosing a vehicle—it's not about picking the most popular one, but the one that best fits your journey.
  </blockquote>

  <h2>React Ecosystem: The Component Revolution</h2>
  <p>React's component-based architecture and virtual DOM have revolutionized frontend development, making it the most popular choice for modern web applications in 2025.</p>
  <ul class="list-disc list-inside">
    <li>Rich ecosystem of libraries and tools that accelerate development</li>
    <li>Strong community support with extensive documentation and tutorials</li>
    <li>Seamless integration with modern build tools and state management solutions</li>
  </ul>

  <h2>Vue.js Flexibility: The Progressive Framework</h2>
  <p>Vue.js strikes a balance between React's flexibility and Angular's comprehensive features, making it an excellent choice for projects of varying complexity.</p>
  <ul class="list-disc list-inside">
    <li>Gentle learning curve that makes it accessible to developers of all skill levels</li>
    <li>Progressive adoption model allows incremental integration into existing projects</li>
    <li>Excellent documentation and developer experience with built-in tooling</li>
  </ul>

  <h2>Angular Enterprise: The Full-Featured Solution</h2>
  <p>Angular provides a complete framework solution with strong opinions and built-in features, making it ideal for large-scale enterprise applications with complex requirements.</p>
  <ul class="list-disc list-inside">
    <li>Batteries-included approach with built-in solutions for routing, forms, and HTTP requests</li>
    <li>Strong typing with TypeScript enhances code quality and maintainability</li>
    <li>Comprehensive testing utilities and dependency injection system</li>
  </ul>

  <h2>Specialized Frameworks: Solving Specific Problems</h2>
  <p>Beyond the major frameworks, specialized tools have emerged to address specific development challenges and use cases.</p>
  <ul class="list-disc list-inside">
    <li>Svelte's compile-time optimization delivers exceptional performance for lightweight applications</li>
    <li>Next.js and Nuxt.js provide full-stack capabilities with server-side rendering and static generation</li>
    <li>Electron enables cross-platform desktop application development using web technologies</li>
  </ul>

  <h2>Making the Right Choice: Framework Selection Criteria</h2>
  <p>Selecting the appropriate framework requires careful consideration of project requirements, team expertise, and long-term goals.</p>
  <ul class="list-disc list-inside">
    <li>Evaluate your team's existing skills and learning capacity</li>
    <li>Consider project complexity, timeline, and scalability requirements</li>
    <li>Assess the framework's community support and long-term viability</li>
  </ul>
  `,
  excerpt:
    "Navigate the modern development framework landscape in 2025 with insights on React, Vue, Angular, and choosing the right tech stack for your project.",
  coverImage:
    "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  tags: "React,Vue,Angular,Tech Stack,Web Development,Frameworks,JavaScript,Frontend",
  technology: ["React", "Vue", "Angular", "JavaScript", "TypeScript"],
  category: "Frameworks",
  publishedAt: "2025-05-02T12:00:00Z",
  metaTitle: "Modern Development Frameworks 2025: Choosing the Right Tech Stack | DMiraki Blog",
  metaDescription:
    "Navigate the modern development framework landscape in 2025 with insights on React, Vue, Angular, and choosing the right tech stack for your project.",
  author: {
    name: "DMiraki Team",
    bio: "Full-stack development experts and framework specialists.",
  },
  readingTime: "7 min read",
};

// --- Metadata ---
export async function generateMetadata(): Promise<Metadata> {
  const blog = blog14;
  const canonical = `https://dmiraki.com/blogs/modern-development-frameworks-2025-choosing-the-right-tech-stack`;
  
  // Primary and secondary SEO keywords
  const seoKeywords = [
    "development frameworks",
    "tech stack selection",
    "React vs Vue vs Angular",
    "frontend frameworks 2025",
    "JavaScript frameworks",
    "web development frameworks",
    "framework comparison",
    "best development frameworks",
    "React development",
    "Vue.js development",
    "Angular development",
    "framework performance",
    "framework scalability",
    "framework learning curve",
    "enterprise frameworks",
    "modern web frameworks",
    "framework ecosystem",
    "development stack",
    "frontend development",
    "framework best practices",
    "Next.js vs Nuxt.js",
    "Svelte framework",
    "framework adoption",
    "framework trends 2025",
    "choosing a framework"
  ];
  
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: [
      "development frameworks",
      "tech stack",
      "web development",
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
export default function Blog14() {
  const tableOfContents = [
    { title: "The Framework Landscape", id: "the-framework-landscape-navigating-2025s-development-ecosystem" },
    { title: "React Ecosystem", id: "react-ecosystem-the-component-revolution" },
    { title: "Vue.js Flexibility", id: "vuejs-flexibility-the-progressive-framework" },
    { title: "Angular Enterprise", id: "angular-enterprise-the-full-featured-solution" },
    { title: "Specialized Frameworks", id: "specialized-frameworks-solving-specific-problems" },
    { title: "Making the Right Choice", id: "making-the-right-choice-framework-selection-criteria" },
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
              "@id": "https://dmiraki.com/blogs/modern-development-frameworks-2025-choosing-the-right-tech-stack"
            },
            "headline": blog14.title,
            "description": blog14.excerpt,
            "image": blog14.coverImage,
            "author": {
              "@type": "Organization",
              "name": blog14.author.name,
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
            "datePublished": blog14.publishedAt,
            "dateModified": blog14.publishedAt,
            "articleSection": blog14.category,
            "keywords": blog14.tags,
            "wordCount": "780"
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

          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 relative h-64 md:h-[450px]">
            <Image src={blog14.coverImage} alt={blog14.title} className="object-cover" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={true} loading="eager" />
          </div>
        </article>

        {/* Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <article
              className="prose prose-lg dark:prose-invert max-w-none prose-h2:text-3xl prose-p:text-gray-300 prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:bg-blue-900/20 prose-blockquote:pl-4"
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