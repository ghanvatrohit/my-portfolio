"use client"

import { Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const socialLinks = [
  { icon: Github, href: "https://github.com/ghanvatrohit", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rohitghanvat/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ghanvat.rohit.ai023@gmail.com", label: "Email" },
]

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-secondary/30 to-background dark:from-[#0a0a1a] dark:via-[#1a1a3a] dark:to-[#0d0d2a]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(120, 100, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 100, 255, 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[80px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-primary/5 blur-[60px] animate-float" />

      {/* Geometric shapes */}
      <div className="absolute top-20 right-[15%] w-32 h-32 border border-primary/20 rounded-xl rotate-45 animate-float" />
      <div className="absolute bottom-32 left-[10%] w-24 h-24 border border-accent/20 rounded-lg rotate-12 animate-float-delayed" />
      <div
        className="absolute top-1/3 left-[20%] w-16 h-16 border border-primary/15 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* Glowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="oklch(0.70 0.18 250)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line x1="0" y1="30%" x2="100%" y2="35%" stroke="url(#line-gradient)" strokeWidth="1" />
        <line x1="0" y1="70%" x2="100%" y2="65%" stroke="url(#line-gradient)" strokeWidth="1" />
      </svg>
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Profile (order-1 on mobile for top position) */}
        <div className="flex flex-col items-center lg:items-start space-y-6 order-1">
          {/* Profile Photo */}
          <div className="relative mb-4">
            <div className="absolute -inset-2 bg-primary/30 rounded-full blur-lg opacity-50 animate-pulse-glow" />
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary/30 glow-effect bg-black">
              <Image src="/ROHIT.jpg" alt="Rohit Ghanvat" fill className="object-cover scale-99.5" priority />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-primary font-mono">Available for work</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance text-glow text-center lg:text-left">
            Rohit Ghanvat
          </h1>
          <h2 className="text-xl md:text-2xl text-primary font-medium font-mono text-center lg:text-left">
            {"<"}
            <span className="text-accent">AI & Full Stack Developer</span>
            {" Developer/>"}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md text-center lg:text-left">
            I build intelligent, scalable, and user-focused digital experiences using modern web technologies and AI-driven solutions.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_oklch(0.70_0.18_250/0.3)]"
            >
              <Download size={18} />
              Download CV
            </a>
            <Link
              href="#contact"
              className="px-6 py-3 border border-primary text-primary rounded-xl font-medium hover:bg-primary/10 transition-all"
            >
              Hire Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 pt-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column - Text Content (order-2 on mobile for bottom position) */}
        <div className="order-2">
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl rounded-3xl opacity-50" />
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-8 space-y-6 glow-effect">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs text-muted-foreground font-mono"></span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I'm an AI & Data Science student who likes turning ideas into working products. I've worked on machine learning models, full-stack apps, and small mobile projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy solving problems, learning new tools, and building things that actually help people.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently looking for opportunities where I can grow, contribute, and work on meaningful tech.
              </p>
              <div className="pt-4 flex gap-2 flex-wrap">
                {["Python", "Java", "React", "AI/ML","PostgreSQL", "AWS (basic)"].map((tech) => (
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
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}