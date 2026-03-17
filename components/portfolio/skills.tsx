"use client"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "Java", "PHP"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "Bootstrap", "Node.js", "React"],
  },
  {
    title: "Data & Tools",
    skills: ["Pandas", "NumPy", "Matplotlib", "MySQL", "MongoDB"],
  },
  {
    title: "Other Tools",
    skills: ["Power BI", "DAX", "Git", "Canva", "Photoshop"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem-Solving", "Team Collaboration", "Adaptability", "Continuous Learning"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-in fade-in duration-500">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A diverse set of technical and soft skills that enable me to build comprehensive solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
