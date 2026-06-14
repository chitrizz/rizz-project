import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RIZZ_CATEGORIES } from "../data/rizz-lines";
import { useReactions } from "../stores/reactions";
import { copyToClipboard, shareWhatsApp } from "../lib/share";
import { SectionLabel } from "../components/SectionLabel";
import { SkewButton } from "../components/SkewButton";
import { Copy, Share2, Flame, Shuffle } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/generator")({
  head: () => ({
    meta: [
      { title: "Best Rizz Generator — 15 Categories" },
      { name: "description", content: "Corporate, Gym, Tech, Anime, Desi, Romantic, Dark Humor — 300+ curated rizz lines for every vibe." },
      { property: "og:title", content: "Best Rizz Generator — 15 Categories" },
      { property: "og:description", content: "300+ curated pickup lines, 15 categories. Copy, share, send." },
    ],
  }),
  component: GeneratorPage,
});

function GeneratorPage() {
  const [cat, setCat] = useState(RIZZ_CATEGORIES[0].id);
  const reactions = useReactions((s) => s.counts);
  const toggle = useReactions((s) => s.toggle);
  const current = useMemo(() => RIZZ_CATEGORIES.find((c) => c.id === cat)!, [cat]);
  const [shuffle, setShuffle] = useState(0);

  const shuffledLines = useMemo(() => {
    const arr = [...current.lines];
    let s = shuffle * 9301 + 49297;
    for (let i = arr.length - 1; i > 0; i--) {
      s = (s * 9301 + 49297) % 233280;
      const j = Math.floor((s / 233280) * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [current, shuffle]);

  return (
    <div className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <SectionLabel index="02" label="Generator" />
          <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]">
            300+ Lines.
          </h1>
          <p className="font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]" style={{ textShadow: "0 0 30px rgba(212,255,0,0.35)" }}>
            Zero fumble.
          </p>
          <p className="mt-6 text-white/60 max-w-xl text-lg">Pick a category. Copy what fits. Send it. Your future self thanks you.</p>
        </div>

        {/* category rail */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6 mb-10 border-b border-white/10">
          {RIZZ_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => { setCat(c.id); setShuffle(0); }}
              className={`shrink-0 px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-wider border-b-2 transition flex items-center gap-2 -mb-px ${
                cat === c.id
                  ? "border-[#d4ff00] text-[#d4ff00]"
                  : "border-transparent text-white/40 hover:text-white"
              }`}
            >
              <span>{c.emoji}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        {/* header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
          <div className="flex items-center gap-4">
            <div className="size-14 border border-[#d4ff00]/40 bg-[#d4ff00]/5 grid place-items-center text-2xl">{current.emoji}</div>
            <div>
              <h2 className="font-display text-2xl font-extrabold text-white uppercase tracking-tight">{current.name}</h2>
              <p className="text-xs text-white/50">{current.description}</p>
            </div>
          </div>
          <SkewButton variant="outline" size="sm" onClick={() => setShuffle((s) => s + 1)}>
            <Shuffle className="size-3.5" /> Shuffle
          </SkewButton>
        </div>

        {/* lines */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cat + shuffle}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10"
          >
            {shuffledLines.map((line, i) => {
              const key = `${cat}-${i}`;
              const count = reactions[key] ?? 0;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.015 }}
                  className="bg-[#050505] p-6 flex flex-col gap-4 group hover:bg-[#0a0a0c] transition relative overflow-hidden"
                >
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 font-bold">
                    LN.{String(i + 1).padStart(3, "0")}
                  </span>
                  <p className="flex-1 text-white text-base leading-relaxed">{line}</p>
                  <div className="flex items-center justify-between border-t border-white/5 pt-3">
                    <button
                      onClick={() => toggle(key)}
                      className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white/40 hover:text-[#d4ff00] transition"
                    >
                      <Flame className={`size-3.5 ${count > 0 ? "text-[#d4ff00]" : ""}`} /> {count}
                    </button>
                    <div className="flex gap-1">
                      <button
                        onClick={async () => {
                          const ok = await copyToClipboard(line);
                          ok ? toast.success("Copied. Use wisely.") : toast.error("Copy failed.");
                        }}
                        className="size-8 grid place-items-center hover:bg-white/5 text-white/50 hover:text-[#d4ff00] transition"
                        aria-label="Copy"
                      >
                        <Copy className="size-3.5" />
                      </button>
                      <button
                        onClick={() => shareWhatsApp(line)}
                        className="size-8 grid place-items-center hover:bg-white/5 text-white/50 hover:text-[#d4ff00] transition"
                        aria-label="Share"
                      >
                        <Share2 className="size-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
