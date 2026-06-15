import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useAuth } from "./auth-Cj-c6EQn.mjs";
import { t as SectionLabel } from "./SectionLabel-cVhLYZyM.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login--84Js9RV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const navigate = useNavigate();
	const { user, profile, loading, signInWithGoogle, initialize, initialized } = useAuth();
	(0, import_react.useEffect)(() => {
		initialize();
	}, [initialize]);
	(0, import_react.useEffect)(() => {
		if (initialized && user && !loading) if (profile) navigate({ to: "/profile" });
		else navigate({ to: "/complete-profile" });
	}, [
		initialized,
		user,
		profile,
		loading,
		navigate
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[calc(100vh-120px)] px-6 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-lg mx-auto",
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
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "—",
							label: "Authentication"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]",
							children: "Sign in to"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif italic text-4xl sm:text-6xl tracking-tight text-[#d4ff00]",
							style: { textShadow: "0 0 30px rgba(212,255,0,0.35)" },
							children: "Save Your Rizz."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-white/60 max-w-md mx-auto leading-relaxed",
							children: "Sign in with Google to save your Identity Cards, track your Arena posts, and keep your username across sessions."
						})
					]
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
						delay: .15,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "mt-12 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: signInWithGoogle,
						disabled: loading,
						className: "w-full group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-tighter transition-all duration-300 hover:bg-[#d4ff00] disabled:opacity-50 disabled:cursor-not-allowed rounded-md",
						style: { boxShadow: "0 0 28px -6px rgba(255,255,255,0.3)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							className: "size-5",
							viewBox: "0 0 24 24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "currentColor",
									d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "currentColor",
									d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "currentColor",
									d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									fill: "currentColor",
									d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: loading ? "Signing in..." : "Continue with Google" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-white/40",
							children: "By signing in, you agree to our Terms of Service and Privacy Policy."
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						duration: .6,
						delay: .3
					},
					className: "mt-16 grid sm:grid-cols-3 gap-4 text-center",
					children: [
						{
							label: "Save Cards",
							desc: "Your Identity Cards are synced across devices"
						},
						{
							label: "Username",
							desc: "Pick a unique username visible everywhere"
						},
						{
							label: "Leaderboard",
							desc: "Your Arena posts link to your profile"
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 border border-white/10 bg-white/[0.02] rounded-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-bold text-white uppercase tracking-tight",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-white/50",
							children: item.desc
						})]
					}, item.label))
				})
			]
		})
	});
}
//#endregion
export { LoginPage as component };
