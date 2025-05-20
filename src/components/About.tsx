import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import { MagicCard } from "./ui/magic-card";
import { useTheme } from "./theme-provider";

export const About = () => {
  const { theme } = useTheme()
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <MagicCard className="bg-muted/50 border rounded-none py-12" gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[250px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent
              from-primary/60 to-primary
              animate-text">
                About company
              </h2>
              <p className="text-base text-muted-foreground mt-4">
                We are a passionate team of digital experts with battle scars from 15+ years in TOP-tier MNCs dedicated to helping brands grow and thrive in the digital age. With a perfect blend of creativity, innovation, and technical expertise, we provide tailored solutions that empower businesses to reach their full potential. Our commitment is to deliver measurable results through personalized strategies, cutting-edge technologies, and seamless user experiences.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </MagicCard>
    </section>
  );
};
