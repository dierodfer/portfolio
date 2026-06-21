# Portfolio — Diego Rodríguez Fernández

Personal developer portfolio built with [Astro](https://astro.build) and
[Tailwind CSS v4](https://tailwindcss.com). Single-page, bilingual (EN/ES),
with dark/light mode and an interactive technology filter that highlights the
projects and experience where each technology was used.

## Features

- **Bento-grid projects** with featured layouts
- **Icon-only technology stack** — click any technology to filter projects and experience
- **Bilingual** — English (default) at `/portfolio/`, Spanish at `/portfolio/es/`
- **Dark / light mode** with persisted preference
- **Scroll-reveal animations**, glassmorphic navbar, grain texture, scroll progress bar
- **Zero runtime dependencies** beyond Astro + Tailwind; static output

## Tech stack

- Astro 5 (static output)
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- TypeScript
- Technology icons from [Devicon](https://devicon.dev) (stored locally in `public/icons/tech/`)

## Development

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321/portfolio/
npm run build    # build static site to dist/
npm run preview  # preview the production build
```

## Customizing content

All content lives in `src/data/` as typed, bilingual data files:

| File | Purpose |
| --- | --- |
| `personal.ts` | Name, role, tagline, social links |
| `projects.ts` | Project cards (with featured sizing) |
| `technologies.ts` | Technologies grouped by category |
| `experience.ts` | Work experience timeline |
| `navigation.ts` | Navbar items |

UI strings are in `src/i18n/en.json` and `src/i18n/es.json`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. In the repository settings, set
**Settings → Pages → Source** to **GitHub Actions**.
