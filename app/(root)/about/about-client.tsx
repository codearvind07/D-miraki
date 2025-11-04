"use client";

import * as React from "react";
import pilot from "../../../assets/pilot.png";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "@/components/Icons";
import { MagicCard } from "@/components/ui/magic-card";
import { buttonVariants } from "@/components/ui/button";
import experiments from "@/assets/experiments.png";
import chaotic from "../../../assets/chaotic.png";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useRef } from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients' needs, ensuring personalized strategies that align with their business goals and deliver measurable results.",
  },
  {
    icon: <MapIcon />,
    title: "Transparent Communication",
    description:
      "Open and honest communication is at the heart of our operations, fostering trust and collaboration throughout every project.",
  },
  {
    icon: <PlaneIcon />,
    title: "Innovative Solutions",
    description:
      "We leverage latest technologies and creative strategies to provide cutting-edge solutions that drive business growth.",
  },
  {
    icon: <GiftIcon />,
    title: "Data-Driven Strategies",
    description:
      "We utilize comprehensive data analysis to inform our decisions, ensuring effective and efficient marketing campaigns.",
  },
];

export default function AboutClient() {
  const { theme } = useTheme();
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-fade-in");
        }),
      { threshold: 0.1 }
    );
    sectionRefs.current.forEach((r) => r && observer.observe(r));
    return () => sectionRefs.current.forEach((r) => r && observer.unobserve(r));
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About DMiraki",
            "description": "DMiraki is a professional website development and mobile app development company offering custom digital solutions, SEO services, and digital marketing for business growth.",
            "url": "https://dmiraki.com/about",
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
      
      {/* Animated background blobs */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob"></div>
      </div>

      <section className="container pb-24 space-y-12">
      {/* Hero Section */}
      <section
        ref={addToRefs}
        className="relative py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/20 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Added breadcrumb for internal linking */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Link href="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white">About</span>
            </nav>
            {/* Added H1 tag for SEO */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                DMiraki
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your Strategic Partner in Digital Success — passionate experts dedicated to your growth.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              We empower businesses to achieve sustainable growth through strategic digital innovation. Our mission is to build partnerships, not just services, creating lasting value for ambitious businesses ready to transform their online presence.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
              <Image
                src={chaotic}
                alt="About DMiraki Hero Image"
                className="w-full max-w-md mx-auto relative rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Who We Are
              </span>
            </h2>
            
            {/* Centered Image */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-[280px] h-[280px] rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-blue-400 to-purple-500">
                  <Image
                    src={pilot}
                    alt="DMiraki Team"
                    className="w-full h-full object-cover"
                  />  
                </div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-500/30 blur-xl -z-10" />
              </div>
            </div>
          </div>

          {/* Grid Layout for Content Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Our Mission</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Empowering businesses to achieve sustainable growth through strategic digital innovation. We build partnerships, not just services.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Our Vision</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To be the most trusted digital partner for ambitious businesses ready to transform their online presence into a competitive advantage.
              </p>
            </div>

            {/* Story Card - Full Width */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-4 text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Story</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Founded on the principle that every business deserves exceptional digital presence, DMiraki has grown from a small team of passionate experts to a comprehensive agency trusted worldwide.
              </p>
            </div>

            {/* Values Card - Full Width */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-6 text-gradient bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Our Values</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">Excellence Without Compromise:</span>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">Maintaining the highest standards in everything we do.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">Transparency in Every Interaction:</span>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">Clear communication and honest timelines.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">Innovation That Matters:</span>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">Staying ahead of trends to give you a competitive edge.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">Results-Driven Partnership:</span>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">Every decision is focused on measurable outcomes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Strategic foundation, technical excellence, and business integration for comprehensive digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Strategic Digital Marketing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Campaigns that combine creativity with data to drive conversions and engagement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Technical Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                High-performing digital experiences that look exceptional and work flawlessly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Business Strategy Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ensuring digital solutions align with broader business goals for lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Proven results, dedicated support, and industry recognition for sustained partnership success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
              <p className="text-gray-600 dark:text-gray-300">
                200+ successful projects across industries with measurable results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Dedicated Team Approach</h3>
              <p className="text-gray-600 dark:text-gray-300">
                You'll work with a consistent team invested in your success.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Ongoing Support & Optimization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuous optimization and support for sustained growth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Industry Recognition</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Recognized for innovation and results by peers and publications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
              <Image
                src={experiments}
                alt="How We Work Process"
                className="w-full max-w-md mx-auto relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              How We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Work?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our work process is simple, but it packs a punch.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map(({ icon, title, description }: FeatureProps) => (
                <div
                  key={title}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      {icon}
                    </div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Digital Transformation?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join hundreds of businesses that have transformed their digital presence with DMiraki. Let's build something extraordinary together.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className={`inline-flex items-center ${buttonVariants({
                size: "lg",
              })} bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700`}
            >
              Schedule a Strategy Call
              <ArrowTopRightIcon className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/brand-and-reach"
              className={`inline-flex items-center ${buttonVariants({
                variant: "outline",
                size: "lg",
              })} border-blue-200 dark:border-blue-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50/50 dark:hover:bg-blue-900/20`}
            >
              Explore Our Services
              <ArrowTopRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

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
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Ready to start your project? Contact our team today.</p>
            <Link href="/contact-us" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Get in Touch →
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Home Page</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Return to our main page to explore all our offerings.</p>
            <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Go Home →
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fade-in { opacity: 1 !important; }
      `}</style>
      </section>
    </>
  );
}