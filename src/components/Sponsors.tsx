import partner1 from "@/assets/partners/black-vigour-gym.png";
import partner2 from "@/assets/partners/epione-clinic.png";
import partner3 from "@/assets/partners/logo.png";
import partner4 from "@/assets/partners/md-1.png";
import partner5 from "@/assets/partners/novus_automation.png"

interface SponsorProps {
  icon: string;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: partner1,
    name: "",
  },
  {
    icon: partner2,
    name: "",
  },
  {
    icon: partner3,
    name: "",
  },
  {
    icon: partner4,
    name: "",
  },
  {
    icon: partner5,
    name: "",
  }
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Our Partners
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <img src={icon} alt="" />
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
