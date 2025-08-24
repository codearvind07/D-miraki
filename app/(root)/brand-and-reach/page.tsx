"use client"
import {CardContent,CardHeader,CardTitle,} from "@/components/ui/card";
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
            "Build Communities That Convert Into Customers. Transform your social presence into a powerful revenue engine with our comprehensive social media strategies.",
        image: image1 as any,
        readmore: "brand-and-reach/social-media-marketing-and-management"
    },
    {
        title: "Profitable Performance Marketing",
        description:
            "Data-Driven Campaigns That Maximize ROI. Scale your business with targeted advertising campaigns that deliver measurable results and consistent growth.",
        image: image as any,
        readmore: "brand-and-reach/profitable-performance-marketing"
    },
    {
        title: "Content Creation & Strategy",
        description:
            "Compelling Content That Drives Engagement: Establish thought leadership and drive conversions with strategic content that resonates with your ideal customers.",
        image: image5 as any,
        readmore: "brand-and-reach/content-creation"
    },
    {
        title: "Search Engine Optimization",
        description:
            "Organic Visibility That Builds Long-Term Value. Dominate search results and attract high-intent prospects with our proven SEO methodologies.",
        image: image2 as any,
        readmore: "brand-and-reach/branding-and-designing"
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
                        Strategic Digital Marketing That Amplifies Your Impact. Build Brand Authority While Driving Measurable Growth.
                    </p>
                    <p className="md:text-lg text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                        In today's competitive digital landscape, reaching your target audience isn't enough – you need to engage, convert, and retain them. Our Brand & Reach solutions combine strategic thinking with tactical execution to build your brand authority while delivering consistent lead generation and revenue growth.
                    </p>
                </div>
                <div className="z-10">
                    <Image src={image3} alt="Hero Image" className="w-[200px] lg:w-[600px] mx-auto" />
                </div>
                <div className="shadow"></div>
            </section>
            
            <section className="space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Our Strategic Marketing Services</h2>
                </div>
                <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            
            <section className="py-12 space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Why Our Marketing Approach Works</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4 p-6 border rounded-lg">
                        <h3 className="text-xl font-semibold">Strategic Foundation</h3>
                        <p className="text-muted-foreground">
                            First, we start by understanding your business goals, target audience, and competitive landscape to create campaigns that align with your objectives.
                        </p>
                    </div>
                    <div className="space-y-4 p-6 border rounded-lg">
                        <h3 className="text-xl font-semibold">Multi-Channel Integration</h3>
                        <p className="text-muted-foreground">
                            Our campaigns work seamlessly across all digital channels, creating a cohesive brand experience that reinforces your message.
                        </p>
                    </div>
                    <div className="space-y-4 p-6 border rounded-lg">
                        <h3 className="text-xl font-semibold">Continuous Optimization</h3>
                        <p className="text-muted-foreground">
                            We constantly test, measure, and refine your campaigns to ensure maximum performance and ROI.
                        </p>
                    </div>
                    <div className="space-y-4 p-6 border rounded-lg">
                        <h3 className="text-xl font-semibold">Transparent Reporting</h3>
                        <p className="text-muted-foreground">
                            Get detailed insights into campaign performance with our comprehensive analytics and regular strategy reviews.
                        </p>
                    </div>
                </div>
            </section>
            
            <section className="text-center py-12">
                <a href="/contact" className={`${buttonVariants({ variant: "default", size: "lg" })} mr-4`}>
                    Explore Specific Services
                </a>
                <a href="/audit" className={`${buttonVariants({ variant: "outline", size: "lg" })}`}>
                    Get Your Marketing Audit
                </a>
            </section>
        </section>
    );
}

export default BrandAndReach;