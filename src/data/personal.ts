export type Localized = { en: string; es: string };

export interface PersonalInfo {
  name: string;
  role: Localized;
  location: string;
  /** ISO date (YYYY-MM-DD) used to compute years of experience dynamically. */
  careerStartDate: string;
  /** Use "{years}" as a placeholder for the computed years of experience. */
  tagline: Localized;
  email: string;
  github: string;
  linkedin: string;
  credly: string;
}

export const personal: PersonalInfo = {
  name: "Diego Rodríguez Fernández",
  role: {
    en: "Software Engineer",
    es: "Software Engineer",
  },
  location: "Málaga, Spain",
  careerStartDate: "2018-06-01",
  tagline: {
    en: "+{years} years of experience. I lead the end-to-end design of cloud-native applications: architecture, development, deployment, operation, and observability. Specialized in Java, Go, and AWS, with a focus on microservices architectures.",
    es: "+{years} años de experiencia. Lidero el diseño de aplicaciones cloud-native end-to-end: arquitectura, desarrollo, despliegue, operación y observabilidad. Especializado en Java, Go y AWS, con foco en arquitecturas de microservicios.",
  },
  email: "dierodfer6@gmail.com",
  github: "https://github.com/dierodfer",
  linkedin: "https://www.linkedin.com/in/diegorodfer",
  credly: "https://www.credly.com/users/diego-rod/badges",
};
