export function MeshBackdrop() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-brand-purple/15 blur-[120px] rounded-full animate-mesh" />
      <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] bg-brand-cyan/12 blur-[120px] rounded-full animate-mesh" style={{ animationDelay: "-5s" }} />
      <div className="absolute -bottom-[20%] left-[20%] w-[70%] h-[60%] bg-brand-magenta/8 blur-[120px] rounded-full animate-mesh" style={{ animationDelay: "-10s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,#0A0A0A_85%)]" />
    </div>
  );
}
