export default function Head() {
  const title = "Content Creation & Strategy | Creative Content Agency";
  const description =
    "Grow your brand with expert content creation & strategy. Social media posts, videos, blogs & copywriting that boost engagement and SEO rankings.";
  const url = "https://dmiraki.com/brand-and-reach/content-creation";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="content creation agency, content marketing strategy services, digital content creation company, creative content agency, blog writing services, video content creation for business, social media content agency, professional copywriting services, graphic design content services, best content creation agency for small businesses, affordable blog writing and content strategy services, video content creation services for brands, content marketing strategy for startups, SEO-friendly content writing company, storytelling for brands, content calendar planning, audience engagement strategy, branded content creation, multimedia marketing solutions" />
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
            "name": "Content Creation & Strategy",
            "provider": {
              "@type": "Organization",
              "name": "DMiraki",
              "url": "https://dmiraki.com"
            },
            "url": url,
            "description": description,
            "areaServed": "Global",
            "serviceType": "MarketingService",
            "category": "Content Creation",
            "keywords": "content creation agency, content marketing strategy services, blog writing services, video content creation for business, social media content agency"
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
              { "@type": "ListItem", "position": 3, "name": "Content Creation", "item": url }
            ]
          }),
        }}
      />
    </>
  );
}