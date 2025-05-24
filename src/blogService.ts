import { Client, Databases } from 'appwrite'
import { Blog } from './types/Blog'
import { storage } from './appwrite'

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject('68319f170004cd0ee992') // Your project ID               // 🔁 Replace with your project ID

const databases = new Databases(client)

export const getBlogList = async (): Promise<Blog[]> => {
  try {
    const response = await databases.listDocuments(
      '6831ab00002568e536a8',       // 🔁 Your database ID
      '6831ab0c0035b966fbe7'      // 🔁 Your collection ID
    )

    const blogs: Blog[] = response.documents.map((doc) => {
      const imageURL = doc.image
        ? storage.getFilePreview("6831ad5800300cba257e", doc.image)
        : ''

      const relatedImageURLs = (doc.relatedImages || []).map((id: string) =>
        storage.getFilePreview("6831ad5800300cba257e", id)
      )

      return {
        id: doc.$id,
        title: doc.title,
        content: doc.content,
        image: imageURL,
        tags: doc.tags || [],
        technology: doc.technologies || [],
        relatedImages: relatedImageURLs,
      }
    })

    return blogs
  } catch (error) {
    console.error('Error fetching blogs from Appwrite:', error)
    return []
  }
}


