"use client"
import { getAllBlogs } from "@/data/blogs";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  const blogs = getAllBlogs();

  // Debug logging for troubleshooting
  React.useEffect(() => {
    console.log('Blog page state:', { blogs });
    if (blogs?.length > 0) {
      console.log('Sample blog post for ID checking:', blogs[0]);
    }
  }, [blogs]);

  // Loading state - not needed for static data but keeping for consistency
  const isLoading = false;
  const error = null;

  // Helper function for safe date formatting with fallback
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return 'No date';
    try {
      return format(new Date(dateString), 'dd MMM yyyy');
    } catch (error) {
      console.warn('Invalid date format:', dateString);
      return 'Invalid date';
    }
  };

  // Helper function for image error handling
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    // Show fallback background gradient
    const parent = target.parentElement;
    if (parent) {
      parent.style.display = 'flex';
      parent.style.alignItems = 'center';
      parent.style.justifyContent = 'center';
      const fallback = document.createElement('span');
      fallback.className = 'text-white font-medium';
      fallback.textContent = 'Image not available';
      parent.appendChild(fallback);
    }
  };

  // Skeleton component
  const SkeletonCard = () => (
    <div className="animate-pulse bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
      <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
      <div className="p-6 space-y-4">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
        <div className="mt-4 h-8 w-24 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      </div>
    </div>
  );

  return (
    <section className="container mx-auto px-4 py-20">
      {/* Blog Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold  leading-tight
        inline bg-gradient-to-r bg-clip-text text-transparent
              from-[rgb(255,99,71)] via-[rgb(255,165,0)] to-[rgb(0,191,255)]
              animate-text font-recoleta
        ">
          Insights & Innovations in Web Development
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Stay updated with the latest in frontend technologies, design trends, and best practices from our expert team.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading &&
          Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)}

        {error && (
          <div className="col-span-full text-center py-10">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-400 mb-2">
                Unable to Load Blogs
              </h3>
              <p className="text-red-600 dark:text-red-300 text-sm">
                {(error as Error)?.message || 'There was an error loading the blog posts. Please try again later.'}
              </p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {!isLoading && !error && blogs?.length === 0 && (
          <div className="col-span-full text-center py-10">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-2">No Blogs Found</h2>
            <p className="text-gray-500 dark:text-gray-400">
              We couldn't find any blogs at the moment. Please check back later!
            </p>
          </div>
        )}

        {!isLoading &&
          !error &&
          blogs?.map((post: any) => {
            // Ensure we have a valid post object
            if (!post || typeof post !== 'object') {
              console.warn('Invalid post object:', post);
              return null;
            }

            // Use either _id or id for the key and link, with fallback
            const postId = post._id || post.id;
            const postKey = `${postId}-${post.title?.replace(/\s+/g, '-').toLowerCase() || 'untitled'}`;

            if (!postId) {
              console.warn('Post missing both _id and id:', post);
              return null;
            }

            return (
              <div
                key={postKey}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="h-48 bg-gradient-to-br from-pink-400 to-yellow-500 relative">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title || 'Blog post image'}
                      className="w-full h-48 object-cover"
                      onError={handleImageError}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center text-white font-medium">
                      No Image Available
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(post?.createdAt || post?.publishedAt || post?.date)}
                  </p>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-pink-500 transition-colors duration-300">
                    {post.title || 'Untitled Post'}
                  </h2>
                  {post.excerpt && (
                    <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  <Link href={`/blogs/${postId}`} className="inline-block">
                    <button className="mt-4 inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors duration-200">
                      Read More →
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Blogs;