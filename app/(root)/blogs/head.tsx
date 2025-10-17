export default function Head() {
  const title = "Blogs | Insights, Guides & Case Studies | DMiraki";
  const description =
    "Explore DMiraki's latest blogs on digital marketing, web design, SEO, social media, and growth strategies.";
  const url = "https://dmiraki.com/blogs";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="digital marketing blog, web design insights, SEO tips, social media strategies, growth strategies, digital transformation, online marketing, website development, digital strategy, marketing trends" />
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
              "@type": "Blog",
              "name": "DMiraki Blog",
              "url": url,
              "description": description,
              "publisher": {
                "@type": "Organization",
                "name": "DMiraki",
                "url": "https://dmiraki.com"
              }
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
                { "@type": "ListItem", "position": 2, "name": "Blogs", "item": url }
              ]
            }),
          }
        }
      />
    </>
  );
}