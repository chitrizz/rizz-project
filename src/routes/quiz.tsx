import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pickQuestions, type QuizQuestion } from "../data/quiz-questions";
import { cardNumber, traitsFor } from "../data/ranks";
import { useIdentity } from "../stores/identity";
import { rankFor } from "../data/ranks";
import { ArrowRight, RotateCw } from "lucide-react";

export const Route = createFileRoute("/quiz")({
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
      // finalize
      const raw = next.reduce((a, b) => a + b, 0); // max 100
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

  function restart() {
    setIdx(0);
    setAnswers([]);
  }

  const q = questions[idx];
  const progress = ((idx) / questions.length) * 100;

  return (
    <div className="min-h-[calc(100vh-100px)] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 font-medium">
            Question {idx + 1} <span className="text-zinc-700">/ {questions.length}</span>
          </p>
          <button
            onClick={restart}
            className="text-xs text-zinc-500 hover:text-zinc-300 flex items-center gap-1"
          >
            <RotateCw className="size-3" /> Restart
          </button>
        </div>

        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-12">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-brand-purple to-brand-cyan"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] uppercase tracking-widest text-brand-purple font-medium">{q.category}</span>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold text-zinc-50 leading-[1.1] tracking-tight mt-3">
              {q.scenario}
            </h2>

            <div className="grid gap-3 mt-10">
              {q.options.map((opt) => (
                <button
                  key={opt.letter}
                  onClick={() => answer(opt.score)}
                  className="group text-left p-5 rounded-2xl glass ring-1 ring-white/8 hover:ring-brand-purple/40 hover:bg-white/[0.04] transition-all flex items-center gap-4"
                >
                  <div className="size-10 shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10 grid place-items-center font-display text-base font-semibold text-zinc-400 group-hover:text-brand-purple group-hover:ring-brand-purple/40 transition">
                    {opt.letter}
                  </div>
                  <p className="flex-1 text-zinc-200 text-base leading-snug">{opt.text}</p>
                  <ArrowRight className="size-4 text-zinc-600 group-hover:text-zinc-50 group-hover:translate-x-0.5 transition shrink-0" />
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
