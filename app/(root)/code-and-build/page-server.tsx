import { Metadata } from "next";
import CodeAndBuildClient from "./code-and-build-client";


export async function generateMetadata(): Promise<Metadata> {
  // We'll use the same metadata generation logic as in head.tsx
  // But we need to call the generateMetadata function from head.tsx
  // Since we can't directly import and call it, we'll recreate the logic here
  
  const siteUrl = 'https://dmiraki.com';
  const pageTitle = 'Code & Build Services | Web Design, UI/UX & IoT Solutions';
  const pageDescription = 'Professional web design and development, UI/UX design, content creation, and IoT-based software solutions to build your digital presence and drive measurable growth.';
  const pageImage = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80';
  const canonicalUrl = `${siteUrl}/code-and-build`;
  
  // Primary and secondary SEO keywords
  const seoKeywords = [
    // Primary Keywords
    "web design and development services",
    "UI and UX design company",
    "content creation services",
    "IoT-based software development",
    "professional website development",
    "custom UI/UX design solutions",
    "IoT software solutions",
    "digital content creation for businesses",
    "interactive web and app design",
    "innovative IoT applications",
    
    // Secondary (Long-Tail) Keywords
    "responsive web design and development",
    "mobile-first UI/UX design",
    "creative content strategy and production",
    "IoT software development for enterprises",
    "UX design for better user engagement",
    "website design with modern UI principles",
    "IoT-enabled smart applications",
    "content marketing and SEO-driven content",
    "end-to-end web and app solutions",
    "IoT solutions for automation and efficiency",
    
    // LSI (Contextual) Keywords
    "front-end and back-end development",
    "user experience optimization",
    "interface design for web and mobile apps",
    "digital storytelling through content",
    "IoT device integration and software",
    "cloud-connected IoT applications",
    "branding through UI/UX design",
    "high-performance web applications",
    "interactive dashboards and IoT platforms",
    "scalable and secure web solutions"
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
          alt: "Code & Build Services - Web Design, UI/UX & IoT Solutions",
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

export default function CodeAndBuild() {
  return <CodeAndBuildClient />;
}