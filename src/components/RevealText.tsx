import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  once?: boolean;
}

export function RevealText({ children, className, as = "h2", delay = 0, once = true }: Props) {
  const words = children.split(" ");
  const Comp: any = motion[as as keyof typeof motion];
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      style={{ perspective: 1000 }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "118%", opacity: 0, rotateX: -72, filter: "blur(14px)" },
              show: { y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.92, delay: delay + i * 0.055, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}

export function FadeUp({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.82, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
