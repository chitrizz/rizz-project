import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IdentityCard } from "../components/IdentityCard";
import { SkewButton } from "../components/SkewButton";
import { Magnetic } from "../components/MagneticButton";
import { Marquee } from "../components/Marquee";
import { RevealText, FadeUp } from "../components/RevealText";
import { SectionLabel } from "../components/SectionLabel";
import { ArrowUpRight, Flame } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HaveRizz — Do You Actually Have Rizz?" },
      { name: "description", content: "Biometric analysis of your social frequency. Get your official Rizz Identity Card, dominate the Arena, find your zodiac match." },
      { property: "og:title", content: "HaveRizz — Do You Actually Have Rizz?" },
      { property: "og:description", content: "The definitive charisma diagnostic for the digital age." },
    ],
  }),
  component: Home,
});

const FEATURES = [
  { to: "/quiz" as const,      num: "01", title: "The Quiz",     desc: "10 scenario questions. One Identity Card. Shareable in seconds.",      tag: "Flagship",     span: "md:col-span-2 md:row-span-2", big: true },
  { to: "/generator" as const, num: "02", title: "Generator",    desc: "15 categories. 300+ curated lines. From Corporate to Dark Humor.",     tag: "300+ lines",   span: "md:col-span-2", big: false },
  { to: "/astro" as const,     num: "03", title: "AstroRizz",    desc: "144 zodiac combos. Compatibility, opener, strategy, flags.",           tag: "Cosmic",       span: "", big: false },
  { to: "/horoscope" as const, num: "04", title: "Horoscope",    desc: "Daily charisma forecast. Score, lucky time, icebreaker.",              tag: "Daily",        span: "", big: false },
  { to: "/arena" as const,     num: "05", title: "Arena",        desc: "Post your best lines. Community fires or fizzes. Climb the ladder.",   tag: "Community",    span: "md:col-span-2", big: false },
  { to: "/rate" as const,      num: "06", title: "Rate My Rizz", desc: "Submit a line. The internet decides: Smooth, Mid, or Cringe.",         tag: "Brutal vote",  span: "md:col-span-2", big: false },
] as const;

const TOP_RIZZ = [
  { user: "CosmicRizzler", score: 98 },
  { user: "SmoothPotato", score: 94 },
  { user: "NeonMonk", score: 91 },
  { user: "VelvetWizard", score: 89 },
  { user: "QuietBandit", score: 87 },
  { user: "MidnightSage", score: 96 },
  { user: "FlirtyPenguin", score: 88 },
  { user: "FeralCharmer", score: 84 },
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="pb-32">
      {/* HERO */}
      <section ref={heroRef} className="relative px-6 pt-12 pb-32 min-h-[88vh]">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left */}
          <div className="lg:col-span-7 space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#0f0f10] border border-white/10 px-3 py-1.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] font-bold text-white/60">
                System Online · 12,847 cards minted today
              </span>
            </motion.div>

            <RevealText
              as="h1"
              className="font-display text-[clamp(60px,11vw,148px)] font-extrabold leading-[0.82] tracking-tighter uppercase text-white"
            >
              Have
            </RevealText>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="-mt-6 sm:-mt-10"
            >
              <span
                className="font-serif italic text-[#d4ff00] text-[clamp(72px,13vw,176px)] leading-[0.85] tracking-tight pr-4 inline-block"
                style={{ textShadow: "0 0 60px rgba(212,255,0,0.35)" }}
              >
                Rizz?
              </span>
            </motion.div>

            <FadeUp delay={0.2}>
              <p className="max-w-lg text-base sm:text-lg text-white/60 leading-relaxed">
                The definitive biometric analysis of your social frequency. Get your{" "}
                <span className="text-white font-medium">Rizz Identity Card</span>, find your zodiac match,
                and dominate the Arena.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-wrap gap-4 items-center">
                <Magnetic>
                  <Link to="/quiz"><SkewButton size="lg">Start The Quiz →</SkewButton></Link>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <Link to="/arena"><SkewButton size="lg" variant="outline">Enter Arena</SkewButton></Link>
                </Magnetic>
              </div>
            </FadeUp>

            <FadeUp delay={0.45}>
              <div className="pt-10 grid grid-cols-3 gap-8 border-t border-white/5 max-w-xl">
                {[
                  { v: "2.4M", l: "Cards minted" },
                  { v: "94%", l: "Share rate" },
                  { v: "15", l: "Categories" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tighter">{s.v}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right — Identity Card */}
          <motion.div
            style={{ y: cardY, scale: cardScale }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <IdentityCard
                cardNumber="RZ-00412"
                score={88}
                traits={["Eye Contact King", "Texting Wizard", "Smooth Operator"]}
                username="@subject_zero"
              />
              {/* Floating "Pulse" widget */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute -bottom-8 -right-4 w-36 glass-strong border border-white/15 rounded-md p-3 -rotate-6 animate-float shadow-2xl"
              >
                <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1.5">Pulse</p>
                <div className="flex gap-1 items-end h-10">
                  {[4, 8, 6, 10, 5, 9, 7].map((h, i) => (
                    <div key={i} className="w-1 bg-[#d4ff00]" style={{ height: `${h * 4}px`, boxShadow: "0 0 6px #d4ff00" }} />
                  ))}
                </div>
              </motion.div>
              {/* Floating "Tier" tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute -top-4 -left-4 transform -skew-x-12 bg-[#ff2e93] text-white px-3 py-1.5 border border-[#ff2e93]"
              >
                <span className="inline-block skew-x-12 font-mono text-[10px] font-bold uppercase tracking-widest">Epic Tier</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.4em] text-white/30 flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="h-8 w-px bg-white/20" />
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <section className="border-y border-white/10 py-5 bg-[#050505] relative z-10">
        <Marquee speed="normal">
          {Array.from({ length: 2 }).map((_, k) =>
            TOP_RIZZ.map((r, i) => (
              <div key={`${k}-${i}`} className="flex items-center gap-3 font-mono text-sm uppercase tracking-wider">
                <span className="text-white/30 font-bold">★</span>
                <span className="text-white/60">@{r.user}</span>
                <span className="text-[#d4ff00] font-bold">{r.score}</span>
              </div>
            ))
          )}
        </Marquee>
      </section>

      {/* HOW IT WORKS — pinned scrub */}
      <PinnedHowItWorks />

      {/* RECEIPTS */}
      <section className="px-6 py-32 relative">
        <div className="max-w-7xl mx-auto">
          <SectionLabel index="—" label="The Receipts" />
          <RevealText as="h2" className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter text-white leading-[0.95] max-w-4xl">
            Most people fumble. The data is brutal.
          </RevealText>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { v: "82%", l: "of first messages end in a permanent 'Seen.'" },
              { v: "67%", l: "freeze when texting their crush." },
              { v: "1/3", l: "still rely on arranged marriage — never learned to flirt." },
              { v: "12%", l: "actually know how to start a conversation." },
            ].map((s, i) => (
              <FadeUp key={i} delay={i * 0.08} className="bg-[#050505] p-8 sm:p-10">
                <p className="font-display text-5xl sm:text-6xl font-extrabold text-white tracking-tighter">{s.v}</p>
                <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-[28ch]">{s.l}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES — BROKEN GRID */}
      <section className="px-6 py-32 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <SectionLabel index="—" label="The Arsenal" />
              <RevealText as="h2" className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]">
                Six weapons. One mission.
              </RevealText>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">v.2.0.4</p>
          </div>

          <div className="grid md:grid-cols-4 auto-rows-[minmax(220px,auto)] grid-flow-row-dense gap-4">
            {FEATURES.map((f) => (
              <FadeUp key={f.to} className={`${f.span} min-w-0`}>
                <Link
                  to={f.to}
                  className="group relative flex flex-col justify-between h-full min-h-[220px] p-7 sm:p-8 border border-white/10 bg-[#0a0a0c] hover:border-[#d4ff00]/60 hover:bg-[#0f0f10] transition-all overflow-hidden rounded-md min-w-0"
                >
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#d4ff00]/0 group-hover:bg-[#d4ff00]/10 blur-3xl transition-all duration-700" />
                  <div className="relative flex justify-between items-start gap-3">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#d4ff00]">{f.num}</span>
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest text-right shrink-0">{f.tag}</span>
                  </div>
                  <div className="relative mt-8 min-w-0">
                    <h3
                      className={`font-display font-extrabold uppercase tracking-tighter text-white leading-[0.9] break-words ${
                        f.big
                          ? "text-[clamp(34px,5vw,68px)]"
                          : "text-[clamp(22px,2.6vw,38px)]"
                      }`}
                    >
                      {f.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/55 leading-relaxed max-w-sm">{f.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-white/60 group-hover:text-[#d4ff00] transition">
                      Open <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* IDENTITY CARD SHOWCASE — sticky */}
      <IdentityShowcase />

      {/* MARQUEE BIG TYPE */}
      <section className="py-12 border-y border-white/10 overflow-hidden">
        <Marquee speed="slow">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 font-display text-6xl sm:text-8xl font-extrabold uppercase tracking-tighter text-white/10 whitespace-nowrap">
              <span>Quiz</span>
              <span className="text-[#d4ff00]">★</span>
              <span>Generator</span>
              <span className="text-[#d4ff00]">★</span>
              <span>AstroRizz</span>
              <span className="text-[#d4ff00]">★</span>
              <span>Horoscope</span>
              <span className="text-[#d4ff00]">★</span>
              <span>Arena</span>
              <span className="text-[#d4ff00]">★</span>
              <span>Rate</span>
              <span className="text-[#d4ff00]">★</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* CTA */}
      <section className="px-6 pt-32">
        <div className="max-w-7xl mx-auto relative overflow-hidden border border-white/10 p-10 sm:p-20 text-center">
          <div className="absolute -inset-32 bg-gradient-to-tr from-[#d4ff00]/15 via-transparent to-[#ff2e93]/15 blur-3xl" />
          <div className="relative">
            <SectionLabel index="—" label="Final Frontier" />
            <RevealText as="h2" className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white leading-[0.9]">
              Your Rizz score
            </RevealText>
            <p className="mt-2 font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]" style={{ textShadow: "0 0 40px rgba(212,255,0,0.4)" }}>
              is one click away.
            </p>
            <p className="text-white/60 mt-6 max-w-md mx-auto leading-relaxed">
              No sign-up. Anonymous. Free. 10 questions, one card, infinite bragging rights.
            </p>
            <FadeUp delay={0.2} className="mt-10 inline-block">
              <Magnetic>
                <Link to="/quiz"><SkewButton size="lg"><Flame className="size-4" /> Start the quiz</SkewButton></Link>
              </Magnetic>
            </FadeUp>
          </div>
        </div>
      </section>

      <footer className="px-6 mt-20">
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-white/30">
          <p>© 2026 HaveRizz — Built for the bold.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#d4ff00] transition">Twitter</a>
            <a href="#" className="hover:text-[#d4ff00] transition">Instagram</a>
            <a href="#" className="hover:text-[#d4ff00] transition">TikTok</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PinnedHowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    function measure() {
      const t = trackRef.current;
      if (!t) return;
      setMaxScroll(Math.max(0, t.scrollWidth - window.innerWidth + 48));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const x = useTransform(scrollYProgress, [0, 0.05, 0.92, 1], [0, 0, -maxScroll, -maxScroll]);

  const steps = [
    { n: "01", t: "Take the Quiz", d: "10 scenario questions. Pick A/B/C/D. No registration. No data collection. ~3 minutes." },
    { n: "02", t: "Mint your Card", d: "Algorithm crunches your answers. You get a holographic Rizz Identity Card with score, rank & traits." },
    { n: "03", t: "Dominate the Arena", d: "Post lines. Vote on others. Climb the leaderboard. Share your card everywhere." },
  ];
  return (
    <section ref={ref} className="relative h-[340vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full mb-12">
          <SectionLabel index="—" label="How It Works" />
          <h2 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter text-white leading-[0.95] max-w-3xl">
            Three steps. <span className="text-[#d4ff00]">Zero</span> fumble.
          </h2>
        </div>
        <motion.div ref={trackRef} style={{ x }} className="flex gap-6 px-6 will-change-transform w-max">
          {steps.map((s) => (
            <div key={s.n} className="w-[88vw] md:w-[60vw] lg:w-[55vw] shrink-0 border border-white/10 bg-[#0a0a0c] p-10 sm:p-16 min-h-[55vh] flex flex-col justify-between rounded-md">
              <span className="font-mono text-sm font-bold tracking-[0.4em] text-[#d4ff00]">{s.n}</span>
              <div>
                <h3 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]">{s.t}</h3>
                <p className="mt-6 max-w-md text-white/60 leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function IdentityShowcase() {
  return (
    <section className="px-6 py-32 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-32 self-start">
          <IdentityCard
            cardNumber="RZ-00088"
            score={94}
            traits={["Certified Charmer", "Mystery Magnet", "Heart Collector"]}
            username="@you_next"
          />
        </div>
        <div className="space-y-12">
          <div>
            <SectionLabel index="—" label="The Card" />
            <RevealText as="h2" className="mt-6 font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]">
              Holographic. Numbered. Permanent.
            </RevealText>
          </div>
          {[
            { t: "Biometric scoring", d: "Every answer maps to a charisma vector. The algorithm doesn't grade on a curve — it tells you the truth." },
            { t: "Five rarity tiers", d: "From Common to Mythic. Less than 3% of cards reach Legendary. Less than 0.1% reach Mythic." },
            { t: "Built to share", d: "Export as PNG. Drop in your story. Send to the group chat. The card travels with you." },
            { t: "Yours forever", d: "Saved locally to your device. Re-take whenever your aura shifts." },
          ].map((b, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <div className="border-t border-white/10 pt-6 flex gap-6">
                <span className="font-mono text-xs font-bold text-[#d4ff00] tracking-widest pt-1">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">{b.t}</h3>
                  <p className="mt-2 text-white/60 leading-relaxed">{b.d}</p>
                </div>
              </div>
            </FadeUp>
          ))}
          <Magnetic>
            <Link to="/quiz"><SkewButton size="lg">Mint Yours →</SkewButton></Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
