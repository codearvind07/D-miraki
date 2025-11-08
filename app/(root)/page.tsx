import { Metadata } from 'next';
import HomeClient from './home-client';

// Add metadata for the home page
export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = 'https://dmiraki.com';
  const pageTitle = 'DMiraki | Elevate Your Brand with Digital Excellence';
  const pageDescription = 'DMiraki is your trusted digital partner for SEO, branding, web design, marketing, and IT solutions. Transform your vision into impact.';
  const pageImage = 'https://dmiraki.com/assets/og-image.jpg';

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'digital marketing',
      'web development',
      'SEO services',
      'branding',
      'IT solutions',
      'digital transformation',
      'online marketing',
      'website design',
      'content marketing',
      'social media management'
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
      // Fix hreflang implementation by using correct format
      languages: {
        'en-US': siteUrl,
        // Add other language versions here when available
        // 'es-ES': 'https://dmiraki.com/es',
        // 'fr-FR': 'https://dmiraki.com/fr',
      }
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
          alt: 'DMiraki - Digital Excellence',
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

export default function Home() {
  return <HomeClient />;
}