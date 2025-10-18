import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Privacy Policy | DMiraki";
  const description = "Learn how DMiraki collects, uses, and protects your personal data when you interact with our services. Your privacy is important to us.";
  const url = "https://dmiraki.com/privacy-policy";
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
          alt: "DMiraki Privacy Policy",
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