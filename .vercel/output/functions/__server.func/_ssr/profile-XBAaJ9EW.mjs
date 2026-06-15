import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as SkewButton } from "./SkewButton-DQm-cxCW.mjs";
import { t as useArena } from "./arena-DZky2TGD.mjs";
import { n as useAuth, t as supabase } from "./auth-Cj-c6EQn.mjs";
import { t as SectionLabel } from "./SectionLabel-cVhLYZyM.mjs";
import { D as Check, O as Calendar, S as CreditCard, b as ExternalLink, h as LogOut, k as AtSign, n as User, t as X } from "../_libs/lucide-react.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as IdentityCard } from "./IdentityCard-Dgbof_AG.mjs";
import { t as useIdentity } from "./identity-C8JpHuFf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-XBAaJ9EW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	const navigate = useNavigate();
	const { user, profile, loading, initialize, initialized, signOut, fetchProfile } = useAuth();
	const latestIdentity = useIdentity((s) => s.latest);
	const arenaPosts = useArena((s) => s.posts);
	const [editingDisplayName, setEditingDisplayName] = (0, import_react.useState)(false);
	const [displayNameValue, setDisplayNameValue] = (0, import_react.useState)("");
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		initialize();
	}, [initialize]);
	(0, import_react.useEffect)(() => {
		if (initialized && !user && !loading) navigate({ to: "/login" });
	}, [
		initialized,
		user,
		loading,
		navigate
	]);
	(0, import_react.useEffect)(() => {
		if (profile?.display_name) setDisplayNameValue(profile.display_name);
	}, [profile]);
	const handleSaveDisplayName = async () => {
		if (!profile) return;
		setSaving(true);
		try {
			const { error } = await supabase.from("profiles").update({ display_name: displayNameValue || null }).eq("id", profile.id);
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
	if (!user || !profile) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[calc(100vh-120px)] px-6 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto",
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
					className: "mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: "—",
						label: "My Profile"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-start justify-between flex-wrap gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-5",
							children: [profile.avatar_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: profile.avatar_url,
								alt: profile.username,
								className: "size-20 rounded-full border-2 border-[#d4ff00]/40 object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-20 rounded-full border-2 border-[#d4ff00]/40 bg-[#d4ff00]/10 grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-8 text-[#d4ff00]" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "font-display text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tighter",
									children: ["@", profile.username]
								}), editingDisplayName ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: displayNameValue,
											onChange: (e) => setDisplayNameValue(e.target.value),
											placeholder: "Display name",
											maxLength: 50,
											className: "bg-[#0a0a0c] border border-white/15 px-2 py-1 text-sm text-white outline-none focus:border-[#d4ff00] rounded",
											autoFocus: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: handleSaveDisplayName,
											disabled: saving,
											className: "p-1.5 hover:bg-[#d4ff00]/10 rounded transition",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-[#d4ff00]" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												setEditingDisplayName(false);
												setDisplayNameValue(profile.display_name || "");
											},
											className: "p-1.5 hover:bg-white/10 rounded transition",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4 text-white/50" })
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setEditingDisplayName(true),
									className: "group flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition",
									children: [profile.display_name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-base text-white/70",
										children: profile.display_name
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic",
										children: "Add display name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-3 opacity-0 group-hover:opacity-100 transition" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-4 text-xs text-white/40 font-mono",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtSign, { className: "size-3" }), user.email]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3" }),
										"Joined ",
										new Date(profile.created_at).toLocaleDateString(void 0, {
											month: "short",
											year: "numeric"
										})
									]
								})]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkewButton, {
							variant: "outline",
							onClick: handleSignOut,
							size: "sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-3.5" }), " Sign Out"]
						})]
					})]
				}),
				latestIdentity && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					className: "mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold text-white uppercase tracking-tighter mb-6",
						children: "Your Identity Card"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityCard, {
							cardNumber: latestIdentity.cardNumber,
							score: latestIdentity.score,
							traits: latestIdentity.traits,
							username: `@${profile.username}`,
							tilt: false
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quiz",
							className: "mt-4 inline-block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkewButton, {
								size: "sm",
								variant: "outline",
								children: "Retake Quiz"
							})
						})]
					})]
				}),
				myArenaPosts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						delay: .2,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold text-white uppercase tracking-tighter",
							children: "Arena Posts"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/arena",
							className: "font-mono text-xs uppercase tracking-widest text-[#d4ff00] hover:text-white transition flex items-center gap-1",
							children: ["View Arena ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-px bg-white/10 border border-white/10 rounded-md overflow-hidden",
						children: myArenaPosts.slice(0, 5).map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[#050505] hover:bg-[#0a0a0c] p-4 flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1 block",
									children: post.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white text-sm leading-relaxed truncate",
									children: post.line
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-xs text-[#d4ff00] font-bold",
									children: ["+", post.upvotes - post.downvotes]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-[10px] text-white/30",
									children: [
										post.upvotes,
										" / ",
										post.downvotes
									]
								})]
							})]
						}, post.id))
					})]
				}),
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
						delay: .3,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "grid sm:grid-cols-3 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/quiz",
							className: "group p-6 border border-white/10 bg-white/[0.02] hover:border-[#d4ff00]/60 hover:bg-white/[0.05] transition rounded-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase tracking-widest text-[#d4ff00] mb-2",
									children: "Quiz"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold text-white uppercase tracking-tight",
									children: "Retake Quiz"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-white/50",
									children: "Get a new score and updated card"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/arena",
							className: "group p-6 border border-white/10 bg-white/[0.02] hover:border-[#22d3ee]/60 hover:bg-white/[0.05] transition rounded-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase tracking-widest text-[#22d3ee] mb-2",
									children: "Arena"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold text-white uppercase tracking-tight",
									children: "Post a Line"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-white/50",
									children: "Share your best rizz with the community"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/generator",
							className: "group p-6 border border-white/10 bg-white/[0.02] hover:border-[#ff2e93]/60 hover:bg-white/[0.05] transition rounded-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase tracking-widest text-[#ff2e93] mb-2",
									children: "Generator"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold text-white uppercase tracking-tight",
									children: "Get Inspiration"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-white/50",
									children: "Browse 300+ curated lines"
								})
							]
						})
					]
				}),
				!latestIdentity && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						delay: .15,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "mt-12 p-8 border border-white/10 bg-white/[0.02] rounded-md text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-white/40 mb-4",
							children: "No Identity Card Yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold text-white uppercase tracking-tight mb-2",
							children: "Take the Quiz to Get Yours"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-white/50 max-w-sm mx-auto mb-6",
							children: "Answer 10 scenario questions to discover your Rizz score and mint your official Identity Card."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quiz",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkewButton, { children: "Start Quiz" })
						})
					]
				})
			]
		})
	});
}
//#endregion
export { ProfilePage as component };
