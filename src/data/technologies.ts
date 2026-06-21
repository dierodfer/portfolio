import type { Localized } from "./personal";

export interface TechItem {
  id: string; // unique key, matches project/experience `technologies`
  name: string; // tooltip label
  icon: string; // SVG filename in public/icons/tech/
}

export interface TechCategory {
  name: Localized;
  items: TechItem[];
}

export const technologies: TechCategory[] = [
  {
    name: { en: "Languages", es: "Lenguajes" },
    items: [
      { id: "java", name: "Java", icon: "java.svg" },
      { id: "go", name: "Go", icon: "go.svg" },
      { id: "typescript", name: "TypeScript", icon: "typescript.svg" },
      { id: "javascript", name: "JavaScript", icon: "javascript.svg" },
    ],
  },
  {
    name: { en: "Frontend", es: "Frontend" },
    items: [
      { id: "react", name: "React", icon: "react.svg" },
      { id: "angular", name: "Angular", icon: "angular.svg" },
      { id: "jquery", name: "jQuery", icon: "jquery.svg" },
    ],
  },
  {
    name: { en: "Backend", es: "Backend" },
    items: [
      { id: "spring", name: "Spring Boot", icon: "spring.svg" },
      { id: "postgresql", name: "PostgreSQL", icon: "postgresql.svg" },
      { id: "supabase", name: "Supabase", icon: "supabase.svg" },
      { id: "firebase", name: "Firebase", icon: "firebase.svg" },
      { id: "kafka", name: "Apache Kafka", icon: "kafka.svg" },
    ],
  },
  {
    name: { en: "Cloud & DevOps", es: "Cloud & DevOps" },
    items: [
      { id: "aws", name: "AWS", icon: "aws.svg" },
      { id: "azure", name: "Azure", icon: "azure.svg" },
      { id: "gcp", name: "Google Cloud", icon: "gcp.svg" },
      { id: "kubernetes", name: "Kubernetes", icon: "kubernetes.svg" },
      { id: "docker", name: "Docker", icon: "docker.svg" },
      { id: "terraform", name: "Terraform", icon: "terraform.svg" },
      { id: "githubactions", name: "GitHub Actions", icon: "githubactions.svg" },
      { id: "git", name: "Git", icon: "git.svg" },
      { id: "linux", name: "Linux", icon: "linux.svg" },
    ],
  },
];

/**
 * Project-only technologies — niche tools shown on project cards to convey the
 * full stack (frameworks, DBs), but not featured as headline skills in the grid.
 */
export const extraTech: TechItem[] = [
  { id: "wails", name: "Wails", icon: "wails.svg" },
  { id: "boltdb", name: "BoltDB", icon: "boltdb.svg" },
  { id: "pwa", name: "PWA", icon: "pwa.svg" },
  { id: "openlayers", name: "OpenLayers", icon: "openlayers.svg" },
  { id: "windows", name: "Windows", icon: "windows.svg" },
  { id: "macos", name: "macOS", icon: "macos.svg" },
  { id: "tailwindcss", name: "Tailwind CSS", icon: "tailwindcss.svg" },
  { id: "vite", name: "Vite", icon: "vite.svg" },
  { id: "html", name: "HTML5", icon: "html5.svg" },
  { id: "css", name: "CSS3", icon: "css3.svg" },
  { id: "nodejs", name: "Node.js", icon: "nodejs.svg" },
  { id: "python", name: "Python", icon: "python.svg" },
];

/** Flat lookup of every tech by id, for rendering icons in projects/experience. */
export const techById: Record<string, TechItem> = Object.fromEntries(
  [...technologies.flatMap((cat) => cat.items), ...extraTech].map((item) => [
    item.id,
    item,
  ]),
);

export function assertTechIds(ids: string[], context: string): void {
  if (!import.meta.env.DEV) return;
  for (const id of ids) {
    if (!techById[id]) {
      console.warn(`[tech] Unknown tech id "${id}" in ${context}`);
    }
  }
}
