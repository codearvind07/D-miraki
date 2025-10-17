import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = 'https://dmiraki.com';
  const pageTitle = "UI & UX Design Services | Creative User Experience Agency";
  const pageDescription = "Deliver engaging digital experiences with expert UI & UX design. Wireframing, prototyping, mobile app & web design that boosts usability and conversions.";
  const pageImage = "https://dmiraki.com/assets/og-image.jpg";
  const canonicalUrl = "https://dmiraki.com/code-and-build/ui-and-ux-design";
  
  // SEO keywords organized by type
  const seoKeywords = [
    // Primary Keywords
    "UI and UX design",
    "user interface design services",
    "user experience design services",
    "professional UI/UX design",
    "mobile app UI/UX design",
    "web application UI/UX",
    "interactive UI design",
    "UX optimization for websites",
    "responsive UX/UI design",
    "UI/UX design company",
    
    // Secondary (Long-Tail) Keywords
    "custom UI design for businesses",
    "UX design for better user engagement",
    "UI/UX design for web and mobile apps",
    "modern interface design trends",
    "improving website usability with UX",
    "app interface design for Android & iOS",
    "human-centered UI/UX design",
    "UI/UX prototyping and wireframing",
    "UX audit and design improvements",
    "responsive and mobile-first UI/UX",
    
    // LSI (Contextual) Keywords
    "interaction design principles",
    "user-centered design",
    "interface usability testing",
    "wireframes and prototypes",
    "visual design and aesthetics",
    "accessibility in UI/UX",
    "conversion-focused UX",
    "digital product design",
    "user journey mapping",
    "design systems and component libraries"
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
          alt: "UI & UX Design Services",
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