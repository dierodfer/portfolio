import type { Localized } from "./personal";

export interface TechItem {
  id: string;
  name: string;
  devicon?: string; // path within devicon/icons/, e.g. "java/java-original"
  icon?: string; // custom SVG filename in public/icons/tech/
  darkInvert?: boolean; // needs CSS invert filter on dark backgrounds
}

export interface TechCategory {
  name: Localized;
  items: TechItem[];
}

export const technologies: TechCategory[] = [
  {
    name: { en: "Languages", es: "Lenguajes" },
    items: [
      { id: "java", name: "Java", devicon: "java/java-original" },
      { id: "go", name: "Go", devicon: "go/go-original" },
      {
        id: "typescript",
        name: "TypeScript",
        devicon: "typescript/typescript-original",
      },
      {
        id: "javascript",
        name: "JavaScript",
        devicon: "javascript/javascript-original",
      },
    ],
  },
  {
    name: { en: "Frontend", es: "Frontend" },
    items: [
      { id: "react", name: "React", devicon: "react/react-original" },
      { id: "angular", name: "Angular", devicon: "angular/angular-original" },
      { id: "jquery", name: "jQuery", devicon: "jquery/jquery-original" },
    ],
  },
  {
    name: { en: "Backend", es: "Backend" },
    items: [
      { id: "spring", name: "Spring Boot", devicon: "spring/spring-original" },
      {
        id: "postgresql",
        name: "PostgreSQL",
        devicon: "postgresql/postgresql-original",
      },
      {
        id: "supabase",
        name: "Supabase",
        devicon: "supabase/supabase-original",
      },
      {
        id: "firebase",
        name: "Firebase",
        devicon: "firebase/firebase-original",
      },
      {
        id: "kafka",
        name: "Apache Kafka",
        devicon: "apachekafka/apachekafka-original",
        darkInvert: true,
      },
      {
        id: "mongodb",
        name: "MongoDB",
        devicon: "mongodb/mongodb-original",
      },
      { id: "oracle", name: "Oracle", devicon: "oracle/oracle-original" },
    ],
  },
  {
    name: { en: "Cloud & DevOps", es: "Cloud & DevOps" },
    items: [
      {
        id: "aws",
        name: "AWS",
        devicon: "amazonwebservices/amazonwebservices-line-wordmark",
      },
      { id: "azure", name: "Azure", devicon: "azure/azure-original" },
      {
        id: "gcp",
        name: "Google Cloud",
        devicon: "googlecloud/googlecloud-original",
      },
      {
        id: "kubernetes",
        name: "Kubernetes",
        devicon: "kubernetes/kubernetes-original",
      },
      { id: "docker", name: "Docker", devicon: "docker/docker-original" },
      {
        id: "terraform",
        name: "Terraform",
        devicon: "terraform/terraform-original",
      },
      {
        id: "githubactions",
        name: "GitHub Actions",
        devicon: "githubactions/githubactions-original",
      },
      { id: "git", name: "Git", devicon: "git/git-original" },
      { id: "linux", name: "Linux", devicon: "linux/linux-original" },
    ],
  },
];

export const extraTech: TechItem[] = [
  { id: "wails", name: "Wails", icon: "wails.svg" },
  { id: "boltdb", name: "BoltDB", icon: "boltdb.svg" },
  { id: "pwa", name: "PWA", icon: "pwa.svg" },
  { id: "openlayers", name: "OpenLayers", icon: "openlayers.svg" },
  {
    id: "windows",
    name: "Windows",
    devicon: "windows11/windows11-original",
  },
  {
    id: "macos",
    name: "macOS",
    devicon: "apple/apple-original",
    darkInvert: true,
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    devicon: "tailwindcss/tailwindcss-original",
  },
  { id: "vite", name: "Vite", devicon: "vite/vite-original" },
  { id: "html", name: "HTML5", devicon: "html5/html5-original" },
  { id: "css", name: "CSS3", devicon: "css3/css3-original" },
  { id: "nodejs", name: "Node.js", devicon: "nodejs/nodejs-original" },
  { id: "python", name: "Python", devicon: "python/python-original" },
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
