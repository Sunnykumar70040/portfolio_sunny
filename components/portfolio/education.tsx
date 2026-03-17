"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const educationData = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "2023 - 2027",
    description: "Focusing on software development, data structures, algorithms, and emerging technologies like AI/ML.",
  },
  {
    degree: "Intermediate (12th Grade)",
    institution: "ECR Public School",
    location: "Patna, Bihar",
    period: "2020 - 2022",
    description: "Completed with focus on Science stream (Physics, Chemistry, Mathematics).",
  },
  {
    degree: "Matriculation (10th Grade)",
    institution: "D.A.V Public School",
    location: "Patan, Bihar",
    period: "2019 - 2020",
    description: "Foundation education with strong academic performance.",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-6 z-10" />
                
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""} pl-12 md:pl-0`}>
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <span className="text-sm text-primary font-medium">{edu.degree}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
                      <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
