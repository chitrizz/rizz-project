export function Grain() {
  return (
    <div
      aria-hidden
      className="grain-bg pointer-events-none fixed inset-0 z-[60] opacity-[0.08] mix-blend-overlay animate-grain"
      style={{ backgroundSize: "160px 160px" }}
    />
  );
}
