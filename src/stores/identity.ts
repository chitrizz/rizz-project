import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SavedIdentity {
  cardNumber: string;
  score: number;
  rankTitle: string;
  rankEmoji: string;
  rarity: string;
  traits: string[];
  createdAt: number;
}

interface IdentityState {
  latest: SavedIdentity | null;
  history: SavedIdentity[];
  save: (i: SavedIdentity) => void;
  clear: () => void;
}

export const useIdentity = create<IdentityState>()(
  persist(
    (set) => ({
      latest: null,
      history: [],
      save: (i) =>
        set((s) => ({
          latest: i,
          history: [i, ...s.history].slice(0, 10),
        })),
      clear: () => set({ latest: null, history: [] }),
    }),
    { name: "rizz-identity-v1" }
  )
);
