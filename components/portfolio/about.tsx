"use client"

import { Code, Brain, Users, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Proficient in Python, C++, Java, and modern web technologies like React and Node.js",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Experience building AI-powered systems with ML, NLP, and data analysis tools",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Strong communicator and collaborative team player with adaptability skills",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Algorithmic thinking and efficient coding through DSA training and practice",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-in fade-in duration-500">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am <span className="text-primary font-semibold">Sunny Kumar</span>, a passionate 
              Computer Science and Engineering student at Lovely Professional University, Punjab. 
              Currently pursuing my Bachelor&apos;s degree with a focus on software development, 
              AI/ML, and data science.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in tech started with curiosity about how things work, leading me to 
              master multiple programming languages and frameworks. I specialize in building 
              intelligent systems that solve real-world problems, from AI-powered finance 
              monitoring tools to interactive data visualization dashboards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I am committed to continuous learning and community development. 
              I have completed training programs, earned certifications from IIT Kharagpur and 
              other institutions, and contributed to social welfare through NGO work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
