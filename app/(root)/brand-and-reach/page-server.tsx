import { Metadata } from "next";
import BrandAndReachClient from "./brand-and-reach-client";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = 'https://dmiraki.com/brand-and-reach';
  const pageTitle = 'Brand & Reach Services | DMiraki';
  const pageDescription = 'Grow your brand with DMiraki\'s branding, design, content creation, performance marketing, and social media services.';
  const pageImage = 'https://dmiraki.com/assets/og-image.jpg';

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'branding services',
      'digital marketing',
      'social media marketing',
      'performance marketing',
      'content creation',
      'SEO services',
      'brand authority',
      'lead generation',
      'marketing strategy'
    ],
    authors: [{ name: 'DMiraki Team' }],
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
      canonical: siteUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: siteUrl,
      type: 'website',
      siteName: 'DMiraki',
      locale: 'en_US',
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: 'Brand & Reach Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      site: '@dmiraki',
    },
  };
}

export default function BrandAndReach() {
  return <BrandAndReachClient />;
}