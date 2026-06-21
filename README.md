# Developer Portfolio

[![Astro](https://img.shields.io/badge/Astro-6-bc52ee?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![CSS](https://img.shields.io/badge/CSS-Native-1572b6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=githubpages&logoColor=white)](https://dierodfer.github.io/portfolio/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A single-page, bilingual (EN/ES) developer portfolio built with Astro and pure
CSS. Static, fast, and zero runtime dependencies.

## 🔗 Live site

**[dierodfer.github.io/portfolio](https://dierodfer.github.io/portfolio/)**

## Features

- **Bilingual** — English at `/portfolio/` and Spanish at `/portfolio/es/`, with static routes and `hreflang` SEO
- **Skills explorer** — tap a skill to see the projects and experience where it was used
- **Dark / light mode** with persisted preference
- **Accessible** — skip link, keyboard focus styles, reduced-motion support
- **Polished motion** — scroll-reveal animations, glassmorphic navbar, scroll progress bar
- **Zero runtime dependencies** — single `astro` dependency, pure CSS styling

## Built with

| Technology | Purpose |
| --- | --- |
| [Astro 6](https://astro.build) | Static site generation, zero JS by default |
| [TypeScript](https://www.typescriptlang.org) | Type-safe data models and i18n keys |
| CSS native | Custom properties, scoped styles, keyframes, IntersectionObserver |
| [Devicon](https://devicon.dev) | Technology SVG icons (stored locally) |
| [GitHub Actions](https://docs.github.com/en/actions) | CI/CD deploy to GitHub Pages |

## Development

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:4321/portfolio/
npm run build      # build static site to dist/
npm run preview    # preview the production build
npm run check      # type-check with astro check
npm run format     # format with Prettier
```

## Project structure

Content lives in `src/data/` as typed, bilingual data files, so updating the
site means editing data — not markup:

| File | Purpose |
| --- | --- |
| `personal.ts` | Name, role, tagline, social links |
| `projects.ts` | Project cards |
| `technologies.ts` | Skills grouped by category |
| `experience.ts` | Work experience timeline |
| `navigation.ts` | Navbar items |

UI strings are in `src/i18n/en.json` and `src/i18n/es.json`. Components live in
`src/components/`, with shared layout in `src/layouts/`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which type-checks,
verifies formatting, builds the site, and publishes it to GitHub Pages. In the
repository settings, set **Settings → Pages → Source** to **GitHub Actions**.

## License

[MIT](LICENSE)
