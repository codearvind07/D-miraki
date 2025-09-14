export default function Head() {
  const title = "Profitable Performance Marketing | ROI-Driven Ad Campaigns";
  const description =
    "Boost sales with ROI-focused performance marketing. Expert PPC, Google Ads, Meta Ads & LinkedIn campaigns that drive measurable business growth.";
  const url = "https://dmiraki.com/brand-and-reach/profitable-performance-marketing";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="performance marketing agency, performance marketing services, ROI-driven marketing campaigns, pay per click (PPC) management, Google Ads management company, Facebook & Instagram paid ads, LinkedIn ads for B2B leads, YouTube advertising agency, conversion optimization services, best performance marketing agency for e-commerce, Google Ads management services for startups, affordable PPC agency for small business, LinkedIn B2B lead generation marketing company, ROI-driven performance marketing campaigns, customer acquisition, digital ad campaigns, lead generation marketing, retargeting ads strategy, revenue growth marketing" />
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
            "name": "Profitable Performance Marketing",
            "provider": {
              "@type": "Organization",
              "name": "DMiraki",
              "url": "https://dmiraki.com"
            },
            "url": url,
            "description": description,
            "areaServed": "Global",
            "serviceType": "MarketingService",
            "category": "Performance Marketing",
            "keywords": "performance marketing agency, ROI-driven marketing campaigns, pay per click (PPC) management, Google Ads management, Facebook & Instagram paid ads"
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
              { "@type": "ListItem", "position": 3, "name": "Profitable Performance Marketing", "item": url }
            ]
          }),
        }}
      />
    </>
  );
}