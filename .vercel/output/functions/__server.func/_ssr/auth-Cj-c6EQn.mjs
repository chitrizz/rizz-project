import { n as create } from "../_libs/zustand.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-Cj-c6EQn.js
var supabase = createClient("https://yhsrzepwljedfkltoysb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inloc3J6ZXB3bGplZGZrbHRveXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1MjAzNTgsImV4cCI6MjA5NzA5NjM1OH0.Is7sIZO7WiCqDFe9d14a8Soz7FeFiGn5bl4IusziW_8", { auth: {
	flowType: "pkce",
	autoRefreshToken: true,
	persistSession: true,
	detectSessionInUrl: true
} });
var useAuth = create()((set, get) => ({
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
			const { data: { session } } = await supabase.auth.getSession();
			if (session?.user) {
				set({
					user: session.user,
					session
				});
				await get().fetchProfile();
			}
			supabase.auth.onAuthStateChange((event, session) => {
				(async () => {
					if (event === "SIGNED_IN" && session?.user) {
						set({
							user: session.user,
							session
						});
						await get().fetchProfile();
					} else if (event === "SIGNED_OUT") set({
						user: null,
						profile: null,
						session: null
					});
				})();
			});
			set({
				initialized: true,
				loading: false
			});
		} catch (error) {
			console.error("Auth initialization error:", error);
			set({
				error: "Failed to initialize authentication",
				loading: false
			});
		}
	},
	signInWithGoogle: async () => {
		try {
			set({
				loading: true,
				error: null
			});
			const { error } = await supabase.auth.signInWithOAuth({
				provider: "google",
				options: { redirectTo: `${window.location.origin}/auth/callback` }
			});
			if (error) throw error;
		} catch (error) {
			console.error("Google sign-in error:", error);
			set({
				error: "Failed to sign in with Google",
				loading: false
			});
		}
	},
	signOut: async () => {
		try {
			set({ loading: true });
			const { error } = await supabase.auth.signOut();
			if (error) throw error;
			set({
				user: null,
				profile: null,
				session: null,
				loading: false
			});
		} catch (error) {
			console.error("Sign out error:", error);
			set({
				error: "Failed to sign out",
				loading: false
			});
		}
	},
	fetchProfile: async () => {
		const { user } = get();
		if (!user) return;
		try {
			const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).maybeSingle();
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
				const { error } = await supabase.from("profiles").update(updates).eq("id", user.id);
				if (error) throw error;
				set({
					profile: {
						...profile,
						...updates
					},
					loading: false
				});
			} else {
				const newProfile = {
					id: user.id,
					username: updates.username,
					display_name: updates.display_name ?? null,
					avatar_url: user.user_metadata?.avatar_url ?? null
				};
				const { error } = await supabase.from("profiles").insert(newProfile);
				if (error) throw error;
				set({
					profile: newProfile,
					loading: false
				});
			}
			return true;
		} catch (error) {
			console.error("Error updating profile:", error);
			set({
				error: "Failed to update profile",
				loading: false
			});
			return false;
		}
	},
	clearError: () => set({ error: null })
}));
//#endregion
export { useAuth as n, supabase as t };
