import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, X, Heart } from "lucide-react";
import { toast } from "sonner";
import { SkewButton } from "./SkewButton";

const AMOUNTS = [
  { value: 49, label: "Coffee", emoji: "☕" },
  { value: 99, label: "Boost", emoji: "⚡" },
  { value: 199, label: "Supporter", emoji: "💎" },
  { value: 499, label: "Patron", emoji: "👑" },
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
    toast.success("Razorpay coming soon — thanks for the love.", {
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
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 transform -skew-x-12 bg-[#d4ff00] text-black h-12 pl-3 pr-5 flex items-center gap-3 border border-[#d4ff00] hover:bg-white transition-all shadow-[0_0_24px_-4px_#d4ff00] hover:shadow-[0_0_36px_-4px_#fff]"
      >
        <span className="inline-block skew-x-12 flex items-center gap-2">
          <Coffee className="size-4" />
          <span className="text-xs font-bold uppercase tracking-tighter">Fuel Us</span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md glass-strong border border-white/15 rounded-2xl p-6 sm:p-8 relative holo-edge"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 size-8 grid place-items-center rounded-full hover:bg-white/5"
                aria-label="Close"
              >
                <X className="size-4 text-white/60" />
              </button>
              <div className="size-12 rounded-md bg-[#d4ff00]/15 border border-[#d4ff00]/40 grid place-items-center mb-4">
                <Heart className="size-5 text-[#d4ff00]" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Patron Protocol</p>
              <h2 className="font-display text-3xl font-bold text-white tracking-tighter uppercase">
                Fuel the <span className="text-[#d4ff00]">Rizz</span>.
              </h2>
              <p className="text-sm text-white/60 mt-2 leading-relaxed">
                If we made you laugh, fixed your fumble, or just gave you something to share — keep the lights on.
              </p>

              <div className="grid grid-cols-2 gap-2 mt-6">
                {AMOUNTS.map((a) => (
                  <button
                    key={a.value}
                    onClick={() => { setPicked(a.value); setCustom(""); }}
                    className={`p-3 rounded-md text-left border transition ${
                      picked === a.value
                        ? "border-[#d4ff00] bg-[#d4ff00]/10"
                        : "border-white/10 bg-white/[0.02] hover:border-white/25"
                    }`}
                  >
                    <div className="text-lg">{a.emoji}</div>
                    <div className="font-display text-lg font-bold text-white mt-1 tracking-tight">₹{a.value}</div>
                    <div className="font-mono text-[10px] text-white/50 uppercase tracking-wider">{a.label}</div>
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <label className="font-mono text-[10px] uppercase tracking-widest text-white/50">Custom</label>
                <div className="mt-1.5 flex items-center glass border border-white/10 rounded-md pl-3">
                  <span className="text-sm text-white/50">₹</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    placeholder="100"
                    value={custom}
                    onChange={(e) => { setCustom(e.target.value); setPicked(null); }}
                    className="flex-1 bg-transparent h-10 px-2 text-sm text-white outline-none placeholder:text-white/30"
                  />
                </div>
              </div>

              <SkewButton onClick={handleSupport} className="mt-6 w-full">
                Support HaveRizz
              </SkewButton>
              <p className="font-mono text-[9px] text-white/30 text-center mt-3 uppercase tracking-widest">
                Razorpay · UPI · Cards · Wallets
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
