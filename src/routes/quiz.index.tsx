import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pickQuestions, type QuizQuestion } from "../data/quiz-questions";
import { cardNumber, traitsFor, rankFor } from "../data/ranks";
import { useIdentity } from "../stores/identity";
import { ArrowRight, RotateCw } from "lucide-react";

export const Route = createFileRoute("/quiz/")({
  head: () => ({
    meta: [
      { title: "Do I Have Rizz? — The Quiz" },
      { name: "description", content: "10 scenario-based questions. One Identity Card. Find out your real Rizz score in under 3 minutes." },
      { property: "og:title", content: "Do I Have Rizz? — The Quiz" },
      { property: "og:description", content: "10 scenario-based questions. One Identity Card. Find out your real Rizz score." },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  const navigate = useNavigate();
  const save = useIdentity((s) => s.save);
  const [seed] = useState(() => Date.now());
  const questions = useMemo<QuizQuestion[]>(() => pickQuestions(seed, 10), [seed]);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  function answer(score: number) {
    const next = [...answers, score];
    setAnswers(next);
    if (idx + 1 < questions.length) {
      setIdx(idx + 1);
    } else {
      const raw = next.reduce((a, b) => a + b, 0);
      const finalScore = Math.max(0, Math.min(100, raw));
      const sum = next.reduce((a, b, i) => a + b * (i + 1), 0);
      const traits = traitsFor(finalScore, sum + seed);
      const cn = cardNumber(seed + sum);
      const rank = rankFor(finalScore);
      save({
        cardNumber: cn,
        score: finalScore,
        rankTitle: rank.title,
        rankEmoji: rank.emoji,
        rarity: rank.rarity,
        traits,
        createdAt: Date.now(),
      });
      navigate({ to: "/quiz/result" });
    }
  }

  function restart() { setIdx(0); setAnswers([]); }

  const q = questions[idx];
  const progress = ((idx) / questions.length) * 100;

  return (
    <div className="min-h-[calc(100vh-120px)] px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
            <span className="text-[#d4ff00]">Q.{String(idx + 1).padStart(2, "0")}</span>
            <span className="text-white/30"> / {String(questions.length).padStart(2, "0")}</span>
          </p>
          <button
            onClick={restart}
            className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white flex items-center gap-1.5"
          >
            <RotateCw className="size-3" /> Restart
          </button>
        </div>

        <div className="h-[3px] w-full bg-white/5 overflow-hidden mb-16">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full bg-[#d4ff00] shadow-[0_0_10px_#d4ff00]"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#d4ff00] font-bold mb-5">{q.category}</p>
            <h2 className="font-sans font-semibold text-white text-2xl sm:text-3xl lg:text-[40px] leading-[1.2] tracking-tight max-w-3xl">
              {q.scenario}
            </h2>

            <div className="grid gap-3 mt-12">
              {q.options.map((opt) => (
                <button
                  key={opt.letter}
                  onClick={() => answer(opt.score)}
                  className="group text-left p-5 border border-white/10 bg-[#0a0a0c] hover:border-[#d4ff00] hover:bg-[#0f0f10] transition-all flex items-center gap-5 rounded-md"
                >
                  <div className="size-12 shrink-0 border border-white/15 grid place-items-center font-display text-lg font-extrabold text-white/50 group-hover:text-[#d4ff00] group-hover:border-[#d4ff00] transition rounded-sm">
                    {opt.letter}
                  </div>
                  <p className="flex-1 text-white text-base sm:text-lg leading-relaxed font-sans">{opt.text}</p>
                  <ArrowRight className="size-4 text-white/30 group-hover:text-[#d4ff00] group-hover:translate-x-0.5 transition shrink-0" />
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
