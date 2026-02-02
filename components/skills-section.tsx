"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Layers, Server, Wrench, Brain, BarChart3, Cloud } from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    icon: Layers,
    skills: [
      { name: "React", level: 85 },
      { name: "Bootstrap", level: 90 },
      { name: "Tailwind CSS", level: 80 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Python", level: 90 },
      { name: "Django", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Node.js", level: 75 },
    ],
  },
  {
    name: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Docker", level: 65 },
      { name: "Jupyter Notebook", level: 85 },
    ],
  }
  ,
  {
    name: "AI & ML",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 80 },
      { name: "Keras", level: 85 },
      { name: "scikit-learn", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "NLP", level: 80 },
      { name: "OpenCV", level: 75 },
    ],
  },
  {
    name: "Analytics",
    icon: BarChart3,
    skills: [
      { name: "Data Analysis", level: 85 },
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "Data Visualization", level: 80 },
      { name: "Matplotlib", level: 80 },
      { name: "Power BI (Basic)", level: 70 },
    ],
  },
  {
    name: "Cloud",
    icon: Cloud,
    skills: [
      { name: "AWS (Basic)", level: 70 },
      { name: "EC2", level: 70 },
      { name: "S3", level: 75 },
      { name: "RDS", level: 70 },
      { name: "IAM", level: 65 },
    ],
  },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("Frontend")

  const activeSkills = skillCategories.find((cat) => cat.name === activeCategory)?.skills || []

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background via-card to-background" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[80px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-mono text-sm">Skills</span>
          <h2 className="text-3xl font-bold text-foreground">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="flex justify-center gap-2 md:gap-3 mb-12 flex-wrap">
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 border",
                  activeCategory === category.name
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_oklch(0.70_0.18_250/0.3)]"
                    : "bg-secondary/50 text-secondary-foreground border-border hover:border-primary/50 hover:bg-primary/10",
                )}
              >
                <IconComponent size={16} className="md:w-[18px] md:h-[18px]" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(" ")[0]}</span>
              </button>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_0_30px_oklch(0.70_0.18_250/0.15)] transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors font-mono">
                  {skill.name}
                </h3>
                <span className="text-sm text-primary font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out relative"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
