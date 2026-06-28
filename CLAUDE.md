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
- **Devicon** — tech icons read from npm at build time, inlined as SVG
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

Both are inlined as SVG at build time. Icons with `darkInvert: true` (Kafka, Apple) get a CSS `filter: invert(0.85)` in dark mode.

To add a new technology: add entry to `technologies.ts` (grid) or `extraTech` (project-only), set `devicon` or `icon`. Run `npm run check` — `assertTechIds()` warns on unknown IDs in dev.

### Components

- `Section.astro` — shared wrapper (tag, title, hint, narrow)
- `Icon.astro` — 6 UI SVGs: github, linkedin, mail, external, briefcase, grid
- `TechIcon.astro` — renders tech icon by ID (inline SVG)
- `FloatingControls.astro` — fixed top-right pill: LangToggle + ThemeToggle
- `SectionNav.astro` — dot navigation, IntersectionObserver active tracking
- `TechFilter.astro` — click skill → popover with related projects/experience

### Scroll Snap

`<main>` is a dedicated scroll container (`height: 100dvh; overflow-y: auto`) with `scroll-snap-type: y mandatory` — the document itself does not scroll. Each `main > section` snaps at start with `min-height: 100dvh` (last section uses `min-height: auto`). Snapping is active on mobile too; there is no `scroll-snap-stop`, so a flick glides across sections with inertia before settling. Disabled only under `prefers-reduced-motion`. Because `<main>` (not the viewport) is the scroller, the `SectionNav` and reveal `IntersectionObserver`s pass `root: main`, and `ScrollProgress` reads `main.scrollTop`.

### Dark/Light Mode

CSS custom properties in `:root` / `.dark`. Theme script in `<head>` reads localStorage before first paint. Default: dark.

### Background Particles

`Particles.astro` is a fixed full-viewport `<canvas>` (`z-index: -1`) mounted once in `Layout.astro`, behind all content. Vanilla zero-dependency engine renders a slow-drifting **constellation** (points joined by thin lines when near), reads `--color-accent` (recoloured on theme toggle via a `MutationObserver`), and honors `prefers-reduced-motion` (static single frame).

## Code Conventions

- No Tailwind — all styling is native CSS (custom properties + scoped styles)
- Prefer editing existing components over creating new ones
- Keep i18n keys in sync: any new key must be added to both `en.json` and `es.json`
- Run `npm run check` before committing — catches type errors and unknown tech IDs
- Run `npm run format` to auto-format; CI enforces `format:check`
