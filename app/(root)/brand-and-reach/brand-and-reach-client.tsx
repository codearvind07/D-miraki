"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { useTheme } from "@/components/theme-provider";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";
import { ServicesProps } from "@/lib/utils";

// Assets
import image from "../../../assets/growth.png";
import image1 from "../../../assets/reflecting.png";
import image2 from "../../../assets/looking-ahead.png";
import image3 from "../../../assets/plantsback.png";
import image5 from "../../../assets/bueno.png";

const marketingServices: ServicesProps[] = [
  {
    title: "Social Media Marketing & Management",
    description:
      "Build Communities That Convert Into Customers. Transform your social presence into a powerful revenue engine with our comprehensive social media strategies.",
    image: image1 as any,
    readmore: "/brand-and-reach/social-media-marketing-and-management",
  },
  {
    title: "Profitable Performance Marketing",
    description:
      "Data-Driven Campaigns That Maximize ROI. Scale your business with targeted advertising campaigns that deliver measurable results and consistent growth.",
    image: image as any,
    readmore: "/brand-and-reach/profitable-performance-marketing",
  },
  {
    title: "Content Creation & Strategy",
    description:
      "Compelling Content That Drives Engagement: Establish thought leadership and drive conversions with strategic content that resonates with your ideal customers.",
    image: image5 as any,
    readmore: "/brand-and-reach/content-creation",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Organic Visibility That Builds Long-Term Value. Dominate search results and attract high-intent prospects with our proven SEO methodologies.",
    image: image2 as any,
    readmore: "/brand-and-reach/search-engine-optimization",
  },
];

export default function BrandAndReachClient() {
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
            "@type": "CollectionPage",
            "name": "Brand & Reach Services",
            "url": "https://dmiraki.com/brand-and-reach",
            "description": "Grow your brand with DMiraki's branding, design, content creation, performance marketing, and social media services.",
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
      {/* HERO */}
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
              <span className="text-gray-900 dark:text-white">Brand & Reach</span>
            </nav>
            {/* Added H1 tag for SEO */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Brand &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Reach
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Strategic Digital Marketing That Amplifies Your Impact. Build Brand Authority While Driving Measurable Growth.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              In today's competitive digital landscape, reaching your target audience isn't enough – you need to engage, convert, and retain them. Our Brand & Reach solutions combine strategic thinking with tactical execution to build your brand authority while delivering consistent lead generation and revenue growth.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
              <Image
                src={image3}
                alt="Brand and Reach Hero Image"
                className="w-full max-w-md mx-auto relative rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Added H2 tag for SEO */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Strategic Marketing Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to build your brand and drive measurable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingServices.map(({ title, description, readmore }: ServicesProps) => (
              <div
                key={title}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
                <Link
                  href={readmore}
                  className={`inline-flex items-center ${buttonVariants({
                    variant: "link",
                  })} text-blue-600 dark:text-blue-400`}
                >
                  <ArrowTopRightIcon className="mr-2 w-5 h-5" />
                  Read more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Added H2 tag for SEO */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Our Marketing Approach Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Strategic foundation, seamless integration, and continuous optimization for maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Strategic Foundation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                First, we start by understanding your business goals, target audience, and competitive landscape to create campaigns that align with your objectives.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Multi-Channel Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our campaigns work seamlessly across all digital channels, creating a cohesive brand experience that reinforces your message.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Continuous Optimization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We constantly test, measure, and refine your campaigns to ensure maximum performance and ROI.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
              <h3 className="text-xl font-semibold mb-4">Transparent Reporting</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get detailed insights into campaign performance with our comprehensive analytics and regular strategy reviews.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Navigation Links */}
      <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/code-and-build" className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Code & Build</h3>
              <p className="text-gray-600 dark:text-gray-300">Transform ideas into powerful digital solutions.</p>
            </Link>
            <Link href="/blogs" className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Latest Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">Stay updated with our latest blog posts.</p>
            </Link>
            <Link href="/about" className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">About Us</h3>
              <p className="text-gray-600 dark:text-gray-300">Learn more about our mission and values.</p>
            </Link>
            <Link href="/contact-us" className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-300">Start your project with our expert team.</p>
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