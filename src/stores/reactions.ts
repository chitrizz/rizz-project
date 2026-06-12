import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ReactionState {
  counts: Record<string, number>; // key = `${category}-${index}`
  toggle: (key: string) => void;
}

export const useReactions = create<ReactionState>()(
  persist(
    (set) => ({
      counts: {},
      toggle: (key) =>
        set((s) => {
          const cur = s.counts[key] ?? 0;
          return { counts: { ...s.counts, [key]: cur + 1 } };
        }),
    }),
    { name: "rizz-reactions-v1" }
  )
);
