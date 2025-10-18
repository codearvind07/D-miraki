"use client";

import { Metadata } from "next";
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

/**
 * Results/benefits with themed KPI badges
 */
const benefits = [
  {
    kpi: "↑ Conversions",
    text:
      "Strategic UX improvements typically increase conversion rates by 15–50% via clearer flows and CTAs.",
    color: "bg-green-500",
  },
  {
    kpi: "↓ Bounce Rates",
    text:
      "Better UX keeps visitors engaged, reducing bounce rates by 20–40% through clarity and relevance.",
    color: "bg-blue-500",
  },
  {
    kpi: "↑ Satisfaction",
    text:
      "Intuitive design boosts user satisfaction and strengthens brand perception.",
    color: "bg-purple-500",
  },
  {
    kpi: "↓ Dev Costs",
    text:
      "Thorough UX planning reduces rework and post‑launch changes, lowering development costs.",
    color: "bg-orange-500",
  },
  {
    kpi: "↑ Brand Trust",
    text:
      "Professional, inclusive experiences improve credibility with target audiences.",
    color: "bg-rose-500",
  },
];

export default function UiUxDesignPage() {
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
            {/* Added breadcrumb for internal linking */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Link href="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/brand-and-reach" className="hover:text-gray-900 dark:hover:text-white">Brand & Reach</Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white">Branding & Designing</span>
            </nav>
            {/* Added H1 tag for SEO */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Branding &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Designing Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              User experiences that drive conversions and delight customers.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Where psychology meets design to create exceptional digital experiences. Align aesthetics with human behavior to guide users naturally toward their goals—and business outcomes.
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Schedule UX Consultation
              </button>
              <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 text-gray-800 dark:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                View Design Portfolio
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
              <Image
                src={roboto}
                alt="UI and UX design visuals"
                className="w-full max-w-md mx-auto relative rounded-lg shadow-2xl"
                width={(roboto as any).width}
                height={(roboto as any).height}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Added H2 tag for SEO */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our UI/UX Design Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Strategic UX, beautiful UI, and continuous optimization for real business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-blue-600 dark:text-blue-400">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Specializations */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Added H2 tag for SEO */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Design Specializations</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Deep expertise across web, apps, software, and e‑commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializations.map((c, i) => (
              <div
                key={i}
                className={`bg-gradient-to-r ${c.color} text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">{c.badge}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
                <p className="text-white/85">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Added H2 tag for SEO */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Design Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Validate early, design clearly, and iterate with real user feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((p, idx) => (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">
                  {p.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 mt-4">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Design Principles */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Added H2 tag for SEO */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Design Principles We Follow</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Practical principles that keep users—and outcomes—front and center.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
                <h3 className="text-xl font-semibold mb-4">{p.header}</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1 inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Systems */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Added H2 tag for SEO */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies & Tools We Use</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Design, research, and systemization for scale and clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((t, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
                <h3 className="text-xl font-semibold mb-4">{t.title}</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  {t.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1 inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Added H2 tag for SEO */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry Applications</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience across complex and high‑consideration categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="text-left bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-lg bg-white/15 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{ind.title}</h3>
                <p className="text-white/80">{ind.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Added H2 tag for SEO */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Results You Can Expect</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Outcomes that align user needs with business performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 ${b.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold`}
                >
                  {b.kpi.split(" ")[0]}
                </div>
                <h3 className="text-lg font-semibold mb-2">{b.kpi}</h3>
                <p className="text-gray-700 dark:text-gray-200">{b.text}</p>
              </div>
            ))}
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