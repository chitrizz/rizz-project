import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useArena, type ArenaPost } from "../stores/arena";
import { getAuthorName } from "../lib/anon-name";
import { RIZZ_CATEGORIES } from "../data/rizz-lines";
import { SectionLabel } from "../components/SectionLabel";
import { SkewButton } from "../components/SkewButton";
import { Flame, Snowflake, Send, Plus, X, Trophy } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/arena")({
  head: () => ({
    meta: [
      { title: "Rizz Battle Arena — Community Combat" },
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
        <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
          <div>
            <SectionLabel index="05" label="Battle Arena" />
            <h1 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]">
              The
            </h1>
            <p className="font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]" style={{ textShadow: "0 0 30px rgba(212,255,0,0.35)" }}>
              Coliseum.
            </p>
            <p className="mt-6 text-white/60 max-w-xl text-lg">Submit your best lines. Community fires 🔥 or fizzes 🧊. Climb the all-time leaderboard.</p>
          </div>
          <SkewButton onClick={() => setOpenSubmit(true)} size="lg"><Plus className="size-4" /> Submit Line</SkewButton>
        </div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-8">
          <div>
            <div className="flex gap-1 mb-6 border-b border-white/10 overflow-x-auto no-scrollbar">
              {(["hot", "new", "top", "controversial"] as Sort[]).map((s) => (
                <button
                  key={s}
                  onClick={() => setSort(s)}
                  className={`px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-wider border-b-2 -mb-px transition ${
                    sort === s ? "border-[#d4ff00] text-[#d4ff00]" : "border-transparent text-white/40 hover:text-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="grid gap-px bg-white/10 border border-white/10">
              <AnimatePresence initial={false}>
                {sorted.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-[#050505] hover:bg-[#0a0a0c] p-5 grid grid-cols-[auto_1fr] gap-5 transition"
                  >
                    <div className="flex flex-col items-center gap-1.5 pt-1">
                      <button
                        onClick={() => vote(p.id, "up")}
                        className={`size-10 grid place-items-center border transition ${
                          p.myVote === "up" ? "bg-[#d4ff00]/15 text-[#d4ff00] border-[#d4ff00]" : "border-white/10 text-white/40 hover:text-[#d4ff00] hover:border-[#d4ff00]/50"
                        }`}
                        aria-label="Upvote"
                      >
                        <Flame className="size-4" />
                      </button>
                      <p className="font-display text-base font-extrabold text-white tracking-tight">{p.upvotes - p.downvotes}</p>
                      <button
                        onClick={() => vote(p.id, "down")}
                        className={`size-10 grid place-items-center border transition ${
                          p.myVote === "down" ? "bg-[#ff2e93]/15 text-[#ff2e93] border-[#ff2e93]" : "border-white/10 text-white/40 hover:text-[#ff2e93] hover:border-[#ff2e93]/50"
                        }`}
                        aria-label="Downvote"
                      >
                        <Snowflake className="size-4" />
                      </button>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-2 font-mono text-[10px] uppercase tracking-widest text-white/40">
                        <span className="text-white/70 font-bold">@{p.author}</span>
                        <span>·</span>
                        <span className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-white/60">{p.category}</span>
                        <span>·</span>
                        <span>{timeAgo(p.createdAt)}</span>
                      </div>
                      <p className="text-white text-base sm:text-lg leading-snug">{p.line}</p>
                      <div className="mt-3 flex items-center gap-4 font-mono text-[10px] text-white/40 uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Flame className="size-3 text-[#d4ff00]" /> {p.upvotes}</span>
                        <span className="flex items-center gap-1"><Snowflake className="size-3 text-[#ff2e93]" /> {p.downvotes}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="p-5 border border-white/10 bg-[#0a0a0c] holo-edge">
              <div className="flex items-center gap-2 mb-5">
                <Trophy className="size-4 text-[#d4ff00]" />
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/60 font-bold">All-Time Top 5</p>
              </div>
              <div className="grid gap-4">
                {leaders.map((p, i) => (
                  <div key={p.id} className="flex gap-3 border-t border-white/5 first:border-0 pt-4 first:pt-0">
                    <div className="font-display text-xl font-extrabold text-[#d4ff00] w-7 leading-none">{String(i + 1).padStart(2, "0")}</div>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] font-bold text-white uppercase tracking-widest truncate">@{p.author}</p>
                      <p className="text-xs text-white/50 truncate mt-1">{p.line}</p>
                      <p className="font-mono text-[10px] text-[#d4ff00] mt-1">+{p.upvotes - p.downvotes} net</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 border border-white/10 bg-[#0a0a0c] font-mono text-[10px] uppercase tracking-widest text-white/40 leading-relaxed">
              Your votes & posts live in your browser. Cross-device sync ships with accounts.
            </div>
          </aside>
        </div>
      </div>

      <SubmitModal
        open={openSubmit}
        onClose={() => setOpenSubmit(false)}
        onSubmit={(category, line) => {
          addPost({ author: getAuthorName(), category, line });
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
          className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md glass-strong border border-white/15 holo-edge p-6 relative"
          >
            <button onClick={onClose} className="absolute top-4 right-4 size-8 grid place-items-center hover:bg-white/5" aria-label="Close">
              <X className="size-4 text-white/60" />
            </button>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Submission Protocol</p>
            <h2 className="font-display text-3xl font-extrabold text-white uppercase tracking-tighter">Drop a line.</h2>
            <p className="text-sm text-white/60 mt-2">You'll post anonymously. Let the people decide.</p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold">Category</label>
                <select
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                  className="mt-1.5 w-full h-10 bg-[#0a0a0c] border border-white/15 px-3 text-sm text-white outline-none focus:border-[#d4ff00]"
                >
                  {RIZZ_CATEGORIES.map((c) => (
                    <option key={c.id} value={c.name} className="bg-zinc-900">{c.emoji} {c.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold">Your line</label>
                <textarea
                  value={line}
                  onChange={(e) => setLine(e.target.value)}
                  rows={4}
                  maxLength={240}
                  placeholder="Drop your best one-liner…"
                  className="mt-1.5 w-full bg-[#0a0a0c] border border-white/15 px-3 py-2.5 text-sm text-white outline-none resize-none placeholder:text-white/25 focus:border-[#d4ff00]"
                />
                <p className="font-mono text-[10px] text-white/30 text-right mt-1">{line.length}/240</p>
              </div>
            </div>

            <SkewButton
              className="mt-6 w-full"
              onClick={() => {
                if (line.trim().length < 6) { toast.error("A bit longer, please."); return; }
                onSubmit(cat, line.trim());
                setLine("");
              }}
            >
              <Send className="size-4" /> Post anonymously
            </SkewButton>
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
