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
  Common:    "text-white/80 border-white/25 bg-white/5",
  Rare:      "text-[#22d3ee] border-[#22d3ee]/50 bg-[#22d3ee]/10",
  Epic:      "text-[#ff2e93] border-[#ff2e93]/50 bg-[#ff2e93]/10",
  Legendary: "text-[#ffd400] border-[#ffd400]/50 bg-[#ffd400]/10",
  Mythic:    "text-[#d4ff00] border-[#d4ff00]/60 bg-[#d4ff00]/10",
};

const Inner = forwardRef<HTMLDivElement, Props>(function Inner(
  { cardNumber, score, traits, username = "Subject Zero" }, ref
) {
  const rank = rankFor(score);
  return (
    <div ref={ref} className="relative w-full max-w-md mx-auto" style={{ transform: "translateZ(0)" }}>
      {/* outer glow */}
      <div className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_20%,rgba(212,255,0,0.35),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(255,46,147,0.3),transparent_60%)] blur-3xl pointer-events-none" />

      <div
        className="relative aspect-[1.586/1] w-full rounded-[20px] p-6 sm:p-7 overflow-hidden holo-frame"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0c 0%, #121214 55%, #0a0a0c 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 0 0 1px rgba(255,255,255,0.04), 0 30px 80px -20px rgba(0,0,0,0.7), 0 0 60px -20px rgba(212,255,0,0.25)",
        }}
      >
        {/* iridescent base wash */}
        <div
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(110% 80% at 0% 0%, rgba(212,255,0,0.18), transparent 55%), radial-gradient(110% 80% at 100% 100%, rgba(255,46,147,0.18), transparent 55%), radial-gradient(90% 60% at 80% 10%, rgba(34,211,238,0.15), transparent 60%)",
            mixBlendMode: "screen",
          }}
        />
        {/* moving sheen */}
        <div className="absolute inset-0 holo-sheen rounded-[20px]" />
        {/* cursor-follow specular highlight (uses TiltCard --mx/--my) */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-70"
          style={{
            background:
              "radial-gradient(220px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.22), transparent 60%)",
            mixBlendMode: "screen",
          }}
        />
        {/* grain */}
        <div
          className="grain-bg absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
          style={{ backgroundSize: "140px 140px" }}
        />

        {/* Top */}
        <div className="relative flex justify-between items-start">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45 mb-1">Identity · Document</p>
            <p className="font-display text-xl font-bold text-white tracking-tight uppercase">{cardNumber}</p>
          </div>
          <div className={`px-2.5 py-1 border rounded-md backdrop-blur-sm ${RARITY_COLOR[rank.rarity]}`}>
            <span className="text-[9px] font-bold tracking-widest uppercase font-mono">{rank.rarity}</span>
          </div>
        </div>

        {/* Holo chip + barcode row */}
        <div className="relative mt-3 flex items-center gap-3">
          <div
            className="h-7 w-10 rounded-[4px] relative overflow-hidden"
            style={{
              background:
                "conic-gradient(from 200deg at 50% 50%, #d4ff00, #22d3ee, #ff2e93, #ffd400, #d4ff00)",
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.4), inset 0 0 8px rgba(255,255,255,0.4)",
            }}
          >
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-px p-px opacity-60">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-black/40" />
              ))}
            </div>
          </div>
          <div className="flex gap-[2px] items-end h-6 flex-1">
            {Array.from({ length: 32 }).map((_, i) => (
              <span
                key={i}
                className="bg-white/30"
                style={{ width: 1.5, height: `${30 + ((i * 53) % 70)}%` }}
              />
            ))}
          </div>
        </div>

        {/* Middle bar */}
        <div className="relative mt-4 space-y-2">
          <div className="h-1.5 bg-white/10 w-full rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${score}%`,
                background: "linear-gradient(90deg, #d4ff00, #22d3ee, #ff2e93)",
                boxShadow: "0 0 12px rgba(212,255,0,0.6)",
              }}
            />
          </div>
          <div className="flex justify-between font-mono text-[9px] uppercase font-bold tracking-widest">
            <span className="text-[#d4ff00]">Charisma Level</span>
            <span className="text-white/80">{rank.title}</span>
          </div>
        </div>

        {/* Traits */}
        <div className="relative flex flex-wrap gap-1.5 mt-3">
          {traits.slice(0, 4).map((t) => (
            <span key={t} className="text-[9px] px-2 py-0.5 rounded bg-white/[0.06] border border-white/15 text-white/80 font-mono uppercase tracking-wider backdrop-blur-sm">
              {t}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="relative mt-4 flex items-end justify-between">
          <div className="space-y-1">
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/45">Bearer</p>
            <p className="text-base font-medium text-white tracking-tight">{username}</p>
          </div>
          <div className="text-right">
            <p
              className="font-display text-[48px] font-bold leading-none tracking-tighter"
              style={{
                background: "linear-gradient(180deg, #ffffff 0%, #d4ff00 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                filter: "drop-shadow(0 0 8px rgba(212,255,0,0.35))",
              }}
            >
              {score}
            </p>
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/45 mt-0.5">Rizz Score / 100</p>
          </div>
        </div>

        <div className="absolute bottom-2 left-7 font-mono text-[8px] uppercase tracking-[0.3em] text-white/20">
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
