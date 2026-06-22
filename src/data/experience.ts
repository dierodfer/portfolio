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
  roles: ExperienceRole[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "nunegal",
    company: "Nunegal Consulting",
    roles: [
      {
        role: { en: "Technical Lead", es: "Technical Lead" },
        client: "Inditex tech",
        period: { en: "Nov 2025 — Present", es: "Nov 2025 — Actualidad" },
        location: { en: "A Coruña · Remote", es: "A Coruña · Remoto" },
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
          "postgresql",
        ],
      },
    ],
  },
  {
    id: "capgemini",
    company: "Capgemini",
    roles: [
      {
        role: { en: "DevOps Engineer", es: "DevOps Engineer" },
        client: "Roche Diagnostics",
        period: { en: "Jan 2023 — Nov 2025", es: "Ene 2023 — Nov 2025" },
        location: {
          en: "Sant Cugat del Vallès, Catalonia · Remote",
          es: "Sant Cugat del Vallès, Cataluña · Remoto",
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
          "git",
        ],
      },
      {
        role: { en: "Back-end Engineer Lead", es: "Back-end Engineer Lead" },
        client: "Mercadona",
        period: { en: "Feb 2022 — Jan 2023", es: "Feb 2022 — Ene 2023" },
        location: {
          en: "Valencia · Spain",
          es: "Valencia · España",
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
        technologies: ["java", "spring", "gcp"],
      },
    ],
  },
  {
    id: "minsait",
    company: "Minsait (Grupo Indra)",
    roles: [
      {
        role: { en: "Full-stack Developer", es: "Desarrollador Full-stack" },
        client: "Enel Group",
        period: { en: "Sep 2020 — Feb 2022", es: "Sep 2020 — Feb 2022" },
        location: {
          en: "Málaga, Andalusia · Remote",
          es: "Málaga, Andalucía · Remoto",
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
        technologies: ["java", "spring", "angular", "aws", "kafka", "mongodb"],
      },
    ],
  },
  {
    id: "konecta",
    company: "Konecta",
    roles: [
      {
        role: { en: "Full-stack Developer", es: "Desarrollador Full-stack" },
        period: { en: "Apr 2019 — Sep 2020", es: "Abr 2019 — Sep 2020" },
        location: {
          en: "Seville, Andalusia · Hybrid",
          es: "Sevilla, Andalucía · Híbrido",
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
    roles: [
      {
        role: { en: "Web Developer", es: "Desarrollador Web" },
        period: { en: "Aug 2018 — Jan 2019", es: "Ago 2018 — Ene 2019" },
        location: {
          en: "Seville, Andalusia · On-site",
          es: "Sevilla, Andalucía · Presencial",
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
