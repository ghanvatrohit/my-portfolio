import Link from "next/link"
import { Heart, Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-card/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <Terminal size={16} className="text-primary" />
            </div>
            <span className="font-mono font-semibold">Rohit Ghanvat</span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            {["About", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Rohit Ghanvat</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Built with <Heart size={14} className="text-primary" /> using Next.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
