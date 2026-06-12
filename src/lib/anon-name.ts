const ADJECTIVES = [
  "Smooth","Cosmic","Flirty","Certified","Velvet","Neon","Quiet","Chaotic","Soft","Reckless",
  "Magnetic","Midnight","Lowkey","Highkey","Stoic","Feral","Royal","Spicy","Drowsy","Wired",
];
const NOUNS = [
  "Potato","Rizzler","Penguin","Charmer","Phantom","Operator","Monk","Siren","Wizard","Cowboy",
  "Pigeon","Tycoon","Magician","Sphinx","Bandit","Daydreamer","Nightowl","Sage","Catfish","Heartbreak",
];

export function generateAnonName(): string {
  const a = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const n = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  const num = Math.floor(Math.random() * 900 + 100);
  return `${a}${n}${num}`;
}
