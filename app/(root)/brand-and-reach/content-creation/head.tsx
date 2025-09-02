export default function Head() {
  const title = "Content Creation Services | DMiraki";
  const description = "Copywriting, visuals, and video content that build brand stories and drive engagement.";
  const url = "https://dmiraki.com/brand-and-reach/content-creation";
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dmiraki.com" },
          { "@type": "ListItem", "position": 2, "name": "Brand & Reach", "item": "https://dmiraki.com/brand-and-reach" },
          { "@type": "ListItem", "position": 3, "name": "Content Creation", "item": url }
        ]
      }) }} />
    </>
  );
}


