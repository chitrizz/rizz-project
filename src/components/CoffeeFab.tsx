import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, X, Heart } from "lucide-react";
import { toast } from "sonner";

const AMOUNTS = [
  { value: 49, label: "Coffee for the dev", emoji: "☕" },
  { value: 99, label: "Boost the rizz engine", emoji: "⚡" },
  { value: 199, label: "Certified supporter", emoji: "💎" },
  { value: 499, label: "Ultimate patron", emoji: "👑" },
];

export function CoffeeFab() {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState("");
  const [picked, setPicked] = useState<number | null>(null);

  function handleSupport() {
    const amount = picked ?? Number(custom);
    if (!amount || amount < 10) {
      toast.error("Pick an amount or enter ₹10 or more");
      return;
    }
    toast.success("Razorpay coming soon — thanks for the love 💖", {
      description: `We logged your intent of ₹${amount}.`,
    });
    setOpen(false);
    setPicked(null);
    setCustom("");
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 glass-strong h-12 pl-3 pr-5 flex items-center gap-3 rounded-full ring-1 ring-white/15 hover:ring-brand-gold/40 transition-all group shadow-2xl"
      >
        <div className="size-7 rounded-full bg-brand-gold/15 grid place-items-center">
          <Coffee className="size-3.5 text-brand-gold" />
        </div>
        <span className="text-sm font-medium text-zinc-50 hidden sm:inline">Buy Me a Coffee</span>
        <span className="text-sm font-medium text-zinc-50 sm:hidden">Coffee</span>
        <span className="absolute inset-0 rounded-full ring-1 ring-brand-gold/0 group-hover:ring-brand-gold/30 animate-pulse-soft pointer-events-none" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md glass-strong ring-1 ring-white/12 rounded-3xl p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 size-8 grid place-items-center rounded-full hover:bg-white/5"
                aria-label="Close"
              >
                <X className="size-4 text-zinc-400" />
              </button>
              <div className="size-12 rounded-2xl bg-brand-gold/15 ring-1 ring-brand-gold/30 grid place-items-center mb-4">
                <Heart className="size-5 text-brand-gold" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-zinc-50 tracking-tight">
                Enjoying HaveRizz?
              </h2>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                If we made you laugh, fixed your fumble, or just gave you something to share — fuel the next feature.
              </p>

              <div className="grid grid-cols-2 gap-2 mt-6">
                {AMOUNTS.map((a) => (
                  <button
                    key={a.value}
                    onClick={() => { setPicked(a.value); setCustom(""); }}
                    className={`p-3 rounded-2xl text-left ring-1 transition ${
                      picked === a.value
                        ? "ring-brand-gold bg-brand-gold/10"
                        : "ring-white/8 bg-white/[0.02] hover:ring-white/20"
                    }`}
                  >
                    <div className="text-lg">{a.emoji}</div>
                    <div className="font-display text-base font-semibold text-zinc-50 mt-1">₹{a.value}</div>
                    <div className="text-[11px] text-zinc-500 leading-tight">{a.label}</div>
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <label className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium">Custom amount</label>
                <div className="mt-1.5 flex items-center glass ring-1 ring-white/10 rounded-xl pl-3">
                  <span className="text-sm text-zinc-400">₹</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder="100"
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value); setPicked(null); }}
                    className="flex-1 bg-transparent h-10 px-2 text-sm text-zinc-50 outline-none placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <button
                onClick={handleSupport}
                className="mt-5 w-full h-11 rounded-full bg-brand-purple text-white font-medium text-sm hover:brightness-110 active:scale-[0.98] transition"
              >
                Support HaveRizz
              </button>
              <p className="text-[10px] text-zinc-600 text-center mt-3 uppercase tracking-widest">
                Razorpay · UPI · Cards · Wallets
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
