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
            en: "Technical lead of internal applications, driving architecture and delivery.",
            es: "Lead técnico de aplicaciones internas, dirigiendo arquitectura y entrega.",
          },
          {
            en: "API-first design and development of hexagonal microservices on Azure (AKS).",
            es: "Diseño API-first y desarrollo de microservicios hexagonales en Azure (AKS).",
          },
          {
            en: "REST APIs, BFFs and frontend applications.",
            es: "APIs REST, BFFs y aplicaciones frontend.",
          },
          {
            en: "Deployment, versioning and releases on Kubernetes (AKS), with monitoring, observability and incident resolution ensuring high availability.",
            es: "Despliegue, versionado y releases en Kubernetes (AKS), con monitorización, observabilidad y resolución de incidencias garantizando alta disponibilidad.",
          },
          {
            en: "Event streaming architecture and AI-assisted development (Claude Code, Codex).",
            es: "Arquitectura de streaming de eventos y desarrollo asistido por IA (Claude Code, Codex).",
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
            en: "Architecture, development and quality squad on an agile project.",
            es: "Squad de arquitectura, desarrollo y calidad en un proyecto ágil.",
          },
          {
            en: "Cloud infrastructure using IaC and CI/CD pipeline design for automated releases.",
            es: "Infraestructura cloud con IaC y diseño de pipelines CI/CD para releases automatizados.",
          },
          {
            en: "Artifact and image management, automated testing, and SDLC GitOps best practices.",
            es: "Gestión de artefactos e imágenes, testing automatizado y buenas prácticas SDLC GitOps.",
          },
          {
            en: "Container orchestration, development and cluster management.",
            es: "Orquestación de contenedores, desarrollo y gestión de clústeres.",
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
            en: "Feature development squad following API-First, OpenAPI and Hexagonal Architecture.",
            es: "Squad de desarrollo de features siguiendo API-First, OpenAPI y arquitectura hexagonal.",
          },
          {
            en: "Cloud infrastructure, design and development of APIs and microservices.",
            es: "Infraestructura cloud, diseño y desarrollo de APIs y microservicios.",
          },
          {
            en: "Application SDLC: new features, quality, deployment and monitoring.",
            es: "SDLC de la aplicación: nuevas features, calidad, despliegue y monitorización.",
          },
        ],
        technologies: ["java", "spring", "gcp"],
      },
    ],
  },
  {
    id: "minsait",
    company: "Minsait",
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
            en: "Development squad on an international team and agile project.",
            es: "Squad de desarrollo en un equipo internacional y proyecto ágil.",
          },
          {
            en: "Cloud infrastructure and design of microservice workflows with event-driven architecture.",
            es: "Infraestructura cloud y diseño de flujos de microservicios con arquitectura orientada a eventos.",
          },
          {
            en: "Implementation and design of ETLs (on-premise to cloud).",
            es: "Implementación y diseño de ETLs (on-premise a cloud).",
          },
          {
            en: "Event streaming consumers/producers, APIs and micro-frontends.",
            es: "Consumers/producers de streaming de eventos, APIs y micro-frontends.",
          },
        ],
        technologies: ["java", "spring", "angular", "aws", "kafka"],
      },
    ],
  },
  {
    id: "konecta",
    company: "Konecta Corporativa",
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
            en: "Telecommunication companies: on-premise ETL implementations, automation, monitoring and data visualization for back-office applications.",
            es: "Empresas de telecomunicaciones: implementaciones ETL on-premise, automatización, monitorización y visualización de datos para aplicaciones de back-office.",
          },
          {
            en: "Development of data-collecting robots and web applications.",
            es: "Desarrollo de robots de recolección de datos y aplicaciones web.",
          },
          {
            en: "Generation of custom reports.",
            es: "Generación de informes personalizados.",
          },
        ],
        technologies: ["java", "spring", "jquery", "javascript"],
      },
    ],
  },
  {
    id: "everis",
    company: "everis",
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
        technologies: ["jquery", "angular", "spring", "java"],
      },
    ],
  },
];
