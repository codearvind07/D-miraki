import ReadMore from "@/components/ReadMore";
import roboto from "../../../../assets/roboto.png";
import cubeLeg from "../../../../assets/cube-leg.png";
import { ChartIcon, WalletIcon, MagnifierIcon } from "@/components/Icons";

const performanceMarketingServiceList = [
    {
        title: "Innovative Campaign Strategies",
        description:
            "We design forward-thinking campaigns tailored to enhance your advertising performance across desktop and mobile platforms. Our strategies ensure your brand reaches the right audience effectively.",
        icon: <ChartIcon />,
    },
    {
        title: "Maximizing Ad Performance",
        description:
            "Our team continuously optimizes your campaigns for better engagement and ROI. From creative content to strategic placements, we drive measurable results that make a difference.",
        icon: <WalletIcon />,
    },
    {
        title: "Data-Driven Marketing Insights",
        description:
            "Harnessing advanced analytics, we uncover key insights to guide campaign decisions. This ensures that every move is calculated to maximize performance and deliver sustainable growth.",
        icon: <MagnifierIcon />,
    },
];

function ProfitablePerformanceMarketing() {
    return (
        <section>
            <ReadMore
                parent="Brand & Reach"
                mainTitle="Profitable"
                subtitle="Performance Marketing"
                description="In the fast-paced world of digital marketing, we constantly explore new strategies and insights to create innovative campaigns that boost your desktop and mobile advertising performance."
                services={performanceMarketingServiceList}
                imageSrc={roboto as any}
                sectionTitle="Boosting"
                sectionSubtitle="Advertising Performance"
                sectionImageSrc={cubeLeg as any}
            />
        </section>
    );
}

export default ProfitablePerformanceMarketing;
