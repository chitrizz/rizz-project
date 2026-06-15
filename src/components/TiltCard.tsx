import { useRef, type ReactNode, type MouseEvent, type CSSProperties } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  max?: number;
}

export function TiltCard({ children, className, max = 12 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 200, damping: 22 });
  const sy = useSpring(my, { stiffness: 200, damping: 22 });
  const rx = useTransform(sy, [0, 1], [max, -max]);
  const ry = useTransform(sx, [0, 1], [-max, max]);
  const mxPct = useTransform(sx, (v) => `${v * 100}%`);
  const myPct = useTransform(sy, (v) => `${v * 100}%`);
  const styleVars = useMotionTemplate`--mx:${mxPct}; --my:${myPct};` as unknown as CSSProperties;

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }
  function onLeave() { mx.set(0.5); my.set(0.5); }

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={className} style={{ perspective: 1100 }}>
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", ...styleVars }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
