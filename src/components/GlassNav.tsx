import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, User, LogOut, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SkewButton } from "./SkewButton";
import { ShineBorder } from "./ui/shine-border";
import { useAuth } from "../stores/auth";

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
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { user, profile, initialize, initialized, signOut } = useAuth();

  useEffect(() => {
    initialize();
  }, [initialize]);

  const handleSignOut = async () => {
    await signOut();
    setUserMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto relative">
        <ShineBorder
          borderRadius={9999}
          borderWidth={1}
          duration={10}
          color={["#d4ff00", "#22d3ee", "#ff2e93"]}
          className="rounded-full"
        >
          <div
            className="relative rounded-full pl-5 pr-2 py-2 flex items-center justify-between overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(20,20,22,0.7) 0%, rgba(10,10,12,0.55) 100%)",
              backdropFilter: "blur(22px) saturate(180%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.4), 0 12px 40px -12px rgba(0,0,0,0.6)",
            }}
          >
            {/* liquid sweep */}
            <span
              aria-hidden
              className="pointer-events-none absolute top-0 left-0 h-full w-1/3 animate-liquid-sweep"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
              }}
            />
            <div className="relative flex items-center gap-6 min-w-0">
              <Link to="/" className="flex items-center gap-2 shrink-0 group">
                <span className="size-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
                <span className="font-display font-bold text-white tracking-tighter text-lg uppercase">
                  HAVE<span className="text-[#d4ff00]">/</span>RIZZ
                </span>
              </Link>
              <div className="hidden lg:flex items-center gap-0.5">
                {links.map((l) => {
                  const active = pathname === l.to || pathname.startsWith(l.to + "/");
                  return (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="relative group px-3 py-1.5 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 rounded-full transition-colors"
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(212,255,0,0.18), rgba(34,211,238,0.12))",
                            boxShadow:
                              "inset 0 0 0 1px rgba(212,255,0,0.4), 0 0 18px -2px rgba(212,255,0,0.4)",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span
                        className={`relative font-mono text-[9px] transition ${active ? "text-[#d4ff00]" : "text-[#d4ff00]/50 group-hover:text-[#d4ff00]"}`}
                      >
                        {l.num}
                      </span>
                      <span className={`relative transition ${active ? "text-white" : "text-white/55 group-hover:text-white"}`}>
                        {l.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="relative flex items-center gap-2">
              <span className="hidden md:inline font-mono text-[9px] uppercase tracking-widest text-white/30 px-2">v2.0.4</span>

              {/* Auth section */}
              {initialized && user && profile ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                  >
                    {profile.avatar_url ? (
                      <img
                        src={profile.avatar_url}
                        alt={profile.username}
                        className="size-6 rounded-full object-cover"
                      />
                    ) : (
                      <div className="size-6 rounded-full bg-[#d4ff00]/20 grid place-items-center">
                        <User className="size-3 text-[#d4ff00]" />
                      </div>
                    )}
                    <span className="hidden sm:block text-xs font-bold text-white/80">
                      @{profile.username}
                    </span>
                    <ChevronDown className="size-3 text-white/50" />
                  </button>

                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full mt-2 w-48 rounded-md border border-white/10 bg-[#0a0a0c] backdrop-blur-xl overflow-hidden"
                        style={{
                          boxShadow: "0 20px 40px -12px rgba(0,0,0,0.5)",
                        }}
                      >
                        <Link
                          to="/profile"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center gap-2 px-4 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-white transition"
                        >
                          <User className="size-4" />
                          <span>My Profile</span>
                        </Link>
                        <button
                          onClick={handleSignOut}
                          className="w-full flex items-center gap-2 px-4 py-3 text-sm text-[#ff2e93] hover:bg-[#ff2e93]/10 transition border-t border-white/5"
                        >
                          <LogOut className="size-4" />
                          <span>Sign Out</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : initialized ? (
                <Link to="/login" className="hidden sm:block">
                  <SkewButton size="sm" variant="outline">Sign In</SkewButton>
                </Link>
              ) : null}

              {/* Always show Start Quiz if no auth */}
              {(!initialized || !user || !profile) && (
                <Link to="/quiz" className="hidden sm:block">
                  <SkewButton size="sm">Start Quiz</SkewButton>
                </Link>
              )}

              <button
                onClick={() => setOpen((o) => !o)}
                className="lg:hidden h-9 w-9 grid place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-xl"
                aria-label="Toggle nav"
              >
                {open ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>
          </div>
        </ShineBorder>

        {open && (
          <div
            className="lg:hidden mt-2 rounded-3xl p-4 grid gap-1 border border-white/10"
            style={{
              background:
                "linear-gradient(135deg, rgba(20,20,22,0.85) 0%, rgba(10,10,12,0.7) 100%)",
              backdropFilter: "blur(22px) saturate(180%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
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

            {/* Mobile auth section */}
            <div className="border-t border-white/10 mt-2 pt-2">
              {initialized && user && profile ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white hover:bg-white/5 flex items-center gap-3"
                  >
                    {profile.avatar_url ? (
                      <img
                        src={profile.avatar_url}
                        alt={profile.username}
                        className="size-6 rounded-full object-cover"
                      />
                    ) : (
                      <div className="size-6 rounded-full bg-[#d4ff00]/20 grid place-items-center">
                        <User className="size-3 text-[#d4ff00]" />
                      </div>
                    )}
                    @{profile.username}
                  </Link>
                  <button
                    onClick={() => {
                      setOpen(false);
                      handleSignOut();
                    }}
                    className="w-full px-3 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-[#ff2e93] hover:bg-[#ff2e93]/10 flex items-center gap-3"
                  >
                    <LogOut className="size-4" />
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-[#d4ff00] hover:bg-[#d4ff00]/10 flex items-center gap-3"
                >
                  <User className="size-4" />
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
