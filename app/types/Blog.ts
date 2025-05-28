export interface Blog {
  id: string
  title: string
  content: string
  image?: string // Primary image as base64 string
  relatedImages?: string[] // Array of base64 strings for additional images
  tags?: string[] // Tags like categories or keywords
  technology?: string[] // Technologies used or mentioned
}
