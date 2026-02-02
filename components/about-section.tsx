import { Briefcase, Code2, GraduationCap, MapPin } from "lucide-react"

const experiences = [
  {
    period: "2025 – Present",
    role: "Backend Developer",
    company: "AI & Full-Stack Projects (Academic + Personal)",
    description:
      "Worked on academic and self-driven projects combining AI models with backend development to build complete, functional applications.",
    skills: ["Python, Flask", "Django", "REST APIs", "PostgreSQL", "MongoDB", "Machine Learning", "NLP", "TensorFlow", "Git"],
  },
  {
    period: "2023 – 2024",
    role: "Full-Stack Developer",
    company: "Full-Stack & Python Projects",
    description:
      "Focused on strengthening core programming and backend concepts through hands-on projects.",
    skills: ["Python", "React", "MongoDB", "AWS","Git"],
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background via-card/50 to-background" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.70 0.18 250) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-primary font-mono text-sm">01. About</span>
              <h2 className="text-3xl font-bold text-foreground">Who I Am</h2>
              <div className="w-20 h-1 bg-linear-to-r from-primary to-accent rounded-full" />
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I’m a final-year B.E. student in Artificial Intelligence & Data Science who enjoys building things that actually work in the real world. I mostly work with Python, AI/ML, and full-stack web development, and I like turning ideas into simple, usable applications.
              </p>
              <p>
                My interest lies in combining AI with practical software development—whether it’s building chatbots, detecting deepfakes, or creating clean full-stack apps. I focus more on understanding the logic and problem-solving side rather than just using tools blindly.
              </p>
              <p>Right now, I’m actively learning, building projects, and looking for entry-level opportunities where I can grow as a developer and contribute to meaningful tech.</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 border border-border text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>Navi Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 border border-border text-sm text-muted-foreground">
                <Briefcase size={16} className="text-primary" />
                <span>Open to opportunities</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 border border-border text-sm text-muted-foreground">
                <GraduationCap size={16} className="text-primary" />
                <span>B.E. AI & Data Science</span>
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Code2 className="text-primary" size={20} />
              <h3 className="text-xl font-semibold text-foreground">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:shadow-[0_0_10px_oklch(0.70_0.18_250/0.5)] transition-all" />
                  <div className="space-y-2 p-4 rounded-xl bg-card/50 border border-transparent hover:border-border transition-all">
                    <p className="text-xs uppercase tracking-wider text-primary font-mono">{exp.period}</p>
                    <h4 className="text-lg font-medium text-foreground">
                      {exp.role} <span className="text-accent">@ {exp.company}</span>
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
