"use client"
import { Testimonials } from '@/components/landing/testimonials';
import { Features } from '@/components/landing/features';
import { HeroSection } from '@/components/landing/hero-section';
import { CTASection } from '@/components/landing/cta-section';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import { AboutSection } from '@/components/landing/About';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Services } from '@/components/landing/Services';
import MoreSrvices from '@/components/landing/MoreSrvices';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setFadeIn(true), 100); // Slight delay for smooth transition
    }, 2000); // Loader duration
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-background">
        <HeroSection />
        <AboutSection />
        <HowItWorks />
        <Features />
        <MoreSrvices/>
        <Services />
        <CTASection />
        <Testimonials />
      </div>
    </>
  );
}