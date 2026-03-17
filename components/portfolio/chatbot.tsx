"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { X, Send, User } from "lucide-react"
import Image from "next/image"

const AVATAR_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT_Image_Dec_22__2025__08_12_19_PM_-_Edited-removebg-preview%20%282%29-KuS1XKiAf87u7PHmM9mB7Xda7Oepl2.png"

interface Message {
  role: "user" | "assistant"
  content: string
}

const portfolioContext = {
  name: "Sunny Kumar",
  title: "Software Developer",
  education: "B.Tech in Computer Science Engineering at LPU (2022-2026)",
  location: "Muzaffarpur, Bihar, India",
  email: "sunny080602@gmail.com",
  phone: "+91 9006415918",
  skills: ["Python", "C++", "JavaScript", "React", "Node.js", "SQL", "HTML/CSS", "Git", "Machine Learning"],
  projects: [
    "AI Weather Forecast - ML-powered weather predictions with 90% accuracy",
    "E-Commerce Platform - Full-stack shopping site with React and Node.js",
    "Portfolio Website - Modern responsive portfolio with AI chatbot"
  ],
  experience: "Machine Learning Intern at XYZ Tech (June 2024 - Aug 2024)",
  certifications: ["Python (HackerRank)", "SQL (HackerRank)", "Machine Learning (Coursera)", "React.js (LinkedIn)"],
  achievements: ["Hackathon Finalist", "5-Star Python Rating", "200+ DSA Problems Solved", "Open Source Contributor"]
}

function generateResponse(question: string): string {
  const q = question.toLowerCase()
  
  if (q.includes("name") || q.includes("who are you") || q.includes("who is")) {
    return `I'm an AI assistant for ${portfolioContext.name}'s portfolio. Sunny is a passionate software developer and Computer Science student at LPU. How can I help you learn more about him?`
  }
  
  if (q.includes("skill") || q.includes("technology") || q.includes("tech stack") || q.includes("know")) {
    return `Sunny is proficient in: ${portfolioContext.skills.join(", ")}. He specializes in full-stack development and has a strong interest in AI/ML. Would you like to know about any specific technology?`
  }
  
  if (q.includes("project") || q.includes("work") || q.includes("built") || q.includes("created")) {
    return `Here are some of Sunny's notable projects:\n\n${portfolioContext.projects.map((p, i) => `${i + 1}. ${p}`).join("\n")}\n\nWould you like more details about any specific project?`
  }
  
  if (q.includes("education") || q.includes("study") || q.includes("college") || q.includes("university") || q.includes("degree")) {
    return `Sunny is pursuing ${portfolioContext.education}. He has a strong foundation in computer science fundamentals, data structures, algorithms, and emerging technologies.`
  }
  
  if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("reach") || q.includes("hire")) {
    return `You can reach Sunny at:\n- Email: ${portfolioContext.email}\n- Phone: ${portfolioContext.phone}\n- Location: ${portfolioContext.location}\n\nFeel free to use the contact form on this page to send a message directly!`
  }
  
  if (q.includes("experience") || q.includes("intern") || q.includes("job") || q.includes("worked")) {
    return `Sunny has professional experience as a ${portfolioContext.experience}. During this role, he worked on developing ML models and data pipelines. He's always eager to take on new challenges!`
  }
  
  if (q.includes("certification") || q.includes("certificate") || q.includes("course")) {
    return `Sunny has earned several certifications:\n${portfolioContext.certifications.map((c, i) => `${i + 1}. ${c}`).join("\n")}\n\nThese demonstrate his commitment to continuous learning.`
  }
  
  if (q.includes("achievement") || q.includes("accomplish") || q.includes("award")) {
    return `Sunny's key achievements include:\n${portfolioContext.achievements.map((a, i) => `${i + 1}. ${a}`).join("\n")}\n\nHe's constantly pushing himself to achieve more!`
  }
  
  if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("greet")) {
    return `Hello! I'm Sunny's portfolio assistant. I can tell you about his skills, projects, education, experience, and more. What would you like to know?`
  }
  
  if (q.includes("thank")) {
    return `You're welcome! If you have any more questions about Sunny's portfolio or would like to get in touch, feel free to ask!`
  }
  
  return `I can help you learn about Sunny's skills, projects, education, experience, certifications, and achievements. What would you like to know about?`
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showGreeting, setShowGreeting] = useState(false)
  const [greetingDismissed, setGreetingDismissed] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Sunny's portfolio assistant. Ask me anything about his skills, projects, experience, or how to get in touch!"
    }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Show greeting bubble after a delay on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!greetingDismissed && !isOpen) {
        setShowGreeting(true)
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [greetingDismissed, isOpen])

  // Hide greeting when chat opens
  useEffect(() => {
    if (isOpen) {
      setShowGreeting(false)
      setGreetingDismissed(true)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsTyping(true)

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 500))

    const response = generateResponse(userMessage)
    setIsTyping(false)
    setMessages((prev) => [...prev, { role: "assistant", content: response }])
  }

  const dismissGreeting = () => {
    setShowGreeting(false)
    setGreetingDismissed(true)
  }

  return (
    <>
      {/* Greeting Bubble */}
      {showGreeting && !isOpen && (
        <div className="fixed bottom-24 right-6 z-50 animate-in slide-in-from-right-5 fade-in duration-500">
          <div className="relative bg-card border border-border rounded-2xl rounded-br-md p-4 shadow-xl max-w-[250px]">
            <button
              onClick={dismissGreeting}
              className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Dismiss greeting"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-sm text-foreground">
              Hey there! I&apos;m Sunny&apos;s assistant. Click me to learn more about his work!
            </p>
          </div>
          {/* Speech bubble arrow */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card border-r border-b border-border rotate-45" />
        </div>
      )}

      {/* Chat Toggle Button with Avatar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50 overflow-hidden border-2 border-primary bg-card"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <div className="w-full h-full bg-primary flex items-center justify-center">
            <X className="w-6 h-6 text-primary-foreground" />
          </div>
        ) : (
          <Image
            src={AVATAR_URL}
            alt="Chat with Sunny's Assistant"
            width={64}
            height={64}
            className="object-cover"
          />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-[350px] h-[500px] bg-card border-border shadow-2xl flex flex-col z-50 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-foreground/30">
              <Image
                src={AVATAR_URL}
                alt="Sunny's Assistant"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">Sunny&apos;s Assistant</h3>
              <p className="text-xs opacity-80">Ask me about Sunny</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-primary/30">
                    <Image
                      src={AVATAR_URL}
                      alt="Assistant"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm whitespace-pre-line ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-secondary text-foreground rounded-bl-md"
                  }`}
                >
                  {message.content}
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-primary/30">
                  <Image
                    src={AVATAR_URL}
                    alt="Assistant"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects..."
                className="bg-secondary border-border"
              />
              <Button type="submit" size="icon" disabled={!input.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  )
}
