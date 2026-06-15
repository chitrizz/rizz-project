import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as SkewButton } from "./SkewButton-DQm-cxCW.mjs";
import { t as useArena } from "./arena-DZky2TGD.mjs";
import { t as getAuthorName } from "./anon-name-Bg6FN5Db.mjs";
import { t as RIZZ_CATEGORIES } from "./rizz-lines-BzOjcbPk.mjs";
import { t as SectionLabel } from "./SectionLabel-cVhLYZyM.mjs";
import { f as Plus, i as Trophy, s as Snowflake, t as X, u as Send, y as Flame } from "../_libs/lucide-react.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/arena-DbYUS9Ss.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function sortPosts(posts, sort) {
	const arr = [...posts];
	if (sort === "new") return arr.sort((a, b) => b.createdAt - a.createdAt);
	if (sort === "top") return arr.sort((a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes));
	if (sort === "controversial") return arr.sort((a, b) => Math.min(b.upvotes, b.downvotes) - Math.min(a.upvotes, a.downvotes));
	return arr.sort((a, b) => {
		const ageA = (Date.now() - a.createdAt) / 36e5 + 1;
		const ageB = (Date.now() - b.createdAt) / 36e5 + 1;
		return (b.upvotes - b.downvotes) / ageB - (a.upvotes - a.downvotes) / ageA;
	});
}
function ArenaPage() {
	const posts = useArena((s) => s.posts);
	const vote = useArena((s) => s.vote);
	const addPost = useArena((s) => s.addPost);
	const [sort, setSort] = (0, import_react.useState)("hot");
	const [openSubmit, setOpenSubmit] = (0, import_react.useState)(false);
	const sorted = (0, import_react.useMemo)(() => sortPosts(posts, sort), [posts, sort]);
	const leaders = (0, import_react.useMemo)(() => [...posts].sort((a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)).slice(0, 5), [posts]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 flex items-end justify-between flex-wrap gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: "05",
						label: "Battle Arena"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter text-white leading-[0.95]",
						children: "The"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif italic text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#d4ff00]",
						style: { textShadow: "0 0 30px rgba(212,255,0,0.35)" },
						children: "Coliseum."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-white/60 max-w-xl text-lg",
						children: "Submit your best lines. Community fires 🔥 or fizzes 🧊. Climb the all-time leaderboard."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkewButton, {
					onClick: () => setOpenSubmit(true),
					size: "lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Submit Line"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-[1fr_340px] gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1 mb-6 border-b border-white/10 overflow-x-auto no-scrollbar",
					children: [
						"hot",
						"new",
						"top",
						"controversial"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSort(s),
						className: `px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-wider border-b-2 -mb-px transition ${sort === s ? "border-[#d4ff00] text-[#d4ff00]" : "border-transparent text-white/40 hover:text-white"}`,
						children: s
					}, s))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px bg-white/10 border border-white/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: sorted.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							layout: true,
							initial: {
								opacity: 0,
								y: 8
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: { opacity: 0 },
							className: "bg-[#050505] hover:bg-[#0a0a0c] p-5 grid grid-cols-[auto_1fr] gap-5 transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center gap-1.5 pt-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => vote(p.id, "up"),
										className: `size-10 grid place-items-center border transition ${p.myVote === "up" ? "bg-[#d4ff00]/15 text-[#d4ff00] border-[#d4ff00]" : "border-white/10 text-white/40 hover:text-[#d4ff00] hover:border-[#d4ff00]/50"}`,
										"aria-label": "Upvote",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-base font-extrabold text-white tracking-tight",
										children: p.upvotes - p.downvotes
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => vote(p.id, "down"),
										className: `size-10 grid place-items-center border transition ${p.myVote === "down" ? "bg-[#ff2e93]/15 text-[#ff2e93] border-[#ff2e93]" : "border-white/10 text-white/40 hover:text-[#ff2e93] hover:border-[#ff2e93]/50"}`,
										"aria-label": "Downvote",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Snowflake, { className: "size-4" })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 mb-2 font-mono text-[10px] uppercase tracking-widest text-white/40",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-white/70 font-bold",
												children: ["@", p.author]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-1.5 py-0.5 bg-white/5 border border-white/10 text-white/60",
												children: p.category
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: timeAgo(p.createdAt) })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-white text-base sm:text-lg leading-snug",
										children: p.line
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex items-center gap-4 font-mono text-[10px] text-white/40 uppercase tracking-widest",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-3 text-[#d4ff00]" }),
												" ",
												p.upvotes
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Snowflake, { className: "size-3 text-[#ff2e93]" }),
												" ",
												p.downvotes
											]
										})]
									})
								]
							})]
						}, p.id))
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 border border-white/10 bg-[#0a0a0c] holo-edge",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-4 text-[#d4ff00]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-widest text-white/60 font-bold",
								children: "All-Time Top 5"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4",
							children: leaders.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3 border-t border-white/5 first:border-0 pt-4 first:pt-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-xl font-extrabold text-[#d4ff00] w-7 leading-none",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-mono text-[10px] font-bold text-white uppercase tracking-widest truncate",
											children: ["@", p.author]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-white/50 truncate mt-1",
											children: p.line
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-mono text-[10px] text-[#d4ff00] mt-1",
											children: [
												"+",
												p.upvotes - p.downvotes,
												" net"
											]
										})
									]
								})]
							}, p.id))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-5 border border-white/10 bg-[#0a0a0c] font-mono text-[10px] uppercase tracking-widest text-white/40 leading-relaxed",
						children: "Your votes & posts live in your browser. Cross-device sync ships with accounts."
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubmitModal, {
			open: openSubmit,
			onClose: () => setOpenSubmit(false),
			onSubmit: (category, line) => {
				addPost({
					author: getAuthorName(),
					category,
					line
				});
				toast.success("Dropped in the Arena. Good luck.");
				setOpenSubmit(false);
			}
		})]
	});
}
function SubmitModal({ open, onClose, onSubmit }) {
	const [line, setLine] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)(RIZZ_CATEGORIES[0].name);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 grid place-items-center p-4 bg-black/80 backdrop-blur-md",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 30,
				scale: .95
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: 30,
				scale: .95
			},
			onClick: (e) => e.stopPropagation(),
			className: "w-full max-w-md glass-strong border border-white/15 holo-edge p-6 relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "absolute top-4 right-4 size-8 grid place-items-center hover:bg-white/5",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4 text-white/60" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2",
					children: "Submission Protocol"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-extrabold text-white uppercase tracking-tighter",
					children: "Drop a line."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-white/60 mt-2",
					children: "You'll post anonymously. Let the people decide."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold",
						children: "Category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: cat,
						onChange: (e) => setCat(e.target.value),
						className: "mt-1.5 w-full h-10 bg-[#0a0a0c] border border-white/15 px-3 text-sm text-white outline-none focus:border-[#d4ff00]",
						children: RIZZ_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: c.name,
							className: "bg-zinc-900",
							children: [
								c.emoji,
								" ",
								c.name
							]
						}, c.id))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "font-mono text-[10px] uppercase tracking-widest text-white/50 font-bold",
							children: "Your line"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: line,
							onChange: (e) => setLine(e.target.value),
							rows: 4,
							maxLength: 240,
							placeholder: "Drop your best one-liner…",
							className: "mt-1.5 w-full bg-[#0a0a0c] border border-white/15 px-3 py-2.5 text-sm text-white outline-none resize-none placeholder:text-white/25 focus:border-[#d4ff00]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[10px] text-white/30 text-right mt-1",
							children: [line.length, "/240"]
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SkewButton, {
					className: "mt-6 w-full",
					onClick: () => {
						if (line.trim().length < 6) {
							toast.error("A bit longer, please.");
							return;
						}
						onSubmit(cat, line.trim());
						setLine("");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), " Post anonymously"]
				})
			]
		})
	}) });
}
function timeAgo(ts) {
	const s = Math.floor((Date.now() - ts) / 1e3);
	if (s < 60) return `${s}s ago`;
	const m = Math.floor(s / 60);
	if (m < 60) return `${m}m ago`;
	const h = Math.floor(m / 60);
	if (h < 24) return `${h}h ago`;
	return `${Math.floor(h / 24)}d ago`;
}
//#endregion
export { ArenaPage as component };
