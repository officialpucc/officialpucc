# Landing Page Polish — One Thing at a Time

A prioritized backlog of changes to make the landing page feel more alive without fighting the "Simple. Quiet. Honest." brand voice.

Work top-to-bottom. Each item is scoped to be shippable on its own.

---

## Library decision: skip AOS

`app/components/Reveal.tsx` already does what AOS does (IntersectionObserver → add a class → CSS transition). AOS has also been unmaintained since ~2019.

**Recommendation:** keep `Reveal` and extend it with variants. If we ever want physics-based motion (spring, drag, layout animations), reach for [`motion`](https://motion.dev) (Framer Motion's successor) — tree-shakable, React 19 friendly. Don't add it until a specific item below actually needs it.

---

## Priority 1 — Highest leverage

### 1. Count-up on the 18–20 stat (`Fault.tsx`)

The big number is the emotional anchor of the section but currently renders static. Animate `0 → 18` (then settle on the dash range) when it scrolls into view.

- File: `app/components/Fault.tsx`
- Approach: small client-side hook (`useCountUp`) gated on IntersectionObserver, no library needed.
- Respect `prefers-reduced-motion` — render the final value immediately if reduced motion is set.

### 2. Hero atmosphere (`Header.tsx`)

The hero is a black field with one small logo and four lines of text. Three additive layers, in order of payoff:

1. **Soft violet radial glow** behind the headline (CSS `radial-gradient`, no JS).
2. **Subtle SVG grain overlay** at ~6% opacity — gives the black depth and an editorial feel.
3. **Color flush on `pucc.`** in the H1 — cream → violet over ~900ms on first paint.

Keep the logo and the "Keep Reading" arrow where they are.

### 3. Reveal variants

Today every section fades up the same way. Add a `variant` prop to `Reveal`:

- `fade-up` (current default)
- `slide-left` / `slide-right` (alternate `Defs` cards)
- `blur-in` (good for the pull quote)
- `stagger-words` (footer headline, one word at a time)

Implementation: add classes in `globals.css` mirroring the existing `.reveal` / `.reveal.visible` pattern. No new dependencies.

---

## Priority 2 — Polish

### 4. Step numbers count up (`How.tsx`)

Same hook as item 1, applied to `01` / `02` / `03`. Stagger the cards 150ms apart (the `delay` prop is already wired up).

### 5. Replace `animate-bounce` arrow

Tailwind's default bounce is goofy and fights the brand. Custom keyframe: 6px vertical drift, ~2.4s ease-in-out, infinite.

- File: `app/components/Header.tsx` line 36
- Add the keyframe to `globals.css`.

### 6. Cursor-tracked glow in dark sections

Soft violet radial that follows the mouse in `.defs` and `.footer-cta`. Listen on the section, set CSS variables `--mx` / `--my`, paint via `radial-gradient(circle at var(--mx) var(--my), ...)`. No library.

Disable on touch devices and under `prefers-reduced-motion`.

### 7. Thin gold scroll-progress bar

Fixed 2px line at the top of the viewport, fills left-to-right with `--gold` as the page scrolls. On-brand, editorial, ~30 lines.

---

## Priority 3 — Nice to have

### 8. Button hover with motion

`btn-primary` and `btn-ghost` only swap colors. Options:

- Trailing arrow that translates 4px on hover.
- Underline that grows from left to right.

Pick one and apply consistently.

### 9. Section transitions

The tonal shifts (cream → violet → cream → soft → ink → cream → soft → ink) are good but the seams are abrupt. A 1px diagonal seam or a small mono-typeset "chapter break" mark between sections would make the rhythm feel intentional.

### 10. Add photography

The page is text-only. A single well-cropped photo — a hand holding a pucc, a dinner table, two people across from each other — between `NFS` and `How`, or as a hero background at low opacity, would change the emotional weight more than any animation. Currently `public/` only has logo files.

This is a content task, not a code task. Listed last because it's blocked on assets.

---

## Out of scope (intentionally)

- AOS or other scroll-animation libraries — see top of doc.
- Replacing `Reveal` with `motion` — only if/when item 3 is no longer enough.
- Redesigning the type system, color palette, or section structure — they're working.
