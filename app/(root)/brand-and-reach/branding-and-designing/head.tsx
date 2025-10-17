import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Branding & Identity Design Services | DMiraki";
  const description = "Professional branding and identity design services by DMiraki. Create authentic brand identity that connects with your audience and drives business growth.";
  const url = "https://dmiraki.com/brand-and-reach/branding-and-designing";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "DMiraki",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Branding & Identity Design Services by DMiraki",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function Head() {
  return null;
}