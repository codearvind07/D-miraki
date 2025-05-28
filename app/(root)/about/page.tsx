"use client"
import pilot from "../../../assets/pilot.png";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "@/components/Icons";
import { MagicCard } from "@/components/ui/magic-card";

import experiments from "@/assets/experiments.png"
import chaotic from "../../../assets/chaotic.png"
import Image from "next/image";
import { useTheme } from "@/components/theme-provider";

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
    const { theme } = useTheme()
    return (
        <section className="container pb-24 space-y-8">
            <section className="relative container grid lg:grid-cols-2 place-items-center gap-10">
                <div className="text-center lg:text-start space-y-6">

                    <main className="text-4xl md:text-6xl font-bold">
                        <h1 className="inline">
                            <span className="inline bg-gradient-to-r bg-clip-text text-transparent
 from-[#3cd500]  via-[#eee71d] to-[#3cd500]
animate-text">
                                What drives us?
                            </span>
                        </h1>
                    </main>

                    <p className="text-base md:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                        Women. Bold, brilliant, and unstoppable. We're here to build, nurture, and lead—proving that success isn't about playing by old rules but creating new ones. We believe in businesses that feel human, strategies that make an impact, and a future where women's leadership isn't the exception—it's the standard.
                    </p>


                </div>

                {/* Hero Image sections */}
                <div className="z-10">
                    <Image
                        src={chaotic}
                        alt="Hero Image"
                        className="w-[200px] lg:w-[600px] mx-auto"
                    />
                </div>

                {/* Shadow effect */}
                <div className="shadow"></div>
            </section>
            <section
                id="about"
                className="container py-24 sm:py-32"
            >
                <MagicCard className="bg-muted/50 border rounded-none py-12" gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                    <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                        <Image
                            src={pilot}
                            alt=""
                            className="w-[300px] object-contain rounded-lg"
                        />
                        <div className="bg-green-0 flex flex-col justify-between">
                            <div className="pb-6">
                                <h2 className="text-3xl md:text-4xl font-bold">
                                    <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                        About{" "}
                                    </span>
                                    Company
                                </h2>
                                <p className="text-xl text-muted-foreground mt-4">
                                    We are a powerhouse of elite professionals—tech architects, global strategists, and IIM alumni—who have spent years mastering the art of building, scaling, and future-proofing businesses. Individually, we've led projects that shaped industries; together, we are rewriting the rules of tech and marketing. No juniors, no egos—just seasoned experts delivering results that speak for themselves.
                                </p>
                                <p className="text-xl text-muted-foreground mt-4">
                                    Our vision is bold: a world where women don't just participate in business but lead it. We believe in brands that grow like living entities—nurtured with care, strengthened with strategy, and driven by purpose. Innovation, collaboration, and resilience fuel our approach, ensuring every company we touch thrives in an ever-evolving landscape.
                                </p>
                                <p className="text-xl text-muted-foreground mt-4">
                                    Our mission is to merge strategy with empathy, precision with creativity, and vision with execution. Whether it's launching cutting-edge tech solutions, scaling impactful campaigns, or crafting timeless brands, we bring a level of expertise and commitment that turns ambitious ideas into unstoppable success.
                                </p>
                            </div>

                        </div>
                    </div>
                </MagicCard>
            </section>
            <section className="container grid grid-cols-1 md:grid-cols-2  text-center py-24 sm:py-32">
                <div className="relative flex flex-col justify-center items-center">
                    <h2 className="text-3xl md:text-4xl font-bold ">
                        How We{" "}
                        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                            Work?{" "}
                        </span>
                    </h2>
                    <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                        Our work process is simple, but it packs a punch.
                    </p>
                    <Image
                        src={experiments}
                        alt=""
                        className="w-[400px] mb-10 md:mb-0 object-contain rounded-lg"
                    />
                    <div className="shadow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map(({ icon, title, description }: FeatureProps) => (
                        <MagicCard
                            key={title}
                            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                            className="rounded-none"
                        >
                            <CardHeader>
                                <CardTitle className="grid gap-4 place-items-center">
                                    {icon}
                                    {title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>{description}</CardContent>
                        </MagicCard>
                    ))}
                </div>
            </section>
        </section>
    )
}

export default About;