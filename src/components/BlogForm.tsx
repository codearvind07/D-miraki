import React, { useState,  ChangeEvent } from 'react'

import { Blog } from '@/types/Blog'
import { createBlog, uploadImageFile } from '@/api/api'

interface Props {
  onSubmit: (blog: Blog) => void
  editingBlog?: Blog | null
 
}

const BlogForm: React.FC<Props> = ({ editingBlog, onSubmit }) => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [excerpt, setExcerpt] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])
  const [coverImagePreview, setCoverImagePreview] = useState<string | undefined>(undefined)
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

 

  const resetForm = () => {
    setTitle('')
    setContent('')
    setExcerpt('')
    setCategory('')
    setTags([])
    setCoverImagePreview(undefined)
    setCoverImageFile(null)
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setCoverImagePreview(reader.result as string)
      reader.readAsDataURL(file)
      setCoverImageFile(file)
    }
  }
const token:string =  localStorage.getItem("adminToken") || ''
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    try {
      let uploadedImageUrl:string = ''

     if (coverImageFile) {
  const formData = new FormData();
  formData.append('file', coverImageFile); // coverImageFile must be of type File

  uploadedImageUrl = await uploadImageFile(formData, token);
}
      const blogData:any = {
        title,
        content,
        excerpt,
        category,
        tags: tags.join(','),
        coverImage: uploadedImageUrl || '',
        status: 'published',
        isPublished: true,
      }

      const newBlog = await createBlog(blogData, token)

      resetForm()
      onSubmit(newBlog)
    } catch (err) {
      console.error('Error creating blog:', err)
    } finally {
      setUploading(false)
    }
  }

  

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">
        {editingBlog ? 'Edit Blog' : 'Create New Blog'}
      </h2>

      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 rounded border dark:bg-gray-800"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Excerpt</label>
        <input
          type="text"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
          className="w-full p-2 rounded border dark:bg-gray-800"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full p-2 rounded border dark:bg-gray-800"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          required
          className="w-full p-2 rounded border dark:bg-gray-800"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Tags (comma-separated)</label>
        <input
          type="text"
          value={tags.join(', ')}
          onChange={(e) =>
            setTags(e.target.value.split(',').map((tag) => tag.trim()).filter(Boolean))
          }
          className="w-full p-2 rounded border dark:bg-gray-800"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Cover Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file-input w-full"
        />
        {coverImagePreview && (
          <img
            src={coverImagePreview}
            alt="Cover"
            className="mt-2 w-32 h-32 object-cover rounded"
          />
        )}
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={resetForm}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          Clear
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : editingBlog ? 'Update Blog' : 'Create Blog'}
        </button>
      </div>
    </form>
  )
}

export default BlogForm
