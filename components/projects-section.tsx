"use client"

import { Github, ExternalLink, Folder } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Legal Assistance Chatbot",
    description:
      "I built a chatbot that helps people understand basic legal questions related to Indian law.It uses NLP to figure out what the user is asking and gives clear, simple answers instead of legal jargon.",
    technologies: ["Python", "NLTK", "Scikit-learn", "NLP"],
    github: "https://github.com/alexchen/ai-chat-app",
    demo: "https://ai-chat-app.vercel.app",
    featured: true,
  },
  {
    title: "Deepfake Face Classification",
    description:
      "This project focuses on detecting AI-generated face images. I trained a deep learning model and tested how accurately it can separate real images from fake ones using proper evaluation metrics.",
    technologies: ["Python","TensorFlow", "Keras","OpenCV", "CNN"],
    github: "https://github.com/alexchen/ecommerce-analytics",
    demo: "https://ecommerce-analytics.vercel.app",
    featured: true,
  },
  {
    title: "Password Manager",
    description:
      "I created a secure password manager where users can store their credentials safely.It includes authentication, backend APIs, and database logic to manage data securely.",
    technologies: ["React" , "Node.js" , "Express" , "MongoDB" , "REST APIs"],
    github: "https://github.com/alexchen/cloud-manager",
    demo: null,
    featured: true,
  },
  {
    title: "Machine Learning Pipeline",
    description:
      "End-to-end ML pipeline for data preprocessing, model training, and deployment with automated retraining capabilities.",
    technologies: ["Python", "PyTorch", "MLflow", "FastAPI", "Redis"],
    github: "https://github.com/alexchen/ml-pipeline",
    demo: null,
    featured: false,
  },
  {
    title: "Real-time Collaboration Tool",
    description: "Collaborative document editing platform with real-time sync, version history, and team permissions.",
    technologies: ["Next.js", "WebSockets", "MongoDB", "Redis", "TypeScript"],
    github: "https://github.com/alexchen/collab-tool",
    demo: "https://collab-tool.vercel.app",
    featured: false,
  },
  {
    title: "Data Visualization Library",
    description: "Open-source React component library for creating interactive and accessible data visualizations.",
    technologies: ["React", "D3.js", "TypeScript", "Storybook", "Vitest"],
    github: "https://github.com/alexchen/dataviz-lib",
    demo: "https://dataviz-lib.vercel.app",
    featured: false,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background via-card to-background" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-accent/5 blur-[80px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-mono text-sm">03. Projects</span>
          <h2 className="text-3xl font-bold text-foreground">Featured Work</h2>
          <div className="w-20 h-1 bg-linear-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've built with passion and precision
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_0_40px_oklch(0.70_0.18_250/0.15)] transition-all duration-500"
            >
              <div className="absolute -inset-px bg-linear-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <Folder size={20} className="text-primary" />
                    </div>
                    <span className="text-primary font-mono text-sm">Featured Project</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      aria-label="View GitHub repository"
                    >
                      <Github size={18} />
                    </Link>
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={18} />
                      </Link>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-foreground mb-2">Other Noteworthy Projects</h3>
          <p className="text-muted-foreground">View the archive</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_0_30px_oklch(0.70_0.18_250/0.15)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Folder size={20} className="text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-all"
                    aria-label="View GitHub repository"
                  >
                    <Github size={18} />
                  </Link>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-all"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </Link>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs font-mono text-muted-foreground">
                    {tech}
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
