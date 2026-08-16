import type { Localized } from "./personal";

export interface Project {
  id: string;
  title: Localized;
  description: Localized;
  technologies: string[]; // tech ids, cross-referenced with technologies.ts
  platforms?: string[]; // platform tech ids shown as badges (e.g. windows, macos, linux)
  githubUrl?: string;
  liveUrl?: string;
  icon?: string; // filename in public/icons/projects/, theme-agnostic
  // For a logo whose ink color is tuned per background (e.g. a wordmark with
  // light ink for dark cards): supply both instead of `icon`. Swapped by CSS,
  // same pattern as ThemeToggle's icon-sun/icon-moon.
  iconDark?: string; // shown when the site is in dark mode
  iconLight?: string; // shown when the site is in light mode
}

export const projects: Project[] = [
  {
    id: "catchthekiller",
    title: { en: "Catch the killer", es: "Catch the killer" },
    description: {
      en: "Interactive mystery and deduction game. Track down the culprit using the clues you gather along the way.",
      es: "Juego interactivo de misterio y deducción. Encuentra al culpable usando las pistas que recoges por el camino.",
    },
    technologies: ["react", "typescript", "tailwindcss", "vite", "pwa"],
    githubUrl: "https://github.com/dierodfer/CatchTheKiller",
    liveUrl: "https://dierodfer.github.io/CatchTheKiller/",
    icon: "catchthekiller.png",
  },
  {
    id: "arenaquiz",
    title: { en: "ArenaQuiz", es: "ArenaQuiz" },
    description: {
      en: "Kahoot-style quiz app for real-time group play — join instantly via a room link, no installation needed.",
      es: "App de quiz estilo Kahoot para jugar en grupo en tiempo real: te unes al instante con un enlace de sala, sin instalación.",
    },
    technologies: ["react", "javascript", "supabase", "tailwindcss", "vite"],
    githubUrl: "https://github.com/dierodfer/ArenaQuiz",
    liveUrl: "https://dierodfer.github.io/ArenaQuiz/",
    icon: "arenaquiz.svg",
  },
  {
    id: "queeens",
    title: { en: "Queeens", es: "Queeens" },
    description: {
      en: "Logic puzzle game based on the classic 8 queens problem.",
      es: "Juego de lógica basado en el clásico problema de las 8 reinas.",
    },
    technologies: ["react", "typescript", "vite"],
    githubUrl: "https://github.com/dierodfer/queeens",
    liveUrl: "https://dierodfer.github.io/queeens/",
    icon: "queeens.png",
  },
  {
    id: "desktasks",
    title: { en: "Desk Tasks", es: "Desk Tasks" },
    description: {
      en: "Lightweight desktop task manager with inline editing. Productivity without distractions.",
      es: "Gestor de tareas de escritorio ligero con edición inline. Productividad sin distracciones.",
    },
    technologies: ["go", "wails", "react", "typescript", "boltdb"],
    platforms: ["windows", "macos", "linux"],
    githubUrl: "https://github.com/dierodfer/desk-tasks",
    icon: "desktasks.png",
  },
  {
    id: "simplebot",
    title: { en: "Simple Bot", es: "Simple Bot" },
    description: {
      en: "Go CLI that scans a live MMO market, flags profitable items, and executes purchases automatically.",
      es: "CLI en Go que analiza el mercado en vivo de un MMO, detecta artículos rentables y ejecuta compras automáticamente.",
    },
    technologies: ["go", "boltdb"],
    githubUrl: "https://github.com/dierodfer/simple-bot",
  },
  {
    id: "clione",
    title: { en: "CLIOne", es: "CLIOne" },
    description: {
      en: "Checks the main libraries and technologies installed on your machine and updates them natively.",
      es: "Comprueba las principales librerías y tecnologías instaladas en tu máquina y las actualiza de forma nativa.",
    },
    technologies: ["go"],
    platforms: ["linux", "macos"],
    githubUrl: "https://github.com/dierodfer/cliOne",
    iconDark: "clione-logo-dark.svg",
    iconLight: "clione-logo-light.svg",
  },
  {
    id: "agentcolony",
    title: { en: "AgentColony", es: "AgentColony" },
    description: {
      en: "Local application that runs up to 8 CLI agents (Copilot, Claude Code, opencode) in parallel, answering questions and offering an interactive agent map.",
      es: "Aplicación local que ejecuta hasta 8 agentes CLI (Copilot, Claude Code, opencode) en paralelo, respondiendo preguntas y ofreciendo un mapa interactivo de agentes.",
    },
    technologies: ["react", "typescript", "tailwindcss", "vite"],
    githubUrl: "https://github.com/dierodfer/AgentColony",
    icon: "agentcolony.png",
  },
  {
    id: "planificador",
    title: {
      en: "Agronomist Task Planner",
      es: "Planificador Agrónomo",
    },
    description: {
      en: "Agronomy task planner with offline support, background alerts, and geolocation for field work.",
      es: "Planificador agrónomo con soporte offline, alertas en segundo plano y geolocalización para el trabajo de campo.",
    },
    technologies: ["angular", "typescript", "firebase", "pwa", "openlayers"],
    githubUrl: "https://github.com/dierodfer/planificador-tareas-agronomo",
    liveUrl: "https://angular-222712.web.app",
    icon: "planificador.png",
  },
];
