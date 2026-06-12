import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRate, type RateVote } from "../stores/rate";
import { generateAnonName } from "../lib/anon-name";
import { Send, Plus, X } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/rate")({
  head: () => ({
    meta: [
      { title: "Rate My Rizz" },
      { name: "description", content: "Submit a pickup line or text. Community votes Smooth, Mid, or Cringe. Brutal honesty included." },
      { property: "og:title", content: "Rate My Rizz" },
      { property: "og:description", content: "Submit your line. The internet decides if it's Smooth, Mid, or Cringe." },
    ],
  }),
  component: RatePage,
});

const COLORS: Record<RateVote, string> = {
  smooth: "bg-success/15 text-success ring-success/30",
  mid: "bg-brand-gold/15 text-brand-gold ring-brand-gold/30",
  cringe: "bg-danger/15 text-danger ring-danger/30",
};

function RatePage() {
  const entries = useRate((s) => s.entries);
  const vote = useRate((s) => s.vote);
  const add = useRate((s) => s.add);
  const [open, setOpen] = useState(false);

  return (
    <div className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2">Rate My Rizz</p>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-zinc-50 tracking-tighter">
              <span className="text-gradient italic">Brutal</span> Honesty.
            </h1>
            <p className="text-zinc-400 mt-3 max-w-xl">Post a line. Post a text. The community decides if you cooked or fumbled.</p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="h-12 bg-brand-purple text-white text-sm font-medium px-5 flex items-center gap-2 rounded-full hover:brightness-110 transition shadow-[0_0_30px_-10px_#a855f7]"
          >
            <Plus className="size-4" /> Submit Yours
          </button>
        </div>

        <div className="grid gap-3">
          {entries.map((e) => {
            const total = e.smooth + e.mid + e.cringe || 1;
            return (
              <div key={e.id} className="p-5 rounded-2xl glass ring-1 ring-white/8">
                <div className="flex items-center gap-2 mb-2 text-xs text-zinc-500">
                  <span className="text-zinc-300 font-medium">@{e.author}</span>
                  <span>·</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 ring-1 ring-white/10 text-zinc-400">{e.type}</span>
                </div>
                <p className="text-zinc-100 text-base sm:text-lg leading-snug mb-4">{e.body}</p>

                {/* bar */}
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex mb-3">
                  <div className="bg-success h-full" style={{ width: `${(e.smooth / total) * 100}%` }} />
                  <div className="bg-brand-gold h-full" style={{ width: `${(e.mid / total) * 100}%` }} />
                  <div className="bg-danger h-full" style={{ width: `${(e.cringe / total) * 100}%` }} />
                </div>

                <div className="flex gap-2 flex-wrap">
                  {(["smooth", "mid", "cringe"] as RateVote[]).map((v) => (
                    <button
                      key={v}
                      onClick={() => vote(e.id, v)}
                      className={`h-9 px-4 rounded-full text-xs font-medium ring-1 capitalize transition ${
                        e.myVote === v ? COLORS[v] : "glass text-zinc-400 ring-white/10 hover:ring-white/25"
                      }`}
                    >
                      {v === "smooth" ? "😎" : v === "mid" ? "😐" : "💀"} {v} · {e[v]}
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
            className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md glass-strong ring-1 ring-white/12 rounded-3xl p-6 relative"
            >
              <button onClick={() => setOpen(false)} className="absolute top-4 right-4 size-8 grid place-items-center rounded-full hover:bg-white/5" aria-label="Close">
                <X className="size-4 text-zinc-400" />
              </button>
              <h2 className="font-display text-2xl font-semibold text-zinc-50">Get rated</h2>
              <p className="text-sm text-zinc-500 mt-1">Post anonymously. Take the L gracefully.</p>
              <SubmitForm
                onSubmit={(type, body) => {
                  add({ author: generateAnonName(), type, body });
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
    <div className="mt-5 space-y-3">
      <div className="flex gap-2">
        {(["Pickup Line", "Text Message"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`h-9 px-4 rounded-full text-xs font-medium ring-1 transition ${
              type === t ? "bg-zinc-50 text-zinc-950 ring-zinc-50" : "glass text-zinc-300 ring-white/10 hover:ring-white/20"
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
        className="w-full glass ring-1 ring-white/10 rounded-xl px-3 py-2.5 text-sm text-zinc-50 outline-none resize-none placeholder:text-zinc-600"
      />
      <p className="text-[10px] text-zinc-600 text-right">{body.length}/280</p>
      <button
        onClick={() => {
          if (body.trim().length < 6) { toast.error("A bit longer."); return; }
          onSubmit(type, body.trim());
          setBody("");
        }}
        className="w-full h-11 rounded-full bg-brand-purple text-white font-medium text-sm hover:brightness-110 transition flex items-center justify-center gap-2"
      >
        <Send className="size-4" /> Post for rating
      </button>
    </div>
  );
}
