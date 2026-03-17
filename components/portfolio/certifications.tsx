"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink, X, ZoomIn } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "2023",
    skills: ["Python", "Problem Solving"],
    // Paste external image links here (Google Drive, Cloudinary, Imgur, etc.)
    screenshot: null, // e.g., "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID"
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "2023",
    skills: ["SQL", "Database"],
    screenshot: null, // e.g., "https://res.cloudinary.com/your-cloud/image/upload/v1234/image.png"
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "Coursera / Stanford",
    date: "2023",
    skills: ["Machine Learning", "AI", "Data Science"],
    screenshot: null,
  },
  {
    title: "Web Development Fundamentals",
    issuer: "Udemy",
    date: "2022",
    skills: ["HTML", "CSS", "JavaScript"],
    screenshot: null,
  },
  {
    title: "React.js Essential Training",
    issuer: "LinkedIn Learning",
    date: "2023",
    skills: ["React", "Frontend", "JavaScript"],
    screenshot: null,
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "GeeksforGeeks",
    date: "2023",
    skills: ["DSA", "Problem Solving", "C++"],
    screenshot: null,
  },
]

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <>
      <section id="certifications" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and courses completed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`bg-card border-border transition-all duration-500 group cursor-default ${
                  hoveredCard === index
                    ? "border-primary/50 shadow-2xl shadow-primary/10 -translate-y-2"
                    : "hover:border-primary/30"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Hover glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent transition-opacity duration-500 ${
                      hoveredCard === index ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 ${
                          hoveredCard === index
                            ? "bg-primary/20 scale-110 rotate-3"
                            : ""
                        }`}
                      >
                        <Award
                          className={`w-6 h-6 text-primary transition-all duration-300 ${
                            hoveredCard === index
                              ? "scale-110"
                              : ""
                          }`}
                        />
                      </div>
                      <ExternalLink
                        className={`w-4 h-4 text-muted-foreground transition-all duration-300 ${
                          hoveredCard === index
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-2"
                        }`}
                      />
                    </div>

                    {/* Certificate Screenshot */}
                    {cert.screenshot ? (
                      <button
                        onClick={() => setSelectedImage(cert.screenshot)}
                        className="w-full aspect-video relative rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all mb-4 group/img"
                      >
                        <Image
                          src={cert.screenshot}
                          alt={`${cert.title} certificate`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <ZoomIn className="w-6 h-6 text-primary" />
                        </div>
                      </button>
                    ) : (
                      <div className="w-full aspect-video rounded-lg border border-dashed border-border/50 bg-secondary/30 flex items-center justify-center mb-4">
                        <p className="text-xs text-muted-foreground text-center px-2">
                          Paste external link (Google Drive, Cloudinary, Imgur)
                        </p>
                      </div>
                    )}

                    <h3
                      className={`font-semibold text-lg mb-1 transition-colors duration-300 ${
                        hoveredCard === index
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.issuer} | {cert.date}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className={`text-xs transition-all duration-300 ${
                            hoveredCard === index
                              ? "bg-primary/20 text-primary border-primary/30"
                              : ""
                          }`}
                          style={{
                            transitionDelay: `${idx * 50}ms`,
                            transform: hoveredCard === index ? "translateY(-2px)" : "translateY(0)",
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
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
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Certificate"
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
