import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ZodiacPicker } from "../components/ZodiacPicker";
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
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2">Daily Horoscope</p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-zinc-50 tracking-tighter">
            Your Rizz, <span className="text-gradient italic">Forecasted.</span>
          </h1>
          <p className="text-zinc-400 mt-3 max-w-xl">Pick your sign. Get today's score, lucky time window, confidence tier, and a fresh icebreaker. Resets every day at midnight.</p>
        </div>

        <div className="p-5 rounded-3xl glass ring-1 ring-white/8 mb-8">
          <ZodiacPicker label="Your sign" value={sign} onChange={setSign} />
        </div>

        {h && (
          <motion.div
            key={h.sign + h.dateISO}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-7 sm:p-10 rounded-3xl glass-strong ring-1 ring-white/10 holo-edge"
          >
            <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="text-5xl">{SYMBOL[h.sign]}</div>
                <div>
                  <p className="font-display text-2xl font-semibold text-zinc-50">{h.sign}</p>
                  <p className="text-xs text-zinc-500">{h.dateLabel} · {h.element}</p>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-brand-gold/10 ring-1 ring-brand-gold/30">
                <span className="text-[10px] font-semibold text-brand-gold uppercase tracking-widest">{h.confidence} {h.confidenceEmoji}</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              <Stat icon={<Flame className="size-4 text-brand-purple" />} label="Rizz Score" value={`${h.rizzScore}/100`} />
              <Stat icon={<span className="text-base">{h.luckyEmoji}</span>} label="Lucky Emoji" value={h.luckyEmoji} />
              <Stat icon={<Clock className="size-4 text-brand-cyan" />} label="Lucky Time" value={h.luckyTime} />
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] ring-1 ring-white/8 mb-3">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="size-3.5 text-brand-magenta" />
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">Today's Forecast</p>
              </div>
              <p className="text-zinc-100 text-lg leading-snug italic">"{h.forecast}"</p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] ring-1 ring-white/8">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="size-3.5 text-brand-cyan" />
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">Best Icebreaker</p>
              </div>
              <p className="text-zinc-100 text-lg leading-snug italic">"{h.icebreaker}"</p>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={async () => {
                    const ok = await copyToClipboard(h.icebreaker);
                    ok ? toast.success("Copied. Go shoot the shot.") : toast.error("Copy failed.");
                  }}
                  className="h-8 px-3 rounded-full glass ring-1 ring-white/10 text-xs text-zinc-300 hover:bg-white/10 flex items-center gap-1.5"
                >
                  <Copy className="size-3" /> Copy
                </button>
                <button
                  onClick={() => shareWhatsApp(h.icebreaker)}
                  className="h-8 px-3 rounded-full glass ring-1 ring-white/10 text-xs text-zinc-300 hover:bg-white/10 flex items-center gap-1.5"
                >
                  <Share2 className="size-3" /> Send
                </button>
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
    <div className="p-4 rounded-2xl bg-white/[0.03] ring-1 ring-white/8">
      <div className="flex items-center gap-2 mb-1.5">
        {icon}
        <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">{label}</p>
      </div>
      <p className="font-display text-xl font-semibold text-zinc-50">{value}</p>
    </div>
  );
}
