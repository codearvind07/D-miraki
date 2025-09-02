import { NumberTicker } from "../magicui/number-ticker";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative container flex flex-col items-center pb-16 md:py-24 gap-16 overflow-hidden bg-black">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-black opacity-100 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-10 text-center flex flex-col items-center md:w-3/4 lg:text-start space-y-10"
      >
        {/* Headline */}
        <main className="flex flex-col justify-center items-center text-5xl text-center md:text-7xl font-extrabold z-10 gap-6">
          <div className="bg-white/10 rounded-full px-6 py-3 text-sm md:text-base font-medium flex items-center gap-2 text-white">
            🚀 Over <NumberTicker value={400} />+ projects completed
          </div>
          <h1 className="leading-tight">
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-[rgb(255,99,71)] via-[rgb(255,165,0)] to-[rgb(0,191,255)] animate-text font-recoleta">
              Accelerate Your Growth with a Human-First Digital Agency
            </span>
          </h1>
        </main>

        {/* Hero Subhead */}
        <p className="md:text-xl text-center text-gray-300 md:w-9/12 mx-auto lg:mx-0 z-10">
          Unlock transformative results at the intersection of strategic thinking, empathy-driven design, and relentless technical innovation.
        </p>

        {/* Body Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 text-left z-10"
        >
          <div className="p-6 bg-gray-900/80 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <h2 className="text-lg font-semibold mb-3 text-white">Our Promise</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              At <span className="font-semibold text-white">DMiraki</span>, we help ambitious businesses turn untapped potential into market-leading performance. With a battle-tested team from global MNCs, we deliver measurable impact—every project, every campaign, every time.
            </p>
          </div>

          <div className="p-6 bg-gray-900/80 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <h2 className="text-lg font-semibold mb-3 text-white">Our Approach</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-400">
              <li>Digital strategies rooted in your unique goals.</li>
              <li>Award-winning design & development that delights users.</li>
              <li>Proven SEO and data-driven campaigns for growth.</li>
              <li>Transparent project management, no jargon, just results.</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-900/80 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <h2 className="text-lg font-semibold mb-3 text-white">What Makes Us Unique</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-400">
              <li><span className="font-semibold text-white">People-First Mindset:</span> Your success is our metric.</li>
              <li><span className="font-semibold text-white">Women’s Leadership:</span> Diverse perspectives fuel better outcomes.</li>
              <li><span className="font-semibold text-white">Results-Obsessed:</span> Backed by data, insight, and passion.</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-900/80 rounded-2xl shadow-md hover:shadow-xl transition-all">
            <h2 className="text-lg font-semibold mb-3 text-white">Featured Results</h2>
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-400">
              <li>250+ happy B2B and B2C clients.</li>
              <li>400+ completed projects.</li>
              <li>35% avg. revenue growth for retained clients in 2024.</li>
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center mt-8"
        >
          <Button
            onClick={() =>
              (window.location.href = "https://calendar.app.google/vnpUmUaN2yghqTJT6")
            }
            className="px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all bg-gradient-to-r from-orange-500 to-sky-500 text-white"
          >
            Get a Free B2B Strategy Session
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
