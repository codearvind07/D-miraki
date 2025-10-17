import { Metadata } from "next";
import Link from "next/link";

// Add metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const title = "Privacy Policy | DMiraki";
  const description = "Learn how DMiraki collects, uses, and protects your personal data when you interact with our services. Your privacy is important to us.";
  const url = "https://dmiraki.com/privacy-policy";
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
          alt: "DMiraki Privacy Policy",
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

const PrivacyPolicy = () => {
  return (
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
    </section>
  );
};
export default PrivacyPolicy;