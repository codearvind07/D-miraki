import BlogDetails from "@/components/BlogDetails";
import { Metadata } from "next";

// Static blog data with enhanced SEO information
const blogs = [
  {
    id: "1",
    title: "Why Every Business Needs a Professional Website in 2024",
    excerpt: "Discover why having a professional website is crucial for business success in 2024, from building credibility to reaching customers 24/7.",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Business Strategy",
    tags: "Business Website,Digital Marketing,Online Presence,Web Development",
    technology: ["HTML", "CSS", "JavaScript", "SEO"],
    publishedAt: "2024-01-15T14:30:00Z",
    metaTitle: "Why Every Business Needs a Professional Website in 2024 | DMiraki",
    metaDescription: "Discover why having a professional website is essential for business success in 2024. Learn how to build credibility, reach customers 24/7, and drive growth with effective web design.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "8 min read"
  },
  {
    id: "2",
    title: "Next.js 15: The Future of React Development is Here",
    excerpt: "Explore the revolutionary features of Next.js 15 including Turbopack, enhanced App Router, and built-in performance monitoring tools.",
    coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Web Development",
    tags: "Next.js,React,Turbopack,Web Development,Performance",
    technology: ["Next.js", "React", "JavaScript", "TypeScript"],
    publishedAt: "2024-03-22T09:15:00Z",
    metaTitle: "Next.js 15: The Future of React Development is Here | DMiraki",
    metaDescription: "Explore the revolutionary features of Next.js 15 including Turbopack, enhanced App Router, and built-in performance monitoring tools for modern web development.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "6 min read"
  },
  {
    id: "3",
    title: "The ROI of Professional Web Design: Numbers That Matter",
    excerpt: "Learn how professional web design delivers measurable ROI through increased conversions, reduced acquisition costs, and long-term value creation.",
    coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Business Strategy",
    tags: "Web Design,ROI,Business Growth,Conversion Rate,Digital Marketing",
    technology: ["UI/UX", "Web Design", "Conversion Optimization"],
    publishedAt: "2024-02-08T16:45:00Z",
    metaTitle: "The ROI of Professional Web Design: Numbers That Matter | DMiraki",
    metaDescription: "Learn how professional web design delivers measurable ROI through increased conversions, reduced acquisition costs, and long-term value creation for your business.",
    author: {
      name: "DMiraki Team",
      bio: "Experts in web development and digital strategy",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    readingTime: "7 min read"
  }
];

// Generate static params for all blog posts
export async function generateStaticParams() {
  // Return array of {id} objects for each blog
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

export async function generateMetadata({
  params,
}: {params:Promise<{id:string}>}): Promise<Metadata> {
  const {id} = await params;
  
  const blog = blogs.find(b => b.id === id);
  
  if (!blog) {
    return {
      title: "Blog not found",
      description: "The requested blog could not be found.",
    };
  }

  const canonical = `https://dmiraki.com/blogs/${id}`;

  return {
    title: blog.metaTitle || blog.title || "Blog Details",
    description: blog.metaDescription || blog.excerpt || "Read more about this blog.",
    keywords: [blog.category, ...blog.technology, ...blog.tags.split(',')],
    alternates: { canonical },
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      url: canonical,
      type: 'article',
      publishedTime: blog.publishedAt,
      authors: [blog.author.name],
      tags: blog.tags.split(','),
      images: blog.coverImage
        ? [
            {
              url: blog.coverImage,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: blog.coverImage ? [blog.coverImage] : [],
    },
  };
}

export default async function BlogDetail({ params }:{params:Promise<{id:string}>} ) {
  const { id } =await params;
  const blog = blogs.find(b => b.id === id);
  
  return <>
    {/* Article JSON-LD for rich results */}
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": blog?.title || "Blog Article",
        "description": blog?.metaDescription || blog?.excerpt,
        "author": { 
          "@type": "Person", 
          "name": blog?.author.name || "DMiraki Team",
          "description": blog?.author.bio
        },
        "publisher": { 
          "@type": "Organization", 
          "name": "DMiraki",
          "logo": {
            "@type": "ImageObject",
            "url": "https://dmiraki.com/logo.png"
          }
        },
        "datePublished": blog?.publishedAt,
        "dateModified": blog?.publishedAt,
        "image": blog?.coverImage,
        "keywords": blog?.tags,
        "articleSection": blog?.category,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://dmiraki.com/blogs/${id}`
        }
      }) }}
    />
    <BlogDetails id={id} />
  </>;
}