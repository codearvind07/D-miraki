import { Metadata } from "next";
import BrandingAndDesigningClient from "./branding-client";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Branding & Identity Design Services | DMiraki";
  const description = "Professional branding and identity design services by DMiraki. Create authentic brand identity that connects with your audience and drives business growth.";
  const url = "https://dmiraki.com/brand-and-reach/branding-and-designing";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return {
    title,
    description,
    keywords: [
      "branding services",
      "identity design",
      "brand strategy",
      "visual identity",
      "logo design",
      "brand guidelines",
      "corporate identity",
      "brand development",
      "brand positioning",
      "brand messaging",
      "design agency",
      "creative branding",
      "brand experience",
      "brand storytelling",
      "brand architecture"
    ],
    authors: [{ name: "DMiraki Team" }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "DMiraki",
      locale: "en_US",
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
      site: "@dmiraki",
    },
  };
}

export default function BrandingAndDesigning() {
  return <BrandingAndDesigningClient />;
}