import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../stores/auth";
import { supabase } from "../lib/supabase";
import { SectionLabel } from "../components/SectionLabel";
import { SkewButton } from "../components/SkewButton";
import { Check, X, Loader as Loader2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/complete-profile")({
  head: () => ({
    meta: [{ title: "Complete Your Profile — HaveRizz" }],
  }),
  component: CompleteProfilePage,
});

const USERNAME_MIN_LENGTH = 3;
const USERNAME_MAX_LENGTH = 20;
const USERNAME_REGEX = /^[a-zA-Z0-9_]+$/;

function CompleteProfilePage() {
  const navigate = useNavigate();
  const { user, profile, loading, initialize, initialized } = useAuth();
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [checking, setChecking] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (initialized && !user && !loading) {
      navigate({ to: "/login" });
    }
    if (initialized && user && profile) {
      navigate({ to: "/profile" });
    }
  }, [initialized, user, profile, loading, navigate]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (username.length >= USERNAME_MIN_LENGTH) {
        setChecking(true);
        try {
          const { data, error } = await supabase
            .from("profiles")
            .select("username")
            .eq("username", username)
            .maybeSingle();

          if (error) throw error;
          setUsernameAvailable(!data);
        } catch {
          setUsernameAvailable(false);
        }
        setChecking(false);
      } else {
        setUsernameAvailable(null);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [username]);

  const getValidationState = () => {
    if (username.length < USERNAME_MIN_LENGTH) return { valid: false, message: `At least ${USERNAME_MIN_LENGTH} characters` };
    if (username.length > USERNAME_MAX_LENGTH) return { valid: false, message: `Maximum ${USERNAME_MAX_LENGTH} characters` };
    if (!USERNAME_REGEX.test(username)) return { valid: false, message: "Only letters, numbers, and underscores" };
    if (checking) return { valid: false, message: "Checking availability...", checking: true };
    if (usernameAvailable === false) return { valid: false, message: "Username is taken" };
    if (usernameAvailable === true) return { valid: true, message: "Username is available" };
    return { valid: false, message: "" };
  };

  const validation = getValidationState();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validation.valid || !user) return;

    try {
      const { error } = await supabase.from("profiles").insert({
        id: user.id,
        username: username.toLowerCase(),
        display_name: displayName || null,
        avatar_url: user.user_metadata?.avatar_url || null,
      });

      if (error) {
        if (error.code === "23505") {
          toast.error("Username is already taken");
          return;
        }
        throw error;
      }

      toast.success("Profile created! Welcome to HaveRizz.");
      await useAuth.getState().fetchProfile();
      navigate({ to: "/profile" });
    } catch (err) {
      console.error("Error creating profile:", err);
      toast.error("Failed to create profile. Please try again.");
    }
  };

  if (!initialized || loading) {
    return (
      <div className="min-h-[calc(100vh-120px)] px-6 py-12 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="size-12 border-2 border-[#d4ff00] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-120px)] px-6 py-12">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <SectionLabel index="—" label="One Last Step" />
          <h1 className="mt-6 font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]">
            Pick Your
          </h1>
          <p className="font-serif italic text-4xl sm:text-5xl tracking-tight text-[#d4ff00]" style={{ textShadow: "0 0 30px rgba(212,255,0,0.35)" }}>
            Username.
          </p>
          <p className="mt-4 text-white/60 leading-relaxed">
            This will be your identity across HaveRizz. Choose wisely — you can't change it later.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          className="space-y-6 p-6 border border-white/10 bg-white/[0.02] rounded-md"
        >
          {" "}
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2">
              Username
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 font-mono">
                @
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
                placeholder="smoovtoper8r"
                maxLength={USERNAME_MAX_LENGTH}
                className="w-full bg-[#0a0a0c] border border-white/15 pl-8 pr-10 py-3 text-lg text-white outline-none placeholder:text-white/25 focus:border-[#d4ff00] rounded-md font-mono"
              />
              {validation.valid && !checking && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#d4ff00]">
                  <Check className="size-5" />
                </span>
              )}
              {!validation.valid && !checking && validation.message && username.length > 0 && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ff2e93]">
                  <X className="size-5" />
                </span>
              )}
              {checking && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50">
                  <Loader2 className="size-5 animate-spin" />
                </span>
              )}
            </div>
            <div className="mt-2 flex items-center justify-between h-5">
              <p
                className={`font-mono text-xs ${
                  validation.valid
                    ? "text-[#d4ff00]"
                    : checking
                      ? "text-white/50"
                      : username.length > 0
                        ? "text-[#ff2e93]"
                        : "text-white/30"
                }`}
              >
                {validation.message || `${username.length}/${USERNAME_MAX_LENGTH}`}
              </p>
            </div>
          </div>
          <div>
            <label className="block font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2">
              Display Name <span className="text-white/30">(optional)</span>
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Your Real Name"
              maxLength={50}
              className="w-full bg-[#0a0a0c] border border-white/15 px-3 py-3 text-white outline-none placeholder:text-white/25 focus:border-[#d4ff00] rounded-md"
            />
            <p className="mt-2 font-mono text-xs text-white/30">
              Friendly name shown alongside your username
            </p>
          </div>
          <SkewButton
            type="submit"
            disabled={!validation.valid || loading}
            className="w-full"
            size="lg"
          >
            {loading ? "Creating..." : "Claim Username"}
          </SkewButton>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => useAuth.getState().signOut()}
            className="font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition"
          >
            Cancel and sign out
          </button>
        </motion.div>
      </div>
    </div>
  );
}
