import { Blog } from '@/types/Blog'
import React, { useState, useEffect } from 'react'
import BlogForm from './BlogForm'
import BlogList from './BlogList'


const BlogListAdmin: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)

  useEffect(() => {
    const savedBlogs = localStorage.getItem('blogs')
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs))
  }, [blogs])

  const handleCreateOrUpdate = (blog: Blog) => {
    setBlogs((prev) => {
      const existing = prev.find((b) => b.id === blog.id)
      if (existing) {
        return prev.map((b) => (b.id === blog.id ? blog : b))
      }
      return [...prev, blog]
    })
    setEditingBlog(null)
  }

  const handleDelete = (id: string) => {
    setBlogs((prev) => prev.filter((b) => b.id !== id))
  }

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Admin Blog Panel</h1>
          \
        </div>
        <BlogForm onSubmit={handleCreateOrUpdate} editingBlog={editingBlog} />
        <hr className="my-6 border-gray-300 dark:border-gray-700" />
        <BlogList blogs={blogs} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  )
}

export default BlogListAdmin
