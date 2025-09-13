export default function Head() {
  const title = "UI & UX Design Services | Creative User Experience Agency";
  const description =
    "Deliver engaging digital experiences with expert UI & UX design. Wireframing, prototyping, mobile app & web design that boosts usability and conversions.";
  const url = "https://dmiraki.com/code-and-build/ui-and-ux-design";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="UI & UX design services, UI UX design company, best UX design agency, user interface and experience design, mobile app UI/UX design, web application UX design, wireframing and prototyping services, usability testing company, creative UI design agency, affordable UI/UX design services for startups, best mobile app UI UX design company, custom UX design services for websites, UI/UX design for SaaS applications, user experience optimization services, design thinking, product usability, interaction design, customer journey mapping, digital product design" />
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
            "name": "UI & UX Design",
            "provider": {
              "@type": "Organization",
              "name": "DMiraki",
              "url": "https://dmiraki.com"
            },
            "url": url,
            "description": description,
            "areaServed": "Global",
            "serviceType": "Design",
            "category": "UI/UX Design",
            "keywords": "UI & UX design services, UI UX design company, best UX design agency, user interface and experience design, mobile app UI/UX design"
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
              { "@type": "ListItem", "position": 3, "name": "UI & UX Design", "item": url }
            ]
          }),
        }}
      />
    </>
  );
}