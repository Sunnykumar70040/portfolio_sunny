"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="space-y-2">
            <p className="text-primary font-medium">Hello, I am</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Sunny Kumar
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground">
              Software Developer & CSE Student
            </h2>
          </div>

          <p className="text-muted-foreground max-w-md leading-relaxed">
            A passionate Computer Science student at Lovely Professional University, 
            building innovative solutions with Python, React, and AI/ML technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <a href="/sunny-cv.pdf" download>
                <Download size={18} />
                Download CV
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="gap-2">
              <Link href="https://drive.google.com/file/d/1KoOOvRGzFBOLpp0wHMgDKHz_8PE2Sdnp/view" target="_blank" rel="noopener noreferrer">
                <Eye size={18} />
                View in Drive
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <Link
              href="https://github.com/Sunnykumar70040"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sunny-kumar233/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:sunnykumar933412@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>

        {/* Photo Frame */}
        <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/50 to-accent/50 blur-lg opacity-50 animate-pulse" />
            
            {/* Photo container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
              <Image
                src="/images/avatar.png"
                alt="Sunny Kumar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
