import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export const SkewButton = forwardRef<HTMLButtonElement, Props>(function SkewButton(
  { variant = "primary", size = "md", className, children, ...rest }, ref
) {
  const base =
    "relative inline-flex items-center justify-center font-bold uppercase tracking-tighter cursor-pointer transition-all duration-300 transform -skew-x-12 select-none disabled:opacity-50 disabled:cursor-not-allowed";
  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-10 py-5 text-base",
  };
  const variants = {
    primary:
      "bg-[#d4ff00] text-black hover:bg-white shadow-[0_0_0_1px_#d4ff00,0_0_28px_-6px_#d4ff00] hover:shadow-[0_0_0_1px_#fff,0_0_36px_-4px_#fff]",
    outline:
      "bg-transparent text-white border border-white/25 hover:bg-white/5 hover:border-white/60",
    ghost:
      "bg-white/5 text-white hover:bg-white/10",
  };
  return (
    <button ref={ref} className={cn(base, sizes[size], variants[variant], className)} {...rest}>
      <span className="inline-block skew-x-12 flex items-center gap-2">{children}</span>
    </button>
  );
});
