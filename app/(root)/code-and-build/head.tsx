export default function Head() {
  const title = "Web Development & Design Services | Code & Build Solutions by DMiraki";
  const description =
    "Custom web development, UI/UX design, and technical solutions by DMiraki. Build high-performance websites that convert visitors into customers.";
  const url = "https://dmiraki.com/code-and-build";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="web development, UI/UX design, custom websites, e-commerce solutions, technical optimization, DMiraki" />
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
    </>
  );
}


