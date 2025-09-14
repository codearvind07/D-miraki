"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "@/components/theme-provider";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";
import { ChartIcon, WalletIcon, MagnifierIcon } from "@/components/Icons";

// Assets
import roboto from "../../../../assets/roboto.png";
import cubeLeg from "../../../../assets/cube-leg.png";

const uiUxDesignServices = [
    {
        title: "Beautifully Crafted Interfaces",
        description:
            "We design visually stunning interfaces that captivate users and create a lasting impression, ensuring your product stands out in a competitive market. Our interface design expertise creates intuitive website design that users love.",
        icon: <ChartIcon />,
    },
    {
        title: "Intuitive User Experiences",
        description:
            "Our designs prioritize simplicity and functionality, making it easy for users to navigate, engage, and achieve their goals effortlessly. Our UX design for SaaS solutions improves website conversion rate with UX.",
        icon: <WalletIcon />,
    },
    {
        title: "User-Centered Design Process",
        description:
            "Through research and iterative testing, we create designs that not only look great but also resonate with users, driving engagement and satisfaction. Our UX research and prototyping approach ensures user-centered design that reduces bounce rate with UI.",
        icon: <MagnifierIcon />,
    },
];

const designApproach = [
  {
    title: "User Research",
    description: "We start with comprehensive UX research to understand behaviors, needs, and pain points that inform our design decisions. Our user journey mapping identifies key touchpoints for optimization.",
  },
  {
    title: "Design Systems",
    description: "We create scalable design systems that ensure consistency across all touchpoints while maintaining flexibility for growth. Our website usability frameworks ensure intuitive website design.",
  },
  {
    title: "Prototyping & Testing",
    description: "Interactive prototypes allow us to test and validate design concepts before development, ensuring optimal user experiences. Our prototyping process helps improve website conversion rate with UX.",
  },
  {
    title: "Continuous Iteration",
    description: "We refine designs based on user feedback and analytics, ensuring your interfaces evolve with user needs and business goals. Our continuous iteration approach helps reduce bounce rate with UI.",
  },
];

function UIAndUXDesign() {
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
            <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Link href="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/code-and-build" className="hover:text-gray-900 dark:hover:text-white">Code & Build</Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white">UI & UX Design</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              UI & UX{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Design
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Beautiful Designs That Function Beautifully. Creating Intuitive Experiences That Drive Engagement.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Our designs must not only look beautiful, but they must also function beautifully. A great design not only entices you to touch, but it must be intuitive and simple to understand. We create experiences that users love and businesses benefit from through our website usability and interface design expertise. Our user-centered design agency approach helps improve website conversion rate with UX and reduce bounce rate with UI.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
              <Image
                src={roboto}
                alt="UI & UX Design Hero"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Designing Intuitive Experiences
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              User-centered design solutions that captivate audiences and drive meaningful engagement through beautiful, functional interfaces.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {uiUxDesignServices.map(({ title, description, icon }) => (
              <MagicCard
                key={title}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              >
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    {icon}
                  </div>
                  <CardTitle className="text-xl mb-4">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-300">
                  {description}
                </CardContent>
              </MagicCard>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Our Design Approach Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              User research foundation, systematic design thinking, and iterative testing for maximum user satisfaction and business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designApproach.map(({ title, description }) => (
              <div
                key={title}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6"></div>
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
              <Image
                src={cubeLeg}
                alt="Professional UI/UX Design"
                className="w-full max-w-md mx-auto relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Create{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Exceptional Experiences?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Let's design interfaces that users love and that drive real business results. From user research to final implementation, we'll create experiences that matter with our intuitive website design approach. Our user-centered design agency helps improve website conversion rate with UX and reduce bounce rate with UI.
            </p>
            <Link
              href="/contact"
              className={`inline-flex items-center ${buttonVariants({
                size: "lg",
              })} bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-600`}
            >
              Start Your Design Project
              <ArrowTopRightIcon className="ml-2 w-5 h-5" />
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

export default UIAndUXDesign;