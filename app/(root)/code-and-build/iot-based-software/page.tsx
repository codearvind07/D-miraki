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
import { ChartIcon, WalletIcon, MagnifierIcon } from "@/components/Icons";

// Assets
import image3 from "../../../../assets/plantsback.png";
import image4 from "../../../../assets/sitting.png";
import image6 from "../../../../assets/experiments.png";

const iotServices = [
    {
        title: "IoT Device Development",
        description:
            "Custom IoT device development from concept to production. We design and build connected devices that collect, transmit, and act on data to create intelligent systems. Our smart device software solutions provide IoT data insights for better decision-making.",
        icon: <ChartIcon />,
    },
    {
        title: "IoT Platform Integration",
        description:
            "Seamless integration of IoT devices with cloud platforms and existing systems. We ensure secure data flow and real-time monitoring capabilities. Our IoT platform expertise enables IoT for operational efficiency.",
        icon: <WalletIcon />,
    },
    {
        title: "Smart Solutions for Organizations",
        description:
            "End-to-end IoT solutions tailored for B2B and organizational needs. From industrial automation to smart building management, we create impactful connected systems. Our enterprise IoT solutions help reduce costs with IoT and improve manufacturing processes.",
        icon: <MagnifierIcon />,
    },
];

const iotApproach = [
  {
    title: "Connected Intelligence",
    description: "We design IoT systems that transform raw data into actionable insights, enabling smarter decision-making and automated processes. Our IoT data analytics provide valuable IoT data insights for your business.",
  },
  {
    title: "Security-First Architecture",
    description: "Every IoT solution is built with robust security protocols to protect data integrity and ensure device authentication. Our enterprise IoT solutions prioritize security and compliance.",
  },
  {
    title: "Scalable Infrastructure",
    description: "Our IoT platforms are designed to scale with your business needs, supporting thousands of devices and real-time data processing. Our scalable IoT solutions grow with your organization.",
  },
  {
    title: "Seamless Integration",
    description: "We ensure smooth integration with existing systems and workflows, minimizing disruption while maximizing IoT benefits. Our IoT platform integration expertise ensures seamless connectivity.",
  },
];

function IotBasedSoftware() {
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
              <span className="text-gray-900 dark:text-white">IoT-Based Software</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              IoT-Based{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Software
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Connected Solutions That Transform Data Into Action. Intelligent Systems for the Modern Organization.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              We specialize in creating IoT-based software solutions that connect devices, collect valuable data, and enable intelligent automation. Our connected systems help organizations optimize operations, reduce costs, and gain competitive advantages through smart technology. Our enterprise IoT and IoT platform expertise delivers custom IoT development solutions for operational efficiency and manufacturing.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
              <Image
                src={image3}
                alt="IoT-Based Software Hero Image"
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
              IoT Development Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive IoT solutions designed to connect your devices and transform data into actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {iotServices.map(({ title, description, icon }) => (
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
              Why Our IoT Approach Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connected intelligence, security-first foundation, and scalable architecture for maximum impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {iotApproach.map(({ title, description }) => (
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

export default IotBasedSoftware;