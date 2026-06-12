import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { IdentityCard } from "../components/IdentityCard";
import { ArrowRight, Sparkles, Flame, Snowflake, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HaveRizz — Do You Actually Have Rizz?" },
      { name: "description", content: "Test your charisma, get your official Rizz Identity Card, find your zodiac match, and dominate the Arena." },
      { property: "og:title", content: "HaveRizz — Do You Actually Have Rizz?" },
      { property: "og:description", content: "The first scientifically accurate charisma diagnostic for the digital age." },
    ],
  }),
  component: Home,
});

const FEATURES = [
  { to: "/quiz" as const, accent: "purple", title: "Do I Have Rizz?", desc: "10 scenario questions, one Identity Card. Shareable in seconds.", tag: "Flagship" },
  { to: "/generator" as const, accent: "cyan", title: "Best Rizz Generator", desc: "15 categories of curated lines — Corporate, Desi, Anime, Dark Humor, more.", tag: "300+ lines" },
  { to: "/astro" as const, accent: "magenta", title: "AstroRizz", desc: "144 zodiac combos. Compatibility, opener, strategy, flags, best time to text.", tag: "Compatibility" },
  { to: "/horoscope" as const, accent: "gold", title: "Daily Rizz Horoscope", desc: "Your charisma forecast for the next 24 hours. New every single day.", tag: "Daily" },
  { to: "/arena" as const, accent: "pink", title: "Rizz Battle Arena", desc: "Post your best lines. Community fires or fizzes. Climb the leaderboard.", tag: "Community" },
  { to: "/rate" as const, accent: "cyan", title: "Rate My Rizz", desc: "Submit a line or text. Smooth, Mid, or Cringe — the people decide.", tag: "Vote" },
] as const;

const ACCENT_RING: Record<string, string> = {
  purple: "hover:ring-brand-purple/30",
  cyan: "hover:ring-brand-cyan/30",
  magenta: "hover:ring-brand-magenta/30",
  gold: "hover:ring-brand-gold/30",
  pink: "hover:ring-brand-pink/30",
};
const ACCENT_DOT: Record<string, string> = {
  purple: "bg-brand-purple",
  cyan: "bg-brand-cyan",
  magenta: "bg-brand-magenta",
  gold: "bg-brand-gold",
  pink: "bg-brand-pink",
};

const TOP_RIZZ = [
  { user: "CosmicRizzler", cat: "Corporate", score: 98, votes: "1.2k", accent: "purple" },
  { user: "SmoothPotato", cat: "Bollywood", score: 94, votes: "982", accent: "magenta" },
  { user: "NeonMonk", cat: "Cute", score: 91, votes: "2.1k", accent: "pink" },
  { user: "VelvetWizard", cat: "Anime", score: 89, votes: "1.3k", accent: "purple" },
  { user: "QuietBandit", cat: "Tech", score: 87, votes: "1.7k", accent: "cyan" },
  { user: "MidnightSage", cat: "Romantic", score: 96, votes: "2.4k", accent: "magenta" },
  { user: "FlirtyPenguin", cat: "Desi", score: 88, votes: "1.9k", accent: "gold" },
  { user: "FeralCharmer", cat: "Gym", score: 84, votes: "808", accent: "cyan" },
] as const;

function Home() {
  return (
    <div className="pb-32">
      {/* HERO */}
      <section className="relative px-6 pt-16 pb-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 glass ring-1 ring-white/10 rounded-full pl-2 pr-3 py-1">
              <span className="size-1.5 rounded-full bg-success animate-pulse" />
              <span className="text-[11px] font-medium text-zinc-300 tracking-wide">Live · 12,847 cards generated today</span>
            </div>
            <h1 className="font-display text-[clamp(48px,9vw,108px)] font-semibold leading-[0.92] text-zinc-50 tracking-tighter text-balance">
              Do You <span className="italic text-gradient">Actually</span> Have Rizz?
            </h1>
            <p className="text-base sm:text-lg max-w-[52ch] text-zinc-400 leading-relaxed text-pretty">
              The first scientifically accurate charisma diagnostic for the digital age. Take the quiz, get your official Identity Card, discover your rarity tier — and stop fumbling the group chat.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/quiz"
                className="group h-12 bg-brand-purple text-white text-sm font-medium pl-3 pr-5 flex items-center gap-3 rounded-full ring-1 ring-brand-purple/50 hover:brightness-110 active:scale-[0.98] transition shadow-[0_0_40px_-10px_#a855f7]"
              >
                <span className="size-7 rounded-full bg-white/15 grid place-items-center">
                  <Sparkles className="size-3.5" />
                </span>
                Test My Rizz
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/arena"
                className="h-12 glass ring-1 ring-white/10 text-zinc-50 text-sm font-medium px-5 flex items-center gap-2 rounded-full hover:bg-white/10 transition"
              >
                View Top Rizz
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 max-w-xl">
              {[
                { v: "2.4M", l: "Quizzes Taken" },
                { v: "94%", l: "Share Their Card" },
                { v: "15", l: "Rizz Categories" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-2xl sm:text-3xl text-zinc-50 font-semibold tracking-tight">{s.v}</p>
                  <p className="text-[11px] uppercase tracking-widest text-zinc-500 mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative animate-float"
          >
            <IdentityCard
              cardNumber="RZ-00412"
              score={94}
              traits={["Smooth Operator", "Eye Contact King", "Texting Wizard"]}
              username="@you_could_be_here"
            />
            <div className="absolute -top-4 -right-4 size-12 glass-strong rounded-full ring-1 ring-white/20 grid place-items-center text-xl">✨</div>
            <div className="absolute -bottom-2 -left-2 size-10 glass-strong rounded-full ring-1 ring-white/20 grid place-items-center text-lg">🔥</div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-20 border-y border-white/5 bg-zinc-950/40 relative z-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-10">The Receipts</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { v: "82%", l: "of first messages on dating apps end in a permanent 'Seen.'" },
              { v: "67%", l: "admit they freeze when texting their crush." },
              { v: "1 in 3", l: "Indians are still relying on arranged marriage — never learned to flirt." },
              { v: "12%", l: "of people actually know how to start a conversation." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="space-y-2"
              >
                <p className="font-display text-4xl sm:text-5xl text-zinc-50 font-semibold tracking-tight">{s.v}</p>
                <p className="text-sm text-zinc-500 max-w-[28ch] leading-relaxed">{s.l}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-14 flex items-center justify-between flex-wrap gap-4">
            <p className="font-display text-2xl text-zinc-50 italic">Enough statistics. Time to test YOUR rizz.</p>
            <Link to="/quiz" className="h-10 bg-brand-purple text-white text-sm font-medium px-5 flex items-center gap-2 rounded-full hover:brightness-110 transition">
              Take the quiz <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LIVE CAROUSEL */}
      <section className="py-24 overflow-hidden">
        <div className="px-6 mb-10 max-w-7xl mx-auto flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2">Live Leaderboard</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-zinc-50 tracking-tight">Top Ranked Rizzlers</h2>
          </div>
          <Link to="/arena" className="text-sm text-zinc-400 hover:text-zinc-50 flex items-center gap-1">
            View Arena <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="relative">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...TOP_RIZZ, ...TOP_RIZZ].map((p, i) => (
              <div key={i} className="inline-flex items-center gap-4 glass ring-1 ring-white/5 p-4 rounded-2xl min-w-[320px]">
                <div className={`size-11 rounded-full grid place-items-center font-bold text-sm ${
                  p.accent === "purple" ? "bg-brand-purple/20 text-brand-purple" :
                  p.accent === "cyan" ? "bg-brand-cyan/20 text-brand-cyan" :
                  p.accent === "magenta" ? "bg-brand-magenta/20 text-brand-magenta" :
                  p.accent === "pink" ? "bg-brand-pink/20 text-brand-pink" :
                  "bg-brand-gold/20 text-brand-gold"
                }`}>
                  {p.user[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-zinc-50 truncate">@{p.user}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                      p.accent === "purple" ? "bg-brand-purple/10 text-brand-purple" :
                      p.accent === "cyan" ? "bg-brand-cyan/10 text-brand-cyan" :
                      p.accent === "magenta" ? "bg-brand-magenta/10 text-brand-magenta" :
                      p.accent === "pink" ? "bg-brand-pink/10 text-brand-pink" :
                      "bg-brand-gold/10 text-brand-gold"
                    }`}>{p.cat}</span>
                    <span className="text-xs text-zinc-500">{p.score} score</span>
                  </div>
                </div>
                <div className="text-xs font-medium text-zinc-300 flex items-center gap-1.5 shrink-0">
                  <Flame className="size-3.5 text-brand-gold" /> {p.votes}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2">Every Tool You Need</p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-zinc-50 tracking-tight max-w-2xl">
            Built for the chronically online. <span className="text-zinc-500">Engineered for results.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <Link
              key={f.to}
              to={f.to}
              className={`group p-7 rounded-3xl glass ring-1 ring-white/5 transition-all hover:bg-white/[0.04] ${ACCENT_RING[f.accent]}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`size-10 rounded-xl bg-white/5 grid place-items-center`}>
                  <div className={`size-3 rounded-sm ${ACCENT_DOT[f.accent]}`} />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">{f.tag}</span>
              </div>
              <h3 className="font-display text-xl text-zinc-50 font-semibold mb-2 tracking-tight">{f.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{f.desc}</p>
              <div className="mt-6 text-xs font-medium text-zinc-400 group-hover:text-zinc-50 flex items-center gap-1 transition-colors">
                Open <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA FOOTER BAND */}
      <section className="px-6 pt-12">
        <div className="max-w-7xl mx-auto rounded-[40px] glass ring-1 ring-white/8 p-10 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute -inset-20 bg-gradient-to-tr from-brand-purple/20 via-transparent to-brand-magenta/20 blur-3xl" />
          <div className="relative">
            <Snowflake className="size-6 text-brand-cyan mx-auto mb-4 opacity-60" />
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-zinc-50 tracking-tight">
              Your Rizz score is one click away.
            </h2>
            <p className="text-zinc-400 mt-4 max-w-md mx-auto">
              No sign-up. Anonymous. Free. 10 questions, one card, infinite bragging rights.
            </p>
            <Link
              to="/quiz"
              className="mt-8 inline-flex h-12 bg-brand-purple text-white text-sm font-medium px-6 items-center gap-2 rounded-full hover:brightness-110 transition"
            >
              <Sparkles className="size-4" /> Start the quiz
            </Link>
          </div>
        </div>
      </section>

      <footer className="px-6 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-zinc-600">
          <p>© 2026 HaveRizz — Built for the bold.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition">Twitter</a>
            <a href="#" className="hover:text-zinc-300 transition">Instagram</a>
            <a href="#" className="hover:text-zinc-300 transition">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
