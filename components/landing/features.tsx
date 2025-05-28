import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../../assets/growth.png";
import image3 from "../../assets/reflecting.png";
import image4 from "../../assets/looking-ahead.png";
import { MagicCard } from "../ui/magic-card";
import Image from "next/image";


interface FeatureProps {
  title: string;
  description: string;
  image: any;
}

const features: FeatureProps[] = [
  {
    title: "We Innovate",
    description:
      "We create solutions that push boundaries and make everyday challenges easier to solve.",
    image: image4,
  },
  {
    title: "We Collaborate",
    description:
      "We work closely with you to turn your ideas into seamless, user-friendly experiences that delight.",
    image: image3,
  },
  {
    title: "We Impact",
    description:
      "We deliver results that matter, doing things that improve lives and make a difference in your business.",
    image: image,
  },
];

const featureList: string[] = [
  "Strategy",
  "Development",
  "SEO",
  "Social Media",
  "Branding",
  "Content",
  "Advertising",
  "Design",
  "Analytics",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >

      <div className="flex-col justify-center items-center gap-2 flex pb-14">
        <h2 className="text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent
              from-primary/60 to-primary
              animate-text">
          What we do?
        </h2>
        <div className="flex flex-wrap md:justify-center gap-4">
          {featureList.map((feature: string) => (
            <div key={feature}>
              <div className=" dark:bg-white/10 bg-black/10 rounded-full w-fit  gap-4 px-4 py-2 dark:text-white text-black text-sm font-normal">
                {feature}
              </div>

            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <MagicCard key={title} className="hover:scale-95 transition-all rounded-none">
            <CardHeader>
              <CardTitle className=" text-xl">{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-base">{description}</CardContent>

            <CardFooter>
              <Image
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </MagicCard>
        ))}
      </div>
    </section>
  );
};
