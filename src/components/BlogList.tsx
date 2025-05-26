import { useBlogs } from '@/api/api'
import { Blog } from '@/types/Blog'



interface Props {
  blogs: Blog[]
  onEdit: (blog: Blog) => void
  onDelete: (id: string) => void
}

const BlogList: React.FC<Props> = () => {


     
 const { data, isLoading } = useBlogs();
  

  
   if (isLoading) return <p className="text-center">Loading blogs...</p>
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {  data?.blogs?.map((blog:any) => (
        <div key={blog?._id} className="bg-white dark:bg-gray-800 rounded shadow-md overflow-hidden">
          {blog?.coverImage && (
            <img
              src={blog?.coverImage}
              alt={blog?.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{blog?.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{blog?.content}</p>
            {blog?.tags && blog?.tags?.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-blue-600">
                {blog.tags.map((tag:any, idx:any) => (
                  <span key={idx} className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                    #{tag || ''}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogList
