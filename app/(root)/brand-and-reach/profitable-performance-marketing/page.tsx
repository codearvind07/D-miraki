"use client";

import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Assets (keep your paths)
import roboto from "../../../../assets/roboto.png";
import cubeLeg from "../../../../assets/cube-leg.png";

// Optional: unify icon sizes via className
const iconClass = "w-6 h-6";
const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);
const WalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);
const MagnifierIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ProfitablePerformanceMarketing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-fade-in");
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <>
      <Head>
        <title>Performance Marketing Services | PPC & Paid Advertising by DMiraki</title>
        <meta
          name="description"
          content="Drive profitable growth with DMiraki's performance marketing services. Google Ads, Facebook Ads, and multi-channel campaigns that maximize ROI."
        />
      </Head>

      {/* Animated background blobs (theme-matched) */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      </div>

      {/* Hero Section: gradient + glow frame like SMMM */}
      <section
        ref={addToRefs}
        className="relative py-16 lg:py-24 px-4 md:px-6 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/20 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Profitable Performance{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Marketing
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Data-Driven Campaigns That Maximize Every Marketing Dollar
              </p>
              <p className="text-lg">
                Performance marketing isn’t about spending more – it’s about spending smarter. We combine advanced
                targeting, compelling creative, and continuous optimization to drive profitable customer acquisition and sustainable growth.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Get Your Free Campaign Audit
              </button>
              <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 text-gray-800 dark:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Schedule Strategy Call
              </button>
            </div>
          </div>

          <div className="relative">
            {/* subtle gradient glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-700">
              <Image
                src={roboto}
                alt="Performance Marketing"
                className="w-full max-w-md mx-auto relative rounded-lg shadow-2xl"
                width={roboto.width}
                height={roboto.height}
                priority
              />
            </div>
          </div>
        </div>

        {/* decorative asset, softer */}
        <div className="pointer-events-none absolute -bottom-6 -right-6 opacity-10 w-[22rem] h-[22rem]">
          <Image src={cubeLeg} alt="Background pattern" fill className="object-contain" />
        </div>
      </section>

      {/* Services Section: glass cards, icon bubble, group hover */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 md:px-6 bg-white dark:bg-gray-950 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Performance Marketing Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to maximize ROI and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-blue-600 dark:text-blue-400">
                <ChartIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Google Ads Management</h3>
              <p className="text-muted-foreground mb-4">Capture high-intent traffic when it matters most.</p>
              <ul className="text-foreground/80 space-y-2">
                <li>Search campaign optimization</li>
                <li>Display network advertising</li>
                <li>Shopping campaign management</li>
                <li>YouTube advertising campaigns</li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-blue-600 dark:text-blue-400">
                <WalletIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Media Advertising</h3>
              <p className="text-muted-foreground mb-4">Engage audiences where they spend their time.</p>
              <ul className="text-foreground/80 space-y-2">
                <li>Facebook & Instagram</li>
                <li>LinkedIn sponsored content</li>
                <li>Twitter/X campaigns</li>
                <li>TikTok advertising</li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-blue-600 dark:text-blue-400">
                <MagnifierIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Programmatic Advertising</h3>
              <p className="text-muted-foreground mb-4">Advanced targeting that reaches the right people.</p>
              <ul className="text-foreground/80 space-y-2">
                <li>Cross-platform retargeting</li>
                <li>Lookalike audiences</li>
                <li>Behavioral targeting</li>
                <li>Real-time bid optimization</li>
              </ul>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-blue-600 dark:text-blue-400">
                <ChartIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conversion Rate Optimization</h3>
              <p className="text-muted-foreground mb-4">Turn more traffic into paying customers.</p>
              <ul className="text-foreground/80 space-y-2">
                <li>Landing page optimization</li>
                <li>A/B testing & experimentation</li>
                <li>User experience improvements</li>
                <li>Checkout optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section: subtle gradient background wrapper */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 md:px-6 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-950 dark:to-blue-900/40 transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Performance Marketing Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven framework that delivers measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {n}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4">
                  {n === 1 && "Strategic Campaign Planning"}
                  {n === 2 && "Advanced Audience Targeting"}
                  {n === 3 && "Creative Development & Testing"}
                  {n === 4 && "Continuous Optimization"}
                </h3>
                <p className="text-muted-foreground">
                  {n === 1 &&
                    "Understand goals, analyze audience, and research competition to build high-performing campaigns from day one."}
                  {n === 2 &&
                    "Use sophisticated targeting and custom audiences to reach those most likely to convert."}
                  {n === 3 &&
                    "Develop multiple ad variations and test messaging, visuals, and CTAs to maximize resonance."}
                  {n === 4 &&
                    "Daily monitoring, weekly optimizations, and monthly reviews to continually improve ROI."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types: dark theme, colored gradient tiles with hover lift */}
<section
  ref={addToRefs}
  className="py-16 lg:py-24 px-4 md:px-6 bg-gray-950 transition-opacity duration-1000 opacity-0"
>
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        Campaign Types We Excel At
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Tailored strategies to match business goals and lifecycle.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Lead Gen */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/10">
        <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mb-6">
          <span className="text-2xl font-bold">LG</span>
        </div>
        <h3 className="text-2xl font-bold mb-3">Lead Generation Campaigns</h3>
        <p className="text-blue-100">
          Capture high-intent prospects and nurture them through your funnel.
        </p>
      </div>

      {/* E-commerce */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/10">
        <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mb-6">
          <span className="text-2xl font-bold">EC</span>
        </div>
        <h3 className="text-2xl font-bold mb-3">E-commerce Sales Campaigns</h3>
        <p className="text-purple-100">
          Optimize for immediate sales with strategic promotions and recovery flows.
        </p>
      </div>

      {/* Brand Awareness */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/10">
        <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mb-6">
          <span className="text-2xl font-bold">BA</span>
        </div>
        <h3 className="text-2xl font-bold mb-3">Brand Awareness Campaigns</h3>
        <p className="text-green-100">Expand reach and build category authority.</p>
      </div>

      {/* Retargeting */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/10">
        <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mb-6">
          <span className="text-2xl font-bold">RT</span>
        </div>
        <h3 className="text-2xl font-bold mb-3">Retargeting Campaigns</h3>
        <p className="text-orange-100">
          Re-engage visitors with tailored messaging to convert interest into revenue.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Metrics Section: dark gradient band like SMMM analytics */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-900 to-blue-900 text-white transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Performance Metrics We Deliver</h2>
          <p className="text-xl text-white/80 mb-12">
            Data-driven insights that continuously improve performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "↓ CPA", title: "Cost Per Acquisition Reduction", text: "Lower acquisition costs via optimization and targeting." },
              { label: "↑ ROAS", title: "Return on Ad Spend Improvement", text: "Maximize revenue from every advertising dollar." },
              { label: "↑ CVR", title: "Conversion Rate Enhancement", text: "Improve the percentage of visitors who take action." },
              { label: "↑ LTV", title: "Customer Lifetime Value Growth", text: "Attract higher-value customers for long-term success." },
            ].map((m, i) => (
              <div key={i} className="text-center bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold ${i===0?"bg-blue-500":i===1?"bg-green-500":i===2?"bg-purple-500":"bg-orange-500"}`}>
                  {m.label}
                </div>
                <h3 className="text-xl font-semibold mb-3">{m.title}</h3>
                <p className="text-white/80">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA: brand gradient bar */}
      <section
        ref={addToRefs}
        className="py-16 lg:py-24 px-4 md:px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-opacity duration-1000 opacity-0"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to scale your business with profitable performance marketing?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Let’s build a strategy that delivers measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Get Your Free Campaign Audit
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1">
              Schedule Strategy Call
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fade-in { opacity: 1 !important; }
      `}</style>
    </>
  );
};

export default ProfitablePerformanceMarketing;
