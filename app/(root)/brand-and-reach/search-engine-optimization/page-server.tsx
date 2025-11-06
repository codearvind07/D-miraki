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

// Add structured data for SEO services
export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Search Engine Optimization",
    "provider": {
      "@type": "Organization",
      "name": "DMiraki",
      "url": "https://dmiraki.com",
      "logo": "https://dmiraki.com/logo.png"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "category": "Digital Marketing Services",
    "offers": {
      "@type": "Offer",
      "name": "Professional SEO Services",
      "description": "Comprehensive SEO services including local SEO, technical SEO, and e-commerce SEO"
    }
  };
}

// Add FAQ data for structured data
export function generateFAQData() {
  return [
    {
      "@type": "Question",
      "name": "What is SEO and why is it important for my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO (Search Engine Optimization) is the process of optimizing your website to improve its visibility in search engine results. It's important because over 90% of online experiences begin with a search engine, and websites on the first page of Google receive the majority of clicks. Good SEO helps attract qualified traffic to your website, increases brand visibility, and generates more leads and sales."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to see results from SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO is a long-term strategy, and results typically begin to appear within 3-6 months. However, the timeline can vary based on factors such as your industry competitiveness, current website status, and the extent of optimizations needed. While some improvements may be visible sooner, significant results often take 6-12 months to fully materialize."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between local SEO and traditional SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional SEO focuses on improving your website's visibility for broad, often competitive keywords across a wide geographic area. Local SEO, on the other hand, specifically targets customers in your immediate geographic area. It involves optimizing your Google Business Profile, local citations, and location-based content to appear in local search results and Google Maps."
      }
    },
    {
      "@type": "Question",
      "name": "Do you guarantee first-page rankings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No ethical SEO company can guarantee specific rankings, as search engine algorithms are complex and constantly changing. However, we focus on implementing white-hat SEO strategies that align with search engine guidelines and have proven to be effective for our clients. Our approach emphasizes sustainable growth and long-term results rather than quick fixes that could harm your website."
      }
    }
  ];
}

export default function SearchEngineOptimization() {
  return <SearchEngineOptimizationClient />;
}