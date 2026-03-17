"use client"

import { Code2, ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    title: "DSA with C++ Internship",
    company: "Ciperschool",
    period: "Aug 2025",
    description: [
      "Learned and implemented core Data Structures and Algorithms in C++, including arrays, linked lists, stacks, queues, trees, graphs, and sorting & searching techniques.",
      "Solved diverse practice and real-world coding problems, enhancing problem-solving skills.",
      "Strengthened algorithmic thinking and coding efficiency by writing optimized C++ programs.",
    ],
    certificateUrl: "#",
    icon: Code2,
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-in fade-in duration-500">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Training & Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
              } animate-in fade-in slide-in-from-bottom-8`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 -translate-y-0.5" />

              <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                <p className="text-primary font-medium mb-4">{exp.company}</p>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={exp.certificateUrl}
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  View Certificate <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
