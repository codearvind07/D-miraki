import { Metadata } from "next";
import ProfitablePerformanceMarketingClient from "./performance-marketing-client";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Profitable Performance Marketing | ROI-Driven Ad Campaigns";
  const description =
    "Boost sales with ROI-focused performance marketing. Expert PPC, Google Ads, Meta Ads & LinkedIn campaigns that drive measurable business growth.";
  const url = "https://dmiraki.com/brand-and-reach/profitable-performance-marketing";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return {
    title: title,
    description: description,
    keywords: [
      "performance marketing agency",
      "performance marketing services",
      "ROI-driven marketing campaigns",
      "pay per click (PPC) management",
      "Google Ads management company",
      "Facebook & Instagram paid ads",
      "LinkedIn ads for B2B leads",
      "YouTube advertising agency",
      "conversion optimization services",
      "best performance marketing agency for e-commerce",
      "Google Ads management services for startups",
      "affordable PPC agency for small business",
      "LinkedIn B2B lead generation marketing company",
      "ROI-driven performance marketing campaigns",
      "customer acquisition",
      "digital ad campaigns",
      "lead generation marketing",
      "retargeting ads strategy",
      "revenue growth marketing"
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
          alt: 'Profitable Performance Marketing',
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

export default function ProfitablePerformanceMarketing() {
  return <ProfitablePerformanceMarketingClient />;
}