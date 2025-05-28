
import roboto from "../../../../assets/roboto.png";
import cubeLeg from "../../../../assets/cube-leg.png";
import { ChartIcon, WalletIcon, MagnifierIcon } from "@/components/Icons";
import ReadMore from "@/components/ReadMore";

const serviceList = [
    {
        title: "Tailored Digital Marketing Strategies",
        description:
            "We design customized strategies to optimize your brand's online presence, ensuring your message resonates with your target audience. Our focus is on expanding your current reach, discovering new opportunities, and building lasting relationships with diverse audiences.",
        icon: <ChartIcon />,
    },
    {
        title: "Engaging Social Media Management",
        description:
            "From creating compelling content to managing your social media accounts, we deliver a consistent and professional presence across platforms. Our approach emphasizes authentic engagement, community building, and aligning your brand story with audience expectations.",
        icon: <WalletIcon />,
    },
    {
        title: "Data-Driven Optimization and Growth",
        description:
            "Using advanced analytics and market insights, we continuously refine strategies to ensure measurable growth. Through performance tracking and active audience engagement, we help your brand achieve meaningful impact in today's competitive digital space.",
        icon: <MagnifierIcon />,
    },
];

function SocialMediaMarketingAndManagement() {
    return (
        <section>
            <ReadMore
                parent="Brand & Reach"
                mainTitle="Social Media"
                subtitle="Marketing & Management"
                description="We help brands implement digital marketing strategies that are geared to optimize, communicate and advocate. Our strategies help brands, expand their current reach and reach new audiences."
                services={serviceList}
                imageSrc={roboto as any}
                sectionTitle="Enhancing"
                sectionSubtitle="Audience Connections"
                sectionImageSrc={cubeLeg as any}
            />
        </section>
    )
}

export default SocialMediaMarketingAndManagement