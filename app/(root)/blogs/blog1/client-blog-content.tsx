"use client";

import { useEffect, useState } from "react";

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
                    prose-img:rounded-xl prose-img:shadow-lg"
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
    </>
  );
}