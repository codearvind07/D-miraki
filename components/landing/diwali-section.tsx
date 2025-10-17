"use client";

import Marquee from "@/components/ui/marquee";
import MarqueeFireworks from "@/components/landing/marquee-fireworks";

export const DiwaliSection = () => {
  return (
    <div className="w-full">
      {/* Diwali Wishes Banner - always shown */}
      <div className="bg-black text-white text-center py-2 px-4">
        <p className="font-bold text-lg animate-pulse">
          🪔 Happy Diwali from the D'Miraki Family! May this festival of lights bring joy, prosperity, and success to your life! 🪔
        </p>
      </div>
      
      {/* Diwali Marquee Bar - always shown below header */}
      <div className="bg-black py-2 relative overflow-hidden">
        <MarqueeFireworks height={50} />
        <Marquee className="[--duration:40s] [--gap:3rem] relative z-20" pauseOnHover>
          <span className="text-white font-bold text-lg mx-4">
            🪔 Happy Diwali from the D'Miraki Family! Wishing you a prosperous and joyful festival of lights! 🪔
          </span>
          <span className="text-white font-bold text-lg mx-4">
            🪔 Happy Diwali from the D'Miraki Family! Wishing you a prosperous and joyful festival of lights! 🪔
          </span>
          <span className="text-white font-bold text-lg mx-4">
            🪔 Happy Diwali from the D'Miraki Family! Wishing you a prosperous and joyful festival of lights! 🪔
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default DiwaliSection;