"use client";

import { useEffect, useRef } from "react";

interface MarqueeFireworksProps {
  height?: number;
}

const MarqueeFireworks = ({ height = 50 }: MarqueeFireworksProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to match the marquee area
    canvas.width = window.innerWidth;
    canvas.height = height;

    // Firework particles
    const particles: any[] = [];
    const particleCount = 80; // Keep the same particle count for better visibility

    // Create firework particles
    const createFirework = (x: number, y: number) => {
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        // Reduced speed for slower, more elegant movement
        const speed = Math.random() * 2 + 1; // Slowed down from 4 + 2 to 2 + 1
        const size = Math.random() * 3 + 2; // Keep the same size for better visibility
        // Golden yellow, red, pink colors for Diwali with brighter variants
        const colors = ["#FFD700", "#FF4500", "#FF1493", "#FF6347", "#FFA500", "#FFFF00", "#FF0000", "#FF69B4"];
        const color = colors[Math.floor(Math.random() * colors.length)];

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size,
          color,
          life: 100,
          // Slower decay for longer visibility and smoother animation
          decay: Math.random() * 0.01 + 0.003, // Slowed down from 0.02 + 0.005 to 0.01 + 0.003
        });
      }
    };

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas with a semi-transparent black overlay
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)"; // Keep the same opacity for better trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        // Reduced gravity for more natural and slower effect
        p.vy += 0.03; // Reduced from 0.07 to 0.03
        p.life -= p.decay;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life / 100;
        ctx.fill();
        ctx.globalAlpha = 1;
        
        // Remove dead particles
        if (p.life <= 0 || p.y > canvas.height || p.x < 0 || p.x > canvas.width) {
          particles.splice(i, 1);
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Create fireworks at random intervals
    const intervalId = setInterval(() => {
      if (particles.length < 300) { // Keep the same limit for more particles
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2;
        createFirework(x, y);
      }
    }, 800); // Slowed down from 400ms to 800ms for more elegant, less frequent fireworks

    // Handle resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = height;
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [height]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-0"
    />
  );
};

export default MarqueeFireworks;