import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SkewButton } from "./SkewButton";

const links = [
  { to: "/quiz", label: "Quiz", num: "01" },
  { to: "/generator", label: "Generator", num: "02" },
  { to: "/astro", label: "AstroRizz", num: "03" },
  { to: "/horoscope", label: "Horoscope", num: "04" },
  { to: "/arena", label: "Arena", num: "05" },
  { to: "/rate", label: "Rate", num: "06" },
] as const;

export function GlassNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto glass border border-white/10 rounded-full pl-5 pr-2 py-2 flex items-center justify-between">
        <div className="flex items-center gap-8 min-w-0">
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <span className="size-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
            <span className="font-display font-bold text-white tracking-tighter text-lg uppercase">
              HAVE<span className="text-[#d4ff00]">/</span>RIZZ
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white/50 hover:text-white transition-colors flex items-center gap-1.5"
                activeProps={{ className: "px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5" }}
              >
                <span className="font-mono text-[9px] text-[#d4ff00]/60 group-hover:text-[#d4ff00] transition">{l.num}</span>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden md:inline font-mono text-[9px] uppercase tracking-widest text-white/30 px-2">v2.0.4</span>
          <Link to="/quiz" className="hidden sm:block">
            <SkewButton size="sm">Start Quiz</SkewButton>
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden h-9 w-9 grid place-items-center rounded-full glass border border-white/10"
            aria-label="Toggle nav"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 glass border border-white/10 rounded-3xl p-4 grid gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white hover:bg-white/5 flex items-center gap-3"
            >
              <span className="font-mono text-[10px] text-[#d4ff00]">{l.num}</span>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
