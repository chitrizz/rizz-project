import { ZODIACS, type Zodiac } from "../data/astro-combos";

interface Props {
  value: Zodiac | null;
  onChange: (z: Zodiac) => void;
  label?: string;
}

export function ZodiacPicker({ value, onChange, label }: Props) {
  return (
    <div className="space-y-3">
      {label && <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">{label}</p>}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {ZODIACS.map((z) => {
          const active = value === z.sign;
          return (
            <button
              key={z.sign}
              onClick={() => onChange(z.sign)}
              className={`aspect-square rounded-md border transition flex flex-col items-center justify-center gap-1 ${
                active
                  ? "bg-[#d4ff00]/10 border-[#d4ff00] text-white shadow-[0_0_20px_-6px_#d4ff00]"
                  : "glass border-white/10 text-white/50 hover:border-white/30 hover:text-white"
              }`}
            >
              <span className="text-2xl">{z.symbol}</span>
              <span className="font-mono text-[9px] font-bold uppercase tracking-wider">{z.sign}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
