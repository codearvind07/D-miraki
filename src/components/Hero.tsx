import { NumberTicker } from "./magicui/number-ticker";
import { Button } from "./ui/button"
// import Meteors from "./ui/meteors";

export const Hero = () => {
  return (
    <section className="container flex flex-col relative items-center pb-10 md:py-20 gap-10 overflow-hidden">
      <div className=" pt-10 text-center flex flex-col items-center md:w-3/4 lg:text-start space-y-6 ">
        <main className="flex flex-col justify-center items-center text-5xl text-center md:text-7xl font-bold z-10 gap-10">
          <div className=" dark:bg-white/10 bg-black/10 rounded-full w-fit  gap-4 px-4 py-2 dark:text-white text-black text-xs font-normal">
            Over  <NumberTicker
              value={50}
            />+ projects completed 🎉
          </div>
          <h1 className="inline">
            <span className="inline bg-gradient-to-r bg-clip-text text-transparent
              from-[rgb(255,99,71)] via-[rgb(255,165,0)] to-[rgb(0,191,255)]
              animate-text font-recoleta">
              Creating Digital Excellence
            </span>
          </h1>
        </main>

        <p className="md:text-xl text-center text-muted-foreground md:w-10/12 mx-auto lg:mx-0 z-10">
          DMiraki is a dynamic digital agency crafting impactful brand experiences at the intersection of strategy, design, and technology.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4 z-10 flex flex-col md:flex-row">
          <Button
            onClick={() => window.location.href = "https://calendar.app.google/vnpUmUaN2yghqTJT6"}
            className="w-full md:w-auto"
          >
            Let's Talk
          </Button>
        </div>

      </div>
      {/* <Meteors /> */}
    </section>
  );
};
