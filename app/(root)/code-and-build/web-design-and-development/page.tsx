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

const webDesignServices = [
    {
        title: "User-Centric Website Design",
        description:
            "We create intuitive and visually engaging websites that enhance user experiences, making navigation seamless and interactions meaningful for B2B and organizational audiences. Our responsive web design ensures your website looks great on all devices.",
        icon: <ChartIcon />,
    },
    {
        title: "Optimized Lead Generation",
        description:
            "Our development process focuses on increasing inquiries and conversions through strategic layouts, clear calls-to-action, and optimized performance across all devices. Our website optimized for conversions approach drives more leads and sales.",
        icon: <WalletIcon />,
    },
    {
        title: "Custom Solutions for Organizations",
        description:
            "From tailored designs to scalable development, we provide solutions that align with your organization's goals, ensuring your website stands out and delivers measurable impact. Our custom web development services include WordPress development and ecommerce website development.",
        icon: <MagnifierIcon />,
    },
];

const developmentApproach = [
  {
    title: "Strategic Planning",
    description: "We start by understanding your business goals, target audience, and competitive landscape to create websites that align with your objectives. Our sales-focused web design approach ensures maximum ROI.",
  },
  {
    title: "Performance Optimization",
    description: "Every element is optimized for speed, SEO, and user experience to ensure maximum engagement and conversion rates. Our high-converting website design techniques improve your website's performance.",
  },
  {
    title: "Responsive Design",
    description: "Our websites work flawlessly across all devices, providing consistent experiences for desktop, tablet, and mobile users. Our responsive web design ensures your site looks great everywhere.",
  },
  {
    title: "Ongoing Support",
    description: "We provide continuous maintenance and updates to keep your website secure, fast, and aligned with evolving business needs. Our custom website for small business solutions include ongoing support.",
  },
];

function WebDesignAndDevelopment() {
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
            {/* Added breadcrumb for internal linking */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Link href="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/code-and-build" className="hover:text-gray-900 dark:hover:text-white">Code & Build</Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-white">Web Design & Development</span>
            </nav>
            {/* Added H1 tag for SEO */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Web Design &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Development
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Custom Websites That Convert Visitors Into Customers. Professional Development for B2B and Organizations.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              We focus on website development for B2B and organizations, with a focus on improving usability, increasing inquiries, and making you stand out. Our custom web development and responsive web design services create powerful business tools that drive growth and establish digital authority. Whether you need a custom website for small business or enterprise-level solutions, our web design agency delivers high-converting website design that's optimized for conversions.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
              <Image
                src={roboto}
                alt="Web Design & Development Hero"
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
            {/* Added H2 tag for SEO */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enhancing Digital Presence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive web solutions designed to build your digital presence and drive measurable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {webDesignServices.map(({ title, description, icon }) => (
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
            {/* Added H2 tag for SEO */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Our Development Approach Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Strategic foundation, performance optimization, and responsive design for maximum impact and conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentApproach.map(({ title, description }) => (
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

      {/* Additional Navigation Links */}
      <section className="py-16 lg:py-24 px-4 lg:px-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/code-and-build" className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Code & Build</h3>
              <p className="text-gray-600 dark:text-gray-300">Transform ideas into powerful digital solutions.</p>
            </Link>
            <Link href="/brand-and-reach" className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Brand & Reach</h3>
              <p className="text-gray-600 dark:text-gray-300">Expand your brand presence and reach new audiences.</p>
            </Link>
            <Link href="/blogs" className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Latest Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">Stay updated with our latest blog posts.</p>
            </Link>
            <Link href="/contact-us" className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-300">Start your project with our expert team.</p>
            </Link>
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
                alt="Professional Web Development"
                className="w-full max-w-md mx-auto relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Digital Presence?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Let's create a website that not only looks exceptional but drives real business results. Whether you need a redesign website for leads or a completely new sales-focused web design, we'll build your digital foundation for success with our high-converting website design approach.
            </p>
            <Link
              href="/contact-us"
              className={`inline-flex items-center ${buttonVariants({
                size: "lg",
              })} bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-600`}
            >
              Start Your Project
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

export default WebDesignAndDevelopment;