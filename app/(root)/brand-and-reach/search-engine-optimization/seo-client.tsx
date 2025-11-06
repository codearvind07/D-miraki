"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { ChartIcon, WalletIcon, MagnifierIcon } from "@/components/Icons";
import roboto from "../../../../assets/roboto.png";
import { generateStructuredData, generateFAQData } from "./page-server";

// SEO services data
const seoServices = [
  {
    title: "Local SEO Services",
    description:
      "Dominate local search results and attract customers in your geographic area. We optimize your Google Business Profile, local citations, and location-based content to improve visibility in local searches.",
    icon: <ChartIcon />,
  },
  {
    title: "Technical SEO",
    description:
      "Improve your website's crawlability, indexability, and performance. We conduct comprehensive technical audits to identify and fix issues that impact your search rankings.",
    icon: <WalletIcon />,
  },
  {
    title: "Ecommerce SEO",
    description:
      "Drive more traffic and sales to your online store. We optimize product pages, category pages, and user-generated content to improve ecommerce conversions.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Keyword Research & Strategy",
    description:
      "Identify high-value keywords that align with user intent and business goals. Our research combines search volume, competition analysis, and business relevance to maximize ROI.",
    icon: <ChartIcon />,
  },
];

// SEO approach data
const seoApproach = [
  {
    title: "Comprehensive Audit",
    description:
      "We start with a thorough analysis of your current SEO performance, identifying opportunities and obstacles to improved rankings.",
  },
  {
    title: "Strategic Planning",
    description:
      "Develop a customized SEO strategy based on your business goals, target audience, and competitive landscape.",
  },
  {
    title: "Implementation",
    description:
      "Execute optimizations across on-page elements, content, technical factors, and link-building opportunities.",
  },
  {
    title: "Monitoring & Optimization",
    description:
      "Continuously track performance metrics and refine strategies to ensure sustained growth in organic traffic and conversions.",
  },
];

// SEO results data
const seoResults = [
  {
    badge: "RANK",
    title: "Higher Search Rankings",
    color: "from-blue-500 to-blue-700",
    text: "Achieve top positions for high-value keywords relevant to your business and target audience.",
  },
  {
    badge: "TRAF",
    title: "Increased Organic Traffic",
    color: "from-green-500 to-green-700",
    text: "Drive qualified visitors to your website who are actively searching for your products or services.",
  },
  {
    badge: "LEAD",
    title: "More Leads & Sales",
    color: "from-purple-500 to-purple-700",
    text: "Convert organic traffic into customers with strategically optimized landing pages and CTAs.",
  },
  {
    badge: "ROI",
    title: "Better Return on Investment",
    color: "from-orange-500 to-orange-700",
    text: "SEO provides one of the highest ROIs of any marketing channel with compounding long-term benefits.",
  },
];

// SEO benefits data
const seoBenefits = [
  {
    kpi: "↑ Organic Visibility",
    text: "Get on Google first page for relevant keywords and increase your brand's online presence.",
    color: "bg-blue-500",
  },
  {
    kpi: "↑ Website Traffic",
    text: "Drive qualified traffic to your website through organic lead generation strategies.",
    color: "bg-green-500",
  },
  {
    kpi: "↑ Authority",
    text: "Establish your brand as an industry leader through valuable content and optimized user experience.",
    color: "bg-purple-500",
  },
  {
    kpi: "↓ Marketing Costs",
    text: "Reduce dependency on paid advertising with sustainable organic traffic growth.",
    color: "bg-orange-500",
  },
  {
    kpi: "↑ Conversions",
    text: "Improve website conversion rate with SEO-optimized landing pages and user experience.",
    color: "bg-rose-500",
  },
];

export default function SearchEngineOptimizationClient() {
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

  // Get structured data
  const structuredData = generateStructuredData();
  const faqData = generateFAQData();

  // Generate FAQPage structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData
  };

  return (
    <>
      {/* Service Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
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
              <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Link href="/brand-and-reach" className="hover:text-gray-900 dark:hover:text-white">Brand & Reach</Link>
                <span>/</span>
                <span className="text-gray-900 dark:text-white">Search Engine Optimization</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Search Engine{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Optimization
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Dominate Search Results and Drive Organic Growth. Professional SEO Services for Sustainable Business Results.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                Our comprehensive SEO services help businesses get on Google first page for relevant keywords, driving organic lead generation and sustainable long-term growth. Whether you need SEO for small business or enterprise-level solutions, our SEO company has the expertise to deliver measurable results.
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Get Free SEO Audit
                </button>
                <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 text-gray-800 dark:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
              <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
                <Image
                  src={roboto}
                  alt="Search Engine Optimization"
                  className="w-full max-w-md mx-auto relative rounded-lg shadow-2xl"
                  width={roboto.width}
                  height={roboto.height}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          ref={addToRefs}
          className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to improve your search rankings and drive measurable organic growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {seoServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section
          ref={addToRefs}
          className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Approach</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures consistent results and sustainable growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {seoApproach.map((approach, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-xl font-semibold mb-4">{approach.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section
          ref={addToRefs}
          className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Results</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Measurable outcomes that drive business growth and strengthen your market position.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {seoResults.map((result, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-white font-bold mb-4 bg-gradient-to-r ${result.color}`}>
                    {result.badge}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{result.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{result.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          ref={addToRefs}
          className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Key SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Benefits</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The business outcomes we deliver through strategic search engine optimization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {seoBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className={`${benefit.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto`}>
                    {benefit.kpi}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-12 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's build an SEO strategy that drives organic growth and delivers measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Schedule a Consultation
              </Link>
              <Link href="/blogs" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 text-gray-800 dark:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        <section className="py-16 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Resources</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore our latest insights on SEO and digital marketing strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/blogs/blog1" className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Why Every Business Needs a Professional Website in 2025</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Discover why having a professional website is crucial for business success in 2025.</p>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Read Article →</span>
                </div>
              </Link>

              <Link href="/blogs/blog3" className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">The ROI of Professional Web Design: Numbers That Matter</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Learn how professional web design delivers measurable ROI through increased conversions.</p>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Read Article →</span>
                </div>
              </Link>

              <Link href="/blogs/blog13" className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Website Performance Optimization: Speed Strategies That Drive Business Results</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Learn essential website performance optimization strategies to improve speed and user experience.</p>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Read Article →</span>
                </div>
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