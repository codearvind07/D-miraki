import ReadMore from "@/components/ReadMore";
import roboto from "../assets/roboto.png";
import cubeLeg from "../assets/cube-leg.png";
import { ChartIcon, WalletIcon, MagnifierIcon } from "../components/Icons";

const brandingServiceList = [
    {
        title: "Authentic Brand Identity Design",
        description:
            "We craft visually striking and meaningful brand identities that go beyond just a logo. Our designs encapsulate your business values and resonate deeply with your target audience.",
        icon: <ChartIcon />,
    },
    {
        title: "Story-Driven Branding Strategy",
        description:
            "Every brand has a story, and we help you tell yours effectively. Through strategic messaging and creative design, we bring your vision to life, showcasing your unique value proposition.",
        icon: <WalletIcon />,
    },
    {
        title: "Audience Connection and Growth",
        description:
            "Our branding strategies focus on building lasting relationships with your audience. By aligning your identity with their expectations, we ensure consistent growth and meaningful engagement.",
        icon: <MagnifierIcon />,
    },
];

function BrandingAndDesigning() {
    return (
        <section>
            <ReadMore
                parent="Brand & Reach"
                mainTitle="Branding"
                subtitle="and Identity Design"
                description="Branding is more than just a logo—it's the essence of your business. Whether launching or rebranding, we create designs that connect with your audience, telling your story and showing why you're the solution they've been seeking."
                services={brandingServiceList}
                imageSrc={roboto}
                sectionTitle="Building"
                sectionSubtitle="Authentic Brands"
                sectionImageSrc={cubeLeg}
            />
        </section>
    );
}


export default BrandingAndDesigning;