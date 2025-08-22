
import BlogDetails from "@/components/BlogDetails";
import { Metadata } from "next";

const baseUrl = "https://dmiraki-backend-production.up.railway.app/api";



export async function generateMetadata({
  params,
}: {params:Promise<{id:string}>}): Promise<Metadata> {
  try {
     const {id} = await params;
    const res = await fetch(`${baseUrl}/blogs/getBlogs/${id}`, {
      cache: "no-store",
    });
    const blog = await res.json();

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
