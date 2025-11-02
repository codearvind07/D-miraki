import Link from "next/link";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = 'https://dmiraki.com/privacy-policy';
  const pageTitle = 'Privacy Policy | DMiraki';
  const pageDescription = 'Learn how DMiraki collects, uses, and protects your personal data when you interact with our services. Your privacy is important to us.';
  const pageImage = 'https://dmiraki.com/assets/og-image.jpg';

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'DMiraki privacy policy',
      'data protection',
      'personal information',
      'data collection',
      'data usage',
      'data security',
      'user rights',
      'privacy rights'
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
          alt: 'DMiraki Privacy Policy',
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

const PrivacyPolicy = () => {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "url": "https://dmiraki.com/privacy-policy",
            "description": "Learn how DMiraki collects, uses, and protects your personal data when you interact with our services.",
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
          <span className="text-gray-900 dark:text-white">Privacy Policy</span>
        </nav>
        {/* Added H1 tag for SEO */}
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

        <p className="mb-4">
          At Dmiraki, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal data when you interact with our services.
        </p>

        {/* Added H2 tags for SEO */}
        <h2 className="text-lg font-semibold mt-6">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect basic personal information such as your name, email address, phone number, and other details when you:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Fill out a form on our website</li>
          <li>Subscribe to our updates or newsletters</li>
          <li>Contact us directly through email or other channels</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use your personal information only for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>To respond to your queries or service requests</li>
          <li>To improve our website and services</li>
          <li>To send updates or communications related to our offerings</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6">3. Data Protection and Security</h2>
        <p className="mb-4">
          We implement industry-standard security measures to safeguard your data from unauthorized access, disclosure, alteration, or destruction.
        </p>

        <h2 className="text-lg font-semibold mt-6">4. Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell, trade, or rent your personal information to third parties. Your data may only be shared with trusted partners or service providers strictly for operational purposes and under confidentiality agreements.
        </p>

        <h2 className="text-lg font-semibold mt-6">5. Your Rights</h2>
        <p className="mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent to data processing at any time</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6">6. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be reflected on this page, and where appropriate, we will notify you via email.
        </p>

        <h2 className="text-lg font-semibold mt-6">7. Contact Us</h2>
        <p className="mb-2">
          If you have any questions or concerns about this Privacy Policy, feel free to reach out:
        </p>
        <p className="font-semibold">Dmiraki</p>
        <p>Email: <a href="mailto:info@dmiraki.com" className="text-blue-600 hover:underline">info@dmiraki.com</a></p>
        
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
            <Link href="/terms-and-conditions" className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Terms & Conditions</h3>
              <p className="text-gray-600 dark:text-gray-300">Our terms of service and usage.</p>
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

export default PrivacyPolicy;