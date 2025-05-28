import ReadMore from "@/components/ReadMore";
import roboto from "../../../../assets/roboto.png";
import cubeLeg from "../../../../assets/cube-leg.png";
import { ChartIcon, WalletIcon, MagnifierIcon } from "@/components/Icons";

const contentCreationServiceList = [
    {
        title: "Compelling Copywriting",
        description:
            "Crafting powerful and engaging narratives that resonate with your audience, enhancing brand awareness, loyalty, and advocacy.",
        icon: <ChartIcon />,
    },
    {
        title: "Visual Storytelling",
        description:
            "From professional photography to creative visuals, we bring your brand’s story to life with captivating content that leaves a lasting impression.",
        icon: <WalletIcon />,
    },
    {
        title: "Dynamic Video Content",
        description:
            "We produce engaging video content tailored for social platforms and campaigns, ensuring your message is delivered effectively and memorably.",
        icon: <MagnifierIcon />,
    },
];

function ContentCreation() {
    return (
        <section>
            <ReadMore
                parent="Brand & Reach"
                mainTitle="Content"
                subtitle="Creation"
                description="We create unique, engaging content that builds brand awareness, loyalty, and advocacy. From copywriting and photography to social and video, we believe great storytelling starts with great content."
                services={contentCreationServiceList}
                imageSrc={roboto as any}
                sectionTitle="Building"
                sectionSubtitle="Brand Stories"
                sectionImageSrc={cubeLeg as any}
            />
        </section>
    );
}

export default ContentCreation;
