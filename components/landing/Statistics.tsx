import { NumberTicker } from "../magicui/number-ticker";


export const Statistics = () => {
  interface statsProps {
    quantity: number;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: 20,
      description: "Happy Clients",
    },
    {
      quantity: 35,
      description: "Projects Handled",
    },
    {
      quantity: 99,
      description: "Campaigns",
    },
    {
      quantity: 20,
      description: "Business Empowred",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className=" text-center"
          >
            <h2 className="text-3xl"><NumberTicker
              value={quantity}
            />
              +
            </h2>
            <p className="text-base text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
