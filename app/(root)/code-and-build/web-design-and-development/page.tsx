import ReadMore from "@/components/ReadMore";
import roboto from "../../../../assets/roboto.png";
import cubeLeg from "../../../../assets/cube-leg.png";
import { ChartIcon, WalletIcon, MagnifierIcon } from "@/components/Icons";

const webDesignServiceList = [
    {
        title: "User-Centric Website Design",
        description:
            "We create intuitive and visually engaging websites that enhance user experiences, making navigation seamless and interactions meaningful for B2B and organizational audiences.",
        icon: <ChartIcon />,
    },
    {
        title: "Optimized Lead Generation",
        description:
            "Our development process focuses on increasing inquiries and conversions through strategic layouts, clear calls-to-action, and optimized performance across all devices.",
        icon: <WalletIcon />,
    },
    {
        title: "Custom Solutions for Organizations",
        description:
            "From tailored designs to scalable development, we provide solutions that align with your organization’s goals, ensuring your website stands out and delivers measurable impact.",
        icon: <MagnifierIcon />,
    },
];

function WebDesignAndDevelopment() {
    return (
        <section>
            <ReadMore
            parent="Code & Build"
                mainTitle="Web Design"
                subtitle="& Development"
                description="We focus on website development for B2B and organizations, with a focus on improving usability, increasing inquiries, and making you stand out."
                services={webDesignServiceList}
                imageSrc={roboto as any}
                sectionTitle="Enhancing"
                sectionSubtitle="Digital Presence"
                sectionImageSrc={cubeLeg as any}
            />
        </section>
    );
}

export default WebDesignAndDevelopment;
