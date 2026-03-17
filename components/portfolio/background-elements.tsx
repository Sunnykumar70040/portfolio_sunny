"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function BackgroundElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate random particles
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.3 + 0.1,
    }))
    setParticles(newParticles)

    // Track mouse position for interactive effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: ((p.x + p.speedX + 100) % 100),
          y: ((p.y + p.speedY + 100) % 100),
        }))
      )
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Mouse-following glow */}
      <div
        className="absolute w-96 h-96 bg-primary/10 rounded-full blur-[150px] transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Animated particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary transition-all duration-100"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        />
      ))}

      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Floating geometric shapes with different animations */}
      <div className="absolute top-40 right-20 w-6 h-6 border-2 border-primary/30 rotate-45 animate-spin-slow" />
      <div
        className="absolute top-60 left-[15%] w-4 h-4 bg-primary/20 rounded-full animate-bounce-slow"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-[30%] right-[10%] w-3 h-3 bg-primary/30 rounded-full animate-ping-slow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-[50%] left-[5%] w-8 h-8 border-2 border-primary/20 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-[70%] right-[25%] w-5 h-5 border-2 border-primary/25 rotate-45 animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Moving lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-slide-right" />
      <div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-slide-left"
        style={{ animationDelay: "2s" }}
      />

      {/* Code brackets decoration */}
      <div className="absolute top-1/4 left-8 text-primary/10 text-6xl font-mono select-none animate-float">
        {"{"}
      </div>
      <div
        className="absolute top-1/4 right-8 text-primary/10 text-6xl font-mono select-none animate-float"
        style={{ animationDelay: "1s" }}
      >
        {"}"}
      </div>
      <div
        className="absolute bottom-1/4 left-12 text-primary/10 text-5xl font-mono select-none animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        {"</"}
      </div>
      <div
        className="absolute bottom-1/4 right-12 text-primary/10 text-5xl font-mono select-none animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        {"/>"}
      </div>

      {/* Gradient lines */}
      <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse" />
      <div
        className="absolute top-20 right-1/3 w-px h-32 bg-gradient-to-b from-transparent via-primary/15 to-transparent animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-0 left-2/3 w-px h-48 bg-gradient-to-t from-transparent via-primary/20 to-transparent animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>
  )
}
