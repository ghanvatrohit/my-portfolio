"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { Download, Menu, Terminal, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/70 backdrop-blur-xl border-b border-border/50" : "bg-transparent",
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center gap-2 text-xl font-semibold text-foreground hover:text-primary transition-colors group"
        >
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
            <Terminal size={18} className="text-primary" />
          </div>
          <span className="font-mono">ROHIT GHANVAT</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-mono"
              >
                <span className="text-primary"></span> {item.name}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
          <li>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-mono border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all"
            >
              <Download size={16} />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-mono"
                >
                  <span className="text-primary">0{index + 1}.</span> {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download="Rohit_Ghanvat_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 text-sm font-mono border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all"
              >
                <Download size={16} />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
