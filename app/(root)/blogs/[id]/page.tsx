import BlogDetails from "@/components/BlogDetails";
import { Metadata } from "next";
import Link from "next/link";

// Static blog data with enhanced SEO information
const blogs = [
  {
    id: "blog1",
    title: "Why Every Business Needs a Professional Website in 2024",
    excerpt: "Discover why having a professional website is crucial for business success in 2024, from building credibility to reaching customers 24/7.",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Business Strategy",
    tags: "Business Website,Digital Marketing,Online Presence,Web Development",
    technology: ["HTML", "CSS", "JavaScript", "SEO"],
    publishedAt: "2024-01-15T14:30:00Z",
    metaTitle: "Why Every Business Needs a Professional Website in 2024 | DMiraki",
    metaDescription: "Discover why having a professional website is essential for business success in 2024. Learn how to build credibility, reach customers 24/7, and drive growth with effective web design.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "8 min read"
  },
  {
    id: "blog2",
    title: "Next.js 15: The Future of React Development is Here",
    excerpt: "Explore the revolutionary features of Next.js 15 including Turbopack, enhanced App Router, and built-in performance monitoring tools.",
    coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Web Development",
    tags: "Next.js,React,Turbopack,Web Development,Performance",
    technology: ["Next.js", "React", "JavaScript", "TypeScript"],
    publishedAt: "2024-03-22T09:15:00Z",
    metaTitle: "Next.js 15: The Future of React Development is Here | DMiraki",
    metaDescription: "Explore the revolutionary features of Next.js 15 including Turbopack, enhanced App Router, and built-in performance monitoring tools for modern web development.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "6 min read"
  },
  {
    id: "blog3",
    title: "The ROI of Professional Web Design: Numbers That Matter",
    excerpt: "Learn how professional web design delivers measurable ROI through increased conversions, reduced acquisition costs, and long-term value creation.",
    coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Business Strategy",
    tags: "Web Design,ROI,Business Growth,Conversion Rate,Digital Marketing",
    technology: ["UI/UX", "Web Design", "Conversion Optimization"],
    publishedAt: "2024-02-08T16:45:00Z",
    metaTitle: "The ROI of Professional Web Design: Numbers That Matter | DMiraki",
    metaDescription: "Learn how professional web design delivers measurable ROI through increased conversions, reduced acquisition costs, and long-term value creation for your business.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "7 min read"
  }
];

// Generate static params for all blog posts
export async function generateStaticParams() {
  // Return array of {id} objects for each blog
  return [
    { id: "blog1" },
    { id: "blog2" },
    { id: "blog3" },
    { id: "blog4" },
    { id: "blog5" },
    { id: "blog6" },
    { id: "blog7" },
    { id: "blog8" },
    { id: "blog9" },
    { id: "blog10" },
    { id: "blog11" },
    { id: "blog12" },
    { id: "blog13" },
    { id: "blog14" },
    { id: "blog15" },
  ];
}

export async function generateMetadata({
  params,
}: {params:Promise<{id:string}>}): Promise<Metadata> {
  const {id} = await params;
  
  const blog = blogs.find(b => b.id === id);
  
  if (!blog) {
    return {
      title: "Blog not found",
      description: "The requested blog could not be found.",
    };
  }

  const canonical = `https://dmiraki.com/blogs/blog${id}`;

  return {
    title: blog.metaTitle || blog.title || "Blog Details",
    description: blog.metaDescription || blog.excerpt || "Read more about this blog.",
    keywords: [blog.category, ...blog.technology, ...blog.tags.split(',')],
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
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      url: canonical,
      type: 'article',
      publishedTime: blog.publishedAt,
      authors: [blog.author.name],
      tags: blog.tags.split(','),
      images: blog.coverImage
        ? [
            {
              url: blog.coverImage,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : [],
      siteName: "DMiraki",
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: blog.coverImage ? [blog.coverImage] : [],
      site: "@dmiraki",
    },
  };
}

export default async function BlogDetail({ params }:{params:Promise<{id:string}>} ) {
  const { id } =await params;
  const blog = blogs.find(b => b.id === id);
  
  // Add breadcrumbs for better SEO
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blogs", url: "/blogs" },
    { name: blog?.title || "Blog", url: `/blogs/blog${id}` }
  ];
  
  // Get related blog posts (excluding current one)
  const relatedBlogs = blogs.filter(b => b.id !== id).slice(0, 3);
  
  return (
    <>
      {/* Breadcrumbs */}
      <nav className="container mx-auto px-4 py-4 text-sm text-gray-600" aria-label="Breadcrumb">
        <ol className="flex space-x-2">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index < breadcrumbs.length - 1 ? (
                <>
                  <Link href={crumb.url} className="hover:underline">{crumb.name}</Link>
                  <span className="mx-2">/</span>
                </>
              ) : (
                <span>{crumb.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      
      {/* Article JSON-LD for rich results */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": blog?.title || "Blog Article",
          "description": blog?.metaDescription || blog?.excerpt,
          "author": { 
            "@type": "Person", 
            "name": blog?.author.name || "DMiraki Team",
            "description": blog?.author.bio
          },
          "publisher": { 
            "@type": "Organization", 
            "name": "DMiraki",
            "logo": {
              "@type": "ImageObject",
              "url": "https://dmiraki.com/logo.png"
            }
          },
          "datePublished": blog?.publishedAt,
          "dateModified": blog?.publishedAt,
          "image": blog?.coverImage,
          "keywords": blog?.tags,
          "articleSection": blog?.category,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://dmiraki.com/blogs/blog${id}`
          }
        }) }}
      />
      
      <BlogDetails id={id} />
      
      {/* Related Posts Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedBlogs.map((relatedBlog) => (
            <article 
              key={relatedBlog.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img 
                src={relatedBlog.coverImage} 
                alt={relatedBlog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{relatedBlog.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{relatedBlog.excerpt}</p>
                <Link 
                  href={`/blogs/blog${relatedBlog.id}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      {/* Additional Navigation Links */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Explore Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/brand-and-reach" className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-xl hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-2">Brand & Reach</h3>
            <p className="text-gray-600 dark:text-gray-300">Expand your brand presence and reach new audiences.</p>
          </Link>
          <Link href="/code-and-build" className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-6 rounded-xl hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-2">Code & Build</h3>
            <p className="text-gray-600 dark:text-gray-300">Transform ideas into powerful digital solutions.</p>
          </Link>
          <Link href="/brand-and-reach/search-engine-optimization" className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-6 rounded-xl hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-2">SEO Services</h3>
            <p className="text-gray-600 dark:text-gray-300">Improve your search engine rankings and visibility.</p>
          </Link>
          <Link href="/contact-us" className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 p-6 rounded-xl hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300">Start your project with our expert team.</p>
          </Link>
        </div>
      </section>
    </>
  );
}
