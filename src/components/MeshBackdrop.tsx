export function MeshBackdrop() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#d4ff00]/12 blur-[140px] rounded-full animate-mesh" />
      <div className="absolute top-[10%] -right-[10%] w-[55%] h-[55%] bg-[#22d3ee]/10 blur-[140px] rounded-full animate-mesh" style={{ animationDelay: "-6s" }} />
      <div className="absolute -bottom-[20%] left-[15%] w-[70%] h-[60%] bg-[#ff2e93]/8 blur-[140px] rounded-full animate-mesh" style={{ animationDelay: "-12s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,#050505_85%)]" />
    </div>
  );
}
