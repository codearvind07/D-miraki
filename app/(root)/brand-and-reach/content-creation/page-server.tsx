import { Metadata } from "next";
import ContentCreationClient from "./content-creation-client";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Content Creation & Strategy | Creative Content Agency";
  const description =
    "Grow your brand with expert content creation & strategy. Social media posts, videos, blogs & copywriting that boost engagement and SEO rankings.";
  const url = "https://dmiraki.com/brand-and-reach/content-creation";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return {
    title: title,
    description: description,
    keywords: [
      "content creation agency",
      "content marketing strategy services",
      "digital content creation company",
      "creative content agency",
      "blog writing services",
      "video content creation for business",
      "social media content agency",
      "professional copywriting services",
      "graphic design content services",
      "best content creation agency for small businesses",
      "affordable blog writing and content strategy services",
      "video content creation services for brands",
      "content marketing strategy for startups",
      "SEO-friendly content writing company",
      "storytelling for brands",
      "content calendar planning",
      "audience engagement strategy",
      "branded content creation",
      "multimedia marketing solutions"
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
          alt: 'Content Creation & Strategy',
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

export default function ContentCreationPage() {
  return <ContentCreationClient />;
}