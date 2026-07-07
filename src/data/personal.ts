export type Localized = { en: string; es: string };

export interface PersonalInfo {
  name: string;
  role: Localized;
  location: string;
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
  tagline: {
    en: "+8 years of experience. I lead the end-to-end design of cloud-native applications: architecture, development, deployment, operation, and observability. Specialized in Java, Go, and AWS, with a focus on microservices architectures.",
    es: "+8 años de experiencia. Lidero el diseño de aplicaciones cloud-native end-to-end: arquitectura, desarrollo, despliegue, operación y observabilidad. Especializado en Java, Go y AWS, con foco en arquitecturas de microservicios.",
  },
  email: "dierodfer6@gmail.com",
  github: "https://github.com/dierodfer",
  linkedin: "https://www.linkedin.com/in/diegorodfer",
  credly: "https://www.credly.com/users/diego-rod/badges",
};
