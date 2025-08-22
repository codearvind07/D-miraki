export default function Head() {
  const title = "Code & Build Services | Web Design, Development, UI/UX | DMiraki";
  const description =
    "End-to-end web design, development, and UI/UX services by DMiraki to build fast, scalable, and delightful digital products.";
  const url = "https://dmiraki.com/code-and-build";
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
    </>
  );
}


