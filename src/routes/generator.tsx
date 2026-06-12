import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RIZZ_CATEGORIES } from "../data/rizz-lines";
import { useReactions } from "../stores/reactions";
import { copyToClipboard, shareWhatsApp } from "../lib/share";
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
        <div className="mb-8">
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2">Best Rizz Generator</p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-zinc-50 tracking-tighter">
            300+ Lines. <span className="text-gradient italic">Zero Fumble.</span>
          </h1>
          <p className="text-zinc-400 mt-3 max-w-xl">Pick a category. Copy what fits. Send it. Your future self thanks you.</p>
        </div>

        {/* category rail */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6 mb-8">
          {RIZZ_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => { setCat(c.id); setShuffle(0); }}
              className={`shrink-0 h-10 px-4 rounded-full text-sm font-medium ring-1 transition flex items-center gap-2 ${
                cat === c.id
                  ? "bg-zinc-50 text-zinc-950 ring-zinc-50"
                  : "glass text-zinc-300 ring-white/10 hover:ring-white/20"
              }`}
            >
              <span>{c.emoji}</span>
              <span>{c.name}</span>
            </button>
          ))}
        </div>

        {/* category header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-2xl glass ring-1 ring-white/10 grid place-items-center text-2xl">{current.emoji}</div>
            <div>
              <h2 className="font-display text-xl text-zinc-50 font-semibold tracking-tight">{current.name}</h2>
              <p className="text-xs text-zinc-500">{current.description}</p>
            </div>
          </div>
          <button
            onClick={() => setShuffle((s) => s + 1)}
            className="h-10 glass ring-1 ring-white/10 px-4 rounded-full text-xs font-medium text-zinc-300 hover:text-zinc-50 hover:ring-white/20 transition flex items-center gap-2"
          >
            <Shuffle className="size-3.5" /> Shuffle
          </button>
        </div>

        {/* lines grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cat + shuffle}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {shuffledLines.map((line, i) => {
              const key = `${cat}-${i}`;
              const count = reactions[key] ?? 0;
              return (
                <div key={key} className="p-5 rounded-2xl glass ring-1 ring-white/8 hover:ring-white/15 transition flex flex-col gap-4 group">
                  <p className="flex-1 text-zinc-200 text-sm leading-relaxed">{line}</p>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => toggle(key)}
                      className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-brand-gold transition"
                    >
                      <Flame className={`size-3.5 ${count > 0 ? "text-brand-gold" : ""}`} /> {count}
                    </button>
                    <div className="flex gap-1">
                      <button
                        onClick={async () => {
                          const ok = await copyToClipboard(line);
                          ok ? toast.success("Copied. Use wisely.") : toast.error("Copy failed.");
                        }}
                        className="size-8 grid place-items-center rounded-lg hover:bg-white/5 text-zinc-400 hover:text-zinc-50 transition"
                        aria-label="Copy"
                      >
                        <Copy className="size-3.5" />
                      </button>
                      <button
                        onClick={() => shareWhatsApp(line)}
                        className="size-8 grid place-items-center rounded-lg hover:bg-white/5 text-zinc-400 hover:text-zinc-50 transition"
                        aria-label="Share"
                      >
                        <Share2 className="size-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
