import { forwardRef } from "react";
import { rankFor } from "../data/ranks";
import { TiltCard } from "./TiltCard";

interface Props {
  cardNumber: string;
  score: number;
  traits: string[];
  username?: string;
  tilt?: boolean;
}

const RARITY_COLOR: Record<string, string> = {
  Common:    "text-white/70 border-white/20 bg-white/5",
  Rare:      "text-[#22d3ee] border-[#22d3ee]/40 bg-[#22d3ee]/10",
  Epic:      "text-[#ff2e93] border-[#ff2e93]/40 bg-[#ff2e93]/10",
  Legendary: "text-[#ffd400] border-[#ffd400]/40 bg-[#ffd400]/10",
  Mythic:    "text-[#d4ff00] border-[#d4ff00]/50 bg-[#d4ff00]/10",
};

const Inner = forwardRef<HTMLDivElement, Props>(function Inner(
  { cardNumber, score, traits, username = "Subject Zero" }, ref
) {
  const rank = rankFor(score);
  return (
    <div ref={ref} className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-6 bg-[#d4ff00]/15 blur-3xl rounded-full pointer-events-none" />
      <div className="relative aspect-[1.586/1] w-full glass-strong border border-white/15 rounded-2xl p-6 sm:p-7 holo-edge shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#d4ff00]/20 blur-2xl rounded-full pointer-events-none" />
        <div className="grain-bg absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" style={{ backgroundSize: "140px 140px" }} />

        {/* Top */}
        <div className="relative flex justify-between items-start">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">Identity Document</p>
            <p className="font-display text-xl font-bold text-white tracking-tight uppercase">{cardNumber}</p>
          </div>
          <div className={`px-2.5 py-1 border rounded-md ${RARITY_COLOR[rank.rarity]}`}>
            <span className="text-[9px] font-bold tracking-widest uppercase font-mono">{rank.rarity}</span>
          </div>
        </div>

        {/* Middle bar */}
        <div className="relative mt-5 space-y-2">
          <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
            <div
              className="h-full bg-[#d4ff00] shadow-[0_0_10px_#d4ff00]"
              style={{ width: `${score}%` }}
            />
          </div>
          <div className="flex justify-between font-mono text-[9px] uppercase font-bold tracking-widest">
            <span className="text-[#d4ff00]">Charisma Level</span>
            <span className="text-white/70">{rank.title}</span>
          </div>
        </div>

        {/* Traits */}
        <div className="relative flex flex-wrap gap-1.5 mt-4">
          {traits.slice(0, 4).map((t) => (
            <span key={t} className="text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70 font-mono uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="relative mt-5 flex items-end justify-between">
          <div className="space-y-1">
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">Bearer</p>
            <p className="text-base font-medium text-white tracking-tight">{username}</p>
          </div>
          <div className="text-right">
            <p className="font-display text-[44px] font-bold text-white leading-none tracking-tighter">{score}</p>
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/40 mt-0.5">Rizz Score / 100</p>
          </div>
        </div>

        <div className="absolute bottom-2 left-7 font-mono text-[8px] uppercase tracking-[0.3em] text-white/15">
          haverizz.com · v2.0.4
        </div>
      </div>
    </div>
  );
});

export const IdentityCard = forwardRef<HTMLDivElement, Props>(function IdentityCard(props, ref) {
  if (props.tilt === false) return <Inner ref={ref} {...props} />;
  return (
    <TiltCard className="w-full">
      <Inner ref={ref} {...props} />
    </TiltCard>
  );
});
