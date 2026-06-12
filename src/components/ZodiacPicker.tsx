import { ZODIACS, type Zodiac } from "../data/astro-combos";

interface Props {
  value: Zodiac | null;
  onChange: (z: Zodiac) => void;
  label?: string;
}

export function ZodiacPicker({ value, onChange, label }: Props) {
  return (
    <div className="space-y-3">
      {label && <p className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium">{label}</p>}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {ZODIACS.map((z) => {
          const active = value === z.sign;
          return (
            <button
              key={z.sign}
              onClick={() => onChange(z.sign)}
              className={`aspect-square rounded-2xl ring-1 transition flex flex-col items-center justify-center gap-1 ${
                active
                  ? "bg-brand-purple/15 ring-brand-purple text-zinc-50"
                  : "glass ring-white/8 text-zinc-400 hover:ring-white/20 hover:text-zinc-200"
              }`}
            >
              <span className="text-2xl">{z.symbol}</span>
              <span className="text-[10px] font-medium uppercase tracking-wider">{z.sign}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
