"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Star, Target, Zap } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Finalist",
    description: "Reached finals in multiple university-level hackathons with innovative project solutions.",
  },
  {
    icon: Star,
    title: "5-Star Python Rating",
    description: "Achieved 5-star rating in Python on HackerRank through consistent problem solving.",
  },
  {
    icon: Target,
    title: "200+ DSA Problems",
    description: "Solved 200+ Data Structures and Algorithms problems across various platforms.",
  },
  {
    icon: Zap,
    title: "Open Source Contributor",
    description: "Active contributor to open source projects, improving codebases and documentation.",
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 md:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key accomplishments and milestones in my journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all group"
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
