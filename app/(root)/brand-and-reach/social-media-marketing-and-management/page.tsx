"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChartIcon, WalletIcon, MagnifierIcon } from "@/components/Icons";
import roboto from "../../../../assets/roboto.png";

// Service data
const serviceList = [
  {
    title: "Strategic Social Media Management",
    description:
      "Consistent Brand Presence That Builds Authority. Platform-specific content strategies, community engagement, brand voice development, and reputation monitoring. Perfect for small business social media management and community building.",
    icon: <ChartIcon />,
  },
  {
    title: "Social Media Advertising",
    description:
      "Targeted Campaigns That Deliver ROI. Facebook advertising, Instagram advertising, LinkedIn advertising, and social media advertising across all platforms optimized for your business goals and sales conversion.",
    icon: <WalletIcon />,
  },
  {
    title: "Content Creation & Curation",
    description:
      "Engaging Content That Drives Action. Visual content design, video production, conversion copywriting, and user-generated content strategies that drive engagement and convert audiences.",
    icon: <MagnifierIcon />,
  },
];

// Platform expertise data
const platformExpertise = [
  {
    name: "LinkedIn (B2B Focus)",
    description:
      "Professional Network That Generates Quality Leads. Build thought leadership and generate high-value B2B leads through strategic LinkedIn marketing for B2B companies.",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Facebook & Instagram",
    description:
      "Visual Storytelling That Converts. Create compelling brand narratives with Facebook marketing and Instagram marketing that engage your audience and drive website traffic and sales.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Twitter/X",
    description:
      "Real-Time Engagement That Builds Community. Establish your brand as an industry authority through strategic conversations and content sharing for social media conversion strategy.",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "YouTube",
    description:
      "Video Marketing That Builds Trust. Leverage the power of video marketing for business to educate your audience and build deeper connections with prospects.",
    color: "from-red-500 to-red-700",
  },
];

// Process steps
const processSteps = [
  {
    step: "1",
    title: "Social Media Audit & Strategy Development",
    description:
      "We analyze your current presence, research your competitors, and develop a comprehensive strategy aligned with your business goals.",
  },
  {
    step: "2",
    title: "Content Planning & Creation",
    description:
      "Our team creates a content calendar with engaging, platform-specific content designed to drive engagement and conversions.",
  },
  {
    step: "3",
    title: "Community Management & Engagement",
    description:
      "We actively engage with your audience, respond to comments and messages, and build relationships that turn followers into customers.",
  },
  {
    step: "4",
    title: "Performance Monitoring & Optimization",
    description:
      "Continuous tracking and optimization ensure your social media efforts consistently deliver maximum ROI.",
  },
];

// Expected results
const expectedResults = [
  {
    title: "Increased Brand Awareness",
    description:
      "Expand your reach and build recognition within your target market through a consistent, engaging presence. Get customers from social media with our proven brand awareness strategies.",
  },
  {
    title: "Higher Website Traffic",
    description:
      "Drive qualified traffic to your website through strategic content that encourages clicks and conversions. Our social media marketing to increase sales approach ensures maximum traffic quality.",
  },
  {
    title: "Lead Generation",
    description:
      "Convert social media engagement into actual business leads through strategic calls-to-action and landing page optimization. Our social media conversion strategy delivers measurable results.",
  },
  {
    title: "Improved Customer Loyalty",
    description:
      "Build stronger relationships with existing customers through ongoing engagement and valuable content. Our social media community building approach creates lasting customer loyalty.",
  },
];

function SocialMediaMarketingAndManagement() {
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
                <span>Brand & Reach</span>
                <span>/</span>
                <span className="text-gray-900 dark:text-white">Social Media Marketing</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Social Media Marketing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  & Management
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Transform Your Social Presence Into a Revenue Engine. Build Communities That Drive Business Growth.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                Social media isn't just about likes and follows – it's about building meaningful connections with your ideal customers that translate into real business results. Our comprehensive social media marketing and management services combine community building, engaging content, and strategic advertising to create a powerful revenue-generating system for your business. Whether you need Facebook marketing, Instagram marketing, LinkedIn marketing, or TikTok for business solutions, our social media agency has the expertise to drive results.
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Get Started Today
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
                  alt="Social media marketing and community growth"
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
                Our Social Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to maximize your social media impact and drive measurable business results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceList.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-blue-600 dark:text-blue-400">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Expertise */}
        <section
          ref={addToRefs}
          className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Expertise</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We specialize in leveraging the unique strengths of each platform to maximize your social media impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {platformExpertise.map((platform, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${platform.color} text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {platform.name}
                  </h3>
                  <p className="text-white/85">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Process */}
        <section
          ref={addToRefs}
          className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Process</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A proven framework that ensures your social media efforts deliver measurable business results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 mt-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expected Results */}
        <section
          ref={addToRefs}
          className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white transition-opacity duration-1000 opacity-0"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Results You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Expect</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Our social media strategies deliver tangible business outcomes that impact your bottom line.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expectedResults.map((result, index) => (
                <div
                  key={index}
                  className="text-left bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/15 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {result.title}
                  </h3>
                  <p className="text-white/80">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          .animate-fade-in {
            opacity: 1 !important;
          }
        `}</style>
      </section>
    </>
  );
}

export default SocialMediaMarketingAndManagement;