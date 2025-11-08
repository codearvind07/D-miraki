import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ChevronLeft, Feather, Send, LayoutList } from "lucide-react";

// --- Optimized & Refined Blog Content ---
const blog6 = {
  id: "6",
  title: "Responsive Web Design: Creating Seamless Experiences Across All Devices",
  content: `
  <h2><b>The Mobile Revolution: Why Responsive Design is Non-Negotiable</b></h2>
  <p>In 2025, over 70% of web traffic comes from mobile devices, making responsive web design not just a nice-to-have but a business necessity. A non-responsive website is essentially turning away the majority of potential customers.</p>
  <ul class="list-disc list-inside">
    <li>Mobile users expect the same quality experience as desktop users, not a scaled-down version</li>
    <li>Google's mobile-first indexing means your mobile site directly impacts your search rankings</li>
    <li>Responsive design future-proofs your website for new devices and screen sizes</li>
  </ul>

  <blockquote>
    Responsive design is like a skilled translator—it ensures your message is perfectly understood, regardless of the language (or device) your audience speaks.
  </blockquote>

  <h2>Flexible Grid Systems: The Backbone of Responsive Layouts</h2>
  <p>Modern responsive design relies on flexible grid systems that adapt to different screen sizes. CSS Grid and Flexbox have revolutionized how we create layouts that work across all devices.</p>
  <ul class="list-disc list-inside">
    <li>Use CSS Grid for complex two-dimensional layouts that rearrange based on screen size</li>
    <li>Implement Flexbox for one-dimensional layouts that need to distribute space and align items</li>
    <li>Create scalable component-based designs that can be reused across different sections</li>
  </ul>

  <h2>Media Queries: Tailoring Experiences to Device Characteristics</h2>
  <p>Media queries allow you to apply different styles based on device characteristics like screen width, height, and orientation. In 2025, we're using more sophisticated media queries than ever before.</p>
  <ul class="list-disc list-inside">
    <li>Use min-width and max-width queries to create breakpoints for different device categories</li>
    <li>Implement orientation queries to optimize layouts for portrait vs. landscape viewing</li>
    <li>Consider device-pixel-ratio queries for high-resolution displays like Retina screens</li>
  </ul>

  <h2>Fluid Images and Media: Maintaining Quality Across Resolutions</h2>
  <p>Images and media are often the heaviest elements on a webpage. Optimizing them for different screen sizes is crucial for both performance and visual quality.</p>
  <ul class="list-disc list-inside">
    <li>Use the 'srcset' attribute to serve different image sizes based on screen resolution</li>
    <li>Implement the 'picture' element for art direction, serving different crops for different viewports</li>
    <li>Choose modern image formats like WebP or AVIF for better compression without quality loss</li>
  </ul>

  <h2>Typography That Scales: Readable Text on Every Device</h2>
  <p>Readable typography is essential for user experience, and responsive typography ensures your text is legible on screens of all sizes.</p>
  <ul class="list-disc list-inside">
    <li>Use relative units like 'em' and 'rem' instead of fixed pixel sizes for scalable typography</li>
    <li>Implement fluid typography with CSS clamp() for smooth size transitions between breakpoints</li>
    <li>Consider line length and spacing to maintain readability on different screen sizes</li>
  </ul>

  <h2>Testing and Optimization: Ensuring Consistent Experiences</h2>
  <p>Creating a responsive website is only half the battle—you need to test it thoroughly across different devices and optimize for performance.</p>
  <ul class="list-disc list-inside">
    <li>Test on real devices whenever possible, not just emulators or browser dev tools</li>
    <li>Use browser developer tools to simulate different screen sizes and network conditions</li>
    <li>Implement responsive testing as part of your continuous integration pipeline</li>
  </ul>
  `,
  excerpt:
    "Master responsive web design principles to ensure your website looks and functions perfectly on desktops, tablets, and smartphones.",
  coverImage:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  tags: "Responsive Design,Mobile,Web Development,CSS,User Experience,Web Design 2025,Fluid Layouts,Media Queries",
  technology: ["CSS", "Media Queries", "Flexbox", "CSS Grid", "Web Design"],
  category: "Web Design",
  publishedAt: "2025-03-15T15:00:00Z",
  metaTitle: "Responsive Web Design: Creating Seamless Experiences Across All Devices | DMiraki Blog",
  metaDescription:
    "Master responsive web design principles to ensure your website looks and functions perfectly on desktops, tablets, and smartphones.",
  author: {
    name: "DMiraki Team",
    bio: "Frontend design experts and responsive web development specialists.",
  },
  readingTime: "8 min read",
};

// --- Metadata ---
export async function generateMetadata(): Promise<Metadata> {
  const blog = blog6;
  const canonical = `https://dmiraki.com/blogs/responsive-web-design-creating-seamless-experiences-across-all-devices`;
  
  // Primary and secondary SEO keywords
  const seoKeywords = [
    "responsive web design",
    "mobile responsive website",
    "responsive design principles",
    "web design for all devices",
    "CSS responsive design",
    "mobile-first design",
    "fluid grid layout",
    "media queries CSS",
    "responsive typography",
    "cross-device web design",
    "mobile optimization",
    "responsive design best practices",
    "device-agnostic web design",
    "responsive layout techniques",
    "web design 2025",
    "mobile web development",
    "responsive breakpoints",
    "flexible images",
    "scalable web design",
    "user experience design",
    "responsive navigation",
    "touch-friendly design",
    "performance responsive design",
    "responsive testing",
    "adaptive web design"
  ];
  
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: [
      "responsive design",
      "web development",
      "mobile optimization",
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
export default function Blog6() {
  const tableOfContents = [
    { title: "The Mobile Revolution", id: "the-mobile-revolution-why-responsive-design-is-non-negotiable" },
    { title: "Flexible Grid Systems", id: "flexible-grid-systems-the-backbone-of-responsive-layouts" },
    { title: "Media Queries", id: "media-queries-tailoring-experiences-to-device-characteristics" },
    { title: "Fluid Images and Media", id: "fluid-images-and-media-maintaining-quality-across-resolutions" },
    { title: "Typography That Scales", id: "typography-that-scales-readable-text-on-every-device" },
    { title: "Testing and Optimization", id: "testing-and-optimization-ensuring-consistent-experiences" },
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
              "@id": "https://dmiraki.com/blogs/responsive-web-design-creating-seamless-experiences-across-all-devices"
            },
            "headline": blog6.title,
            "description": blog6.excerpt,
            "image": blog6.coverImage,
            "author": {
              "@type": "Organization",
              "name": blog6.author.name,
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
            "datePublished": blog6.publishedAt,
            "dateModified": blog6.publishedAt,
            "articleSection": blog6.category,
            "keywords": blog6.tags,
            "wordCount": "920"
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
          <span className="text-gray-200 truncate">{blog6.title}</span>
        </nav>

        {/* Blog Header */}
        <article className="max-w-4xl mx-auto mb-12">
          <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-semibold uppercase bg-blue-900/50 text-blue-300">
            {blog6.category}
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {blog6.title}
          </h1>

          <p className="text-xl text-gray-400 mb-8 italic">{blog6.excerpt}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center ring-2 ring-blue-400/50">
                <Feather className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="font-semibold text-white">{blog6.author.name}</p>
                <p className="text-xs text-blue-400">{blog6.author.bio}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-gray-500" />
                <time dateTime={blog6.publishedAt}>{formatDate(blog6.publishedAt)}</time>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{blog6.readingTime}</span>
              </span>
            </div>
          </div>

          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 relative h-64 md:h-[450px]">
            <Image src={blog6.coverImage} alt={blog6.title} className="object-cover" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={true} loading="eager" />
          </div>
        </article>

        {/* Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <article
              className="prose prose-lg dark:prose-invert max-w-none prose-h2:text-3xl prose-p:text-gray-300 prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:bg-blue-900/20 prose-blockquote:pl-4"
              dangerouslySetInnerHTML={{ __html: blog6.content }}
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