"use client";

import DiwaliGlitter from "@/components/landing/diwali-glitter";
import Marquee from "@/components/ui/marquee";
import MarqueeFireworks from "@/components/landing/marquee-fireworks";

export default function DiwaliAlways() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <DiwaliGlitter />
      
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Diwali Celebration
        </h1>
        <p className="text-xl mb-8">
          All Diwali effects are now visible all the time!
        </p>
        
        <div className="bg-black py-4 relative overflow-hidden rounded-lg border border-gray-800 mt-8">
          <MarqueeFireworks height={60} />
          <Marquee className="[--duration:40s] [--gap:3rem] relative z-20">
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
        
        <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold rounded-full inline-block">
          🪔 Festival of Lights 🪔
        </div>
      </div>
    </div>
  );
}