export default function Head() {
  const title = "Terms & Conditions | DMiraki";
  const description =
    "Read the terms and conditions that govern your use of DMiraki's website and services.";
  const url = "https://dmiraki.com/terms-and-conditions";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="DMiraki terms and conditions, website terms, digital agency terms, service terms, legal terms, website usage terms" />
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
        dangerouslySetInnerHTML={
          {
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Terms & Conditions",
              "url": url,
              "description": description
            }),
          }
        }
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={
          {
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dmiraki.com" },
                { "@type": "ListItem", "position": 2, "name": "Terms & Conditions", "item": url }
              ]
            }),
          }
        }
      />
    </>
  );
}