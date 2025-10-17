import { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ChevronLeft, Feather, Send, LayoutList } from "lucide-react";

// --- Optimized & Refined Blog Content ---
const blog6 = {
  id: "6",
  title: "Responsive Web Design: Creating Seamless Experiences Across All Devices",
  content: `
  <h2>The Mobile-First Imperative</h2>
  <p>In 2025, mobile devices account for over 65% of all web traffic. This fundamental shift in user behavior makes mobile-first design not just a best practice, but a business necessity. Responsive web design ensures your website delivers an optimal experience regardless of screen size or device type.</p>
  <ul class="list-disc list-inside">
    <li>Mobile devices generate 65% of all web traffic in 2025</li>
    <li>57% of users won't recommend a business with a poorly designed mobile site</li>
    <li>Mobile-first indexing is Google's primary approach for ranking websites</li>
    <li>Responsive design improves SEO and reduces bounce rates</li>
  </ul>

  <h2>Core Principles of Responsive Design</h2>
  <p>Responsive web design is built on three core principles that work together to create flexible, adaptive experiences. Understanding these principles is essential for creating websites that perform consistently across all devices.</p>
  <ul class="list-disc list-inside">
    <li>Fluid grids that adapt to any screen size</li>
    <li>Flexible images that scale appropriately</li>
    <li>Media queries for device-specific styling</li>
    <li>Content prioritization for different viewports</li>
  </ul>

  <blockquote>
    📱 Design Philosophy: Start with the smallest screen and work your way up, ensuring core functionality on mobile before enhancing for larger screens.
  </blockquote>

  <h2>Flexible Layout Systems</h2>
  <p>Modern CSS layout systems like Flexbox and CSS Grid have revolutionized how we create responsive designs. These technologies provide powerful tools for building complex, adaptive layouts without the limitations of older techniques.</p>
  <ul class="list-disc list-inside">
    <li>CSS Grid for complex two-dimensional layouts</li>
    <li>Flexbox for one-dimensional flexible arrangements</li>
    <li>CSS Container Queries for component-level responsiveness</li>
    <li>Custom properties for themeable, scalable designs</li>
  </ul>

  <blockquote>
    🧱 Technical Insight: Modern layout systems eliminate the need for floats and complex clearfix solutions, making responsive design more intuitive and maintainable.
  </blockquote>

  <h2>Image Optimization and Performance</h2>
  <p>Images often account for the largest portion of a webpage's file size. Proper image optimization is crucial for maintaining performance across all devices while ensuring visual quality.</p>
  <ul class="list-disc list-inside">
    <li>Responsive images with srcset and sizes attributes</li>
    <li>Modern formats like WebP and AVIF for better compression</li>
    <li>Lazy loading for improved initial page performance</li>
    <li>Art direction for device-specific image crops</li>
  </ul>

  <blockquote>
    🚀 Performance Tip: Use the picture element for art direction and srcset for resolution switching to deliver perfectly sized images to every device.
  </blockquote>

  <h2>Typography That Scales</h2>
  <p>Readable typography is fundamental to user experience, especially on small screens. Responsive typography ensures text remains legible and aesthetically pleasing across all devices.</p>
  <ul class="list-disc list-inside">
    <li>Fluid typography with CSS clamp() for scalable text</li>
    <li>Modular scale systems for consistent hierarchy</li>
    <li>Line length optimization for readability (45-75 characters)</li>
    <li>Contrast ratios that meet accessibility standards</li>
  </ul>

  <blockquote>
    🔤 Accessibility Focus: Proper typography not only improves readability but also ensures your content is accessible to users with visual impairments.
  </blockquote>

  <h2>Touch Interface Considerations</h2>
  <p>Mobile devices require different interaction patterns than desktop computers. Designing for touch involves considerations that go beyond simply resizing elements.</p>
  <ul class="list-disc list-inside">
    <li>Minimum 44px touch targets for fingers</li>
    <li>Adequate spacing between interactive elements</li>
    <li>Gestural interactions and swipe navigation</li>
    <li>Reduced hover states dependency for mobile</li>
  </ul>

  <blockquote>
    👆 User Experience: Touch-friendly design isn't just about bigger buttons—it's about creating intuitive interactions that feel natural on mobile devices.
  </blockquote>

  <h2>Testing and Quality Assurance</h2>
  <p>With countless device combinations and screen sizes, thorough testing is essential for ensuring your responsive design works as intended across all user scenarios.</p>
  <ul class="list-disc list-inside">
    <li>Cross-browser testing on multiple platforms</li>
    <li>Real device testing vs. emulators</li>
    <li>Performance testing across different network conditions</li>
    <li>Accessibility auditing for inclusive design</li>
  </ul>

  <blockquote>
    🧪 Quality Assurance: Automated testing tools can catch many issues, but manual testing on real devices remains irreplaceable for validating user experience.
  </blockquote>

  <h2>Future Trends in Responsive Design</h2>
  <p>As technology evolves, so do the possibilities for responsive web design. Emerging trends are pushing the boundaries of what's possible in creating truly adaptive experiences.</p>
  <ul class="list-disc list-inside">
    <li>Container queries for component-level responsiveness</li>
    <li>Dynamic viewport units for more precise control</li>
    <li>Adaptive loading based on device capabilities</li>
    <li>AI-assisted responsive design tools</li>
  </ul>

  <h2>Conclusion: Responsive Design as a Foundation</h2>
  <p>In 2025, responsive web design is no longer a nice-to-have feature—it's the foundation upon which all successful digital experiences are built. By prioritizing mobile-first design, leveraging modern layout systems, and optimizing for performance, businesses can create websites that serve users effectively across the entire spectrum of devices and contexts.</p>
  <ul class="list-disc list-inside">
    <li>Responsive design directly impacts user engagement and conversion rates</li>
    <li>Mobile-first approach ensures core functionality works on all devices</li>
    <li>Modern CSS tools make responsive design more powerful than ever</li>
    <li>Thorough testing is essential for delivering consistent experiences</li>
  </ul>
  `,
  excerpt: "In 2025, mobile devices account for over 65% of all web traffic. Learn how to create seamless responsive web designs that deliver optimal experiences across all devices and screen sizes.",
  coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  tags: "Responsive Design,Mobile First,Web Development,User Experience,CSS,Accessibility,Performance",
  technology: ["CSS Grid", "Flexbox", "Media Queries", "Web Performance", "Accessibility"],
  category: "Web Development",
  publishedAt: "2025-03-15T00:00:00Z",
  metaTitle: "Responsive Web Design: Creating Seamless Experiences Across All Devices | DMiraki",
  metaDescription: "Master responsive web design principles to ensure your website looks and functions perfectly on desktops, tablets, and smartphones in 2025.",
  author: {
    name: "DMiraki Team",
    bio: "Experts in web development and user experience",
  },
  readingTime: "10 min read",
};

// --- Metadata ---
export async function generateMetadata(): Promise<Metadata> {
  const blog = blog6;
  const canonical = `https://dmiraki.com/blogs/responsive-web-design-creating-seamless-experiences`;
  
  // Primary and secondary SEO keywords
  const seoKeywords = [
    "responsive web design",
    "mobile-friendly website design",
    "seamless user experience",
    "responsive design best practices",
    "web design for all devices",
    "adaptive web design",
    "cross-device website optimization",
    "mobile-first responsive design",
    "modern responsive websites",
    "user-friendly web design",
    "how to create a responsive website",
    "benefits of responsive web design",
    "responsive web design techniques 2025",
    "designing websites for multiple devices",
    "importance of mobile responsiveness",
    "responsive design and user engagement",
    "optimizing websites for smartphones and tablets",
    "responsive layout using CSS and Flexbox",
    "responsive design trends 2025",
    "improving UX with responsive design",
    "fluid grid layouts",
    "flexible images and media queries",
    "viewport meta tag",
    "responsive UI components",
    "accessibility in responsive design",
    "CSS Grid and Flexbox",
    "website performance optimization",
    "UX/UI consistency across platforms",
    "adaptive vs responsive design",
    "modern front-end frameworks for responsiveness"
  ];
  
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: [
      "responsive design",
      "mobile first",
      "web development",
      "user experience",
      "CSS",
      "accessibility",
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

export default function Blog6() {
  const tableOfContents = [
    { title: "The Mobile-First Imperative", id: "mobile-first-imperative" },
    { title: "Core Principles of Responsive Design", id: "core-principles-responsive-design" },
    { title: "Flexible Layout Systems", id: "flexible-layout-systems" },
    { title: "Image Optimization and Performance", id: "image-optimization-performance" },
    { title: "Typography That Scales", id: "typography-scales" },
    { title: "Touch Interface Considerations", id: "touch-interface-considerations" },
    { title: "Testing and Quality Assurance", id: "testing-quality-assurance" },
    { title: "Future Trends in Responsive Design", id: "future-trends-responsive-design" },
    { title: "Conclusion: Responsive Design as a Foundation", id: "conclusion-responsive-design-foundation" },
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

          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
            <img src={blog6.coverImage} alt={blog6.title} className="w-full h-64 md:h-[450px] object-cover" />
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

    </div>
  );
}