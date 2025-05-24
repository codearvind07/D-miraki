import { COLLECTION_ID, DATABASE_ID, databases, storage } from '@/appwrite'
import { Blog } from '@/types/Blog'
import { ID } from 'appwrite'
import React, { useState, useEffect, ChangeEvent } from 'react'

interface Props {
  onSubmit: (blog: Blog) => void
  editingBlog?: Blog | null
}

const BlogForm: React.FC<Props> = ({ editingBlog }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [technologies, settechnologies] = useState<string[]>([])
  const [image, setImage] = useState<string | undefined>(undefined)
  const [relatedImages, setRelatedImages] = useState<string[]>([])
  const [uploading, setUploading] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [relatedImageFiles, setRelatedImageFiles] = useState<File[]>([])

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title)
      setContent(editingBlog.content)
      setTags(editingBlog.tags || [])
      settechnologies(editingBlog.technology || [])
      setImage(editingBlog.image)
      setRelatedImages(editingBlog.relatedImages || [])
    } else {
      resetForm()
    }
  }, [editingBlog])

  const resetForm = () => {
    setTitle('')
    setContent('')
    setTags([])
    settechnologies([])
    setImage(undefined)
    setRelatedImages([])
    setImageFile(null)
    setRelatedImageFiles([])
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setImage(reader.result as string)
      reader.readAsDataURL(file)
      setImageFile(file)
    }
  }

  const handleRelatedImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setRelatedImageFiles(files)
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        setRelatedImages((prev) => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeRelatedImage = (index: number) => {
    setRelatedImages((prev) => prev.filter((_, i) => i !== index))
    setRelatedImageFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const uploadPrimaryImage = async (): Promise<string | undefined> => {
    if (!imageFile) return undefined
    const response = await storage.createFile('6831ad5800300cba257e', ID.unique(), imageFile)
    return response.$id
  }

  const uploadRelatedImages = async (): Promise<string[]> => {
    const uploadedIds: string[] = []
    for (let i = 0; i < relatedImageFiles.length; i++) {
      const file = relatedImageFiles[i]
      const response = await storage.createFile('6831ad5800300cba257e', ID.unique(), file)
      uploadedIds.push(response.$id)
    }
    return uploadedIds
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    try {
      const uploadedPrimaryImage = await uploadPrimaryImage()
      const uploadedRelatedImages = await uploadRelatedImages()

      await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        title,
        content,
        tags,
        technologies,
        image: uploadedPrimaryImage,
        relatedImages: uploadedRelatedImages,
      })

      resetForm()
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

      {/* Title */}
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

      {/* Content */}
      <div>
        <label className="block mb-1 font-medium">Description / Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          required
          className="w-full p-2 rounded border dark:bg-gray-800"
        />
      </div>

      {/* Tags */}
      <div>
        <label className="block mb-1 font-medium">Tags (comma-separated)</label>
        <input
          type="text"
          value={tags.join(', ')}
          onChange={(e) =>
            setTags(
              e.target.value.split(',').map((tag) => tag.trim()).filter(Boolean)
            )
          }
          className="w-full p-2 rounded border dark:bg-gray-800"
        />
      </div>

      {/* Technologies */}
      <div>
        <label className="block mb-1 font-medium">
          Technologies (comma-separated)
        </label>
        <input
          type="text"
          value={technologies.join(', ')}
          onChange={(e) =>
            settechnologies(
              e.target.value.split(',').map((tech) => tech.trim()).filter(Boolean)
            )
          }
          className="w-full p-2 rounded border dark:bg-gray-800"
        />
      </div>

      {/* Primary Image */}
      <div>
        <label className="block mb-1 font-medium">Primary Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file-input w-full"
        />
        {image && (
          <img
            src={image}
            alt="Primary"
            className="mt-2 w-32 h-32 object-cover rounded"
          />
        )}
      </div>

      {/* Related Images */}
      <div>
        <label className="block mb-1 font-medium">Related Images</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleRelatedImagesChange}
          className="file-input w-full"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {relatedImages.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                alt={`Related ${index}`}
                className="w-20 h-20 object-cover rounded"
              />
              <button
                type="button"
                onClick={() => removeRelatedImage(index)}
                className="absolute top-0 right-0 text-xs bg-red-500 text-white px-1 rounded"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
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
