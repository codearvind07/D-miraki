import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = 'https://dmiraki.com';
  const pageTitle = "Web Design & Development | Modern Website Solutions";
  const pageDescription = "Get fast, responsive & SEO-friendly websites with our web design & development services. Custom WordPress, e-commerce & UI/UX solutions for growth.";
  const pageImage = "https://dmiraki.com/assets/og-image.jpg";
  const canonicalUrl = "https://dmiraki.com/code-and-build/web-design-and-development";
  
  // SEO keywords organized by type
  const seoKeywords = [
    // Primary Keywords
    "web design and development",
    "professional website development",
    "custom web design services",
    "responsive website design",
    "website development company",
    "front-end and back-end development",
    "modern web design solutions",
    "full-stack web development",
    "business website development",
    "UI/UX web design",
    
    // Secondary (Long-Tail) Keywords
    "custom website design for businesses",
    "mobile-friendly web development",
    "website redesign and optimization",
    "e-commerce website development",
    "CMS-based website development",
    "scalable web applications",
    "SEO-friendly website development",
    "modern web frameworks (React, Next.js, Angular)",
    "website maintenance and support",
    "web development for startups and enterprises",
    
    // LSI (Contextual) Keywords
    "responsive layouts and design",
    "cross-browser compatibility",
    "website performance optimization",
    "user-friendly interface design",
    "interactive web design elements",
    "secure website development",
    "fast-loading websites",
    "modern UI/UX trends",
    "HTML, CSS, JavaScript development",
    "digital branding through web design"
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
          alt: "Web Design & Development Services",
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