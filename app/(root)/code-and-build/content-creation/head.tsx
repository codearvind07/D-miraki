export default function Head() {
  const title = "Content Creation Services | Creative Content Agency";
  const description =
    "Get engaging, high-quality content for your brand. Social media posts, blogs, videos, graphics & copywriting that drive traffic and boost conversions.";
  const url = "https://dmiraki.com/code-and-build/content-creation";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="content creation services, content creation agency, digital content services, professional content creators, social media content creation, blog and article writing services, video content production, creative graphic design agency, ad copywriting services, affordable content creation services for small businesses, best content creation agency for startups, professional blog writing and content services, video content creation for social media marketing, content creation services for e-commerce brands, brand storytelling, digital media production, creative visuals, SEO content writing, multimedia content creation" />
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
            "name": "Content Creation",
            "provider": {
              "@type": "Organization",
              "name": "DMiraki",
              "url": "https://dmiraki.com"
            },
            "url": url,
            "description": description,
            "areaServed": "Global",
            "serviceType": "ContentCreation",
            "category": "Content Creation",
            "keywords": "content creation services, content creation agency, digital content services, social media content creation, blog and article writing services"
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
              { "@type": "ListItem", "position": 3, "name": "Content Creation", "item": url }
            ]
          }),
        }}
      />
    </>
  );
}