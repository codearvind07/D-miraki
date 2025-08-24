"use client";

import {
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import image3 from "../../../assets/plantsback.png";
import image4 from "../../../assets/sitting.png";
import image6 from "../../../assets/experiments.png";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "@/components/theme-provider";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { ServicesProps } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

const developmentServices: ServicesProps[] = [
  {
    title: "Web Design & Development",
    description:
      "Websites That Work While You Sleep, Your 24/7 Sales Team. Boring sites belong in 2012. We build B2B rocketships—slick, speedy, and begging for clicks. More enquiries? That's just Tuesday for us.",
    image: image4 as any,
    readmore: "code-and-build/web-design-and-development",
  },
  {
    title: "UI & UX Design",
    description:
      "UI/UX So Smooth, It Feels Like Magic. Where Clicks Feel Like Butter. Pretty is pointless if it's clunky. We design brain-friendly interfaces—easy, addictive, and “Why didn't I think of that?” simple. User rage? Never heard of her.",
    image: image6 as any,
    readmore: "code-and-build/ui-and-ux-design",
  },
  {
    title: "Mobile App Development",
    description:
      "iOS, Android, or both? We build apps that don’t crash and do convert. From startup MVPs to enterprise-grade tools, our mobile experiences stay in users' pockets—and minds.",
    image: image4 as any,
    readmore: "code-and-build/mobile-app-development",
  },
  {
    title: "Digital Marketing & SEO",
    description:
      "Google loves us—and your site will too. From smart SEO that ranks to paid ads that scale, we turn traffic into leads and leads into loyal fans. It’s data-driven magic.",
    image: image4 as any,
    readmore: "code-and-build/digital-marketing-and-seo",
  },
  {
    title: "Backend Development",
    description:
      "No fluff, just powerful logic. We build rock-solid backends that scale, automate, and never blink. From APIs to architecture, your app’s brain is in expert hands.",
    image: image3 as any,
    readmore: "code-and-build/backend-development",
  },
  {
    title: "DevOps & Cloud Infrastructure",
    description:
      "Deploy faster, crash never. With CI/CD pipelines, cloud optimization, and container orchestration, we ensure your software performs under pressure—just like us.",
    image: image4 as any,
    readmore: "code-and-build/devops-and-cloud-infrastructure",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Shopify, WooCommerce, or custom builds—your store, your rules. We turn browsers into buyers with secure, scalable, and sexy shopping experiences.",
    image: image4 as any,
    readmore: "code-and-build/ecommerce-solutions",
  },
  {
    title: "Custom Software Development",
    description:
      "Your vision, coded to perfection. From internal tools to full-fledged SaaS products, we build exactly what you need—nothing more, nothing less.",
    image: image4 as any,
    readmore: "code-and-build/custom-software-development",
  },
  {
    title: "IT Consulting & Strategy",
    description:
      "Not sure what to build? We help you figure it out. Our IT strategy sessions turn chaos into clarity and ideas into execution-ready roadmaps.",
    image: image4 as any,
    readmore: "code-and-build/it-consulting-and-strategy",
  },
];

function CodeAndBuild() {
  const { theme } = useTheme();

  return (
    <section className="container pb-24 space-y-12">
      {/* Hero */}
      <section className="relative grid lg:grid-cols-2 place-items-center gap-10">
        <div className="text-center lg:text-start space-y-6">
          <div className="hidden sm:block">
            <nav
              aria-label="Breadcrumb"
              className="absolute top-8 left-6 flex flex-wrap items-center gap-1 p-1"
            >
              <a
                href="/"
                className="inline-flex items-center gap-1.5 text-sm text-stone-800 dark:text-white transition-colors duration-300 ease-in hover:text-primary dark:hover:text-primary"
              >
                <svg
                  width="1.5em"
                  height="1.5em"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  className="h-[18px] w-[18px]"
                >
                  <path
                    d="M17 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 17H15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <span className="inline-block mx-1 text-sm select-none pointer-events-none opacity-50 text-stone-800 dark:text-white">
                /
              </span>
              <a
                href="/code-and-build"
                className="inline-flex items-center gap-1.5 text-sm text-stone-800 dark:text-white transition-colors duration-300 ease-in hover:text-primary dark:hover:text-primary"
              >
                Code & Build
              </a>
            </nav>
          </div>

          <header className="text-4xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r bg-clip-text text-transparent from-[#47a3f3] via-purple-500 to-[#47a3f3] animate-text">
                Code & Build
              </span>
            </h1>
          </header>

          <p className="md:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            We create digital experiences that captivate and convert—from
            high-performance websites and stunning visuals to data-driven
            marketing and seamless IT solutions. Whether it's SEO that ranks,
            ads that sell, or branding that sticks, we turn ideas into impact.
            Your brand's next big leap starts with strategy, creativity, and
            flawless execution. Let's build something extraordinary, together.
          </p>

          {/* Optional: primary CTA cluster */}
          <div className="flex gap-3 justify-center lg:justify-start">
            <a
              href="/contact"
              className={buttonVariants({
                variant: "default",
                className:
                  "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
              })}
            >
              Start a Project
            </a>
            <a
              href="/work"
              className={buttonVariants({
                variant: "outline",
                className:
                  "border-blue-200 dark:border-blue-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/20",
              })}
            >
              View Work
            </a>
          </div>
        </div>

        <div className="relative z-10">
          {/* Glow behind image */}
          <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-r from-blue-400 to-purple-500 blur-2xl opacity-20" />
          <Image
            src={image3}
            alt="Code & Build hero"
            className="w-[220px] md:w-[360px] lg:w-[560px] mx-auto drop-shadow-xl"
            priority
          />
        </div>
      </section>

      {/* Services Grid */}
      <section aria-labelledby="services-heading" className="relative">
        <h2 id="services-heading" className="sr-only">
          Services
        </h2>

        {/* Animated soft blobs background (subtle) */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply blur-2xl opacity-10" />
          <div className="absolute bottom-[5%] right-[8%] w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply blur-2xl opacity-10" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {developmentServices.map(({ title, description, readmore }) => (
            <MagicCard
              key={title}
              className="transition-all rounded-2xl hover:-translate-y-1 hover:shadow-xl"
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>

              <CardContent className="pt-4">
                <div className="flex items-center">
                  <a
                    rel="noreferrer noopener"
                    href={`/${readmore}`}
                    className={`pl-0 inline-flex items-center ${buttonVariants({
                      variant: "link",
                    })}`}
                  >
                    <ArrowTopRightIcon className="mr-2 w-5 h-5" />
                    Read more
                  </a>
                </div>
              </CardContent>
            </MagicCard>
          ))}
        </div>
      </section>
    </section>
  );
}

export default CodeAndBuild;
