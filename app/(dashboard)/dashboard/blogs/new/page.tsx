'use client'

import React, { useState, ChangeEvent } from 'react'
import { createBlog, uploadImageFile } from '@/api/api'
import { Input } from '@/components/ui/input'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TiptapEditor from './EditorSection'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'



const BlogForm: React.FC = () => {
  const router=useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [category, setCategory] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [coverImagePreview, setCoverImagePreview] = useState<string>()
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const [metaTitle, setMetaTitle] = useState('')
  const [metaDescription, setMetaDescription] = useState('')
  const [slug, setSlug] = useState('')

  const token: string = typeof window !== 'undefined' ? localStorage.getItem('adminToken') || '' : ''

  const editor:any = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML())
    },
  })

  const resetForm = () => {
    setTitle('')
    setContent('')
    setExcerpt('')
    setCategory('')
    setTags([])
    setCoverImagePreview(undefined)
    setCoverImageFile(null)
    setMetaTitle('')
    setMetaDescription('')
    setSlug('')
    editor?.commands.setContent('')
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    try {
      let uploadedImageUrl = ''

      if (coverImageFile) {
        const formData = new FormData()
        formData.append('file', coverImageFile)
        uploadedImageUrl = await uploadImageFile(formData, token)
      }

      const blogData: any = {
        title,
        content,
        excerpt,
        category,
        tags: tags.join(','),
        coverImage: uploadedImageUrl || '',
        status: 'published',
        isPublished: true,
        metaTitle,
        metaDescription,
        slug,
      }

      const newBlog = await createBlog(blogData, token)
      toast.success("Blog created successfully")
      router.push("/dashboard/blogs")
      resetForm()
      
    } catch (err) {
      console.error('Error creating blog:', err)
    } finally {
      setUploading(false)
    }
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">
        {`Create New Blog`}
      </h2>
      <form onSubmit={handleSubmit} className="w-full grid grid-cols-2 gap-6 p-6">
        <div>
          <label className="block font-medium">Title</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div>
          <label className="block font-medium">Excerpt</label>
          <Input value={excerpt} onChange={(e) => setExcerpt(e.target.value)} required />
        </div>

        <div>
          <label className="block font-medium">Category</label>
          <Input value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>

        <div className="col-span-2">
          <label className="block font-medium mb-1">Content</label>
          <div className="border rounded  p-4 min-h-[200px]">
            <TiptapEditor content={content} onChange={setContent} />
          </div>
        </div>

        <div>
          <label className="block font-medium">Tags (comma-separated)</label>
          <Input
            value={tags.join(', ')}
            onChange={(e) =>
              setTags(e.target.value.split(',').map(tag => tag.trim()).filter(Boolean))
            }
          />
        </div>

        <div>
          <label className="block font-medium">Cover Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {coverImagePreview && (
            <img
              src={coverImagePreview}
              alt="Cover"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        <div>
          <label className="block font-medium">Slug</label>
          <Input value={slug} onChange={(e) => setSlug(e.target.value)} />
        </div>

        <div>
          <label className="block font-medium">Meta Title</label>
          <Input value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
        </div>

        <div className="col-span-2">
          <label className="block font-medium">Meta Description</label>
          <textarea
            rows={3}
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            className="w-full bg-muted/50 dark:bg-muted/80 rounded-sm"
          />
        </div>

        <div className="col-span-2 flex justify-end gap-4">
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
            {uploading ? 'Uploading...' : 'Create Blog'}
          </button>
        </div>
      </form>
    </>
  )
}

export default BlogForm
