import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  speed?: "fast" | "normal" | "slow";
  className?: string;
  reverse?: boolean;
}

export function Marquee({ children, speed = "normal", className, reverse }: Props) {
  const anim = speed === "fast" ? "animate-marquee-fast" : speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  return (
    <div className={`relative w-full overflow-hidden ${className ?? ""}`}>
      <div className={`flex w-max ${anim}`} style={reverse ? { animationDirection: "reverse" } : undefined}>
        <div className="flex shrink-0 items-center gap-12 pr-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden>{children}</div>
      </div>
    </div>
  );
}
