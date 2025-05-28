
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";


export const CTASection = () => {
  const navigate = useRouter();
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-4xl font-bold">
            From vision to victory, turn
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              ideas{" "}
            </span>
            into <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              impact...{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-base mt-4 mb-8 lg:mb-0">
          Tired of ideas gathering dust? We turn "what if?" into "what's next?" with razor-sharp tools and tailored strategies that deliver real results.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto" 
            onClick={() => {navigate.push("/contact"); window.scrollTo(0, 0);}}>
            Request a quote
          </Button>
          <Button
            variant="secondary"
            className="w-full md:w-auto"
            onClick={() => {navigate.push("/services"); window.scrollTo(0, 0);}}
          >
            View all services
          </Button>
        </div>
      </div>
    </section>
  );
};
