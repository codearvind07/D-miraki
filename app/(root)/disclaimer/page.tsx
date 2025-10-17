import { Metadata } from "next";
import Link from "next/link";

// Add metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const title = "Disclaimer | DMiraki";
  const description = "Disclaimer for the DMiraki website. The information provided is for general informational purposes only. We strive to keep content accurate but make no guarantees.";
  const url = "https://dmiraki.com/disclaimer";
  const image = "https://dmiraki.com/assets/og-image.jpg";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "DMiraki",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "DMiraki Disclaimer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

const Disclaimer = () => {
  return (
    <section className="flex flex-col items-start justify-center py-20 px-6 max-w-3xl mx-auto">
      {/* Added breadcrumb for internal linking */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link href="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">Disclaimer</span>
      </nav>
      {/* Added H1 tag for SEO */}
      <h1 className="text-2xl font-bold mb-4">Disclaimer</h1>

      <p className="mb-4">
        The information provided on the Dmiraki website is for general informational purposes only.
        While we strive to keep the content up to date and accurate, we make no representations or warranties of any kind, express or implied.
      </p>

      {/* Added H2 tags for SEO */}
      <h2 className="text-lg font-semibold mt-6">1. Content Accuracy</h2>
      <p className="mb-4">
        Although we make every effort to provide accurate and current information, Dmiraki does not guarantee that all content on this site is error-free, complete, or up to date.
      </p>

      <h2 className="text-lg font-semibold mt-6">2. Use of Information</h2>
      <p className="mb-4">
        Any reliance you place on the information found on this website is strictly at your own risk.
        We recommend independently verifying any critical details before making decisions based on the content.
      </p>

      <h2 className="text-lg font-semibold mt-6">3. External Links</h2>
      <p className="mb-4">
        Our website may include links to external websites or third-party content for reference and convenience.
        Dmiraki does not endorse or take responsibility for the accuracy, content, or privacy practices of these external sites.
      </p>

      <h2 className="text-lg font-semibold mt-6">4. Limitation of Liability</h2>
      <p className="mb-4">
        Under no circumstances shall Dmiraki be held liable for any loss or damage, direct or indirect,
        arising out of or in connection with the use of our website or reliance on any information provided.
      </p>

      <p className="mt-8">
        If you have any questions regarding this disclaimer, please feel free to contact us at{" "}
        <a href="mailto:info@dmiraki.com" className="text-blue-600 hover:underline">info@dmiraki.com</a>.
      </p>
      
      <div className="mt-8">
        <Link href="/contact-us" className="text-blue-600 hover:underline">
          Contact Us →
        </Link>
      </div>
    </section>
  );
};

export default Disclaimer;