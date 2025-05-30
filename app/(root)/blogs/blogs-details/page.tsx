"use client";
import { useBlogsById } from "@/api/api";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";
import Head from "next/head";

const BlogDetail = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";

  const { data, isLoading, error } = useBlogsById(id);

  if (error)
    return (
      <div className="text-red-500 text-center py-10">Failed to load blog.</div>
    );

  return (
    <>
      {/* Meta tags for SEO */}
      {!isLoading && data && (
        <Head>
          <title>{data.metaTitle}</title>
          <meta name="description" content={data.metaDescription} />
        </Head>
      )}

      <section className="container mx-auto px-4 py-20 max-w-4xl">
        {/* Cover Image */}
        <div className="mb-6">
          {isLoading ? (
            <div className="w-full h-96 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-xl" />
          ) : (
            <img
              src={data?.coverImage}
              alt={data?.title}
              className="w-full h-96 object-cover rounded-xl"
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
              {format(new Date(data?.createdAt!), "dd MMM yyyy")}
            </p>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {data?.title}
            </h1>

            {/* Author & Category */}
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-6">
              {data.author?.profilePic ? (
                <img
                  src={data.author.profilePic}
                  alt={data.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-400 dark:bg-gray-600 flex items-center justify-center text-white text-xs font-semibold">
                  {data.author.name.charAt(0)}
                </div>
              )}
              <span>By {data.author?.name}</span>
              <span className="mx-2">•</span>
              <span className="text-blue-600 dark:text-blue-400">{data.category}</span>
            </div>

            {/* Excerpt */}
            {data?.excerpt && (
              <p className="italic text-gray-700 dark:text-gray-400 mb-6">
                “{data.excerpt}”
              </p>
            )}

            {/* Blog Content */}
            <div
              className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: data?.content || "" }}
            />

            {/* Tags */}
            {data?.tags?.length > 0 && (
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Tags:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {data.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default BlogDetail;
