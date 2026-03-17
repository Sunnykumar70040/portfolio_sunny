import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Projects } from "@/components/portfolio/projects"
import { Experience } from "@/components/portfolio/experience"
import { Education } from "@/components/portfolio/education"
import { Certifications } from "@/components/portfolio/certifications"
import { Achievements } from "@/components/portfolio/achievements"
import { Contact } from "@/components/portfolio/contact"
import { Navigation } from "@/components/portfolio/navigation"
import { Chatbot } from "@/components/portfolio/chatbot"
import { Footer } from "@/components/portfolio/footer"
import { BackgroundElements } from "@/components/portfolio/background-elements"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background relative">
      <BackgroundElements />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
        <Footer />
      </div>
      <Chatbot />
    </main>
  )
}
