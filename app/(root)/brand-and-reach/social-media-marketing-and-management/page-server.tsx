import { Metadata } from "next";
import SocialMediaMarketingAndManagementClient from "./social-media-client";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Social Media Marketing & Management | Boost Your Brand";
  const description =
    "Grow your business with expert social media marketing & management services. Facebook, Instagram, LinkedIn, and YouTube strategies that drive ROI.";
  const url = "https://dmiraki.com/brand-and-reach/social-media-marketing-and-management";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return {
    title: title,
    description: description,
    keywords: [
      "social media marketing services",
      "social media management agency",
      "social media marketing company",
      "best social media marketing agency",
      "Facebook ads management",
      "Instagram growth services",
      "LinkedIn marketing agency",
      "YouTube promotion services",
      "Twitter marketing",
      "affordable social media marketing agency for small business",
      "Instagram marketing services to grow business",
      "LinkedIn lead generation agency for B2B companies",
      "best social media management services for startups",
      "professional Facebook ads management company",
      "brand awareness campaigns",
      "content scheduling tools",
      "social media engagement strategy",
      "paid social advertising",
      "online presence growth"
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
      title: title,
      description: description,
      url: url,
      type: 'website',
      siteName: 'DMiraki',
      locale: 'en_US',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'Social Media Marketing & Management',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [image],
      site: '@dmiraki',
    },
  };
}

export default function SocialMediaMarketingAndManagement() {
  return <SocialMediaMarketingAndManagementClient />;
}