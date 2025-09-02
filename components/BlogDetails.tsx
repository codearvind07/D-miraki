"use client"
import React from 'react'
import { getBlogById } from "@/data/blogs";
import { format } from "date-fns";
import Image from 'next/image';

export default function BlogDetails({id}:{id:string}) {
    const blog = getBlogById(id);
    const isLoading = false;
    const error = !blog;

     if (error)
    return (
      <div className="text-red-500 text-center py-10">Failed to load blog.</div>
    );
  return (
    <>
      <section className="container mx-auto px-4 py-20 w-full">
        {/* Cover Image */}
        <div className="mb-6">
          {isLoading ? (
            <div className="w-full h-96 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-xl" />
          ) : (
            <img
              src={blog?.coverImage}
              alt={blog?.title}
              className="w-full rounded-xl"
            />
          )}
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="space-y-4">
            <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-700 animate-pulse rounded" />
            <div className="h-10 w-3/4 bg-gray-300 dark:bg-gray-700 animate-pulse rounded" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 animate-pulse rounded" />
              <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 animate-pulse rounded" />
              <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 animate-pulse rounded" />
            </div>
          </div>
        ) : (
          <>
            {/* Published Date */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {blog?.createdAt ? format(new Date(blog.createdAt), "dd MMM yyyy") : 'No date'}
            </p>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {blog?.title}
            </h1>

            {/* Category */}
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-6">
              <span className="text-blue-600 dark:text-blue-400">{blog?.category}</span>
            </div>

            {/* Excerpt */}
            {blog?.excerpt && (
              <p className="italic text-gray-700 dark:text-gray-400 mb-6">
                "{blog.excerpt}"
              </p>
            )}

            {/* Blog Content */}
            <div
              className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
            />

            {/* Tags */}
            {blog?.tags && (
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Tags:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.split(',').map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full"
                    >
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </>
  )
}