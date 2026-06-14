import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZodiacPicker } from "../components/ZodiacPicker";
import { SectionLabel } from "../components/SectionLabel";
import { SkewButton } from "../components/SkewButton";
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
        <div className="mb-12">
          <SectionLabel index="03" label="AstroRizz" />
          <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]">
            Cosmic
          </h1>
          <p className="font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]" style={{ textShadow: "0 0 30px rgba(212,255,0,0.35)" }}>
            compatibility.
          </p>
          <p className="mt-6 text-white/60 max-w-xl text-lg">Pick both signs. Get your real compatibility, opener, strategy, flags, and best time to text.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-8">
          <div className="p-6 bg-[#050505]">
            <ZodiacPicker label="Your sign" value={you} onChange={setYou} />
          </div>
          <div className="p-6 bg-[#050505]">
            <ZodiacPicker label="Their sign" value={them} onChange={setThem} />
          </div>
        </div>

        <AnimatePresence>
          {combo && you && them && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="border border-white/10 p-6 sm:p-10 bg-[#0a0a0c] holo-edge relative overflow-hidden"
            >
              <div className="absolute -top-12 right-12 w-60 h-60 bg-[#d4ff00]/10 blur-3xl rounded-full" />
              <div className="relative flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{SYMBOL[you]}</div>
                  <div className="font-display text-3xl font-extrabold text-white/30">×</div>
                  <div className="text-6xl">{SYMBOL[them]}</div>
                </div>
                <div className="flex items-end gap-3">
                  <p className="font-display text-7xl sm:text-8xl font-extrabold text-[#d4ff00] leading-none tracking-tighter" style={{ textShadow: "0 0 30px rgba(212,255,0,0.4)" }}>
                    {combo.compatibility}
                  </p>
                  <p className="font-mono text-base text-white/50 pb-2 uppercase">% match</p>
                </div>
              </div>

              <div className="mt-10 grid gap-3">
                <Section icon={<Sparkles className="size-3.5 text-[#d4ff00]" />} label="Best opener">
                  <p className="font-serif italic text-xl text-white leading-snug">"{combo.opener}"</p>
                  <div className="flex gap-2 mt-4">
                    <SkewButton size="sm" variant="outline" onClick={async () => {
                      const ok = await copyToClipboard(combo.opener);
                      ok ? toast.success("Copied.") : toast.error("Copy failed.");
                    }}>
                      <Copy className="size-3" /> Copy
                    </SkewButton>
                    <SkewButton size="sm" variant="outline" onClick={() => shareWhatsApp(combo.opener)}>
                      <Share2 className="size-3" /> Send
                    </SkewButton>
                  </div>
                </Section>

                <Section icon={<Sparkles className="size-3.5 text-[#22d3ee]" />} label="Conversation strategy">
                  <p className="text-white/80 leading-relaxed">{combo.strategy}</p>
                </Section>

                <div className="grid sm:grid-cols-2 gap-3">
                  <Section icon={<Heart className="size-3.5 text-[#d4ff00]" />} label="Green flags">
                    <p className="text-white/80 leading-relaxed">{combo.greenFlags}</p>
                  </Section>
                  <Section icon={<AlertTriangle className="size-3.5 text-[#ff2e93]" />} label="Red flags">
                    <p className="text-white/80 leading-relaxed">{combo.redFlags}</p>
                  </Section>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <Section icon={<Clock className="size-3.5 text-[#ffd400]" />} label="Best time to text">
                    <p className="text-white/80 leading-relaxed">{combo.bestTime}</p>
                  </Section>
                  <Section icon={<Sparkles className="size-3.5 text-[#ff2e93]" />} label="Flirting style">
                    <p className="text-white/80 leading-relaxed">{combo.flirtingStyle}</p>
                  </Section>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!combo && (
          <p className="text-center font-mono text-[10px] uppercase tracking-widest text-white/30 mt-12">
            ↑ Pick both signs to reveal the reading
          </p>
        )}
      </div>
    </div>
  );
}

function Section({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="p-5 bg-white/[0.02] border border-white/10">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold">{label}</p>
      </div>
      {children}
    </div>
  );
}
