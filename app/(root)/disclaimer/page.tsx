import Link from "next/link";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = 'https://dmiraki.com/disclaimer';
  const pageTitle = 'Disclaimer | DMiraki';
  const pageDescription = 'Disclaimer for the DMiraki website. The information provided is for general informational purposes only. We strive to keep content accurate but make no guarantees.';
  const pageImage = 'https://dmiraki.com/assets/og-image.jpg';

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'DMiraki disclaimer',
      'website disclaimer',
      'informational purposes',
      'content accuracy',
      'external links',
      'limitation of liability'
    ],
    authors: [{ name: 'DMiraki Team' }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    },
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: siteUrl,
      type: 'website',
      siteName: 'DMiraki',
      locale: 'en_US',
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: 'DMiraki Disclaimer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      site: '@dmiraki',
    },
  };
}

const Disclaimer = () => {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Disclaimer",
            "url": "https://dmiraki.com/disclaimer",
            "description": "Disclaimer for the DMiraki website. The information provided is for general informational purposes only.",
            "publisher": {
              "@type": "Organization",
              "name": "DMiraki",
              "logo": {
                "@type": "ImageObject",
                "url": "https://dmiraki.com/assets/icon.png"
              }
            }
          })
        }}
      />
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
        
        {/* Additional Navigation Links */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Explore Our Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/about" className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">About Us</h3>
              <p className="text-gray-600 dark:text-gray-300">Learn more about our mission and values.</p>
            </Link>
            <Link href="/blogs" className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Latest Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">Stay updated with our latest blog posts.</p>
            </Link>
            <Link href="/privacy-policy" className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Privacy Policy</h3>
              <p className="text-gray-600 dark:text-gray-300">Understand how we protect your data.</p>
            </Link>
            <Link href="/terms-and-conditions" className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Terms & Conditions</h3>
              <p className="text-gray-600 dark:text-gray-300">Our terms of service and usage.</p>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default Disclaimer;