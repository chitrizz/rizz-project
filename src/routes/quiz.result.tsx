import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { toPng } from "html-to-image";
import { useIdentity } from "../stores/identity";
import { IdentityCard } from "../components/IdentityCard";
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
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!latest) {
      navigate({ to: "/quiz" });
      return;
    }
    const t = setTimeout(() => {
      setRevealed(true);
      if (latest.score >= 60) {
        confetti({
          particleCount: 140,
          spread: 100,
          origin: { y: 0.4 },
          colors: ["#a855f7", "#22d3ee", "#d946ef", "#fbbf24"],
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
      const dataUrl = await toPng(cardRef.current, { backgroundColor: "#0A0A0A", pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = `rizz-card-${latest!.cardNumber}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      toast.error("Couldn't generate image. Try again.");
    }
  }

  const shareText = `I scored ${latest.score}/100 on HaveRizz — Rank: ${rank.title} ${rank.emoji}. Find out your Rizz: haverizz.com`;

  return (
    <div className="min-h-[calc(100vh-100px)] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-3">Your Result</p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold text-zinc-50 tracking-tighter">
            You're a <span className="text-gradient italic">{rank.title}</span>
          </h1>
          <p className="text-zinc-400 mt-3 max-w-md mx-auto">{rank.tagline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={revealed ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <IdentityCard
            ref={cardRef}
            cardNumber={latest.cardNumber}
            score={latest.score}
            traits={latest.traits}
            username={`@anon_${latest.cardNumber.slice(3)}`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          <button onClick={downloadCard} className="h-11 bg-zinc-50 text-zinc-950 px-5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-white transition">
            <Download className="size-4" /> Download PNG
          </button>
          <button onClick={() => shareTwitter(shareText)} className="h-11 glass ring-1 ring-white/10 px-5 rounded-full text-sm font-medium text-zinc-50 flex items-center gap-2 hover:bg-white/10 transition">
            <Twitter className="size-4" /> Tweet
          </button>
          <button onClick={() => shareWhatsApp(shareText)} className="h-11 glass ring-1 ring-white/10 px-5 rounded-full text-sm font-medium text-zinc-50 flex items-center gap-2 hover:bg-white/10 transition">
            <MessageCircle className="size-4" /> WhatsApp
          </button>
          <button
            onClick={async () => {
              const ok = await copyToClipboard(shareText);
              ok ? toast.success("Copied. Paste it anywhere.") : toast.error("Copy failed.");
            }}
            className="h-11 glass ring-1 ring-white/10 px-5 rounded-full text-sm font-medium text-zinc-50 flex items-center gap-2 hover:bg-white/10 transition"
          >
            <Link2 className="size-4" /> Copy
          </button>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 gap-4">
          <Link to="/quiz" className="p-6 rounded-2xl glass ring-1 ring-white/8 hover:ring-brand-purple/40 transition group">
            <div className="flex items-center gap-3 mb-2">
              <RotateCw className="size-4 text-brand-purple" />
              <p className="font-medium text-zinc-50">Re-test</p>
            </div>
            <p className="text-sm text-zinc-500">10 new random questions. Different vibe, different score.</p>
          </Link>
          <Link to="/astro" className="p-6 rounded-2xl glass ring-1 ring-white/8 hover:ring-brand-cyan/40 transition group">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="size-4 text-brand-cyan" />
              <p className="font-medium text-zinc-50">Try AstroRizz</p>
            </div>
            <p className="text-sm text-zinc-500">Check your compatibility before you fumble a perfectly good crush.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
