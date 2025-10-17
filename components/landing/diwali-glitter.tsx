"use client";

import { useEffect, useRef } from "react";

const DiwaliGlitter = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create glitter particles
    const glitterCount = 100; // Increased glitter count for better visibility
    const glitters: HTMLDivElement[] = [];

    for (let i = 0; i < glitterCount; i++) {
      const glitter = document.createElement("div");
      glitter.className = "absolute rounded-full";
      
      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      glitter.style.left = `${left}%`;
      glitter.style.top = `${top}%`;
      
      // Random size (increased minimum size for better visibility)
      const size = Math.random() * 6 + 2;
      glitter.style.width = `${size}px`;
      glitter.style.height = `${size}px`;
      
      // Brighter color palette for better contrast on black background
      const colors = ["#FFD700", "#FF4500", "#FF1493", "#FF6347", "#FFA500", "#FFFF00", "#FF0000", "#FF69B4"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      glitter.style.backgroundColor = color;
      
      // More pronounced animation
      const duration = Math.random() * 4 + 3;
      const delay = Math.random() * 10;
      glitter.style.animation = `twinkle ${duration}s infinite ${delay}s`;
      
      container.appendChild(glitter);
      glitters.push(glitter);
    }

    // Add CSS for twinkling animation
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes twinkle {
        0%, 100% { opacity: 0; transform: scale(0.3); }
        50% { opacity: 1; transform: scale(1.2); }
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      glitters.forEach(glitter => {
        if (glitter.parentNode) {
          glitter.parentNode.removeChild(glitter);
        }
      });
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 overflow-hidden" // Increased z-index
    />
  );
};

export default DiwaliGlitter;