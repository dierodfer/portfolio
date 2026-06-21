import type { Localized } from "./personal";

export interface ExperienceEntry {
  id: string;
  company: string;
  client?: string; // end client, when working through a consultancy
  role: Localized;
  period: Localized; // fully localized so month names translate correctly
  location: Localized;
  description: Localized[];
  technologies: string[]; // tech ids, cross-referenced with technologies.ts
}

export const experience: ExperienceEntry[] = [
  {
    id: "nunegal",
    company: "Nunegal Consulting",
    client: "Inditex tech",
    role: { en: "Technical Lead", es: "Technical Lead" },
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
        en: "Event streaming with Kafka and AI-assisted development (Claude Code, Codex).",
        es: "Streaming de eventos con Kafka y desarrollo asistido por IA (Claude Code, Codex).",
      },
    ],
    technologies: ["java", "spring", "azure", "kubernetes", "kafka", "typescript"],
  },
  {
    id: "capgemini-roche",
    company: "Capgemini",
    client: "Roche Diagnostics",
    role: { en: "DevOps Engineer", es: "DevOps Engineer" },
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
        en: "AWS infrastructure using IaC (Terraform) and CI/CD release design (GitHub Actions).",
        es: "Infraestructura AWS con IaC (Terraform) y diseño de releases CI/CD (GitHub Actions).",
      },
      {
        en: "Artifact and image management, automated testing, and SDLC GitOps best practices.",
        es: "Gestión de artefactos e imágenes, testing automatizado y buenas prácticas SDLC GitOps.",
      },
      {
        en: "Kubernetes development and management.",
        es: "Desarrollo y gestión de Kubernetes.",
      },
    ],
    technologies: ["aws", "terraform", "githubactions", "kubernetes", "docker", "git"],
  },
  {
    id: "capgemini-mercadona",
    company: "Capgemini",
    client: "Mercadona",
    role: { en: "Back-end Engineer Lead", es: "Back-end Engineer Lead" },
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
        en: "Google Cloud infrastructure, design and development of APIs and microservices.",
        es: "Infraestructura Google Cloud, diseño y desarrollo de APIs y microservicios.",
      },
      {
        en: "Application SDLC: new features, quality, deployment and monitoring.",
        es: "SDLC de la aplicación: nuevas features, calidad, despliegue y monitorización.",
      },
    ],
    technologies: ["java", "spring", "gcp"],
  },
  {
    id: "minsait",
    company: "Minsait",
    client: "Enel Group",
    role: { en: "Full-stack Developer", es: "Desarrollador Full-stack" },
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
        en: "AWS infrastructure and design of microservice workflows with event-driven architecture.",
        es: "Infraestructura AWS y diseño de flujos de microservicios con arquitectura orientada a eventos.",
      },
      {
        en: "Implementation and design of ETLs (on-premise to cloud).",
        es: "Implementación y diseño de ETLs (on-premise a cloud).",
      },
      {
        en: "Development of Kafka consumers/producers, APIs and micro-frontends.",
        es: "Desarrollo de consumers/producers de Kafka, APIs y micro-frontends.",
      },
    ],
    technologies: ["aws", "java", "kafka", "javascript"],
  },
  {
    id: "konecta",
    company: "Konecta Corporativa",
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
    technologies: ["jquery", "javascript", "java"],
  },
  {
    id: "everis",
    company: "everis",
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
    technologies: ["jquery", "angular", "javascript", "css"],
  },
];
