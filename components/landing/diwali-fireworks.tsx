"use client";

import { useEffect, useRef } from "react";

const DiwaliFireworks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Firework particles
    const particles: any[] = [];
    const particleCount = 110; // Keep the same particle count for better visibility

    // Create firework particles
    const createFirework = (x: number, y: number) => {
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        // Reduced speed for slower, more elegant movement
        const speed = Math.random() * 3 + 1; // Slowed down from 5 + 2 to 3 + 1
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
      
      // Clear canvas with a semi-transparent black overlay for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // Keep the same opacity for better trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        // Reduced gravity for more natural and slower effect
        p.vy += 0.03; // Reduced from 0.05 to 0.03
        p.life -= p.decay;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life / 100; // Normalize alpha to 0-1 range
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
      if (particles.length < 500) { // Keep the same limit for more particles
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height / 2; // Keep fireworks in upper part of screen
        createFirework(x, y);
      }
    }, 600); // Slowed down from 300ms to 600ms for more elegant, less frequent fireworks

    // Cleanup
    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50" // Keep the same z-index
    />
  );
};

export default DiwaliFireworks;