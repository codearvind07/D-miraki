import { useBlogs } from "@/api/api";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export const Blogs = () => {
  const { data, isLoading, error } = useBlogs();

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
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
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
          <p className="text-center text-red-500 col-span-full">Error fetching blogs.</p>
        )}

        {!isLoading && !error && data?.blogs?.length === 0 && (
          <div className="col-span-full text-center py-10">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-2">No Blogs Found</h2>
            <p className="text-gray-500 dark:text-gray-400">
              We couldn’t find any blogs at the moment. Please check back later!
            </p>
          </div>
        )}

        {!isLoading &&
          !error &&
          data?.blogs?.map((post: any) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="h-48 bg-gradient-to-br from-pink-400 to-yellow-500">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-6 space-y-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                   {format(new Date(post?.createdAt!), 'dd MMM yyyy')}
                  </p>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-pink-500 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{post.content}</p>
                <Link to={`/blogs/${post._id}`}>
                  <button className="mt-4 inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
