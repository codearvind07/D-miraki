import { Client, Databases, Storage } from 'appwrite'

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject('68319f170004cd0ee992') // Your project ID

export const databases = new Databases(client)
export const storage = new Storage(client)
export const DATABASE_ID = '6831ab00002568e536a8'
export const COLLECTION_ID = '6831ab0c0035b966fbe7'
