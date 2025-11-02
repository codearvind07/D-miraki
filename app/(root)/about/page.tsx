import { Metadata } from 'next';
import AboutClient from './about-client';

// Add metadata for the about page
export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = 'https://dmiraki.com/about';
  const pageTitle = 'About DMiraki | Website & Mobile App Development Company';
  const pageDescription = 'DMiraki is a professional website development and mobile app development company offering custom digital solutions, SEO services, and digital marketing for business growth.';
  const pageImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80';

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'website development company',
      'mobile app development services',
      'Android app development company',
      'iOS app development company',
      'SEO services for mobile and web',
      'digital marketing company',
      'online advertising solutions',
      'professional web and app solutions',
      'full-stack development company',
      'business growth through digital solutions',
      'custom website and mobile app solutions',
      'Android and iOS app optimization services',
      'SEO strategies for websites and mobile apps',
      'social media marketing and paid ads',
      'PPC advertising and online campaigns',
      'app store optimization (ASO) for Android & iOS',
      'responsive website design and development',
      'marketing automation and analytics',
      'performance-driven digital solutions',
      'professional IT services for businesses',
      'UX/UI design and development',
      'website speed and performance optimization',
      'content marketing and SEO campaigns',
      'mobile-first website strategy',
      'conversion rate optimization (CRO)',
      'Google Ads and social media campaigns',
      'local SEO and Google My Business',
      'retargeting and display advertising',
      'app and web analytics',
      'innovative digital solutions for businesses'
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
          alt: 'About DMiraki - Digital Solutions Company',
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

export default function About() {
  return <AboutClient />;
}