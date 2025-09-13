export default function Head() {
  const title = "SEO Services | Expert Search Engine Optimization Agency";
  const description =
    "Boost your rankings with professional SEO services. Local SEO, technical SEO, e-commerce SEO & keyword strategies that drive organic traffic and sales.";
  const url = "https://dmiraki.com/brand-and-reach/search-engine-optimization";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="SEO services, SEO agency, search engine optimization company, SEO experts near me, local SEO services, e-commerce SEO agency, technical SEO services, affordable SEO packages, SEO content writing, best SEO agency for small businesses, affordable SEO services for startups, local SEO company for Google Business Profile, e-commerce SEO services to increase sales, technical SEO audit services, organic traffic growth, keyword optimization, Google search rankings, SEO backlinks strategy, mobile-friendly website SEO" />
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
            "name": "Search Engine Optimization",
            "provider": {
              "@type": "Organization",
              "name": "DMiraki",
              "url": "https://dmiraki.com"
            },
            "url": url,
            "description": description,
            "areaServed": "Global",
            "serviceType": "MarketingService",
            "category": "SEO Services",
            "keywords": "SEO services, SEO agency, search engine optimization company, local SEO services, technical SEO services, e-commerce SEO agency"
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
              { "@type": "ListItem", "position": 3, "name": "Search Engine Optimization", "item": url }
            ]
          }),
        }}
      />
    </>
  );
}