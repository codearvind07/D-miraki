import { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ChevronLeft, Feather, Send, LayoutList } from "lucide-react";

// --- Optimized & Refined Blog Content ---
const blog5 = {
  id: "5",
  title: "Cybersecurity Best Practices for Business Websites in 2025",
  content: `
  <h2><b>SSL Implementation: The Foundation of Web Security</b></h2>
  <p>In 2025, having a secure website isn't just about protecting data—it's about building trust with your customers. SSL certificates are the first line of defense, encrypting data between your users and your server.</p>
  <ul class="list-disc list-inside">
    <li>Always use HTTPS instead of HTTP to ensure all data transmission is encrypted</li>
    <li>Implement HSTS (HTTP Strict Transport Security) to force browsers to only connect via HTTPS</li>
    <li>Regularly update your SSL certificates before they expire to avoid security warnings</li>
  </ul>

  <blockquote>
    An SSL certificate is like a digital passport for your website—it verifies your identity and ensures safe passage for your visitors' data.
  </blockquote>

  <h2>Regular Updates: Staying Ahead of Vulnerabilities</h2>
  <p>Cyber threats evolve rapidly, and keeping your website updated is crucial for maintaining security. This includes your CMS, plugins, themes, and server software.</p>
  <ul class="list-disc list-inside">
    <li>Set up automated updates for critical security patches whenever possible</li>
    <li>Regularly audit all plugins and remove unused ones that could pose security risks</li>
    <li>Create backups before implementing updates to ensure you can restore your site if needed</li>
  </ul>

  <h2>User Authentication: Protecting Access Points</h2>
  <p>Weak authentication is one of the most common entry points for cyberattacks. Implementing strong user authentication measures is essential for protecting sensitive areas of your website.</p>
  <ul class="list-disc list-inside">
    <li>Enforce strong password policies with complexity requirements and regular changes</li>
    <li>Implement two-factor authentication (2FA) for all administrative accounts</li>
    <li>Use role-based access controls to limit user permissions to only what's necessary</li>
  </ul>

  <h2>Advanced Security Measures for 2025</h2>
  <p>As cyber threats become more sophisticated, businesses need to adopt advanced security measures to stay protected.</p>
  <ul class="list-disc list-inside">
    <li>Deploy a Web Application Firewall (WAF) to filter and block malicious traffic</li>
    <li>Implement rate limiting to prevent brute force attacks and DDoS attempts</li>
    <li>Regularly conduct security audits and penetration testing to identify vulnerabilities</li>
  </ul>

  <h2>Preparing for Security Incidents</h2>
  <p>Even with the best precautions, security incidents can happen. Having a response plan is crucial for minimizing damage and recovery time.</p>
  <ul class="list-disc list-inside">
    <li>Establish a clear incident response procedure with defined roles and responsibilities</li>
    <li>Maintain regular backups stored in secure, separate locations</li>
    <li>Monitor your website continuously for suspicious activity or unauthorized changes</li>
  </ul>
  `,
  excerpt:
    "Essential cybersecurity strategies to protect your business website from threats, including SSL implementation, regular updates, and user authentication.",
  coverImage:
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  tags: "Cybersecurity,SSL,Authentication,Website Security,Web Development 2025,Data Protection,Online Safety",
  technology: ["HTTPS", "Security", "Best Practices", "Web Development", "Data Protection"],
  category: "Security",
  publishedAt: "2025-01-30T12:00:00Z",
  metaTitle: "Cybersecurity Best Practices for Business Websites in 2025 | DMiraki Blog",
  metaDescription:
    "Essential cybersecurity strategies to protect your business website from threats, including SSL implementation, regular updates, and user authentication.",
  author: {
    name: "DMiraki Team",
    bio: "Digital security experts and web developers helping businesses stay protected online.",
  },
  readingTime: "7 min read",
};

// --- Metadata ---
export async function generateMetadata(): Promise<Metadata> {
  const blog = blog5;
  const canonical = `https://dmiraki.com/blogs/cybersecurity-best-practices-for-business-websites-in-2025`;
  
  // Primary and secondary SEO keywords
  const seoKeywords = [
    "cybersecurity best practices",
    "business website security",
    "SSL implementation guide",
    "website security 2025",
    "protect business website",
    "web security strategies",
    "data protection for websites",
    "secure website development",
    "website vulnerability prevention",
    "cyber threat protection",
    "HTTPS security benefits",
    "user authentication security",
    "web application firewall",
    "security audit for websites",
    "website backup strategies",
    "malware protection for websites",
    "DDoS attack prevention",
    "password security best practices",
    "two-factor authentication",
    "security incident response",
    "website security monitoring",
    "penetration testing for websites",
    "security compliance for businesses",
    "risk assessment for websites",
    "cyber insurance for websites"
  ];
  
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: [
      "cybersecurity 2025",
      "website security",
      "business protection",
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
export default function Blog5() {
  const tableOfContents = [
    { title: "SSL Implementation: Security Foundation", id: "ssl-implementation-the-foundation-of-web-security" },
    { title: "Regular Updates: Staying Ahead", id: "regular-updates-staying-ahead-of-vulnerabilities" },
    { title: "User Authentication: Protecting Access", id: "user-authentication-protecting-access-points" },
    { title: "Advanced Security Measures", id: "advanced-security-measures-for-2025" },
    { title: "Preparing for Security Incidents", id: "preparing-for-security-incidents" },
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
              "@id": "https://dmiraki.com/blogs/cybersecurity-best-practices-for-business-websites-in-2025"
            },
            "headline": blog5.title,
            "description": blog5.excerpt,
            "image": blog5.coverImage,
            "author": {
              "@type": "Organization",
              "name": blog5.author.name,
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
            "datePublished": blog5.publishedAt,
            "dateModified": blog5.publishedAt,
            "articleSection": blog5.category,
            "keywords": blog5.tags,
            "wordCount": "850"
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
          <span className="text-gray-200 truncate">{blog5.title}</span>
        </nav>

        {/* Blog Header */}
        <article className="max-w-4xl mx-auto mb-12">
          <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full text-xs font-semibold uppercase bg-blue-900/50 text-blue-300">
            {blog5.category}
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {blog5.title}
          </h1>

          <p className="text-xl text-gray-400 mb-8 italic">{blog5.excerpt}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center ring-2 ring-blue-400/50">
                <Feather className="w-5 h-5 text-blue-300" />
              </div>
              <div>
                <p className="font-semibold text-white">{blog5.author.name}</p>
                <p className="text-xs text-blue-400">{blog5.author.bio}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-gray-500" />
                <time dateTime={blog5.publishedAt}>{formatDate(blog5.publishedAt)}</time>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>{blog5.readingTime}</span>
              </span>
            </div>
          </div>

          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
            <img src={blog5.coverImage} alt={blog5.title} className="w-full h-64 md:h-[450px] object-cover" />
          </div>
        </article>

        {/* Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <article
              className="prose prose-lg dark:prose-invert max-w-none prose-h2:text-3xl prose-p:text-gray-300 prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:bg-blue-900/20 prose-blockquote:pl-4"
              dangerouslySetInnerHTML={{ __html: blog5.content }}
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