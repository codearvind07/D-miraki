export default function Head() {
  const title = "IoT-Based Software Solutions | Connected Systems Development";
  const description =
    "Build intelligent IoT systems with our software development services. Custom IoT solutions, device development, and platform integration for enterprise efficiency and data insights.";
  const url = "https://dmiraki.com/code-and-build/iot-based-software";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="IoT development, IoT solutions, IoT software, enterprise IoT, IoT platform, smart device software, IoT data analytics, connected solutions, custom IoT development, IoT for operational efficiency, IoT data insights, reduce costs with IoT, IoT for manufacturing, IoT device development, IoT platform integration, smart solutions for organizations, connected intelligence, security-first architecture, scalable IoT infrastructure, seamless IoT integration, industrial IoT solutions, smart building management, IoT automation, real-time IoT monitoring, IoT security protocols, cloud IoT integration, IoT data processing, enterprise IoT systems, B2B IoT solutions, IoT sensor networks, wireless IoT solutions" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "IoT-Based Software",
            "provider": {
              "@type": "Organization",
              "name": "DMiraki",
              "url": "https://dmiraki.com"
            },
            "url": url,
            "description": description,
            "areaServed": "Global",
            "serviceType": "SoftwareDevelopment",
            "category": "IoT Solutions",
            "keywords": "IoT development, IoT solutions, IoT software, enterprise IoT, IoT platform, smart device software"
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dmiraki.com" },
              { "@type": "ListItem", "position": 2, "name": "Code & Build", "item": "https://dmiraki.com/code-and-build" },
              { "@type": "ListItem", "position": 3, "name": "IoT-Based Software", "item": url }
            ]
          }),
        }}
      />
    </>
  );
}