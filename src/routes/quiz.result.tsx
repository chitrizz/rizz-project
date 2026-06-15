import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { toPng } from "html-to-image";
import { useIdentity } from "../stores/identity";
import { useAuth } from "../stores/auth";
import { IdentityCard } from "../components/IdentityCard";
import { SkewButton } from "../components/SkewButton";
import { SectionLabel } from "../components/SectionLabel";
import { rankFor } from "../data/ranks";
import { copyToClipboard, shareTwitter, shareWhatsApp } from "../lib/share";
import { Download, Twitter, MessageCircle, Link2, RotateCw, Sparkles } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/quiz/result")({
  head: () => ({
    meta: [
      { title: "Your Rizz Identity Card" },
      { name: "description", content: "Your official Rizz Identity Card — score, rank, traits, rarity. Share it everywhere." },
      { property: "og:title", content: "I just got my Rizz Identity Card" },
      { property: "og:description", content: "Find out your Rizz score on HaveRizz." },
    ],
  }),
  component: ResultPage,
});

function ResultPage() {
  const latest = useIdentity((s) => s.latest);
  const profile = useAuth((s) => s.profile);
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!latest) { navigate({ to: "/quiz" }); return; }
    const t = setTimeout(() => {
      setRevealed(true);
      if (latest.score >= 60) {
        confetti({
          particleCount: 160,
          spread: 110,
          origin: { y: 0.4 },
          colors: ["#d4ff00", "#22d3ee", "#ff2e93", "#ffd400", "#ffffff"],
        });
      }
    }, 350);
    return () => clearTimeout(t);
  }, [latest, navigate]);

  if (!latest) return null;
  const rank = rankFor(latest.score);

  async function downloadCard() {
    if (!cardRef.current) return;
    try {
      const dataUrl = await toPng(cardRef.current, { backgroundColor: "#050505", pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = `rizz-card-${latest!.cardNumber}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      toast.error("Couldn't generate image. Try again.");
    }
  }

  const shareText = `I scored ${latest.score}/100 on HaveRizz — Rank: ${rank.title}. Find out your Rizz: haverizz.com`;

  return (
    <div className="min-h-[calc(100vh-120px)] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel index="—" label="Your Verdict" />
          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]">
            You're a
          </h1>
          <p className="mt-2 font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]" style={{ textShadow: "0 0 40px rgba(212,255,0,0.4)" }}>
            {rank.title}.
          </p>
          <p className="text-white/60 mt-5 max-w-md mx-auto">{rank.tagline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          animate={revealed ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <IdentityCard
            ref={cardRef}
            cardNumber={latest.cardNumber}
            score={latest.score}
            traits={latest.traits}
            username={profile ? `@${profile.username}` : `@anon_${latest.cardNumber.slice(3)}`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-3 justify-center"
        >
          <SkewButton onClick={downloadCard}><Download className="size-4" /> Download</SkewButton>
          <SkewButton variant="outline" onClick={() => shareTwitter(shareText)}><Twitter className="size-4" /> Tweet</SkewButton>
          <SkewButton variant="outline" onClick={() => shareWhatsApp(shareText)}><MessageCircle className="size-4" /> WhatsApp</SkewButton>
          <SkewButton
            variant="outline"
            onClick={async () => {
              const ok = await copyToClipboard(shareText);
              ok ? toast.success("Copied. Paste it anywhere.") : toast.error("Copy failed.");
            }}
          >
            <Link2 className="size-4" /> Copy
          </SkewButton>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 gap-5">
          <Link to="/quiz" className="group p-7 border border-white/10 bg-[#0a0a0c] hover:border-[#d4ff00]/60 transition">
            <div className="flex items-center gap-3 mb-2">
              <RotateCw className="size-4 text-[#d4ff00]" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/60 font-bold">Re-test</p>
            </div>
            <h3 className="font-display text-2xl font-extrabold text-white uppercase tracking-tight">10 new questions</h3>
            <p className="mt-2 text-sm text-white/50">Different vibe, different score.</p>
          </Link>
          <Link to="/astro" className="group p-7 border border-white/10 bg-[#0a0a0c] hover:border-[#22d3ee]/60 transition">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="size-4 text-[#22d3ee]" />
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/60 font-bold">Try AstroRizz</p>
            </div>
            <h3 className="font-display text-2xl font-extrabold text-white uppercase tracking-tight">Check compatibility</h3>
            <p className="mt-2 text-sm text-white/50">Before you fumble a perfectly good crush.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
