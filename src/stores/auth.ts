import { create } from "zustand";
import { supabase } from "../lib/supabase";
import type { User, Session } from "@supabase/supabase-js";

export interface Profile {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
}

interface AuthState {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
  initialized: boolean;
  error: string | null;

  // Actions
  initialize: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  fetchProfile: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => Promise<boolean>;
  clearError: () => void;
}

export const useAuth = create<AuthState>()((set, get) => ({
  user: null,
  profile: null,
  session: null,
  loading: true,
  initialized: false,
  error: null,

  initialize: async () => {
    if (get().initialized) return;

    try {
      set({ loading: true });

      // Get initial session
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        set({ user: session.user, session });
        await get().fetchProfile();
      }

      // Set up auth state listener
      supabase.auth.onAuthStateChange((event, session) => {
        (async () => {
          if (event === "SIGNED_IN" && session?.user) {
            set({ user: session.user, session });
            await get().fetchProfile();
          } else if (event === "SIGNED_OUT") {
            set({ user: null, profile: null, session: null });
          }
        })();
      });

      set({ initialized: true, loading: false });
    } catch (error) {
      console.error("Auth initialization error:", error);
      set({ error: "Failed to initialize authentication", loading: false });
    }
  },

  signInWithGoogle: async () => {
    try {
      set({ loading: true, error: null });

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;
    } catch (error) {
      console.error("Google sign-in error:", error);
      set({ error: "Failed to sign in with Google", loading: false });
    }
  },

  signOut: async () => {
    try {
      set({ loading: true });
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      set({ user: null, profile: null, session: null, loading: false });
    } catch (error) {
      console.error("Sign out error:", error);
      set({ error: "Failed to sign out", loading: false });
    }
  },

  fetchProfile: async () => {
    const { user } = get();
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();

      if (error) throw error;
      set({ profile: data });
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  },

  updateProfile: async (updates) => {
    const { user, profile } = get();
    if (!user) return false;

    try {
      set({ loading: true });

      if (profile) {
        // Update existing profile
        const { error } = await supabase
          .from("profiles")
          .update(updates)
          .eq("id", user.id);

        if (error) throw error;
        set({ profile: { ...profile, ...updates }, loading: false });
      } else {
        // Create new profile
        const newProfile = {
          id: user.id,
          username: updates.username!,
          display_name: updates.display_name ?? null,
          avatar_url: user.user_metadata?.avatar_url ?? null,
        };

        const { error } = await supabase.from("profiles").insert(newProfile);

        if (error) throw error;
        set({ profile: newProfile as Profile, loading: false });
      }

      return true;
    } catch (error) {
      console.error("Error updating profile:", error);
      set({ error: "Failed to update profile", loading: false });
      return false;
    }
  },

  clearError: () => set({ error: null }),
}));
