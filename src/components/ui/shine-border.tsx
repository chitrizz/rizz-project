"use client";

import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: ReactNode;
}

/**
 * Shine Border — animated gradient outline. Tailwind v4 friendly.
 * Uses CSS mask trick so only the border stroke shows the moving gradient.
 */
export function ShineBorder({
  borderRadius = 12,
  borderWidth = 1,
  duration = 14,
  color = "#FFFFFF",
  className,
  children,
}: ShineBorderProps) {
  const colorStops = Array.isArray(color) ? color.join(",") : `${color},${color}`;

  const maskStyle: CSSProperties = {
    inset: 0,
    borderRadius,
    padding: borderWidth,
    background: `radial-gradient(transparent, transparent, ${colorStops}, transparent, transparent) 0% 0% / 300% 300%`,
    WebkitMask:
      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    WebkitMaskComposite: "xor",
    mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    maskComposite: "exclude",
    pointerEvents: "none",
    // @ts-expect-error custom prop
    "--duration": `${duration}s`,
  };

  return (
    <div
      style={{ borderRadius } as CSSProperties}
      className={cn("relative", className)}
    >
      <div aria-hidden style={maskStyle} className="absolute animate-shine" />
      {children}
    </div>
  );
}
