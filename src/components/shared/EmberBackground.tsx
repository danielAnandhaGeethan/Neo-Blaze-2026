'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface EmberBackgroundProps {
  className?: string;
}

// --- Configuration ---
// You can tweak these values to change the animation's look and feel.
const PARTICLE_COUNT = 50; // Total number of particles
const PARTICLE_COLORS = [ // Colors for the embers
  'rgba(255, 148, 94,', // Soft Orange
  'rgba(239, 102, 72,', // Deeper Orange-Red
  'rgba(255, 210, 120,', // Pale Gold
];
// --------------------

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number; // Horizontal velocity
  vy: number; // Vertical velocity
  color: string;
  alpha: number;
  waveAngle: number;
}

const EmberBackground: React.FC<EmberBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number>();
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const isMobile = useRef(false);
  
  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particles.current = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 1.5, // Radius: 1.5 to 3
        vx: Math.random() * 0.2 - 0.1, // Horizontal drift: -0.1 to 0.1
        vy: Math.random() * -0.25 - 0.15, // Vertical speed: -0.15 to -0.4 (upwards)
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        alpha: Math.random() * 0.25 + 0.15, // Opacity: 0.15 to 0.4
        waveAngle: Math.random() * Math.PI * 2,
      });
    }
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      initParticles();
    }
  }, [initParticles]);


  useEffect(() => {
    isMobile.current = window.innerWidth < 768;

    const handleMouseMove = (event: MouseEvent) => {
      if (isMobile.current) return;
      const canvas = canvasRef.current;
      if (canvas) {
        // Easing toward the target
        const targetX = (event.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
        const targetY = (event.clientY / window.innerHeight - 0.5) * 2; // -1 to 1
        mouse.current.x += (targetX - mouse.current.x) * 0.05;
        mouse.current.y += (targetY - mouse.current.y) * 0.05;
      }
    };
    
    if(!isMobile.current){
        window.addEventListener('mousemove', handleMouseMove);
    }
    
    // --- Resize handler ---
    let debounceTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(resizeCanvas, 250);
    };
    window.addEventListener('resize', handleResize);


    // --- Animation Logic ---
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!ctx || !canvas) return;

    resizeCanvas();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach(p => {
        // Update position
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.waveAngle) * 0.1; // Gentle side-to-side wiggle
        p.waveAngle += 0.02;

        // Respawn particle if it goes off-screen
        if (p.y < -p.radius) {
          p.y = canvas.height + p.radius;
          p.x = Math.random() * canvas.width;
        }

        // Calculate parallax effect
        const parallaxX = !isMobile.current ? mouse.current.x * 10 : 0;
        const parallaxY = !isMobile.current ? mouse.current.y * 5 : 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x + parallaxX, p.y + parallaxY, p.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    animate(); // Start animation

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if(!isMobile.current) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
      clearTimeout(debounceTimeout);
    };
  }, [resizeCanvas, initParticles]);

  return (
    <div ref={containerRef} className={cn('absolute inset-0 -z-10 pointer-events-none', className)}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default EmberBackground;
