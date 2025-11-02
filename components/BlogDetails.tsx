"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

// Mock data for blogs
const mockBlogs = [
  {
    id: "1",
    title: "Why Every Business Needs a Professional Website in 2024",
    excerpt: "Discover why having a professional website is crucial for business success in 2024, from building credibility to reaching customers 24/7.",
    content: `
      <p>In today's digital landscape, a professional website is no longer a luxury—it's a necessity for businesses of all sizes. Here's why:</p>
      
      <h2>Building Credibility and Trust</h2>
      <p>A well-designed website immediately establishes your business as credible and trustworthy. Potential customers often research companies online before making purchasing decisions.</p>
      
      <h2>24/7 Availability</h2>
      <p>Your website works around the clock, providing information about your products or services even when your physical store is closed.</p>
      
      <h2>Reaching a Wider Audience</h2>
      <p>With a website, you're not limited by geography. You can reach customers anywhere in the world, expanding your market beyond local boundaries.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Business Strategy",
    tags: ["Business Website", "Digital Marketing", "Online Presence", "Web Development"],
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
    id: "2",
    title: "Next.js 15: The Future of React Development is Here",
    excerpt: "Explore the revolutionary features of Next.js 15 including Turbopack, enhanced App Router, and built-in performance monitoring tools.",
    content: `
      <p>Next.js 15 brings exciting new features that push the boundaries of React development even further.</p>
      
      <h2>Turbopack: Lightning-Fast Compilation</h2>
      <p>Turbopack, the new Rust-based compiler, offers up to 700x faster updates and 10x faster cold starts compared to Webpack.</p>
      
      <h2>Enhanced App Router</h2>
      <p>The App Router in Next.js 15 introduces improved layouts, better error handling, and more intuitive data fetching patterns.</p>
      
      <h2>Built-in Performance Monitoring</h2>
      <p>Next.js 15 now includes built-in performance monitoring tools that help you identify and fix performance bottlenecks.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Web Development",
    tags: ["Next.js", "React", "Turbopack", "Web Development", "Performance"],
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
    id: "3",
    title: "The ROI of Professional Web Design: Numbers That Matter",
    excerpt: "Learn how professional web design delivers measurable ROI through increased conversions, reduced acquisition costs, and long-term value creation.",
    content: `
      <p>Investing in professional web design isn't just about aesthetics—it's a strategic decision that delivers measurable returns.</p>
      
      <h2>Increased Conversion Rates</h2>
      <p>Professional web design can increase conversion rates by 15-50% through improved user experience and strategic call-to-action placement.</p>
      
      <h2>Reduced Customer Acquisition Costs</h2>
      <p>A well-designed website reduces bounce rates and increases engagement, leading to lower customer acquisition costs.</p>
      
      <h2>Long-term Value Creation</h2>
      <p>Professional design creates lasting brand impressions that build customer loyalty and drive repeat business.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Business Strategy",
    tags: ["Web Design", "ROI", "Business Growth", "Conversion Rate", "Digital Marketing"],
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

export default function BlogDetails({ id }: { id: string }) {
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundBlog = mockBlogs.find(b => b.id === id);
    setBlog(foundBlog);
  }, [id]);

  if (!blog) {
    return <div className="container py-12 text-center">Blog not found</div>;
  }

  // Get related blogs (excluding current one)
  const relatedBlogs = mockBlogs.filter(b => b.id !== id).slice(0, 2);

  return (
    <div className="container py-12">
      <article className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/blogs">
            <Button variant="ghost" className="mb-4 pl-0">
              ← Back to Blogs
            </Button>
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>{blog.category}</Badge>
            {blog.technology.map((tech: string, index: number) => (
              <Badge key={index} variant="secondary">{tech}</Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Image
                src={blog.author.avatar}
                alt={blog.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>{blog.author.name}</span>
            </div>
            <span>{format(new Date(blog.publishedAt), "MMMM d, yyyy")}</span>
            <span>{blog.readingTime}</span>
          </div>
        </div>

        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>

        <div 
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="outline">#{tag}</Badge>
            ))}
          </div>
        </div>
        
        {/* Related Posts Section */}
        {relatedBlogs.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <article 
                  key={relatedBlog.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative w-full h-48">
                    <Image 
                      src={relatedBlog.coverImage} 
                      alt={relatedBlog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
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
        )}
        
        {/* Additional Navigation Links */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Explore Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/brand-and-reach" className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Brand & Reach</h3>
              <p className="text-gray-600 dark:text-gray-300">Expand your brand presence and reach new audiences.</p>
            </Link>
            <Link href="/code-and-build" className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Code & Build</h3>
              <p className="text-gray-600 dark:text-gray-300">Transform ideas into powerful digital solutions.</p>
            </Link>
            <Link href="/contact-us" className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-300">Start your project with our expert team.</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}