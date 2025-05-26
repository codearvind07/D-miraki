import { useParams } from 'react-router-dom'
import { useBlogsById } from '@/api/api'
import { format } from 'date-fns'

export const BlogDetail = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, error } = useBlogsById(id || '')

  if (error) return <div className="text-red-500 text-center py-10">Failed to load blog.</div>

  return (
    <section className="container mx-auto px-4 py-20 max-w-4xl">
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
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {format(new Date(data?.createdAt!), 'dd MMM yyyy')}
          </p>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
            {data?.title}
          </h1>
          <p className="text-lg leading-7 text-gray-800 dark:text-gray-300">
            {data?.content}
          </p>
        </>
      )}
    </section>
  )
}

export default BlogDetail
