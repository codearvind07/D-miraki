"use client";

import Marquee from "@/components/ui/marquee";
import MarqueeFireworks from "@/components/landing/marquee-fireworks";

export default function MarqueeTest() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Marquee Test with Fireworks</h1>
        
        <div className="bg-black py-4 relative overflow-hidden rounded-lg border border-gray-800">
          <MarqueeFireworks height={60} />
          <Marquee className="[--duration:40s] [--gap:3rem] relative z-20" pauseOnHover>
            <span className="text-white font-bold text-xl mx-4">
              🪔 Happy Diwali from the D'Miraki Family! Wishing you a prosperous and joyful festival of lights! 🪔
            </span>
            <span className="text-white font-bold text-xl mx-4">
              🪔 Happy Diwali from the D'Miraki Family! Wishing you a prosperous and joyful festival of lights! 🪔
            </span>
            <span className="text-white font-bold text-xl mx-4">
              🪔 Happy Diwali from the D'Miraki Family! Wishing you a prosperous and joyful festival of lights! 🪔
            </span>
          </Marquee>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-lg">The text above should be moving slowly from right to left with fireworks in the background</p>
        </div>
      </div>
    </div>
  );
}