import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRate, type RateVote } from "../stores/rate";
import { getAuthorName } from "../lib/anon-name";
import { SectionLabel } from "../components/SectionLabel";
import { SkewButton } from "../components/SkewButton";
import { Send, Plus, X } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/rate")({
  head: () => ({
    meta: [
      { title: "Rate My Rizz — The Verdict" },
      { name: "description", content: "Submit a pickup line or text. Community votes Smooth, Mid, or Cringe. Brutal honesty included." },
      { property: "og:title", content: "Rate My Rizz" },
      { property: "og:description", content: "Submit your line. The internet decides if it's Smooth, Mid, or Cringe." },
    ],
  }),
  component: RatePage,
});

const COLORS: Record<RateVote, { active: string; bar: string; emoji: string }> = {
  smooth: { active: "bg-[#d4ff00]/15 text-[#d4ff00] border-[#d4ff00]", bar: "bg-[#d4ff00]", emoji: "😎" },
  mid:    { active: "bg-[#ffd400]/15 text-[#ffd400] border-[#ffd400]", bar: "bg-[#ffd400]", emoji: "😐" },
  cringe: { active: "bg-[#ff2e93]/15 text-[#ff2e93] border-[#ff2e93]", bar: "bg-[#ff2e93]", emoji: "💀" },
};

function RatePage() {
  const entries = useRate((s) => s.entries);
  const vote = useRate((s) => s.vote);
  const add = useRate((s) => s.add);
  const [open, setOpen] = useState(false);

  return (
    <div className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
          <div>
            <SectionLabel index="06" label="Rate My Rizz" />
            <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]">
              Brutal
            </h1>
            <p className="font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]" style={{ textShadow: "0 0 30px rgba(212,255,0,0.35)" }}>
              honesty.
            </p>
            <p className="mt-6 text-white/60 max-w-xl text-lg">Post a line. Post a text. The community decides if you cooked or fumbled.</p>
          </div>
          <SkewButton onClick={() => setOpen(true)} size="lg"><Plus className="size-4" /> Submit Yours</SkewButton>
        </div>

        <div className="grid gap-px bg-white/10 border border-white/10">
          {entries.map((e) => {
            const total = e.smooth + e.mid + e.cringe || 1;
            return (
              <div key={e.id} className="bg-[#050505] hover:bg-[#0a0a0c] p-6 transition">
                <div className="flex items-center gap-2 mb-3 font-mono text-[10px] uppercase tracking-widest text-white/40">
                  <span className="text-white/70 font-bold">@{e.author}</span>
                  <span>·</span>
                  <span className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-white/60">{e.type}</span>
                </div>
                <p className="text-white text-base sm:text-lg leading-snug mb-5">{e.body}</p>

                <div className="h-1 w-full bg-white/5 overflow-hidden flex mb-4">
                  <div className={COLORS.smooth.bar + " h-full"} style={{ width: `${(e.smooth / total) * 100}%` }} />
                  <div className={COLORS.mid.bar + " h-full"} style={{ width: `${(e.mid / total) * 100}%` }} />
                  <div className={COLORS.cringe.bar + " h-full"} style={{ width: `${(e.cringe / total) * 100}%` }} />
                </div>

                <div className="flex gap-2 flex-wrap">
                  {(["smooth", "mid", "cringe"] as RateVote[]).map((v) => (
                    <button
                      key={v}
                      onClick={() => vote(e.id, v)}
                      className={`px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider border transition flex items-center gap-2 ${
                        e.myVote === v ? COLORS[v].active : "bg-[#0a0a0c] text-white/50 border-white/10 hover:text-white hover:border-white/30"
                      }`}
                    >
                      <span className="text-sm">{COLORS[v].emoji}</span>
                      {v} · {e[v]}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md glass-strong border border-white/15 holo-edge p-6 relative"
            >
              <button onClick={() => setOpen(false)} className="absolute top-4 right-4 size-8 grid place-items-center hover:bg-white/5" aria-label="Close">
                <X className="size-4 text-white/60" />
              </button>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Verdict Protocol</p>
              <h2 className="font-display text-3xl font-extrabold text-white uppercase tracking-tighter">Get rated.</h2>
              <p className="text-sm text-white/60 mt-2">Post anonymously. Take the L gracefully.</p>
              <SubmitForm
                onSubmit={(type, body) => {
                  add({ author: getAuthorName(), type, body });
                  toast.success("Posted. May the votes be ever in your favor.");
                  setOpen(false);
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SubmitForm({ onSubmit }: { onSubmit: (type: "Pickup Line" | "Text Message", body: string) => void }) {
  const [type, setType] = useState<"Pickup Line" | "Text Message">("Pickup Line");
  const [body, setBody] = useState("");
  return (
    <div className="mt-6 space-y-4">
      <div className="flex gap-1 border-b border-white/10">
        {(["Pickup Line", "Text Message"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-wider border-b-2 -mb-px transition ${
              type === t ? "border-[#d4ff00] text-[#d4ff00]" : "border-transparent text-white/40 hover:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={4}
        maxLength={280}
        placeholder="Paste what you sent…"
        className="w-full bg-[#0a0a0c] border border-white/15 px-3 py-2.5 text-sm text-white outline-none resize-none placeholder:text-white/25 focus:border-[#d4ff00]"
      />
      <p className="font-mono text-[10px] text-white/30 text-right">{body.length}/280</p>
      <SkewButton
        className="w-full"
        onClick={() => {
          if (body.trim().length < 6) { toast.error("A bit longer."); return; }
          onSubmit(type, body.trim());
          setBody("");
        }}
      >
        <Send className="size-4" /> Post for rating
      </SkewButton>
    </div>
  );
}
