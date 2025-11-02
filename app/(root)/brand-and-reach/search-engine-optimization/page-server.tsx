import { Metadata } from "next";
import SearchEngineOptimizationClient from "./seo-client";

export async function generateMetadata(): Promise<Metadata> {
  const title = "SEO Services | Expert Search Engine Optimization Agency";
  const description =
    "Boost your rankings with professional SEO services. Local SEO, technical SEO, e-commerce SEO & keyword strategies that drive organic traffic and sales.";
  const url = "https://dmiraki.com/brand-and-reach/search-engine-optimization";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return {
    title: title,
    description: description,
    keywords: [
      "SEO services",
      "SEO agency",
      "search engine optimization company",
      "SEO experts near me",
      "local SEO services",
      "e-commerce SEO agency",
      "technical SEO services",
      "affordable SEO packages",
      "SEO content writing",
      "best SEO agency for small businesses",
      "affordable SEO services for startups",
      "local SEO company for Google Business Profile",
      "e-commerce SEO services to increase sales",
      "technical SEO audit services",
      "organic traffic growth",
      "keyword optimization",
      "Google search rankings",
      "SEO backlinks strategy",
      "mobile-friendly website SEO"
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
          alt: 'Search Engine Optimization',
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

export default function SearchEngineOptimization() {
  return <SearchEngineOptimizationClient />;
}