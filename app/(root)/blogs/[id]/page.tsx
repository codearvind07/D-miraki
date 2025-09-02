
import BlogDetails from "@/components/BlogDetails";
import { Metadata } from "next";
import { getAllBlogIds, getBlogById } from "@/data/blogs";

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const blogIds = getAllBlogIds();
    
    // Return array of {id} objects for each blog
    return blogIds.map((id) => ({
      id: id.toString(),
    }));
  } catch (error) {
    console.error("Failed to generate static params for blogs:", error);
    // Return some default blog IDs as fallback for static generation
    return [
      { id: "1" },
      { id: "2" },
      { id: "3" },
    ];
  }
}



export async function generateMetadata({
  params,
}: {params:Promise<{id:string}>}): Promise<Metadata> {
  try {
     const {id} = await params;
    const blog = getBlogById(id);

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
      alternates: { canonical },
      openGraph: {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription || blog.excerpt,
        url: canonical,
        type: 'article',
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
  } catch (error) {
    console.error("Failed to generate metadata", error);
    return {
      title: "Blog not found",
      description: "The requested blog could not be found.",
    };
  }
}

export default async function BlogDetail({ params }:{params:Promise<{id:string}>} ) {
  const { id } =await params;
  return <>
    {/* Article JSON-LD for rich results */}
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "",
        "author": { "@type": "Organization", "name": "DMiraki" },
        "publisher": { "@type": "Organization", "name": "DMiraki" },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://dmiraki.com/blogs/${id}`
        }
      }) }}
    />
    <BlogDetails id={id} />
  </>;
}
