import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../stores/auth";

export const Route = createFileRoute("/auth/callback")({
  head: () => ({
    meta: [{ title: "Authenticating... — HaveRizz" }],
  }),
  component: AuthCallbackPage,
});

function AuthCallbackPage() {
  const navigate = useNavigate();
  const { user, profile, initialize, loading } = useAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    async function handleAuth() {
      try {
        // Wait for auth to initialize
        if (loading) return;

        if (user) {
          if (profile) {
            navigate({ to: "/profile" });
          } else {
            navigate({ to: "/complete-profile" });
          }
        }
      } catch (err) {
        console.error("Auth callback error:", err);
        setError("Authentication failed. Please try again.");
      }
    }

    handleAuth();
  }, [user, profile, loading, navigate]);

  if (error) {
    return (
      <div className="min-h-[calc(100vh-120px)] px-6 py-12 flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-2xl font-bold text-[#ff2e93] uppercase tracking-tighter">
            Authentication Failed
          </p>
          <p className="mt-4 text-white/60">{error}</p>
          <button
            onClick={() => navigate({ to: "/login" })}
            className="mt-8 px-6 py-3 bg-white/10 border border-white/20 text-white font-bold uppercase tracking-tighter rounded-md hover:bg-white/20 transition"
          >
            Back to Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-120px)] px-6 py-12 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="size-12 mx-auto border-2 border-[#d4ff00] border-t-transparent rounded-full"
        />
        <p className="mt-6 font-mono text-xs uppercase tracking-widest text-white/50">
          Completing sign in...
        </p>
      </div>
    </div>
  );
}
