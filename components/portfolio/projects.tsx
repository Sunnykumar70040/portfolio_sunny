"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Brain, BarChart3, X, ZoomIn } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Daily-Puzzle-Logic-Game",
    description:
      "A logic-based Sudoku game designed to challenge problem-solving and critical thinking skills through daily puzzles. Built with an interactive UI to provide a smooth and engaging user experience for users.",
    highlights: [
      "Built using React.js for a dynamic and responsive user interface",
      "Backend powered by Node.js for efficient game logic and data handling",
      "Interactive Sudoku grid with real-time input validation",
    ],
    technologies: ["React.js", "Node.js", "CSS", "HTML", "JavaScript"],
    icon: Brain,
    date: "Feb 2026",
    githubUrl: "https://github.com/Sunnykumar70040/Daily-Puzzle-Logic-Game",
    liveUrl: "https://res.cloudinary.com/dibvhxwgc/image/upload/v1773769502/Screenshot_2026-03-17_230727_dxkdwd.png",
    // Paste your external image links here (Google Drive, Cloudinary, Imgur, etc.)
    screenshots: [
      // "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID",
      // "https://res.cloudinary.com/your-cloud/image/upload/v1234/image.png",
      "https://res.cloudinary.com/dibvhxwgc/image/upload/v1773769502/Screenshot_2026-03-17_230727_dxkdwd.png",
    ],
  },
  {
    title: "Talk-with-Corporate",
    description:
      "A corporate communication platform designed to enable seamless interaction between users and organizations. Built to provide real-time messaging and structured communication in a professional environment.",
    highlights: [
      "Real-time messaging and structured communication",
      "Professional environment for corporate interactions",
      "Seamless integration with existing corporate systems",
    ],
    technologies: ["React.js", "Node.js", "Socket.IO", "CSS", "HTML", "JavaScript" , "prisma", "postgresql"],
    icon: Brain,
    date: "Mar 2026",
    githubUrl: "https://github.com/Sunnykumar70040/talkwithCorporate",
    liveUrl: "https://res.cloudinary.com/dibvhxwgc/image/upload/v1773769501/Screenshot_2026-03-17_231600_xzfoh1.png",
    // Paste your external image links here (Google Drive, Cloudinary, Imgur, etc.)
    screenshots: [
      // "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID",
      // "https://res.cloudinary.com/your-cloud/image/upload/v1234/image.png",
      "https://res.cloudinary.com/dibvhxwgc/image/upload/v1773769501/Screenshot_2026-03-17_231600_xzfoh1.png",
    ],
  },
  {
    title: "AI-Based Finance Monitoring System",
    description:
      "An AI-powered system to analyze user expenses, predict monthly budgets, and generate personalized financial insights. Features automated debt tracking and savings recommendations using machine learning and rule-based logic.",
    highlights: [
      "Real-time monitoring dashboard with dynamic visualizations",
      "Automated alerts and performance tracking",
      "ML-powered budget predictions",
    ],
    technologies: ["Python", "Machine Learning", "NLP"],
    icon: Brain,
    date: "Aug 2025",
    githubUrl: "https://github.com/Sunnykumar70040",
    liveUrl: "https://res.cloudinary.com/dibvhxwgc/image/upload/v1773762383/Screenshot_2026-03-17_210031_bfnkqn.png",
    // Paste your external image links here (Google Drive, Cloudinary, Imgur, etc.)
    screenshots: [
      // "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID",
      // "https://res.cloudinary.com/your-cloud/image/upload/v1234/image.png",
      "https://res.cloudinary.com/dibvhxwgc/image/upload/v1773762383/Screenshot_2026-03-17_210031_bfnkqn.png",
    ],
  },
  {
    title: "India Water Level & Pollution Analysis",
    description:
      "An interactive Power BI dashboard to analyze water availability, pollution levels, and demand-supply gaps across India. Features KPI cards comparing water required vs available, highlighting critical shortage areas.",
    highlights: [
      "Drill-down analysis using interactive slicers",
      "Improved decision-making and reporting efficiency",
      "Visual representation of critical data",
    ],
    technologies: ["Power BI", "DAX", "Data Modelling", "Data Visualization"],
    icon: BarChart3,
    date: "Nov 2025",
    githubUrl: null,
    liveUrl: "https://res.cloudinary.com/dibvhxwgc/image/upload/v1773762018/Screenshot_2026-03-17_204839_uivivo.png",
    // Paste your external image links here
    screenshots: [
      // "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID",
      // "https://res.cloudinary.com/your-cloud/image/upload/v1234/image.png",
      "https://res.cloudinary.com/dibvhxwgc/image/upload/v1773762018/Screenshot_2026-03-17_204839_uivivo.png",
    ],
  },
]

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <>
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-500">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Showcasing projects that demonstrate my skills in AI, data analysis, and software development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent transition-opacity duration-500 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 ${
                        hoveredProject === index ? "bg-primary/20 scale-110" : ""
                      }`}
                    >
                      <project.icon
                        className={`w-6 h-6 text-primary transition-transform duration-300 ${
                          hoveredProject === index ? "scale-110" : ""
                        }`}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>

                  <h3
                    className={`text-xl font-semibold text-foreground mb-3 transition-colors duration-300 ${
                      hoveredProject === index ? "text-primary" : ""
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  {/* Screenshots Grid */}
                  {project.screenshots.length > 0 && (
                    <div className="mb-4 grid grid-cols-2 gap-2">
                      {project.screenshots.map((screenshot, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(screenshot)}
                          className="relative aspect-video rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all group/img"
                        >
                          <Image
                            src={screenshot}
                            alt={`${project.title} screenshot ${idx + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover/img:scale-105"
                            priority
                          />
                          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                            <ZoomIn className="w-6 h-6 text-primary" />
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Placeholder for screenshots if none exist */}
                  {project.screenshots.length === 0 && (
                    <div className="mb-6 p-8 rounded-lg border border-dashed border-border/50 bg-secondary/30">
                      <p className="text-xs text-muted-foreground text-center">
                        Paste external image links from Google Drive, Cloudinary, Imgur, etc.
                      </p>
                    </div>
                  )}

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, hIdx) => (
                      <li
                        key={highlight}
                        className="text-sm text-muted-foreground flex items-start gap-2 transition-all duration-300"
                        style={{
                          transform: hoveredProject === index ? `translateX(${hIdx * 2}px)` : "translateX(0)",
                        }}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 transition-all duration-300 ${
                            hoveredProject === index ? "scale-125" : ""
                          }`}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground transition-all duration-300 hover:bg-primary/20 hover:text-primary cursor-default"
                        style={{
                          transitionDelay: `${tIdx * 50}ms`,
                          transform: hoveredProject === index ? "translateY(-2px)" : "translateY(0)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="transition-all duration-300 hover:scale-105"
                      >
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Link>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" asChild className="transition-all duration-300 hover:scale-105">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Project screenshot"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}
