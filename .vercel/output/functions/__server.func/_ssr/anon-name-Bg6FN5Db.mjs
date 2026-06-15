import { n as useAuth } from "./auth-Cj-c6EQn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/anon-name-Bg6FN5Db.js
var ADJECTIVES = [
	"Smooth",
	"Cosmic",
	"Flirty",
	"Certified",
	"Velvet",
	"Neon",
	"Quiet",
	"Chaotic",
	"Soft",
	"Reckless",
	"Magnetic",
	"Midnight",
	"Lowkey",
	"Highkey",
	"Stoic",
	"Feral",
	"Royal",
	"Spicy",
	"Drowsy",
	"Wired"
];
var NOUNS = [
	"Potato",
	"Rizzler",
	"Penguin",
	"Charmer",
	"Phantom",
	"Operator",
	"Monk",
	"Siren",
	"Wizard",
	"Cowboy",
	"Pigeon",
	"Tycoon",
	"Magician",
	"Sphinx",
	"Bandit",
	"Daydreamer",
	"Nightowl",
	"Sage",
	"Catfish",
	"Heartbreak"
];
function generateAnonName() {
	return `${ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]}${NOUNS[Math.floor(Math.random() * NOUNS.length)]}${Math.floor(Math.random() * 900 + 100)}`;
}
function getAuthorName() {
	const { profile } = useAuth.getState();
	if (profile?.username) return profile.username;
	return generateAnonName();
}
//#endregion
export { getAuthorName as t };
