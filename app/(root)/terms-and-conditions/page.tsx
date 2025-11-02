import { Metadata } from "next";
import Link from "next/link";

// Add metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = "https://dmiraki.com/terms-and-conditions";
  const pageTitle = "Terms & Conditions | DMiraki";
  const pageDescription = "Terms and conditions for using the DMiraki website and services. By accessing or using our website, you agree to comply with these terms.";
  const pageImage = "https://dmiraki.com/assets/og-image.jpg";

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'DMiraki terms and conditions',
      'website terms of use',
      'intellectual property',
      'limitation of liability',
      'website usage terms',
      'legal terms'
    ],
    authors: [{ name: "DMiraki Team" }],
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
      type: "website",
      siteName: "DMiraki",
      locale: "en_US",
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: "DMiraki Terms & Conditions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      site: "@dmiraki",
    },
  };
}

const TermsAndConditions = () => {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms & Conditions",
            "url": "https://dmiraki.com/terms-and-conditions",
            "description": "Terms and conditions for using the DMiraki website and services.",
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
          <span className="text-gray-900 dark:text-white">Terms & Conditions</span>
        </nav>
        {/* Added H1 tag for SEO */}
        <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>

        <p className="mb-4">
          Welcome to Dmiraki. By accessing or using our website, you agree to comply with and be bound
          by the following terms and conditions. If you do not agree with any part of these terms,
          please do not use our website.
        </p>

        {/* Added H2 tags for SEO */}
        <h2 className="text-lg font-semibold mt-6">1. Use of Website</h2>
        <p className="mb-4">
          You agree to use this website only for lawful purposes. Any unauthorized use of the site or
          misuse of the information provided is strictly prohibited and may result in legal action.
        </p>

        <h2 className="text-lg font-semibold mt-6">2. Intellectual Property</h2>
        <p className="mb-4">
          All content, logos, graphics, and materials on Dmiraki are the property of the company and are
          protected by applicable copyright and intellectual property laws. You may not reproduce,
          distribute, or exploit any material without prior written consent from Dmiraki.
        </p>

        <h2 className="text-lg font-semibold mt-6">3. Modifications</h2>
        <p className="mb-4">
          Dmiraki reserves the right to update or modify these terms at any time without prior notice.
          Continued use of the website following any changes indicates your acceptance of the new terms.
        </p>

        <h2 className="text-lg font-semibold mt-6">4. Limitation of Liability</h2>
        <p className="mb-4">
          Dmiraki will not be held responsible for any loss or damage, direct or indirect, arising from
          the use or inability to use our services, website, or the content provided herein.
        </p>

        <p className="mt-8">
          If you have any questions or concerns regarding these Terms & Conditions, feel free to reach out at{" "}
          <a href="mailto:info@dmiraki.com" className="text-blue-600 hover:underline">info@dmiraki.com</a>.
        </p>
        
        <div className="mt-8">
          <Link href="/contact-us" className="text-blue-600 hover:underline">
            Contact Us →
          </Link>
        </div>
        
        {/* Additional Navigation Links */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Explore Our Legal Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/disclaimer" className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Disclaimer</h3>
              <p className="text-gray-600 dark:text-gray-300">Important disclaimers about our services.</p>
            </Link>
            <Link href="/privacy-policy" className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Privacy Policy</h3>
              <p className="text-gray-600 dark:text-gray-300">How we protect your personal data.</p>
            </Link>
            <Link href="/contact-us" className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600 dark:text-gray-300">Get in touch with our team.</p>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default TermsAndConditions;