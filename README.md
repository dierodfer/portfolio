# Portfolio — Diego Rodríguez Fernández

[![Astro](https://img.shields.io/badge/Astro-6-bc52ee?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![CSS](https://img.shields.io/badge/CSS-Native-1572b6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=githubpages&logoColor=white)](https://dierodfer.github.io/portfolio/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Personal developer portfolio — single-page, bilingual (EN/ES), with dark/light
mode and an interactive technology filter that highlights the projects and
experience where each technology was used.

> **Live:** [dierodfer.github.io/portfolio](https://dierodfer.github.io/portfolio/)

## Features

- **Bento-grid projects** with featured layouts (2×2, 2×1, 1×1)
- **Icon-only technology stack** — click any technology to filter projects and experience
- **Bilingual** — English (default) at `/portfolio/`, Spanish at `/portfolio/es/`
- **Dark / light mode** with persisted preference
- **Scroll-reveal animations**, glassmorphic navbar, grain texture, scroll progress bar
- **Zero runtime dependencies** — single dependency (`astro`), pure CSS styling

## Tech stack

| Technology | Purpose |
| --- | --- |
| [Astro 6](https://astro.build) | Static site generation, zero JS by default |
| [TypeScript](https://www.typescriptlang.org) | Type-safe data models and helpers |
| CSS native | Custom properties, scoped styles, keyframes, IntersectionObserver |
| [Devicon](https://devicon.dev) | Technology SVG icons (stored locally) |
| [GitHub Actions](https://docs.github.com/en/actions) | CI/CD deploy to GitHub Pages |

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
