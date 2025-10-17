import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = 'https://dmiraki.com';
  const pageTitle = "IoT-Based Software Solutions | Connected Systems Development";
  const pageDescription = "Build intelligent IoT systems with our software development services. Custom IoT solutions, device development, and platform integration for enterprise efficiency and data insights.";
  const pageImage = "https://dmiraki.com/assets/og-image.jpg";
  const canonicalUrl = "https://dmiraki.com/code-and-build/iot-based-software";
  
  // SEO keywords organized by type
  const seoKeywords = [
    // Primary Keywords
    "IoT-based software development",
    "Internet of Things software solutions",
    "IoT application development",
    "smart device software development",
    "industrial IoT software",
    "custom IoT solutions",
    "connected device software",
    "IoT platform development",
    "IoT software company",
    "IoT-enabled applications",
    
    // Secondary (Long-Tail) Keywords
    "IoT software development for businesses",
    "smart home and industrial IoT applications",
    "IoT integration with cloud platforms",
    "real-time IoT data processing",
    "custom IoT app solutions",
    "IoT device connectivity and management",
    "IoT analytics and reporting software",
    "scalable IoT software architecture",
    "secure IoT software development",
    "IoT solutions for automation and monitoring",
    
    // LSI (Contextual) Keywords
    "sensor data integration",
    "edge computing for IoT",
    "IoT mobile and web dashboards",
    "cloud-connected IoT solutions",
    "predictive analytics with IoT",
    "industrial automation software",
    "smart device management",
    "IoT protocols and APIs",
    "remote monitoring applications",
    "IoT system security and compliance"
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
          alt: "IoT-Based Software Solutions",
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