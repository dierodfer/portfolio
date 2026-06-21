import type { Localized } from "./personal";

export interface Project {
  id: string;
  title: Localized;
  description: Localized;
  technologies: string[]; // tech ids, cross-referenced with technologies.ts
  platforms?: string[]; // platform tech ids shown as badges (e.g. windows, macos, linux)
  githubUrl?: string;
  liveUrl?: string;
  icon?: string; // filename in public/icons/projects/
}

export const projects: Project[] = [
  {
    id: "catchthekiller",
    title: { en: "CatchTheKiller", es: "CatchTheKiller" },
    description: {
      en: "Interactive mystery and deduction game. Track down the culprit using the clues you gather along the way.",
      es: "Juego interactivo de misterio y deducción. Encuentra al culpable usando las pistas que recoges por el camino.",
    },
    technologies: ["react", "typescript", "tailwindcss", "vite"],
    githubUrl: "https://github.com/dierodfer/CatchTheKiller",
    icon: "catchthekiller.png",
  },
  {
    id: "arenaquiz",
    title: { en: "ArenaQuiz", es: "ArenaQuiz" },
    description: {
      en: "Competitive quiz platform with multiple categories and a fast-paced arena mode.",
      es: "Plataforma de quiz competitivo con múltiples categorías y un modo arena trepidante.",
    },
    technologies: ["react", "javascript", "supabase", "tailwindcss", "vite"],
    githubUrl: "https://github.com/dierodfer/ArenaQuiz",
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
      en: "Modern Go CLI application with a clean, idiomatic architecture.",
      es: "Aplicación CLI moderna en Go con una arquitectura limpia e idiomática.",
    },
    technologies: ["go", "boltdb"],
    githubUrl: "https://github.com/dierodfer/simple-bot",
  },
  {
    id: "planificador",
    title: {
      en: "Agronomist Task Planner",
      es: "Planificador Agrónomo",
    },
    description: {
      en: "Task planner tailored for agronomy management and field scheduling.",
      es: "Planificador de tareas para gestión agrónoma y programación de campo.",
    },
    technologies: ["angular", "typescript", "firebase", "pwa", "openlayers"],
    githubUrl: "https://github.com/dierodfer/planificador-tareas-agronomo",
  },
];
