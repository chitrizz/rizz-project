import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../stores/auth";
import { useIdentity } from "../stores/identity";
import { useArena } from "../stores/arena";
import { SectionLabel } from "../components/SectionLabel";
import { SkewButton } from "../components/SkewButton";
import { IdentityCard } from "../components/IdentityCard";
import { supabase } from "../lib/supabase";
import { LogOut, User, CreditCard as Edit2, X, Check, AtSign, Calendar, Mail, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [{ title: "My Profile — HaveRizz" }],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const navigate = useNavigate();
  const { user, profile, loading, initialize, initialized, signOut, fetchProfile } = useAuth();
  const latestIdentity = useIdentity((s) => s.latest);
  const arenaPosts = useArena((s) => s.posts);
  const [editingDisplayName, setEditingDisplayName] = useState(false);
  const [displayNameValue, setDisplayNameValue] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (initialized && !user && !loading) {
      navigate({ to: "/login" });
    }
  }, [initialized, user, loading, navigate]);

  useEffect(() => {
    if (profile?.display_name) {
      setDisplayNameValue(profile.display_name);
    }
  }, [profile]);

  const handleSaveDisplayName = async () => {
    if (!profile) return;

    setSaving(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ display_name: displayNameValue || null })
        .eq("id", profile.id);

      if (error) throw error;
      await fetchProfile();
      toast.success("Display name updated");
      setEditingDisplayName(false);
    } catch (err) {
      console.error("Error updating display name:", err);
      toast.error("Failed to update display name");
    }
    setSaving(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate({ to: "/" });
  };

  const myArenaPosts = arenaPosts.filter((p) => p.author === profile?.username);

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

  if (!user || !profile) {
    return null;
  }

  return (
    <div className="min-h-[calc(100vh-120px)] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <SectionLabel index="—" label="My Profile" />
          <div className="mt-6 flex items-start justify-between flex-wrap gap-6">
            <div className="flex items-center gap-5">
              {profile.avatar_url ? (
                <img
                  src={profile.avatar_url}
                  alt={profile.username}
                  className="size-20 rounded-full border-2 border-[#d4ff00]/40 object-cover"
                />
              ) : (
                <div className="size-20 rounded-full border-2 border-[#d4ff00]/40 bg-[#d4ff00]/10 grid place-items-center">
                  <User className="size-8 text-[#d4ff00]" />
                </div>
              )}
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tighter">
                    @{profile.username}
                  </h1>
                  {editingDisplayName ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={displayNameValue}
                        onChange={(e) => setDisplayNameValue(e.target.value)}
                        placeholder="Display name"
                        maxLength={50}
                        className="bg-[#0a0a0c] border border-white/15 px-2 py-1 text-sm text-white outline-none focus:border-[#d4ff00] rounded"
                        autoFocus
                      />
                      <button
                        onClick={handleSaveDisplayName}
                        disabled={saving}
                        className="p-1.5 hover:bg-[#d4ff00]/10 rounded transition"
                      >
                        <Check className="size-4 text-[#d4ff00]" />
                      </button>
                      <button
                        onClick={() => {
                          setEditingDisplayName(false);
                          setDisplayNameValue(profile.display_name || "");
                        }}
                        className="p-1.5 hover:bg-white/10 rounded transition"
                      >
                        <X className="size-4 text-white/50" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setEditingDisplayName(true)}
                      className="group flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition"
                    >
                      {profile.display_name ? (
                        <span className="text-base text-white/70">{profile.display_name}</span>
                      ) : (
                        <span className="italic">Add display name</span>
                      )}
                      <Edit2 className="size-3 opacity-0 group-hover:opacity-100 transition" />
                    </button>
                  )}
                </div>
                <div className="mt-2 flex items-center gap-4 text-xs text-white/40 font-mono">
                  <span className="flex items-center gap-1">
                    <AtSign className="size-3" />
                    {user.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3" />
                    Joined {new Date(profile.created_at).toLocaleDateString(undefined, { month: "short", year: "numeric" })}
                  </span>
                </div>
              </div>
            </div>
            <SkewButton variant="outline" onClick={handleSignOut} size="sm">
              <LogOut className="size-3.5" /> Sign Out
            </SkewButton>
          </div>
        </motion.div>

        {/* Identity Card */}
        {latestIdentity && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tighter mb-6">
              Your Identity Card
            </h2>
            <div className="max-w-md">
              <IdentityCard
                cardNumber={latestIdentity.cardNumber}
                score={latestIdentity.score}
                traits={latestIdentity.traits}
                username={`@${profile.username}`}
                tilt={false}
              />
              <Link to="/quiz" className="mt-4 inline-block">
                <SkewButton size="sm" variant="outline">
                  Retake Quiz
                </SkewButton>
              </Link>
            </div>
          </motion.div>
        )}

        {/* Arena Posts */}
        {myArenaPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-white uppercase tracking-tighter">
                Arena Posts
              </h2>
              <Link
                to="/arena"
                className="font-mono text-xs uppercase tracking-widest text-[#d4ff00] hover:text-white transition flex items-center gap-1"
              >
                View Arena <ExternalLink className="size-3" />
              </Link>
            </div>
            <div className="grid gap-px bg-white/10 border border-white/10 rounded-md overflow-hidden">
              {myArenaPosts.slice(0, 5).map((post) => (
                <div
                  key={post.id}
                  className="bg-[#050505] hover:bg-[#0a0a0c] p-4 flex items-start justify-between gap-4"
                >
                  <div className="min-w-0 flex-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1 block">
                      {post.category}
                    </span>
                    <p className="text-white text-sm leading-relaxed truncate">{post.line}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-xs text-[#d4ff00] font-bold">
                      +{post.upvotes - post.downvotes}
                    </p>
                    <p className="font-mono text-[10px] text-white/30">
                      {post.upvotes} / {post.downvotes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid sm:grid-cols-3 gap-4"
        >
          <Link
            to="/quiz"
            className="group p-6 border border-white/10 bg-white/[0.02] hover:border-[#d4ff00]/60 hover:bg-white/[0.05] transition rounded-md"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#d4ff00] mb-2">
              Quiz
            </p>
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight">
              Retake Quiz
            </h3>
            <p className="mt-2 text-sm text-white/50">Get a new score and updated card</p>
          </Link>
          <Link
            to="/arena"
            className="group p-6 border border-white/10 bg-white/[0.02] hover:border-[#22d3ee]/60 hover:bg-white/[0.05] transition rounded-md"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#22d3ee] mb-2">
              Arena
            </p>
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight">
              Post a Line
            </h3>
            <p className="mt-2 text-sm text-white/50">Share your best rizz with the community</p>
          </Link>
          <Link
            to="/generator"
            className="group p-6 border border-white/10 bg-white/[0.02] hover:border-[#ff2e93]/60 hover:bg-white/[0.05] transition rounded-md"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#ff2e93] mb-2">
              Generator
            </p>
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight">
              Get Inspiration
            </h3>
            <p className="mt-2 text-sm text-white/50">Browse 300+ curated lines</p>
          </Link>
        </motion.div>

        {/* Empty State for No Identity Card */}
        {!latestIdentity && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 p-8 border border-white/10 bg-white/[0.02] rounded-md text-center"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">
              No Identity Card Yet
            </p>
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight mb-2">
              Take the Quiz to Get Yours
            </h3>
            <p className="text-sm text-white/50 max-w-sm mx-auto mb-6">
              Answer 10 scenario questions to discover your Rizz score and mint your official Identity Card.
            </p>
            <Link to="/quiz">
              <SkewButton>Start Quiz</SkewButton>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
