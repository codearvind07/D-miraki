import React from 'react';
import Link from "next/link";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = 'https://dmiraki.com/contact-us';
  const pageTitle = 'Contact DMiraki for Digital Marketing & Web Development Solutions';
  const pageDescription = 'Get in touch with DMiraki for digital marketing, branding, web development, and IT solutions. We\'re here to help you grow.';
  const pageImage = 'https://dmiraki.com/assets/og-image.jpg';

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      'contact DMiraki',
      'digital marketing agency contact',
      'web design company contact',
      'SEO services contact',
      'social media marketing contact',
      'IT solutions contact',
      'digital transformation contact'
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
          alt: 'Contact DMiraki',
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

export default function Page() {
  return (
    <>
      {/* Canonical URL */}
      <link rel="canonical" href="https://dmiraki.com/contact-us/" />
      
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us",
            "url": "https://dmiraki.com/contact-us",
            "description": "Get in touch with DMiraki for digital marketing, branding, web development, and IT solutions. We're here to help you grow.",
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
      <div className="p-6 w-full mx-auto container pt-12">
        {/* Added breadcrumb for internal linking */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <Link href="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">Contact Us</span>
        </nav>
        
        {/* Added H1 tag for SEO */}
        <h1 className="text-4xl font-bold mb-4">
          Contact DMiraki for Digital Marketing & Web Development Solutions
        </h1>
        
        <p className="text-lg">
          Boost your online presence with our expert digital marketing strategies and custom web development services. 
          We specialize in SEO, social media marketing, responsive web design, and performance-optimized websites that drive results. 
          Whether you're a startup or an enterprise, we help you grow and engage your digital audience effectively.
        </p>
        
        <div className="mt-8">
          <Link href="/about" className="text-blue-600 hover:underline">
            Learn more about us →
          </Link>
        </div>
        
        {/* Additional Navigation Links */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Explore Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/brand-and-reach" className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Brand & Reach</h3>
              <p className="text-gray-600 dark:text-gray-300">Expand your brand presence and reach new audiences.</p>
            </Link>
            <Link href="/code-and-build" className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Code & Build</h3>
              <p className="text-gray-600 dark:text-gray-300">Transform ideas into powerful digital solutions.</p>
            </Link>
            <Link href="/brand-and-reach/search-engine-optimization" className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">SEO Services</h3>
              <p className="text-gray-600 dark:text-gray-300">Improve your search engine rankings and visibility.</p>
            </Link>
            <Link href="/blogs" className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Latest Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">Stay updated with our latest blog posts.</p>
            </Link>
          </div>
        </section>
        
        {/* Related Pages */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Continue Exploring</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
              About Us
            </Link>
            <Link href="/brand-and-reach/content-creation" className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
              Content Creation
            </Link>
            <Link href="/code-and-build/web-design-and-development" className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
              Web Development
            </Link>
            <Link href="/brand-and-reach/social-media-marketing-and-management" className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors">
              Social Media Marketing
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}