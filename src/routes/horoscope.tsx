import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ZodiacPicker } from "../components/ZodiacPicker";
import { SectionLabel } from "../components/SectionLabel";
import { SkewButton } from "../components/SkewButton";
import { generateHoroscope } from "../data/horoscope-engine";
import { SYMBOL, type Zodiac } from "../data/astro-combos";
import { copyToClipboard, shareWhatsApp } from "../lib/share";
import { Copy, Share2, Clock, Sparkles, Flame } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/horoscope")({
  head: () => ({
    meta: [
      { title: "Daily Rizz Horoscope" },
      { name: "description", content: "Your daily charisma forecast. Score, lucky emoji, lucky time, confidence tier, today's flirting forecast, and a fresh icebreaker." },
      { property: "og:title", content: "Daily Rizz Horoscope" },
      { property: "og:description", content: "Your daily charisma forecast — new every morning." },
    ],
  }),
  component: HoroscopePage,
});

function HoroscopePage() {
  const [sign, setSign] = useState<Zodiac | null>(null);
  const h = useMemo(() => (sign ? generateHoroscope(sign) : null), [sign]);

  return (
    <div className="px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <SectionLabel index="04" label="Daily Horoscope" />
          <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]">
            Your rizz,
          </h1>
          <p className="font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]" style={{ textShadow: "0 0 30px rgba(212,255,0,0.35)" }}>
            forecasted.
          </p>
          <p className="mt-6 text-white/60 max-w-xl text-lg">Pick your sign. Get today's score, lucky time window, confidence tier, and a fresh icebreaker. Resets every day at midnight.</p>
        </div>

        <div className="p-6 border border-white/10 bg-[#0a0a0c] mb-8">
          <ZodiacPicker label="Your sign" value={sign} onChange={setSign} />
        </div>

        {h && (
          <motion.div
            key={h.sign + h.dateISO}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="border border-white/10 p-7 sm:p-10 bg-[#0a0a0c] holo-edge relative overflow-hidden"
          >
            <div className="absolute -top-12 right-12 w-60 h-60 bg-[#d4ff00]/10 blur-3xl rounded-full" />
            <div className="relative flex items-start justify-between flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-5">
                <div className="text-6xl">{SYMBOL[h.sign]}</div>
                <div>
                  <p className="font-display text-3xl font-extrabold text-white uppercase tracking-tight">{h.sign}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mt-1">{h.dateLabel} · {h.element}</p>
                </div>
              </div>
              <div className="px-3 py-1.5 border border-[#d4ff00]/40 bg-[#d4ff00]/10">
                <span className="font-mono text-[10px] font-bold text-[#d4ff00] uppercase tracking-widest">{h.confidence} {h.confidenceEmoji}</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-3">
              <Stat icon={<Flame className="size-4 text-[#d4ff00]" />} label="Rizz Score" value={`${h.rizzScore}/100`} />
              <Stat icon={<span className="text-base">{h.luckyEmoji}</span>} label="Lucky Emoji" value={h.luckyEmoji} />
              <Stat icon={<Clock className="size-4 text-[#22d3ee]" />} label="Lucky Time" value={h.luckyTime} />
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/10 mb-3">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="size-3.5 text-[#ff2e93]" />
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold">Today's Forecast</p>
              </div>
              <p className="font-serif italic text-xl text-white leading-snug">"{h.forecast}"</p>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="size-3.5 text-[#22d3ee]" />
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold">Best Icebreaker</p>
              </div>
              <p className="font-serif italic text-xl text-white leading-snug">"{h.icebreaker}"</p>
              <div className="flex gap-2 mt-5">
                <SkewButton size="sm" variant="outline" onClick={async () => {
                  const ok = await copyToClipboard(h.icebreaker);
                  ok ? toast.success("Copied. Go shoot the shot.") : toast.error("Copy failed.");
                }}>
                  <Copy className="size-3" /> Copy
                </SkewButton>
                <SkewButton size="sm" variant="outline" onClick={() => shareWhatsApp(h.icebreaker)}>
                  <Share2 className="size-3" /> Send
                </SkewButton>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-[#050505] p-5">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold">{label}</p>
      </div>
      <p className="font-display text-2xl font-extrabold text-white tracking-tight">{value}</p>
    </div>
  );
}
