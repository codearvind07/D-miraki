"use client"
import {
    // Card,
    CardContent,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import image from "../../../assets/growth.png";
import image1 from "../../../assets/reflecting.png";
import image2 from "../../../assets/looking-ahead.png";
import image3 from "../../../assets/plantsback.png"
import image5 from "../../../assets/bueno.png"
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "@/components/theme-provider";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "@/components/ui/button";
import { ServicesProps } from "@/lib/utils";
import Image from "next/image";

const marketingServices: ServicesProps[] = [
    {
        title: "Social Media Marketing & Management",
        description:
            "Go Viral, Not Quiet. Forget posting into the void. We brew scroll-stopping strategies—grow your tribe, ignite chats, and turn likes into loyal fans. Let's make your brand the main character online.",
        image: image1 as any,
        readmore: "brand-and-reach/social-media-marketing-and-management"
    },
    {
        title: "Branding & Designing",
        description:
            "Your Brand's First Impression, Every Time. Logos? Basic. We craft unforgettable vibes—colors, fonts, and stories that scream, “Yeah, we're THAT good.” Launch or glow up, but never blend in.",
        image: image2 as any,
        readmore: "brand-and-reach/branding-and-designing"
    },
    {
        title: "Profitable Performance Marketing",
        description:
            "Ads That Work Harder, Cost Less. Stop guessing what works. We optimize campaigns across mobile, desktop, and social to squeeze every dollar for maximum ROI. Your growth isn't random—it's engineered.",
        image: image as any,
        readmore: "brand-and-reach/profitable-performance-marketing"
    },
    {
        title: "Content Creation",
        description:
            "Content That's Share-Worthy, Not Shelf-Worthy. Stop Scrolling, Start Engaging Generic posts? Yawn. We spin stories so good, your audience will DM, tag, and save-for-later. Words + visuals = your brand's new hype squad.",
        image: image5 as any,
        readmore: "brand-and-reach/content-creation"
    },
];

function BrandAndReach() {
    const { theme } = useTheme();
    return (
        <section className="container pb-24 space-y-8">
            <section className="relative container grid lg:grid-cols-2 place-items-center gap-10">
                <div className="text-center lg:text-start space-y-6">
                    <div className="hidden sm:block">
                        <nav className="absolute top-8 left-6 flex flex-wrap items-center gap-1 p-1">
                            <a href="/" className="inline-flex items-center gap-1.5 text-sm text-stone-800 dark:text-white transition-colors duration-300 ease-in hover:text-primary dark:hover:text-primary">
                                <svg width="1.5em" height="1.5em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" className="h-[18px] w-[18px]">
                                    <path d="M17 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M9 17H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                            <span className="inline-block mx-1 text-sm select-none pointer-events-none opacity-50 text-stone-800 dark:text-white">/</span>
                            <a href="/brand-and-reach" className="inline-flex items-center gap-1.5 text-sm text-stone-800 dark:text-white transition-colors duration-300 ease-in hover:text-primary dark:hover:text-primary">Brand & Reach</a>
                        </nav>
                    </div>
                    <main className="text-4xl md:text-6xl font-bold">
                        <h1 className="inline">
                            <span className="inline bg-gradient-to-r bg-clip-text text-transparent from-[#47a3f3] via-purple-500 to-[#47a3f3] animate-text">
                                Brand & Reach
                            </span>
                        </h1>
                    </main>
                    <p className="md:text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                        We create digital experiences that captivate and convert—from high-performance websites and stunning visuals to data-driven marketing and seamless IT solutions. Whether it's SEO that ranks, ads that sell, or branding that sticks, we turn ideas into impact. Your brand's next big leap starts with strategy, creativity, and flawless execution. Let's build something extraordinary, together.
                    </p>
                </div>
                <div className="z-10">
                    <Image src={image3} alt="Hero Image" className="w-[200px] lg:w-[600px] mx-auto" />
                </div>
                <div className="shadow"></div>
            </section>
            <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {marketingServices.map(({ title, description, readmore }: ServicesProps) => (
                    <MagicCard key={title} className="hover:scale-95 transition-all rounded-none" gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                        <CardHeader>
                            <CardTitle>{title}</CardTitle>
                        </CardHeader>
                        <CardContent>{description}</CardContent>
                        <CardContent>
                            <div className="gap-2">
                                <a rel="noreferrer noopener" href={readmore} className={`pl-0 ${buttonVariants({ variant: "link" })}`}>
                                    <ArrowTopRightIcon className="mr-2 w-5 h-5" />
                                    Read more
                                </a>
                            </div>
                        </CardContent>
                    </MagicCard>
                ))}
            </div>
        </section>
    );
}

export default BrandAndReach;