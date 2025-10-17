import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Disclaimer | DMiraki";
  const description = "Disclaimer for the DMiraki website. The information provided is for general informational purposes only. We strive to keep content accurate but make no guarantees.";
  const url = "https://dmiraki.com/disclaimer";
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
          alt: "DMiraki Disclaimer",
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