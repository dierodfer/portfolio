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

### Technologies & Frameworks

**Languages**

[![Java](https://img.shields.io/badge/Java-ED8B00?logo=openjdk&logoColor=white)](https://www.java.com)
[![Go](https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white)](https://go.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](https://www.python.org)

**Frontend**

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)](https://angular.dev)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![jQuery](https://img.shields.io/badge/jQuery-0769AD?logo=jquery&logoColor=white)](https://jquery.com)

**Backend**

[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Apache Kafka](https://img.shields.io/badge/Apache%20Kafka-231F20?logo=apachekafka&logoColor=white)](https://kafka.apache.org)

**Cloud & DevOps**

[![AWS](https://img.shields.io/badge/AWS-232F3E?logo=amazonwebservices&logoColor=white)](https://aws.amazon.com)
[![Azure](https://img.shields.io/badge/Azure-0078D4?logo=microsoftazure&logoColor=white)](https://azure.microsoft.com)
[![Google Cloud](https://img.shields.io/badge/Google%20Cloud-4285F4?logo=googlecloud&logoColor=white)](https://cloud.google.com)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=white)](https://kubernetes.io)
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com)
[![Terraform](https://img.shields.io/badge/Terraform-7B42BC?logo=terraform&logoColor=white)](https://www.terraform.io)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](https://docs.github.com/en/actions)
[![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)](https://git-scm.com)
[![Linux](https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black)](https://www.linux.org)

## Features

- **Bento-grid projects** with featured layouts (2×2, 2×1, 1×1)
- **Icon-only technology stack** — click any technology to filter projects and experience
- **Bilingual** — English (default) at `/portfolio/`, Spanish at `/portfolio/es/`
- **Dark / light mode** with persisted preference
- **Scroll-reveal animations**, glassmorphic navbar, grain texture, scroll progress bar
- **Zero runtime dependencies** — single dependency (`astro`), pure CSS styling

## Built with

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
