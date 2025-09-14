export default function Head() {
  const title = "Web Design & Development | Modern Website Solutions";
  const description =
    "Get fast, responsive & SEO-friendly websites with our web design & development services. Custom WordPress, e-commerce & UI/UX solutions for growth.";
  const url = "https://dmiraki.com/code-and-build/web-design-and-development";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="web design and development services, website design company, web development agency, responsive web design services, WordPress development company, custom web design agency, e-commerce website development, professional website redesign services, UI/UX design services, affordable web design and development services, best website design company for small businesses, custom WordPress development agency, e-commerce web development services for startups, mobile-friendly website design services, front-end development, backend solutions, CMS web design, website optimization, user experience design" />
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
            "name": "Web Design & Development",
            "provider": {
              "@type": "Organization",
              "name": "DMiraki",
              "url": "https://dmiraki.com"
            },
            "url": url,
            "description": description,
            "areaServed": "Global",
            "serviceType": "WebDevelopment",
            "category": "Web Design & Development",
            "keywords": "web design and development services, website design company, web development agency, responsive web design services, WordPress development company"
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
              { "@type": "ListItem", "position": 3, "name": "Web Design & Development", "item": url }
            ]
          }),
        }}
      />
    </>
  );
}