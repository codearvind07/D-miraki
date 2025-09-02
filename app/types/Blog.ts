export interface Blog {
  _id?: string;
  id?: string;
  title: string;
  content: string;
  excerpt?: string;
  coverImage?: string;
  image?: string; // Primary image as base64 string
  relatedImages?: string[]; // Array of base64 strings for additional images
  tags?: string; // Tags as string (comma-separated)
  technology?: string[]; // Technologies used or mentioned
  category?: string;
  createdAt?: string;
  publishedAt?: string;
  date?: string;
  isPublished?: boolean;
  status?: 'draft' | 'published';
  metaTitle?: string;
  metaDescription?: string;
  slug?: string;
}

export interface BlogsResponse {
  blogs: Blog[];
  total?: number;
  page?: number;
  limit?: number;
}

export interface BlogResponse {
  blog: Blog;
}
