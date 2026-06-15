import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useAuth } from "./auth-Cj-c6EQn.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/callback-BmghdO8U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthCallbackPage() {
	const navigate = useNavigate();
	const { user, profile, initialize, loading } = useAuth();
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		initialize();
	}, [initialize]);
	(0, import_react.useEffect)(() => {
		async function handleAuth() {
			try {
				if (loading) return;
				if (user) if (profile) navigate({ to: "/profile" });
				else navigate({ to: "/complete-profile" });
			} catch (err) {
				console.error("Auth callback error:", err);
				setError("Authentication failed. Please try again.");
			}
		}
		handleAuth();
	}, [
		user,
		profile,
		loading,
		navigate
	]);
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[calc(100vh-120px)] px-6 py-12 flex items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-bold text-[#ff2e93] uppercase tracking-tighter",
					children: "Authentication Failed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-white/60",
					children: error
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => navigate({ to: "/login" }),
					className: "mt-8 px-6 py-3 bg-white/10 border border-white/20 text-white font-bold uppercase tracking-tighter rounded-md hover:bg-white/20 transition",
					children: "Back to Sign In"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-[calc(100vh-120px)] px-6 py-12 flex items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: { rotate: 360 },
				transition: {
					duration: 1,
					repeat: Infinity,
					ease: "linear"
				},
				className: "size-12 mx-auto border-2 border-[#d4ff00] border-t-transparent rounded-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-mono text-xs uppercase tracking-widest text-white/50",
				children: "Completing sign in..."
			})]
		})
	});
}
//#endregion
export { AuthCallbackPage as component };
