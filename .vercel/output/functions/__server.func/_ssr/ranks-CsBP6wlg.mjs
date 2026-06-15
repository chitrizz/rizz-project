//#region node_modules/.nitro/vite/services/ssr/assets/ranks-CsBP6wlg.js
var RANKS = [
	{
		min: 0,
		max: 20,
		title: "Rizz Rookie",
		emoji: "😐",
		tagline: "You opened the app. That's a start.",
		rarity: "Common",
		accent: "pink"
	},
	{
		min: 21,
		max: 40,
		title: "Awkward Texter",
		emoji: "📱",
		tagline: "Three dots forever. We see you.",
		rarity: "Common",
		accent: "cyan"
	},
	{
		min: 41,
		max: 55,
		title: "Mid Rizz Energy",
		emoji: "🌫️",
		tagline: "Vibe is undefined but salvageable.",
		rarity: "Rare",
		accent: "purple"
	},
	{
		min: 56,
		max: 70,
		title: "Smooth Talker",
		emoji: "😏",
		tagline: "You can hold a conversation. Respect.",
		rarity: "Rare",
		accent: "purple"
	},
	{
		min: 71,
		max: 85,
		title: "Smooth Operator",
		emoji: "🎷",
		tagline: "Words flow. People notice. Inbox grows.",
		rarity: "Epic",
		accent: "magenta"
	},
	{
		min: 86,
		max: 95,
		title: "Certified Rizz Lord",
		emoji: "👑",
		tagline: "You should be charging consulting fees.",
		rarity: "Legendary",
		accent: "gold"
	},
	{
		min: 96,
		max: 100,
		title: "Ultimate Rizz Master",
		emoji: "💎",
		tagline: "Mythic-tier. Even mirrors flirt back.",
		rarity: "Mythic",
		accent: "gold"
	}
];
function rankFor(score) {
	return RANKS.find((r) => score >= r.min && score <= r.max) ?? RANKS[0];
}
var TRAIT_POOL = [
	"Certified Charmer",
	"Texting Wizard",
	"Social Butterfly",
	"Mystery Magnet",
	"Meme Lord",
	"Conversation Ninja",
	"Corporate Casanova",
	"Silent Assassin",
	"Heart Collector",
	"Chaos Charmer",
	"Astro Flirter",
	"Professional Rizzler",
	"Eye Contact King",
	"Soft Launch Specialist",
	"Chronic Smooth-Brain"
];
function traitsFor(score, seed) {
	const pool = [...TRAIT_POOL];
	const out = [];
	let s = seed || 1;
	const count = score >= 86 ? 3 : score >= 60 ? 2 : 1;
	for (let i = 0; i < count && pool.length; i++) {
		s = (s * 9301 + 49297) % 233280;
		const idx = Math.floor(s / 233280 * pool.length);
		out.push(pool.splice(idx, 1)[0]);
	}
	return out;
}
function cardNumber(seed) {
	const n = Math.abs(seed * 2654435761) % 99999;
	return `RZ-${String(n).padStart(5, "0")}`;
}
//#endregion
export { rankFor as n, traitsFor as r, cardNumber as t };
