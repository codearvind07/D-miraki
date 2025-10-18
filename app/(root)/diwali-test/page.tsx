"use client";

import DiwaliFireworks from "@/components/landing/diwali-fireworks";
import DiwaliGlitter from "@/components/landing/diwali-glitter";

export default function DiwaliTest() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <DiwaliGlitter />
      <DiwaliFireworks />
      
      <div className="relative z-50 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Diwali Fireworks Test
        </h1>
        <p className="text-xl mb-8">
          If you can see the fireworks and glitter, the components are working!
        </p>
        <div className="bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold py-3 px-6 rounded-full">
          🪔 Festival of Lights 🪔
        </div>
      </div>
    </div>
  );
}