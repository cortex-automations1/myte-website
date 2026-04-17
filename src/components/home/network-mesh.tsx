"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export function NetworkMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const PARTICLE_COUNT = 40;
    const MAX_DISTANCE = 120;
    const SPEED = 0.3;
    const DOT_RADIUS = 2;
    const DOT_OPACITY = 0.25;
    const LINE_MAX_OPACITY = 0.15;

    function resize() {
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          vx: (Math.random() - 0.5) * SPEED * 2,
          vy: (Math.random() - 0.5) * SPEED * 2,
        });
      }
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      // Draw lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            const opacity = LINE_MAX_OPACITY * (1 - dist / MAX_DISTANCE);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 182, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 182, 255, ${DOT_OPACITY})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    }

    resize();
    initParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-60"
    />
  );
}
