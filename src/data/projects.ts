import type { Localized } from "./personal";

export interface Project {
  id: string;
  title: Localized;
  description: Localized;
  technologies: string[]; // tech ids, cross-referenced with technologies.ts
  githubUrl?: string;
  liveUrl?: string;
  featured?: "large" | "wide"; // large = 2x2, wide = 2x1
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
    technologies: ["javascript", "html", "css"],
    githubUrl: "https://github.com/dierodfer/CatchTheKiller",
    featured: "large",
    icon: "catchthekiller.png",
  },
  {
    id: "arenaquiz",
    title: { en: "ArenaQuiz", es: "ArenaQuiz" },
    description: {
      en: "Competitive quiz platform with multiple categories and a fast-paced arena mode.",
      es: "Plataforma de quiz competitivo con múltiples categorías y un modo arena trepidante.",
    },
    technologies: ["javascript", "html", "css"],
    githubUrl: "https://github.com/dierodfer/ArenaQuiz",
    featured: "wide",
  },
  {
    id: "queeens",
    title: { en: "Queeens", es: "Queeens" },
    description: {
      en: "Logic puzzle game based on the classic 8 queens problem.",
      es: "Juego de lógica basado en el clásico problema de las 8 reinas.",
    },
    technologies: ["typescript", "html", "css"],
    githubUrl: "https://github.com/dierodfer/queeens",
    icon: "queeens.png",
  },
  {
    id: "comicstore",
    title: { en: "Comic Store", es: "Tienda de Cómics" },
    description: {
      en: "A beautiful comic store front with an engaging, responsive interface.",
      es: "Una atractiva tienda de cómics con una interfaz responsive y cuidada.",
    },
    technologies: ["javascript", "html", "css"],
    githubUrl: "https://github.com/dierodfer/beautiful-comic-store",
  },
  {
    id: "desktasks",
    title: { en: "Desk Tasks", es: "Desk Tasks" },
    description: {
      en: "Lightweight desktop task manager with inline editing. Productivity without distractions.",
      es: "Gestor de tareas de escritorio ligero con edición inline. Productividad sin distracciones.",
    },
    technologies: ["typescript"],
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
    technologies: ["go"],
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
    technologies: ["typescript"],
    githubUrl: "https://github.com/dierodfer/planificador-tareas-agronomo",
  },
];
