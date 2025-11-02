"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import ReadMore from "@/components/ReadMore";
import { ChartIcon, WalletIcon, MagnifierIcon } from "@/components/Icons";
import roboto from "../../../../assets/roboto.png";
import cubeLeg from "../../../../assets/cube-leg.png";

/**
 * Services mapped to your "Our UI/UX Design Services"
 */
const services = [
  {
    title: "User Experience (UX) Design",
    description:
      "Strategic design based on user behavior: user research, personas, information architecture, user journeys, wireframes, and prototypes.",
    icon: <ChartIcon />,
  },
  {
    title: "User Interface (UI) Design",
    description:
      "Beautiful, branded interfaces: visual design, interactive elements, responsive systems, and scalable design systems.",
    icon: <WalletIcon />,
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Design that drives results: A/B testing, heatmap analysis, landing page optimization, and streamlined checkouts/forms.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Usability Testing & Research",
    description:
      "Data‑driven design: user testing sessions, accessibility audits, performance analysis, and continuous improvement.",
    icon: <ChartIcon />,
  },
];

/**
 * Design specializations (Website, Mobile App, Dashboard/Software, E‑commerce)
 */
const specializations = [
  {
    badge: "WEB",
    title: "Website UI/UX Design",
    color: "from-blue-500 to-blue-700",
    text:
      "Homepage impact, service/product pages, e‑commerce UX, and mobile‑responsive design systems.",
  },
  {
    badge: "APP",
    title: "Mobile App Design",
    color: "from-purple-500 to-purple-700",
    text:
      "iOS/Android interfaces, PWA design, cross‑platform consistency, and touch‑optimized interactions.",
  },
  {
    badge: "SaaS",
    title: "Dashboard & Software Design",
    color: "from-green-500 to-green-700",
    text:
      "Enterprise UI, data visualization, dashboards, workflow optimization, and onboarding.",
  },
  {
    badge: "ECM",
    title: "E‑commerce Design",
    color: "from-orange-500 to-orange-700",
    text:
      "Product catalog UX, cart/checkout design, customer portals, and mobile commerce.",
  },
];

/**
 * Process steps mapped to your "Our Design Process"
 */
const processSteps = [
  {
    step: "1",
    title: "Discovery & Research",
    text:
      "Understand users and business goals via comprehensive research into needs, behaviors, and pain points.",
  },
  {
    step: "2",
    title: "Information Architecture",
    text:
      "Organize content and navigation to create intuitive, goal‑oriented user flows.",
  },
  {
    step: "3",
    title: "Wireframing & Prototyping",
    text:
      "Low‑fidelity wireframes and interactive prototypes to validate ideas before visual design.",
  },
  {
    step: "4",
    title: "Visual Design",
    text:
      "High‑fidelity UI that blends aesthetics, function, and brand consistency for real‑world use.",
  },
  {
    step: "5",
    title: "Testing & Iteration",
    text:
      "User testing, feedback incorporation, and ongoing refinement to optimize performance.",
  },
];

/**
 * Key design principles
 */
const principles = [
  {
    header: "User‑Centered Design",
    points: [
      "Every decision based on user needs and behaviors.",
      "Focus on usefulness, clarity, and guidance.",
    ],
  },
  {
    header: "Conversion‑Focused Approach",
    points: [
      "Strategic placement of elements and CTAs.",
      "Flows designed to reduce friction and drive action.",
    ],
  },
  {
    header: "Accessibility First",
    points: [
      "WCAG‑aligned, inclusive experiences.",
      "Semantic structure, contrast, and keyboard support.",
    ],
  },
  {
    header: "Mobile‑First Design",
    points: [
      "Start from smallest screens to ensure clarity.",
      "Scale up with thoughtful breakpoints and patterns.",
    ],
  },
];

/**
 * Tools, research, systems (condensed highlights)
 */
const tools = [
  {
    title: "Design Software",
    items: [
      "Figma",
      "Adobe Creative Suite",
      "Sketch",
      "InVision (prototyping)",
    ],
  },
  {
    title: "Research & Testing Tools",
    items: ["Hotjar", "Google Analytics", "UsabilityHub", "Crazy Egg"],
  },
  {
    title: "Design Systems",
    items: [
      "Component libraries",
      "Style guides",
      "Brand guideline integration",
      "Scalable frameworks",
    ],
  },
];

/**
 * Industry applications
 */
const industries = [
  {
    title: "SaaS & Technology",
    text:
      "Simplify complex software for better adoption, clarity, and reduced churn.",
  },
  {
    title: "E‑commerce & Retail",
    text:
      "Streamlined shopping experiences optimized for conversion and satisfaction.",
  },
  {
    title: "Healthcare & Medical",
    text:
      "Accessible, compliant UX for patient portals and healthcare applications.",
  },
  {
    title: "Financial Services",
    text:
      "Secure, trustworthy interfaces for banking and financial use cases.",
  },
];

export default function BrandingAndDesigningClient() {
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
        {/* Hero */}
        <section
          ref={addToRefs}
          className="relative py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/20 transition-opacity duration-1000 opacity-0"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Link href="/brand-and-reach" className="hover:text-gray-900 dark:hover:text-white">Brand & Reach</Link>
                <span>/</span>
                <span className="text-gray-900 dark:text-white">Branding & Designing</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Branding &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Designing
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Strategic Brand Identity That Connects With Your Audience
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                Your brand is more than just a logo – it's the complete experience your customers have with your business. Our branding and designing services combine strategic thinking with creative execution to create authentic brand identities that not only look exceptional but also drive meaningful business results. From brand strategy to visual identity design, we help you tell your story in ways that resonate.
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Start Brand Strategy
                </button>
                <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 text-gray-800 dark:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
              <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
                <Image
                  src={roboto}
                  alt="Branding & Designing"
                  className="w-full max-w-md mx-auto relative rounded-lg shadow-2xl"
                  width={roboto.width}
                  height={roboto.height}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          ref={addToRefs}
          className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our UI/UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Design Services</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to create exceptional user experiences and drive measurable engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
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

        {/* Specializations */}
        <section
          ref={addToRefs}
          className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Specializations</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Specialized design solutions for different platforms and business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specializations.map((specialization, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-white font-bold mb-4 bg-gradient-to-r ${specialization.color}`}>
                    {specialization.badge}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{specialization.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{specialization.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          ref={addToRefs}
          className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Process</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures consistent quality and measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 mt-4">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section
          ref={addToRefs}
          className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Key Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Principles</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The foundational principles that guide our design approach.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-xl font-semibold mb-6">{principle.header}</h3>
                  <ul className="space-y-3">
                    {principle.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 mr-3 flex-shrink-0"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section
          ref={addToRefs}
          className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tools & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Systems</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The tools and systems we use to create exceptional design solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-xl font-semibold mb-6">{tool.title}</h3>
                  <ul className="space-y-2">
                    {tool.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section
          ref={addToRefs}
          className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Expertise</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Specialized design strategies tailored to your industry's unique challenges and opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{industry.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-12 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Brand Identity?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's create a brand identity that connects with your audience and drives measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Schedule a Consultation
              </Link>
              <Link href="/portfolio" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 text-gray-800 dark:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                View Case Studies
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