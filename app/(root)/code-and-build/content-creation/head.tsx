import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = 'https://dmiraki.com';
  const pageTitle = "Content Creation Services | Creative Content Agency";
  const pageDescription = "Get engaging, high-quality content for your brand. Social media posts, blogs, videos, graphics & copywriting that drive traffic and boost conversions.";
  const pageImage = "https://dmiraki.com/assets/og-image.jpg";
  const canonicalUrl = "https://dmiraki.com/code-and-build/content-creation";
  
  // SEO keywords organized by type
  const seoKeywords = [
    // Primary Keywords
    "content creation services",
    "professional content writing",
    "digital content creation",
    "website content creation",
    "blog and article writing services",
    "social media content creation",
    "SEO content creation",
    "multimedia content production",
    "content marketing services",
    "creative content solutions",
    
    // Secondary (Long-Tail) Keywords
    "custom content creation for businesses",
    "engaging content for websites and blogs",
    "social media posts and campaign content",
    "SEO-friendly content writing",
    "content strategy and planning services",
    "video, graphics, and text content production",
    "high-quality blog and article writing",
    "marketing content for online growth",
    "content creation for startups and enterprises",
    "professional copywriting services",
    
    // LSI (Contextual) Keywords
    "storytelling for brands",
    "digital marketing content",
    "content optimization for SEO",
    "multimedia content (video, images, infographics)",
    "user-focused content creation",
    "content calendars and scheduling",
    "branded content and messaging",
    "website and app content",
    "social media engagement strategies",
    "creative writing and copywriting"
  ].join(', ');

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: seoKeywords,
    authors: [{ name: "DMiraki Team" }],
    robots: "index, follow",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      type: "website",
      siteName: "DMiraki",
      locale: "en_US",
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: "Content Creation Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      site: "@dmiraki",
    },
  };
}

export default function Head() {
  return null;
}