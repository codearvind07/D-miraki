export default function Head() {
  const title = "Social Media Marketing & Management | DMiraki";
  const description =
    "Strategic social media marketing and management services to grow your brand, build community, and drive measurable ROI across LinkedIn, Facebook, Instagram, YouTube, and X.";
  const url = "https://dmiraki.com/brand-and-reach/social-media-marketing-and-management";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
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
            "name": "Social Media Marketing & Management",
            "provider": {
              "@type": "Organization",
              "name": "DMiraki",
              "url": "https://dmiraki.com"
            },
            "url": url,
            "description": description,
            "areaServed": "Global",
            "serviceType": "MarketingService",
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
              { "@type": "ListItem", "position": 2, "name": "Brand & Reach", "item": "https://dmiraki.com/brand-and-reach" },
              { "@type": "ListItem", "position": 3, "name": "Social Media Marketing & Management", "item": url }
            ]
          }),
        }}
      />
    </>
  );
}


