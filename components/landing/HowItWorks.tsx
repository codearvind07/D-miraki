import * as React from "react";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "@/components/Icons";
import { useTheme } from "../theme-provider";
import { MagicCard } from "../ui/magic-card";
import { CardContent, CardHeader, CardTitle } from "../ui/card";


interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Lead with Love",
    description:
      "We believe empathy is our superpower. Every strategy, decision, and interaction is rooted in compassion. We don't just provide solutions—we listen, advocate, and uplift, ensuring businesses grow with authenticity and heart.",
  },
  {
    icon: <MapIcon />,
    title: "Grow with Grit",
    description:
      "Challenges aren't roadblocks; they're opportunities. We tackle obstacles with resilience and curiosity, turning setbacks into stepping stones. Like a mentor guiding a learner, we stand by our clients with unwavering belief in their potential.",
  },
  {
    icon: <PlaneIcon />,
    title: "Collab with Courage",
    description:
      "Bold ideas and diverse voices drive progress. We create a space where women's leadership thrives, where collaboration fuels innovation, and where every challenge is met with fearless creativity and shared success.",
  },
  {
    icon: <GiftIcon />,
    title: "Own with Integrity",
    description:
      "Trust is the foundation of everything we do. We treat every client's vision as a promise, leading with transparency, accountability, and an uncompromising commitment to ethical action.",
  },
];


export const HowItWorks = () => {
  const { theme } = useTheme()
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >


      <div className="flex-col justify-center items-center gap-2 flex pb-14">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent
              from-primary/60 to-primary
              animate-text">
          How we work?
        </h2>
        <p className="text-[#B3B3B3] text-sm text-center">
          Less Corporate Jargon, More Getting Things Done.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <MagicCard
            key={title}
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="rounded-none hover:scale-95 transition-all"
          >
            <CardHeader>
              <CardTitle className="flex flex-row items-center gap-2 text-xl">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-start text-base">{description}</CardContent>
          </MagicCard>
        ))}
      </div>
    </section>
  );
};
