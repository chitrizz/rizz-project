import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ArenaPost {
  id: string;
  author: string;
  category: string;
  line: string;
  createdAt: number;
  upvotes: number;
  downvotes: number;
  myVote?: "up" | "down" | null;
}

interface ArenaState {
  posts: ArenaPost[];
  addPost: (p: Omit<ArenaPost, "id" | "createdAt" | "upvotes" | "downvotes" | "myVote">) => void;
  vote: (id: string, dir: "up" | "down") => void;
  seed: () => void;
}

const SEEDED: ArenaPost[] = [
  { id: "s1", author: "CosmicRizzler812", category: "Corporate", line: "Are you a merger? Because I feel a strong synergy between us.", createdAt: Date.now() - 1000 * 60 * 12, upvotes: 1247, downvotes: 41, myVote: null },
  { id: "s2", author: "SmoothPotato342", category: "Bollywood", line: "Tujh mein Rab dikhta hai — yeh one-liner nahi, sachai hai.", createdAt: Date.now() - 1000 * 60 * 33, upvotes: 982, downvotes: 88, myVote: null },
  { id: "s3", author: "NeonMonk104", category: "Cute", line: "I wasn't planning on staying long, but then you happened.", createdAt: Date.now() - 1000 * 60 * 47, upvotes: 2103, downvotes: 22, myVote: null },
  { id: "s4", author: "FlirtyPenguin221", category: "Dark Humor", line: "Are you a graveyard? Because I dig you.", createdAt: Date.now() - 1000 * 60 * 75, upvotes: 612, downvotes: 401, myVote: null },
  { id: "s5", author: "QuietBandit908", category: "Tech", line: "Are you JavaScript? You make my heart React.", createdAt: Date.now() - 1000 * 60 * 92, upvotes: 1789, downvotes: 130, myVote: null },
  { id: "s6", author: "MidnightSage615", category: "Romantic", line: "Your laugh is the melody I want on repeat for the rest of my life.", createdAt: Date.now() - 1000 * 60 * 100, upvotes: 2410, downvotes: 31, myVote: null },
  { id: "s7", author: "FeralCharmer400", category: "Gym", line: "I came for gains, but I found you instead.", createdAt: Date.now() - 1000 * 60 * 144, upvotes: 808, downvotes: 92, myVote: null },
  { id: "s8", author: "VelvetWizard199", category: "Anime", line: "You're the plot twist I never saw coming but always needed.", createdAt: Date.now() - 1000 * 60 * 180, upvotes: 1320, downvotes: 60, myVote: null },
  { id: "s9", author: "ChaoticDaydreamer", category: "Desi", line: "Tumhe dekh ke laga, biodata wapas refresh karna padega.", createdAt: Date.now() - 1000 * 60 * 222, upvotes: 1996, downvotes: 47, myVote: null },
  { id: "s10", author: "StoicHeartbreak11", category: "Finance", line: "I'd never short-sell you — you're a long-term hold.", createdAt: Date.now() - 1000 * 60 * 260, upvotes: 944, downvotes: 28, myVote: null },
  { id: "s11", author: "WiredSiren77", category: "Travel", line: "Forget compass — my heart only points to you.", createdAt: Date.now() - 1000 * 60 * 300, upvotes: 715, downvotes: 55, myVote: null },
  { id: "s12", author: "RoyalOperator88", category: "Luxury", line: "Even Cartier couldn't design anything as stunning as you.", createdAt: Date.now() - 1000 * 60 * 360, upvotes: 1411, downvotes: 49, myVote: null },
];

export const useArena = create<ArenaState>()(
  persist(
    (set, get) => ({
      posts: SEEDED,
      seed: () => {
        if (get().posts.length === 0) set({ posts: SEEDED });
      },
      addPost: (p) =>
        set((s) => ({
          posts: [
            { ...p, id: crypto.randomUUID(), createdAt: Date.now(), upvotes: 1, downvotes: 0, myVote: "up" },
            ...s.posts,
          ],
        })),
      vote: (id, dir) =>
        set((s) => ({
          posts: s.posts.map((p) => {
            if (p.id !== id) return p;
            let { upvotes, downvotes, myVote } = p;
            if (myVote === dir) {
              if (dir === "up") upvotes--; else downvotes--;
              myVote = null;
            } else {
              if (myVote === "up") upvotes--;
              if (myVote === "down") downvotes--;
              if (dir === "up") upvotes++; else downvotes++;
              myVote = dir;
            }
            return { ...p, upvotes, downvotes, myVote };
          }),
        })),
    }),
    { name: "rizz-arena-v1" }
  )
);
