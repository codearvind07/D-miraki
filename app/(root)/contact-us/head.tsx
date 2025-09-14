export default function Head() {
  const title = "Contact Us | DMiraki";
  const description =
    "Get in touch with DMiraki for digital marketing, branding, web development, and IT solutions. We're here to help you grow.";
  const url = "https://dmiraki.com/contact-us";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="contact DMiraki, digital marketing agency contact, web design company contact, SEO services contact, social media marketing contact, IT solutions contact, digital transformation contact" />
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
              "@type": "ContactPage",
              "name": "Contact Us",
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
                { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": url }
              ]
            }),
          }
        }
      />
    </>
  );
}


