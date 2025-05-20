import ReadMore from "@/components/ReadMore";
import roboto from "../assets/roboto.png";
import cubeLeg from "../assets/cube-leg.png";
import { ChartIcon, WalletIcon, MagnifierIcon } from "../components/Icons";

const uiUxDesignServiceList = [
    {
        title: "Beautifully Crafted Interfaces",
        description:
            "We design visually stunning interfaces that captivate users and create a lasting impression, ensuring your product stands out in a competitive market.",
        icon: <ChartIcon />,
    },
    {
        title: "Intuitive User Experiences",
        description:
            "Our designs prioritize simplicity and functionality, making it easy for users to navigate, engage, and achieve their goals effortlessly.",
        icon: <WalletIcon />,
    },
    {
        title: "User-Centered Design Process",
        description:
            "Through research and iterative testing, we create designs that not only look great but also resonate with users, driving engagement and satisfaction.",
        icon: <MagnifierIcon />,
    },
];

function UIAndUXDesign() {
    return (
        <section>
            <ReadMore
                parent="Code & Build"
                mainTitle="UI & UX"
                subtitle="Design"
                description="Our designs must not only look beautiful, but they must also function beautifully. A great design not only entices you to touch, but it must be intuitive and simple to understand."
                services={uiUxDesignServiceList}
                imageSrc={roboto}
                sectionTitle="Designing"
                sectionSubtitle="Intuitive Experiences"
                sectionImageSrc={cubeLeg}
            />
        </section>
    );
}

export default UIAndUXDesign;
