import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as SkewButton } from "./SkewButton-DQm-cxCW.mjs";
import { n as useAuth, t as supabase } from "./auth-Cj-c6EQn.mjs";
import { t as SectionLabel } from "./SectionLabel-cVhLYZyM.mjs";
import { D as Check, g as Loader, t as X } from "../_libs/lucide-react.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/complete-profile-DAgmQ_Mi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var USERNAME_MIN_LENGTH = 3;
var USERNAME_MAX_LENGTH = 20;
var USERNAME_REGEX = /^[a-zA-Z0-9_]+$/;
function CompleteProfilePage() {
	const navigate = useNavigate();
	const { user, profile, loading, initialize, initialized } = useAuth();
	const [username, setUsername] = (0, import_react.useState)("");
	const [displayName, setDisplayName] = (0, import_react.useState)("");
	const [checking, setChecking] = (0, import_react.useState)(false);
	const [usernameAvailable, setUsernameAvailable] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		initialize();
	}, [initialize]);
	(0, import_react.useEffect)(() => {
		if (initialized && !user && !loading) navigate({ to: "/login" });
		if (initialized && user && profile) navigate({ to: "/profile" });
	}, [
		initialized,
		user,
		profile,
		loading,
		navigate
	]);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(async () => {
			if (username.length >= USERNAME_MIN_LENGTH) {
				setChecking(true);
				try {
					const { data, error } = await supabase.from("profiles").select("username").eq("username", username).maybeSingle();
					if (error) throw error;
					setUsernameAvailable(!data);
				} catch {
					setUsernameAvailable(false);
				}
				setChecking(false);
			} else setUsernameAvailable(null);
		}, 300);
		return () => clearTimeout(timer);
	}, [username]);
	const getValidationState = () => {
		if (username.length < USERNAME_MIN_LENGTH) return {
			valid: false,
			message: `At least ${USERNAME_MIN_LENGTH} characters`
		};
		if (username.length > USERNAME_MAX_LENGTH) return {
			valid: false,
			message: `Maximum ${USERNAME_MAX_LENGTH} characters`
		};
		if (!USERNAME_REGEX.test(username)) return {
			valid: false,
			message: "Only letters, numbers, and underscores"
		};
		if (checking) return {
			valid: false,
			message: "Checking availability...",
			checking: true
		};
		if (usernameAvailable === false) return {
			valid: false,
			message: "Username is taken"
		};
		if (usernameAvailable === true) return {
			valid: true,
			message: "Username is available"
		};
		return {
			valid: false,
			message: ""
		};
	};
	const validation = getValidationState();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validation.valid || !user) return;
		try {
			const { error } = await supabase.from("profiles").insert({
				id: user.id,
				username: username.toLowerCase(),
				display_name: displayName || null,
				avatar_url: user.user_metadata?.avatar_url || null
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
	if (!initialized || loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[calc(100vh-120px)] px-6 py-12 flex items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			animate: { rotate: 360 },
			transition: {
				duration: 1,
				repeat: Infinity,
				ease: "linear"
			},
			className: "size-12 border-2 border-[#d4ff00] border-t-transparent rounded-full"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[calc(100vh-120px)] px-6 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "text-center mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "—",
							label: "One Last Step"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]",
							children: "Pick Your"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif italic text-4xl sm:text-5xl tracking-tight text-[#d4ff00]",
							style: { textShadow: "0 0 30px rgba(212,255,0,0.35)" },
							children: "Username."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-white/60 leading-relaxed",
							children: "This will be your identity across HaveRizz. Choose wisely — you can't change it later."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: .1,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					onSubmit: handleSubmit,
					className: "space-y-6 p-6 border border-white/10 bg-white/[0.02] rounded-md",
					children: [
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2",
								children: "Username"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute left-3 top-1/2 -translate-y-1/2 text-white/50 font-mono",
										children: "@"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: username,
										onChange: (e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, "")),
										placeholder: "smoovtoper8r",
										maxLength: USERNAME_MAX_LENGTH,
										className: "w-full bg-[#0a0a0c] border border-white/15 pl-8 pr-10 py-3 text-lg text-white outline-none placeholder:text-white/25 focus:border-[#d4ff00] rounded-md font-mono"
									}),
									validation.valid && !checking && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#d4ff00]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
									}),
									!validation.valid && !checking && validation.message && username.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#ff2e93]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
									}),
									checking && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute right-3 top-1/2 -translate-y-1/2 text-white/50",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, { className: "size-5 animate-spin" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex items-center justify-between h-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `font-mono text-xs ${validation.valid ? "text-[#d4ff00]" : checking ? "text-white/50" : username.length > 0 ? "text-[#ff2e93]" : "text-white/30"}`,
									children: validation.message || `${username.length}/${USERNAME_MAX_LENGTH}`
								})
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2",
								children: ["Display Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white/30",
									children: "(optional)"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: displayName,
								onChange: (e) => setDisplayName(e.target.value),
								placeholder: "Your Real Name",
								maxLength: 50,
								className: "w-full bg-[#0a0a0c] border border-white/15 px-3 py-3 text-white outline-none placeholder:text-white/25 focus:border-[#d4ff00] rounded-md"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-xs text-white/30",
								children: "Friendly name shown alongside your username"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkewButton, {
							type: "submit",
							disabled: !validation.valid || loading,
							className: "w-full",
							size: "lg",
							children: loading ? "Creating..." : "Claim Username"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						duration: .6,
						delay: .2
					},
					className: "mt-8 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => useAuth.getState().signOut(),
						className: "font-mono text-xs uppercase tracking-widest text-white/40 hover:text-white/70 transition",
						children: "Cancel and sign out"
					})
				})
			]
		})
	});
}
//#endregion
export { CompleteProfilePage as component };
