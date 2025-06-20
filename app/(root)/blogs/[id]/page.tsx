
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

    return {
      title: blog.metaTitle || "Blog Details",
      description: blog.metaDescription || "Read more about this blog.",
      openGraph: {
        title: blog.metaTitle,
        description: blog.metaDescription,
        images: blog.coverImage
          ? [
              {
                url: blog.coverImage,
                width: 800,
                height: 600,
                alt: blog.title,
              },
            ]
          : [],
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

  return <BlogDetails id={id} />;
}
