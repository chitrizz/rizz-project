import { create } from "zustand";
import { persist } from "zustand/middleware";

export type RateVote = "smooth" | "mid" | "cringe";

export interface RateEntry {
  id: string;
  author: string;
  type: "Pickup Line" | "Text Message";
  body: string;
  createdAt: number;
  smooth: number;
  mid: number;
  cringe: number;
  myVote: RateVote | null;
}

interface RateState {
  entries: RateEntry[];
  add: (e: Omit<RateEntry, "id" | "createdAt" | "smooth" | "mid" | "cringe" | "myVote">) => void;
  vote: (id: string, v: RateVote) => void;
}

const SEEDED: RateEntry[] = [
  { id: "r1", author: "CosmicRizzler812", type: "Pickup Line", body: "Are you a parking ticket? Because you've got 'fine' written all over you.", createdAt: Date.now() - 3.6e6, smooth: 412, mid: 219, cringe: 1804, myVote: null },
  { id: "r2", author: "VelvetWizard199", type: "Text Message", body: "I was going to text you a meme, but meeting you in person seemed more efficient.", createdAt: Date.now() - 7.2e6, smooth: 2103, mid: 188, cringe: 41, myVote: null },
  { id: "r3", author: "SmoothPotato342", type: "Pickup Line", body: "Aap roti ho, main daal — combo banaya hi gaya hai.", createdAt: Date.now() - 10e6, smooth: 1644, mid: 322, cringe: 110, myVote: null },
  { id: "r4", author: "NeonMonk104", type: "Text Message", body: "If you were a Sunday morning, I'd never set an alarm again.", createdAt: Date.now() - 15e6, smooth: 1980, mid: 200, cringe: 60, myVote: null },
  { id: "r5", author: "ChaoticDaydreamer", type: "Pickup Line", body: "Are you Wi-Fi? I'm not getting a signal from anyone else.", createdAt: Date.now() - 22e6, smooth: 740, mid: 510, cringe: 880, myVote: null },
  { id: "r6", author: "StoicHeartbreak11", type: "Text Message", body: "I'm not great at pickup lines, but I'm excellent at dinner reservations.", createdAt: Date.now() - 30e6, smooth: 2310, mid: 140, cringe: 22, myVote: null },
];

export const useRate = create<RateState>()(
  persist(
    (set) => ({
      entries: SEEDED,
      add: (e) =>
        set((s) => ({
          entries: [
            { ...e, id: crypto.randomUUID(), createdAt: Date.now(), smooth: 0, mid: 0, cringe: 0, myVote: null },
            ...s.entries,
          ],
        })),
      vote: (id, v) =>
        set((s) => ({
          entries: s.entries.map((e) => {
            if (e.id !== id) return e;
            const next = { ...e };
            if (e.myVote) next[e.myVote] = Math.max(0, next[e.myVote] - 1);
            if (e.myVote === v) { next.myVote = null; return next; }
            next[v]++;
            next.myVote = v;
            return next;
          }),
        })),
    }),
    { name: "rizz-rate-v1" }
  )
);
