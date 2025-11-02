"use client"

import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import { Testimonials } from '@/components/landing/testimonials';
import { Features } from '@/components/landing/features';
import { HeroSection } from '@/components/landing/hero-section';
import { CTASection } from '@/components/landing/cta-section';
import { AboutSection } from '@/components/landing/About';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Services } from '@/components/landing/Services';
import MoreSrvices from '@/components/landing/MoreSrvices';
import Link from 'next/link';

export default function HomeClient() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setFadeIn(true), 100); // Slight delay for smooth transition
    }, 2000); // Loader duration
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <Features />
      <MoreSrvices/>
      <Services />
      <CTASection />
      <Testimonials />
      
      {/* Additional Navigation Links for SEO */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Latest Insights</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Stay updated with our latest blog posts on web development trends.</p>
            <Link href="/blogs" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Read Our Blog →
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Discover how we can help elevate your digital presence.</p>
            <Link href="/brand-and-reach" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              View Services →
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Learn more about our mission and values.</p>
            <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Our Story →
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Ready to start your project? Contact our team today.</p>
            <Link href="/contact-us" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}