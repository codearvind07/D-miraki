"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import ReadMore from "@/components/ReadMore";
import { ChartIcon, WalletIcon, MagnifierIcon } from "@/components/Icons";
import roboto from "../../../../assets/roboto.png";
import cubeLeg from "../../../../assets/cube-leg.png";

const services = [
  {
    title: "Strategic Content Planning",
    description:
      "Content strategy, editorial calendars, audience research, personas, and competitive content analysis. Our B2B content strategy helps establish thought leadership content for your industry.",
    icon: <ChartIcon />,
  },
  {
    title: "Written Content Creation",
    description:
      "Blogs, articles, website copy, landing pages, emails, and social media copy that convert and engage. Our blog writing service creates content that drives engagement and supports lead generation.",
    icon: <WalletIcon />,
  },
  {
    title: "Visual Content Production",
    description:
      "Infographics, social graphics, eBook/whitepaper design, and branded visual systems. Our visual content strategy creates compelling brand storytelling experiences.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Video Content Creation",
    description:
      "Explainers, social videos, webinars, editing, and platform-specific optimization. Our video content strategy drives engagement and converts viewers into customers.",
    icon: <ChartIcon />,
  },
];

const contentTypes = [
  {
    badge: "EDU",
    title: "Educational Content",
    color: "from-blue-500 to-blue-700",
    text: "Build authority by solving real problems with value-driven insights. Our content that drives engagement educates and informs your target audience.",
  },
  {
    badge: "LM",
    title: "Lead Magnets",
    color: "from-purple-500 to-purple-700",
    text: "eBooks, whitepapers, and guides that capture qualified leads. Our content marketing for lead generation approach delivers high-quality prospects.",
  },
  {
    badge: "SP",
    title: "Social Proof",
    color: "from-green-500 to-green-700",
    text: "Case studies and success stories that build trust and reduce risk. Our content that converts includes powerful social proof elements.",
  },
  {
    badge: "SEO",
    title: "SEO-Optimized Content",
    color: "from-orange-500 to-orange-700",
    text: "Content that ranks and converts without sacrificing usefulness. Our B2B content strategy ensures content that drives engagement while improving search rankings.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Strategy Development",
    text: "Align content with business goals and audience needs.",
  },
  {
    step: "2",
    title: "Research & Planning",
    text: "Keyword research, competitor analysis, and insights-driven briefs.",
  },
  {
    step: "3",
    title: "Creation & Production",
    text: "Writers, designers, and video pros craft high-quality assets.",
  },
  {
    step: "4",
    title: "Optimization & Distribution",
    text: "SEO/SOCIAL optimization and channel-first distribution plans.",
  },
  {
    step: "5",
    title: "Performance Analysis",
    text: "Measure impact, learn, and iterate to improve ROI.",
  },
];

const formats = [
  {
    header: "Long‑Form",
    items: [
      "In‑depth blog posts",
      "Guides & tutorials",
      "Whitepapers",
      "Case studies",
    ],
  },
  {
    header: "Short‑Form",
    items: ["Social posts", "Email sequences", "Product copy", "Ad creative"],
  },
  {
    header: "Interactive",
    items: ["Quizzes", "Interactive infographics", "Polls & surveys", "Tools"],
  },
  {
    header: "Video",
    items: ["Product demos", "Tutorials", "Culture videos", "Testimonials"],
  },
];

const industries = [
  {
    title: "B2B Technology",
    text: "Make complex ideas accessible while retaining credibility.",
  },
  {
    title: "Professional Services",
    text: "Thought leadership that builds trust with decision makers.",
  },
  {
    title: "Healthcare & Wellness",
    text: "Compliant, educational content aligned with best practices.",
  },
  {
    title: "Financial Services",
    text: "Clear, accurate explanations of complex concepts.",
  },
];

const benefits = [
  {
    kpi: "↑ Organic Traffic",
    text: "SEO‑optimized content that attracts qualified visitors. Our content marketing strategy increases organic website traffic.",
    color: "bg-blue-500",
  },
  {
    kpi: "↑ Leads",
    text: "Lead magnets and CTAs convert readers into MQLs. Our content marketing for lead generation delivers measurable results.",
    color: "bg-green-500",
  },
  {
    kpi: "↑ Authority",
    text: "Consistent value builds brand leadership and trust. Our B2B content strategy helps establish thought leadership content in your industry.",
    color: "bg-purple-500",
  },
  {
    kpi: "↑ Retention",
    text: "Educational content supports customers post‑purchase. Our content that drives engagement keeps customers coming back.",
    color: "bg-orange-500",
  },
  {
    kpi: "↓ Cost",
    text: "Content marketing is cost‑efficient and compounding. Our content that converts provides excellent ROI for your marketing budget.",
    color: "bg-rose-500",
  },
];

export default function ContentCreationClient() {
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

      {/* Hero */}
      <section
        ref={addToRefs}
        className="relative py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/20 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Brand & Reach</span>
              <span>/</span>
              <span className="text-gray-900 dark:text-white">Content Creation</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Content Creation &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Strategy
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Strategic Content That Builds Authority And Drives Action
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Great content isn't just about being creative – it's about connecting with your audience in meaningful ways that drive engagement, build trust, and ultimately convert prospects into customers. Our content creation services combine strategic thinking with creative execution to deliver content that not only captures attention but also delivers measurable business results. From B2B content strategy to content that drives engagement, we help you tell your story in ways that resonate.
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Start Content Strategy
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
                alt="Content Creation & Strategy"
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
              Our Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to build your brand authority and drive measurable engagement.
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

      {/* Content Types */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Types</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Specialized content formats designed to achieve specific business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-block px-3 py-1 rounded-full text-white font-bold mb-4 bg-gradient-to-r ${type.color}`}>
                  {type.badge}
                </div>
                <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{type.text}</p>
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Process</span>
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

      {/* Formats */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Formats</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Versatile content solutions for every stage of the customer journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {formats.map((format, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-6">{format.header}</h3>
                <ul className="space-y-3">
                  {format.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 mr-3 flex-shrink-0"></div>
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
        className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Specialized content strategies tailored to your industry's unique challenges and opportunities.
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

      {/* Benefits */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The business outcomes we deliver through strategic content creation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* CTA */}
      <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-12 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let's create content that builds authority and drives measurable results.
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
    </>
  );
}