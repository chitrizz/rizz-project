import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/quiz", label: "The Quiz" },
  { to: "/generator", label: "Generator" },
  { to: "/astro", label: "AstroRizz" },
  { to: "/horoscope", label: "Horoscope" },
  { to: "/arena", label: "Arena" },
  { to: "/rate", label: "Rate" },
] as const;

export function GlassNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto glass ring-1 ring-white/8 rounded-full pl-5 pr-2 py-2 flex items-center justify-between">
        <div className="flex items-center gap-8 min-w-0">
          <Link to="/" className="font-display font-semibold text-zinc-50 tracking-tight text-xl shrink-0">
            RIZZ<span className="text-brand-purple">.</span>
          </Link>
          <div className="hidden lg:flex items-center gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors"
                activeProps={{ className: "text-sm font-medium text-zinc-50" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/quiz"
            className="hidden sm:inline-flex h-9 items-center bg-zinc-50 text-zinc-950 px-4 rounded-full text-sm font-medium hover:bg-white transition"
          >
            Test My Rizz
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden h-9 w-9 grid place-items-center rounded-full glass ring-1 ring-white/10"
            aria-label="Toggle nav"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 glass ring-1 ring-white/8 rounded-3xl p-4 grid gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
