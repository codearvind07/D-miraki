# Manual Blog Management Guide

This project now uses static blog data instead of API calls. Here's how to manage your blogs:

## How to Add/Edit Blogs

1. **Edit the blog data file**: `data/blogs.ts`
2. **Add new blog entries** to the `staticBlogs` array
3. **Update existing entries** by modifying their properties

## Blog Data Structure

Each blog entry should follow this structure:

```typescript
{
  id: "unique-id",           // Unique identifier
  _id: "unique-id",          // Alternative ID (same as id)
  title: "Blog Title",       // Required
  slug: "blog-url-slug",     // URL-friendly version
  content: `<h2>Content</h2>`, // HTML content
  excerpt: "Brief description", // Meta description
  coverImage: "/path/to/image.jpg", // Cover image path
  image: "/path/to/image.jpg",      // Same as coverImage
  tags: "tag1,tag2,tag3",    // Comma-separated tags
  technology: ["Tech1", "Tech2"], // Array of technologies
  category: "Category Name", // Blog category
  createdAt: "2024-01-15T10:00:00Z", // ISO date string
  publishedAt: "2024-01-15T10:00:00Z", // ISO date string
  date: "2024-01-15T10:00:00Z",        // ISO date string
  isPublished: true,         // Whether to show the blog
  status: "published",       // Status: "draft" or "published"
  metaTitle: "SEO Title",    // Meta title for SEO
  metaDescription: "SEO Description" // Meta description for SEO
}
```

## Images

- Place blog images in the `/public/assets/blog-images/` directory
- Reference them in the `coverImage` field as `/assets/blog-images/filename.jpg`
- Make sure images are optimized for web (WebP format recommended)

## Publishing Changes

After editing `data/blogs.ts`:

1. Save the file
2. The changes will be reflected immediately on your website
3. For production deployments, commit your changes and redeploy

## Benefits of Manual Management

- **Performance**: No API calls needed, faster page loads
- **Reliability**: No dependency on external APIs
- **Control**: Complete control over blog content and structure
- **SEO**: Better static site generation for search engines

## Dashboard

The dashboard at `/dashboard/blogs` now shows your blogs in read-only mode. Use it to:
- View all published blogs
- Check blog metadata
- Sort and search through blogs

To add/edit blogs, you must update the `data/blogs.ts` file manually.