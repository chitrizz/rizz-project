# Polish Pass: Scroll, Grid, Card, Quiz, Nav, ShineBorder

## 1. Fix "Three steps. Zero fumble." horizontal scroll
Problem: 3rd card never reaches view because the horizontal `x` translate is `-66.6%` (assumes 3×100vw cards). Cards are actually `55vw` wide with a header column above, so the track is too short and the section height (`260vh`) doesn't give enough scroll runway for card 3.

Fix in `src/routes/index.tsx` `PinnedHowItWorks`:
- Measure track properly: compute travel as `-(trackWidth - viewportWidth)` using a ref + `useTransform` driven by measured value (or simpler: set track to `width: max-content`, cards to fixed widths, and translate `x` from `0` to `calc(-100% + 100vw)` via a CSS var bound to scrollYProgress).
- Bump container to `h-[320vh]` so the last card fully lands.
- Use `offset: ["start start", "end end"]` (already set) but widen `useTransform` range with clamping and add a small dwell at the end (`[0, 0.9, 1]` → `["0%", endX, endX]`).
- Add subtle per-card opacity/scale tied to in-view progress for polish.

## 2. Fix "Six weapons. One mission." Arsenal grid
Problems (per screenshot): names like ASTRORIZZ and HOROSCOPE overflow card width; staggered `mt-*` offsets create awkward gaps; uneven row heights.

Fix in `src/routes/index.tsx` FEATURES section:
- Remove per-card `off` vertical offsets — keep clean 4-col grid (still "broken" via `col-span-2` on Quiz/Generator/Arena/Rate, square cards for AstroRizz/Horoscope).
- Reduce title size on single-column cards: use responsive clamp `text-[clamp(22px,2.4vw,38px)]` and add `break-words leading-[0.9]`.
- Add `min-w-0` to card and `truncate`-safe wrapping; ensure consistent `min-h-[240px]` and `h-full` so cards align.
- Tighten gap to `gap-4` and standardize padding.

## 3. Premium holographic Identity Card
Rebuild `src/components/IdentityCard.tsx` visuals (logic unchanged):
- Conic-gradient holographic border (rotating) using a pseudo-element.
- Iridescent inner sheen: layered radial gradients (lime/cyan/magenta) with `mix-blend-screen` plus a moving diagonal sheen (`background-position` animation).
- Chromatic chip / barcode strip mock at the bottom (SVG lines), plus a small "verified" hologram square (mini conic gradient).
- Stronger holo edge (replace `holo-edge` after-bar with full perimeter conic mask).
- Tilt-reactive specular highlight: a CSS variable updated on mouse-move inside `TiltCard` (extend `TiltCard.tsx` to expose `--mx/--my`) drives a radial gradient overlay that follows the cursor.
- Increase shadow, add 1px inner highlight (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.15)`), refine typography spacing.

Add a new `holo-card` utility in `src/styles.css` for the conic border + sheen keyframes (`holo-spin`, `sheen-pan`).

## 4. Readable quiz question typography
In `src/routes/quiz.index.tsx`:
- Swap question heading from Syne extrabold uppercase (`font-display ... uppercase tracking-tighter`) to a readable mixed-case treatment: `font-sans font-semibold text-2xl sm:text-3xl lg:text-4xl leading-[1.15] tracking-tight normal-case text-white`.
- Add a smaller serif accent (Instrument Serif italic) for the scenario lead-in if it starts with a quote.
- Increase line-height on answers to `leading-relaxed` and bump answer text size on mobile.

## 5. Nav bar: liquid glass + better hierarchy
Rework `src/components/GlassNav.tsx`:
- Pill container: thicker blur (`backdrop-blur-2xl`), layered translucent gradient background, inner highlight border (`shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]`), subtle outer glow.
- Add an animated "liquid" specular streak across the pill (CSS keyframe — a slow diagonal gradient sweep at very low opacity).
- Active link: pill-shaped lime underline that animates with `layoutId` (framer-motion) so it slides between items.
- Hover: each link gets a small glass chip background that fades in.
- Mobile menu: same liquid glass treatment, larger tap targets.
- Wrap the whole nav pill with the new `ShineBorder` for the rotating gradient outline.

## 6. ShineBorder primitive + global usage
Create `src/components/ui/shine-border.tsx`:
- Tailwind v4 compatible (no `tailwind.config.js`). Adapt the provided component to use inline-style gradient + a `@keyframes shine` defined in `src/styles.css`:
  ```css
  @keyframes shine {
    0%   { background-position: 0% 0%; }
    50%  { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }
  ```
  Add an `animate-shine` class via `@utility`.
- Component renders an absolutely-positioned gradient layer behind `children` masked with `padding-box`/`content-box` trick so only the border shows the moving gradient. Accepts `borderRadius`, `borderWidth`, `duration`, `color` (string or string[]).

Apply ShineBorder to high-impact surfaces only (avoid visual noise):
- Nav pill (`GlassNav`)
- Identity Card outer frame
- Feature cards in Arsenal grid (subtle, slow, low-contrast colors `["#d4ff00","#22d3ee","#ff2e93"]`)
- Final CTA section frame
- Quiz answer buttons on hover (optional: only the currently-hovered one)

## Technical notes
- Tailwind v4: no `tailwind.config.js` edits — keyframes/utilities go in `src/styles.css`.
- Keep all data, routes, stores untouched. Pure UI work.
- Respect `prefers-reduced-motion` (already global) — shine and holo animations inherit the override.
- No new deps required.

## Files touched
- `src/routes/index.tsx` (PinnedHowItWorks, FEATURES grid)
- `src/components/IdentityCard.tsx`
- `src/components/TiltCard.tsx` (expose mouse coords as CSS vars)
- `src/components/GlassNav.tsx`
- `src/routes/quiz.index.tsx`
- `src/styles.css` (shine keyframe, holo utilities, animate-shine)
- `src/components/ui/shine-border.tsx` (new)

## Out of scope
- Backend, data, route changes
- Replacing fonts
- New pages or features
