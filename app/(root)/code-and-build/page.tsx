"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "@/components/theme-provider";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";
import { ServicesProps } from "@/lib/utils";

// Assets
import image3 from "../../../assets/plantsback.png";
import image4 from "../../../assets/sitting.png";
import image6 from "../../../assets/experiments.png";

const developmentServices: ServicesProps[] = [
  {
    title: "Web Design & Development",
    description:
      "Custom websites that convert. Built for performance, optimized for conversions, and designed to scale with your business growth. Your website becomes your most powerful sales tool.",
    image: image4 as any,
    readmore: "/code-and-build/web-design-and-development",
  },
  {
    title: "UI & UX Design",
    description:
      "User experiences that drive results. Intuitive interfaces that guide users toward conversion while building trust and credibility. Every click counts, every interaction matters.",
    image: image6 as any,
    readmore: "/code-and-build/ui-and-ux-design",
  },
  {
    title: "Content Creation",
    description:
      "Compelling content that drives engagement. Strategic storytelling that builds brand authority and connects with your audience to drive meaningful business results.",
    image: image3 as any,
    readmore: "/code-and-build/content-creation",
  },
  {
    title: "IoT-Based Software",
    description:
      "Connected solutions that transform data into actionable insights. Intelligent systems for the modern organization that optimize operations and reduce costs.",
    image: image4 as any,
    readmore: "/code-and-build/iot-based-software",
  },
];

const developmentPhilosophy = [
  {
    title: "Performance-First Approach",
    description: "Every line of code is optimized for speed, security, and scalability to ensure your website performs at its peak.",
  },
  {
    title: "Mobile-First Design",
    description: "With mobile traffic dominating, we ensure your website delivers exceptional experiences across all devices.",
  },
  {
    title: "Conversion-Focused Architecture",
    description: "Our websites are strategically designed to guide visitors through your sales funnel and maximize conversions.",
  },
  {
    title: "Future-Proof Technology",
    description: "We use cutting-edge, scalable technologies that grow with your business and adapt to changing needs.",
  },
];

function CodeAndBuild() {
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
      <Head>
        <title>
          Code & Build Services | Web Development & Design Solutions by DMiraki
        </title>
        <meta
          name="description"
          content="Custom web development, UI/UX design, and technical solutions by DMiraki. Build high-performance websites that convert visitors into customers."
        />
      </Head>

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
              <span>Home</span>
              <span>/</span>
              <span className="text-gray-900 dark:text-white">Code & Build</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Code &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Build
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Technical Excellence That Powers Business Growth. Where Beautiful Design Meets Flawless Functionality.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Your website is often the first impression potential customers have of your business. Our Code & Build solutions ensure that impression is powerful, professional, and profitable. We create digital experiences that not only look exceptional but perform flawlessly across all devices and drive measurable business results.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
              <Image
                src={image3}
                alt="Code & Build Hero Image"
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
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to build your digital presence and drive measurable growth, including cutting-edge IoT-based software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentServices.map(({ title, description, readmore }: ServicesProps) => (
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

      {/* PHILOSOPHY */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 lg:px-8 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Our Development Approach Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Performance-first foundation, mobile-responsive design, and conversion-focused architecture for maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentPhilosophy.map(({ title, description }) => (
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

export default CodeAndBuild;
