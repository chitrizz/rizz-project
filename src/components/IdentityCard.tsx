import { forwardRef } from "react";
import { rankFor } from "../data/ranks";

interface Props {
  cardNumber: string;
  score: number;
  traits: string[];
  username?: string;
}

const RARITY_COLOR: Record<string, string> = {
  Common: "text-zinc-400 border-zinc-500/30 bg-zinc-500/10",
  Rare: "text-brand-cyan border-brand-cyan/30 bg-brand-cyan/10",
  Epic: "text-brand-purple border-brand-purple/30 bg-brand-purple/10",
  Legendary: "text-brand-gold border-brand-gold/30 bg-brand-gold/10",
  Mythic: "text-brand-magenta border-brand-magenta/30 bg-brand-magenta/10",
};

export const IdentityCard = forwardRef<HTMLDivElement, Props>(function IdentityCard(
  { cardNumber, score, traits, username = "Anonymous" },
  ref
) {
  const rank = rankFor(score);
  return (
    <div ref={ref} className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-6 bg-gradient-to-tr from-brand-purple/30 via-brand-cyan/20 to-brand-magenta/30 blur-3xl opacity-60" />
      <div className="relative aspect-[1.586/1] w-full glass-strong ring-1 ring-white/15 rounded-[28px] p-7 holo-edge shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Top */}
        <div className="flex justify-between items-start">
          <div className="space-y-1.5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-medium">Rizz Identity Card</p>
            <p className="font-display text-xl font-semibold text-zinc-50 tracking-tight">{username}</p>
          </div>
          <div className={`px-3 py-1 ring-1 rounded-full ${RARITY_COLOR[rank.rarity]}`}>
            <span className="text-[10px] font-semibold tracking-wider uppercase">{rank.rarity} Tier</span>
          </div>
        </div>

        {/* Middle — traits chips */}
        <div className="flex flex-wrap gap-1.5 -mt-2">
          {traits.map((t) => (
            <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-zinc-300 font-medium">
              {t}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">Rizz Score</p>
            <p className="font-display text-6xl font-semibold text-zinc-50 tracking-tighter leading-none">
              {score}
              <span className="text-2xl text-zinc-500">/100</span>
            </p>
            <div className="flex gap-5 pt-1">
              <div>
                <p className="text-[8px] uppercase tracking-widest text-zinc-500">Card No.</p>
                <p className="text-xs font-mono text-zinc-300">{cardNumber}</p>
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-widest text-zinc-500">Rank</p>
                <p className="text-xs font-medium text-zinc-300">{rank.title}</p>
              </div>
            </div>
          </div>
          <div className="text-5xl leading-none">{rank.emoji}</div>
        </div>

        {/* Watermark */}
        <div className="absolute bottom-3 left-7 text-[9px] uppercase tracking-[0.3em] text-zinc-700 font-medium">
          haverizz.com
        </div>
      </div>
    </div>
  );
});
