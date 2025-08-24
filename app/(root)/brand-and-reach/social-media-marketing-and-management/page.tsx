"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChartIcon, WalletIcon, MagnifierIcon } from "@/components/Icons";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import roboto from "../../../../assets/roboto.png";

// Service data
const serviceList = [
  {
    title: "Strategic Social Media Management",
    description:
      "Consistent Brand Presence That Builds Authority. Platform-specific content strategies, community engagement, brand voice development, and reputation monitoring.",
    icon: <ChartIcon />,
  },
  {
    title: "Social Media Advertising",
    description:
      "Targeted Campaigns That Deliver ROI. Facebook, Instagram, LinkedIn, Twitter, and YouTube advertising optimized for your business goals.",
    icon: <WalletIcon />,
  },
  {
    title: "Content Creation & Curation",
    description:
      "Engaging Content That Drives Action. Visual content design, video production, conversion copywriting, and user-generated content strategies.",
    icon: <MagnifierIcon />,
  },
];

// Platform expertise data
const platformExpertise = [
  {
    name: "LinkedIn (B2B Focus)",
    description:
      "Professional Network That Generates Quality Leads. Build thought leadership and generate high-value B2B leads through strategic LinkedIn marketing.",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Facebook & Instagram",
    description:
      "Visual Storytelling That Converts. Create compelling brand narratives that engage your audience and drive website traffic and sales.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Twitter/X",
    description:
      "Real-Time Engagement That Builds Community. Establish your brand as an industry authority through strategic conversations and content sharing.",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "YouTube",
    description:
      "Video Marketing That Builds Trust. Leverage the power of video to educate your audience and build deeper connections with prospects.",
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
      "Expand your reach and build recognition within your target market through a consistent, engaging presence.",
  },
  {
    title: "Higher Website Traffic",
    description:
      "Drive qualified traffic to your website through strategic content that encourages clicks and conversions.",
  },
  {
    title: "Lead Generation",
    description:
      "Convert social media engagement into actual business leads through strategic calls-to-action and landing page optimization.",
  },
  {
    title: "Improved Customer Loyalty",
    description:
      "Build stronger relationships with existing customers through ongoing engagement and valuable content.",
  },
];

function SocialMediaMarketingAndManagement() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Set up Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all section elements
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Assign refs to sections
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <section className="min-h-screen overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      </div>

      {/* Hero Section */}
      <div ref={addToRefs} className="relative py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/20 transition-opacity duration-1000 opacity-0">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <a href="/" className="hover:text-primary transition-colors">
                  Home
                </a>
                <span>/</span>
                <a
                  href="/brand-and-reach"
                  className="hover:text-primary transition-colors"
                >
                  Brand & Reach
                </a>
                <span>/</span>
                <span className="text-foreground">
                  Social Media Marketing
                </span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Social Media Marketing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  & Management
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform Your Social Presence Into a Revenue Engine. Build
                Communities That Drive Business Growth.
              </p>
              <p className="text-lg mb-10">
                Social media isn't just about likes and follows – it's about
                building meaningful connections with your ideal customers that
                translate into real business results. Our comprehensive social
                media strategies combine community building, engaging content,
                and strategic advertising to create a powerful
                revenue-generating system for your business.
              </p>
            </div>
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
                alt="Illustration representing social media marketing and community growth"
                className="w-full max-w-md mx-auto relative rounded-lg shadow-2xl"
                width={roboto.width}
                height={roboto.height}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div
        ref={addToRefs}
        id="services"
        className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Social Media Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to maximize your social media
              impact and drive measurable business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {serviceList.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-blue-600 dark:text-blue-400 flex items-center gap-2 font-medium">
                    Learn more <ArrowTopRightIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Analytics & Optimization */}
          <div ref={addToRefs} className="bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 rounded-3xl p-10 transition-opacity duration-1000 opacity-0">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Analytics & Optimization
              </h3>
              <p className="text-xl text-muted-foreground mb-10">
                Data-Driven Insights That Continuously Improve Performance
              </p>

              <ul className="grid md:grid-cols-2 gap-6">
                <li className="flex items-start gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 3a8.962 8.962 0 00-6.364 2.636 9 9 0 1012.728 0A8.962 8.962 0 0011 3z"
                    />
                  </svg>
                  <span className="text-lg">
                    Comprehensive performance tracking
                  </span>
                </li>

                <li className="flex items-start gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <svg
                    className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-3-3h-2v5zM3 13v7h7v-7H3zM14 3h7v7h-7V3zM3 3h7v7H3V3z"
                    />
                  </svg>
                  <span className="text-lg">Audience behavior analysis</span>
                </li>

                <li className="flex items-start gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <svg
                    className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-lg">Competitor benchmarking</span>
                </li>

                <li className="flex items-start gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <svg
                    className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v6h6M20 20v-6h-6M20 4h-6v6M4 20h6v-6"
                    />
                  </svg>
                  <span className="text-lg">
                    Monthly strategy optimization reviews
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Expertise */}
      <div ref={addToRefs} className="py-16 lg:py-24 px-4 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-opacity duration-1000 opacity-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Platform Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in leveraging the unique strengths of each
              platform to maximize your social media impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platformExpertise.map((platform, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-2 rounded-full bg-gradient-to-r ${platform.color} mb-6 group-hover:w-24 transition-all duration-300`}
                ></div>
                <h3 className="text-xl font-semibold mb-4">
                  {platform.name}
                </h3>
                <p className="text-muted-foreground">{platform.description}</p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-blue-600 dark:text-blue-400 flex items-center gap-2 font-medium">
                    See examples <ArrowTopRightIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Process */}
      <div ref={addToRefs} className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Strategic Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven framework that ensures your social media efforts
              deliver measurable business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expected Results */}
      <div ref={addToRefs} className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-opacity duration-1000 opacity-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Results You Can Expect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our social media strategies deliver tangible business outcomes
              that impact your bottom line.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expectedResults.map((result, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {result.title}
                </h3>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div ref={addToRefs} className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-opacity duration-1000 opacity-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Social Media Presence?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Let's create a custom social media strategy that drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Schedule a Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>

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
  );
}

export default SocialMediaMarketingAndManagement;