# Portfolio - Developer Guide

## Build & Run

```bash
npm run dev        # Start dev server
npm run build      # Static build → dist/
npm run preview    # Preview built site
npm run check      # TypeScript + Astro type check
npm run format     # Format with Prettier
npm run format:check  # CI format lint
```

## Stack

- **Astro 6** — static output, zero JS by default, Vite 7/Rolldown
- **CSS nativo** — custom properties, scoped `<style>`, keyframes, scroll-snap
- **TypeScript** — strict, type-safe i18n keys
- **Devicon** — tech icons read from npm at build time, emitted as an SVG sprite
- **GitHub Pages** — `site: dierodfer.github.io`, `base: /portfolio`

## Architecture

### i18n

Two static pages: `/portfolio/` (EN) and `/portfolio/es/` (ES). Both render `Portfolio.astro` with a `lang` prop. UI strings live in `src/i18n/en.json` / `es.json`; data files use `Localized = { en: string; es: string }`.

- `t(key, lang)` — type-safe lookup; `TranslationKey` is derived from `en.json` structure
- `langPath(lang)` — builds base-aware URL for language switch
- Dev-time parity check warns if EN/ES keys diverge

### Paths

All links to static assets must use `withBase()` from `src/lib/paths.ts` to prepend `/portfolio`.

### Tech Icons

Icons come from two sources, resolved in `src/lib/icons.ts`:
- **Devicon** (`TechItem.devicon`): read from `node_modules/devicon/icons/{path}.svg`
- **Custom** (`TechItem.icon`): read from `public/icons/tech/{file}`

They ship as a **sprite**, not inlined per usage. `src/lib/techSprite.ts` emits one `<symbol>` per icon into a single hidden `<svg>` in `Layout.astro`; call sites render `<svg><use href="#tech-{id}">`. Inlining each icon at every usage site previously shipped the same SVG up to 5 times (the page was 1.4 MB, 93% inline SVG). Internal ids are prefixed per icon — devicon files use generic names like `id="a"`, and `url(#a)` resolves document-wide.

`usedTechIds()` derives the sprite from the grid plus every id referenced by projects and experience, so an `extraTech` entry nothing references is never shipped.

Icons with `darkInvert: true` (Kafka, Apple, Linux) get a CSS `filter: invert(0.85)` in dark mode — needed for any icon that declares no `fill` and would otherwise render black.

Prefer devicon's `-plain` variants over `-original` when one exists: `linux-original.svg` is a 190 KB gradient mesh, `linux-plain.svg` is 2.8 KB.

To add a new technology: add entry to `technologies.ts` (grid) or `extraTech` (project-only), set `devicon` or `icon`. Run `npm run check` — `assertTechIds()` warns on unknown IDs in dev.

### Components

- `Section.astro` — shared wrapper (tag, title, hint)
- `Icon.astro` — 11 UI SVGs: github, linkedin, mail, external, briefcase, grid, code, pin, award, shuffle, filter
- `TechIcon.astro` — renders tech icon by ID via `<use>` into the sprite
- `FloatingControls.astro` — fixed top-right pill: LangToggle + ThemeToggle
- `SectionNav.astro` — dot navigation, IntersectionObserver active tracking
- `TechFilterBar.astro` — reserved filter zone rendered per filterable section
- `TechFilter.astro` — script-only controller driving every filter bar

### Skill Filter

There is no Skills section. The tech grid lives inside a filter panel instead: `TechFilterBar.astro`
renders a sticky toolbar at the top of Experience and Projects with a "filter by skill" button, the
active-filter chips, a clear button and a `visible/total` counter. The panel groups skills by the
same categories as `technologies.ts`.

Selection is **OR** — a card survives if it uses *any* selected skill — and it is shared: both bars
show the same state and filter both sections at once. `TechFilter.astro` is the single controller
(mounted once in `Portfolio.astro`, outside `<main>`); it keeps one `Set` of ids and, on every
change, walks `[data-tech]` and toggles `.filtered-out` (`display: none`). `ExperienceItem` and
`ProjectCard` stamp that attribute from `projectTechIds()` / `experienceTechIds()` in
`src/lib/techFilter.ts`, which also computes the per-skill match counts used to disable options
nothing references.

Two gotchas: `hidden` is only a UA-level `display: none`, so any element the controller hides needs
an explicit `[hidden] { display: none }` rule to beat its own `display`; and every string in the
panel needs `i18nText`/`i18nTextLoc`, since the language switch is a client-side text swap with no
reload.

### Scroll Snap

`<main>` is a dedicated scroll container (`height: 100dvh; overflow-y: auto`) with `scroll-snap-type: y mandatory` — the document itself does not scroll. Each `main > section` snaps at start with `min-height: 100dvh` (last section uses `min-height: auto`). Snapping is active on mobile too; there is no `scroll-snap-stop`, so a flick glides across sections with inertia before settling. Disabled only under `prefers-reduced-motion`. Because `<main>` (not the viewport) is the scroller, the `SectionNav` and reveal `IntersectionObserver`s pass `root: main`, and `ScrollProgress` reads `main.scrollTop`.

### Dark/Light Mode

CSS custom properties in `:root` / `.dark`. Theme script in `<head>` reads localStorage before first paint. Default: dark.

### Page reveal

`body` fades in via a pure-CSS `bodyFadeIn` animation in `global.css`. Keep it that way — it used to start at `opacity: 0` and wait for a deferred module script to add `.loaded`, which meant nothing painted until the whole document parsed, and any script error left the page permanently blank.

The reveal-on-scroll `IntersectionObserver` in `Layout.astro` is one-shot (`unobserve` after adding `.visible`). Re-hiding on exit made scroll-snap replay all 24 staggered transitions on every pass.

### Background Particles

`Particles.astro` is a fixed full-viewport `<canvas>` (`z-index: -1`) mounted once in `Layout.astro`, behind all content. Vanilla zero-dependency engine drawing a single "constellation" mode: drifting points joined by lines when near. It reads `--color-accent` (recoloured on theme toggle via a `MutationObserver` scoped to `attributeFilter: ["class"]`).

Because it repaints the whole viewport every frame, the cost controls matter: DPR is capped at 2, particle count scales with viewport (28 on mobile, 80 max), `prefers-reduced-motion` draws a single static frame and is re-checked on change, the loop stops on `visibilitychange`, and resize is debounced 150ms (it reallocates the canvas backing store and every particle).

## Code Conventions

- No Tailwind — all styling is native CSS (custom properties + scoped styles)
- Prefer editing existing components over creating new ones
- Keep i18n keys in sync: any new key must be added to both `en.json` and `es.json`
- Run `npm run check` before committing — catches type errors and unknown tech IDs
- Run `npm run format` to auto-format; CI enforces `format:check`
