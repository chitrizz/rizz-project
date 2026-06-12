import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useArena, type ArenaPost } from "../stores/arena";
import { generateAnonName } from "../lib/anon-name";
import { RIZZ_CATEGORIES } from "../data/rizz-lines";
import { Flame, Snowflake, Send, Plus, X, Trophy } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/arena")({
  head: () => ({
    meta: [
      { title: "Rizz Battle Arena — Reddit-Style Community" },
      { name: "description", content: "Submit your best rizz lines. Community votes Fire (upvote) or Fizz (downvote). Climb the leaderboard." },
      { property: "og:title", content: "Rizz Battle Arena" },
      { property: "og:description", content: "Reddit-style rizz combat. Submit. Vote. Climb." },
    ],
  }),
  component: ArenaPage,
});

type Sort = "hot" | "new" | "top" | "controversial";

function sortPosts(posts: ArenaPost[], sort: Sort): ArenaPost[] {
  const arr = [...posts];
  if (sort === "new") return arr.sort((a, b) => b.createdAt - a.createdAt);
  if (sort === "top") return arr.sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));
  if (sort === "controversial") return arr.sort((a, b) => Math.min(b.upvotes, b.downvotes) - Math.min(a.upvotes, a.downvotes));
  // hot: net score / age
  return arr.sort((a, b) => {
    const ageA = (Date.now() - a.createdAt) / 3600000 + 1;
    const ageB = (Date.now() - b.createdAt) / 3600000 + 1;
    return ((b.upvotes - b.downvotes) / ageB) - ((a.upvotes - a.downvotes) / ageA);
  });
}

function ArenaPage() {
  const posts = useArena((s) => s.posts);
  const vote = useArena((s) => s.vote);
  const addPost = useArena((s) => s.addPost);
  const [sort, setSort] = useState<Sort>("hot");
  const [openSubmit, setOpenSubmit] = useState(false);

  const sorted = useMemo(() => sortPosts(posts, sort), [posts, sort]);
  const leaders = useMemo(
    () => [...posts].sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes)).slice(0, 5),
    [posts]
  );

  return (
    <div className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-2">Rizz Battle Arena</p>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold text-zinc-50 tracking-tighter">
              The <span className="text-gradient italic">Coliseum</span>
            </h1>
            <p className="text-zinc-400 mt-3 max-w-xl">Submit your best lines. Community fires 🔥 or fizzes 🧊. Climb the all-time leaderboard.</p>
          </div>
          <button
            onClick={() => setOpenSubmit(true)}
            className="h-12 bg-brand-purple text-white text-sm font-medium px-5 flex items-center gap-2 rounded-full hover:brightness-110 transition shadow-[0_0_30px_-10px_#a855f7]"
          >
            <Plus className="size-4" /> Submit a Line
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <div>
            <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
              {(["hot", "new", "top", "controversial"] as Sort[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setSort(s)}
                  className={`h-9 px-4 rounded-full text-xs font-medium ring-1 transition capitalize ${
                    sort === s ? "bg-zinc-50 text-zinc-950 ring-zinc-50" : "glass text-zinc-300 ring-white/10 hover:ring-white/20"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="grid gap-3">
              <AnimatePresence initial={false}>
                {sorted.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-5 rounded-2xl glass ring-1 ring-white/8 grid grid-cols-[auto_1fr] gap-5"
                  >
                    <div className="flex flex-col items-center gap-1.5 pt-1">
                      <button
                        onClick={() => vote(p.id, "up")}
                        className={`size-9 grid place-items-center rounded-lg transition ${
                          p.myVote === "up" ? "bg-brand-gold/15 text-brand-gold ring-1 ring-brand-gold/40" : "hover:bg-white/5 text-zinc-500 hover:text-brand-gold"
                        }`}
                        aria-label="Upvote"
                      >
                        <Flame className="size-4" />
                      </button>
                      <p className="font-display text-sm font-semibold text-zinc-50">{p.upvotes - p.downvotes}</p>
                      <button
                        onClick={() => vote(p.id, "down")}
                        className={`size-9 grid place-items-center rounded-lg transition ${
                          p.myVote === "down" ? "bg-brand-cyan/15 text-brand-cyan ring-1 ring-brand-cyan/40" : "hover:bg-white/5 text-zinc-500 hover:text-brand-cyan"
                        }`}
                        aria-label="Downvote"
                      >
                        <Snowflake className="size-4" />
                      </button>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-2 text-xs text-zinc-500">
                        <span className="text-zinc-300 font-medium">@{p.author}</span>
                        <span>·</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 ring-1 ring-white/10 text-zinc-400">{p.category}</span>
                        <span>·</span>
                        <span>{timeAgo(p.createdAt)}</span>
                      </div>
                      <p className="text-zinc-100 text-base leading-snug">{p.line}</p>
                      <div className="mt-3 flex items-center gap-4 text-[11px] text-zinc-500">
                        <span className="flex items-center gap-1"><Flame className="size-3 text-brand-gold" /> {p.upvotes}</span>
                        <span className="flex items-center gap-1"><Snowflake className="size-3 text-brand-cyan" /> {p.downvotes}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="p-5 rounded-2xl glass ring-1 ring-white/8">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="size-4 text-brand-gold" />
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">All-Time Top 5</p>
              </div>
              <div className="grid gap-3">
                {leaders.map((p, i) => (
                  <div key={p.id} className="flex gap-3">
                    <div className="font-display text-base font-semibold text-zinc-600 w-5">#{i + 1}</div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-zinc-300 truncate">@{p.author}</p>
                      <p className="text-xs text-zinc-500 truncate">{p.line}</p>
                      <p className="text-[10px] text-brand-gold mt-0.5">{p.upvotes - p.downvotes} net</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-2xl glass ring-1 ring-white/8 text-xs text-zinc-500 leading-relaxed">
              Your votes & posts live in your browser. Sync across devices is coming with accounts.
            </div>
          </aside>
        </div>
      </div>

      <SubmitModal
        open={openSubmit}
        onClose={() => setOpenSubmit(false)}
        onSubmit={(category, line) => {
          addPost({ author: generateAnonName(), category, line });
          toast.success("Dropped in the Arena. Good luck.");
          setOpenSubmit(false);
        }}
      />
    </div>
  );
}

function SubmitModal({ open, onClose, onSubmit }: { open: boolean; onClose: () => void; onSubmit: (cat: string, line: string) => void }) {
  const [line, setLine] = useState("");
  const [cat, setCat] = useState(RIZZ_CATEGORIES[0].name);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md glass-strong ring-1 ring-white/12 rounded-3xl p-6 relative"
          >
            <button onClick={onClose} className="absolute top-4 right-4 size-8 grid place-items-center rounded-full hover:bg-white/5" aria-label="Close">
              <X className="size-4 text-zinc-400" />
            </button>
            <h2 className="font-display text-2xl font-semibold text-zinc-50">Submit a line</h2>
            <p className="text-sm text-zinc-500 mt-1">You'll post anonymously. Let the people decide.</p>

            <div className="mt-5 space-y-3">
              <div>
                <label className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium">Category</label>
                <select
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                  className="mt-1.5 w-full h-10 glass ring-1 ring-white/10 rounded-xl px-3 text-sm text-zinc-50 outline-none"
                >
                  {RIZZ_CATEGORIES.map((c) => (
                    <option key={c.id} value={c.name} className="bg-zinc-900">{c.emoji} {c.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium">Your line</label>
                <textarea
                  value={line}
                  onChange={(e) => setLine(e.target.value)}
                  rows={4}
                  maxLength={240}
                  placeholder="Drop your best one-liner…"
                  className="mt-1.5 w-full glass ring-1 ring-white/10 rounded-xl px-3 py-2.5 text-sm text-zinc-50 outline-none resize-none placeholder:text-zinc-600"
                />
                <p className="text-[10px] text-zinc-600 text-right mt-1">{line.length}/240</p>
              </div>
            </div>

            <button
              onClick={() => {
                if (line.trim().length < 6) { toast.error("A bit longer, please."); return; }
                onSubmit(cat, line.trim());
                setLine("");
              }}
              className="mt-5 w-full h-11 rounded-full bg-brand-purple text-white font-medium text-sm hover:brightness-110 transition flex items-center justify-center gap-2"
            >
              <Send className="size-4" /> Post anonymously
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function timeAgo(ts: number): string {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}
