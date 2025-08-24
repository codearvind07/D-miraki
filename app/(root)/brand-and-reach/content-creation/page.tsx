"use client";

import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";

import ReadMore from "@/components/ReadMore";
import { ChartIcon, WalletIcon, MagnifierIcon } from "@/components/Icons";
import roboto from "../../../../assets/roboto.png";
import cubeLeg from "../../../../assets/cube-leg.png";

const services = [
  {
    title: "Strategic Content Planning",
    description:
      "Content strategy, editorial calendars, audience research, personas, and competitive content analysis.",
    icon: <ChartIcon />,
  },
  {
    title: "Written Content Creation",
    description:
      "Blogs, articles, website copy, landing pages, emails, and social media copy that convert and engage.",
    icon: <WalletIcon />,
  },
  {
    title: "Visual Content Production",
    description:
      "Infographics, social graphics, eBook/whitepaper design, and branded visual systems.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Video Content Creation",
    description:
      "Explainers, social videos, webinars, editing, and platform-specific optimization.",
    icon: <ChartIcon />,
  },
];

const contentTypes = [
  {
    badge: "EDU",
    title: "Educational Content",
    color: "from-blue-500 to-blue-700",
    text: "Build authority by solving real problems with value-driven insights.",
  },
  {
    badge: "LM",
    title: "Lead Magnets",
    color: "from-purple-500 to-purple-700",
    text: "eBooks, whitepapers, and guides that capture qualified leads.",
  },
  {
    badge: "SP",
    title: "Social Proof",
    color: "from-green-500 to-green-700",
    text: "Case studies and success stories that build trust and reduce risk.",
  },
  {
    badge: "SEO",
    title: "SEO-Optimized Content",
    color: "from-orange-500 to-orange-700",
    text: "Content that ranks and converts without sacrificing usefulness.",
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
    text: "SEO‑optimized content that attracts qualified visitors.",
    color: "bg-blue-500",
  },
  {
    kpi: "↑ Leads",
    text: "Lead magnets and CTAs convert readers into MQLs.",
    color: "bg-green-500",
  },
  {
    kpi: "↑ Authority",
    text: "Consistent value builds brand leadership and trust.",
    color: "bg-purple-500",
  },
  {
    kpi: "↑ Retention",
    text: "Educational content supports customers post‑purchase.",
    color: "bg-orange-500",
  },
  {
    kpi: "↓ Cost",
    text: "Content marketing is cost‑efficient and compounding.",
    color: "bg-rose-500",
  },
];

export default function ContentCreationPage() {
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
      <Head>
        <title>
          Content Creation Services | Strategic Content Marketing by DMiraki
        </title>
        <meta
          name="description"
          content="Professional content creation services by DMiraki. Blog writing, video production, and strategic content marketing that drives engagement and conversions."
        />
      </Head>

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
              Content Creation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Strategic content that drives engagement and conversions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Transform expertise into compelling content that builds authority,
              nurtures trust, and supports measurable business outcomes.
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Start a Content Plan
              </button>
              <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 text-gray-800 dark:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                View Work Samples
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
              <Image
                src={roboto}
                alt="Content production visuals"
                className="w-full max-w-md mx-auto relative rounded-lg shadow-2xl"
                width={(roboto as any).width}
                height={(roboto as any).height}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* Content Types */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Content Types That Drive Results</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Strategically crafted content to educate, convert, and build trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((c, i) => (
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

      {/* Process Timeline */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Content Creation Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A clear, repeatable framework for predictable outcomes.
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

      {/* Formats Matrix */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Content Formats We Excel At</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Fit the format to the goal, audience, and channel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {formats.map((f, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
                <h3 className="text-xl font-semibold mb-4">{f.header}</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                  {f.items.map((item, j) => (
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

      {/* Industry Expertise */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry Expertise</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experienced across high-consideration and regulated categories.
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

      {/* Benefits */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Content Marketing Benefits</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Tangible outcomes that compound over time.
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
    </>
  );
}
