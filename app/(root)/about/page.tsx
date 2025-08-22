"use client"
import pilot from "../../../assets/pilot.png";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "@/components/Icons";
import { MagicCard } from "@/components/ui/magic-card";

import experiments from "@/assets/experiments.png";
import chaotic from "../../../assets/chaotic.png";
import Image from "next/image";
import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients' needs, ensuring personalized strategies that align with their business goals and deliver measurable results.",
  },
  {
    icon: <MapIcon />,
    title: "Transparent Communication",
    description:
      "Open and honest communication is at the heart of our operations, fostering trust and collaboration throughout every project.",
  },
  {
    icon: <PlaneIcon />,
    title: "Innovative Solutions",
    description:
      "We leverage latest technologies and creative strategies to provide cutting-edge solutions that drive business growth.",
  },
  {
    icon: <GiftIcon />,
    title: "Data-Driven Strategies",
    description:
      "We utilize comprehensive data analysis to inform our decisions, ensuring effective and efficient marketing campaigns.",
  },
];

function About() {
  const { theme } = useTheme();

  return (
    <section className="container pb-24 space-y-32">
      {/* Hero Section */}
      <section className="relative container grid lg:grid-cols-2 place-items-center gap-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-start space-y-6"
        >
          <main className="text-4xl md:text-6xl font-bold leading-tight">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r bg-clip-text text-transparent from-[#3cd500] via-[#eee71d] to-[#3cd500] animate-text">
                About DMiraki
              </span>
            </h1>
          </main>
          <p className="text-base md:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Your Strategic Partner in Digital Success — passionate experts dedicated to your growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <Image
            src={chaotic}
            alt="Hero Image"
            className="w-[220px] lg:w-[600px] mx-auto drop-shadow-2xl"
          />
        </motion.div>
      </section>

      {/* About Company */}
      <section
        id="about"
        className="container py-24 sm:py-32 bg-gradient-to-b from-muted/20 to-transparent rounded-2xl"
      >
        <MagicCard
          className="bg-muted/50 border rounded-xl p-12 shadow-lg hover:shadow-2xl transition"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
            <Image
              src={pilot}
              alt=""
              className="w-[280px] object-contain rounded-xl shadow-md"
            />
            <div className="flex flex-col justify-between space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Who We Are
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on the principle that every business deserves exceptional digital presence, DMiraki has grown from a small team of passionate experts to a comprehensive agency trusted worldwide.
              </p>
              <h3 className="text-2xl font-semibold">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                Empowering businesses to achieve sustainable growth through strategic digital innovation. We build partnerships, not just services.
              </p>
              <h3 className="text-2xl font-semibold">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                To be the most trusted digital partner for ambitious businesses ready to transform their online presence into a competitive advantage.
              </p>
              <h3 className="text-2xl font-semibold">Our Values</h3>
              <ul className="list-disc pl-6 text-lg text-muted-foreground space-y-2">
                <li><span className="font-semibold">Excellence Without Compromise:</span> Maintaining the highest standards in everything we do.</li>
                <li><span className="font-semibold">Transparency in Every Interaction:</span> Clear communication and honest timelines.</li>
                <li><span className="font-semibold">Innovation That Matters:</span> Staying ahead of trends to give you a competitive edge.</li>
                <li><span className="font-semibold">Results-Driven Partnership:</span> Every decision is focused on measurable outcomes.</li>
              </ul>
            </div>
          </div>
        </MagicCard>
      </section>

      {/* Our Expertise */}
      <section className="container py-16 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Our Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {["Strategic Digital Marketing", "Technical Development", "Business Strategy Integration"].map(
            (title, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <MagicCard
                  gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                  className="rounded-xl shadow-md hover:shadow-xl transition"
                >
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {i === 0 &&
                      "Campaigns that combine creativity with data to drive conversions and engagement."}
                    {i === 1 &&
                      "High-performing digital experiences that look exceptional and work flawlessly."}
                    {i === 2 &&
                      "Ensuring digital solutions align with broader business goals for lasting value."}
                  </CardContent>
                </MagicCard>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="container py-16 space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Why Partner With Us?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Proven Track Record", text: "200+ successful projects across industries with measurable results." },
            { title: "Dedicated Team Approach", text: "You’ll work with a consistent team invested in your success." },
            { title: "Ongoing Support & Optimization", text: "Continuous optimization and support for sustained growth." },
            { title: "Industry Recognition", text: "Recognized for innovation and results by peers and publications." },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <MagicCard
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                className="rounded-xl shadow-md hover:shadow-xl transition"
              >
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>{card.text}</CardContent>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="container grid grid-cols-1 md:grid-cols-2 text-center py-24 sm:py-32 gap-12">
        <div className="relative flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            How We{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Work?
            </span>
          </h2>
          <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
            Our work process is simple, but it packs a punch.
          </p>
          <motion.div initial={{ rotate: -3 }} whileHover={{ rotate: 0 }}>
            <Image
              src={experiments}
              alt=""
              className="w-[400px] mb-10 md:mb-0 object-contain rounded-xl shadow-md"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map(({ icon, title, description }: FeatureProps) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <MagicCard
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                className="rounded-xl shadow-md hover:shadow-xl transition"
              >
                <CardHeader>
                  <CardTitle className="grid gap-4 place-items-center">
                    {icon}
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>{description}</CardContent>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to start your digital transformation journey?
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-6 py-4 bg-gradient-to-r from-orange-500 to-sky-500 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition"
          >
            Schedule a Strategy Call
          </a>
          <a
            href="/team"
            className="px-6 py-4 border border-muted-foreground text-muted-foreground rounded-xl hover:bg-muted transition"
          >
            Meet Our Team
          </a>
        </div>
      </section>
    </section>
  );
}

export default About;
