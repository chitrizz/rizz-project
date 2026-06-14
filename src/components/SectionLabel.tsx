interface Props {
  index: string;
  label: string;
  tone?: "lime" | "white";
}
export function SectionLabel({ index, label, tone = "lime" }: Props) {
  return (
    <div className="flex items-center gap-3 font-mono">
      <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${tone === "lime" ? "text-[#d4ff00]" : "text-white"}`}>{index}</span>
      <span className="h-px w-8 bg-white/20" />
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/60">{label}</span>
    </div>
  );
}
