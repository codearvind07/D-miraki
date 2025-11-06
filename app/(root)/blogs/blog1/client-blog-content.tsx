"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ClientBlogContent({ blog }: { blog: any }) {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    if (blog.publishedAt) {
      try {
        const date = new Date(blog.publishedAt);
        setFormattedDate(date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }));
      } catch (e) {
        console.error('Error formatting date:', e);
        setFormattedDate('Invalid date');
      }
    }
  }, [blog.publishedAt]);

  return (
    <>
      {/* Article Header */}
      <div className="mb-8">
        {/* Published Date and Reading Time */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{blog.readingTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Category and Tags */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
            {blog.category}
          </span>
          {blog.technology && blog.technology.map((tech: string, index: number) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Excerpt */}
        <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-6">
          {blog.excerpt}
        </p>
      </div>

      {/* Blog Content with enhanced styling for SEO */}
      <article>
        <div
          className="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-300
                    prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                    prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:underline hover:prose-a:no-underline
                    prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4
                    prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6
                    prose-img:rounded-xl prose-img:shadow-lg
                    prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>

      {/* Tags Section */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Tags:
        </h4>
        <div className="flex flex-wrap gap-2">
          {blog.technology && blog.technology.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
            #{blog.category}
          </span>
        </div>
      </div>
      
      {/* FAQ Section for better SEO */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What makes a website professional?</h3>
            <p className="text-gray-700 dark:text-gray-300">A professional website combines responsive design, fast loading times, intuitive navigation, quality content, and strong security measures to provide an excellent user experience.</p>
          </div>
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How can a website help my business grow?</h3>
            <p className="text-gray-700 dark:text-gray-300">A professional website increases your visibility, builds credibility, operates 24/7, and serves as the hub for all your digital marketing efforts, ultimately driving more leads and sales.</p>
          </div>
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Why should I choose DMiraki for my website?</h3>
            <p className="text-gray-700 dark:text-gray-300">DMiraki combines technical expertise with strategic thinking to create websites that not only look great but also drive business results through SEO optimization and user-focused design.</p>
          </div>
        </div>
      </section>
      
      {/* Additional Navigation Links */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Explore Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/code-and-build/web-design-and-development" className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-xl hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-2">Web Design & Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Create a stunning, high-converting website that represents your brand perfectly.</p>
          </Link>
          <Link href="/brand-and-reach/search-engine-optimization" className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-6 rounded-xl hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-2">SEO Services</h3>
            <p className="text-gray-600 dark:text-gray-300">Improve your search engine rankings and drive more organic traffic to your site.</p>
          </Link>
          <Link href="/contact-us" className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-6 rounded-xl hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300">Ready to elevate your digital presence? Let's discuss your project.</p>
          </Link>
        </div>
      </section>
      
      {/* Related Articles */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/blogs/blog2/" className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
            <h3 className="text-xl font-semibold mb-2">Next.js 15: The Future of React Development is Here</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Explore the revolutionary features of Next.js 15 including Turbopack, enhanced App Router, and built-in performance monitoring tools.</p>
            <span className="text-blue-600 dark:text-blue-400 hover:underline">Read More →</span>
          </Link>
          <Link href="/blogs/blog3/" className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
            <h3 className="text-xl font-semibold mb-2">The ROI of Professional Web Design: Numbers That Matter</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Learn how professional web design delivers measurable ROI through increased conversions, reduced acquisition costs, and long-term value creation.</p>
            <span className="text-blue-600 dark:text-blue-400 hover:underline">Read More →</span>
          </Link>
        </div>
      </section>
    </>
  );
}