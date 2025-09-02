export default function Head() {
  const title = "DMiraki | Elevate Your Brand with Digital Excellence";
  const description =
    "DMiraki is your trusted digital partner for SEO, branding, web design, marketing, and IT solutions. Transform your vision into impact.";
  const url = "https://dmiraki.com/";
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


