import { createFileRoute, Link } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { IdentityCard } from "../components/IdentityCard";
import { SkewButton } from "../components/SkewButton";
import { Magnetic } from "../components/MagneticButton";
import { Marquee } from "../components/Marquee";
import { RevealText, FadeUp } from "../components/RevealText";
import { SectionLabel } from "../components/SectionLabel";
import { ArrowUpRight, Flame } from "lucide-react";

const CARD_ROTATION_SECONDS = 4.5;
const CARD_ROTATION_MS = CARD_ROTATION_SECONDS * 1000;

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "HaveRizz — Do You Actually Have Rizz?" },
      {
        name: "description",
        content:
          "Biometric analysis of your social frequency. Get your official Rizz Identity Card, dominate the Arena, find your zodiac match.",
      },
      { property: "og:title", content: "HaveRizz — Do You Actually Have Rizz?" },
      {
        property: "og:description",
        content: "The definitive charisma diagnostic for the digital age.",
      },
    ],
  }),
  component: Home,
} as Parameters<typeof createFileRoute<"/", "", "/", string, any>>[0]));

const FEATURES = [
  {
    to: "/quiz" as const,
    num: "01",
    title: "The Quiz",
    desc: "10 scenario questions. One Identity Card. Shareable in seconds.",
    tag: "Flagship",
    metric: "10Q",
    accent: "#d4ff00",
    span: "md:col-span-2 md:row-span-2",
    big: true,
  },
  {
    to: "/generator" as const,
    num: "02",
    title: "Generator",
    desc: "15 categories. 300+ curated lines. From Corporate to Dark Humor.",
    tag: "300+ lines",
    metric: "300+",
    accent: "#22d3ee",
    span: "md:col-span-2",
    big: false,
  },
  {
    to: "/astro" as const,
    num: "03",
    title: "AstroRizz",
    desc: "144 zodiac combos. Compatibility, opener, strategy, flags.",
    tag: "Cosmic",
    metric: "144",
    accent: "#ff2e93",
    span: "",
    big: false,
  },
  {
    to: "/horoscope" as const,
    num: "04",
    title: "Horoscope",
    desc: "Daily charisma forecast. Score, lucky time, icebreaker.",
    tag: "Daily",
    metric: "24H",
    accent: "#ffd400",
    span: "",
    big: false,
  },
  {
    to: "/arena" as const,
    num: "05",
    title: "Arena",
    desc: "Post your best lines. Community fires or fizzes. Climb the ladder.",
    tag: "Community",
    metric: "LIVE",
    accent: "#a78bfa",
    span: "md:col-span-2",
    big: false,
  },
  {
    to: "/rate" as const,
    num: "06",
    title: "Rate My Rizz",
    desc: "Submit a line. The internet decides: Smooth, Mid, or Cringe.",
    tag: "Brutal vote",
    metric: "3X",
    accent: "#fb7185",
    span: "md:col-span-2",
    big: false,
  },
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

const CARD_VARIANTS = [
  {
    rarity: "Common",
    cardNumber: "RZ-00108",
    score: 38,
    username: "@fresh_signal",
    traits: ["Warm Opener", "Soft Launch", "Potential"],
    accent: "#cbd5e1",
  },
  {
    rarity: "Rare",
    cardNumber: "RZ-02177",
    score: 64,
    username: "@blue_check_bae",
    traits: ["DM Pilot", "Calm Pressure", "Fast Reply"],
    accent: "#38bdf8",
  },
  {
    rarity: "Epic",
    cardNumber: "RZ-06429",
    score: 79,
    username: "@velvet_vector",
    traits: ["Timing Demon", "Velvet Reply", "Plot Twist"],
    accent: "#c084fc",
  },
  {
    rarity: "Legendary",
    cardNumber: "RZ-08888",
    score: 91,
    username: "@subject_zero",
    traits: ["Eye Contact King", "Texting Wizard", "Smooth Operator"],
    accent: "#ffd400",
  },
  {
    rarity: "Mythic",
    cardNumber: "RZ-09999",
    score: 99,
    username: "@final_boss",
    traits: ["Aura Architect", "Room Magnet", "Zero Fumble"],
    accent: "#ec4899",
  },
] as const;

/* ─── Scroll Progress Bar ────────────────────────────────────────────── */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 280, damping: 28 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left pointer-events-none"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #d4ff00 0%, #22d3ee 40%, #ff2e93 70%, #ffd400 100%)",
      }}
    />
  );
}

/* ─── Home Page ──────────────────────────────────────────────────────── */
function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const selectedCard = CARD_VARIANTS[activeCard];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveCard((current) => (current + 1) % CARD_VARIANTS.length);
    }, CARD_ROTATION_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <ScrollProgressBar />
      <div className="pb-32">
        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative px-6 pt-12 pb-32 min-h-[88vh]">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          >
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
                  <span className="text-white font-medium">Rizz Identity Card</span>, find your
                  zodiac match, and dominate the Arena.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="flex flex-wrap gap-4 items-center">
                  <Magnetic>
                    <Link to="/quiz">
                      <SkewButton size="lg">Start The Quiz →</SkewButton>
                    </Link>
                  </Magnetic>
                  <Magnetic strength={0.25}>
                    <Link to="/arena">
                      <SkewButton size="lg" variant="outline">
                        Enter Arena
                      </SkewButton>
                    </Link>
                  </Magnetic>
                </div>
              </FadeUp>

              <FadeUp delay={0.45}>
                <div className="pt-10 grid grid-cols-3 gap-8 border-t border-white/5 max-w-xl">
                  {[
                    { v: "2.4M", l: "Cards minted" },
                    { v: "94%", l: "Share rate" },
                    { v: "15", l: "Categories" },
                  ].map((s, i) => (
                    <motion.div
                      key={s.l}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.55 + i * 0.1 }}
                    >
                      <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tighter">
                        {s.v}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mt-1">
                        {s.l}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right — Identity Card */}
            <motion.div
              style={{ y: cardY, scale: cardScale, rotateZ: cardRotate }}
              className="lg:col-span-5 relative"
            >
              <HeroSignalRig activeIndex={activeCard} />
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 6 }}
                animate={{ opacity: 1, y: 0, rotate: 3 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCard.cardNumber}
                    initial={{ opacity: 0, y: 34, rotateY: -24, filter: "blur(18px)" }}
                    animate={{ opacity: 1, y: 0, rotateY: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -28, rotateY: 22, filter: "blur(16px)" }}
                    transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <IdentityCard
                      cardNumber={selectedCard.cardNumber}
                      score={selectedCard.score}
                      traits={[...selectedCard.traits]}
                      username={selectedCard.username}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="mt-7 grid grid-cols-5 gap-2">
                  {CARD_VARIANTS.map((card, i) => (
                    <button
                      key={card.cardNumber}
                      type="button"
                      onClick={() => setActiveCard(i)}
                      className="group relative h-1.5 overflow-hidden rounded-full bg-white/10"
                      aria-label={`Show ${card.rarity} card`}
                    >
                      <motion.span
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{ backgroundColor: card.accent }}
                        initial={false}
                        animate={{ width: i === activeCard ? "100%" : "22%", opacity: i === activeCard ? 1 : 0.38 }}
                        transition={{ duration: i === activeCard ? CARD_ROTATION_SECONDS : 0.25, ease: "linear" }}
                      />
                    </button>
                  ))}
                </div>

                {/* Floating Pulse widget */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="absolute -bottom-8 -right-4 w-36 glass-strong border border-white/15 rounded-md p-3 -rotate-6 animate-float shadow-2xl"
                >
                  <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest mb-1.5">
                    Pulse
                  </p>
                  <div className="flex gap-1 items-end h-10">
                    {[4, 8, 6, 10, 5, 9, 7].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-[#d4ff00]"
                        animate={{ height: [`${h * 3}px`, `${h * 4.5}px`, `${h * 3}px`] }}
                        transition={{ duration: 1.4, delay: i * 0.08, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                          backgroundColor: selectedCard.accent,
                          boxShadow: `0 0 6px ${selectedCard.accent}`,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
                {/* Floating Tier tag */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="absolute -top-4 -left-4 transform -skew-x-12 text-black px-3 py-1.5 border shadow-[0_0_15px_rgba(253,224,71,0.4)]"
                  style={{
                    backgroundColor: selectedCard.accent,
                    borderColor: selectedCard.accent,
                    boxShadow: `0 0 20px ${selectedCard.accent}66`,
                  }}
                >
                  <span className="inline-block skew-x-12 font-mono text-[10px] font-bold uppercase tracking-widest">
                    {selectedCard.rarity} Tier
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.4em] text-white/30 flex flex-col items-center gap-2">
            <span>Scroll</span>
            <span className="h-8 w-px bg-white/20" style={{ animation: "scroll-hint 2s ease-in-out infinite" }} />
          </div>
        </section>

        {/* ── MARQUEE TICKER ─────────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8 }}
          className="border-y border-white/10 py-5 bg-[#050505] relative z-10"
        >
          <Marquee speed="normal">
            {Array.from({ length: 2 }).map((_, k) =>
              TOP_RIZZ.map((r, i) => (
                <div
                  key={`${k}-${i}`}
                  className="flex items-center gap-3 font-mono text-sm uppercase tracking-wider"
                >
                  <span className="text-white/30 font-bold">★</span>
                  <span className="text-white/60">@{r.user}</span>
                  <span className="text-[#d4ff00] font-bold">{r.score}</span>
                </div>
              ))
            )}
          </Marquee>
        </motion.section>

        {/* ── HOW IT WORKS ───────────────────────────────────────────────── */}
        <HowItWorksSection />

        {/* ── 3D PRODUCT ENGINE ──────────────────────────────────────────── */}
        <SignalEngineSection />

        {/* ── RECEIPTS ───────────────────────────────────────────────────── */}
        <ReceiptsSection />

        {/* ── FEATURES — BROKEN GRID ─────────────────────────────────────── */}
        <ArsenalSection />

        {/* ── IDENTITY CARD SHOWCASE — sticky ────────────────────────────── */}
        <IdentityShowcase />

        {/* ── MARQUEE BIG TYPE ───────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="py-12 border-y border-white/10 overflow-hidden"
        >
          <Marquee speed="slow">
            {Array.from({ length: 2 }).map((_, k) => (
              <div
                key={k}
                className="flex items-center gap-12 font-display text-6xl sm:text-8xl font-extrabold uppercase tracking-tighter text-white/10 whitespace-nowrap"
              >
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
        </motion.section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="px-6 pt-32">
          <div className="max-w-7xl mx-auto relative overflow-hidden border border-white/10 p-10 sm:p-20 text-center">
            <div className="absolute -inset-32 bg-gradient-to-tr from-[#d4ff00]/15 via-transparent to-[#ff2e93]/15 blur-3xl" />
            <div className="relative">
              <FadeUp>
                <SectionLabel index="—" label="Final Frontier" />
              </FadeUp>
              <RevealText
                as="h2"
                className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white leading-[0.9]"
              >
                Your Rizz score
              </RevealText>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-2 font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]"
                style={{ textShadow: "0 0 40px rgba(212,255,0,0.4)" }}
              >
                is one click away.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-white/60 mt-6 max-w-md mx-auto leading-relaxed"
              >
                No sign-up. Anonymous. Free. 10 questions, one card, infinite bragging rights.
              </motion.p>
              <FadeUp delay={0.2} className="mt-10 inline-block">
                <Magnetic>
                  <Link to="/quiz">
                    <SkewButton size="lg">
                      <Flame className="size-4" /> Start the quiz
                    </SkewButton>
                  </Link>
                </Magnetic>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────────────────────────────────── */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="px-6 mt-20"
        >
          <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-white/30">
            <p>© 2026 HaveRizz — Built for the bold.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#d4ff00] transition">
                Twitter
              </a>
              <a href="#" className="hover:text-[#d4ff00] transition">
                Instagram
              </a>
              <a href="#" className="hover:text-[#d4ff00] transition">
                TikTok
              </a>
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  );
}

function ReceiptsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const washY = useTransform(scrollYProgress, [0, 1], [90, -90]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [28, -32]);

  const receipts = [
    {
      v: "82%",
      l: "first messages disappear into Seen.",
      sub: "Opening friction",
      accent: "#d4ff00",
      span: "lg:col-span-5",
    },
    {
      v: "67%",
      l: "freeze before sending the second text.",
      sub: "Follow-up drop",
      accent: "#22d3ee",
      span: "lg:col-span-3",
    },
    {
      v: "1/3",
      l: "still treat flirting like a group project.",
      sub: "Confidence gap",
      accent: "#ff2e93",
      span: "lg:col-span-4",
    },
    {
      v: "12%",
      l: "can start a conversation without sounding rehearsed.",
      sub: "Natural signal",
      accent: "#ffd400",
      span: "lg:col-span-12",
    },
  ] as const;

  return (
    <section ref={ref} className="receipts-section relative overflow-hidden px-6 py-32 lg:py-40">
      <motion.div aria-hidden className="receipts-wash" style={{ y: washY }} />
      <div className="max-w-7xl mx-auto relative">
        <motion.div style={{ y: headlineY }}>
          <FadeUp>
            <SectionLabel index="—" label="The Receipts" />
          </FadeUp>
          <div className="mt-6 grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <RevealText
                as="h2"
                className="font-display text-4xl sm:text-6xl lg:text-8xl font-extrabold uppercase tracking-normal text-white leading-[0.92] max-w-5xl"
              >
                The data has receipts.
              </RevealText>
            </div>
            <FadeUp delay={0.18} className="lg:col-span-4">
              <p className="text-white/55 leading-relaxed">
                Big numbers, sharper motion, and a cleaner story: HaveRizz turns awkward social
                patterns into a readable signal system.
              </p>
            </FadeUp>
          </div>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-12 gap-4">
          {receipts.map((s, i) => (
            <motion.div
              key={s.sub}
              className={`${s.span} receipt-card min-h-[220px]`}
              style={{ "--receipt-accent": s.accent } as CSSProperties}
              initial={{ opacity: 0, y: 70, filter: "blur(18px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              whileHover={{ y: -8, rotateX: 2 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.78, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                    {s.sub}
                  </span>
                  <span className="h-2.5 w-2.5 rotate-45 bg-[var(--receipt-accent)] shadow-[0_0_22px_var(--receipt-accent)]" />
                </div>
                <div className="mt-12">
                  <motion.p
                    className="receipt-value font-display font-extrabold leading-none text-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.18 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {s.v}
                  </motion.p>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">{s.l}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArsenalSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const glowX = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="arsenal-section relative overflow-hidden px-6 py-32 lg:py-40">
      <motion.div aria-hidden className="arsenal-ambient" style={{ x: glowX }} />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <FadeUp>
              <SectionLabel index="—" label="The Arsenal" />
            </FadeUp>
            <RevealText
              as="h2"
              className="mt-6 font-display text-4xl sm:text-6xl lg:text-8xl font-extrabold uppercase tracking-normal text-white leading-[0.92]"
            >
              Six tools. One live system.
            </RevealText>
          </div>
          <FadeUp delay={0.18} className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-white/50">
              A product grid with depth, motion, and a more premium control-room feel. Hover each
              module and it should feel awake, not decorative.
            </p>
          </FadeUp>
        </div>

        <motion.div
          className="arsenal-grid-shell grid md:grid-cols-4 auto-rows-[minmax(240px,auto)] grid-flow-row-dense gap-4"
          style={{ y: gridY }}
        >
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.to}
              className={`${f.span} min-w-0 [perspective:1000px]`}
              initial={{ opacity: 0, y: 80, rotateX: -10, filter: "blur(18px)" }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.82, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
            >
              <Link
                to={f.to}
                className="arsenal-card group relative flex h-full min-h-[240px] min-w-0 flex-col justify-between overflow-hidden p-7 sm:p-8"
                style={{ "--feature-accent": f.accent } as CSSProperties}
              >
                <div className="arsenal-card-grid" />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="font-mono text-xs font-bold tracking-[0.26em] text-[var(--feature-accent)]">
                    {f.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                    {f.tag}
                  </span>
                </div>

                <div className="relative mt-10 min-w-0">
                  <div className="mb-7 flex items-end justify-between gap-5">
                    <motion.span
                      className="font-display text-5xl font-extrabold leading-none text-white/10"
                      animate={{ opacity: [0.18, 0.34, 0.18] }}
                      transition={{ duration: 3.8, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
                    >
                      {f.metric}
                    </motion.span>
                    <span
                      className="h-px flex-1"
                      style={{ background: `linear-gradient(90deg, ${f.accent}cc, transparent)` }}
                    />
                  </div>
                  <h3
                    className={`font-display font-extrabold uppercase tracking-normal text-white leading-[0.94] break-words ${
                      f.big ? "text-5xl sm:text-6xl lg:text-7xl" : "text-3xl sm:text-4xl"
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">{f.desc}</p>
                  <div className="mt-7 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 transition group-hover:text-[var(--feature-accent)]">
                    Launch{" "}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HeroSignalRig({ activeIndex }: { activeIndex: number }) {
  return (
    <div aria-hidden className="absolute inset-0 -z-0 pointer-events-none [perspective:1000px]">
      <motion.div
        className="absolute -right-8 top-4 h-56 w-56 rounded-full border border-white/10"
        animate={{ rotateX: [68, 76, 68], rotateZ: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ boxShadow: `0 0 42px ${CARD_VARIANTS[activeIndex].accent}22` }}
      />
      <motion.div
        className="absolute left-2 top-24 h-28 w-28 border border-white/15 bg-white/[0.025] shadow-2xl"
        animate={{ y: [-8, 10, -8], rotateX: [58, 48, 58], rotateZ: [14, 28, 14] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-x-3 top-1/2 h-px bg-white/20" />
        <div className="absolute inset-y-3 left-1/2 w-px bg-white/20" />
      </motion.div>
      <motion.div
        className="absolute -bottom-8 right-10 h-24 w-40 border border-white/15 bg-[#050505]/50 backdrop-blur-md"
        animate={{ y: [10, -10, 10], rotateX: [64, 52, 64], rotateZ: [-10, -4, -10] }}
        transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute left-4 right-4 top-5 h-px bg-white/20" />
        <div className="absolute left-4 right-10 top-10 h-px bg-white/10" />
        <div className="absolute left-4 right-16 top-[60px] h-px bg-white/10" />
      </motion.div>
      <motion.div
        className="absolute right-0 top-1/2 h-3 w-3 rotate-45"
        animate={{ scale: [1, 1.9, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ backgroundColor: CARD_VARIANTS[activeIndex].accent, boxShadow: `0 0 28px ${CARD_VARIANTS[activeIndex].accent}` }}
      />
    </div>
  );
}

function SignalEngineSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const sceneY = useTransform(scrollYProgress, [0, 1], [100, -120]);
  const sceneRotate = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const copyY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const nodes = [
    { label: "DM", value: "94", accent: "#d4ff00", x: -190, y: -110, z: 74 },
    { label: "AURA", value: "8.8", accent: "#22d3ee", x: 12, y: -105, z: 92 },
    { label: "MATCH", value: "12", accent: "#ff2e93", x: -165, y: 50, z: 64 },
    { label: "VIBE", value: "S+", accent: "#ffd400", x: 32, y: 58, z: 88 },
  ] as const;

  return (
    <section ref={ref} className="signal-engine-section relative overflow-hidden px-6 py-28 lg:py-40">
      <motion.div aria-hidden className="signal-engine-wash" style={{ y: sceneY }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
        <motion.div style={{ y: copyY }} className="lg:col-span-5">
          <FadeUp>
            <SectionLabel index="—" label="Signal Engine" />
          </FadeUp>
          <RevealText
            as="h2"
            className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-normal text-white leading-[0.9]"
          >
            Built like a charisma operating system.
          </RevealText>
          <FadeUp delay={0.18}>
            <p className="mt-6 text-white/60 leading-relaxed max-w-lg">
              The page now moves like the product thinks: layered, reactive, and precise. Scores,
              traits, matches, and social feedback orbit around the identity card instead of sitting flat.
            </p>
          </FadeUp>
          <div className="mt-9 grid grid-cols-3 gap-px border border-white/10 bg-white/10">
            {[
              ["5", "card tiers"],
              ["4.5s", "live cycle"],
              ["360", "motion field"],
            ].map(([value, label], i) => (
              <FadeUp key={label} delay={0.26 + i * 0.07} className="bg-[#050505] p-5">
                <p className="font-display text-3xl font-extrabold text-white">{value}</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-white/35">
                  {label}
                </p>
              </FadeUp>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-span-7 relative min-h-[560px] [perspective:1200px]">
          <motion.div
            className="absolute inset-0 signal-visual-stage"
            style={{ y: sceneY, rotateZ: sceneRotate, transformStyle: "preserve-3d" }}
          >
            <div className="absolute left-1/2 top-[38%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 signal-orbit-ring" />
            <div className="absolute left-[56%] top-[41%] h-[340px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d4ff00]/20 signal-orbit-ring signal-orbit-ring-alt" />
            <div className="absolute left-[42%] top-[27%] h-[320px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#22d3ee]/14 signal-orbit-ring signal-orbit-ring-vertical" />

            <motion.div
              aria-hidden
              className="signal-prism signal-prism-a"
              style={{ rotateX: 62, rotateY: -24, z: 68, transformStyle: "preserve-3d" }}
              animate={{ y: [-10, 12, -10], rotateZ: [-7, -3, -7] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="signal-prism signal-prism-b"
              style={{ rotateX: 58, rotateY: 18, z: 92, transformStyle: "preserve-3d" }}
              animate={{ y: [14, -8, 14], rotateZ: [8, 3, 8] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="signal-prism signal-prism-c"
              style={{ rotateX: 68, rotateY: -8, z: 40, transformStyle: "preserve-3d" }}
              animate={{ x: [-8, 12, -8], rotateY: [18, 28, 18] }}
              transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
            />

            {nodes.map((node, i) => (
              <motion.div
                key={node.label}
                className="absolute left-[58%] top-[58%]"
                style={
                  {
                    "--node-accent": node.accent,
                    x: node.x,
                    y: node.y,
                    z: node.z,
                    rotateX: 54,
                    rotateZ: i % 2 ? 8 : -8,
                    transformStyle: "preserve-3d",
                  } as any
                }
                animate={{ rotateZ: [i % 2 ? 8 : -8, i % 2 ? 2 : -2, i % 2 ? 8 : -8] }}
                transition={{ duration: 4.8 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="signal-metric-panel w-40 p-4"
                  animate={{ y: [0, i % 2 ? 12 : -12, 0] }}
                  transition={{ duration: 4.8 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/45">
                      {node.label}
                    </span>
                    <span className="h-2 w-2 rotate-45 bg-[var(--node-accent)] shadow-[0_0_18px_var(--node-accent)]" />
                  </div>
                  <p className="mt-5 font-display text-4xl font-extrabold leading-none text-white">
                    {node.value}
                  </p>
                  <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-[var(--node-accent)]"
                      animate={{ x: ["-100%", "0%", "100%"] }}
                      transition={{ duration: 2.8, delay: i * 0.22, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works — Side-by-Side Scroll-Linked Timeline ──────────────── */
function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const step0Ref = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const stepRefs = [step0Ref, step1Ref, step2Ref];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      n: "01",
      t: "Take the Quiz",
      d: "10 scenario questions. Pick A/B/C/D. No registration. No data collection. ~3 minutes.",
      sub: "Engineered around real social scenarios — from DMs to IRL encounters.",
    },
    {
      n: "02",
      t: "Mint Your Card",
      d: "Algorithm crunches your answers. You get a holographic Rizz Identity Card with score, rank & traits.",
      sub: "Five rarity tiers. Sub-1% chance of hitting Mythic. Every card is unique.",
    },
    {
      n: "03",
      t: "Dominate the Arena",
      d: "Post lines. Vote on others. Climb the leaderboard. Share your card everywhere.",
      sub: "Reddit meets rizz. Anonymous posting. Community votes: Fire or Fizz.",
    },
  ];

  const scrollToStep = (idx: number) => {
    stepRefs[idx].current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 15 });

  return (
    <section ref={containerRef} className="px-6 py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Sticky Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 lg:pr-8">
          <div>
            <SectionLabel index="—" label="How It Works" />
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[clamp(44px,5.5vw,68px)] font-extrabold uppercase tracking-tighter text-white leading-[0.95]">
              Three steps.{" "}
              <span className="text-[#d4ff00]" style={{ textShadow: "0 0 30px rgba(212,255,0,0.35)" }}>
                Zero
              </span>{" "}
              fumble.
            </h2>
            <p className="mt-4 text-white/50 text-sm max-w-sm leading-relaxed">
              We took biometric profile creation and simplified it. No downloads, no signups, just instant validation.
            </p>
          </div>

          {/* Interactive Timeline Indicators */}
          <div className="relative pl-8 space-y-10 py-2">
            {/* Timeline Line */}
            <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-white/10">
              <motion.div
                className="absolute top-0 left-0 right-0 bg-[#d4ff00] origin-top h-full"
                style={{ scaleY }}
              />
            </div>

            {steps.map((s, i) => (
              <div
                key={i}
                onClick={() => scrollToStep(i)}
                className="relative flex items-center gap-6 group cursor-pointer"
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`w-6 h-6 rounded-full border-2 z-10 flex items-center justify-center text-[10px] font-bold font-mono transition-all duration-300 ${
                    i <= activeStep
                      ? "bg-[#d4ff00] border-[#d4ff00] text-black shadow-[0_0_12px_#d4ff00]"
                      : "bg-[#050505] border-white/20 text-white/40 group-hover:border-white/40"
                  }`}
                >
                  {s.n}
                </motion.div>

                {/* Text Title */}
                <div className="flex flex-col">
                  <motion.span
                    className="font-mono text-xs uppercase tracking-widest font-bold transition-colors duration-300"
                    style={{
                      color: i === activeStep ? "#d4ff00" : "rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    {s.t}
                  </motion.span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Scrollable Column */}
        <div className="lg:col-span-7 space-y-12 lg:space-y-20 py-2">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              ref={stepRefs[i]}
              initial={{ opacity: 0.3, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.55, once: false }}
              onViewportEnter={() => setActiveStep(i)}
              className={`relative border rounded-xl p-8 sm:p-10 transition-all duration-500 overflow-hidden ${
                activeStep === i
                  ? "border-[#d4ff00]/40 bg-[#0f0f12] shadow-[0_0_40px_rgba(212,255,0,0.06)]"
                  : "border-white/10 bg-[#070709]/60 opacity-40 scale-98 blur-[0.5px]"
              }`}
            >
              {/* Giant background number */}
              <div
                className="absolute -right-4 -bottom-10 font-display font-extrabold leading-none select-none pointer-events-none transition-opacity duration-500"
                style={{
                  fontSize: "clamp(120px,16vw,220px)",
                  color: "rgba(255, 255, 255, 0.015)",
                  letterSpacing: "-0.05em",
                  opacity: activeStep === i ? 1 : 0.4,
                }}
              >
                {s.n}
              </div>

              {/* Glowing accent dot */}
              <div
                className={`absolute top-0 left-0 w-48 h-48 bg-[#d4ff00]/[0.03] blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-500 ${
                  activeStep === i ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative space-y-6">
                <span className="font-mono text-[10px] font-bold tracking-[0.4em] text-[#d4ff00]">
                  STEP {s.n}
                </span>

                <h3
                  className="font-display font-extrabold uppercase tracking-tighter text-white leading-[0.9] transition-colors duration-300"
                  style={{ fontSize: "clamp(26px,5vw,56px)" }}
                >
                  {s.t}
                </h3>

                <div className="grid sm:grid-cols-[1fr_1px_1fr] gap-6 items-center border-t border-white/5 pt-6 mt-4">
                  <p className="text-white/60 text-base leading-relaxed">
                    {s.d}
                  </p>
                  <div className="hidden sm:block w-px bg-white/5 self-stretch" />
                  <p className="font-mono text-xs text-white/30 leading-relaxed">
                    {s.sub}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Identity Card Showcase — sticky ───────────────────────────────── */
function IdentityShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const selectedCard = CARD_VARIANTS[activeCard];
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [70, -80]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [-3, 5]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveCard((current) => (current + 1) % CARD_VARIANTS.length);
    }, CARD_ROTATION_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="card-showcase-section px-6 py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-32 self-start relative [perspective:1200px]">
          <HeroSignalRig activeIndex={activeCard} />
          <motion.div style={{ y: cardY, rotateZ: cardRotate }} className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCard.cardNumber}
                initial={{ opacity: 0, y: 36, rotateY: -24, filter: "blur(18px)" }}
                animate={{ opacity: 1, y: 0, rotateY: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -28, rotateY: 22, filter: "blur(16px)" }}
                transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <IdentityCard
                  cardNumber={selectedCard.cardNumber}
                  score={selectedCard.score}
                  traits={[...selectedCard.traits]}
                  username={selectedCard.username}
                />
              </motion.div>
            </AnimatePresence>

            <div className="mt-7 grid grid-cols-5 gap-2">
              {CARD_VARIANTS.map((card, i) => (
                <button
                  key={card.cardNumber}
                  type="button"
                  onClick={() => setActiveCard(i)}
                  className="relative h-1.5 overflow-hidden rounded-full bg-white/10"
                  aria-label={`Show ${card.rarity} card`}
                >
                  <motion.span
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ backgroundColor: card.accent }}
                    initial={false}
                    animate={{ width: i === activeCard ? "100%" : "22%", opacity: i === activeCard ? 1 : 0.38 }}
                    transition={{ duration: i === activeCard ? CARD_ROTATION_SECONDS : 0.25, ease: "linear" }}
                  />
                </button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="absolute -top-4 -left-4 transform -skew-x-12 text-black px-3 py-1.5 border"
              style={{
                backgroundColor: selectedCard.accent,
                borderColor: selectedCard.accent,
                boxShadow: `0 0 20px ${selectedCard.accent}66`,
              }}
            >
              <span className="inline-block skew-x-12 font-mono text-[10px] font-bold uppercase tracking-widest">
                {selectedCard.rarity} Tier
              </span>
            </motion.div>
          </motion.div>
        </div>
        <div className="space-y-12">
          <div>
            <FadeUp>
              <SectionLabel index="—" label="The Card" />
            </FadeUp>
            <RevealText
              as="h2"
              className="mt-6 font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]"
            >
              Holographic. Numbered. Permanent.
            </RevealText>
          </div>
          {[
            {
              t: "Biometric scoring",
              d: "Every answer maps to a charisma vector. The algorithm doesn't grade on a curve — it tells you the truth.",
            },
            {
              t: "Five rarity tiers",
              d: "From Common to Mythic. Less than 3% of cards reach Legendary. Less than 0.1% reach Mythic.",
            },
            {
              t: "Built to share",
              d: "Export as PNG. Drop in your story. Send to the group chat. The card travels with you.",
            },
            {
              t: "Yours forever",
              d: "Saved locally to your device. Re-take whenever your aura shifts.",
            },
          ].map((b, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <div className="border-t border-white/10 pt-6 flex gap-6">
                <span className="font-mono text-xs font-bold text-[#d4ff00] tracking-widest pt-1">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tight">
                    {b.t}
                  </h3>
                  <p className="mt-2 text-white/60 leading-relaxed">{b.d}</p>
                </div>
              </div>
            </FadeUp>
          ))}
          <Magnetic>
            <Link to="/quiz">
              <SkewButton size="lg">Mint Yours →</SkewButton>
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
