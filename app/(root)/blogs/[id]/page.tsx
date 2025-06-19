
// import { baseUrl } from "@/api/api";
import BlogDetails from "@/components/BlogDetails";
import { Metadata } from "next";
export const baseUrl="https://dmiraki-backend-production.up.railway.app/api"
// export const baseUrl = "http://localhost:5000/api";
type BlogDetailProps = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: BlogDetailProps
): Promise<Metadata> {
  try {
    

     const res:any = await fetch(`${baseUrl}/blogs/getBlogs/${params.id}`, {
      cache: "no-store", 
    });
    const blog = await res.json();


    return {
      title: blog.metaTitle || "Blog Details",
      description: blog.metaDescription || "Read more about this blog.",
      openGraph: {
        title: blog.metaTitle,
        description: blog.metaDescription,
        images: blog.image
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

export default async function BlogDetail({
  params,
}: BlogDetailProps) {
  const { id } = await params;

  

  return <>
  
 
  <BlogDetails id={id} />
  
  
  </>;
}
