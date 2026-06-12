import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZodiacPicker } from "../components/ZodiacPicker";
import { getCombo, SYMBOL, type Zodiac } from "../data/astro-combos";
import { copyToClipboard, shareWhatsApp } from "../lib/share";
import { Copy, Share2, Heart, AlertTriangle, Clock, Sparkles } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/astro")({
  head: () => ({
    meta: [
      { title: "AstroRizz — Zodiac Compatibility" },
      { name: "description", content: "144 zodiac combos. Compatibility %, opener, conversation strategy, green & red flags, best time to text." },
      { property: "og:title", content: "AstroRizz — Zodiac Compatibility" },
      { property: "og:description", content: "Find out your cosmic rizz match before you text them." },
    ],
  }),
  component: AstroPage,
});

function AstroPage() {
  const [you, setYou] = useState<Zodiac | null>(null);
  const [them, setThem] = useState<Zodiac | null>(null);

  const combo = you && them ? getCombo(you, them) : null;

  return (
    <div className="px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2">AstroRizz</p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-zinc-50 tracking-tighter">
            Cosmic <span className="text-gradient italic">Compatibility</span>
          </h1>
          <p className="text-zinc-400 mt-3 max-w-xl">Pick both signs. Get your real compatibility, opener, strategy, flags, and best time to text.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-3xl glass ring-1 ring-white/8">
            <ZodiacPicker label="Your sign" value={you} onChange={setYou} />
          </div>
          <div className="p-5 rounded-3xl glass ring-1 ring-white/8">
            <ZodiacPicker label="Their sign" value={them} onChange={setThem} />
          </div>
        </div>

        <AnimatePresence>
          {combo && you && them && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-10 rounded-3xl glass-strong ring-1 ring-white/10 holo-edge"
            >
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{SYMBOL[you]}</div>
                  <div className="font-display text-2xl text-zinc-500">×</div>
                  <div className="text-5xl">{SYMBOL[them]}</div>
                </div>
                <div className="flex items-end gap-3">
                  <p className="font-display text-7xl font-semibold text-gradient leading-none tracking-tighter">{combo.compatibility}</p>
                  <p className="text-xl text-zinc-500 pb-2">%</p>
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                <Section icon={<Sparkles className="size-3.5 text-brand-purple" />} label="Best opener">
                  <p className="text-lg text-zinc-100 italic leading-snug">{combo.opener}</p>
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={async () => {
                        const ok = await copyToClipboard(combo.opener);
                        ok ? toast.success("Copied.") : toast.error("Copy failed.");
                      }}
                      className="h-8 px-3 rounded-full glass ring-1 ring-white/10 text-xs text-zinc-300 hover:bg-white/10 flex items-center gap-1.5"
                    >
                      <Copy className="size-3" /> Copy
                    </button>
                    <button
                      onClick={() => shareWhatsApp(combo.opener)}
                      className="h-8 px-3 rounded-full glass ring-1 ring-white/10 text-xs text-zinc-300 hover:bg-white/10 flex items-center gap-1.5"
                    >
                      <Share2 className="size-3" /> Send
                    </button>
                  </div>
                </Section>

                <Section icon={<Sparkles className="size-3.5 text-brand-cyan" />} label="Conversation strategy">
                  <p className="text-zinc-300 leading-relaxed">{combo.strategy}</p>
                </Section>

                <div className="grid sm:grid-cols-2 gap-3">
                  <Section icon={<Heart className="size-3.5 text-success" />} label="Green flags">
                    <p className="text-zinc-300 leading-relaxed">{combo.greenFlags}</p>
                  </Section>
                  <Section icon={<AlertTriangle className="size-3.5 text-danger" />} label="Red flags">
                    <p className="text-zinc-300 leading-relaxed">{combo.redFlags}</p>
                  </Section>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <Section icon={<Clock className="size-3.5 text-brand-gold" />} label="Best time to text">
                    <p className="text-zinc-300 leading-relaxed">{combo.bestTime}</p>
                  </Section>
                  <Section icon={<Sparkles className="size-3.5 text-brand-magenta" />} label="Flirting style">
                    <p className="text-zinc-300 leading-relaxed">{combo.flirtingStyle}</p>
                  </Section>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!combo && (
          <p className="text-center text-zinc-600 text-sm mt-12">↑ Pick both signs to reveal the reading.</p>
        )}
      </div>
    </div>
  );
}

function Section({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="p-5 rounded-2xl bg-white/[0.03] ring-1 ring-white/8">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">{label}</p>
      </div>
      {children}
    </div>
  );
}
