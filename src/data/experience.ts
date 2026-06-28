import type { Localized } from "./personal";

export interface ExperienceRole {
  role: Localized;
  client?: string;
  period: Localized;
  location: Localized;
  description: Localized[];
  technologies: string[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  /** Image filename in public/icons/companies/ */
  logo: string;
  /** When true the logo tile uses a dark background (for white-on-dark logos). */
  logoDark?: boolean;
  /** Override the rail year (defaults to first role's period year). */
  startYear?: string;
  roles: ExperienceRole[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "nunegal",
    company: "Nunegal Consulting",
    logo: "nunegal.png",
    roles: [
      {
        role: { en: "Technical Lead", es: "Technical Lead" },
        client: "Inditex tech",
        period: { en: "2025", es: "2025" },
        location: { en: "A Coruña, Galicia", es: "A Coruña, Galicia" },
        description: [
          {
            en: "End-to-end delivery of back-office applications: hexagonal microservices, event-driven messaging and frontend.",
            es: "Entrega end-to-end de aplicaciones back-office: microservicios hexagonales, mensajería orientada a eventos y frontend.",
          },
          {
            en: "Cloud releases with CI/CD, monitoring and high-availability operations.",
            es: "Releases en cloud con CI/CD, monitorización y operaciones de alta disponibilidad.",
          },
          {
            en: "AI agents and process automation.",
            es: "Agentes de IA y automatización de procesos.",
          },
        ],
        technologies: [
          "java",
          "spring",
          "react",
          "kafka",
          "azure",
          "kubernetes",
          "docker",
          "linux",
          "postgresql",
        ],
      },
    ],
  },
  {
    id: "capgemini",
    company: "Capgemini",
    logo: "capgemini.svg",
    startYear: "2022",
    roles: [
      {
        role: { en: "DevOps Engineer", es: "DevOps Engineer" },
        client: "Roche Diagnostics",
        period: { en: "2023", es: "2023" },
        location: {
          en: "Sant Cugat del Vallès, Catalonia",
          es: "Sant Cugat del Vallès, Cataluña",
        },
        description: [
          {
            en: "Cloud infrastructure as code and CI/CD pipeline design for automated releases.",
            es: "Infraestructura cloud como código y diseño de pipelines CI/CD para releases automatizados.",
          },
          {
            en: "Container orchestration, image lifecycle and cluster management.",
            es: "Orquestación de contenedores, ciclo de vida de imágenes y gestión de clústeres.",
          },
          {
            en: "GitOps workflows, automated testing and SDLC best practices.",
            es: "Flujos GitOps, testing automatizado y buenas prácticas SDLC.",
          },
        ],
        technologies: [
          "go",
          "java",
          "aws",
          "kubernetes",
          "docker",
          "terraform",
          "linux",
          "githubactions",
        ],
      },
      {
        role: { en: "Back-end Engineer Lead", es: "Back-end Engineer Lead" },
        client: "Mercadona",
        period: { en: "2022", es: "2022" },
        location: {
          en: "Valencia, Spain",
          es: "Valencia, España",
        },
        description: [
          {
            en: "API-First microservices with hexagonal architecture on cloud infrastructure.",
            es: "Microservicios API-First con arquitectura hexagonal sobre infraestructura cloud.",
          },
          {
            en: "Full application lifecycle: feature development, quality, deployment and monitoring.",
            es: "Ciclo de vida completo de la aplicación: desarrollo de features, calidad, despliegue y monitorización.",
          },
        ],
        technologies: ["java", "spring", "gcp", "postgresql"],
      },
    ],
  },
  {
    id: "minsait",
    company: "Minsait (Grupo Indra)",
    logo: "minsait.svg",
    logoDark: true,
    roles: [
      {
        role: { en: "Full-stack Developer", es: "Desarrollador Full-stack" },
        client: "Enel Group",
        period: { en: "2020", es: "2020" },
        location: {
          en: "Málaga, Andalusia",
          es: "Málaga, Andalucía",
        },
        description: [
          {
            en: "Cloud infrastructure, event-driven microservices and ETL pipeline migration.",
            es: "Infraestructura cloud, microservicios orientados a eventos y migración de pipelines ETL.",
          },
          {
            en: "REST API development, streaming messaging and frontend applications.",
            es: "Desarrollo de APIs REST, mensajería streaming y aplicaciones frontend.",
          },
        ],
        technologies: [
          "java",
          "spring",
          "angular",
          "aws",
          "kafka",
          "docker",
          "mongodb",
        ],
      },
    ],
  },
  {
    id: "konecta",
    company: "Konecta",
    logo: "konecta.svg",
    roles: [
      {
        role: { en: "Full-stack Developer", es: "Desarrollador Full-stack" },
        period: { en: "2019", es: "2019" },
        location: {
          en: "Seville, Andalusia",
          es: "Sevilla, Andalucía",
        },
        description: [
          {
            en: "On-premise ETL pipelines, automation and data visualization for telecom back-office systems.",
            es: "Pipelines ETL on-premise, automatización y visualización de datos para sistemas back-office de telecomunicaciones.",
          },
          {
            en: "Data-collecting bots, web applications and custom reporting.",
            es: "Bots de recolección de datos, aplicaciones web e informes personalizados.",
          },
        ],
        technologies: ["java", "spring", "jquery", "javascript", "oracle"],
      },
    ],
  },
  {
    id: "everis",
    company: "NTT Data",
    logo: "nttdata.svg",
    roles: [
      {
        role: { en: "Web Developer", es: "Desarrollador Web" },
        period: { en: "2018", es: "2018" },
        location: {
          en: "Seville, Andalusia",
          es: "Sevilla, Andalucía",
        },
        description: [
          {
            en: "Development of frontend and REST API services for a web portal on Drupal.",
            es: "Desarrollo de frontend y servicios REST API para un portal web sobre Drupal.",
          },
        ],
        technologies: ["jquery", "angular", "spring", "java", "oracle"],
      },
    ],
  },
];
